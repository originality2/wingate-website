import { createClient } from "contentful";

type ContentfulQueryOptions = Record<string, unknown>;

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function getCredentials() {
  return {
    spaceId: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  };
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export function normalizeContentfulValue(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(normalizeContentfulValue);
  }

  if (!isPlainObject(value)) {
    return value;
  }

  if (isPlainObject(value.fields)) {
    const normalizedFields = normalizeContentfulValue(value.fields) as Record<
      string,
      unknown
    >;
    const normalizedSys = isPlainObject(value.sys)
      ? (normalizeContentfulValue(value.sys) as Record<string, unknown>)
      : value.sys;

    return {
      ...(isPlainObject(normalizedSys) && typeof normalizedSys.id === "string"
        ? { id: normalizedSys.id }
        : {}),
      ...normalizedFields,
      ...(normalizedSys ? { sys: normalizedSys } : {}),
    };
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, nestedValue]) => {
      if (
        key === "url" &&
        typeof nestedValue === "string" &&
        nestedValue.startsWith("//")
      ) {
        return [key, `https:${nestedValue}`];
      }

      return [key, normalizeContentfulValue(nestedValue)];
    }),
  );
}

/**
 * Returns a Contentful client if credentials are configured,
 * otherwise returns null (the app will fall back to mock data).
 */
export function getClient() {
  const { spaceId, accessToken } = getCredentials();

  if (!spaceId || !accessToken) {
    console.warn(
      "Contentful credentials are not configured. Falling back to mock data. " +
        "Set VITE_CONTENTFUL_SPACE_ID and VITE_CONTENTFUL_ACCESS_TOKEN in your .env file to enable CMS content.",
    );
    return null;
  }
  return createClient({ space: spaceId, accessToken });
}

/**
 * Fetch all entries of a given content type.
 * Returns [] when CMS is not configured.
 */
export async function fetchEntries(
  contentType: string,
  options: ContentfulQueryOptions = {},
): Promise<unknown[]> {
  const client = getClient();
  if (!client) return [];
  try {
    const response = await client.getEntries({
      content_type: contentType,
      ...options,
    });
    return normalizeContentfulValue(response.items) as unknown[];
  } catch (err) {
    console.warn(
      `Contentful fetch failed for "${contentType}":`,
      getErrorMessage(err),
    );
    return [];
  }
}
