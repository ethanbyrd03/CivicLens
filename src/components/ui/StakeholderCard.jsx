import React from 'react';

const StakeholderCard = ({ stakeholder }) => {
  const getStanceColor = (stance) => {
    switch (stance) {
      case 'support': return 'text-green-700 bg-green-100 border-green-200';
      case 'opposition': return 'text-red-700 bg-red-100 border-red-200';
      default: return 'text-gray-700 bg-gray-100 border-gray-200';
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="font-medium text-gray-900">{stakeholder.name}</span>
          <span className="text-sm text-gray-500 block">{stakeholder.role}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStanceColor(stakeholder.stance)}`}>
            {stakeholder.stance}
          </span>
          <span className="text-xs text-gray-400">{stakeholder.timestamp}</span>
        </div>
      </div>
      <p className="text-sm text-gray-600 italic leading-relaxed">"{stakeholder.quote}"</p>
    </div>
  );
};

export default StakeholderCard;