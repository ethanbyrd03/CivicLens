import React from 'react';
import { Search } from 'lucide-react';
import { categories, sentiments } from '../../utils/constants';

const FilterPanel = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory, 
  selectedSentiment, 
  setSelectedSentiment 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 mb-8 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Search Policies & Transcripts</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Keywords, topics, or stakeholder names..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Overall Sentiment</label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedSentiment}
            onChange={(e) => setSelectedSentiment(e.target.value)}
          >
            {sentiments.map(sentiment => (
              <option key={sentiment} value={sentiment}>{sentiment}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;