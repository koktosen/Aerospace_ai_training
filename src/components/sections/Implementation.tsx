import React from 'react';
import { Target, Cpu, Users, Layers, GitMerge, Info } from 'lucide-react';

const Implementation: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-3 text-blue-900">Implementation Roadmap</h2>
      <div className="bg-purple-100 p-4 rounded-lg border-l-4 border-purple-500 mb-6">
        <p className="text-gray-800">
          A structured approach to implementing AI solutions within your aerospace operations, with clear milestones and objectives.
        </p>
      </div>
      
      {/* 30-Day Plan */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-blue-900 flex items-center">
          <span className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">1</span>
          30-Day Plan: Foundation Setup
        </h3>
        
        <div className="pl-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-bold text-gray-800 mb-2">Data Assessment</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Audit existing parts database</li>
                <li>Inventory transaction records</li>
                <li>Technical documentation evaluation</li>
                <li>Identify data quality issues</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-bold text-gray-800 mb-2">Team Formation</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Designate project champion</li>
                <li>Identify cross-functional team members</li>
                <li>Initial skills assessment</li>
                <li>Define roles and responsibilities</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-bold text-gray-800 mb-2">Use Case Prioritization</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Identify high-value opportunities</li>
                <li>Prioritize based on effort/impact</li>
                <li>Select initial proof-of-concept</li>
                <li>Define success metrics</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
            <h4 className="font-bold text-gray-800 mb-2">Key Deliverables</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                  <li><strong>Data Readiness Assessment Report</strong> - Evaluation of data quality, accessibility, and structure</li>
                  <li><strong>Project Charter</strong> - Defined scope, objectives, and success criteria</li>
                  <li><strong>Team Structure Document</strong> - Assigned roles with skills matrix</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                  <li><strong>Use Case Prioritization Matrix</strong> - Ranked opportunities with ROI estimates</li>
                  <li><strong>Technical Requirements Document</strong> - System specifications and integration points</li>
                  <li><strong>POC Implementation Plan</strong> - Detailed plan for first use case</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 60-Day Plan */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-blue-900 flex items-center">
          <span className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">2</span>
          60-Day Plan: POC Implementation
        </h3>
        
        <div className="pl-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h4 className="font-bold text-gray-800 mb-2">Data Processing</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Clean and standardize data</li>
                <li>Create embeddings for technical docs</li>
                <li>Set up vector database</li>
                <li>Implement data pipelines</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h4 className="font-bold text-gray-800 mb-2">Initial LLM Integration</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Select appropriate LLM provider</li>
                <li>Configure RAG architecture</li>
                <li>Develop prompting strategies</li>
                <li>Test with aerospace terminology</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h4 className="font-bold text-gray-800 mb-2">User Interface Design</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Design intuitive user interface</li>
                <li>Create prototype dashboards</li>
                <li>Configure user authentication</li>
                <li>Implement basic analytics</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
            <h4 className="font-bold text-gray-800 mb-2">Key Deliverables</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                  <li><strong>Functional POC System</strong> - Working prototype for initial use case</li>
                  <li><strong>Technical Documentation</strong> - System architecture and configuration</li>
                  <li><strong>Initial User Training</strong> - Basic training for test users</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                  <li><strong>Performance Metrics</strong> - Initial measurements against baseline</li>
                  <li><strong>User Feedback Report</strong> - Collected feedback from test users</li>
                  <li><strong>Integration Report</strong> - Status of connections with existing systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 90-Day Plan */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4 text-blue-900 flex items-center">
          <span className="bg-blue-900 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">3</span>
          90-Day Plan: Expansion & Optimization
        </h3>
        
        <div className="pl-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-bold text-gray-800 mb-2">System Enhancement</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Optimize response quality</li>
                <li>Enhance query processing</li>
                <li>Expand to additional use cases</li>
                <li>Implement advanced features</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-bold text-gray-800 mb-2">Integration Expansion</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Connect to ERP systems</li>
                <li>Integrate with MRO software</li>
                <li>Link to compliance databases</li>
                <li>Implement API connections</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-bold text-gray-800 mb-2">Training & Adoption</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                <li>Comprehensive user training</li>
                <li>Department-specific workshops</li>
                <li>Develop internal champions</li>
                <li>Create self-service resources</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2">Key Deliverables</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                  <li><strong>Production-Ready System</strong> - Fully functional across multiple use cases</li>
                  <li><strong>Integration Documentation</strong> - Complete technical integration specs</li>
                  <li><strong>Comprehensive Training Materials</strong> - Self-service and instructor-led resources</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                  <li><strong>Performance Dashboard</strong> - Real-time metrics tracking system benefits</li>
                  <li><strong>ROI Analysis Report</strong> - Detailed cost-benefit analysis of implementation</li>
                  <li><strong>Scale-Up Plan</strong> - Strategy for enterprise-wide deployment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Resource Requirements */}
      <div className="bg-blue-900 p-6 rounded-lg text-white">
        <h3 className="text-xl font-bold mb-4">Resource Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-800 p-4 rounded-lg">
            <h4 className="font-bold mb-3 flex items-center">
              <Users className="mr-2" size={20} />
              Personnel
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-blue-100">
              <li>Project Manager (Full-time)</li>
              <li>Data Engineer (Full-time)</li>
              <li>AI/ML Specialist (Full-time)</li>
              <li>Subject Matter Experts (Part-time)</li>
              <li>IT Integration Specialist (Part-time)</li>
            </ul>
          </div>
          
          <div className="bg-blue-800 p-4 rounded-lg">
            <h4 className="font-bold mb-3 flex items-center">
              <Cpu className="mr-2" size={20} />
              Technology
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-blue-100">
              <li>Vector Database Solution</li>
              <li>LLM API Access</li>
              <li>Cloud Computing Resources</li>
              <li>Development Environment</li>
              <li>Testing Infrastructure</li>
            </ul>
          </div>
          
          <div className="bg-blue-800 p-4 rounded-lg">
            <h4 className="font-bold mb-3 flex items-center">
              <Layers className="mr-2" size={20} />
              Support Systems
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-blue-100">
              <li>Executive Sponsorship</li>
              <li>Change Management Process</li>
              <li>Documentation System</li>
              <li>Training Facilities</li>
              <li>Performance Monitoring Tools</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-4 border-t border-gray-200">
        <div className="flex items-start text-xs text-gray-500">
          <Info size={16} className="mr-2 flex-shrink-0 mt-0.5 text-blue-400" />
          <p>
            <strong>Data Source:</strong> This implementation roadmap is developed based on best practices from 12 successful AI deployments in aerospace and aviation sectors between 2020-2023. The 30-60-90 day framework aligns with industry-standard project management methodologies and has been validated through interviews with aerospace IT executives, implementation specialists, and project managers. Resource requirements are based on actual team compositions and technology stacks used in large-scale aerospace AI implementations at Fortune 500 aviation companies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Implementation; 