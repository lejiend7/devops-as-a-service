import { ArrowRight, CheckCircle2, Cloud, GitBranch, Server, Workflow, Mail, MessageCircle, Sparkles, Clock, DollarSign, Shield, Briefcase, Award, Code, Database, Lock, Linkedin } from 'lucide-react';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { useState } from 'react';

const services = [
  {
    icon: Workflow,
    title: 'CI/CD Pipeline Setup',
    description: 'Automated deployment pipelines that streamline your development workflow and reduce time to market.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Migration',
    description: 'Seamless migration to AWS, Azure, or GCP with zero downtime and optimized cloud infrastructure.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Server,
    title: 'Server Migration',
    description: 'Safe and efficient server migrations with comprehensive planning and execution strategies.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: GitBranch,
    title: 'Architecture Design',
    description: 'Scalable, secure, and cost-effective architecture solutions tailored to your business needs.',
    color: 'from-green-500 to-emerald-500',
  },
];

const processFlow = [
  {
    step: '01',
    title: 'Initial Contact',
    description: 'Reach out via email or WhatsApp to start the conversation.',
  },
  {
    step: '02',
    title: 'Meeting & Requirements',
    description: 'Schedule a meeting to understand your needs and expectations.',
  },
  {
    step: '03',
    title: 'Infrastructure Assessment',
    description: 'Evaluate current infrastructure (skip if starting fresh).',
  },
  {
    step: '04',
    title: 'Quotation Issued',
    description: 'Receive detailed quotation based on project scope.',
  },
  {
    step: '05',
    title: '50% Deposit',
    description: 'Pay 50% deposit to confirm and proceed with the project.',
  },
  {
    step: '06',
    title: 'Development Phase',
    description: '3 days to 2 weeks delivery + 3 days testing (scope-dependent).',
  },
  {
    step: '07',
    title: 'Client Verification',
    description: 'Review and verify everything meets initial expectations.',
  },
  {
    step: '08',
    title: 'Balance Payment',
    description: 'Pay remaining 50% upon satisfaction and completion.',
  },
  {
    step: '09',
    title: 'Optional Training',
    description: 'MYR 1,950 for training + 2 months support (optional).',
    optional: true,
  },
];

const timeline = [
  {
    duration: '3 Days',
    title: 'Assessment & Understanding',
    description: 'Deep dive into your current infrastructure, understanding requirements and planning the approach.',
  },
  {
    duration: '1-2 Weeks',
    title: 'Implementation & Delivery',
    description: 'Execution phase - depending on the overall scope and complexity of your project.',
  },
  {
    duration: '3 Days',
    title: 'Testing & Validation',
    description: 'Thorough testing with your real environment to ensure everything works perfectly.',
  },
];

const achievements = [
  'Extensive experience in CI/CD pipeline design and implementation',
  'Proven track record in enterprise-level cloud migrations',
  'Expert in multi-cloud architecture (AWS, Azure, GCP)',
  'Specialized in server migration with zero downtime strategies',
  'Infrastructure as Code (IaC) expert using Terraform and CloudFormation',
  'Kubernetes and container orchestration specialist',
  'DevOps automation and workflow optimization',
  'Security-first architecture and compliance implementation',
];

