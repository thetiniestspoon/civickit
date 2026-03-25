export interface Candidate {
  name: string;
  party: string;
  incumbent?: boolean;
  platform: string[];
}

export interface Race {
  id: string;
  office: string;
  level: 'federal' | 'state' | 'local';
  district?: string;
  candidates: Candidate[];
  source: {
    name: string;
    url: string;
    retrievedDate: string;
  };
}

export interface BallotMeasure {
  id: string;
  title: string;
  code: string;
  description: string;
  yesVoteMeans: string;
  noVoteMeans: string;
  supporters: string[];
  opponents: string[];
  source: {
    name: string;
    url: string;
    retrievedDate: string;
  };
}

export interface DemoBallot {
  address: string;
  electionDate: string;
  electionName: string;
  races: Race[];
  measures: BallotMeasure[];
}

export const demoBallot: DemoBallot = {
  address: '742 Evergreen Terrace, Springfield, IL 62704',
  electionDate: 'November 3, 2026',
  electionName: '2026 General Election',
  races: [
    // Federal Races
    {
      id: 'us-senate-il',
      office: 'U.S. Senate',
      level: 'federal',
      district: 'Illinois',
      candidates: [
        {
          name: 'Tammy Duckworth',
          party: 'Democratic',
          incumbent: true,
          platform: [
            'Expand veterans healthcare and mental health services',
            'Invest in clean energy manufacturing and green jobs',
            'Protect reproductive rights through federal legislation',
            'Lower prescription drug costs through Medicare negotiation',
          ],
        },
        {
          name: 'Robert Callahan',
          party: 'Republican',
          platform: [
            'Reduce federal spending and balance the budget',
            'Strengthen border security and immigration enforcement',
            'Support domestic energy production including natural gas',
            'Cut regulations on small businesses',
          ],
        },
        {
          name: 'Maria Santos',
          party: 'Libertarian',
          platform: [
            'End federal drug prohibition and support decriminalization',
            'Reduce military spending and overseas deployments',
            'Eliminate federal student loan programs in favor of private options',
            'Oppose mass surveillance and protect digital privacy',
          ],
        },
      ],
      source: {
        name: 'Illinois State Board of Elections',
        url: 'https://www.elections.il.gov',
        retrievedDate: 'Oct 2026',
      },
    },
    {
      id: 'us-house-il-13',
      office: 'U.S. House of Representatives',
      level: 'federal',
      district: 'Illinois 13th District',
      candidates: [
        {
          name: 'Nikki Budzinski',
          party: 'Democratic',
          incumbent: true,
          platform: [
            'Support union labor protections and raise the federal minimum wage',
            'Expand broadband access in rural central Illinois',
            'Fund infrastructure improvements for aging roads and bridges',
            'Protect Social Security and Medicare from cuts',
          ],
        },
        {
          name: 'James Thornton',
          party: 'Republican',
          platform: [
            'Reduce inflation through fiscal responsibility',
            'Support law enforcement with increased federal funding',
            'Protect Second Amendment rights',
            'Promote school choice and parental rights in education',
          ],
        },
      ],
      source: {
        name: 'Ballotpedia',
        url: 'https://ballotpedia.org/Illinois%27s_13th_Congressional_District',
        retrievedDate: 'Oct 2026',
      },
    },
    {
      id: 'us-house-il-15',
      office: 'U.S. House of Representatives',
      level: 'federal',
      district: 'Illinois 15th District',
      candidates: [
        {
          name: 'Paul Quentin',
          party: 'Democratic',
          platform: [
            'Expand Medicaid coverage in rural communities',
            'Support family farms through updated agricultural subsidies',
            'Invest in public education and teacher pay',
            'Address climate change with infrastructure investments',
          ],
        },
        {
          name: 'Mary Miller',
          party: 'Republican',
          incumbent: true,
          platform: [
            'Cut government spending and reduce the national debt',
            'Oppose vaccine mandates and protect medical freedom',
            'Defend traditional family values in federal policy',
            'Strengthen trade protections for American manufacturers',
          ],
        },
      ],
      source: {
        name: 'Ballotpedia',
        url: 'https://ballotpedia.org/Illinois%27s_15th_Congressional_District',
        retrievedDate: 'Oct 2026',
      },
    },
    // State Races
    {
      id: 'il-governor',
      office: 'Governor',
      level: 'state',
      district: 'Illinois',
      candidates: [
        {
          name: 'JB Pritzker',
          party: 'Democratic',
          incumbent: true,
          platform: [
            'Expand early childhood education and universal pre-K',
            'Continue investment in renewable energy and climate goals',
            'Support criminal justice reform and reduce recidivism',
            'Increase affordable housing funding statewide',
          ],
        },
        {
          name: 'Darren Bailey',
          party: 'Republican',
          platform: [
            'Reduce Illinois property taxes by 30% over four years',
            'Roll back the SAFE-T Act and support tougher criminal penalties',
            'Oppose new state business taxes and regulations',
            'Expand rural broadband and infrastructure investment',
          ],
        },
      ],
      source: {
        name: 'Illinois State Board of Elections',
        url: 'https://www.elections.il.gov',
        retrievedDate: 'Oct 2026',
      },
    },
    {
      id: 'il-state-senate-50',
      office: 'State Senate',
      level: 'state',
      district: 'District 50',
      candidates: [
        {
          name: 'Doris Turner',
          party: 'Democratic',
          incumbent: true,
          platform: [
            'Support workforce development programs in Springfield',
            'Fund mental health services in public schools',
            'Protect collective bargaining rights for state workers',
          ],
        },
        {
          name: 'Michael Greene',
          party: 'Republican',
          platform: [
            'Freeze state spending and oppose new tax increases',
            'Support school choice through education savings accounts',
            'Reduce regulatory burdens on small businesses',
          ],
        },
      ],
      source: {
        name: 'Illinois General Assembly',
        url: 'https://www.ilga.gov',
        retrievedDate: 'Oct 2026',
      },
    },
    // Local Races
    {
      id: 'sangamon-commissioner',
      office: 'County Commissioner',
      level: 'local',
      district: 'Sangamon County, District 3',
      candidates: [
        {
          name: 'Linda Hawkins',
          party: 'Democratic',
          platform: [
            'Improve county road maintenance and snow removal',
            'Expand mental health crisis response teams',
            'Increase transparency in county budget process',
          ],
        },
        {
          name: 'Greg Wainwright',
          party: 'Republican',
          incumbent: true,
          platform: [
            'Hold the line on county property tax levies',
            'Support county sheriff department hiring',
            'Streamline county permitting process for businesses',
          ],
        },
      ],
      source: {
        name: 'Sangamon County Clerk',
        url: 'https://sangamoncountyclerk.com',
        retrievedDate: 'Oct 2026',
      },
    },
    {
      id: 'springfield-school-board',
      office: 'School Board Member',
      level: 'local',
      district: 'Springfield School District 186, Seat 4',
      candidates: [
        {
          name: 'Angela Washington',
          party: 'Nonpartisan',
          platform: [
            'Increase teacher retention through competitive pay',
            'Expand after-school tutoring and enrichment programs',
            'Improve school building safety and modernization',
          ],
        },
        {
          name: 'David Chen',
          party: 'Nonpartisan',
          platform: [
            'Promote STEM education and career readiness programs',
            'Increase parent involvement in curriculum decisions',
            'Address student mental health with on-site counselors',
          ],
        },
        {
          name: 'Patricia Owens',
          party: 'Nonpartisan',
          incumbent: true,
          platform: [
            'Maintain fiscal responsibility in district spending',
            'Support bilingual education and ESL programs',
            'Expand partnerships with local businesses for internships',
          ],
        },
      ],
      source: {
        name: 'Springfield District 186',
        url: 'https://www.sps186.org',
        retrievedDate: 'Oct 2026',
      },
    },
  ],
  measures: [
    {
      id: 'measure-1',
      title: 'Sangamon County Infrastructure Bond',
      code: 'Measure A',
      description:
        'Authorizes Sangamon County to issue $180 million in general obligation bonds to fund repairs and improvements to county roads, bridges, stormwater systems, and public buildings over the next 10 years. The bonds would be repaid through a property tax increase of approximately $42 per year for the median homeowner.',
      yesVoteMeans:
        'The county can borrow $180 million for infrastructure projects. Your property taxes increase by roughly $42/year for 10 years to repay the bonds.',
      noVoteMeans:
        'No new bonds are issued. Infrastructure repairs would depend on existing county budget, potentially delaying projects by years.',
      supporters: [
        'Sangamon County Board',
        'Springfield Chamber of Commerce',
        'IL Society of Civil Engineers',
        'Springfield Building Trades Council',
      ],
      opponents: [
        'Sangamon County Taxpayers Alliance',
        'Illinois Policy Institute',
      ],
      source: {
        name: 'Sangamon County Clerk',
        url: 'https://sangamoncountyclerk.com/ballot-measures',
        retrievedDate: 'Oct 2026',
      },
    },
    {
      id: 'measure-2',
      title: 'Illinois Cannabis Regulation Amendment',
      code: 'Advisory Question 1',
      description:
        'Asks voters whether the State of Illinois should amend its cannabis regulation laws to allow on-site consumption lounges, expand the number of dispensary licenses available to social equity applicants, and direct 25% of cannabis tax revenue to community reinvestment programs in areas disproportionately affected by past drug enforcement.',
      yesVoteMeans:
        'Signals support for expanding cannabis lounges, more social equity dispensary licenses, and dedicating a quarter of cannabis tax revenue to affected communities.',
      noVoteMeans:
        'Signals opposition. Current cannabis regulations remain unchanged. This is advisory and non-binding.',
      supporters: [
        'Illinois Cannabis Industry Association',
        'Chicago NORML',
        'Social Equity Coalition of Illinois',
      ],
      opponents: [
        'Smart Approaches to Marijuana (SAM)',
        'Illinois Family Institute',
      ],
      source: {
        name: 'Illinois State Board of Elections',
        url: 'https://www.elections.il.gov/measures',
        retrievedDate: 'Oct 2026',
      },
    },
    {
      id: 'measure-3',
      title: 'Illinois Minimum Wage Adjustment Act',
      code: 'Proposition 3',
      description:
        'Proposes raising the Illinois state minimum wage from $15.00 to $17.50 per hour by 2028, with annual cost-of-living adjustments thereafter. Includes a provision for a lower training wage of $14.00/hour for workers under 18 during their first 90 days of employment.',
      yesVoteMeans:
        'The state minimum wage increases to $17.50/hour by 2028 with automatic annual adjustments for inflation. A lower training wage applies to minors.',
      noVoteMeans:
        'The minimum wage stays at $15.00/hour. Any future changes would require new legislation.',
      supporters: [
        'Illinois AFL-CIO',
        'Fight for $15 Illinois',
        'Heartland Alliance',
        'Illinois Democratic Party',
      ],
      opponents: [
        'Illinois Chamber of Commerce',
        'National Federation of Independent Business - IL',
        'Illinois Restaurant Association',
      ],
      source: {
        name: 'Ballotpedia',
        url: 'https://ballotpedia.org/Illinois_2026_ballot_measures',
        retrievedDate: 'Oct 2026',
      },
    },
  ],
};
