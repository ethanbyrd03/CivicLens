import React, { useState } from 'react';
import { FileText, Calendar, Users, TrendingUp, Search } from 'lucide-react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import DataSourcesModal from './components/features/DataSourcesModal';
import QAInterface from './components/features/QAInterface';
import FilterPanel from './components/features/FilterPanel';
import StatsCard from './components/ui/StatsCard';
import PolicyCard from './components/ui/PolicyCard';

import { usePolicyFilter } from './hooks/usePolicyFilter';
import { useQAService } from './hooks/useQAService';
import { mockPolicies } from './data/mockData';

const CivicLens = () => {
  const [showDataSources, setShowDataSources] = useState(false);
  const [expandedPolicy, setExpandedPolicy] = useState(null);

  const {
    filteredPolicies,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedSentiment,
    setSelectedSentiment
  } = usePolicyFilter(mockPolicies);

  const {
    qaQuery,
    setQaQuery,
    qaResult,
    isLoading,
    handleQAQuery
  } = useQAService();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header showDataSources={showDataSources} setShowDataSources={setShowDataSources} />
      
      <DataSourcesModal 
        isOpen={showDataSources} 
        onClose={() => setShowDataSources(false)} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <QAInterface 
          qaQuery={qaQuery}
          setQaQuery={setQaQuery}
          qaResult={qaResult}
          isLoading={isLoading}
          handleQAQuery={handleQAQuery}
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

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard value={filteredPolicies.length} label="Policies Found" icon={FileText} iconColor="text-blue-600" />
          <StatsCard value="14" label="Days Tracked" icon={Calendar} iconColor="text-green-600" />
          <StatsCard value="12" label="Stakeholders" icon={Users} iconColor="text-purple-600" />
          <StatsCard value="87%" label="AI Accuracy" icon={TrendingUp} iconColor="text-orange-600" />
        </div>

        {/* Policy Cards */}
        <div className="space-y-6">
          {filteredPolicies.map(policy => (
            <PolicyCard 
              key={policy.id} 
              policy={policy} 
              setSearchQuery={setSearchQuery}
            />
          ))}
        </div>

        {/* No Results Message */}
        {filteredPolicies.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-24 h-24 text-gray-400 mx-auto mb-6" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No policies found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedSentiment('All');
              }}
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

export default CivicLens;