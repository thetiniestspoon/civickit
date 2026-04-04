export interface PromiseRecord {
  id: string;
  representativeId: string;
  statement: string;
  category: string;
  madeDate: string;
  sourceUrl: string;
  status: 'kept' | 'broken' | 'in_progress' | 'no_action';
  statusEvidence: string;
}

export interface RepPromiseProfile {
  id: string;
  name: string;
  title: string;
  party: string;
  state: string;
  chamber: string;
  promises: PromiseRecord[];
}

export const demoPromiseProfiles: RepPromiseProfile[] = [
  {
    id: 'rep-001',
    name: 'Sen. Maria Castillo',
    title: 'U.S. Senator',
    party: 'Democratic',
    state: 'Colorado',
    chamber: 'Senate',
    promises: [
      {
        id: 'p-001',
        representativeId: 'rep-001',
        statement: 'I will fight to cap prescription drug costs at $35 per month for all Americans.',
        category: 'Healthcare',
        madeDate: 'Oct 12, 2024',
        sourceUrl: 'https://www.congress.gov/bill/119th-congress/senate-bill/411',
        status: 'in_progress',
        statusEvidence: 'Co-sponsored S. 411, the Prescription Drug Affordability Act, currently in committee.',
      },
      {
        id: 'p-002',
        representativeId: 'rep-001',
        statement: 'I pledge to bring high-speed broadband to every rural community in Colorado within my first term.',
        category: 'Infrastructure',
        madeDate: 'Sep 5, 2024',
        sourceUrl: 'https://www.congress.gov/bill/119th-congress/senate-bill/892',
        status: 'kept',
        statusEvidence: 'Secured $340M in Rural Broadband Expansion Act funding for Colorado. 89% of targeted communities now connected.',
      },
      {
        id: 'p-003',
        representativeId: 'rep-001',
        statement: 'I will never vote to cut Social Security benefits.',
        category: 'Social Security',
        madeDate: 'Aug 20, 2024',
        sourceUrl: 'https://www.senate.gov/legislative/votes.htm',
        status: 'kept',
        statusEvidence: 'Voted against Amendment 14 to the Budget Resolution which proposed a 2% reduction in Social Security COLAs.',
      },
      {
        id: 'p-004',
        representativeId: 'rep-001',
        statement: 'I will introduce legislation to make community college free for all Americans.',
        category: 'Education',
        madeDate: 'Jul 15, 2024',
        sourceUrl: 'https://www.congress.gov/member/maria-castillo',
        status: 'no_action',
        statusEvidence: 'No legislation introduced as of March 2026. No public statements updating this commitment.',
      },
      {
        id: 'p-005',
        representativeId: 'rep-001',
        statement: 'I will push for a federal ban on assault-style weapons.',
        category: 'Gun Safety',
        madeDate: 'Jun 3, 2024',
        sourceUrl: 'https://www.congress.gov/bill/119th-congress/senate-bill/782',
        status: 'in_progress',
        statusEvidence: 'Co-sponsored S. 782, the Assault Weapons Prevention Act. Bill has not advanced beyond introduction.',
      },
      {
        id: 'p-006',
        representativeId: 'rep-001',
        statement: 'I commit to holding monthly town halls in every major Colorado city.',
        category: 'Transparency',
        madeDate: 'Oct 1, 2024',
        sourceUrl: 'https://www.congress.gov/member/maria-castillo',
        status: 'broken',
        statusEvidence: 'Records show only 3 town halls held in 14 months. None in Pueblo, Grand Junction, or Fort Collins.',
      },
    ],
  },
  {
    id: 'rep-002',
    name: 'Rep. James Thornton',
    title: 'U.S. Representative (TX-22)',
    party: 'Republican',
    state: 'Texas',
    chamber: 'House',
    promises: [
      {
        id: 'p-007',
        representativeId: 'rep-002',
        statement: 'I will work to secure the southern border and fund completion of physical barriers.',
        category: 'Immigration',
        madeDate: 'Sep 14, 2024',
        sourceUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/2',
        status: 'in_progress',
        statusEvidence: 'Voted for H.R. 2, the Secure the Border Act. Co-sponsored 3 border security amendments.',
      },
      {
        id: 'p-008',
        representativeId: 'rep-002',
        statement: 'I promise to cut wasteful government spending by 10% in my first year.',
        category: 'Economy',
        madeDate: 'Aug 22, 2024',
        sourceUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/4500',
        status: 'broken',
        statusEvidence: 'Voted for the omnibus spending bill that increased discretionary spending by 3.2%. No spending cut proposals introduced.',
      },
      {
        id: 'p-009',
        representativeId: 'rep-002',
        statement: 'I will protect the Second Amendment rights of all Texans.',
        category: 'Gun Rights',
        madeDate: 'Jul 30, 2024',
        sourceUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/1120',
        status: 'kept',
        statusEvidence: 'Voted against all gun restriction measures. Co-sponsored the Constitutional Carry Reciprocity Act.',
      },
      {
        id: 'p-010',
        representativeId: 'rep-002',
        statement: 'I will fight to lower gas prices by expanding domestic energy production.',
        category: 'Energy',
        madeDate: 'Sep 1, 2024',
        sourceUrl: 'https://www.congress.gov/member/james-thornton',
        status: 'in_progress',
        statusEvidence: 'Co-sponsored the American Energy Independence Act. Voted to open additional federal lands for drilling.',
      },
      {
        id: 'p-011',
        representativeId: 'rep-002',
        statement: 'I will oppose any new taxes on working families.',
        category: 'Taxes',
        madeDate: 'Oct 5, 2024',
        sourceUrl: 'https://clerk.house.gov/Votes',
        status: 'kept',
        statusEvidence: 'Voted against all tax increase proposals. Signed the Taxpayer Protection Pledge.',
      },
    ],
  },
  {
    id: 'rep-003',
    name: 'Sen. David Okafor',
    title: 'U.S. Senator',
    party: 'Democratic',
    state: 'Michigan',
    chamber: 'Senate',
    promises: [
      {
        id: 'p-012',
        representativeId: 'rep-003',
        statement: 'I will bring 50,000 manufacturing jobs back to Michigan through EV industry investments.',
        category: 'Economy',
        madeDate: 'Sep 20, 2024',
        sourceUrl: 'https://www.bls.gov/regions/midwest/michigan.htm',
        status: 'in_progress',
        statusEvidence: 'Secured $2.1B in EV manufacturing incentives for Michigan. 12,000 jobs created so far per BLS data.',
      },
      {
        id: 'p-013',
        representativeId: 'rep-003',
        statement: 'I will ensure clean drinking water for every Michigan community — no more Flint situations.',
        category: 'Infrastructure',
        madeDate: 'Aug 15, 2024',
        sourceUrl: 'https://www.congress.gov/bill/119th-congress/senate-bill/1583',
        status: 'kept',
        statusEvidence: 'Led passage of the Clean Water Infrastructure Modernization Act. $680M allocated to Michigan water systems.',
      },
      {
        id: 'p-014',
        representativeId: 'rep-003',
        statement: 'I will push for universal pre-K education for all 3 and 4-year-olds.',
        category: 'Education',
        madeDate: 'Jul 10, 2024',
        sourceUrl: 'https://www.congress.gov/member/david-okafor',
        status: 'no_action',
        statusEvidence: 'No legislation introduced. No committee hearings requested on this topic.',
      },
      {
        id: 'p-015',
        representativeId: 'rep-003',
        statement: 'I will work across the aisle to pass comprehensive immigration reform.',
        category: 'Immigration',
        madeDate: 'Oct 8, 2024',
        sourceUrl: 'https://www.senate.gov/legislative/votes.htm',
        status: 'in_progress',
        statusEvidence: 'Part of the bipartisan Gang of 12 working on immigration compromise. Voted for cloture on the reform package.',
      },
      {
        id: 'p-016',
        representativeId: 'rep-003',
        statement: 'I pledge to reject all PAC money from fossil fuel companies.',
        category: 'Campaign Finance',
        madeDate: 'Jun 25, 2024',
        sourceUrl: 'https://www.opensecrets.org',
        status: 'broken',
        statusEvidence: 'FEC filings show $47,000 received from energy PACs including ConocoPhillips and Marathon Petroleum PACs.',
      },
    ],
  },
];
