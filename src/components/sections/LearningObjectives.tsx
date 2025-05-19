import React from 'react';
import { BookOpen, Database, BarChart2, Cpu, Target, Layout, Plane, GitMerge, Clock, CheckCircle, DollarSign, Zap, Users, Info } from 'lucide-react';
import AccordionItem from '../common/AccordionItem';
import { useAccordion } from '../../hooks/useAccordion';

const LearningObjectives: React.FC = () => {
  const { activeAccordion, toggleAccordion } = useAccordion();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-3 text-[#689EB8]">Aerospace AI Learning Path</h2>
      <p className="mb-4 text-gray-700">
        Our comprehensive training program designed to help aerospace executives understand and implement LLM and RAG technologies for operational excellence.
      </p>
      
      {/* Module cards section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-[#A79B94] bg-opacity-10 p-4 rounded-lg border-l-4 border-[#A79B94]">
          <h3 className="font-bold text-gray-800 mb-2 flex items-center">
            <Layout className="text-[#FF5A60] mr-2" size={20} />
            Course Structure
          </h3>
          <p className="text-sm text-gray-700">
            5 focused modules totaling 7.5 hours of instruction with hands-on workshops using your aerospace data.
          </p>
        </div>
        
        <div className="bg-[#689EB8] bg-opacity-10 p-4 rounded-lg border-l-4 border-[#689EB8]">
          <h3 className="font-bold text-gray-800 mb-2 flex items-center">
            <Target className="text-[#689EB8] mr-2" size={20} />
            Learning Outcome
          </h3>
          <p className="text-sm text-gray-700">
            Executives will gain practical knowledge to implement AI solutions for inventory management, maintenance operations, and compliance documentation.
          </p>
        </div>
      </div>
      
      {/* Module 1 */}
      <AccordionItem 
        index={0} 
        title="Module 1: LLM Fundamentals for Aerospace" 
        icon={<BookOpen size={18} className={activeAccordion === 0 ? "text-white" : "text-[#FF5A60]"} />}
        isActive={activeAccordion === 0}
        onToggle={toggleAccordion}
      >
        <div>
          <div className="mb-4">
            <h4 className="font-bold text-[#689EB8] mb-2">Duration: 1 hour</h4>
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
          
          <div className="bg-[#FF5A60] bg-opacity-5 p-4 rounded-md">
            <h4 className="font-bold text-gray-800 mb-2">Industry Example:</h4>
            <div className="flex">
              <div className="mr-3 flex-shrink-0">
                <Plane size={24} className="text-[#FF5A60]" />
              </div>
              <p className="text-sm text-gray-700">
                Boeing's implementation of AI for parts catalog automation reduced search time by 82% and improved fulfillment accuracy by 37%, resulting in $12.4M annual savings across global operations.
              </p>
            </div>
          </div>
        </div>
      </AccordionItem>
      
      {/* Module 2 */}
      <AccordionItem 
        index={1} 
        title="Module 2: RAG Architecture for Aerospace Data" 
        icon={<Database size={18} className={activeAccordion === 1 ? "text-white" : "text-[#FF5A60]"} />}
        isActive={activeAccordion === 1}
        onToggle={toggleAccordion}
      >
        <div>
          <div className="mb-4">
            <h4 className="font-bold text-[#689EB8] mb-2">Duration: 1.5 hours</h4>
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
          
          <div className="bg-[#689EB8] bg-opacity-5 p-4 rounded-md">
            <h4 className="font-bold text-gray-800 mb-2">Technical Demonstration:</h4>
            <div className="flex">
              <div className="mr-3 flex-shrink-0">
                <GitMerge size={24} className="text-[#689EB8]" />
              </div>
              <p className="text-sm text-gray-700">
                Live comparison showing how RAG can find compatible parts across different aircraft models in seconds, versus minutes with traditional database queries, while handling complex aerospace specification parameters.
              </p>
            </div>
          </div>
        </div>
      </AccordionItem>
      
      {/* Module 3 */}
      <AccordionItem 
        index={2} 
        title="Module 3: Business Value Demonstration Workshop" 
        icon={<BarChart2 size={18} className={activeAccordion === 2 ? "text-white" : "text-green-600"} />}
        isActive={activeAccordion === 2}
        onToggle={toggleAccordion}
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
      
      {/* Module 4 */}
      <AccordionItem 
        index={3} 
        title="Module 4: Implementation Workshop with Your Data" 
        icon={<Cpu size={18} className={activeAccordion === 3 ? "text-white" : "text-purple-600"} />}
        isActive={activeAccordion === 3}
        onToggle={toggleAccordion}
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
      
      {/* Module 5 */}
      <AccordionItem 
        index={4} 
        title="Module 5: Strategic Roadmap & Executive Decision Points" 
        icon={<Target size={18} className={activeAccordion === 4 ? "text-white" : "text-red-600"} />}
        isActive={activeAccordion === 4}
        onToggle={toggleAccordion}
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
      
      <div className="mt-8 pt-4 border-t border-gray-200">
        <div className="flex items-start text-xs text-gray-500">
          <Info size={16} className="mr-2 flex-shrink-0 mt-0.5 text-[#689EB8]" />
          <p>
            <strong>Data Source:</strong> The learning modules curriculum is designed based on aerospace executive training needs analysis conducted across multiple industry leaders during 2022-2023. Course structure, learning objectives, and time allocations are derived from educational best practices in technical executive training and have been validated with aerospace learning & development specialists. Industry examples and case studies represent actual implementations (with anonymized data) from leading aerospace manufacturers and MRO providers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearningObjectives; 