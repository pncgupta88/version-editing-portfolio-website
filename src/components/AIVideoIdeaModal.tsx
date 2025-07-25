import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Lightbulb } from 'lucide-react';

interface VideoIdeaForm {
  topic: string;
  style: string;
  audience: string;
}

const AIVideoIdeaModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<VideoIdeaForm>({
    topic: '',
    style: '',
    audience: '',
  });
  const [results, setResults] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateIdeas = async () => {
    if (!formData.topic || !formData.style || !formData.audience) {
      return;
    }

    setIsGenerating(true);
    setResults('');

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to generate ideas');
      }

      const data = await response.json();
      setResults(data.resultText || '');

    } catch (error) {
      console.error('Error:', error);
      setResults('Sorry, something went wrong. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const resetForm = () => {
    setFormData({ topic: '', style: '', audience: '' });
    setResults('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="animated-gradient-border rounded-lg inline-block">
          <Button
            variant="outline"
            className="w-full h-full bg-background rounded-[7px] hover:bg-cyan-900/40 hover:text-cyan-300 transition-colors duration-300"
            onClick={() => setIsOpen(true)}
          >
            <Lightbulb className="mr-2 h-4 w-4" />
            AI Video Ideas
          </Button>
        </div>
      </DialogTrigger>
      {/* --- YAHAN BADLAV KIYA GAYA HAI --- */}
      <DialogContent className="glass-card max-w-2xl max-h-[90vh] overflow-y-auto border-purple-500/30 shadow-2xl shadow-purple-500/20">
        <div className="space-y-6 p-6">
          {/* Headline */}
          <div className="text-center">
            <h2 className="text-3xl font-bold gradient-text mb-2">
              AI Video Idea Lab
            </h2>
            <p className="text-muted-foreground">
              Generate creative video concepts tailored to your needs
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="topic" className="text-sm font-medium">
                Your Video Topic
              </label>
              <Input
                id="topic"
                placeholder="e.g., Travel vlog, Product review, Tutorial..."
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                className="w-full bg-background/50 border-purple-500/30"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="style" className="text-sm font-medium">
                Video Style
              </label>
              <Select onValueChange={(value) => setFormData({ ...formData, style: value })}>
                <SelectTrigger className="bg-background/50 border-purple-500/30">
                  <SelectValue placeholder="Choose a video style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cinematic">Cinematic</SelectItem>
                  <SelectItem value="documentary">Documentary</SelectItem>
                  <SelectItem value="lifestyle">Lifestyle</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="educational">Educational</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="audience" className="text-sm font-medium">
                Target Audience
              </label>
              <Select onValueChange={(value) => setFormData({ ...formData, audience: value })}>
                <SelectTrigger className="bg-background/50 border-purple-500/30">
                  <SelectValue placeholder="Select your target audience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="teenagers">Teenagers (13-19)</SelectItem>
                  <SelectItem value="young-adults">Young Adults (20-30)</SelectItem>
                  <SelectItem value="professionals">Professionals (25-45)</SelectItem>
                  <SelectItem value="general">General Audience</SelectItem>
                  <SelectItem value="businesses">Businesses</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              onClick={handleGenerateIdeas}
              disabled={!formData.topic || !formData.style || !formData.audience || isGenerating}
              className="btn-primary w-full"
            >
              {isGenerating ? 'Generating Ideas...' : 'Generate Ideas'}
            </Button>
          </div>

          {/* Results Area */}
          {results && (
            <div className="space-y-4 pt-4 border-t border-border/20">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Generated Ideas</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetForm}
                  className="text-xs"
                >
                  Generate New Ideas
                </Button>
              </div>
              <div className="glass-card p-4 rounded-lg border border-border/20 text-left">
                <pre className="text-sm leading-relaxed whitespace-pre-wrap font-poppins">
                  {results}
                </pre>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AIVideoIdeaModal;