import { useState, useEffect } from 'react';

export const usePolicyFilter = (policies) => {
  const [filteredPolicies, setFilteredPolicies] = useState(policies);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSentiment, setSelectedSentiment] = useState('All');

  useEffect(() => {
    let filtered = policies.filter(policy => {
      const matchesSearch = searchQuery === '' || 
        policy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        policy.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        policy.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase())) ||
        policy.keywordMatches.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || policy.category === selectedCategory;
      const matchesSentiment = selectedSentiment === 'All' || policy.sentiment.toLowerCase() === selectedSentiment.toLowerCase();
      
      return matchesSearch && matchesCategory && matchesSentiment;
    });
    
    setFilteredPolicies(filtered);
  }, [searchQuery, selectedCategory, selectedSentiment, policies]);

  return {
    filteredPolicies,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedSentiment,
    setSelectedSentiment
  };
};