import { useState, useCallback } from 'react';
import { submitQuestion, filterPolicies } from '../data/apiService';
import { mockPolicies } from '../data/mockData';
import { categories, sentiments } from '../utils/constants';

export const useQAService = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [qaResult, setQaResult] = useState(null);
  const [policies, setPolicies] = useState(mockPolicies);
  const [filteredPolicies, setFilteredPolicies] = useState(mockPolicies);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSentiment, setSelectedSentiment] = useState('All');

  const askQuestion = useCallback(async (question) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await submitQuestion(question);
      setQaResult(response);
      return response;
    } catch (err) {
      setError(err.message || 'Failed to get answer');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateFilters = useCallback((newSearchQuery, newCategory, newSentiment) => {
    setSearchQuery(newSearchQuery);
    setSelectedCategory(newCategory);
    setSelectedSentiment(newSentiment);
    
    const filtered = filterPolicies(policies, newSearchQuery, newCategory, newSentiment);
    setFilteredPolicies(filtered);
  }, [policies]);

  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedSentiment('All');
    setFilteredPolicies(policies);
  }, [policies]);

  return {
    isLoading,
    error,
    qaResult,
    searchQuery,
    selectedCategory,
    selectedSentiment,
    filteredPolicies,
    categories,
    sentiments,
    askQuestion,
    setSearchQuery,
    setSelectedCategory,
    setSelectedSentiment,
    updateFilters,
    clearFilters
  };
};
