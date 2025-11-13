import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { X, Upload, Trash2, Image as ImageIcon, RefreshCw } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export default function CellEditorModal({ 
  cell, 
  globalTextSize,
  globalTextBold,
  globalBackgroundColor,
  onClose, 
  onSave 
}) {
  const [text, setText] = useState(cell?.text || '');
  const [image, setImage] = useState(cell?.image || null);
  const [textSize, setTextSize] = useState(cell?.textSize);
  const [textBold, setTextBold] = useState(cell?.textBold);
  const [backgroundColor, setBackgroundColor] = useState(cell?.backgroundColor || null);
  const [imageFit, setImageFit] = useState(cell?.imageFit || 'fit');
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.match(/^image\/(png|jpe?g|webp)$/)) {
        alert('Please upload a PNG, JPG, or WebP image');
        return;
      }

      // Read file as data URL
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClear = () => {
    setText('');
    setImage(null);
    setTextSize(null);
    setTextBold(null);
    setBackgroundColor(null);
    setImageFit('fit');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSave = () => {
    onSave({ 
      text, 
      image,
      textSize,
      textBold,
      backgroundColor,
      imageFit
    });
  };

  const effectiveTextSize = textSize !== null ? textSize : globalTextSize;
  const effectiveTextBold = textBold !== null ? textBold : globalTextBold;

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Cell Content</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Text Input */}
          <div className="space-y-2">
            <Label htmlFor="cell-text">Cell Text</Label>
            <Textarea
              id="cell-text"
              placeholder="Enter text for this cell..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={3}
              className="resize-none"
            />
          </div>

          {/* Text Size Override */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="cell-text-size">
                Text Size: {effectiveTextSize}px
                {textSize === null && <span className="text-xs text-gray-500 ml-2">(using global)</span>}
              </Label>
              {textSize !== null && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTextSize(null)}
                  className="h-6 text-xs"
                >
                  Reset
                </Button>
              )}
            </div>
            <Slider
              id="cell-text-size"
              min={10}
              max={40}
              step={1}
              value={[effectiveTextSize]}
              onValueChange={(val) => setTextSize(val[0])}
              className="w-full"
            />
          </div>

          {/* Text Bold Override */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="cell-text-bold"
                checked={effectiveTextBold}
                onCheckedChange={(checked) => setTextBold(checked)}
              />
              <Label htmlFor="cell-text-bold" className="cursor-pointer">
                Bold text for this cell
                {textBold === null && <span className="text-xs text-gray-500 ml-2">(using global)</span>}
              </Label>
            </div>
            {textBold !== null && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTextBold(null)}
                className="h-6 text-xs"
              >
                Reset
              </Button>
            )}
          </div>

          {/* Background Color Override */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="cell-bg-color">
                Cell Background Color
                {!backgroundColor && <span className="text-xs text-gray-500 ml-2">(using global)</span>}
              </Label>
              {backgroundColor && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setBackgroundColor(null)}
                  className="h-6 text-xs"
                >
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Reset
                </Button>
              )}
            </div>
            <div className="flex gap-3 items-center">
              <input
                id="cell-bg-color"
                type="color"
                value={backgroundColor || globalBackgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="w-12 h-12 rounded-lg border border-gray-200 cursor-pointer"
              />
              <Input
                type="text"
                value={backgroundColor || globalBackgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="flex-1 font-mono text-sm"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <Label>Cell Image</Label>
            
            {image ? (
              <div className="space-y-3">
                <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4">
                  <img 
                    src={image} 
                    alt="Preview"
                    className="max-w-full max-h-48 mx-auto object-contain rounded"
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={handleRemoveImage}
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Remove
                  </Button>
                </div>

                {/* Image Fit Mode */}
                <div className="space-y-2">
                  <Label>Image Fit Mode</Label>
                  <RadioGroup value={imageFit} onValueChange={setImageFit}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fit" id="fit" />
                      <Label htmlFor="fit" className="cursor-pointer">
                        Fit - Show entire image with margins
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fill" id="fill" />
                      <Label htmlFor="fill" className="cursor-pointer">
                        Fill - Fill cell completely (may crop)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            ) : (
              <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-400 transition-colors cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <ImageIcon className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                <p className="text-sm text-gray-600 mb-2">
                  Click to upload an image
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG, or WebP
                </p>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/jpg,image/webp"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* Preview */}
          {(text || image) && (
            <div className="space-y-2">
              <Label>Preview</Label>
              <div 
                className="border rounded-lg p-4 min-h-[100px] flex flex-col items-center justify-center"
                style={{ backgroundColor: backgroundColor || globalBackgroundColor }}
              >
                {image && (
                  <img 
                    src={image} 
                    alt="Preview"
                    className={imageFit === 'fill' ? 'w-full h-[100px] object-cover mb-2' : 'max-w-[80px] max-h-[80px] object-contain mb-2'}
                  />
                )}
                {text && (
                  <p 
                    className="text-center break-words"
                    style={{
                      fontSize: `${effectiveTextSize}px`,
                      fontWeight: effectiveTextBold ? 'bold' : 'normal'
                    }}
                  >
                    {text}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            onClick={handleClear}
            disabled={!text && !image && textSize === null && textBold === null && !backgroundColor}
          >
            Clear Cell
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}