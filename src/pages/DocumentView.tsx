import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Download, Copy, RefreshCw, FileText, Calendar, HardDrive, FileType } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DocumentData {
  id: string;
  filename: string;
  uploadDate: string;
  fileSize: number;
  fileType: string;
  filePath: string;
  ocrConfidence: number;
  extractedText: string;
  summary?: string;
}

const DocumentView = () => {
  const { documentId } = useParams<{ documentId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [document, setDocument] = useState<DocumentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [generatingSummary, setGeneratingSummary] = useState(false);

  useEffect(() => {
    fetchDocument();
  }, [documentId]);

  const fetchDocument = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('authToken');
      
      const response = await fetch(`/api/documents/${documentId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch document');
      }

      const data = await response.json();
      setDocument(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied to clipboard",
        description: `${type} copied successfully`,
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const generateSummary = async () => {
    if (!document) return;
    
    setGeneratingSummary(true);
    
    // Simulate API call with debounce
    setTimeout(async () => {
      try {
        const token = localStorage.getItem('authToken');
        
        const response = await fetch(`/api/documents/${documentId}/summary`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to generate summary');
        }

        const data = await response.json();
        setDocument(prev => prev ? { ...prev, summary: data.summary } : null);
        
        toast({
          title: "Summary generated",
          description: "AI summary has been updated",
        });
      } catch (err) {
        toast({
          title: "Summary generation failed",
          description: err instanceof Error ? err.message : 'An error occurred',
          variant: "destructive",
        });
      } finally {
        setGeneratingSummary(false);
      }
    }, 2000);
  };

  const downloadExtractedText = () => {
    if (!document) return;
    
    const blob = new Blob([document.extractedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = window.document.createElement('a');
    a.href = url;
    a.download = `${document.filename}_extracted_text.txt`;
    window.document.body.appendChild(a);
    a.click();
    window.document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const renderDocumentPreview = () => {
    if (!document) return null;

    const fileType = document.fileType.toLowerCase();
    const fileUrl = `/uploads/${document.filePath}`;

    if (fileType === 'pdf' || fileType === 'application/pdf') {
      return (
        <iframe
          src={fileUrl}
          className="w-full h-full border-0 rounded-lg"
          title="PDF Preview"
        />
      );
    }

    if (fileType.startsWith('image/') || ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(fileType)) {
      return (
        <img
          src={fileUrl}
          alt="Document preview"
          className="w-full h-full object-contain rounded-lg"
        />
      );
    }

    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <FileText className="w-16 h-16 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">Preview not available</h3>
        <p className="text-muted-foreground mb-4">
          This file type cannot be previewed in the browser
        </p>
        <Button asChild>
          <a href={fileUrl} download={document.filename}>
            <Download className="w-4 h-4 mr-2" />
            Download File
          </a>
        </Button>
      </div>
    );
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-muted-foreground">Loading document...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !document) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Document not found</h2>
            <p className="text-muted-foreground mb-4">
              {error || 'The requested document could not be loaded'}
            </p>
            <Button asChild>
              <Link to="/documents">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Documents
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-6 h-full flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" asChild>
              <Link to="/documents">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Documents
              </Link>
            </Button>
            <Button variant="outline" onClick={downloadExtractedText}>
              <Download className="w-4 h-4 mr-2" />
              Download Text
            </Button>
          </div>
          
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-primary" />
                {document.filename}
              </CardTitle>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(document.uploadDate)}
                </div>
                <div className="flex items-center">
                  <HardDrive className="w-4 h-4 mr-1" />
                  {formatFileSize(document.fileSize)}
                </div>
                <div className="flex items-center">
                  <FileType className="w-4 h-4 mr-1" />
                  {document.fileType.toUpperCase()}
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Main content */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0">
          {/* Left pane - Document preview */}
          <Card className="glass-card flex flex-col">
            <CardHeader>
              <CardTitle>Document Preview</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 min-h-0">
              <div className="h-full">
                {renderDocumentPreview()}
              </div>
            </CardContent>
          </Card>

          {/* Right pane - OCR and AI analysis */}
          <div className="flex flex-col gap-6">
            {/* OCR Confidence */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>OCR Confidence</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Extraction Accuracy</span>
                    <span className="font-semibold">{document.ocrConfidence}%</span>
                  </div>
                  <Progress value={document.ocrConfidence} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    {document.ocrConfidence >= 95 ? 'Excellent' : 
                     document.ocrConfidence >= 85 ? 'Very Good' : 
                     document.ocrConfidence >= 70 ? 'Good' : 'Fair'} text extraction quality
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Extracted Text */}
            <Card className="glass-card flex-1 flex flex-col min-h-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Extracted Text</CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(document.extractedText, 'Extracted text')}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="flex-1 min-h-0">
                <Textarea
                  value={document.extractedText}
                  readOnly
                  className="h-full resize-none"
                  placeholder="No text extracted"
                />
              </CardContent>
            </Card>

            {/* AI Summary */}
            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>AI Summary</CardTitle>
                  <div className="flex gap-2">
                    {document.summary && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(document.summary!, 'Summary')}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={generateSummary}
                      disabled={generatingSummary}
                    >
                      {generatingSummary ? (
                        <RefreshCw className="w-4 h-4 animate-spin" />
                      ) : (
                        <RefreshCw className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {generatingSummary ? (
                  <div className="flex items-center justify-center py-8 text-muted-foreground">
                    <RefreshCw className="w-6 h-6 animate-spin mr-2" />
                    Generating AI summary...
                  </div>
                ) : document.summary ? (
                  <p className="text-sm leading-relaxed">{document.summary}</p>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <p className="mb-4">No summary generated yet</p>
                    <Button variant="outline" onClick={generateSummary}>
                      Generate Summary
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DocumentView;