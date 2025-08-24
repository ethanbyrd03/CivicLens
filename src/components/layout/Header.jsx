import React from 'react';
import { Eye, Bell, Database } from 'lucide-react';

const Header = ({ showDataSources, setShowDataSources }) => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CivicLens</h1>
              <p className="text-sm text-gray-600">AI-Powered Local Policy Explorer</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setShowDataSources(!showDataSources)}
              className="flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              <Database className="w-4 h-4 mr-2" />
              Data Sources
            </button>
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors" />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </div>
            <div className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
              <span className="font-medium">Winston-Salem, NC</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;