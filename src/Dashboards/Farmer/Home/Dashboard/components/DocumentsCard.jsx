import React from 'react';
import { FileText, Download } from 'lucide-react';


export const DocumentsCard = ({ documents }) => {
  return (
    <div 
      className="glass p-6 rounded-xl"
      onClick={() => console.log('Documents card clicked')}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <FileText className="h-5 w-5 text-yellow-500" />
          <h2 className="text-lg font-semibold text-gray-900">Documents</h2>
        </div>
      </div>
      <div className="space-y-3">
        {documents.map((doc, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className={`h-2 w-2 rounded-full ${doc.uploaded ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              <span className="text-sm font-medium text-gray-700">{doc.name}</span>
            </div>
            <button 
              className="text-blue-500 hover:text-blue-600"
              onClick={(e) => {
                e.stopPropagation();
                console.log(`Download ${doc.name}`);
              }}
            >
              <Download className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};