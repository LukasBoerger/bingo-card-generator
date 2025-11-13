import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Download, Loader2, Image as ImageIcon, FileText, Trash2 } from 'lucide-react';
import { exportToPDF, exportToPNG } from '../.@/api/functions/exportUtils';
import { toast } from 'sonner';

export default function SettingsSidebar({
  gridSize,
  setGridSize,
  title,
  setTitle,
  titleSize,
  setTitleSize,
  titleBold,
  setTitleBold,
  fontFamily,
  setFontFamily,
  textColor,
  setTextColor,
  textSize,
  setTextSize,
  textBold,
  setTextBold,
  backgroundColor,
  setBackgroundColor,
  showGridLines,
  setShowGridLines,
  gridLineThickness,
  setGridLineThickness,
  gridLineColor,
  setGridLineColor,
  cells,
  onClearCard
}) {
  const [exporting, setExporting] = useState(false);

  const handleExportPDF = async () => {
    setExporting(true);
    try {
      await exportToPDF();
      toast.success('PDF downloaded successfully!');
    } catch (error) {
      toast.error('Failed to export PDF');
      console.error(error);
    }
    setExporting(false);
  };

  const handleExportPNG = async () => {
    setExporting(true);
    try {
      await exportToPNG();
      toast.success('PNG downloaded successfully!');
    } catch (error) {
      toast.error('Failed to export PNG');
      console.error(error);
    }
    setExporting(false);
  };

  const fontOptions = [
    { value: 'Arial', label: 'Arial' },
    { value: 'Roboto', label: 'Roboto' },
    { value: 'Montserrat', label: 'Montserrat' },
    { value: 'Comic Sans MS', label: 'Comic Sans' },
    { value: 'Open Sans', label: 'Open Sans' }
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Card Settings</h2>
        <p className="text-sm text-gray-500 mt-1">Customize your bingo card</p>
      </div>

      {/* Settings */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Card Title */}
        <div className="space-y-3">
          <Label htmlFor="card-title" className="text-sm font-medium">
            Card Title (Optional)
          </Label>
          <Input
            id="card-title"
            type="text"
            placeholder="Enter card title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full"
          />
          
          {/* Title Size */}
          <div className="space-y-2 pl-4 border-l-2 border-gray-200">
            <Label htmlFor="title-size" className="text-xs text-gray-600">
              Title Size: {titleSize}px
            </Label>
            <Slider
              id="title-size"
              min={16}
              max={48}
              step={1}
              value={[titleSize]}
              onValueChange={(val) => setTitleSize(val[0])}
              className="w-full"
            />
          </div>

          {/* Title Bold */}
          <div className="flex items-center space-x-2 pl-4">
            <Checkbox
              id="title-bold"
              checked={titleBold}
              onCheckedChange={setTitleBold}
            />
            <Label htmlFor="title-bold" className="text-xs cursor-pointer">
              Bold title
            </Label>
          </div>
        </div>

        {/* Grid Size */}
        <div className="space-y-2">
          <Label htmlFor="grid-size" className="text-sm font-medium">
            Grid Size
          </Label>
          <Select value={String(gridSize)} onValueChange={(val) => setGridSize(Number(val))}>
            <SelectTrigger id="grid-size">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3">3 × 3</SelectItem>
              <SelectItem value="4">4 × 4</SelectItem>
              <SelectItem value="5">5 × 5</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Font Family */}
        <div className="space-y-2">
          <Label htmlFor="font-family" className="text-sm font-medium">
            Font Family
          </Label>
          <Select value={fontFamily} onValueChange={setFontFamily}>
            <SelectTrigger id="font-family">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {fontOptions.map(font => (
                <SelectItem key={font.value} value={font.value}>
                  {font.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Text Size */}
        <div className="space-y-2">
          <Label htmlFor="text-size" className="text-sm font-medium">
            Text Size: {textSize}px
          </Label>
          <Slider
            id="text-size"
            min={10}
            max={40}
            step={1}
            value={[textSize]}
            onValueChange={(val) => setTextSize(val[0])}
            className="w-full"
          />
        </div>

        {/* Text Bold */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="text-bold"
            checked={textBold}
            onCheckedChange={setTextBold}
          />
          <Label htmlFor="text-bold" className="text-sm cursor-pointer">
            Bold text (default for all cells)
          </Label>
        </div>

        {/* Text Color */}
        <div className="space-y-2">
          <Label htmlFor="text-color" className="text-sm font-medium">
            Text Color
          </Label>
          <div className="flex gap-3 items-center">
            <input
              id="text-color"
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="w-12 h-12 rounded-lg border border-gray-200 cursor-pointer"
            />
            <Input
              type="text"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="flex-1 font-mono text-sm"
            />
          </div>
        </div>

        {/* Background Color */}
        <div className="space-y-2">
          <Label htmlFor="bg-color" className="text-sm font-medium">
            Background Color
          </Label>
          <div className="flex gap-3 items-center">
            <input
              id="bg-color"
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="w-12 h-12 rounded-lg border border-gray-200 cursor-pointer"
            />
            <Input
              type="text"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="flex-1 font-mono text-sm"
            />
          </div>
        </div>

        {/* Grid Lines */}
        <div className="space-y-3 pt-4 border-t border-gray-200">
          <Label className="text-sm font-medium">Grid Lines</Label>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="show-grid-lines"
              checked={showGridLines}
              onCheckedChange={setShowGridLines}
            />
            <Label htmlFor="show-grid-lines" className="text-sm cursor-pointer">
              Show grid lines
            </Label>
          </div>

          {showGridLines && (
            <>
              <div className="space-y-2 pl-4 border-l-2 border-gray-200">
                <Label htmlFor="line-thickness" className="text-xs text-gray-600">
                  Line Thickness: {gridLineThickness}px
                </Label>
                <Slider
                  id="line-thickness"
                  min={1}
                  max={5}
                  step={1}
                  value={[gridLineThickness]}
                  onValueChange={(val) => setGridLineThickness(val[0])}
                  className="w-full"
                />
              </div>

              <div className="space-y-2 pl-4">
                <Label htmlFor="line-color" className="text-xs text-gray-600">
                  Line Color
                </Label>
                <div className="flex gap-3 items-center">
                  <input
                    id="line-color"
                    type="color"
                    value={gridLineColor}
                    onChange={(e) => setGridLineColor(e.target.value)}
                    className="w-10 h-10 rounded-lg border border-gray-200 cursor-pointer"
                  />
                  <Input
                    type="text"
                    value={gridLineColor}
                    onChange={(e) => setGridLineColor(e.target.value)}
                    className="flex-1 font-mono text-xs"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Clear Card Button */}
        <div className="pt-4 border-t border-gray-200">
          <Button
            onClick={onClearCard}
            variant="outline"
            className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Clear All Cells
          </Button>
        </div>

        {/* Info Card */}
        <Card className="p-4 bg-indigo-50 border-indigo-200">
          <p className="text-sm text-indigo-900">
            <strong>💡 Tip:</strong> Click any cell in the preview to edit its text and image.
          </p>
        </Card>
      </div>

      {/* Export Buttons */}
      <div className="p-6 border-t border-gray-200 space-y-3 bg-gray-50">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Export Card</h3>
        
        <Button
          onClick={handleExportPDF}
          disabled={exporting}
          className="w-full bg-red-600 hover:bg-red-700 text-white"
        >
          {exporting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Exporting...
            </>
          ) : (
            <>
              <FileText className="w-4 h-4 mr-2" />
              Download as PDF
            </>
          )}
        </Button>

        <Button
          onClick={handleExportPNG}
          disabled={exporting}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          {exporting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Exporting...
            </>
          ) : (
            <>
              <ImageIcon className="w-4 h-4 mr-2" />
              Download as PNG
            </>
          )}
        </Button>
      </div>
    </div>
  );
}