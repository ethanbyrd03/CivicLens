export const generateQAResponse = (query) => {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('housing') || lowerQuery.includes('affordable')) {
    return {
      answer: "The Winston-Salem City Council recently approved a $50M affordable housing initiative to build 500 new units downtown. The proposal passed 7-2 and includes zoning reforms and tax incentives for developers.",
      source: "City Council Meeting - August 20, 2024",
      confidence: 0.89,
      relatedTopics: ["affordable housing", "zoning reform", "tax incentives"],
      timestamp: "1:23:45"
    };
  }
  
  if (lowerQuery.includes('transport') || lowerQuery.includes('bus') || lowerQuery.includes('electric')) {
    return {
      answer: "The city approved a $25M electric bus expansion plan that will replace 40% of the fleet with electric vehicles over three years. The plan includes new charging infrastructure and expanded routes to underserved neighborhoods.",
      source: "Transportation Committee Meeting - August 18, 2024",
      confidence: 0.85,
      relatedTopics: ["electric buses", "public transit", "sustainability"],
      timestamp: "0:32:18"
    };
  }
  
  if (lowerQuery.includes('climate') || lowerQuery.includes('environment')) {
    return {
      answer: "Winston-Salem adopted an ambitious Climate Action Plan 2024-2030 aiming for carbon neutrality by 2030. The plan includes renewable energy investments, building efficiency standards, and green infrastructure development.",
      source: "Environment Committee Meeting - August 19, 2024",
      confidence: 0.93,
      relatedTopics: ["climate action", "renewable energy", "sustainability"],
      timestamp: "0:15:45"
    };
  }
  
  if (lowerQuery.includes('police') || lowerQuery.includes('safety')) {
    return {
      answer: "The Budget Committee is considering reallocating $8M (15%) from police funding toward community safety programs and mental health crisis response. The proposal is tied 4-4 and awaits the mayor's deciding vote.",
      source: "Budget Committee Meeting - August 22, 2024",
      confidence: 0.81,
      relatedTopics: ["police reform", "community programs", "mental health"],
      timestamp: "1:12:34"
    };
  }
  
  return {
    answer: "I couldn't find specific information about that topic in recent council meetings. Try asking about housing policies, transportation plans, climate action, or public safety initiatives.",
    source: null,
    confidence: 0.0,
    relatedTopics: ["housing", "transportation", "climate", "public safety"],
    timestamp: null
  };
};

export const filterPolicies = (policies, searchQuery, selectedCategory, selectedSentiment) => {
  return policies.filter(policy => {
    const matchesSearch = searchQuery === '' || 
      policy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      policy.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      policy.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase())) ||
      policy.keywordMatches.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || policy.category === selectedCategory;
    const matchesSentiment = selectedSentiment === 'All' || policy.sentiment.toLowerCase() === selectedSentiment.toLowerCase();
    
    return matchesSearch && matchesCategory && matchesSentiment;
  });
};