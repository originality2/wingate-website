import { createClient } from 'contentful';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

/**
 * Returns a Contentful client if credentials are configured,
 * otherwise returns null (the app will fall back to mock data).
 */
export function getClient() {
  if (!spaceId || !accessToken) {
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
    return response.items;
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
    return await client.getEntry(entryId);
  } catch (err) {
    console.warn(`Contentful fetch failed for entry "${entryId}":`, err.message);
    return null;
  }
}
