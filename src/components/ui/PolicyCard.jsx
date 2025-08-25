import React, { useState } from 'react';
import { Calendar, FileText, Clock, Volume2, Users, ChevronDown, ChevronRight, ExternalLink, Download } from 'lucide-react';
import StakeholderCard from './StakeholderCard';
import { getSentimentColor, getVotingStatusColor } from '../../utils/helpers';

const PolicyCard = ({ policy, setSearchQuery }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3">
              <h3 className="text-xl font-semibold text-gray-900">{policy.title}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSentimentColor(policy.sentiment)}`}>
                {policy.sentiment} ({(policy.confidence * 100).toFixed(0)}%)
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full border border-blue-200">
                {policy.category}
              </span>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">{policy.summary}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-500">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(policy.date).toLocaleDateString()}
              </span>
              <span className="flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                {policy.meetingType}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {policy.source.duration}
              </span>
              <span className="flex items-center">
                <Volume2 className="w-4 h-4 mr-2" />
                {policy.audioAvailable ? 'Audio Available' : 'Transcript Only'}
              </span>
            </div>
          </div>
          <button
            onClick={() => setExpandedPolicy(expandedPolicy === policy.id ? null : policy.id)}
            className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {expandedPolicy === policy.id ? 
              <ChevronDown className="w-5 h-5 text-gray-600" /> : 
              <ChevronRight className="w-5 h-5 text-gray-600" />
            }
          </button>
        </div>

        {expandedPolicy === policy.id && (
          <div className="border-t border-gray-200 pt-6 mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Stakeholder Positions */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Stakeholder Positions
                </h4>
                <div className="space-y-4">
                  {policy.stakeholders.map((stakeholder, idx) => (
                    <StakeholderCard key={idx} stakeholder={stakeholder} />
                  ))}
                </div>
              </div>

              {/* Policy Details & Actions */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Policy Details
                </h4>
                
                {/* Voting Results */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Voting Results:</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getVotingStatusColor(policy.votingRecord.status)}`}>
                      {policy.votingRecord.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-green-600">{policy.votingRecord.inFavor}</div>
                      <div className="text-gray-600">In Favor</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-red-600">{policy.votingRecord.against}</div>
                      <div className="text-gray-600">Against</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-600">{policy.votingRecord.abstained}</div>
                      <div className="text-gray-600">Abstained</div>
                    </div>
                  </div>
                </div>

                {/* Related Topics */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Related Topics:</h5>
                  <div className="flex flex-wrap gap-2">
                    {policy.topics.map((topic, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setSearchQuery(topic)}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        #{topic}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="space-y-2">
                  <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Full Meeting Transcript
                  </button>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                    <Volume2 className="w-4 h-4 mr-2" />
                    Listen to Audio Recording
                  </button>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    Download Policy Summary
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PolicyCard;