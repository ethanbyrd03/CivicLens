import React from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import Modal from '../ui/Modal';

const DataSourcesModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Available Data Sources">
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-96 overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Available Data Sources</h3>
            <button 
              onClick={() => setShowDataSources(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Council Data Project</h4>
              <p className="text-sm text-gray-600 mb-2">Open-source platform providing searchable transcripts for Seattle, Portland, and other cities.</p>
              <div className="text-blue-600 text-sm flex items-center">
                <ExternalLink className="w-4 h-4 mr-1" />
                councildataproject.org
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">NYC Legistar API</h4>
              <p className="text-sm text-gray-600 mb-2">Direct access to New York City Council legislative data and voting records.</p>
              <div className="text-blue-600 text-sm flex items-center">
                <ExternalLink className="w-4 h-4 mr-1" />
                NYC Council API
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Local Government APIs</h4>
              <p className="text-sm text-gray-600">Winston-Salem, Austin, Seattle, and other cities provide open data portals with meeting transcripts and voting records.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Modal>
  );
};

export default DataSourcesModal;