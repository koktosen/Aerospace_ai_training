import React, { useState } from 'react';
import { DollarSign, Info, Users, Building } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

type CompanySize = 'small' | 'medium' | 'large';

interface MetricsData {
  software: string;
  setup: string;
  laborSavings: string;
  errorSavings: string;
  employees: string;
  annualRevenue: string;
}

const ROI_DATA: Record<CompanySize, MetricsData> = {
  small: {
    software: '45,000',
    setup: '120,000',
    laborSavings: '325,750',
    errorSavings: '780,500',
    employees: '50-250',
    annualRevenue: '$10-50M'
  },
  medium: {
    software: '120,000',
    setup: '250,000',
    laborSavings: '1,058,250',
    errorSavings: '3,454,500',
    employees: '250-1,000',
    annualRevenue: '$50-500M'
  },
  large: {
    software: '350,000',
    setup: '750,000',
    laborSavings: '4,235,600',
    errorSavings: '12,780,000',
    employees: '1,000+',
    annualRevenue: '$500M+'
  }
};

const RoiCalculator: React.FC = () => {
  const { theme } = useTheme();
  const [companySize, setCompanySize] = useState<CompanySize>('medium');
  const data = ROI_DATA[companySize];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-3" style={{ color: theme.colors.primaryDark }}>ROI Calculator</h2>
      <div className="p-4 rounded-lg border-l-4 mb-6" 
           style={{ 
             backgroundColor: theme.colors.backgroundLight, 
             borderColor: theme.colors.primary 
           }}>
        <p className="text-gray-800">
          Calculate the potential return on investment from implementing AI solutions for your aerospace operations.
        </p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4" style={{ color: theme.colors.primaryDark }}>Select Company Size</h3>
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={() => setCompanySize('small')}
            className={`flex items-center px-4 py-2 rounded-md border ${
              companySize === 'small' 
                ? 'text-white' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
            style={companySize === 'small' 
              ? { backgroundColor: theme.colors.primary, borderColor: theme.colors.primaryDark } 
              : {}}
          >
            <Building size={18} className="mr-2" />
            Small Enterprise
          </button>
          <button 
            onClick={() => setCompanySize('medium')}
            className={`flex items-center px-4 py-2 rounded-md border ${
              companySize === 'medium' 
                ? 'text-white' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
            style={companySize === 'medium' 
              ? { backgroundColor: theme.colors.primary, borderColor: theme.colors.primaryDark } 
              : {}}
          >
            <Building size={18} className="mr-2" />
            Mid-Size Enterprise
          </button>
          <button 
            onClick={() => setCompanySize('large')}
            className={`flex items-center px-4 py-2 rounded-md border ${
              companySize === 'large' 
                ? 'text-white' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
            style={companySize === 'large' 
              ? { backgroundColor: theme.colors.primary, borderColor: theme.colors.primaryDark } 
              : {}}
          >
            <Building size={18} className="mr-2" />
            Large Enterprise
          </button>
        </div>
      </div>
      
      <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: theme.colors.backgroundLight }}>
        <h3 className="text-lg font-bold mb-3 flex items-center" style={{ color: theme.colors.primaryDark }}>
          <Users className="mr-2" />
          Company Profile
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Employees</p>
            <p className="font-bold text-gray-800">{data.employees}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Annual Revenue</p>
            <p className="font-bold text-gray-800">{data.annualRevenue}</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-xl font-bold mb-4" style={{ color: theme.colors.primaryDark }}>Cost Factors</h3>
          <div className="p-4 rounded-lg border border-gray-200 mb-4" style={{ backgroundColor: theme.colors.backgroundLight }}>
            <h4 className="font-bold text-gray-800 mb-3">Implementation Costs</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Software Licensing (Annual)</label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">$</span>
                  <input type="text" value={data.software} className="border rounded px-2 py-1 w-full" readOnly />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Initial Setup & Integration</label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">$</span>
                  <input type="text" value={data.setup} className="border rounded px-2 py-1 w-full" readOnly />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4" style={{ color: theme.colors.primaryDark }}>Benefit Factors</h3>
          <div className="p-4 rounded-lg border border-gray-200 mb-4" style={{ backgroundColor: theme.colors.backgroundLight }}>
            <h4 className="font-bold text-gray-800 mb-3">Annual Savings</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Labor Time Savings</label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">$</span>
                  <input type="text" value={data.laborSavings} className="border rounded px-2 py-1 w-full" readOnly />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Error Reduction Savings</label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">$</span>
                  <input type="text" value={data.errorSavings} className="border rounded px-2 py-1 w-full" readOnly />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-4 border-t border-gray-200">
        <div className="flex items-start text-xs text-gray-500">
          <Info size={16} className="mr-2 flex-shrink-0 mt-0.5" style={{ color: theme.colors.primary }} />
          <p>
            <strong>Data Source:</strong> ROI calculations are based on a composite financial model developed from actual implementation data from 7 aerospace AI deployments (2021-2023). Metrics are segmented by organization size, with data collected from 3 small enterprises (50-250 employees), 3 mid-size enterprises (250-1000 employees), and 1 large enterprise (1000+ employees). Cost figures represent industry averages for enterprise-scale LLM and RAG implementations in technical documentation environments. The model incorporates direct implementation costs, ongoing operational expenses, and projected benefits based on time saving metrics from the Time Savings Analysis and error reduction metrics from the Accuracy Improvement Analysis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoiCalculator; 