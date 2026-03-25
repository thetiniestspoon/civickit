import type { ProcessWorkflow } from '@civickit/types';

export const demoWorkflows: ProcessWorkflow[] = [
  {
    id: 'file-wage-complaint',
    title: 'File a Wage Complaint',
    description: 'Step-by-step guide to filing a wage complaint with the U.S. Department of Labor when your employer has not paid you correctly.',
    domain: 'workplace',
    totalSteps: 5,
    documents: [
      'Pay stubs or records of hours worked',
      'Your employment agreement or offer letter',
      'Any written communication with your employer about pay',
      'Bank statements showing deposits (optional but helpful)',
    ],
    deadlines: [
      {
        description: 'Federal wage claims must be filed within 2 years (3 years if the violation was willful)',
      },
    ],
    steps: [
      {
        number: 1,
        title: 'Gather your records',
        description: 'Collect any documents that show how much you worked and how much you were paid. This includes pay stubs, timesheets, schedules, and bank statements. If you do not have formal records, write down your best memory of dates, hours, and pay. Any record is better than none.',
        whatToExpect: 'This step may take 30 minutes to a few days depending on what records you have. It is okay if you do not have everything — the Department of Labor can still investigate.',
        tips: [
          'Take photos of any paper records so you have a backup',
          'Check your bank statements for deposit amounts and dates',
          'Write down the names and contact info of coworkers who can back up your account',
          'If you were paid in cash, write down every payment you remember',
        ],
      },
      {
        number: 2,
        title: 'Learn what you are owed',
        description: 'Compare what you were paid to what you should have been paid. Check the federal minimum wage ($7.25/hour) and your state minimum wage — use whichever is higher. If you worked over 40 hours in a week, you should have received 1.5 times your regular pay for those extra hours.',
        whatToExpect: 'You might find that you are owed more than you thought. That is common. The Department of Labor handles cases large and small.',
        tips: [
          'Search "[your state] minimum wage" to find your state rate',
          'Overtime is based on a 7-day workweek, not a pay period',
          'Tips count toward your pay, but your base wage must still meet the minimum',
          'If you are not sure about the math, the DOL will help calculate what you are owed',
        ],
      },
      {
        number: 3,
        title: 'File your complaint',
        description: 'You can file a complaint with the Department of Labor Wage and Hour Division. You can do this online at dol.gov, by calling 1-866-487-9243 (toll-free), or by visiting a local WHD office in person. You do not need a lawyer. You do not need to be a U.S. citizen.',
        whatToExpect: 'Filing takes about 15 to 30 minutes. You will need to provide your name, employer information, and details about the pay problem. Your information is kept confidential.',
        tips: [
          'You can file in any language — the DOL provides translation services',
          'If you are worried about retaliation, tell the investigator',
          'It is free to file a complaint — never pay anyone to file for you',
          'You can also file with your state labor agency for additional protection',
        ],
      },
      {
        number: 4,
        title: 'Work with the investigator',
        description: 'After you file, a WHD investigator will be assigned to your case. They may contact you to ask follow-up questions or request additional documents. Be responsive and honest. The investigator will also contact your employer to review their records.',
        whatToExpect: 'Investigations can take several weeks to several months. The investigator does the heavy lifting — you mainly need to be available to answer questions. There is no cost to you.',
        tips: [
          'Respond to the investigator promptly when they reach out',
          'Keep a log of all communication related to your complaint',
          'Do not confront your employer about the investigation',
          'If your employer retaliates against you, report it to the investigator immediately',
        ],
      },
      {
        number: 5,
        title: 'Receive your resolution',
        description: 'If the investigation finds that your employer violated the law, the DOL will work to recover your unpaid wages. Your employer may also owe you an equal amount in damages (called "liquidated damages"). If the DOL cannot resolve the case, they may refer you to legal resources.',
        whatToExpect: 'Most cases are resolved without going to court. You may receive back pay directly or through a settlement. The DOL will explain your options clearly.',
        tips: [
          'You have the right to know the outcome of the investigation',
          'If you are not satisfied with the result, you can consult a private attorney',
          'Free legal help is available through Legal Services Corporation at lsc.gov',
          'Keep copies of everything for your records',
        ],
      },
    ],
  },
  {
    id: 'request-landlord-repair',
    title: 'Request a Repair from Your Landlord',
    description: 'A calm, step-by-step process to get your landlord to fix something in your home — from writing the request to getting it resolved.',
    domain: 'housing',
    totalSteps: 5,
    documents: [
      'Your lease agreement',
      'Photos or video of the problem',
      'Written repair request (you will create this in Step 2)',
      'Records of prior communication with your landlord',
    ],
    deadlines: [
      {
        description: 'Landlords typically must respond within 14-30 days for non-emergencies (varies by state)',
      },
      {
        description: 'Emergency repairs: landlord should respond within 24 hours',
      },
    ],
    steps: [
      {
        number: 1,
        title: 'Document the problem',
        description: 'Take clear photos and video of the issue. Note the date it started, how it affects your daily life, and whether it is getting worse. If there is a safety concern (mold, broken lock, no heat), note that specifically. Keep all documentation in a safe place.',
        whatToExpect: 'This step should take about 15 minutes. Having good documentation protects you and makes your request stronger.',
        tips: [
          'Take photos from multiple angles with good lighting',
          'Include a date stamp or hold up a newspaper with the date visible',
          'If the problem affects your health, mention that in your documentation',
          'Store copies of photos somewhere your landlord cannot access, like your email',
        ],
      },
      {
        number: 2,
        title: 'Write a repair request',
        description: 'Write a clear, polite letter or email to your landlord. Describe the problem, when it started, and what you need fixed. Ask for a specific repair and a reasonable deadline. Keep the tone respectful — you are creating a paper trail, not starting a fight.',
        whatToExpect: 'This should take about 15 to 30 minutes. Having a written request is important because it proves you asked. Always keep a copy.',
        tips: [
          'Use email so you have automatic proof of when you sent it',
          'If you send a letter, use certified mail so you have a receipt',
          'Be specific: "The kitchen faucet leaks constantly" is better than "there is a problem"',
          'Give a reasonable deadline, like 14 days for non-emergencies',
        ],
      },
      {
        number: 3,
        title: 'Follow up if needed',
        description: 'If your landlord does not respond by your deadline, send a second written notice. Mention the date of your first request. Stay calm and factual. If they still do not respond, move to the next step.',
        whatToExpect: 'Many landlords respond after the first or second request. If not, that is okay — you have more options. Every written request strengthens your case.',
        tips: [
          'Wait the full deadline before following up — give your landlord a fair chance',
          'Keep your tone professional and factual in all communication',
          'If your landlord calls instead of writing, follow up with an email summarizing the call',
          'Do not stop paying rent unless a lawyer or legal aid advises you to',
        ],
      },
      {
        number: 4,
        title: 'Contact local code enforcement',
        description: 'If your landlord still has not responded, you can contact your city or county code enforcement or building inspector. They can inspect your home and order your landlord to make repairs. This is a free service. You can also contact your local tenant rights organization for guidance.',
        whatToExpect: 'A code inspector will visit your home, document the violations, and send a notice to your landlord. This usually gets results. The inspector is there to help — they are not there to get you in trouble.',
        tips: [
          'Search "[your city] code enforcement" to find contact information',
          'It is illegal for your landlord to retaliate against you for calling code enforcement',
          'The inspector may find additional problems you did not notice',
          'Ask the inspector for a copy of their report for your records',
        ],
      },
      {
        number: 5,
        title: 'Know your next options',
        description: 'If the problem is still not fixed, you have options depending on your state. These may include: withholding rent until repairs are made, making the repair yourself and deducting the cost from rent, or breaking your lease without penalty. Talk to a legal aid attorney before taking these steps.',
        whatToExpect: 'These options vary by state, which is why talking to a legal aid attorney is important. Most areas have free legal help for tenants. You are not alone in this.',
        tips: [
          'Contact Legal Services Corporation at lsc.gov or call 211 for local legal aid',
          'Never withhold rent without getting legal advice first',
          'Keep paying rent in a separate account if you plan to withhold — this shows good faith',
          'If you feel unsafe in your home, you may have the right to leave immediately',
        ],
      },
    ],
  },
  {
    id: 'apply-unemployment',
    title: 'Apply for Unemployment',
    description: 'A step-by-step guide to applying for unemployment insurance benefits after losing your job.',
    domain: 'workplace',
    totalSteps: 5,
    documents: [
      'Social Security number',
      'Government-issued ID',
      'Employment history for the past 18 months (employer names, addresses, dates)',
      'Reason for job separation',
      'Bank account information for direct deposit (optional)',
    ],
    deadlines: [
      {
        description: 'File as soon as possible after losing your job — benefits do not start until you file',
      },
    ],
    steps: [
      {
        number: 1,
        title: 'Check if you qualify',
        description: 'You may qualify for unemployment if you lost your job through no fault of your own (like a layoff or company closing). You generally need to have earned enough wages during a "base period" (usually the first four of the last five completed calendar quarters). Each state sets its own rules.',
        whatToExpect: 'Most people who are laid off qualify. If you were fired, you may still qualify depending on the circumstances. Quitting usually disqualifies you, but there are exceptions (like unsafe working conditions or harassment).',
        tips: [
          'You can usually check eligibility on your state unemployment website',
          'Part-time workers may also qualify in many states',
          'If you are not sure, apply anyway — the worst that can happen is your claim is denied',
          'Being denied does not prevent you from applying again later',
        ],
      },
      {
        number: 2,
        title: 'Gather your information',
        description: 'Before you apply, gather: your Social Security number, your government-issued ID, your employment history for the past 18 months (employer names, addresses, dates of employment, and reason for leaving), and your bank account information if you want direct deposit.',
        whatToExpect: 'Gathering your information takes about 15 to 30 minutes. Having everything ready makes the application process smoother.',
        tips: [
          'Check old pay stubs or tax returns for employer addresses',
          'If you do not remember exact dates, approximate dates are okay',
          'Have your most recent employer information especially complete',
          'Set up direct deposit if possible — it is usually the fastest way to get paid',
        ],
      },
      {
        number: 3,
        title: 'File your claim',
        description: 'File your unemployment claim with your state unemployment agency. Most states let you apply online, and some allow phone applications. File in the state where you worked (not necessarily where you live). Apply as soon as possible — there is usually a one-week waiting period before benefits begin.',
        whatToExpect: 'The online application takes about 30 to 60 minutes. You will receive a confirmation number. Your state agency will review your claim and may contact your former employer.',
        tips: [
          'Search "[your state] unemployment" to find your state\'s application website',
          'Apply during off-peak hours (early morning or late evening) if the website is slow',
          'Save your confirmation number and any reference numbers',
          'If the website is down, try again or call the phone number',
        ],
      },
      {
        number: 4,
        title: 'Complete weekly certifications',
        description: 'Most states require you to certify each week that you are still unemployed and looking for work. This is usually done online. You will need to report any income you earned that week and any job search activities. Missing a certification can delay or stop your benefits.',
        whatToExpect: 'Weekly certification takes about 5 to 10 minutes. Set a weekly reminder so you do not forget. Benefits are typically paid within a few days of certifying.',
        tips: [
          'Set a phone alarm for your certification day',
          'Keep a log of jobs you apply for — you may need to report them',
          'Report all income honestly, including part-time or freelance work',
          'If you miss a certification, contact your state agency right away',
        ],
      },
      {
        number: 5,
        title: 'Use your benefits while job searching',
        description: 'Unemployment benefits typically last 26 weeks (about 6 months), though this varies by state. Use this time to actively search for a new job. Many state unemployment offices offer free job search help, resume assistance, and training programs.',
        whatToExpect: 'Benefits replace a portion of your previous wages, usually about 40-50%. The amount varies by state. You can work part-time and still receive partial benefits in most states.',
        tips: [
          'Check with your state agency about free training and career services',
          'Look into programs that help with job placement',
          'If your benefits run out and you still need help, contact 211 for local resources',
          'Free legal help is available at lsc.gov if you have problems with your claim',
        ],
      },
    ],
  },
];
