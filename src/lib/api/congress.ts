/**
 * Congress.gov API v3 Client
 * https://api.congress.gov/v3
 *
 * Uses api.data.gov API key (free, rate-limited).
 * DEMO_KEY works for development (30 req/hr).
 * Get a real key at: https://api.data.gov/signup/
 */

const BASE_URL = 'https://api.congress.gov/v3';
const API_KEY = process.env.NEXT_PUBLIC_CONGRESS_API_KEY || 'DEMO_KEY';

// Simple in-memory cache for client-side
const cache = new Map<string, { data: unknown; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

interface CongressApiOptions {
  limit?: number;
  offset?: number;
  sort?: string;
}

async function fetchCongress<T>(
  path: string,
  options: CongressApiOptions = {}
): Promise<T> {
  const params = new URLSearchParams({
    api_key: API_KEY,
    format: 'json',
    ...(options.limit ? { limit: String(options.limit) } : {}),
    ...(options.offset ? { offset: String(options.offset) } : {}),
    ...(options.sort ? { sort: options.sort } : {}),
  });

  const url = `${BASE_URL}${path}?${params}`;

  // Check cache
  const cached = cache.get(url);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data as T;
  }

  const response = await fetch(url);
  if (!response.ok) {
    if (response.status === 429) {
      throw new Error('Rate limited by Congress.gov API. Please try again later.');
    }
    throw new Error(`Congress.gov API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  // Cache the result
  cache.set(url, { data, timestamp: Date.now() });

  return data as T;
}

// --- Bill Types ---

export interface CongressBill {
  congress: number;
  type: string;
  number: number;
  title: string;
  originChamber: string;
  originChamberCode: string;
  latestAction: {
    actionDate: string;
    text: string;
  };
  updateDate: string;
  url: string;
  policyArea?: {
    name: string;
  };
}

interface BillsResponse {
  bills: CongressBill[];
  pagination: {
    count: number;
    next?: string;
  };
}

interface BillDetailResponse {
  bill: CongressBill & {
    sponsors: Array<{
      bioguideId: string;
      firstName: string;
      lastName: string;
      party: string;
      state: string;
    }>;
    cosponsors: { count: number };
    subjects?: {
      legislativeSubjects: Array<{ name: string }>;
      policyArea?: { name: string };
    };
    summaries?: {
      url: string;
    };
    textVersions?: {
      url: string;
    };
    actions?: {
      url: string;
    };
  };
}

interface BillSummariesResponse {
  summaries: Array<{
    text: string;
    actionDate: string;
    versionCode: string;
  }>;
}

// --- Member Types ---

export interface CongressMember {
  bioguideId: string;
  name: string;
  firstName?: string;
  lastName?: string;
  state: string;
  district?: number;
  partyName: string;
  chamber?: string;
  terms?: {
    item: Array<{
      chamber: string;
      startYear: number;
      endYear?: number;
    }>;
  };
  depiction?: {
    imageUrl: string;
    attribution: string;
  };
  url: string;
}

interface MembersResponse {
  members: CongressMember[];
  pagination: {
    count: number;
    next?: string;
  };
}

interface MemberDetailResponse {
  member: CongressMember & {
    officialWebsiteUrl?: string;
    directOrderName?: string;
    invertedOrderName?: string;
    currentMember?: boolean;
    sponsoredLegislation?: { url: string; count: number };
    cosponsoredLegislation?: { url: string; count: number };
  };
}

// --- API Functions ---

/**
 * Fetch recent bills from Congress
 */
export async function getRecentBills(
  congress: number = 119,
  limit: number = 20
): Promise<CongressBill[]> {
  const data = await fetchCongress<BillsResponse>(
    `/bill/${congress}`,
    { limit, sort: 'updateDate+desc' }
  );
  return data.bills ?? [];
}

/**
 * Search bills by keyword
 */
export async function searchBills(
  query: string,
  congress: number = 119,
  limit: number = 20
): Promise<CongressBill[]> {
  // Congress.gov API doesn't have a direct search endpoint for bills
  // We use the bill listing and filter client-side, or use the search endpoint
  const data = await fetchCongress<BillsResponse>(
    `/bill/${congress}`,
    { limit, sort: 'updateDate+desc' }
  );

  const q = query.toLowerCase();
  return (data.bills ?? []).filter(
    b => b.title?.toLowerCase().includes(q) ||
         b.policyArea?.name?.toLowerCase().includes(q)
  );
}

/**
 * Get bill details including sponsors and summary
 */
export async function getBillDetail(
  congress: number,
  type: string,
  number: number
): Promise<BillDetailResponse['bill'] | null> {
  try {
    const data = await fetchCongress<BillDetailResponse>(
      `/bill/${congress}/${type.toLowerCase()}/${number}`
    );
    return data.bill ?? null;
  } catch {
    return null;
  }
}

/**
 * Get bill summaries
 */
export async function getBillSummaries(
  congress: number,
  type: string,
  number: number
): Promise<string | null> {
  try {
    const data = await fetchCongress<BillSummariesResponse>(
      `/bill/${congress}/${type.toLowerCase()}/${number}/summaries`
    );
    // Return the most recent summary
    const summaries = data.summaries ?? [];
    if (summaries.length === 0) return null;
    // Strip HTML tags for plain text
    return summaries[0].text.replace(/<[^>]*>/g, '');
  } catch {
    return null;
  }
}

/**
 * Get current members of Congress
 */
export async function getMembers(
  congress: number = 119,
  limit: number = 50
): Promise<CongressMember[]> {
  const data = await fetchCongress<MembersResponse>(
    `/member/congress/${congress}`,
    { limit }
  );
  return data.members ?? [];
}

/**
 * Get members by state
 */
export async function getMembersByState(
  stateCode: string,
  congress: number = 119
): Promise<CongressMember[]> {
  const data = await fetchCongress<MembersResponse>(
    `/member/congress/${congress}/${stateCode.toUpperCase()}`,
    { limit: 50 }
  );
  return data.members ?? [];
}

/**
 * Get member detail
 */
export async function getMemberDetail(
  bioguideId: string
): Promise<MemberDetailResponse['member'] | null> {
  try {
    const data = await fetchCongress<MemberDetailResponse>(
      `/member/${bioguideId}`
    );
    return data.member ?? null;
  } catch {
    return null;
  }
}

/**
 * Get sponsored legislation for a member
 */
export async function getMemberBills(
  bioguideId: string,
  congress: number = 119,
  limit: number = 20
): Promise<CongressBill[]> {
  try {
    const data = await fetchCongress<{ sponsoredLegislation: CongressBill[] }>(
      `/member/${bioguideId}/sponsored-legislation`,
      { limit }
    );
    return data.sponsoredLegislation ?? [];
  } catch {
    return [];
  }
}

// --- Transformation Helpers ---

import type { FeedItem } from '@/data/civiclens/demo-feed';

/**
 * Map Congress.gov bill status to our status codes
 */
function mapBillStatus(latestAction: string): string {
  const action = latestAction.toLowerCase();
  if (action.includes('became public law') || action.includes('signed by president')) return 'signed';
  if (action.includes('passed senate') && action.includes('passed house')) return 'passed_both';
  if (action.includes('passed') || action.includes('agreed to')) return 'passed_one';
  if (action.includes('committee')) return 'in_committee';
  if (action.includes('introduced') || action.includes('referred')) return 'introduced';
  return 'introduced';
}

/**
 * Map Congress.gov bill type code to display name
 */
function mapBillType(type: string): string {
  const types: Record<string, string> = {
    hr: 'H.R.',
    s: 'S.',
    hjres: 'H.J.Res.',
    sjres: 'S.J.Res.',
    hconres: 'H.Con.Res.',
    sconres: 'S.Con.Res.',
    hres: 'H.Res.',
    sres: 'S.Res.',
  };
  return types[type.toLowerCase()] ?? type.toUpperCase();
}

/**
 * Transform a Congress.gov bill into a CivicLens FeedItem
 */
export function billToFeedItem(bill: CongressBill): FeedItem {
  return {
    id: `bill-${bill.congress}-${bill.type}-${bill.number}`,
    type: 'legislation',
    title: `${mapBillType(bill.type)} ${bill.number} — ${bill.title}`,
    summary: bill.latestAction?.text ?? 'No summary available.',
    plainLanguageSummary: '', // Will be populated by summaries API or AI
    chamber: bill.originChamber ?? 'Congress',
    date: formatDate(bill.latestAction?.actionDate ?? bill.updateDate),
    status: mapBillStatus(bill.latestAction?.text ?? ''),
    topics: bill.policyArea ? [bill.policyArea.name] : [],
    sourceName: 'Congress.gov',
    sourceUrl: `https://www.congress.gov/bill/${bill.congress}th-congress/${bill.originChamberCode === 'H' ? 'house' : 'senate'}-bill/${bill.number}`,
  };
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

/**
 * Fetch real legislation feed with summaries, falling back to demo data on error
 */
export async function getLegislationFeed(limit: number = 20): Promise<FeedItem[]> {
  try {
    const bills = await getRecentBills(119, limit);
    const feedItems = bills.map(billToFeedItem);

    // Enrich top 5 bills with real summaries (rate-limit friendly)
    const enrichPromises = bills.slice(0, 5).map(async (bill, i) => {
      try {
        const summary = await getBillSummaries(bill.congress, bill.type, bill.number);
        if (summary) {
          feedItems[i].plainLanguageSummary = summary;
        }
      } catch {
        // Skip summary enrichment on failure
      }
    });

    await Promise.allSettled(enrichPromises);
    return feedItems;
  } catch (error) {
    console.warn('Failed to fetch from Congress.gov, using demo data:', error);
    const { demoFeed } = await import('@/data/civiclens/demo-feed');
    return demoFeed;
  }
}
