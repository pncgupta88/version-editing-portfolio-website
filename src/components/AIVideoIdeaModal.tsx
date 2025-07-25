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
  const [results, setResults] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateIdeas = async () => {
    if (!formData.topic || !formData.style || !formData.audience) {
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation (replace with actual API call)
    setTimeout(() => {
      const mockResults = [
        `Create a ${formData.style} video about ${formData.topic} targeting ${formData.audience}`,
        `Develop a compelling narrative around ${formData.topic} with ${formData.style} aesthetics`,
        `Design a series of ${formData.style} content pieces focusing on ${formData.topic}`,
        `Build an engaging ${formData.style} campaign around ${formData.topic} for ${formData.audience}`,
      ];
      setResults(mockResults);
      setIsGenerating(false);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({ topic: '', style: '', audience: '' });
    setResults([]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="glass-card hover-scale"
          onClick={() => setIsOpen(true)}
        >
          <Lightbulb className="mr-2 h-4 w-4" />
          AI Video Ideas
        </Button>
      </DialogTrigger>
      <DialogContent className="glass-card max-w-2xl max-h-[90vh] overflow-y-auto">
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
            {/* Video Topic Input */}
            <div className="space-y-2">
              <label htmlFor="topic" className="text-sm font-medium">
                Your Video Topic
              </label>
              <Input
                id="topic"
                placeholder="e.g., Travel vlog, Product review, Tutorial..."
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                className="w-full"
              />
            </div>

            {/* Video Style Dropdown */}
            <div className="space-y-2">
              <label htmlFor="style" className="text-sm font-medium">
                Video Style
              </label>
              <Select onValueChange={(value) => setFormData({ ...formData, style: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a video style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cinematic">Cinematic</SelectItem>
                  <SelectItem value="documentary">Documentary</SelectItem>
                  <SelectItem value="lifestyle">Lifestyle</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="educational">Educational</SelectItem>
                  <SelectItem value="entertainment">Entertainment</SelectItem>
                  <SelectItem value="minimalist">Minimalist</SelectItem>
                  <SelectItem value="dynamic">Dynamic</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Target Audience Dropdown */}
            <div className="space-y-2">
              <label htmlFor="audience" className="text-sm font-medium">
                Target Audience
              </label>
              <Select onValueChange={(value) => setFormData({ ...formData, audience: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your target audience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="teenagers">Teenagers (13-19)</SelectItem>
                  <SelectItem value="young-adults">Young Adults (20-30)</SelectItem>
                  <SelectItem value="professionals">Professionals (25-45)</SelectItem>
                  <SelectItem value="parents">Parents (30-50)</SelectItem>
                  <SelectItem value="seniors">Seniors (50+)</SelectItem>
                  <SelectItem value="general">General Audience</SelectItem>
                  <SelectItem value="businesses">Businesses</SelectItem>
                  <SelectItem value="students">Students</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Generate Button */}
            <Button
              onClick={handleGenerateIdeas}
              disabled={!formData.topic || !formData.style || !formData.audience || isGenerating}
              className="btn-primary w-full"
            >
              {isGenerating ? 'Generating Ideas...' : 'Generate Ideas'}
            </Button>
          </div>

          {/* Results Area */}
          {results.length > 0 && (
            <div className="space-y-4">
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
              <div className="space-y-3">
                {results.map((idea, index) => (
                  <div
                    key={index}
                    className="glass-card p-4 rounded-lg border border-border/20"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-relaxed">{idea}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AIVideoIdeaModal;