export default function App() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center py-12 sm:py-20">
          <Badge variant="outline" className="mb-6 sm:mb-8 border-slate-700 bg-slate-900/50 backdrop-blur-sm text-slate-100 px-4 py-2 text-xs sm:text-sm">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 inline" />
            Professional DevOps & Architecture Solutions
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100 leading-tight px-4">
            DevOps & Architecture as a Service
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Skip the overhead of full-time DevOps staff. Get expert-level CI/CD pipelines, cloud architecture, and infrastructure solutions tailored to your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 border-0 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 text-white"
              onClick={scrollToContact}
            >
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-slate-700 bg-slate-900/50 hover:bg-slate-800/50 backdrop-blur-sm text-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <Badge variant="outline" className="mb-4 sm:mb-6 border-slate-700 bg-slate-900/50 backdrop-blur-sm text-slate-100 text-xs sm:text-sm">
              What I Offer
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 px-4">Services</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-4">
              Professional DevOps and architecture solutions without the overhead of a full-time hire
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-slate-950/50"
                >
                  {/* Gradient border effect on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}></div>
                  
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 text-white">{service.title}</h3>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Profile Section */}
      <section id="profile" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <Badge variant="outline" className="mb-4 sm:mb-6 border-slate-700 bg-slate-900/50 backdrop-blur-sm text-slate-100 text-xs sm:text-sm">
              Professional Profile
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 px-4">Bathulah (Bat) Mahir</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto px-4">
              Fullstack | 5x AWS Certified | Terraform Certified | SRE | DevOps Engineer | Security Compliance | Kubernetes | Azure | Google Cloud Platform
            </p>
          </div>

          {/* Profile Header Card */}
          <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-6 sm:p-10 overflow-hidden group">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-2xl"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Profile Picture */}
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300">
                    <img 
                      src="https://media.licdn.com/dms/image/v2/D5603AQH8n4W57s4diw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685262344140?e=1768435200&v=beta&t=SHeeAJrLBlef3Ct-gb1F_lZCj-u3TekNoElJQ4uZiXo"
                      alt="Bathulah Mahir"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Profile Info */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                    <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-xs">AWS Certified (5x)</Badge>
                    <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 text-xs">Terraform Certified</Badge>
                    <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 text-xs">Kubernetes</Badge>
                    <Badge className="bg-green-500/10 text-green-400 border-green-500/20 text-xs">Security Compliance</Badge>
                  </div>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-4">
                    Experienced in leading technical projects from concept to completion, specializing in DevOps/SRE practices with expertise in cloud infrastructure, CI/CD pipelines, and security compliance across AWS, Azure, and Google Cloud Platform.
                  </p>
                  <p className="text-sm sm:text-base text-blue-400 leading-relaxed mb-6 italic">
                    Currently building my own DevOps and Architecture as a Service business, offering flexible solutions to companies that need expert-level infrastructure support without the overhead of full-time hires.
                  </p>
                  <Button 
                    variant="outline"
                    className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                    onClick={() => window.open('https://www.linkedin.com/in/bathulah-mahir/', '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    View LinkedIn Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl sm:text-3xl mb-8 sm:mb-12 text-white text-center">Professional Experience</h3>
            
            <div className="space-y-6 sm:space-y-8">
              {/* Baituljannah.com - CTO */}
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/50 transition-all duration-300 group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl"></div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Briefcase className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl text-white mb-1">Chief Technology Officer (CTO)</h4>
                    <p className="text-sm sm:text-base text-slate-400">Baituljannah.com</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">Optimized system performance handling big data with focus on databases, infrastructure, and caching mechanisms</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">Managed infrastructure using AWS and DigitalOcean with Redis and CDN implementation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">Engineered scalable solutions with high availability for large volumes of customer data</p>
                  </div>
                </div>
              </div>

              {/* RenalWorks - Technical Lead */}
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/50 transition-all duration-300 group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl"></div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Code className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl text-white mb-1">Technical Lead</h4>
                    <p className="text-sm sm:text-base text-slate-400">RenalWorks Pte Ltd</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">DevOps/SRE engineering while contributing to frontend and backend development</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">Led technical projects with comprehensive project management and code quality assurance</p>
                  </div>
                </div>
              </div>

              {/* Wasiyyah */}
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/50 transition-all duration-300 group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl"></div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Database className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl text-white mb-1">Technical Consultant</h4>
                    <p className="text-sm sm:text-base text-slate-400">Wasiyyah</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">Provided technical guidance and structured architecture for eMawarith 1.5 product</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">Successfully implemented and launched live system used by customers</p>
                  </div>
                </div>
              </div>

              {/* CapBay */}
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/50 transition-all duration-300 group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl"></div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Award className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl text-white mb-1">Founding Team Member - Software Engineer</h4>
                    <p className="text-sm sm:text-base text-slate-400">CapBay</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">Core founding team member instrumental in company's technological success</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">Built CI/CD deployment pipelines for Laravel and Node.js/React.js applications</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">Configured cloud servers (Digital Ocean, Alicloud) with NGINX, load balancers, and VPN</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">Implemented security measures including HTTPS, OAuth2, and server security configurations</p>
                  </div>
                </div>
              </div>

              {/* Seedflex */}
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/50 transition-all duration-300 group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl"></div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Server className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl text-white mb-1">Infrastructure Engineer</h4>
                    <p className="text-sm sm:text-base text-slate-400">Seedflex</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">Designed and managed infrastructure architecture for scalable applications</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">Implemented DevOps best practices and infrastructure automation</p>
                  </div>
                </div>
              </div>

              {/* Soft Dev KL */}
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/50 transition-all duration-300 group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl"></div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <GitBranch className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl text-white mb-1">DevOps Engineer</h4>
                    <p className="text-sm sm:text-base text-slate-400">Soft Dev KL Sdn Bhd</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">Specialized in Ansible automation for configuration management</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">Implemented Puppet for server deployment and infrastructure automation</p>
                  </div>
                </div>
              </div>

              {/* 2en Apps Sdn Bhd */}
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/50 transition-all duration-300 group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl"></div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Database className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl text-white mb-1">Software Developer</h4>
                    <p className="text-sm sm:text-base text-slate-400">2en Apps Sdn Bhd</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">Developed offline access system for car import management</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">Built robust data synchronization for offline-first architecture</p>
                  </div>
                </div>
              </div>

              {/* UiTM Final Year Project */}
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/50 transition-all duration-300 group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl"></div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Award className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl text-white mb-1">Final Year Project - Award Winner</h4>
                    <p className="text-sm sm:text-base text-slate-400">UiTM Diploma</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">Developed award-winning Reservation System recognized by UiTM program</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">Demonstrated early passion for building practical software solutions</p>
                  </div>
                </div>
              </div>

              {/* Segi College / University of Greenwich - Bachelor Degree */}
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/50 transition-all duration-300 group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl"></div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Award className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl sm:text-2xl text-white mb-1">Bachelor Degree Final Year Project</h4>
                    <p className="text-sm sm:text-base text-slate-400">Segi College / University of Greenwich</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">Developed innovative algorithm to prevent duplicate HTTP transaction requests on top of OAuth2</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">Published research paper: "Algorithm in Handling Duplicate HTTP Transaction Request on top of OAuth2"</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300">Created original solution for ensuring transaction integrity in distributed systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Technical Skills */}
          <div className="max-w-6xl mx-auto mt-12 sm:mt-16">
            <h3 className="text-2xl sm:text-3xl mb-8 sm:mb-12 text-white text-center">Core Technical Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Cloud & Infrastructure */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                    <Cloud className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl text-white">Cloud & Infrastructure</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-400">• AWS (5x Certified)</p>
                  <p className="text-sm text-slate-400">• Azure</p>
                  <p className="text-sm text-slate-400">• Google Cloud Platform</p>
                  <p className="text-sm text-slate-400">• DigitalOcean</p>
                  <p className="text-sm text-slate-400">• Terraform (Certified)</p>
                  <p className="text-sm text-slate-400">• CloudFormation</p>
                </div>
              </div>

              {/* DevOps & Orchestration */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <Server className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl text-white">DevOps & Orchestration</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-400">• Kubernetes</p>
                  <p className="text-sm text-slate-400">• Docker</p>
                  <p className="text-sm text-slate-400">• CI/CD Pipelines</p>
                  <p className="text-sm text-slate-400">• Redis & Caching</p>
                  <p className="text-sm text-slate-400">• CDN Strategies</p>
                  <p className="text-sm text-slate-400">• Load Balancing</p>
                </div>
              </div>

              {/* Security & Compliance */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl text-white">Security & Compliance</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-slate-400">• Security Best Practices</p>
                  <p className="text-sm text-slate-400">• Data Compliance</p>
                  <p className="text-sm text-slate-400">• Privacy Regulations</p>
                  <p className="text-sm text-slate-400">• Infrastructure Security</p>
                  <p className="text-sm text-slate-400">• System Scalability</p>
                  <p className="text-sm text-slate-400">• Performance Optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <Badge variant="outline" className="mb-4 sm:mb-6 border-slate-700 bg-slate-900/50 backdrop-blur-sm text-slate-100 text-xs sm:text-sm">
              How It Works
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 px-4">Complete Process Flow</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-4">
              From initial contact to successful delivery - a transparent step-by-step process
            </p>
          </div>

          {/* Desktop Process Flow */}
          <div className="max-w-6xl mx-auto hidden lg:block">
            {/* Row 1: Steps 1-4 (Left to Right) */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              {processFlow.slice(0, 4).map((phase, index) => (
                <div key={index} className="relative">
                  <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/50 transition-all duration-300 group h-full min-h-[180px] flex flex-col">
                    {/* Step number */}
                    <div className="absolute -top-3 -left-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 shadow-blue-500/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-sm">{phase.step}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex-1 flex flex-col">
                      <h3 className="text-lg mb-2 text-white">{phase.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{phase.description}</p>
                    </div>
                  </div>
                  
                  {/* Right arrow for first 3 items */}
                  {index < 3 && (
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-blue-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Down arrow from step 4 */}
            <div className="flex justify-end mb-4 pr-[12.5%]">
              <div className="rotate-90">
                <ArrowRight className="w-6 h-6 text-blue-500" />
              </div>
            </div>

            {/* Row 2: Steps 5-8 (Right to Left) */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              {processFlow.slice(4, 8).reverse().map((phase, index) => (
                <div key={index} className="relative">
                  <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/50 transition-all duration-300 group h-full min-h-[180px] flex flex-col">
                    {/* Step number */}
                    <div className="absolute -top-3 -left-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 shadow-blue-500/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-sm">{phase.step}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex-1 flex flex-col">
                      <h3 className="text-lg mb-2 text-white">{phase.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{phase.description}</p>
                    </div>
                  </div>
                  
                  {/* Left arrow for first 3 items (going backwards) */}
                  {index < 3 && (
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 z-10">
                      <div className="rotate-180">
                        <ArrowRight className="w-6 h-6 text-blue-500" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Down arrow from step 8 */}
            <div className="flex justify-start mb-4 pl-[12.5%]">
              <div className="rotate-90">
                <ArrowRight className="w-6 h-6 text-purple-500" />
              </div>
            </div>

            {/* Row 3: Step 9 (Optional Training) */}
            <div className="grid grid-cols-4 gap-4">
              <div className="relative">
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-purple-800/50 rounded-2xl p-6 hover:bg-slate-800/50 transition-all duration-300 group h-full min-h-[180px] flex flex-col">
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 shadow-purple-500/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-sm">{processFlow[8].step}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex-1 flex flex-col">
                    <div className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-3 w-fit">
                      <p className="text-purple-400 text-xs">Optional</p>
                    </div>
                    <h3 className="text-lg mb-2 text-white">{processFlow[8].title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{processFlow[8].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile view - vertical flow */}
          <div className="lg:hidden space-y-4">
            {processFlow.map((phase, index) => (
              <div key={index} className="relative">
                <div className={`relative bg-slate-900/50 backdrop-blur-sm border ${phase.optional ? 'border-purple-800/50' : 'border-slate-800'} rounded-2xl p-6 hover:bg-slate-800/50 transition-all duration-300 group`}>
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${phase.optional ? 'from-purple-600 to-pink-600 shadow-purple-500/20' : 'from-blue-600 to-cyan-600 shadow-blue-500/20'} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white text-sm">{phase.step}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    {phase.optional && (
                      <div className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-3">
                        <p className="text-purple-400 text-xs">Optional</p>
                      </div>
                    )}
                    <h3 className="text-lg mb-2 text-white">{phase.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{phase.description}</p>
                  </div>
                </div>
                
                {/* Down arrow for all except last */}
                {index < processFlow.length - 1 && (
                  <div className="flex justify-center my-2">
                    <div className="rotate-90">
                      <ArrowRight className={`w-6 h-6 ${phase.optional || index === processFlow.length - 2 ? 'text-purple-500' : 'text-blue-500'}`} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <Badge variant="outline" className="mb-4 sm:mb-6 border-slate-700 bg-slate-900/50 backdrop-blur-sm text-slate-100 text-xs sm:text-sm">
              Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 px-4">Service Timeline</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-4">
              A structured approach to ensure successful delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {timeline.map((phase, index) => (
              <div
                key={index}
                className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8 hover:bg-slate-800/50 transition-all duration-300 group"
              >
                <div className="absolute -top-3 sm:-top-4 left-6 sm:left-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="inline-block px-3 sm:px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-3 sm:mb-4">
                    <p className="text-blue-400 text-xs sm:text-sm">{phase.duration}</p>
                  </div>
                  <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 text-white">{phase.title}</h3>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <Badge variant="outline" className="mb-4 sm:mb-6 border-slate-700 bg-slate-900/50 backdrop-blur-sm text-slate-100 text-xs sm:text-sm">
              Investment
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 px-4">Transparent Pricing</h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-4">
              Clear pricing with flexible payment options
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Main Service Pricing */}
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-6 sm:p-8 md:p-10 hover:scale-[1.02] transition-all duration-300 group">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-2xl"></div>
              
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl text-white mb-2">Per Service</h3>
                  <p className="text-sm sm:text-base text-slate-400">Complete project delivery</p>
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <DollarSign className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
              </div>

              <div className="mb-6 sm:mb-8">
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl text-white">MYR 3,500</span>
                  <span className="text-sm sm:text-base text-slate-400">starting from</span>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm">*Final price depends on project scope</p>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300">3-day infrastructure assessment</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300">1-2 weeks implementation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300">3-day testing & validation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300">Complete documentation</p>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-4 sm:pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                  <h4 className="text-sm sm:text-base text-white">Payment Terms</h4>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm mb-1 sm:mb-2">50% deposit upfront</p>
                <p className="text-slate-400 text-xs sm:text-sm">50% balance after delivery</p>
              </div>
            </div>

            {/* Maintenance & Training Pricing */}
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-3xl p-6 sm:p-8 md:p-10 hover:scale-[1.02] transition-all duration-300 group">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-2xl"></div>
              
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl text-white mb-2">Maintenance & Training</h3>
                  <p className="text-sm sm:text-base text-slate-400">100% self-sufficient</p>
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
              </div>

              <div className="mb-6 sm:mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl text-white">MYR 1,950</span>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm">Optional add-on service</p>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300">Comprehensive training sessions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300">Knowledge transfer documentation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300">Hands-on guidance & best practices</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300">Post-training support period</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-300">2 months after-delivery support</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Includes training and 2 months of support to ensure your team can independently manage your infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-2">
              <Badge variant="outline" className="mb-4 sm:mb-6 border-slate-700 bg-slate-900/50 backdrop-blur-sm text-slate-100 text-xs sm:text-sm">
                About Me
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                Bathulah Mahir
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-400 leading-relaxed">
                <p>
                  A DevOps and cloud architecture specialist with extensive experience helping companies optimize their infrastructure and deployment processes.
                </p>
                <p>
                  I understand that not every company needs a full-time DevOps engineer or architect. That's why I offer flexible, on-demand services that give you access to expert-level skills exactly when you need them.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <h3 className="text-xl sm:text-2xl mb-6 sm:mb-8 text-white">Expertise & Achievements</h3>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-slate-800/30 border border-slate-800 hover:bg-slate-800/50 hover:border-slate-700 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 border-slate-700 bg-slate-900/50 backdrop-blur-sm text-slate-100">
              Contact
            </Badge>
            <h2 className="text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Get in Touch</h2>
            <p className="text-xl text-slate-400">
              Ready to optimize your infrastructure? Let's discuss how I can help your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Email Card */}
            <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-10 hover:bg-slate-800/50 transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl"></div>
              
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-2 text-white">Email Me</h3>
                  <p className="text-slate-400">bathulah@lejiend.com</p>
                </div>
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 border-0 text-white"
                  onClick={() => window.location.href = 'mailto:bathulah@lejiend.com'}
                >
                  Send Email
                </Button>
              </div>
            </div>
            
            {/* WhatsApp Card */}
            <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-10 hover:bg-slate-800/50 transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl"></div>
              
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/20">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-2 text-white">WhatsApp</h3>
                  <p className="text-slate-400">Quick response</p>
                </div>
                <Button 
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 border-0 text-white"
                  onClick={() => window.open('https://wa.link/t5wms1', '_blank')}
                >
                  Message on WhatsApp
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-block px-8 py-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl">
              <p className="text-slate-400">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">bathulah.com</span>
                <span className="mx-3">•</span>
                DevOps & Architecture as a Service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-500">© 2024 Bathulah Mahir. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}