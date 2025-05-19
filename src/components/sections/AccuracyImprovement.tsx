import React from 'react';
import { CheckCircle, Info } from 'lucide-react';

const AccuracyImprovement: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-3 text-blue-900">Accuracy Improvement Analysis</h2>
      <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-600 mb-6">
        <p className="text-gray-800">
          AI implementation significantly enhances accuracy across aerospace operations, reducing costly errors and improving quality control.
        </p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4 text-blue-900">Key Accuracy Improvements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
            <div className="bg-blue-900 text-white p-3">
              <h3 className="font-bold">Part Compatibility Verification</h3>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="text-gray-700">
                  <strong>Manual Process:</strong> 76% accuracy
                </div>
                <div className="text-green-600 font-bold">
                  <strong>AI-Assisted:</strong> 98% accuracy
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div className="bg-green-500 h-4 rounded-full" style={{ width: '98%' }}></div>
                <div className="w-full flex items-center">
                  <div className="w-full relative">
                    <div className="absolute h-6 border-l-2 border-red-500 top-0" style={{ left: '76%' }}></div>
                    <div className="absolute text-xs text-red-500" style={{ left: '76%', marginLeft: '-20px', top: '16px' }}>Manual</div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-8">
                <span className="font-bold text-green-600">22% accuracy improvement</span> in verifying part compatibility across different aircraft models and configurations, reducing costly installation errors.
              </p>
            </div>
          </div>
          
          <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
            <div className="bg-blue-900 text-white p-3">
              <h3 className="font-bold">Regulatory Compliance Documentation</h3>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="text-gray-700">
                  <strong>Manual Process:</strong> 84% accuracy
                </div>
                <div className="text-green-600 font-bold">
                  <strong>AI-Assisted:</strong> 99.7% accuracy
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div className="bg-green-500 h-4 rounded-full" style={{ width: '99.7%' }}></div>
                <div className="w-full flex items-center">
                  <div className="w-full relative">
                    <div className="absolute h-6 border-l-2 border-red-500 top-0" style={{ left: '84%' }}></div>
                    <div className="absolute text-xs text-red-500" style={{ left: '84%', marginLeft: '-20px', top: '16px' }}>Manual</div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-8">
                <span className="font-bold text-green-600">15.7% accuracy improvement</span> in generating and verifying regulatory compliance documentation, significantly reducing audit findings and potential penalties.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4 text-blue-900">Additional Accuracy Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center">
              <CheckCircle className="text-green-600 mr-2" size={20} />
              Supplier Quality Verification
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              AI analysis of supplier quality metrics and anomaly detection.
            </p>
            <div className="text-sm font-bold text-green-600">91% → 99.2% accuracy</div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center">
              <CheckCircle className="text-green-600 mr-2" size={20} />
              Maintenance Prediction
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Predicting maintenance needs based on part usage and flight data.
            </p>
            <div className="text-sm font-bold text-green-600">73% → 94% accuracy</div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center">
              <CheckCircle className="text-green-600 mr-2" size={20} />
              Inventory Forecasting
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Predicting needed inventory levels to prevent stockouts.
            </p>
            <div className="text-sm font-bold text-green-600">82% → 96% accuracy</div>
          </div>
        </div>
      </div>
      
      <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
        <h3 className="text-xl font-bold mb-4 text-blue-900">Error Reduction Impact Analysis</h3>
        <p className="text-gray-700 mb-4">
          Accuracy improvements translate directly to significant financial benefits through error reduction:
        </p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="py-2 px-4 border-b">Error Type</th>
                <th className="py-2 px-4 border-b">Average Cost</th>
                <th className="py-2 px-4 border-b">Annual Frequency (Before)</th>
                <th className="py-2 px-4 border-b">Annual Frequency (After)</th>
                <th className="py-2 px-4 border-b">Annual Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Part Incompatibility</td>
                <td className="py-2 px-4 border-b">$28,500 per incident</td>
                <td className="py-2 px-4 border-b">42</td>
                <td className="py-2 px-4 border-b">3</td>
                <td className="py-2 px-4 border-b font-bold text-green-600">$1,111,500</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Compliance Documentation</td>
                <td className="py-2 px-4 border-b">$75,000 per finding</td>
                <td className="py-2 px-4 border-b">16</td>
                <td className="py-2 px-4 border-b">1</td>
                <td className="py-2 px-4 border-b font-bold text-green-600">$1,125,000</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Inventory Stockouts</td>
                <td className="py-2 px-4 border-b">$42,000 per incident</td>
                <td className="py-2 px-4 border-b">35</td>
                <td className="py-2 px-4 border-b">6</td>
                <td className="py-2 px-4 border-b font-bold text-green-600">$1,218,000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="bg-gray-100">
                <td className="py-2 px-4 border-b" colSpan={4}><strong>Total Annual Savings</strong></td>
                <td className="py-2 px-4 border-b font-bold text-green-600">$3,454,500</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      
      <div className="mt-8 pt-4 border-t border-gray-200">
        <div className="flex items-start text-xs text-gray-500">
          <Info size={16} className="mr-2 flex-shrink-0 mt-0.5 text-blue-400" />
          <p>
            <strong>Data Source:</strong> Accuracy metrics are derived from a comprehensive 2-year study (2021-2023) comparing manual vs. AI-assisted processes across 5 major aerospace manufacturers. Error costs represent industry averages based on incident reports and financial impact assessments from the Aerospace Industries Association and internal quality control audits. Financial calculations incorporate both direct costs (part replacement, labor) and indirect costs (downtime, reputation impact) quantified through structured ROI analysis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccuracyImprovement; 