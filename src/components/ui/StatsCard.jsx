import React from 'react';
import { FileText, Calendar, Users, TrendingUp } from 'lucide-react';

const StatsCard = ({ value, label, icon, color }) => {
  const getIcon = (iconName) => {
    const iconProps = { className: "w-12 h-12 opacity-80" };
    
    switch (iconName) {
      case 'FileText':
        return <FileText {...iconProps} className={`${iconProps.className} text-blue-600`} />;
      case 'Calendar':
        return <Calendar {...iconProps} className={`${iconProps.className} text-green-600`} />;
      case 'Users':
        return <Users {...iconProps} className={`${iconProps.className} text-purple-600`} />;
      case 'TrendingUp':
        return <TrendingUp {...iconProps} className={`${iconProps.className} text-orange-600`} />;
      default:
        return <FileText {...iconProps} className={`${iconProps.className} text-gray-600`} />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-600">{label}</p>
        </div>
        {getIcon(icon)}
      </div>
    </div>
  );
};

export default StatsCard;