export const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive': return 'text-green-700 bg-green-100 border-green-200';
      case 'negative': return 'text-red-700 bg-red-100 border-red-200';
      case 'mixed': return 'text-yellow-700 bg-yellow-100 border-yellow-200';
      default: return 'text-gray-700 bg-gray-100 border-gray-200';
    }
  };

export const getStanceColor = (stance) => {
    switch (stance) {
      case 'support': return 'text-green-700 bg-green-100 border-green-200';
      case 'opposition': return 'text-red-700 bg-red-100 border-red-200';
      default: return 'text-gray-700 bg-gray-100 border-gray-200';
    }
  };

export const getVotingStatusColor = (status) => {
    if (status.includes('Passed') || status.includes('Approved')) return 'text-green-700 bg-green-100';
    if (status.includes('Rejected')) return 'text-red-700 bg-red-100';
    return 'text-yellow-700 bg-yellow-100';
  };