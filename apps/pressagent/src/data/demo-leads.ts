export interface StoryLead {
  id: string;
  headline: string;
  summary: string;
  beat: "government" | "courts" | "finance" | "contracts" | "meetings";
  type: "legislation" | "court_filing" | "campaign_finance" | "contract" | "meeting" | "policy_change";
  sourceName: string;
  sourceLink: string;
  detectedDate: string;
  relevanceScore: number; // 1-100
}

export const demoLeads: StoryLead[] = [
  {
    id: "lead-001",
    headline: "City Council Fast-Tracks $5.2M Surveillance Camera Contract Without Competitive Bidding",
    summary: "The Riverside City Council added a $5.2 million surveillance camera network contract to the consent agenda for Tuesday's meeting, bypassing the standard RFP process. The sole-source contract goes to SecureView Technologies, whose CEO donated $4,800 to the mayor's re-election campaign in October 2025.",
    beat: "contracts",
    type: "contract",
    sourceName: "Riverside City Council Agenda - March 25, 2026",
    sourceLink: "#",
    detectedDate: "2026-03-23",
    relevanceScore: 94
  },
  {
    id: "lead-002",
    headline: "Three Planning Commissioners Received Developer Contributions Before Key Zoning Vote",
    summary: "Campaign finance records show Commissioners Whitfield, Lopez, and Brown received a combined $12,500 from principals of Meridian Development Partners LLC between July and August 2024, five months before voting to approve a controversial height variance at 450 Oak Street.",
    beat: "finance",
    type: "campaign_finance",
    sourceName: "Oakdale County Campaign Finance Database",
    sourceLink: "#",
    detectedDate: "2026-03-21",
    relevanceScore: 91
  },
  {
    id: "lead-003",
    headline: "Water Authority Reserves Depleted by 43% Over Three Years; Rate Increase Looming",
    summary: "The Riverside Water & Sewer Authority's reserve fund has dropped from $19.8M to $11.2M since FY2023, drawing down reserves each year to cover operating shortfalls. Staff now recommends a 6.8% rate increase effective January 2027. EPA consent decree compliance costs are the primary driver.",
    beat: "government",
    type: "policy_change",
    sourceName: "FY2026 Proposed Budget - Water & Sewer Enterprise Fund",
    sourceLink: "#",
    detectedDate: "2026-03-19",
    relevanceScore: 88
  },
  {
    id: "lead-004",
    headline: "Superior Court Overturns 12-Story Development Approval, Cites Inadequate Findings",
    summary: "Judge Maria Santos ruled the Oakdale Planning Commission exceeded its authority in granting a height variance from 35 to 142 feet for Meridian Development Partners' proposed 240-unit tower. The court found the Commission's one-paragraph findings 'wholly inadequate' under the municipal code.",
    beat: "courts",
    type: "court_filing",
    sourceName: "Henderson v. City of Oakdale Planning Commission, Case No. 2025-CV-04817",
    sourceLink: "#",
    detectedDate: "2026-03-20",
    relevanceScore: 87
  },
  {
    id: "lead-005",
    headline: "Parks Maintenance Budget Cut 8.9% Despite $47M Deferred Maintenance Backlog",
    summary: "The proposed FY2026 budget cuts Parks & Recreation maintenance funding by $3.4M (8.9%), even as the department's own assessment pegs deferred maintenance across 23 facilities at $47M. Director Kowalski's original request of $41.2M was reduced by $6.6M during the city manager's review.",
    beat: "government",
    type: "legislation",
    sourceName: "FY2026 Proposed Budget - Parks & Recreation Department",
    sourceLink: "#",
    detectedDate: "2026-03-18",
    relevanceScore: 85
  },
  {
    id: "lead-006",
    headline: "EPA Proposes First-Ever PFAS Discharge Limits; 4,700 Facilities Affected",
    summary: "The EPA published a proposed rule setting discharge limits for 12 PFAS compounds from industrial facilities. The limits of 4-10 parts per trillion would affect an estimated 4,700 facilities across 8 industrial categories, with compliance costs of $2.8B over 10 years. Comment period closes June 20.",
    beat: "government",
    type: "policy_change",
    sourceName: "Federal Register Vol. 91, No. 54",
    sourceLink: "#",
    detectedDate: "2026-03-22",
    relevanceScore: 82
  },
  {
    id: "lead-007",
    headline: "Police Overtime Spending Up 14% Year-Over-Year Despite Reduction Pledge",
    summary: "The proposed FY2026 police budget increases overtime from $18.7M to $21.3M, a 14% jump, contradicting the department's stated goal of reducing overtime reliance. Total police spending hits $187.4M, up 6.2% from the prior year.",
    beat: "government",
    type: "legislation",
    sourceName: "FY2026 Proposed Budget - Public Safety",
    sourceLink: "#",
    detectedDate: "2026-03-18",
    relevanceScore: 80
  },
  {
    id: "lead-008",
    headline: "Mayor's Top Donor Awarded No-Bid Emergency Shelter Contract Worth $1.8M",
    summary: "Greenfield Properties LLC was awarded a $1.8M emergency shelter services contract under the city's emergency procurement authority. Greenfield's managing partner, Richard Hale, has contributed $9,600 to Mayor Thompson's campaigns since 2023. The 'emergency' declaration cites winter weather, though the contract was signed in September.",
    beat: "contracts",
    type: "contract",
    sourceName: "City Procurement Database - Contract #2025-EM-0847",
    sourceLink: "#",
    detectedDate: "2026-03-17",
    relevanceScore: 92
  },
  {
    id: "lead-009",
    headline: "School Board Special Meeting Called to Discuss Superintendent's Severance Package",
    summary: "The Riverside Unified School Board called a special closed-session meeting for March 27 to discuss 'personnel matters related to the superintendent's contract.' Sources indicate Superintendent Davis is negotiating a departure with a severance package potentially exceeding $450K, including 18 months' salary.",
    beat: "meetings",
    type: "meeting",
    sourceName: "Riverside USD Board Special Meeting Notice",
    sourceLink: "#",
    detectedDate: "2026-03-23",
    relevanceScore: 78
  },
  {
    id: "lead-010",
    headline: "62% of Facilities Targeted by PFAS Rule Located Near Overburdened Communities",
    summary: "EPA's own environmental justice analysis shows that 62% of the 4,700 facilities that would be regulated under the proposed PFAS discharge rule are within 3 miles of communities designated as overburdened. These communities are more likely to rely on surface water for drinking water and subsistence fishing.",
    beat: "government",
    type: "policy_change",
    sourceName: "EPA Proposed Rule - Environmental Justice Analysis",
    sourceLink: "#",
    detectedDate: "2026-03-22",
    relevanceScore: 76
  },
  {
    id: "lead-011",
    headline: "County Pension Fund Reports 12% Return but Unfunded Liability Grows to $340M",
    summary: "The Riverside County Employee Retirement Association's annual report shows a 12.1% investment return for 2025, beating the 7.25% assumed rate. However, the unfunded actuarial accrued liability grew from $312M to $340M due to updated mortality assumptions and early retirement incentives offered during the pandemic.",
    beat: "finance",
    type: "campaign_finance",
    sourceName: "RCERA Annual Investment Report 2025",
    sourceLink: "#",
    detectedDate: "2026-03-15",
    relevanceScore: 74
  },
  {
    id: "lead-012",
    headline: "Council to Vote on Rezoning 48 Acres of Farmland for Warehouse Development",
    summary: "Tuesday's council agenda includes a rezoning application from LogiPlex Holdings to convert 48 acres of agricultural land along Route 15 to light industrial. The planning staff report recommends approval despite 200+ resident objections and the area's designation in the comprehensive plan as 'agricultural preservation.'",
    beat: "meetings",
    type: "meeting",
    sourceName: "Riverside City Council Agenda Item 7.B - March 25, 2026",
    sourceLink: "#",
    detectedDate: "2026-03-23",
    relevanceScore: 83
  },
  {
    id: "lead-013",
    headline: "State Auditor Flags $2.3M in Questionable Expenses at Regional Transit Authority",
    summary: "The State Auditor's office released a performance audit of the Riverside Regional Transit Authority finding $2.3M in expenses that lacked adequate documentation, including $840K in consulting contracts with firms connected to board members. The auditor recommends the board implement competitive procurement policies.",
    beat: "finance",
    type: "court_filing",
    sourceName: "State Auditor Report No. 2026-PA-0891",
    sourceLink: "#",
    detectedDate: "2026-03-20",
    relevanceScore: 89
  },
  {
    id: "lead-014",
    headline: "Library System to Eliminate 12 Positions, Cut Branch Hours by 29%",
    summary: "The proposed FY2026 budget eliminates 12 vacant positions at the Riverside Public Library (8 librarians, 4 support staff) and reduces hours at the Eastside and Northgate branches from 56 to 40 hours per week. The library board was not consulted on the cuts, according to board chair Nancy Chen.",
    beat: "government",
    type: "legislation",
    sourceName: "FY2026 Proposed Budget - Library Services",
    sourceLink: "#",
    detectedDate: "2026-03-18",
    relevanceScore: 72
  },
  {
    id: "lead-015",
    headline: "Former City Attorney Files Whistleblower Suit Alleging Bid-Rigging on Bridge Contract",
    summary: "Former Assistant City Attorney Diane Morales filed a whistleblower lawsuit alleging that city officials steered the $42M Riverside Crossing Bridge rehabilitation contract to a politically connected firm by sharing confidential bid information. The suit names City Engineer Paul Garrett and two unnamed city officials.",
    beat: "courts",
    type: "court_filing",
    sourceName: "Morales v. City of Riverside, Case No. 2026-CV-01204",
    sourceLink: "#",
    detectedDate: "2026-03-21",
    relevanceScore: 96
  },
  {
    id: "lead-016",
    headline: "Industry Groups Signal Legal Challenge to EPA PFAS Limits, Cite Lab Detection Issues",
    summary: "The American Chemistry Council, National Association of Manufacturers, and Surface Finishing Industry Council issued a joint statement calling the proposed PFAS discharge limits 'technologically infeasible,' noting that commercial lab detection limits for several targeted compounds are 8-12 ppt, near or above the proposed 4-10 ppt limits.",
    beat: "courts",
    type: "court_filing",
    sourceName: "Joint Industry Statement on EPA-HQ-OW-2025-0412",
    sourceLink: "#",
    detectedDate: "2026-03-23",
    relevanceScore: 71
  }
];
