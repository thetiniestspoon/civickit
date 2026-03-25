export interface RegistrationState {
  code: string;
  name: string;
  registrationDeadline: string;
  earlyVotingDates: string;
  mailBallotDeadline: string;
  electionDay: string;
  idRequirements: string[];
  documentChecklist: string[];
  onlineRegistrationUrl: string;
  source: {
    name: string;
    url: string;
    retrievedDate: string;
  };
}

export const registrationData: Record<string, RegistrationState> = {
  IL: {
    code: 'IL',
    name: 'Illinois',
    registrationDeadline: 'October 6, 2026 (online), October 20, 2026 (in-person at county clerk)',
    earlyVotingDates: 'September 24 - November 2, 2026',
    mailBallotDeadline: 'October 29, 2026 (singed application must be received)',
    electionDay: 'November 3, 2026',
    idRequirements: [
      'No photo ID required to vote in Illinois',
      'First-time voters who registered by mail must show ID at the polls',
      'Accepted IDs: driver\'s license, state ID, utility bill, bank statement, government document with name and address',
    ],
    documentChecklist: [
      'Valid Illinois driver\'s license or state ID number',
      'Last four digits of Social Security Number',
      'Proof of current address (utility bill, lease, bank statement)',
      'Completed voter registration application',
    ],
    onlineRegistrationUrl: 'https://ova.elections.il.gov',
    source: {
      name: 'Illinois State Board of Elections',
      url: 'https://www.elections.il.gov/VotingInformation/RegistrationInformation.aspx',
      retrievedDate: 'Oct 2026',
    },
  },
  CA: {
    code: 'CA',
    name: 'California',
    registrationDeadline: 'October 19, 2026 (online), conditional registration available through Election Day',
    earlyVotingDates: 'October 5 - November 2, 2026 (vote-by-mail sent automatically)',
    mailBallotDeadline: 'Must be postmarked by November 3, 2026 and received by November 10, 2026',
    electionDay: 'November 3, 2026',
    idRequirements: [
      'No photo ID required for most voters in California',
      'First-time voters who did not provide ID when registering may need to show ID',
      'Accepted IDs: driver\'s license, passport, employee ID, utility bill, voter registration card',
    ],
    documentChecklist: [
      'California driver\'s license or state ID number',
      'Last four digits of Social Security Number',
      'Must be a U.S. citizen and California resident',
      'Must be at least 18 years old by Election Day (16-year-olds can pre-register)',
    ],
    onlineRegistrationUrl: 'https://registertovote.ca.gov',
    source: {
      name: 'California Secretary of State',
      url: 'https://www.sos.ca.gov/elections/voter-registration',
      retrievedDate: 'Oct 2026',
    },
  },
  NJ: {
    code: 'NJ',
    name: 'New Jersey',
    registrationDeadline: 'October 13, 2026 (online and by mail), in-person registration available through Election Day',
    earlyVotingDates: 'October 24 - November 1, 2026',
    mailBallotDeadline: 'October 27, 2026 (application deadline), ballot must be received by November 9, 2026',
    electionDay: 'November 3, 2026',
    idRequirements: [
      'ID required for first-time voters who registered by mail without verification',
      'Accepted IDs: driver\'s license, state or federal ID, military ID, student ID, utility bill, bank statement',
      'Poll workers may ask to confirm your identity but a photo ID is not mandatory for returning voters',
    ],
    documentChecklist: [
      'New Jersey driver\'s license number',
      'Last four digits of Social Security Number',
      'Must be a U.S. citizen and New Jersey resident for at least 30 days before the election',
      'Must be at least 18 years old by Election Day (17-year-olds can pre-register)',
    ],
    onlineRegistrationUrl: 'https://voter.svrs.nj.gov/register',
    source: {
      name: 'New Jersey Division of Elections',
      url: 'https://www.nj.gov/state/elections/voter-registration.shtml',
      retrievedDate: 'Oct 2026',
    },
  },
};

export const allStates = [
  { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' }, { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' }, { code: 'CA', name: 'California' }, { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' }, { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' }, { code: 'HI', name: 'Hawaii' }, { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' }, { code: 'IN', name: 'Indiana' }, { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' }, { code: 'KY', name: 'Kentucky' }, { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' }, { code: 'MD', name: 'Maryland' }, { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' }, { code: 'MN', name: 'Minnesota' }, { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' }, { code: 'MT', name: 'Montana' }, { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' }, { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' }, { code: 'NY', name: 'New York' }, { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' }, { code: 'OH', name: 'Ohio' }, { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' }, { code: 'PA', name: 'Pennsylvania' }, { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' }, { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' }, { code: 'UT', name: 'Utah' }, { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' }, { code: 'WA', name: 'Washington' }, { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' }, { code: 'WY', name: 'Wyoming' }, { code: 'DC', name: 'District of Columbia' },
];
