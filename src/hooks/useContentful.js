import { useState, useEffect, useRef } from 'react';
import { fetchEntries, normalizeContentfulValue } from '../lib/contentful';

/**
 * Generic hook for fetching a list of Contentful entries.
 * Falls back to `fallbackData` when the CMS is not configured.
 *
 * `fallbackData` is captured in a ref so that passing a new array reference
 * on every render (e.g. an inline literal) does not trigger unnecessary
 * re-fetches while still keeping the latest value available inside the effect.
 */
export function useContentfulEntries(contentType, fallbackData = []) {
  // Keep the latest fallbackData available in the effect without adding it
  // to the dependency array (avoids re-fetching when an inline array is passed).
  const fallbackRef = useRef(normalizeContentfulValue(fallbackData));
  useEffect(() => {
    fallbackRef.current = normalizeContentfulValue(fallbackData);
  });

  // useState lazy initializer avoids reading the ref during the render phase.
  const [state, setState] = useState(() => ({
    data: normalizeContentfulValue(fallbackData),
    loading: true,
    error: null,
  }));

  useEffect(() => {
    let cancelled = false;

    fetchEntries(contentType)
      .then((items) => {
        if (!cancelled) {
          const expectsCollection = Array.isArray(fallbackRef.current);

          setState({
            data: expectsCollection
              ? (items.length > 0 ? items : fallbackRef.current)
              : (items[0] ?? fallbackRef.current),
            loading: false,
            error: null,
          });
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setState({ data: fallbackRef.current, loading: false, error: err });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [contentType]);

  return state;
}
