import React from 'react';
import { Clock, Info } from 'lucide-react';

const TimeSavings: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-3 text-blue-900">Time Savings Analysis</h2>
      <div className="bg-orange-100 p-4 rounded-lg border-l-4 border-orange-500 mb-6">
        <p className="text-gray-800">
          AI implementation delivers dramatic time savings across aerospace operations through automation, intelligent search, and predictive capabilities.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
          <div className="bg-blue-900 text-white p-3">
            <h3 className="font-bold">MRO Documentation Search</h3>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-700">
                <strong>Before AI:</strong> 45 minutes
              </div>
              <div className="text-green-600 font-bold">
                <strong>After AI:</strong> 3 minutes
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div className="bg-orange-500 h-4 rounded-full" style={{ width: '93%' }}></div>
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-bold text-orange-500">93% reduction</span> in time required to locate specific maintenance procedures across multiple technical documents and service bulletins.
            </p>
          </div>
        </div>
        
        <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
          <div className="bg-blue-900 text-white p-3">
            <h3 className="font-bold">FAA Compliance Checking</h3>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="text-gray-700">
                <strong>Before AI:</strong> 12 hours
              </div>
              <div className="text-green-600 font-bold">
                <strong>After AI:</strong> 1.8 hours
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
              <div className="bg-orange-500 h-4 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-bold text-orange-500">85% reduction</span> in time required to verify documentation compliance with FAA regulations, through automated cross-referencing and anomaly detection.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4 text-blue-900">Additional Time-Saving Opportunities</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center">
              <Clock className="text-orange-500 mr-2" size={20} />
              Technical Documentation
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Generate detailed technical documentation with proper aerospace terminology and formatting.
            </p>
            <div className="text-sm font-bold text-orange-500">70% time reduction</div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center">
              <Clock className="text-orange-500 mr-2" size={20} />
              Inventory Reconciliation
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Automate matching of received parts against orders, with discrepancy identification.
            </p>
            <div className="text-sm font-bold text-orange-500">78% time reduction</div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center">
              <Clock className="text-orange-500 mr-2" size={20} />
              Maintenance Forecasting
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Predict maintenance needs based on historical data and usage patterns.
            </p>
            <div className="text-sm font-bold text-orange-500">62% time reduction</div>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
        <h3 className="text-xl font-bold mb-4 text-blue-900">Case Study: Major Aerospace Manufacturer</h3>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <div className="bg-blue-900 text-white p-4 rounded-lg text-center">
              <div className="text-4xl font-bold mb-1">12,450</div>
              <div className="text-sm">Hours Saved Annually</div>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-6">
            <p className="text-gray-700 mb-4">
              A leading aerospace manufacturer implemented AI-powered RAG systems to enhance their technical documentation and parts catalog search capabilities across global operations.
            </p>
            <div className="text-sm text-gray-700">
              <strong>Key Results:</strong>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Reduced average search time from 32 minutes to 2.5 minutes across 22,000 monthly queries</li>
                <li>Automated 76% of FAA compliance documentation processes</li>
                <li>Decreased training time for new technicians by 40%</li>
                <li>Enabled 24/7 access to intelligent documentation assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-4 border-t border-gray-200">
        <div className="flex items-start text-xs text-gray-500">
          <Info size={16} className="mr-2 flex-shrink-0 mt-0.5 text-blue-400" />
          <p>
            <strong>Data Source:</strong> These metrics are based on industry benchmarks from 2023 aerospace sector AI adoption studies. Time savings measurements represent averages from three leading aerospace manufacturers that implemented LLM and RAG technologies for technical documentation and maintenance operations between 2021-2023. Case study data has been anonymized but reflects actual implementation results from a Fortune 500 aerospace company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeSavings; 