import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import SettingsSidebar from '../components/bingo/SettingsSidebar';
import BingoGrid from '../components/bingo/BingoGrid';
import CellEditorModal from '../components/bingo/CellEditorModal';

export default function BingoGenerator() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [gridSize, setGridSize] = useState(5);
  const [title, setTitle] = useState('');
  const [titleSize, setTitleSize] = useState(32);
  const [titleBold, setTitleBold] = useState(true);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [textColor, setTextColor] = useState('#000000');
  const [textSize, setTextSize] = useState(16);
  const [textBold, setTextBold] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [showGridLines, setShowGridLines] = useState(true);
  const [gridLineThickness, setGridLineThickness] = useState(2);
  const [gridLineColor, setGridLineColor] = useState('#333333');
  const [cells, setCells] = useState([]);
  const [editingCell, setEditingCell] = useState(null);

  // Helper: leere Zelle
  const createEmptyCell = (id) => ({
    id,
    text: '',
    image: null,
    textSize: null,
    textBold: null,
    backgroundColor: null,
    imageFit: 'fit',
  });

  const normalizeCell = (cell, id) => {
    return {
      id: id !== undefined ? id : cell.id,
      text: cell.text || '',
      image: cell.image || null,
      textSize: cell.textSize !== undefined ? cell.textSize : null,
      textBold: cell.textBold !== undefined ? cell.textBold : null,
      backgroundColor: cell.backgroundColor !== undefined ? cell.backgroundColor : null,
      imageFit: cell.imageFit || 'fit',
    };
  };

  // Zellen initialisieren bei gridSize-Änderung
  useEffect(() => {
    const totalCells = gridSize * gridSize;
    const newCells = Array(totalCells)
        .fill(null)
        .map((_, idx) => createEmptyCell(idx));
    setCells(newCells);
  }, [gridSize]);

  // Laden aus localStorage
  useEffect(() => {
    const saved = localStorage.getItem('bingoCardData');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setGridSize(data.gridSize || 5);
        setTitle(data.title || '');
        setTitleSize(data.titleSize || 32);
        setTitleBold(data.titleBold !== undefined ? data.titleBold : true);
        setFontFamily(data.fontFamily || 'Arial');
        setTextColor(data.textColor || '#000000');
        setTextSize(data.textSize || 16);
        setTextBold(data.textBold || false);
        setBackgroundColor(data.backgroundColor || '#ffffff');
        setShowGridLines(data.showGridLines !== undefined ? data.showGridLines : true);
        setGridLineThickness(data.gridLineThickness || 2);
        setGridLineColor(data.gridLineColor || '#333333');

        if (data.cells && Array.isArray(data.cells)) {
          const normalizedCells = data.cells.map((cell, idx) =>
              normalizeCell(cell, idx)
          );
          setCells(normalizedCells);
        }
      } catch (e) {
        console.error('Failed to load saved data', e);
      }
    }
  }, []);

  // Speichern in localStorage
  useEffect(() => {
    const data = {
      gridSize,
      title,
      titleSize,
      titleBold,
      fontFamily,
      textColor,
      textSize,
      textBold,
      backgroundColor,
      showGridLines,
      gridLineThickness,
      gridLineColor,
      cells,
    };
    localStorage.setItem('bingoCardData', JSON.stringify(data));
  }, [
    gridSize,
    title,
    titleSize,
    titleBold,
    fontFamily,
    textColor,
    textSize,
    textBold,
    backgroundColor,
    showGridLines,
    gridLineThickness,
    gridLineColor,
    cells,
  ]);

  const updateCell = (cellId, updates) => {
    setCells((prev) =>
        prev.map((cell) =>
            cell.id === cellId ? { ...cell, ...updates } : cell
        )
    );
  };

  const clearCard = () => {
    if (window.confirm('Are you sure you want to clear all cells? This will remove all content and reset cells to use global settings.')) {
      setCells((prev) =>
          prev.map((cell) => createEmptyCell(cell.id))
      );
    }
  };

  const openCellEditor = (cellId) => {
    setEditingCell(cellId);
  };

  const closeCellEditor = () => {
    setEditingCell(null);
  };

  // Breite für Export-Ansicht
  const exportWidth =
      gridSize === 3 ? 500 : gridSize === 4 ? 650 : 800;

  return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Mobile Header */}
        <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Bingo Generator
            </h1>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        <div className="flex lg:pt-0 pt-16">
          {/* Settings Sidebar */}
          <div
              className={`
          fixed lg:static inset-y-0 left-0 z-40 lg:z-0
          w-80 bg-white border-r border-gray-200 
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto
        `}
          >
            <SettingsSidebar
                gridSize={gridSize}
                setGridSize={setGridSize}
                title={title}
                setTitle={setTitle}
                titleSize={titleSize}
                setTitleSize={setTitleSize}
                titleBold={titleBold}
                setTitleBold={setTitleBold}
                fontFamily={fontFamily}
                setFontFamily={setFontFamily}
                textColor={textColor}
                setTextColor={setTextColor}
                textSize={textSize}
                setTextSize={setTextSize}
                textBold={textBold}
                setTextBold={setTextBold}
                backgroundColor={backgroundColor}
                setBackgroundColor={setBackgroundColor}
                showGridLines={showGridLines}
                setShowGridLines={setShowGridLines}
                gridLineThickness={gridLineThickness}
                setGridLineThickness={setGridLineThickness}
                gridLineColor={gridLineColor}
                setGridLineColor={setGridLineColor}
                cells={cells}
                onClearCard={clearCard}
            />
          </div>

          {/* Overlay for mobile */}
          {sidebarOpen && (
              <div
                  className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                  onClick={() => setSidebarOpen(false)}
              />
          )}

          {/* Main Content */}
          <div className="flex-1 p-4 lg:p-8 overflow-auto">
            <div className="max-w-5xl mx-auto">
              {/* Desktop Header */}
              <div className="hidden lg:block mb-8">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  Bingo Card Generator
                </h1>
                <p className="text-gray-600">
                  Create custom bingo cards with images and text • 100% client-side • No uploads required
                </p>
              </div>

              {/* Sichtbare Karte */}
              <div id="bingo-card-visible">
                <BingoGrid
                    gridSize={gridSize}
                    title={title}
                    titleSize={titleSize}
                    titleBold={titleBold}
                    cells={cells}
                    fontFamily={fontFamily}
                    textColor={textColor}
                    textSize={textSize}
                    textBold={textBold}
                    backgroundColor={backgroundColor}
                    showGridLines={showGridLines}
                    gridLineThickness={gridLineThickness}
                    gridLineColor={gridLineColor}
                    onCellClick={openCellEditor}
                    exportMode={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Unsichtbare Export-Version */}
        <div
            id="bingo-card-export"
            style={{
              position: 'absolute',
              left: '-99999px',
              top: 0,
              backgroundColor: '#ffffff',
              width: `${exportWidth + 48}px`, // Grid-Breite + etwas Padding
              padding: '24px',
            }}
        >
          <BingoGrid
              gridSize={gridSize}
              title={title}
              titleSize={titleSize}
              titleBold={titleBold}
              cells={cells}
              fontFamily={fontFamily}
              textColor={textColor}
              textSize={textSize}
              textBold={textBold}
              backgroundColor={backgroundColor}
              showGridLines={showGridLines}
              gridLineThickness={gridLineThickness}
              gridLineColor={gridLineColor}
              onCellClick={() => {}}
              exportMode={true}
          />
        </div>

        {/* Cell Editor Modal */}
        {editingCell !== null && (
            <CellEditorModal
                cell={cells.find((c) => c.id === editingCell)}
                globalTextSize={textSize}
                globalTextBold={textBold}
                globalBackgroundColor={backgroundColor}
                onClose={closeCellEditor}
                onSave={(updates) => {
                  updateCell(editingCell, updates);
                  closeCellEditor();
                }}
            />
        )}
      </div>
  );
}
