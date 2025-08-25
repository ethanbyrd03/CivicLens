import React from 'react';

const StatsCard = ({ value, label, icon: Icon, iconColor }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-600">{label}</p>
        </div>
        <Icon className={`w-12 h-12 ${iconColor} opacity-80`} />
      </div>
    </div>
  );
};

export default StatsCard;