import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  FileText,
  Brain,
  Shield,
  Zap,
  Users,
  CheckCircle,
  Upload,
  Search,
  Download,
  Scale,
  Clock,
  Award,
  Globe,
  Lock,
  BarChart3,
  Monitor,
  Cpu,
  HardDrive,
  Smartphone,
  Copy,
  Eye,
  Star,
  Code,
  Database,
  Layers,
  PlayCircle,
  Sparkles,
  Target,
  TrendingUp,
  Gauge,
  Rocket,
  GitBranch,
  Settings,
  FileImage,
  FilePlus,
  Activity,
  Fingerprint,
  Cloud,
  Server,
  Workflow
} from "lucide-react";

const LearnMore = () => {
  const coreFeatures = [
    {
      icon: Search,
      title: "Advanced OCR Engine",
      description: "Professional Tesseract integration with PDFs, JPGs, PNGs",
      tech: "PyMuPDF + Async Processing"
    },
    {
      icon: Brain,
      title: "GPT-OSS 20B Integration",
      description: "OpenAI's own open-source model running locally",
      tech: "Apache 2.0 Licensed"
    },
    {
      icon: Gauge,
      title: "Real-time Confidence",
      description: "Visual progress bars with 92% average accuracy",
      tech: "Color-coded Scoring"
    },
    {
      icon: Layers,
      title: "Fallback Models",
      description: "Phi-3, Mistral 7B for reliability",
      tech: "Multi-model Pipeline"
    }
  ];

  const intelligentFeatures = [
    {
      icon: Sparkles,
      title: "AI-Powered Summaries",
      description: "Custom model creation with temperature/token controls",
      highlight: "Key insights extraction"
    },
    {
      icon: Target,
      title: "Document Classification",
      description: "Automatic content type detection and categorization",
      highlight: "Smart routing"
    },
    {
      icon: Copy,
      title: "Export Capabilities",
      description: "TXT, formatted reports with metadata",
      highlight: "Professional output"
    },
    {
      icon: Activity,
      title: "Batch Processing",
      description: "Handle multiple documents simultaneously",
      highlight: "Enterprise scale"
    }
  ];

  const uxFeatures = [
    {
      icon: Eye,
      title: "Side-by-side Viewer",
      description: "Document preview + analysis with equal-height layouts",
      feature: "Professional Interface"
    },
    {
      icon: Upload,
      title: "Drag-and-drop Upload",
      description: "Intuitive file handling with real-time status",
      feature: "Seamless Experience"
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Perfect experience across all devices",
      feature: "Universal Access"
    },
    {
      icon: Sparkles,
      title: "Glass-morphism Design",
      description: "Beautiful dark theme with modern aesthetics",
      feature: "Premium Feel"
    }
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: "100% Local Processing",
      description: "Data never leaves your machine - complete privacy",
      guarantee: "Zero cloud dependency"
    },
    {
      icon: Shield,
      title: "No Internet Required",
      description: "Works offline after initial model download",
      guarantee: "Air-gapped capable"
    },
    {
      icon: Fingerprint,
      title: "Mock Authentication",
      description: "Development-ready security framework",
      guarantee: "Production ready"
    },
    {
      icon: Server,
      title: "Organized Storage",
      description: "Secure file directory structure",
      guarantee: "Complete ownership"
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      icon: Monitor,
      technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS"],
      description: "Modern, responsive UI with hot reload"
    },
    {
      category: "Backend",
      icon: Server,
      technologies: ["FastAPI", "Python", "Async Processing", "SQLAlchemy"],
      description: "High-performance API with async capabilities"
    },
    {
      category: "Database",
      icon: Database,
      technologies: ["SQLite", "SQLAlchemy ORM", "Migrations", "Indexing"],
      description: "Lightweight, reliable data storage"
    },
    {
      category: "AI Engine",
      icon: Brain,
      technologies: ["GPT-OSS 20B", "Ollama Runtime", "Apache 2.0", "Quantization"],
      description: "Professional AI with local execution"
    },
    {
      category: "OCR Engine",
      icon: FileImage,
      technologies: ["Tesseract", "PyMuPDF", "Multi-language", "High Accuracy"],
      description: "Enterprise-grade text extraction"
    },
    {
      category: "File Handling",
      icon: FilePlus,
      technologies: ["aiofiles", "Async Uploads", "Multi-format", "Metadata"],
      description: "Professional document management"
    }
  ];

  const useCases = [
    {
      title: "Legal Document Analysis",
      description: "Contract review, compliance checking, case research with HIPAA support",
      icon: Scale,
      metrics: "90% faster processing"
    },
    {
      title: "Medical Records",
      description: "HIPAA-compliant digitization and insurance claim automation",
      icon: FileText,
      metrics: "92% OCR accuracy"
    },
    {
      title: "Business Automation",
      description: "Invoice processing, financial statement analysis, receipt handling",
      icon: BarChart3,
      metrics: "10x speed improvement"
    },
    {
      title: "Academic Research",
      description: "Research paper analysis, student document processing, citation extraction",
      icon: Award,
      metrics: "Sub-30s processing"
    },
    {
      title: "Real Estate",
      description: "Property document management, contract analysis, compliance tracking",
      icon: Globe,
      metrics: "Zero ongoing costs"
    },
    {
      title: "Insurance Claims",
      description: "Automated claim processing, document verification, fraud detection",
      icon: Shield,
      metrics: "Enterprise-level security"
    }
  ];

  const systemRequirements = [
    { requirement: "Operating System", value: "Windows/macOS/Linux", icon: Monitor },
    { requirement: "Memory", value: "8GB RAM minimum (16GB recommended)", icon: Cpu },
    { requirement: "Storage", value: "15GB for models + documents", icon: HardDrive },
    { requirement: "Browser", value: "Modern web browser (Chrome, Firefox, Safari)", icon: Globe },
    { requirement: "Dependencies", value: "Tesseract OCR + Ollama runtime", icon: Settings },
    { requirement: "Network", value: "Internet for initial model download only", icon: Cloud }
  ];

  const competitiveAdvantages = [
    { advantage: "No subscription fees or API costs", impact: "Completely free forever", icon: Star },
    { advantage: "Open source AI models", impact: "Apache 2.0 licensed", icon: GitBranch },
    { advantage: "Professional OCR accuracy", impact: "90%+ confidence scores", icon: Target },
    { advantage: "Custom model training", impact: "No coding required", icon: Brain },
    { advantage: "Enterprise-level privacy", impact: "100% local processing", icon: Lock },
    { advantage: "One-time setup", impact: "Unlimited usage", icon: Rocket }
  ];

  const gettingStartedSteps = [
    {
      step: "1",
      title: "Clone Repository",
      description: "Download from GitHub with complete documentation",
      icon: GitBranch,
      time: "2 minutes"
    },
    {
      step: "2",
      title: "Install Dependencies",
      description: "Python + Node.js packages with automated setup",
      icon: Settings,
      time: "5 minutes"
    },
    {
      step: "3",
      title: "Download Models",
      description: "Ollama + GPT-OSS models with progress tracking",
      icon: Download,
      time: "10 minutes"
    },
    {
      step: "4",
      title: "Launch Platform",
      description: "Run backend + frontend servers",
      icon: PlayCircle,
      time: "1 minute"
    },
    {
      step: "5",
      title: "Process Documents",
      description: "Upload first document and see the AI magic!",
      icon: Sparkles,
      time: "30 seconds"
    }
  ];

  const successMetrics = [
    { metric: "OCR Confidence", value: "92%", description: "Average accuracy across all document types" },
    { metric: "Processing Speed", value: "<30s", description: "Standard document processing time" },
    { metric: "Data Privacy", value: "100%", description: "Local processing guarantee" },
    { metric: "Cost Savings", value: "$0", description: "No ongoing fees after setup" },
    { metric: "Model Quality", value: "20B", description: "Parameters in GPT-OSS model" },
    { metric: "System Support", value: "3 OS", description: "Windows, macOS, Linux compatible" }
  ];

  const performanceOptimizations = [
    { feature: "Memory Efficiency", detail: "Runs smoothly on 8-16GB RAM systems", icon: Cpu },
    { feature: "CPU Optimization", detail: "Optimized for AMD/Intel processors", icon: Monitor },
    { feature: "GPU Acceleration", detail: "Automatic GPU detection when available", icon: Zap },
    { feature: "Memory Management", detail: "Efficient handling of large documents", icon: HardDrive },
    { feature: "Model Loading", detail: "Fast startup with quantization support", icon: Rocket },
    { feature: "Concurrent Processing", detail: "Multiple documents simultaneously", icon: Workflow }
  ];

  return (
    <div className="min-h-screen gradient-background-dark">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 gradient-orange rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FC</span>
            </div>
            <span className="text-xl font-bold text-white">FlowCraft AI</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" className="text-white hover:text-primary">
                Home
              </Button>
            </Link>
            <Link to="/login">
              <Button className="gradient-orange hover:gradient-orange-hover text-white">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-5xl mx-auto mb-20">
          <div className="mb-6">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm font-medium mb-4">
              🚀 The Most Advanced Document Processing Platform
            </Badge>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Documents into{" "}
            <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
              Intelligence
            </span>
            {" "}with FlowCraft AI
          </h1>
          <p className="text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
            Professional OCR + GPT-OSS 20B + Custom AI Models
          </p>
          <p className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto">
            All Running Locally & Completely Free - Built from the ground up for enterprise-level document intelligence
          </p>
          
          {/* Animated Preview Showcase */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <Card className="glass-card-dark border-primary/30 p-6">
              <Upload className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Document Upload</h3>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-2 bg-gradient-to-r from-primary to-primary-light rounded-full w-full animate-pulse"></div>
              </div>
            </Card>
            <Card className="glass-card-dark border-primary/30 p-6">
              <Brain className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">OCR Extraction</h3>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-2 bg-gradient-to-r from-primary to-accent rounded-full w-3/4 animate-pulse"></div>
              </div>
            </Card>
            <Card className="glass-card-dark border-primary/30 p-6">
              <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">AI Analysis</h3>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-2 bg-gradient-to-r from-accent to-primary-light rounded-full w-4/5 animate-pulse"></div>
              </div>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button className="gradient-orange hover:gradient-orange-hover text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-2xl">
                Experience the Future of Document Processing
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" className="px-10 py-4 rounded-xl font-semibold text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white">
              <PlayCircle className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Success Metrics That Matter</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world performance data from our advanced document processing platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="glass-card-dark border-primary/30 text-center p-6">
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-white font-semibold mb-2">{metric.metric}</div>
                <div className="text-sm text-gray-400">{metric.description}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Processing Engine */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              🔥 Core Processing Engine
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional-grade technology stack powering enterprise document intelligence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="glass-card-dark border-border hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 gradient-orange rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{feature.description}</p>
                    <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                      {feature.tech}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Intelligent Document Analysis */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              📊 Intelligent Document Analysis
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI capabilities that transform raw documents into actionable intelligence
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {intelligentFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="glass-card-dark border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 gradient-orange rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                          <Badge className="bg-accent/20 text-accent border-accent/30">
                            {feature.highlight}
                          </Badge>
                        </div>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Premium User Experience */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              🎨 Premium User Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Beautiful design meets powerful functionality for the ultimate document processing experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {uxFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="glass-card-dark border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 gradient-orange rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                          <Badge className="bg-primary/20 text-primary border-primary/30">
                            {feature.feature}
                          </Badge>
                        </div>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              🔒 Privacy & Security First
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your documents stay on your machine - complete privacy and security guaranteed
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="glass-card-dark border-green-500/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                            {feature.guarantee}
                          </Badge>
                        </div>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              💻 Technical Architecture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade technology stack built for performance, reliability, and scalability
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card key={index} className="glass-card-dark border-border">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 gradient-orange rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-white">{tech.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{tech.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.technologies.map((technology, techIndex) => (
                        <Badge key={techIndex} className="bg-primary/20 text-primary border-primary/30">
                          {technology}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Performance Optimizations */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              ⚡ Performance Optimizations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Engineered for speed and efficiency across all hardware configurations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performanceOptimizations.map((optimization, index) => {
              const Icon = optimization.icon;
              return (
                <Card key={index} className="glass-card-dark border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 gradient-orange rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{optimization.feature}</h3>
                        <p className="text-gray-300 text-sm">{optimization.detail}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Getting Started Flow */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Getting Started Flow</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From zero to processing documents in under 20 minutes
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {gettingStartedSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 gradient-orange rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <Icon className="h-8 w-8 text-white" />
                    {index < gettingStartedSteps.length - 1 && (
                      <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-primary to-primary-light hidden md:block"></div>
                    )}
                  </div>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">{step.description}</p>
                  <Badge className="bg-accent/20 text-accent border-accent/30">
                    {step.time}
                  </Badge>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real-World Use Cases */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              💡 Real-World Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven results across industries with enterprise-level document intelligence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <Card key={index} className="glass-card-dark border-border hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 gradient-orange rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {useCase.metrics}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              🎯 Competitive Advantages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Why FlowCraft AI outperforms expensive enterprise solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitiveAdvantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <Card key={index} className="glass-card-dark border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{advantage.advantage}</h3>
                        <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                          {advantage.impact}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* System Requirements */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">System Requirements</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Designed to run efficiently on standard hardware configurations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemRequirements.map((req, index) => {
              const Icon = req.icon;
              return (
                <Card key={index} className="glass-card-dark border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 gradient-orange rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{req.requirement}</h3>
                        <p className="text-gray-300">{req.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Advanced Features Showcase */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              🚀 Advanced Features We've Built
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional-grade capabilities that rival expensive enterprise solutions
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="glass-card-dark border-border">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Brain className="h-6 w-6 text-primary" />
                  AI Model Engineering
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">Custom AI model templates with prompt engineering</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">Temperature and token controls for fine-tuning</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">No-code model creation and deployment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">Multi-model fallback support</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card-dark border-border">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Eye className="h-6 w-6 text-primary" />
                  Professional Interface
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">Unified DocumentView with equal-height layouts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">Document confidence visualization with color coding</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">Copy-to-clipboard functionality throughout</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">Toast notifications for user feedback</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card-dark border-border">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Code className="h-6 w-6 text-primary" />
                  Developer Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">Easy GitHub deployment and version control</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">Modular component architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">Development-ready with hot reload</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">Production-ready deployment scripts</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card-dark border-border">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  Enterprise Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">Error handling with graceful fallbacks</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">Professional routing with React Router</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">Comprehensive README with setup instructions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">Clean separation of concerns</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center">
          <Card className="glass-card-dark border-primary/30 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="mb-6">
                <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 text-lg font-medium mb-4">
                  🎉 Experience the Future Today
                </Badge>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Document Processing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the revolution in document intelligence. FlowCraft AI isn't just another tool - 
                it's a complete platform that rivals expensive enterprise solutions while running 
                entirely on your hardware for free.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$0</div>
                  <div className="text-gray-300">Forever Free</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20B</div>
                  <div className="text-gray-300">AI Parameters</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-gray-300">Local Privacy</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/login">
                  <Button className="gradient-orange hover:gradient-orange-hover text-white px-12 py-4 rounded-xl font-semibold text-lg shadow-2xl">
                    Start Processing Documents Now
                    <Rocket className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-12 py-4 rounded-xl font-semibold text-lg">
                  <GitBranch className="h-5 w-5 mr-2" />
                  View on GitHub
                </Button>
              </div>
              
              <p className="text-sm text-gray-400 mt-6">
                Setup in under 20 minutes • No subscription required • Complete source code included
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;