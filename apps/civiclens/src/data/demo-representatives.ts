export interface RepVote {
  id: string;
  billTitle: string;
  billId: string;
  date: string;
  vote: 'yea' | 'nay' | 'not_voting';
  result: 'passed' | 'failed';
}

export interface DonorRecord {
  name: string;
  amount: number;
  type: 'individual' | 'pac' | 'party' | 'self';
}

export interface CampaignFinanceRecord {
  cycle: string;
  totalRaised: number;
  totalSpent: number;
  cashOnHand: number;
  topDonors: DonorRecord[];
  sourceName: string;
  sourceUrl: string;
}

export interface RepresentativeDetail {
  id: string;
  name: string;
  title: string;
  party: string;
  state: string;
  district?: string;
  chamber: string;
  website: string;
  phone: string;
  email: string;
  bio: string;
  committees: string[];
  votingRecord: RepVote[];
  campaignFinance: CampaignFinanceRecord;
}

export const demoRepresentatives: RepresentativeDetail[] = [
  {
    id: 'rep-001',
    name: 'Sen. Maria Castillo',
    title: 'U.S. Senator',
    party: 'Democratic',
    state: 'Colorado',
    chamber: 'Senate',
    website: 'https://castillo.senate.gov',
    phone: '(202) 555-0147',
    email: 'senator@castillo.senate.gov',
    bio: 'Maria Castillo has served as the junior senator from Colorado since January 2025. Previously, she served two terms in the Colorado State Senate and worked as a public interest attorney specializing in water rights and environmental law.',
    committees: [
      'Committee on Energy and Natural Resources',
      'Committee on Commerce, Science, and Transportation',
      'Committee on Health, Education, Labor, and Pensions',
    ],
    votingRecord: [
      { id: 'v-001', billTitle: 'CHIPS and Science Reauthorization Act', billId: 'S.1247', date: 'Mar 21, 2026', vote: 'yea', result: 'passed' },
      { id: 'v-002', billTitle: 'Confirm Secretary of Education Nominee', billId: 'PN-142', date: 'Mar 19, 2026', vote: 'yea', result: 'passed' },
      { id: 'v-003', billTitle: 'Cloture on Immigration Reform Package', billId: 'S.1891', date: 'Mar 15, 2026', vote: 'yea', result: 'passed' },
      { id: 'v-004', billTitle: 'FY2027 Defense Appropriations Act', billId: 'S.3012', date: 'Mar 10, 2026', vote: 'nay', result: 'passed' },
      { id: 'v-005', billTitle: 'Rural Broadband Expansion Act', billId: 'S.892', date: 'Mar 5, 2026', vote: 'yea', result: 'passed' },
      { id: 'v-006', billTitle: 'Federal Data Privacy Act', billId: 'S.567', date: 'Feb 28, 2026', vote: 'yea', result: 'failed' },
      { id: 'v-007', billTitle: 'Budget Resolution Amendment (SS Cuts)', billId: 'S.Amdt.14', date: 'Feb 20, 2026', vote: 'nay', result: 'failed' },
      { id: 'v-008', billTitle: 'Clean Water Infrastructure Modernization Act', billId: 'S.1583', date: 'Feb 15, 2026', vote: 'yea', result: 'passed' },
    ],
    campaignFinance: {
      cycle: '2024',
      totalRaised: 14_250_000,
      totalSpent: 12_800_000,
      cashOnHand: 1_450_000,
      topDonors: [
        { name: 'ActBlue (Small Dollar)', amount: 3_200_000, type: 'individual' },
        { name: 'League of Conservation Voters', amount: 450_000, type: 'pac' },
        { name: 'Democratic Senatorial Campaign Committee', amount: 380_000, type: 'party' },
        { name: 'EMILY\'s List', amount: 320_000, type: 'pac' },
        { name: 'American Federation of Teachers', amount: 275_000, type: 'pac' },
        { name: 'National Education Association', amount: 250_000, type: 'pac' },
        { name: 'Communications Workers of America', amount: 195_000, type: 'pac' },
      ],
      sourceName: 'OpenSecrets.org',
      sourceUrl: 'https://www.opensecrets.org',
    },
  },
  {
    id: 'rep-002',
    name: 'Rep. James Thornton',
    title: 'U.S. Representative (TX-22)',
    party: 'Republican',
    state: 'Texas',
    district: 'TX-22',
    chamber: 'House',
    website: 'https://thornton.house.gov',
    phone: '(202) 555-0283',
    email: 'rep.thornton@mail.house.gov',
    bio: 'James Thornton represents Texas\' 22nd Congressional District in the Houston suburbs. A former Army officer and small business owner, he was first elected in 2022 and is currently serving his second term.',
    committees: [
      'Committee on Armed Services',
      'Committee on Homeland Security',
      'Select Committee on the Climate Crisis',
    ],
    votingRecord: [
      { id: 'v-009', billTitle: 'National Infrastructure Resilience Act', billId: 'H.R.3891', date: 'Mar 20, 2026', vote: 'yea', result: 'passed' },
      { id: 'v-010', billTitle: 'NDAA Housing Allowance Amendment', billId: 'H.Amdt.47', date: 'Mar 17, 2026', vote: 'yea', result: 'passed' },
      { id: 'v-011', billTitle: 'Small Business Tax Relief and Innovation Act', billId: 'H.R.5210', date: 'Mar 14, 2026', vote: 'yea', result: 'passed' },
      { id: 'v-012', billTitle: 'Prescription Drug Pricing Transparency Act', billId: 'H.R.4102', date: 'Mar 10, 2026', vote: 'nay', result: 'failed' },
      { id: 'v-013', billTitle: 'Student Loan Forgiveness for Public Servants Act', billId: 'H.R.2756', date: 'Mar 8, 2026', vote: 'nay', result: 'failed' },
      { id: 'v-014', billTitle: 'Secure the Border Act', billId: 'H.R.2', date: 'Feb 25, 2026', vote: 'yea', result: 'passed' },
      { id: 'v-015', billTitle: 'FY2027 Omnibus Spending Bill', billId: 'H.R.4500', date: 'Feb 18, 2026', vote: 'yea', result: 'passed' },
      { id: 'v-016', billTitle: 'Constitutional Carry Reciprocity Act', billId: 'H.R.1120', date: 'Feb 10, 2026', vote: 'yea', result: 'passed' },
    ],
    campaignFinance: {
      cycle: '2024',
      totalRaised: 4_850_000,
      totalSpent: 4_200_000,
      cashOnHand: 650_000,
      topDonors: [
        { name: 'WinRed (Small Dollar)', amount: 1_100_000, type: 'individual' },
        { name: 'National Rifle Association PAC', amount: 185_000, type: 'pac' },
        { name: 'National Republican Congressional Committee', amount: 175_000, type: 'party' },
        { name: 'American Petroleum Institute PAC', amount: 150_000, type: 'pac' },
        { name: 'Koch Industries PAC', amount: 125_000, type: 'pac' },
        { name: 'National Association of Realtors PAC', amount: 110_000, type: 'pac' },
        { name: 'Lockheed Martin PAC', amount: 95_000, type: 'pac' },
      ],
      sourceName: 'OpenSecrets.org',
      sourceUrl: 'https://www.opensecrets.org',
    },
  },
  {
    id: 'rep-003',
    name: 'Sen. David Okafor',
    title: 'U.S. Senator',
    party: 'Democratic',
    state: 'Michigan',
    chamber: 'Senate',
    website: 'https://okafor.senate.gov',
    phone: '(202) 555-0391',
    email: 'senator@okafor.senate.gov',
    bio: 'David Okafor is the senior senator from Michigan, first elected in 2018. A former Detroit city councilmember and labor organizer, he has focused his tenure on manufacturing, clean water infrastructure, and EV industry development.',
    committees: [
      'Committee on Finance',
      'Committee on Environment and Public Works',
      'Committee on Banking, Housing, and Urban Affairs',
    ],
    votingRecord: [
      { id: 'v-017', billTitle: 'CHIPS and Science Reauthorization Act', billId: 'S.1247', date: 'Mar 21, 2026', vote: 'yea', result: 'passed' },
      { id: 'v-018', billTitle: 'Confirm Secretary of Education Nominee', billId: 'PN-142', date: 'Mar 19, 2026', vote: 'yea', result: 'passed' },
      { id: 'v-019', billTitle: 'Cloture on Immigration Reform Package', billId: 'S.1891', date: 'Mar 15, 2026', vote: 'yea', result: 'passed' },
      { id: 'v-020', billTitle: 'FY2027 Defense Appropriations Act', billId: 'S.3012', date: 'Mar 10, 2026', vote: 'yea', result: 'passed' },
      { id: 'v-021', billTitle: 'Clean Water Infrastructure Modernization Act', billId: 'S.1583', date: 'Feb 15, 2026', vote: 'yea', result: 'passed' },
      { id: 'v-022', billTitle: 'EV Manufacturing Tax Credit Extension', billId: 'S.2200', date: 'Feb 8, 2026', vote: 'yea', result: 'passed' },
      { id: 'v-023', billTitle: 'Federal Data Privacy Act', billId: 'S.567', date: 'Feb 28, 2026', vote: 'yea', result: 'failed' },
      { id: 'v-024', billTitle: 'Budget Resolution Amendment (SS Cuts)', billId: 'S.Amdt.14', date: 'Feb 20, 2026', vote: 'nay', result: 'failed' },
    ],
    campaignFinance: {
      cycle: '2024',
      totalRaised: 18_900_000,
      totalSpent: 17_100_000,
      cashOnHand: 1_800_000,
      topDonors: [
        { name: 'ActBlue (Small Dollar)', amount: 5_400_000, type: 'individual' },
        { name: 'United Auto Workers PAC', amount: 520_000, type: 'pac' },
        { name: 'Democratic Senatorial Campaign Committee', amount: 450_000, type: 'party' },
        { name: 'AFL-CIO PAC', amount: 380_000, type: 'pac' },
        { name: 'League of Conservation Voters', amount: 310_000, type: 'pac' },
        { name: 'ConocoPhillips PAC', amount: 28_000, type: 'pac' },
        { name: 'Marathon Petroleum PAC', amount: 19_000, type: 'pac' },
      ],
      sourceName: 'OpenSecrets.org',
      sourceUrl: 'https://www.opensecrets.org',
    },
  },
];
