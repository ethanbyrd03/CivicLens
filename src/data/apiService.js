export const submitQuestion = async (question) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1800));
  return generateQAResponse(question);
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