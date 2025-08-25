import React from 'react';
import { MessageSquare, Search, FileText, TrendingUp, Clock } from 'lucide-react';
import LoadingSpinner from '../common/LoadingSpinner';

const QAInterface = ({ 
  qaQuery, 
  setQaQuery, 
  handleQAQuery, 
  isLoading, 
  qaResult, 
  setSearchQuery 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 mb-8 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3 mb-4">
          <MessageSquare className="w-7 h-7 text-blue-600" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Ask About Local Policies</h2>
            <p className="text-sm text-gray-600">Get AI-powered answers from recent Winston-Salem council meetings</p>
          </div>
        </div>
        
        <div className="flex space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Ask about housing policies, transportation plans, budget decisions..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              value={qaQuery}
              onChange={(e) => setQaQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleQAQuery()}
            />
          </div>
          <button
            onClick={handleQAQuery}
            disabled={isLoading || !qaQuery.trim()}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed flex items-center space-x-2 shadow-sm transition-all"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <MessageSquare className="w-5 h-5" />
            )}
            <span>{isLoading ? 'Analyzing...' : 'Ask AI'}</span>
          </button>
        </div>
      </div>

      {qaResult && (
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-gray-800 mb-4 leading-relaxed">{qaResult.answer}</p>
              {qaResult.source && (
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span className="flex items-center">
                      <FileText className="w-4 h-4 mr-2" />
                      <span className="font-medium">Source:</span> {qaResult.source}
                    </span>
                    <span className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <span className="font-medium">Confidence:</span> {(qaResult.confidence * 100).toFixed(0)}%
                    </span>
                    {qaResult.timestamp && (
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {qaResult.timestamp}
                      </span>
                    )}
                  </div>
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-gray-500 mr-2">Related topics:</span>
                {qaResult.relatedTopics.map((topic, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setSearchQuery(topic)}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md hover:bg-blue-200 transition-colors cursor-pointer"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QAInterface;