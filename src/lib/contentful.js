import { createClient } from 'contentful';

function getCredentials() {
  return {
    spaceId: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  };
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

export function normalizeContentfulValue(value) {
  if (Array.isArray(value)) {
    return value.map(normalizeContentfulValue);
  }

  if (!isPlainObject(value)) {
    return value;
  }

  if (isPlainObject(value.fields)) {
    const normalizedFields = normalizeContentfulValue(value.fields);
    const normalizedSys = isPlainObject(value.sys) ? normalizeContentfulValue(value.sys) : value.sys;

    return {
      ...(normalizedSys?.id ? { id: normalizedSys.id } : {}),
      ...normalizedFields,
      ...(normalizedSys ? { sys: normalizedSys } : {}),
    };
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, nestedValue]) => {
      if (key === 'url' && typeof nestedValue === 'string' && nestedValue.startsWith('//')) {
        return [key, `https:${nestedValue}`];
      }

      return [key, normalizeContentfulValue(nestedValue)];
    })
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
      'Contentful credentials are not configured. Falling back to mock data. ' +
        'Set VITE_CONTENTFUL_SPACE_ID and VITE_CONTENTFUL_ACCESS_TOKEN in your .env file to enable CMS content.'
    );
    return null;
  }
  return createClient({ space: spaceId, accessToken });
}

/**
 * Fetch all entries of a given content type.
 * Returns [] when CMS is not configured.
 */
export async function fetchEntries(contentType, options = {}) {
  const client = getClient();
  if (!client) return [];
  try {
    const response = await client.getEntries({ content_type: contentType, ...options });
    return normalizeContentfulValue(response.items);
  } catch (err) {
    console.warn(`Contentful fetch failed for "${contentType}":`, err.message);
    return [];
  }
}

/**
 * Fetch a single entry by its Contentful entry ID.
 * Returns null when CMS is not configured or the entry is not found.
 */
export async function fetchEntry(entryId) {
  const client = getClient();
  if (!client) return null;
  try {
    const entry = await client.getEntry(entryId);
    return normalizeContentfulValue(entry);
  } catch (err) {
    console.warn(`Contentful fetch failed for entry "${entryId}":`, err.message);
    return null;
  }
}
