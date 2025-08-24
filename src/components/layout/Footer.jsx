import React from 'react';
import { Eye, Bell, Database } from 'lucide-react';

const Footer = ({ showDataSources, setShowDataSources }) => {
  return (
     <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">CivicLens</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">Making local government transparent and accessible through AI-powered policy analysis and real-time civic engagement.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">AI Features</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Automatic Speech Recognition</li>
                <li>• Policy Summarization</li>
                <li>• Sentiment Analysis</li>
                <li>• Question Answering</li>
                <li>• Topic Classification</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Technology Stack</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Hugging Face Transformers</li>
                <li>• Next.js & React</li>
                <li>• PostgreSQL + pgvector</li>
                <li>• FastAPI Backend</li>
                <li>• TailwindCSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Data Sources</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Council Data Project</li>
                <li>• Municipal APIs</li>
                <li>• Meeting Transcripts</li>
                <li>• Voting Records</li>
                <li>• Public Documents</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 CivicLens. Empowering civic engagement through AI. Built for portfolio demonstration.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;