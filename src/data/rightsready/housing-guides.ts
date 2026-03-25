import type { RightsGuide } from '@civickit/types';

export const housingGuides: RightsGuide[] = [
  {
    id: 'tenant-rights',
    domain: 'housing',
    title: 'Tenant Rights',
    summary: 'As a renter, you have basic rights no matter where you live. Your landlord must keep your home safe, follow the lease, and respect your privacy.',
    jurisdiction: 'Federal + state variations',
    lastUpdated: '2026-03-01',
    languages: ['en', 'es'],
    source: {
      name: 'U.S. Department of Housing and Urban Development',
      url: 'https://www.hud.gov/topics/rental_assistance',
      retrievedDate: '2026-03-01',
    },
    sections: [
      {
        title: 'Your basic rights as a tenant',
        content: 'As a renter, you have the right to a safe and livable home. Your landlord must keep the property in good repair, provide working plumbing, heating, and electricity, and follow all local building and health codes. You also have the right to privacy — your landlord generally must give you notice (usually 24 to 48 hours) before entering your home, except in emergencies.',
        source: {
          name: 'HUD - Tenant Rights',
          url: 'https://www.hud.gov/topics/rental_assistance/tenantrights',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'Understanding your lease',
        content: 'A lease is a legal agreement between you and your landlord. Read it carefully before you sign. It should include: the rent amount and when it is due, the length of the lease, rules about pets and guests, who pays for utilities, and what happens if you or your landlord break the agreement. Keep a copy of your signed lease in a safe place.',
        source: {
          name: 'HUD - Renter\'s Guide',
          url: 'https://www.hud.gov/topics/rental_assistance',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'Protection from retaliation',
        content: 'In most states, your landlord cannot punish you for exercising your rights. This means they cannot raise your rent, reduce services, or try to evict you because you complained about conditions, reported code violations, or joined a tenants\' organization. If you believe your landlord is retaliating, document everything and contact your local tenant rights organization.',
        source: {
          name: 'HUD - Tenant Rights, Laws, and Protections',
          url: 'https://www.hud.gov/topics/rental_assistance/tenantrights',
          retrievedDate: '2026-03-01',
        },
      },
    ],
  },
  {
    id: 'eviction-process',
    domain: 'housing',
    title: 'Eviction Process',
    summary: 'Your landlord must follow legal steps to evict you. They cannot lock you out, shut off utilities, or remove your belongings without a court order.',
    jurisdiction: 'Federal + state variations',
    lastUpdated: '2026-03-01',
    languages: ['en', 'es'],
    source: {
      name: 'U.S. Department of Housing and Urban Development',
      url: 'https://www.hud.gov/',
      retrievedDate: '2026-03-01',
    },
    sections: [
      {
        title: 'What is a legal eviction?',
        content: 'A legal eviction follows specific steps set by state law. Typically, your landlord must first give you written notice, then file a case in court, and finally get a court order before you must leave. Self-help evictions — like changing the locks, shutting off utilities, or removing your belongings — are illegal in every state.',
        source: {
          name: 'HUD - Eviction Guidance',
          url: 'https://www.hud.gov/topics/rental_assistance/tenantrights',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'Steps in the eviction process',
        content: 'Step 1: Your landlord gives you a written notice (usually 3 to 30 days, depending on the reason and your state). Step 2: If you do not fix the problem or move, your landlord files a case in court. Step 3: You receive a court summons and have the right to appear and tell your side. Step 4: A judge decides. Step 5: If the judge rules for the landlord, you receive a set number of days to move.',
        source: {
          name: 'HUD - Understanding the Eviction Process',
          url: 'https://www.hud.gov/topics/rental_assistance',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'Your rights during eviction',
        content: 'You have the right to receive proper written notice, appear in court and defend yourself, request more time to move if needed, and have your belongings protected. Many areas have free legal aid for tenants facing eviction. You should always show up for your court date — if you do not appear, the judge will likely rule in your landlord\'s favor.',
        source: {
          name: 'Legal Services Corporation',
          url: 'https://www.lsc.gov/',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'Emergency rental assistance',
        content: 'If you are behind on rent, help may be available. Contact your local 211 (call 2-1-1) for emergency rental assistance programs. Many cities and states have funds to help tenants avoid eviction. You can also check with your local legal aid office — they can sometimes negotiate with your landlord on your behalf.',
        source: {
          name: 'HUD - Emergency Rental Assistance',
          url: 'https://www.hud.gov/topics/rental_assistance',
          retrievedDate: '2026-03-01',
        },
      },
    ],
  },
  {
    id: 'security-deposits',
    domain: 'housing',
    title: 'Security Deposits',
    summary: 'Most states limit how much your landlord can charge for a security deposit and set rules for when and how it must be returned.',
    jurisdiction: 'Federal + state variations',
    lastUpdated: '2026-03-01',
    languages: ['en', 'es'],
    source: {
      name: 'U.S. Department of Housing and Urban Development',
      url: 'https://www.hud.gov/',
      retrievedDate: '2026-03-01',
    },
    sections: [
      {
        title: 'How much can a landlord charge?',
        content: 'Most states limit security deposits to one to two months\' rent. Some states, like New York, limit it to one month\'s rent. A few states have no limit. Your landlord must tell you where the deposit is being held, and in some states, they must put it in a separate bank account and pay you interest.',
        source: {
          name: 'HUD - Security Deposits',
          url: 'https://www.hud.gov/topics/rental_assistance/tenantrights',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'Getting your deposit back',
        content: 'When you move out, your landlord must return your deposit within a set number of days (usually 14 to 30 days, depending on the state). If your landlord keeps any of the deposit, they must give you a written list of deductions and receipts. Normal wear and tear — like minor scuffs on walls or worn carpet — cannot be deducted.',
        source: {
          name: 'HUD - Know Your Rights',
          url: 'https://www.hud.gov/topics/rental_assistance/tenantrights',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'What to do if your deposit is not returned',
        content: 'First, send your landlord a written request for your deposit (keep a copy). If they do not respond, you can file a claim in small claims court. In many states, if your landlord wrongfully keeps your deposit, you may be awarded two or three times the amount. Document the condition of your home with photos and video before you move out.',
        source: {
          name: 'HUD - Renter\'s Guide',
          url: 'https://www.hud.gov/topics/rental_assistance',
          retrievedDate: '2026-03-01',
        },
      },
    ],
  },
  {
    id: 'fair-housing',
    domain: 'housing',
    title: 'Fair Housing',
    summary: 'The Fair Housing Act makes it illegal to discriminate in housing because of race, color, religion, sex, national origin, disability, or family status.',
    jurisdiction: 'Federal',
    lastUpdated: '2026-03-01',
    languages: ['en', 'es'],
    source: {
      name: 'U.S. Department of Housing and Urban Development - Fair Housing',
      url: 'https://www.hud.gov/program_offices/fair_housing_equal_opp',
      retrievedDate: '2026-03-01',
    },
    sections: [
      {
        title: 'What is fair housing?',
        content: 'The Fair Housing Act protects you when you rent, buy, or get a mortgage. It is illegal for a landlord, real estate agent, or lender to discriminate based on your race, color, national origin, religion, sex (including sexual orientation and gender identity), familial status (having children), or disability. Many states and cities add more protections.',
        source: {
          name: 'HUD - Fair Housing Act Overview',
          url: 'https://www.hud.gov/program_offices/fair_housing_equal_opp/fair_housing_act_overview',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'Examples of housing discrimination',
        content: 'Discrimination can include: refusing to rent to you, setting different terms or conditions, saying a unit is not available when it is, steering you toward certain neighborhoods, refusing to make reasonable accommodations for a disability, or harassing you. Even policies that seem neutral can be discriminatory if they disproportionately affect a protected group.',
        source: {
          name: 'HUD - Housing Discrimination',
          url: 'https://www.hud.gov/program_offices/fair_housing_equal_opp/online-complaint',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'How to file a fair housing complaint',
        content: 'If you believe you have been discriminated against, you can file a complaint with HUD online, by phone at 1-800-669-9777, or by mail. You have one year from the date of the discrimination to file. HUD will investigate at no cost to you. You can also file a complaint with your state or local fair housing agency.',
        source: {
          name: 'HUD - File a Complaint',
          url: 'https://www.hud.gov/program_offices/fair_housing_equal_opp/online-complaint',
          retrievedDate: '2026-03-01',
        },
      },
    ],
  },
  {
    id: 'requesting-repairs',
    domain: 'housing',
    title: 'Requesting Repairs',
    summary: 'Your landlord is required to keep your home in livable condition. If something breaks, you have the right to ask for repairs — and your landlord must respond.',
    jurisdiction: 'Federal + state variations',
    lastUpdated: '2026-03-01',
    languages: ['en', 'es'],
    source: {
      name: 'U.S. Department of Housing and Urban Development',
      url: 'https://www.hud.gov/',
      retrievedDate: '2026-03-01',
    },
    sections: [
      {
        title: 'What your landlord must fix',
        content: 'Your landlord must maintain the property so it is safe and livable. This includes working plumbing and hot water, heating (and cooling in some states), electrical systems, smoke detectors, structural safety (floors, walls, roof), and pest control. This duty is called the "implied warranty of habitability" and exists in nearly every state.',
        source: {
          name: 'HUD - Tenant Rights',
          url: 'https://www.hud.gov/topics/rental_assistance/tenantrights',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'How to request a repair',
        content: 'Always put your repair request in writing. Send a letter or email to your landlord describing the problem, when it started, and asking for a specific repair. Keep a copy. Take photos and video of the problem. In most states, your landlord must respond within a reasonable time (often 14 to 30 days for non-emergencies, and 24 hours for emergencies like no heat in winter).',
        source: {
          name: 'HUD - Renter\'s Guide',
          url: 'https://www.hud.gov/topics/rental_assistance',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'What to do if your landlord does not respond',
        content: 'If your landlord ignores your request: send a second written notice, contact your local code enforcement or building inspector, contact your local tenant rights organization. In some states, you may have the right to withhold rent, make the repair yourself and deduct the cost, or break your lease without penalty. Always check your state laws before taking these steps.',
        source: {
          name: 'Legal Services Corporation',
          url: 'https://www.lsc.gov/',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'Emergency repairs',
        content: 'If you have an emergency — like a gas leak, flooding, no heat in winter, or a broken lock — contact your landlord immediately. If you cannot reach them and the situation is dangerous, call 911 or your local fire department. In most states, you can arrange an emergency repair and deduct the cost from rent. Keep all receipts.',
        source: {
          name: 'HUD - Renter\'s Guide',
          url: 'https://www.hud.gov/topics/rental_assistance',
          retrievedDate: '2026-03-01',
        },
      },
    ],
  },
];
