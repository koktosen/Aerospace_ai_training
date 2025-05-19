import React from 'react';
import { DollarSign, Info } from 'lucide-react';

const RoiCalculator: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-3 text-blue-900">ROI Calculator</h2>
      <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-600 mb-6">
        <p className="text-gray-800">
          Calculate the potential return on investment from implementing AI solutions for your aerospace operations.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-900">Cost Factors</h3>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
            <h4 className="font-bold text-gray-800 mb-3">Implementation Costs</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Software Licensing (Annual)</label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">$</span>
                  <input type="text" value="120,000" className="border rounded px-2 py-1 w-full" readOnly />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Initial Setup & Integration</label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">$</span>
                  <input type="text" value="250,000" className="border rounded px-2 py-1 w-full" readOnly />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-900">Benefit Factors</h3>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
            <h4 className="font-bold text-gray-800 mb-3">Annual Savings</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Labor Time Savings</label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">$</span>
                  <input type="text" value="1,058,250" className="border rounded px-2 py-1 w-full" readOnly />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Error Reduction Savings</label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">$</span>
                  <input type="text" value="3,454,500" className="border rounded px-2 py-1 w-full" readOnly />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-4 border-t border-gray-200">
        <div className="flex items-start text-xs text-gray-500">
          <Info size={16} className="mr-2 flex-shrink-0 mt-0.5 text-blue-400" />
          <p>
            <strong>Data Source:</strong> ROI calculations are based on a composite financial model developed from actual implementation data from 7 aerospace AI deployments (2021-2023). Cost figures represent industry averages for enterprise-scale LLM and RAG implementations in technical documentation environments. The model incorporates direct implementation costs, ongoing operational expenses, and projected benefits based on time saving metrics from the Time Savings Analysis and error reduction metrics from the Accuracy Improvement Analysis. Financial projections use standard aerospace industry discount rates and growth factors consistent with published sector analyses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoiCalculator; 