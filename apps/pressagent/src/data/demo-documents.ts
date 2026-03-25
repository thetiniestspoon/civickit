export interface ProcessedDocument {
  id: string;
  title: string;
  type: string;
  pageCount: number;
  uploadDate: string;
  keyEntitiesCount: number;
  summaryPreview: string;
  fullSummary: string;
  source: string;
  entities: {
    people: string[];
    organizations: string[];
    amounts: string[];
    dates: string[];
  };
  sections: {
    title: string;
    pageRange: string;
    content: string;
  }[];
}

export const demoDocuments: ProcessedDocument[] = [
  {
    id: "city-budget-fy2026",
    title: "City of Riverside FY2026 Proposed Operating Budget",
    type: "Municipal Budget",
    pageCount: 247,
    uploadDate: "2026-03-18",
    keyEntitiesCount: 84,
    summaryPreview: "The proposed $1.2B operating budget includes a 14% increase in police overtime spending and a $3.4M cut to parks maintenance, despite a projected $28M surplus...",
    fullSummary: "The City of Riverside's proposed FY2026 operating budget totals $1.218 billion, representing a 4.2% increase over FY2025 actuals. The budget projects $1.246 billion in revenues, yielding a $28.1 million surplus that the city manager proposes allocating to the Capital Reserve Fund. Notable changes include a 14% increase in police overtime spending ($18.7M to $21.3M), a $3.4M reduction in Parks & Recreation maintenance funding, elimination of 12 vacant library staff positions, and a new $5.2M allocation for a downtown surveillance camera network. The Water & Sewer Enterprise Fund shows a projected $4.1M shortfall that would require a 6.8% rate increase effective January 2027. Three council members have filed budget amendments ahead of the April 15 public hearing.",
    source: "City of Riverside Office of Management and Budget",
    entities: {
      people: [
        "City Manager Laura Chen",
        "CFO Marcus Williams",
        "Council Member James Torres",
        "Council Member Patricia Adebayo",
        "Council Member Robert Nakamura",
        "Parks Director Diane Kowalski",
        "Police Chief Anthony Reeves"
      ],
      organizations: [
        "Riverside Police Department",
        "Riverside Parks & Recreation",
        "Riverside Public Library System",
        "Water & Sewer Authority",
        "Office of Management and Budget",
        "Downtown Business Alliance",
        "Riverside Teachers Union"
      ],
      amounts: [
        "$1.218 billion (total budget)",
        "$28.1 million (projected surplus)",
        "$21.3 million (police overtime)",
        "$3.4 million (parks cut)",
        "$5.2 million (surveillance network)",
        "$4.1 million (water/sewer shortfall)",
        "6.8% (proposed rate increase)"
      ],
      dates: [
        "April 15, 2026 (public hearing)",
        "July 1, 2026 (fiscal year start)",
        "January 1, 2027 (rate increase effective)",
        "March 12, 2026 (budget submission)"
      ]
    },
    sections: [
      {
        title: "Executive Summary",
        pageRange: "1-8",
        content: "City Manager Laura Chen's transmittal letter highlights 'fiscal prudence while investing in public safety.' The budget proposes maintaining the current property tax rate of $0.84 per $100 assessed value while relying on a 3.1% growth in the commercial tax base. The General Fund accounts for $687M of total expenditures, with enterprise funds covering the remainder. Key priorities listed: public safety technology upgrades, infrastructure deferred maintenance, and workforce retention bonuses."
      },
      {
        title: "Revenue Projections",
        pageRange: "9-34",
        content: "Property tax revenue projected at $412M (up 3.1%), sales tax at $156M (up 1.8%), and intergovernmental transfers at $89M (flat). Notable: the budget assumes passage of the pending state transportation bill which would add $12.4M in highway fund allocations. If the bill fails, the transportation maintenance budget faces a shortfall. Federal ARPA funds of $8.2M remain unspent from prior allocations and are programmed for water infrastructure."
      },
      {
        title: "Public Safety",
        pageRange: "35-78",
        content: "Police Department: $187.4M total (+6.2%). Overtime budget increases from $18.7M to $21.3M despite a stated goal of reducing overtime reliance. 42 new body cameras at $1.2M. Downtown surveillance camera network: $5.2M capital plus $800K annual maintenance. Fire Department: $94.2M total (+2.1%). Two new ambulance units ($3.8M) to reduce response times in the Southeast district. 911 Center: $12.1M for technology platform migration."
      },
      {
        title: "Parks & Recreation",
        pageRange: "79-102",
        content: "Total budget: $34.6M (down 8.9% from $38.0M). The $3.4M reduction comes entirely from maintenance operations. Director Kowalski's budget request of $41.2M was reduced by $6.6M during the city manager's review. Deferred maintenance backlog now estimated at $47M across 23 park facilities. Community pool repairs ($2.1M) deferred to FY2027. Youth sports programming maintained at current levels ($4.8M)."
      },
      {
        title: "Library Services",
        pageRange: "103-118",
        content: "Total budget: $18.9M (down 4.5%). Elimination of 12 vacant positions (8 librarians, 4 support staff) saves $890K. Hours at Eastside and Northgate branches reduced from 56 to 40 per week. Digital collection spending increased 22% to $2.4M. Main branch renovation Phase 2 ($6.1M) funded through capital budget."
      },
      {
        title: "Water & Sewer Enterprise Fund",
        pageRange: "119-156",
        content: "Operating revenues of $78.3M against expenses of $82.4M create a $4.1M structural deficit. The fund has drawn down reserves for three consecutive years; current reserves at $11.2M (down from $19.8M in FY2023). Staff recommends a 6.8% rate increase effective January 2027. EPA consent decree compliance costs ($14.2M remaining) drive capital spending. Lead service line replacement program: $8.4M over 4 years, partially offset by federal Infrastructure Act funding."
      },
      {
        title: "Capital Improvement Program",
        pageRange: "157-210",
        content: "Five-year CIP totals $312M. Major projects: Riverside Crossing Bridge rehabilitation ($42M), new Southeast Fire Station #12 ($18M), downtown streetscape improvements ($24M), stormwater system upgrades ($38M). Funding mix: 34% general obligation bonds, 28% enterprise fund revenues, 22% state/federal grants, 16% pay-as-you-go."
      },
      {
        title: "Appendices & Schedules",
        pageRange: "211-247",
        content: "Position count summary: 4,218 FTE (net reduction of 8 from FY2025). Salary schedules, fee schedules, fund balance projections, debt service schedules, and performance metrics by department. Historical comparison tables showing five-year spending trends by category."
      }
    ]
  },
  {
    id: "zoning-ruling-2026",
    title: "Henderson v. City of Oakdale Planning Commission - Zoning Dispute Ruling",
    type: "Court Ruling",
    pageCount: 38,
    uploadDate: "2026-03-20",
    keyEntitiesCount: 42,
    summaryPreview: "Superior Court ruled that the Oakdale Planning Commission exceeded its authority when it approved a variance allowing a 12-story mixed-use development in a residential zone...",
    fullSummary: "In Henderson et al. v. City of Oakdale Planning Commission (Case No. 2025-CV-04817), Superior Court Judge Maria Santos ruled that the Planning Commission exceeded its statutory authority when it granted a height variance allowing Meridian Development Partners to construct a 12-story, 240-unit mixed-use building at 450 Oak Street in the R-2 residential zone. The court found the Commission failed to make the required findings under Municipal Code Section 17.62.040, specifically that the variance was not the minimum necessary to afford relief and that the project did not meet the 'unique hardship' standard. The ruling orders the variance revoked and remands the matter to the Commission for reconsideration. The court noted that three of five commissioners had received campaign contributions from Meridian's principals within 12 months of the vote, though it stopped short of finding a conflict of interest. Meridian has indicated it will appeal to the Court of Appeals.",
    source: "Oakdale County Superior Court, Department 7",
    entities: {
      people: [
        "Judge Maria Santos",
        "Patricia Henderson (lead plaintiff)",
        "David Chen (plaintiff)",
        "Robert Meridian (developer principal)",
        "Commissioner Alan Whitfield",
        "Commissioner Sandra Lopez",
        "Commissioner Terrence Brown",
        "Attorney James Fitzgerald (plaintiffs)",
        "Attorney Karen Walsh (city)",
        "Attorney Michael Torres (Meridian)"
      ],
      organizations: [
        "City of Oakdale Planning Commission",
        "Meridian Development Partners LLC",
        "Oak Street Neighborhood Association",
        "Oakdale County Superior Court",
        "Oakdale City Attorney's Office",
        "Fitzgerald & Associates",
        "Walsh Legal Group"
      ],
      amounts: [
        "240 units (proposed development)",
        "12 stories (proposed height)",
        "$84 million (estimated project value)",
        "$12,500 (combined campaign contributions)",
        "$2.4 million (plaintiff estimated property value impact)",
        "35 feet (current zone height limit)"
      ],
      dates: [
        "January 14, 2025 (Commission vote)",
        "March 8, 2025 (suit filed)",
        "February 28, 2026 (oral arguments)",
        "March 19, 2026 (ruling issued)",
        "April 18, 2026 (appeal deadline)",
        "August 2024 (campaign contributions)"
      ]
    },
    sections: [
      {
        title: "Case Background & Procedural History",
        pageRange: "1-6",
        content: "Patricia Henderson and 47 co-plaintiffs, all residents within 500 feet of the proposed development site at 450 Oak Street, filed suit on March 8, 2025, challenging the Planning Commission's January 14, 2025 approval of a height variance from 35 feet to 142 feet. The variance would permit Meridian Development Partners to build a 12-story mixed-use tower with 240 residential units, 18,000 sq ft of ground-floor retail, and a 3-level underground parking garage. The R-2 zone limits buildings to 35 feet / 3 stories."
      },
      {
        title: "Plaintiff's Arguments",
        pageRange: "7-14",
        content: "Plaintiffs argued the Commission: (1) failed to make required findings under Municipal Code 17.62.040; (2) applied an incorrect legal standard for 'unique hardship'; (3) did not consider less intensive alternatives as required by state variance law; and (4) three commissioners had disqualifying conflicts of interest due to campaign contributions from Meridian principals totaling $12,500 in August 2024, five months before the vote."
      },
      {
        title: "City and Developer's Defense",
        pageRange: "15-20",
        content: "The City argued the Commission properly exercised its discretion and that the variance findings, while 'concise,' were legally sufficient. Meridian argued the site's irregular lot shape and proximity to the commercial district constituted unique hardship, and that the project would further the city's Housing Element goals by adding 240 units, including 24 below-market-rate units. On the conflict claim, the City noted contributions were below the $5,000 per-person disqualification threshold."
      },
      {
        title: "Court's Analysis - Variance Standards",
        pageRange: "21-30",
        content: "Judge Santos found the Commission's one-paragraph findings 'wholly inadequate' under the four-part test required by Section 17.62.040. The court noted the Commission did not address why a 12-story variance was the minimum relief necessary when alternative designs at 6-8 stories could achieve substantial development. The 'unique hardship' finding relied on the site's proximity to commercial zoning, which the court found was a characteristic shared by dozens of parcels and therefore not 'unique' to this property."
      },
      {
        title: "Court's Analysis - Campaign Contributions",
        pageRange: "31-35",
        content: "The court examined the campaign contributions of $4,000 to Commissioner Whitfield, $5,000 to Commissioner Lopez, and $3,500 to Commissioner Brown, all from Meridian Development Partners' principals. While each contribution fell below the $5,000 statutory disqualification threshold, the court found the 'pattern and timing troubling' but declined to find a legal conflict. The court recommended the City Council review its ethics ordinance to address cumulative contributions from related entities."
      },
      {
        title: "Order & Remedy",
        pageRange: "36-38",
        content: "The court orders: (1) the height variance for 450 Oak Street is revoked; (2) the matter is remanded to the Planning Commission for reconsideration in compliance with this ruling; (3) Meridian shall halt all site preparation work pending Commission action; (4) each party to bear its own costs. The court denies plaintiffs' request for attorney fees. Meridian Development Partners has 30 days to file a notice of appeal."
      }
    ]
  },
  {
    id: "epa-pfas-rule-2026",
    title: "EPA Proposed Rule: PFAS Discharge Limits for Industrial Facilities",
    type: "Proposed Federal Regulation",
    pageCount: 156,
    uploadDate: "2026-03-22",
    keyEntitiesCount: 63,
    summaryPreview: "The EPA proposes first-ever discharge limits for 12 PFAS compounds from industrial facilities, affecting an estimated 4,700 facilities nationwide with compliance costs projected at $2.8B...",
    fullSummary: "The Environmental Protection Agency has published a proposed rule establishing effluent limitation guidelines (ELGs) for per- and polyfluoroalkyl substances (PFAS) discharged by industrial facilities into surface waters and publicly owned treatment works. The rule would set maximum allowable discharge concentrations for 12 specific PFAS compounds, with limits ranging from 4 parts per trillion (ppt) for PFOA and PFOS to 10 ppt for other long-chain PFAS. An estimated 4,700 facilities across 8 industrial categories would be affected, including metal finishing, chemical manufacturing, textile processing, and electronics manufacturing. The EPA estimates industry-wide compliance costs of $2.8 billion over 10 years, with potential benefits of $4.1-$7.3 billion in avoided health costs and environmental remediation. The 90-day public comment period closes June 20, 2026. Three industry trade associations have already announced plans to challenge the rule, arguing the proposed limits are below current detection capabilities for most commercial laboratories.",
    source: "Federal Register Vol. 91, No. 54 / EPA-HQ-OW-2025-0412",
    entities: {
      people: [
        "EPA Administrator Rachel Nguyen",
        "Deputy Administrator Mark Collins",
        "Dr. Sarah Patel (EPA Office of Water)",
        "Sen. Thomas Griggs (R-OH, critic)",
        "Sen. Maria Vasquez (D-NM, sponsor)",
        "Dr. James Morton (industry expert witness)"
      ],
      organizations: [
        "Environmental Protection Agency",
        "EPA Office of Water",
        "American Chemistry Council",
        "National Association of Manufacturers",
        "Surface Finishing Industry Council",
        "Environmental Defense Fund",
        "Earthjustice",
        "National Academies of Sciences"
      ],
      amounts: [
        "4 ppt (PFOA/PFOS limit)",
        "10 ppt (other PFAS limits)",
        "$2.8 billion (10-year compliance cost)",
        "$4.1-$7.3 billion (estimated benefits)",
        "4,700 facilities (affected)",
        "8 industrial categories",
        "12 PFAS compounds"
      ],
      dates: [
        "March 22, 2026 (publication date)",
        "June 20, 2026 (comment deadline)",
        "October 2026 (final rule target)",
        "January 1, 2028 (proposed compliance date)",
        "January 1, 2030 (full compliance deadline)"
      ]
    },
    sections: [
      {
        title: "Regulatory Background & Authority",
        pageRange: "1-18",
        content: "The proposed rule is issued under the Clean Water Act Section 304, which authorizes EPA to establish effluent limitation guidelines for categories of point sources. This represents the first time EPA has established ELGs specifically targeting PFAS compounds. The agency cites the 2024 National Academies report finding 'sufficient evidence' linking PFAS exposure to kidney cancer, thyroid disease, and immune system effects. The rule builds on the 2024 drinking water PFAS standards (MCLs) and extends protections to surface water discharges."
      },
      {
        title: "Proposed Discharge Limits",
        pageRange: "19-42",
        content: "Maximum daily discharge concentrations: PFOA at 4 ppt, PFOS at 4 ppt, PFHxS at 8 ppt, PFNA at 8 ppt, PFDA at 10 ppt, and seven additional PFAS compounds at 10 ppt each. Monthly average limits set at 80% of daily maximums. The EPA evaluated three regulatory alternatives: Option A (technology-based limits at 20 ppt), Option B (health-based limits at 4-10 ppt, selected), and Option C (non-detect standard). Facilities must begin monitoring within 180 days of the final rule."
      },
      {
        title: "Affected Industry Categories",
        pageRange: "43-72",
        content: "Eight industrial categories identified: (1) Metal Finishing - 1,840 facilities; (2) Chemical Manufacturing - 920 facilities; (3) Textile Processing - 480 facilities; (4) Electronics Manufacturing - 340 facilities; (5) Pulp & Paper - 290 facilities; (6) Petroleum Refining - 340 facilities; (7) Landfill Leachate Treatment - 280 facilities; (8) Airport De-icing Operations - 210 facilities. Small business impact analysis finds 18% of affected facilities qualify as small entities under SBA size standards."
      },
      {
        title: "Compliance Technology Assessment",
        pageRange: "73-98",
        content: "Best available technology (BAT) identified as granular activated carbon (GAC) treatment followed by ion exchange resin polishing. Alternative technologies include high-pressure membrane systems (reverse osmosis/nanofiltration) and electrochemical oxidation. The EPA acknowledges that current commercial laboratory detection limits for several PFAS compounds are 8-12 ppt, near or above proposed limits. The rule includes a provision allowing compliance demonstration through non-detect results using EPA Method 1633."
      },
      {
        title: "Economic Analysis",
        pageRange: "99-128",
        content: "Total annualized compliance costs estimated at $280M/year ($2.8B over 10 years). Cost breakdown by category: Metal Finishing ($890M), Chemical Manufacturing ($620M), Textile Processing ($340M), Electronics ($280M), and remaining categories ($670M combined). Estimated benefits: $410M-$730M/year in avoided healthcare costs, reduced environmental remediation, and improved ecosystem services. Benefit-cost ratio: 1.5:1 to 2.6:1 depending on assumptions."
      },
      {
        title: "Environmental Justice Considerations",
        pageRange: "129-142",
        content: "EPA analysis finds that 62% of affected facilities are located within 3 miles of communities designated as overburdened under the agency's EJScreen tool. PFAS contamination disproportionately impacts communities of color and low-income communities, who are more likely to rely on surface water sources for drinking water and subsistence fishing. The rule includes an enhanced compliance monitoring provision for facilities in EJ-designated areas."
      },
      {
        title: "Public Participation & Next Steps",
        pageRange: "143-156",
        content: "The 90-day public comment period runs through June 20, 2026. Three public hearings scheduled: April 22 in Washington, D.C.; May 6 in Chicago, IL; and May 20 in Houston, TX. Virtual participation available for all hearings. EPA will accept comments via regulations.gov docket EPA-HQ-OW-2025-0412. Final rule targeted for October 2026, with a phased compliance schedule: monitoring begins 180 days after final rule; interim limits effective January 1, 2028; full compliance required by January 1, 2030."
      }
    ]
  }
];
