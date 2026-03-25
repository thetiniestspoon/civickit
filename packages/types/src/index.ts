// ── Core geographic types ──
export interface GeoLocation {
  lat: number;
  lng: number;
  address: string;
  city: string;
  state: string;
  zip: string;
}

export interface District {
  id: string;
  name: string;
  type: 'federal' | 'state' | 'local';
  state: string;
  number?: string;
}

// ── Representative types ──
export interface Representative {
  id: string;
  name: string;
  title: string;
  party: string;
  state: string;
  district?: string;
  chamber: 'senate' | 'house' | 'state_senate' | 'state_house' | 'local';
  photoUrl?: string;
  website?: string;
  phone?: string;
  email?: string;
}

// ── Election types ──
export interface Election {
  id: string;
  name: string;
  date: string;
  type: 'general' | 'primary' | 'special' | 'runoff' | 'local';
  state?: string;
}

export interface BallotRace {
  id: string;
  electionId: string;
  office: string;
  description: string;
  level: 'federal' | 'state' | 'local';
  candidates: Candidate[];
  district?: string;
}

export interface Candidate {
  id: string;
  name: string;
  party: string;
  incumbent: boolean;
  website?: string;
  photoUrl?: string;
  platform: string[];
}

export interface BallotMeasure {
  id: string;
  electionId: string;
  title: string;
  description: string;
  fullText: string;
  yesVoteMeans: string;
  noVoteMeans: string;
  supporters: string[];
  opponents: string[];
  source: DataSource;
}

// ── Legislation types ──
export interface Legislation {
  id: string;
  title: string;
  summary: string;
  plainLanguageSummary: string;
  status: 'introduced' | 'in_committee' | 'passed_one' | 'passed_both' | 'signed' | 'vetoed';
  introducedDate: string;
  lastActionDate: string;
  sponsors: string[];
  chamber: 'senate' | 'house';
  topics: string[];
  source: DataSource;
}

export interface PolicyChange {
  id: string;
  title: string;
  summary: string;
  plainLanguageSummary: string;
  type: 'executive_order' | 'rule_change' | 'court_ruling' | 'legislation';
  effectiveDate: string;
  affectedTopics: string[];
  source: DataSource;
}

export interface CongressionalVote {
  id: string;
  legislationId: string;
  date: string;
  chamber: 'senate' | 'house';
  result: 'passed' | 'failed';
  yeas: number;
  nays: number;
  notVoting: number;
  memberVotes: MemberVote[];
}

export interface MemberVote {
  representativeId: string;
  vote: 'yea' | 'nay' | 'not_voting' | 'present';
}

// ── Campaign finance types ──
export interface CampaignFinance {
  representativeId: string;
  cycle: string;
  totalRaised: number;
  totalSpent: number;
  cashOnHand: number;
  topDonors: Donor[];
  source: DataSource;
}

export interface Donor {
  name: string;
  amount: number;
  type: 'individual' | 'pac' | 'party' | 'self';
}

// ── Promise Tracker types ──
export interface CampaignPromise {
  id: string;
  representativeId: string;
  statement: string;
  category: string;
  madeDate: string;
  sourceUrl: string;
  status: 'kept' | 'broken' | 'in_progress' | 'no_action';
  statusEvidence: string;
  statusSourceUrl?: string;
  lastReviewedDate: string;
}

// ── Rights types ──
export interface RightsGuide {
  id: string;
  domain: 'workplace' | 'housing' | 'immigration' | 'healthcare' | 'police' | 'protest';
  title: string;
  summary: string;
  jurisdiction: string;
  sections: RightsSection[];
  lastUpdated: string;
  source: DataSource;
  languages: string[];
}

export interface RightsSection {
  title: string;
  content: string;
  source: DataSource;
}

export interface ProcessWorkflow {
  id: string;
  title: string;
  description: string;
  domain: string;
  totalSteps: number;
  steps: ProcessStep[];
  documents: string[];
  deadlines: WorkflowDeadline[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  whatToExpect: string;
  tips: string[];
}

export interface WorkflowDeadline {
  description: string;
  daysFromStart?: number;
  fixedDate?: string;
}

// ── Mutual Aid types ──
export interface CommunityResource {
  id: string;
  name: string;
  type: ResourceType;
  description: string;
  location: GeoLocation;
  hours: string;
  eligibility: string;
  languagesSpoken: string[];
  accessibility: string[];
  whatToBring: string;
  whatToExpect: string;
  warmHandoffNotes: string;
  phone?: string;
  website?: string;
  verifiedBy: 'community' | 'org' | '211';
  lastVerified: string;
  source: '211_org' | 'community' | 'org_claimed';
}

export type ResourceType =
  | 'food'
  | 'shelter'
  | 'legal_aid'
  | 'clothing'
  | 'transportation'
  | 'childcare'
  | 'medical'
  | 'mental_health'
  | 'employment'
  | 'other';

export interface VolunteerShift {
  id: string;
  orgId: string;
  orgName: string;
  title: string;
  description: string;
  location: GeoLocation;
  startTime: string;
  endTime: string;
  slotsTotal: number;
  slotsFilled: number;
  skillsPreferred: string[];
}

// ── PressAgent types ──
export interface ProcessedDocument {
  id: string;
  title: string;
  uploadDate: string;
  pageCount: number;
  summary: string;
  sections: DocumentSection[];
  keyEntities: ExtractedEntity[];
  keyDates: string[];
  keyAmounts: string[];
}

export interface DocumentSection {
  title: string;
  content: string;
  pageNumber: number;
}

export interface ExtractedEntity {
  name: string;
  type: 'person' | 'organization' | 'location' | 'amount' | 'date';
  mentions: number;
}

export interface StoryLead {
  id: string;
  headline: string;
  summary: string;
  beat: string;
  source: string;
  sourceUrl: string;
  detectedDate: string;
  relevanceScore: number;
  type: 'legislation' | 'court_filing' | 'campaign_finance' | 'contract' | 'meeting' | 'policy_change';
}

// ── Shared utility types ──
export interface DataSource {
  name: string;
  url: string;
  retrievedDate: string;
}

export interface UserPreferences {
  address?: GeoLocation;
  subscribedTopics: string[];
  subscribedRepresentatives: string[];
  digestFrequency: 'daily' | 'weekly' | 'none';
  language: string;
}

export type AccessLevel = 'anonymous' | 'individual' | 'organization';
