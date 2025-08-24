export const mockPolicies = [
    {
        id: 1,
        title: "Affordable Housing Development Initiative",
        summary: "Comprehensive proposal to allocate $50M for 500 affordable housing units in downtown district. Council discussed zoning amendments, tax incentive programs for developers, and community impact assessments.",
        category: "Housing",
        date: "2024-08-20",
        meetingType: "City Council Meeting",
        sentiment: "positive",
        confidence: 0.87,
        keywordMatches: ["affordable housing", "zoning", "tax incentives", "downtown development"],
        stakeholders: [
        { 
            name: "Council Member Sarah Johnson", 
            role: "District 3 Representative",
            stance: "support", 
            quote: "This initiative will address our housing crisis head-on and provide opportunities for working families.",
            timestamp: "1:23:45"
        },
        { 
            name: "Mayor Robert Smith", 
            role: "Mayor",
            stance: "support", 
            quote: "Critical investment in our community's future that aligns with our 2030 vision.",
            timestamp: "0:45:12"
        },
        { 
            name: "Jennifer Davis - Taxpayer Coalition", 
            role: "Community Advocate",
            stance: "opposition", 
            quote: "We support affordable housing but have concerns about fiscal responsibility.",
            timestamp: "2:15:30"
        }
        ],
        source: {
        title: "City Council Meeting - August 20, 2024",
        url: "/transcripts/city-council-2024-08-20.pdf",
        videoUrl: "/videos/council-2024-08-20.mp4",
        duration: "3h 45m"
        },
        topics: ["affordable housing", "zoning reform", "tax incentives", "urban development"],
        fullTranscript: true,
        audioAvailable: true,
        votingRecord: {
        inFavor: 7,
        against: 2,
        abstained: 1,
        status: "Passed"
        }
    },
    {
        id: 2,
        title: "Electric Bus Fleet and Transit Route Expansion",
        summary: "Three-year, $25M plan to replace 40% of city buses with electric vehicles and expand routes to underserved neighborhoods. Includes new charging infrastructure and driver training programs.",
        category: "Transportation",
        date: "2024-08-18",
        meetingType: "Transportation Committee",
        sentiment: "neutral",
        confidence: 0.82,
        keywordMatches: ["electric buses", "public transit", "route expansion", "charging infrastructure"],
        stakeholders: [
        { 
            name: "Transportation Director Maria Lee", 
            role: "Department Head",
            stance: "support", 
            quote: "Essential for reducing traffic congestion and meeting our carbon neutrality goals.",
            timestamp: "0:32:18"
        },
        { 
            name: "Downtown Business Association", 
            role: "Business Group",
            stance: "neutral", 
            quote: "Supportive but need assurances about construction disruptions to commerce.",
            timestamp: "1:45:22"
        }
        ],
        source: {
        title: "Transportation Committee Meeting - August 18, 2024",
        url: "/transcripts/transport-committee-2024-08-18.pdf",
        videoUrl: "/videos/transport-committee-2024-08-18.mp4",
        duration: "2h 30m"
        },
        topics: ["electric vehicles", "public transit", "sustainability", "infrastructure"],
        fullTranscript: true,
        audioAvailable: true,
        votingRecord: {
        inFavor: 5,
        against: 1,
        abstained: 1,
        status: "Approved for Full Council Review"
        }
    },
    {
        id: 3,
        title: "Community Safety and Police Budget Reallocation",
        summary: "Proposal to redirect $8M (15%) of police department funding toward community-based safety programs, mental health crisis response teams, and youth education initiatives.",
        category: "Public Safety",
        date: "2024-08-22",
        meetingType: "Budget Committee",
        sentiment: "mixed",
        confidence: 0.79,
        keywordMatches: ["police budget", "community programs", "mental health", "crisis response"],
        stakeholders: [
        { 
            name: "Community Safety Alliance", 
            role: "Advocacy Group",
            stance: "support", 
            quote: "Investment in prevention will create lasting public safety improvements.",
            timestamp: "1:12:34"
        },
        { 
            name: "Officer Mike Rodriguez", 
            role: "Police Union Representative",
            stance: "opposition", 
            quote: "Budget cuts will compromise our ability to respond effectively to emergencies.",
            timestamp: "1:55:17"
        }
        ],
        source: {
        title: "Budget Committee Meeting - August 22, 2024",
        url: "/transcripts/budget-committee-2024-08-22.pdf",
        videoUrl: "/videos/budget-committee-2024-08-22.mp4",
        duration: "4h 15m"
        },
        topics: ["police reform", "community programs", "mental health services", "public safety"],
        fullTranscript: true,
        audioAvailable: true,
        votingRecord: {
        inFavor: 4,
        against: 4,
        abstained: 0,
        status: "Tie - Pending Mayor's Vote"
        }
    },
    {
        id: 4,
        title: "Winston-Salem Climate Action Plan 2024-2030",
        summary: "Comprehensive 6-year plan to achieve carbon neutrality by 2030 through renewable energy investments, building efficiency mandates, and green infrastructure development.",
        category: "Environment",
        date: "2024-08-19",
        meetingType: "Environment Committee",
        sentiment: "positive",
        confidence: 0.91,
        keywordMatches: ["climate action", "carbon neutrality", "renewable energy", "green jobs"],
        stakeholders: [
        { 
            name: "Dr. James Chen", 
            role: "Environmental Commissioner",
            stance: "support", 
            quote: "Ambitious but necessary timeline that positions Winston-Salem as a climate leader.",
            timestamp: "0:15:45"
        },
        { 
            name: "Chamber of Commerce", 
            role: "Business Organization",
            stance: "neutral", 
            quote: "Support goals but need detailed cost impact analysis for local businesses.",
            timestamp: "1:38:22"
        }
        ],
        source: {
        title: "Environment Committee Meeting - August 19, 2024",
        url: "/transcripts/environment-committee-2024-08-19.pdf",
        videoUrl: "/videos/environment-committee-2024-08-19.mp4",
        duration: "3h 20m"
        },
        topics: ["climate change", "renewable energy", "carbon neutrality", "sustainability"],
        fullTranscript: true,
        audioAvailable: true,
        votingRecord: {
        inFavor: 6,
        against: 0,
        abstained: 1,
        status: "Unanimously Approved"
        }
    }
];
