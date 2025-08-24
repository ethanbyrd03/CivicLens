import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import QAInterface from './components/features/QAInterface';
import FilterPanel from './components/features/FilterPanel';
import PolicyCard from './components/ui/PolicyCard';
import StatsCard from './components/ui/StatsCard';
import DataSourcesModal from './components/features/DataSourcesModal';
import { usePolicyFilter } from './hooks/usePolicyFilter';
import { useQAService } from './hooks/useQAService';
import { mockPolicies } from './data/mockData';
import { Search } from 'lucide-react';

const App = () => {
  const [policies] = useState(mockPolicies);
  const [expandedPolicy, setExpandedPolicy] = useState(null);
  const [showDataSources, setShowDataSources] = useState(false);

  const {
    filteredPolicies,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedSentiment,
    setSelectedSentiment
  } = usePolicyFilter(policies);

  const {
    qaQuery,
    setQaQuery,
    qaResult,
    isLoading,
    handleQAQuery
  } = useQAService();

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedSentiment('All');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header showDataSources={showDataSources} setShowDataSources={setShowDataSources} />
      
      <DataSourcesModal showDataSources={showDataSources} setShowDataSources={setShowDataSources} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <QAInterface 
          qaQuery={qaQuery}
          setQaQuery={setQaQuery}
          handleQAQuery={handleQAQuery}
          isLoading={isLoading}
          qaResult={qaResult}
          setSearchQuery={setSearchQuery}
        />

        <FilterPanel 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedSentiment={selectedSentiment}
          setSelectedSentiment={setSelectedSentiment}
        />

        <StatsCard filteredPolicies={filteredPolicies} />

        <div className="space-y-6">
          {filteredPolicies.map(policy => (
            <PolicyCard 
              key={policy.id}
              policy={policy}
              expandedPolicy={expandedPolicy}
              setExpandedPolicy={setExpandedPolicy}
              setSearchQuery={setSearchQuery}
            />
          ))}
        </div>

        {filteredPolicies.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-24 h-24 text-gray-400 mx-auto mb-6" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No policies found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters.</p>
            <button 
              onClick={clearFilters}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default App;