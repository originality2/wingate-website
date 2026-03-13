import { useState, useEffect } from 'react';
import { fetchEntries } from '../lib/contentful';

/**
 * Generic hook for fetching a list of Contentful entries.
 * Falls back to `fallbackData` when the CMS is not configured.
 */
export function useContentfulEntries(contentType, fallbackData = []) {
  const [state, setState] = useState({ data: fallbackData, loading: true, error: null });

  useEffect(() => {
    let cancelled = false;

    fetchEntries(contentType)
      .then((items) => {
        if (!cancelled) {
          setState({
            data: items.length > 0 ? items : fallbackData,
            loading: false,
            error: null,
          });
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setState({ data: fallbackData, loading: false, error: err });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [contentType]); // eslint-disable-line react-hooks/exhaustive-deps

  return state;
}
