import { useState, useEffect, useCallback } from 'react';
import { getLegislationFeed, searchBills, billToFeedItem } from '@/lib/api/congress';
import type { FeedItem } from '@/data/civiclens/demo-feed';

export function useLegislationFeed() {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLive, setIsLive] = useState(false);

  const fetchFeed = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const feed = await getLegislationFeed(20);
      setItems(feed);
      // Check if we got real data (not demo)
      setIsLive(!feed[0]?.id.startsWith('leg-'));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFeed();
  }, [fetchFeed]);

  const search = useCallback(async (query: string) => {
    if (!query.trim()) {
      fetchFeed();
      return;
    }
    setLoading(true);
    try {
      const results = await searchBills(query);
      setItems(results.map(billToFeedItem));
    } catch {
      // On search failure, filter existing items client-side
      setItems(prev => {
        const q = query.toLowerCase();
        return prev.filter(
          item =>
            item.title.toLowerCase().includes(q) ||
            item.summary.toLowerCase().includes(q) ||
            item.topics.some(t => t.toLowerCase().includes(q))
        );
      });
    } finally {
      setLoading(false);
    }
  }, [fetchFeed]);

  return { items, loading, error, isLive, search, refetch: fetchFeed };
}
