import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { 
  Search, 
  FileText, 
  Target, 
  HelpCircle, 
  Globe, 
  Settings,
  ChevronDown,
  Save,
  Play,
  Upload
} from "lucide-react";

const CreateModel = () => {
  const [temperature, setTemperature] = useState([0.7]);
  const [maxTokens, setMaxTokens] = useState("1000");
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

  const presets = [
    {
      id: 'interpreter',
      title: 'Document Interpreter',
      icon: Search,
      description: 'Extract and analyze document meaning',
      prompt: 'Analyze the following document and provide a comprehensive interpretation of its content, structure, and key insights:\n\n{document_text}'
    },
    {
      id: 'summarizer',
      title: 'Content Summarizer',
      icon: FileText,
      description: 'Create concise summaries from documents',
      prompt: 'Create a concise summary of the following document, highlighting the main points and key information:\n\n{document_text}'
    },
    {
      id: 'extractor',
      title: 'Data Extractor',
      icon: Target,
      description: 'Pull specific data points and fields',
      prompt: 'Extract structured data from the following document. Identify and extract key data points, dates, names, amounts, and relevant information:\n\n{document_text}'
    },
    {
      id: 'qa',
      title: 'Question Answerer',
      icon: HelpCircle,
      description: 'Answer questions about document content',
      prompt: 'Based on the following document, answer any questions about its content accurately and thoroughly:\n\n{document_text}\n\nQuestion: {user_question}'
    },
    {
      id: 'translator',
      title: 'Language Translator',
      icon: Globe,
      description: 'Translate documents between languages',
      prompt: 'Translate the following document to {target_language} while maintaining the original meaning and structure:\n\n{document_text}'
    },
    {
      id: 'custom',
      title: 'Custom Model',
      icon: Settings,
      description: 'Build from scratch with your own prompt',
      prompt: 'Write your custom prompt here. Use {document_text} to reference the uploaded document content...'
    }
  ];

  const promptTemplates = [
    {
      title: 'Invoice Processing',
      description: 'Extract invoice details like amounts, dates, vendor info',
      prompt: 'Extract the following information from this invoice:\n- Invoice number\n- Date\n- Vendor name\n- Total amount\n- Line items\n\nDocument: {document_text}'
    },
    {
      title: 'Contract Analysis',
      description: 'Analyze contract terms and conditions',
      prompt: 'Analyze this contract and identify:\n- Key terms and conditions\n- Important dates\n- Parties involved\n- Obligations and responsibilities\n\nContract: {document_text}'
    },
    {
      title: 'Research Summary',
      description: 'Summarize research papers and academic documents',
      prompt: 'Provide a structured summary of this research document including:\n- Abstract/Overview\n- Key findings\n- Methodology\n- Conclusions\n\nDocument: {document_text}'
    }
  ];

  return (
    <Layout>
      <div className="p-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Create Custom Model</h1>
          <p className="text-gray-300">Design your AI processor for documents</p>
        </div>

        {/* Preset Selection */}
        <Card className="glass-card-dark border-border mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-white">Choose a Preset Template</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {presets.map((preset) => {
                const Icon = preset.icon;
                return (
                  <div
                    key={preset.id}
                    onClick={() => setSelectedPreset(preset.id)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                      selectedPreset === preset.id
                        ? 'border-primary bg-primary/10'
                        : 'border-border bg-muted hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 gradient-orange rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-semibold text-white">{preset.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400">{preset.description}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Configuration */}
            <Card className="glass-card-dark border-border">
              <CardHeader>
                <CardTitle className="text-xl text-white">Model Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="modelName" className="text-white">Model Name</Label>
                  <Input
                    id="modelName"
                    placeholder="Enter model name"
                    className="mt-2 bg-input border-border text-white placeholder:text-gray-400"
                  />
                </div>
                
                <div>
                  <Label htmlFor="description" className="text-white">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe what your model does"
                    className="mt-2 bg-input border-border text-white placeholder:text-gray-400"
                    rows={3}
                  />
                </div>

                {/* Advanced Settings */}
                <Collapsible open={isAdvancedOpen} onOpenChange={setIsAdvancedOpen}>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between text-white">
                      Advanced Settings
                      <ChevronDown className={`h-4 w-4 transition-transform ${isAdvancedOpen ? 'rotate-180' : ''}`} />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-6 mt-4">
                    <div>
                      <Label className="text-white">Temperature: {temperature[0]}</Label>
                      <p className="text-xs text-gray-400 mb-2">Controls creativity (0 = focused, 1 = creative)</p>
                      <Slider
                        value={temperature}
                        onValueChange={setTemperature}
                        max={1}
                        min={0}
                        step={0.1}
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="maxTokens" className="text-white">Max Tokens</Label>
                      <Input
                        id="maxTokens"
                        type="number"
                        value={maxTokens}
                        onChange={(e) => setMaxTokens(e.target.value)}
                        className="mt-2 bg-input border-border text-white"
                      />
                    </div>
                    
                    <div>
                      <Label className="text-white">Response Format</Label>
                      <Select defaultValue="text">
                        <SelectTrigger className="mt-2 bg-input border-border text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="text">Text</SelectItem>
                          <SelectItem value="json">JSON</SelectItem>
                          <SelectItem value="structured">Structured</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>

            {/* Prompt Builder */}
            <Card className="glass-card-dark border-border">
              <CardHeader>
                <CardTitle className="text-xl text-white">Prompt Builder</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="prompt" className="text-white">Custom Prompt</Label>
                  <Textarea
                    id="prompt"
                    placeholder={selectedPreset ? presets.find(p => p.id === selectedPreset)?.prompt : "Write your custom prompt here. Use {document_text} to reference the uploaded document content..."}
                    className="mt-2 bg-input border-border text-white placeholder:text-gray-400 min-h-[200px]"
                    value={selectedPreset ? presets.find(p => p.id === selectedPreset)?.prompt : ""}
                  />
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs text-gray-400">Use {"{document_text}"} to reference uploaded content</p>
                    <p className="text-xs text-gray-400">0 / 2000 characters</p>
                  </div>
                </div>
                
                <Button variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-white">
                  <Play className="h-4 w-4 mr-2" />
                  Preview Prompt
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Prompt Templates */}
            <Card className="glass-card-dark border-border">
              <CardHeader>
                <CardTitle className="text-lg text-white">Prompt Examples</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {promptTemplates.map((template, index) => (
                  <div key={index} className="p-3 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition-colors">
                    <h4 className="font-medium text-white text-sm mb-1">{template.title}</h4>
                    <p className="text-xs text-gray-400 mb-2">{template.description}</p>
                    <Button size="sm" variant="ghost" className="text-xs text-primary">
                      Use Template
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Test Section */}
            <Card className="glass-card-dark border-border">
              <CardHeader>
                <CardTitle className="text-lg text-white">Test Model</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400 mb-4">Upload a sample document to test your model</p>
                  <Button size="sm" variant="outline" className="border-primary text-primary">
                    Choose File
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 mt-8">
          <Button variant="outline" className="border-border text-white hover:bg-muted">
            <Save className="h-4 w-4 mr-2" />
            Save Draft
          </Button>
          <Button className="gradient-orange hover:gradient-orange-hover text-white">
            Create Model
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default CreateModel;