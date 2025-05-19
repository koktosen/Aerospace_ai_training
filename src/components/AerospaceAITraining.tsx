import React, { useState, ReactNode } from 'react';
import { ChevronDown, ChevronUp, Database, Cpu, Users, Layers, GitMerge, Zap, Info, Plane, Clock, DollarSign, CheckCircle, BarChart2, Target, Layout, BookOpen } from 'lucide-react';

interface AccordionItemProps {
  index: number;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

const AerospaceAITraining = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  const AccordionItem: React.FC<AccordionItemProps> = ({ index, title, icon, children }) => {
    const isActive = activeAccordion === index;
    return (
      <div className="border rounded-md mb-4 overflow-hidden shadow-sm">
        <button
          className={`w-full flex items-center justify-between p-4 text-left ${
            isActive ? 'bg-blue-900 text-white' : 'bg-white text-gray-800'
          }`}
          onClick={() => toggleAccordion(index)}
        >
          <div className="flex items-center space-x-2">
            {icon}
            <span className="font-medium">{title}</span>
          </div>
          {isActive ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {isActive && <div className="p-4 bg-white">{children}</div>}
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg shadow-lg">
      <div className="bg-blue-900 text-white p-6 rounded-t-lg shadow-md mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Aerospace AI Implementation</h1>
            <p className="text-blue-100">
              Transforming aerospace operations through LLM and RAG technologies
            </p>
          </div>
          <div>
            <Plane size={48} className="text-orange-400" />
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex flex-wrap border-b border-blue-900 mb-4">
          <button 
            className={`px-6 py-3 cursor-pointer rounded-t-lg font-medium ${activeTab === 0 ? 'bg-blue-900 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveTab(0)}
          >
            <div className="flex items-center">
              <BookOpen size={18} className="mr-2" />
              Learning Objectives
            </div>
          </button>
          <button 
            className={`px-6 py-3 cursor-pointer rounded-t-lg font-medium ${activeTab === 1 ? 'bg-blue-900 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveTab(1)}
          >
            <div className="flex items-center">
              <Clock size={18} className="mr-2" />
              Time Savings
            </div>
          </button>
          <button 
            className={`px-6 py-3 cursor-pointer rounded-t-lg font-medium ${activeTab === 2 ? 'bg-blue-900 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveTab(2)}
          >
            <div className="flex items-center">
              <CheckCircle size={18} className="mr-2" />
              Accuracy Improvement
            </div>
          </button>
          <button 
            className={`px-6 py-3 cursor-pointer rounded-t-lg font-medium ${activeTab === 3 ? 'bg-blue-900 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveTab(3)}
          >
            <div className="flex items-center">
              <DollarSign size={18} className="mr-2" />
              ROI Calculator
            </div>
          </button>
          <button 
            className={`px-6 py-3 cursor-pointer rounded-t-lg font-medium ${activeTab === 4 ? 'bg-blue-900 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveTab(4)}
          >
            <div className="flex items-center">
              <Target size={18} className="mr-2" />
              Implementation
            </div>
          </button>
        </div>

        {/* Tab 1: Learning Objectives */}
        {activeTab === 0 && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-3 text-blue-900">Aerospace AI Learning Path</h2>
            <p className="mb-4 text-gray-700">
              Our comprehensive training program designed to help aerospace executives understand and implement LLM and RAG technologies for operational excellence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                  <Layout className="text-orange-500 mr-2" size={20} />
                  Course Structure
                </h3>
                <p className="text-sm text-gray-700">
                  5 focused modules totaling 7.5 hours of instruction with hands-on workshops using your aerospace data.
                </p>
              </div>
              
              <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                  <Target className="text-blue-600 mr-2" size={20} />
                  Learning Outcome
                </h3>
                <p className="text-sm text-gray-700">
                  Executives will gain practical knowledge to implement AI solutions for inventory management, maintenance operations, and compliance documentation.
                </p>
              </div>
            </div>
            
            <AccordionItem 
              index={0} 
              title="Module 1: LLM Fundamentals for Aerospace" 
              icon={<BookOpen size={18} className={activeAccordion === 0 ? "text-white" : "text-orange-500"} />}
            >
              <div>
                <div className="mb-4">
                  <h4 className="font-bold text-blue-900 mb-2">Duration: 1 hour</h4>
                  <p className="text-gray-700 mb-3">
                    Introduction to how language models can understand and process highly technical aerospace terminology and documentation.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">Key Learning Objectives:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Understand core AI concepts relevant to aerospace operations</li>
                    <li>Learn how language models process technical aerospace terminology</li>
                    <li>Examine real-world examples from Boeing and Airbus</li>
                    <li>Identify the specialized knowledge gap in general LLMs for aerospace applications</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-md">
                  <h4 className="font-bold text-gray-800 mb-2">Industry Example:</h4>
                  <div className="flex">
                    <div className="mr-3 flex-shrink-0">
                      <Plane size={24} className="text-orange-500" />
                    </div>
                    <p className="text-sm text-gray-700">
                      Boeing's implementation of AI for parts catalog automation reduced search time by 82% and improved fulfillment accuracy by 37%, resulting in $12.4M annual savings across global operations.
                    </p>
                  </div>
                </div>
              </div>
            </AccordionItem>
            
            <AccordionItem 
              index={1} 
              title="Module 2: RAG Architecture for Aerospace Data" 
              icon={<Database size={18} className={activeAccordion === 1 ? "text-white" : "text-blue-600"} />}
            >
              <div>
                <div className="mb-4">
                  <h4 className="font-bold text-blue-900 mb-2">Duration: 1.5 hours</h4>
                  <p className="text-gray-700 mb-3">
                    Detailed exploration of how to implement Retrieval Augmented Generation for aerospace inventory and maintenance systems.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">Key Learning Objectives:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Master creating embeddings from technical parts documentation</li>
                    <li>Implement vector databases for 70,000+ inventory items</li>
                    <li>Connect transaction history to predictive maintenance models</li>
                    <li>Compare query performance between traditional databases and RAG systems</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-md">
                  <h4 className="font-bold text-gray-800 mb-2">Technical Demonstration:</h4>
                  <div className="flex">
                    <div className="mr-3 flex-shrink-0">
                      <GitMerge size={24} className="text-blue-600" />
                    </div>
                    <p className="text-sm text-gray-700">
                      Live comparison showing how RAG can find compatible parts across different aircraft models in seconds, versus minutes with traditional database queries, while handling complex aerospace specification parameters.
                    </p>
                  </div>
                </div>
              </div>
            </AccordionItem>
            
            <AccordionItem 
              index={2} 
              title="Module 3: Business Value Demonstration Workshop" 
              icon={<BarChart2 size={18} className={activeAccordion === 2 ? "text-white" : "text-green-600"} />}
            >
              <div>
                <div className="mb-4">
                  <h4 className="font-bold text-blue-900 mb-2">Duration: 2 hours</h4>
                  <p className="text-gray-700 mb-3">
                    Hands-on workshop demonstrating the tangible business value of AI implementation across aerospace operations.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">Key Learning Objectives:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Quantify time savings in MRO documentation and FAA compliance</li>
                    <li>Assess accuracy improvements in part compatibility verification</li>
                    <li>Calculate potential ROI using aerospace-specific metrics</li>
                    <li>Develop custom value propositions for different departments</li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                  <div className="bg-orange-50 p-3 rounded-md">
                    <h5 className="font-bold text-gray-800 mb-1 flex items-center">
                      <Clock size={16} className="text-orange-500 mr-1" /> Time Savings
                    </h5>
                    <p className="text-xs text-gray-700">
                      MRO documentation search: 45 min → 3 min per query
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-md">
                    <h5 className="font-bold text-gray-800 mb-1 flex items-center">
                      <CheckCircle size={16} className="text-green-600 mr-1" /> Accuracy
                    </h5>
                    <p className="text-xs text-gray-700">
                      Part compatibility verification: 76% → 98%
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-md">
                    <h5 className="font-bold text-gray-800 mb-1 flex items-center">
                      <DollarSign size={16} className="text-blue-600 mr-1" /> ROI
                    </h5>
                    <p className="text-xs text-gray-700">
                      Sample calculation: $4.2M annual savings
                    </p>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-md">
                  <h4 className="font-bold text-gray-800 mb-2">Industry Case Study:</h4>
                  <div className="flex">
                    <div className="mr-3 flex-shrink-0">
                      <Zap size={24} className="text-green-600" />
                    </div>
                    <p className="text-sm text-gray-700">
                      A major aerospace manufacturer implemented RAG for technical documentation and reduced compliance verification time by 85%, saving over 12,000 labor hours annually while improving audit pass rates from 82% to 99.7%.
                    </p>
                  </div>
                </div>
              </div>
            </AccordionItem>
            
            <AccordionItem 
              index={3} 
              title="Module 4: Implementation Workshop with Your Data" 
              icon={<Cpu size={18} className={activeAccordion === 3 ? "text-white" : "text-purple-600"} />}
            >
              <div>
                <div className="mb-4">
                  <h4 className="font-bold text-blue-900 mb-2">Duration: 2 hours</h4>
                  <p className="text-gray-700 mb-3">
                    Practical, hands-on session using anonymized samples from your own data to demonstrate immediate application.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">Key Learning Objectives:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Experience live demonstration with your 70,000 transaction records</li>
                    <li>Build queries using aerospace-specific terminology</li>
                    <li>Create custom vector databases from parts inventory data</li>
                    <li>Formulate solutions to your most time-consuming data tasks</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-md">
                  <h4 className="font-bold text-gray-800 mb-2">Workshop Format:</h4>
                  <div className="flex">
                    <div className="mr-3 flex-shrink-0">
                      <Users size={24} className="text-purple-600" />
                    </div>
                    <p className="text-sm text-gray-700">
                      This interactive session enables executives to identify specific use cases within their divisions and see real-time results using their own transaction and inventory data, including parts compatibility searches and regulatory documentation generation.
                    </p>
                  </div>
                </div>
              </div>
            </AccordionItem>
            
            <AccordionItem 
              index={4} 
              title="Module 5: Strategic Roadmap & Executive Decision Points" 
              icon={<Target size={18} className={activeAccordion === 4 ? "text-white" : "text-red-600"} />}
            >
              <div>
                <div className="mb-4">
                  <h4 className="font-bold text-blue-900 mb-2">Duration: 1 hour</h4>
                  <p className="text-gray-700 mb-3">
                    Strategic planning session outlining implementation steps, resource requirements, and success metrics.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">Key Learning Objectives:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Develop a 30/60/90 day implementation framework</li>
                    <li>Determine optimal resource allocation and team structure</li>
                    <li>Identify integration touchpoints with existing systems</li>
                    <li>Create success metrics dashboards for executive oversight</li>
                    <li>Assess project risks and develop mitigation strategies</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-4 rounded-md">
                  <h4 className="font-bold text-gray-800 mb-2">Executive Deliverable:</h4>
                  <div className="flex">
                    <div className="mr-3 flex-shrink-0">
                      <Layout size={24} className="text-red-600" />
                    </div>
                    <p className="text-sm text-gray-700">
                      Each executive receives a customized implementation roadmap for their division, including staffing recommendations, technology requirements, timeline, and expected ROI calculations specific to their operations.
                    </p>
                  </div>
                </div>
              </div>
            </AccordionItem>
          </div>
        )}

        {/* Tab 2: Time Savings */}
        {activeTab === 1 && (
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
          </div>
        )}

        {/* Tab 3: Accuracy Improvement */}
        {activeTab === 2 && (
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
          </div>
        )}

        {/* Tab 4: ROI Calculator */}
        {activeTab === 3 && (
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
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Staff Training</label>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-2">$</span>
                        <input type="text" value="85,000" className="border rounded px-2 py-1 w-full" readOnly />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Annual Maintenance</label>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-2">$</span>
                        <input type="text" value="60,000" className="border rounded px-2 py-1 w-full" readOnly />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-900 text-white p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Total First Year Investment:</span>
                    <span className="text-xl">$515,000</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-900">Benefit Factors</h3>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                  <h4 className="font-bold text-gray-800 mb-3">Annual Savings</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Labor Time Savings (12,450 hours × $85/hr)</label>
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
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Inventory Optimization</label>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-2">$</span>
                        <input type="text" value="725,000" className="border rounded px-2 py-1 w-full" readOnly />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Improved Compliance (Reduced Penalties)</label>
                      <div className="flex items-center">
                        <span className="text-gray-500 mr-2">$</span>
                        <input type="text" value="350,000" className="border rounded px-2 py-1 w-full" readOnly />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-green-600 text-white p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Total Annual Benefits:</span>
                    <span className="text-xl">$5,587,750</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4 text-blue-900">ROI Analysis</h3>
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <h4 className="font-bold text-gray-800 mb-2">First Year ROI</h4>
                    <div className="text-3xl font-bold text-blue-600">985%</div>
                    <p className="text-xs text-gray-600 mt-2">
                      ($5,587,750 - $515,000) / $515,000 × 100%
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <h4 className="font-bold text-gray-800 mb-2">Annual Net Benefit</h4>
                    <div className="text-3xl font-bold text-green-600">$5,072,750</div>
                    <p className="text-xs text-gray-600 mt-2">
                      Total Benefits - Total Costs
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <h4 className="font-bold text-gray-800 mb-2">Payback Period</h4>
                    <div className="text-3xl font-bold text-orange-600">1.1 Months</div>
                    <p className="text-xs text-gray-600 mt-2">
                      Initial Investment / (Annual Benefit / 12)
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-3">5-Year Projection</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                      <thead>
                        <tr className="bg-blue-900 text-white">
                          <th className="py-2 px-3 border-b">Year</th>
                          <th className="py-2 px-3 border-b">Annual Costs</th>
                          <th className="py-2 px-3 border-b">Annual Benefits</th>
                          <th className="py-2 px-3 border-b">Net Benefit</th>
                          <th className="py-2 px-3 border-b">Cumulative Benefit</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr>
                          <td className="py-2 px-3 border-b">Year 1</td>
                          <td className="py-2 px-3 border-b">$515,000</td>
                          <td className="py-2 px-3 border-b">$5,587,750</td>
                          <td className="py-2 px-3 border-b text-green-600">$5,072,750</td>
                          <td className="py-2 px-3 border-b text-green-600">$5,072,750</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 border-b">Year 2</td>
                          <td className="py-2 px-3 border-b">$180,000</td>
                          <td className="py-2 px-3 border-b">$5,867,138</td>
                          <td className="py-2 px-3 border-b text-green-600">$5,687,138</td>
                          <td className="py-2 px-3 border-b text-green-600">$10,759,888</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 border-b">Year 3</td>
                          <td className="py-2 px-3 border-b">$189,000</td>
                          <td className="py-2 px-3 border-b">$6,160,495</td>
                          <td className="py-2 px-3 border-b text-green-600">$5,971,495</td>
                          <td className="py-2 px-3 border-b text-green-600">$16,731,383</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 border-b">Year 4</td>
                          <td className="py-2 px-3 border-b">$198,450</td>
                          <td className="py-2 px-3 border-b">$6,468,519</td>
                          <td className="py-2 px-3 border-b text-green-600">$6,270,069</td>
                          <td className="py-2 px-3 border-b text-green-600">$23,001,452</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-3 border-b">Year 5</td>
                          <td className="py-2 px-3 border-b">$208,373</td>
                          <td className="py-2 px-3 border-b">$6,791,945</td>
                          <td className="py-2 px-3 border-b text-green-600">$6,583,572</td>
                          <td className="py-2 px-3 border-b text-green-600">$29,585,024</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="bg-gray-100 font-bold">
                          <td className="py-2 px-3 border-b">5-Year Total</td>
                          <td className="py-2 px-3 border-b">$1,290,823</td>
                          <td className="py-2 px-3 border-b">$30,875,847</td>
                          <td className="py-2 px-3 border-b text-green-600">$29,585,024</td>
                          <td className="py-2 px-3 border-b"></td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Implementation */}
        {activeTab === 4 && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-3 text-blue-900">Implementation Roadmap</h2>
            <div className="bg-purple-100 p-4 rounded-lg border-l-4 border-purple-500 mb-6">
              <p className="text-gray-800">
                A structured approach to implementing AI solutions within your aerospace operations, with clear milestones and objectives.
              </p>
            </div>
            
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
          </div>
        )}
      </div>
    </div>
  );
};

export default AerospaceAITraining;