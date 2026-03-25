import type { RightsGuide } from '@civickit/types';

export const workplaceGuides: RightsGuide[] = [
  {
    id: 'wage-theft',
    domain: 'workplace',
    title: 'Wage Theft',
    summary: 'Your employer must pay you for all hours worked. If they do not pay you on time, pay less than minimum wage, or refuse to pay overtime, that may be wage theft.',
    jurisdiction: 'Federal + state variations',
    lastUpdated: '2026-03-01',
    languages: ['en', 'es'],
    source: {
      name: 'U.S. Department of Labor - Wage and Hour Division',
      url: 'https://www.dol.gov/agencies/whd',
      retrievedDate: '2026-03-01',
    },
    sections: [
      {
        title: 'What is the federal minimum wage?',
        content: 'The federal minimum wage is $7.25 per hour. Many states and cities have a higher minimum wage. Your employer must pay you whichever is higher — the federal, state, or local minimum wage. Tipped workers must receive at least $2.13 per hour in direct wages, but if tips plus wages do not equal $7.25 per hour, the employer must make up the difference.',
        source: {
          name: 'DOL - Minimum Wage',
          url: 'https://www.dol.gov/general/topic/wages/minimumwage',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'When must I be paid overtime?',
        content: 'Under the Fair Labor Standards Act (FLSA), most workers must receive overtime pay of at least 1.5 times their regular rate for any hours worked over 40 in a workweek. Some workers are exempt from overtime, including certain salaried managers and professionals. Your employer cannot ask you to work "off the clock" — all hours must be counted and paid.',
        source: {
          name: 'DOL - Overtime Pay',
          url: 'https://www.dol.gov/agencies/whd/overtime',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'What are common types of wage theft?',
        content: 'Wage theft can take many forms: not paying minimum wage, not paying overtime, forcing you to work off the clock, taking illegal deductions from your paycheck, misclassifying you as an independent contractor, or not giving you your final paycheck when you leave a job. All of these are against the law.',
        source: {
          name: 'DOL - Handy Reference Guide to the FLSA',
          url: 'https://www.dol.gov/agencies/whd/compliance-assistance/handy-reference-guide-flsa',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'How to file a wage complaint',
        content: 'You can file a complaint with the U.S. Department of Labor Wage and Hour Division online, by phone at 1-866-487-9243, or in person at a local WHD office. You do not need to be a U.S. citizen to file a complaint. It is illegal for your employer to fire you or punish you for filing a complaint. Many states also have their own labor agencies where you can file.',
        source: {
          name: 'DOL - How to File a Complaint',
          url: 'https://www.dol.gov/agencies/whd/contact/complaints',
          retrievedDate: '2026-03-01',
        },
      },
    ],
  },
  {
    id: 'unsafe-working-conditions',
    domain: 'workplace',
    title: 'Unsafe Working Conditions',
    summary: 'You have the right to a safe workplace. Your employer must follow safety rules and fix hazards. You can report unsafe conditions without fear of being fired.',
    jurisdiction: 'Federal + state variations',
    lastUpdated: '2026-03-01',
    languages: ['en', 'es'],
    source: {
      name: 'Occupational Safety and Health Administration (OSHA)',
      url: 'https://www.osha.gov/',
      retrievedDate: '2026-03-01',
    },
    sections: [
      {
        title: 'Your right to a safe workplace',
        content: 'Under the Occupational Safety and Health Act, your employer must provide a workplace free from serious hazards. This includes providing safety equipment, training in a language you understand, and keeping accurate records of injuries. You have the right to see records of workplace injuries and test results for hazards like chemicals.',
        source: {
          name: 'OSHA - Workers\' Rights',
          url: 'https://www.osha.gov/workers',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'How to report unsafe conditions',
        content: 'You can file a complaint with OSHA online at osha.gov, by calling 1-800-321-OSHA (6742), or by mailing or faxing a written complaint to your local OSHA office. You can ask OSHA to keep your name private. If you believe you are in immediate danger, call OSHA right away.',
        source: {
          name: 'OSHA - File a Complaint',
          url: 'https://www.osha.gov/workers/file-complaint',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'Protection from retaliation',
        content: 'It is illegal for your employer to fire, demote, transfer, or punish you for reporting safety problems or filing an OSHA complaint. This protection is sometimes called "whistleblower protection." If your employer retaliates, you can file a whistleblower complaint with OSHA within 30 days.',
        source: {
          name: 'OSHA - Whistleblower Protection',
          url: 'https://www.osha.gov/whistleblower',
          retrievedDate: '2026-03-01',
        },
      },
    ],
  },
  {
    id: 'wrongful-termination',
    domain: 'workplace',
    title: 'Wrongful Termination',
    summary: 'While most jobs are "at-will," your employer cannot fire you for illegal reasons like discrimination, retaliation, or refusing to break the law.',
    jurisdiction: 'Federal + state variations',
    lastUpdated: '2026-03-01',
    languages: ['en', 'es'],
    source: {
      name: 'U.S. Equal Employment Opportunity Commission',
      url: 'https://www.eeoc.gov/',
      retrievedDate: '2026-03-01',
    },
    sections: [
      {
        title: 'What is at-will employment?',
        content: 'Most jobs in the U.S. are "at-will," which means your employer can end your job at any time for any reason — or no reason. However, there are important exceptions. Your employer cannot fire you for an illegal reason. If you have a contract, the terms of that contract apply instead of at-will rules.',
        source: {
          name: 'DOL - Employment-at-Will',
          url: 'https://www.dol.gov/general/topic/termination',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'Illegal reasons for firing',
        content: 'It is illegal to fire someone because of their race, color, religion, sex (including pregnancy and gender identity), national origin, age (40 or older), disability, or genetic information. It is also illegal to fire someone for filing a workers\' compensation claim, reporting safety violations, serving on a jury, or refusing to do something illegal.',
        source: {
          name: 'EEOC - Prohibited Employment Policies/Practices',
          url: 'https://www.eeoc.gov/prohibited-employment-policiespractices',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'What to do if you were wrongfully fired',
        content: 'Document everything: save emails, texts, and write down what happened and when. File a charge with the EEOC within 180 days (or 300 days if your state has its own anti-discrimination agency). You can file online at eeoc.gov or visit an EEOC office. The EEOC will investigate your complaint at no cost to you.',
        source: {
          name: 'EEOC - Filing a Charge of Discrimination',
          url: 'https://www.eeoc.gov/filing-charge-discrimination',
          retrievedDate: '2026-03-01',
        },
      },
    ],
  },
  {
    id: 'workplace-discrimination',
    domain: 'workplace',
    title: 'Workplace Discrimination',
    summary: 'Federal law protects you from being treated unfairly at work because of your race, sex, religion, age, disability, or other protected characteristics.',
    jurisdiction: 'Federal + state variations',
    lastUpdated: '2026-03-01',
    languages: ['en', 'es'],
    source: {
      name: 'U.S. Equal Employment Opportunity Commission',
      url: 'https://www.eeoc.gov/',
      retrievedDate: '2026-03-01',
    },
    sections: [
      {
        title: 'What counts as discrimination?',
        content: 'Discrimination means being treated differently or unfairly because of who you are. This covers hiring, firing, pay, job assignments, promotions, training, and any other condition of employment. Harassment — like offensive jokes, slurs, or threats — is also a form of discrimination when it creates a hostile work environment.',
        source: {
          name: 'EEOC - Discrimination by Type',
          url: 'https://www.eeoc.gov/discrimination-type',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'Protected characteristics under federal law',
        content: 'Federal laws protect you from discrimination based on: race and color (Title VII), religion (Title VII), sex, including pregnancy, sexual orientation, and gender identity (Title VII), national origin (Title VII), age 40 and older (ADEA), disability (ADA), and genetic information (GINA). Many states add protections for other characteristics.',
        source: {
          name: 'EEOC - Laws Enforced by the EEOC',
          url: 'https://www.eeoc.gov/statutes/laws-enforced-eeoc',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'How to report discrimination',
        content: 'You can file a charge of discrimination with the EEOC. The deadline is usually 180 days from the date of the discrimination (300 days if your state has its own agency). Filing is free. You can file online at the EEOC Public Portal, by mail, or in person. The EEOC may try mediation first, then investigate your charge.',
        source: {
          name: 'EEOC - How to File a Charge',
          url: 'https://www.eeoc.gov/filing-charge-discrimination',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'Reasonable accommodations',
        content: 'If you have a disability, your employer must provide reasonable accommodations so you can do your job — unless it would cause undue hardship. Examples include modified work schedules, accessible equipment, or a quiet workspace. Your employer must also accommodate sincerely held religious beliefs. You have the right to ask for accommodations.',
        source: {
          name: 'EEOC - Reasonable Accommodation',
          url: 'https://www.eeoc.gov/disability-discrimination',
          retrievedDate: '2026-03-01',
        },
      },
    ],
  },
  {
    id: 'break-overtime-rights',
    domain: 'workplace',
    title: 'Break & Overtime Rights',
    summary: 'Federal law requires overtime pay for most workers. Break and meal rules vary by state. Nursing mothers have the right to pump at work.',
    jurisdiction: 'Federal + state variations',
    lastUpdated: '2026-03-01',
    languages: ['en', 'es'],
    source: {
      name: 'U.S. Department of Labor - Wage and Hour Division',
      url: 'https://www.dol.gov/agencies/whd',
      retrievedDate: '2026-03-01',
    },
    sections: [
      {
        title: 'Overtime rules under federal law',
        content: 'The Fair Labor Standards Act requires employers to pay overtime at 1.5 times the regular rate for all hours over 40 in a workweek. Your employer cannot average hours over two weeks to avoid overtime. Some workers are exempt, including certain salaried workers earning above $35,568 per year who perform executive, administrative, or professional duties.',
        source: {
          name: 'DOL - Overtime Pay',
          url: 'https://www.dol.gov/agencies/whd/overtime',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'Break and meal period rules',
        content: 'Federal law does not require meal or rest breaks. However, if your employer gives you a short break (usually 5 to 20 minutes), it must be paid. Meal periods of 30 minutes or more do not have to be paid, as long as you are completely relieved of duties. Many states require meal and rest breaks — check your state labor office.',
        source: {
          name: 'DOL - Breaks and Meal Periods',
          url: 'https://www.dol.gov/general/topic/workhours/breaks',
          retrievedDate: '2026-03-01',
        },
      },
      {
        title: 'Nursing mothers\' rights',
        content: 'Under the PUMP for Nursing Mothers Act, most workers have the right to reasonable break time and a private space (not a bathroom) to pump breast milk for up to one year after a child\'s birth. Your employer must provide this time and space. This protection covers nearly all employees, including hourly and part-time workers.',
        source: {
          name: 'DOL - Break Time for Nursing Mothers',
          url: 'https://www.dol.gov/agencies/whd/nursing-mothers',
          retrievedDate: '2026-03-01',
        },
      },
    ],
  },
];
