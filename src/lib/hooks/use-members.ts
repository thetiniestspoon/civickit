import { useState, useEffect, useCallback } from 'react';
import { getMembers, getMembersByState, getMemberDetail, type CongressMember } from '@/lib/api/congress';

export function useMembers(stateCode?: string) {
  const [members, setMembers] = useState<CongressMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLive, setIsLive] = useState(false);

  const fetchMembers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = stateCode
        ? await getMembersByState(stateCode)
        : await getMembers(119, 50);
      setMembers(data);
      setIsLive(data.length > 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load members');
      // Fall back to demo data
      const { demoRepresentatives } = await import('@/data/civiclens/demo-representatives');
      const mapped = demoRepresentatives.map(r => ({
        bioguideId: r.id,
        name: r.name,
        state: r.state,
        district: r.district ? parseInt(r.district) : undefined,
        partyName: r.party === 'D' ? 'Democratic' : r.party === 'R' ? 'Republican' : r.party,
        chamber: r.chamber,
        url: '',
      })) as CongressMember[];
      setMembers(mapped);
    } finally {
      setLoading(false);
    }
  }, [stateCode]);

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

  return { members, loading, error, isLive, refetch: fetchMembers };
}

export function useMemberDetail(bioguideId: string) {
  const [member, setMember] = useState<Awaited<ReturnType<typeof getMemberDetail>>>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!bioguideId) return;

    async function fetch() {
      setLoading(true);
      try {
        const data = await getMemberDetail(bioguideId);
        setMember(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load member');
      } finally {
        setLoading(false);
      }
    }

    fetch();
  }, [bioguideId]);

  return { member, loading, error };
}
