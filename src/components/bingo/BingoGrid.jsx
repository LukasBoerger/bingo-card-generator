import React from 'react';
import { Card } from "@/components/ui/card";
import { Plus } from 'lucide-react';

export default function BingoGrid({
  gridSize,
  title,
  titleSize,
  titleBold,
  cells,
  fontFamily,
  textColor,
  textSize,
  textBold,
  backgroundColor,
  showGridLines,
  gridLineThickness,
  gridLineColor,
  onCellClick
}) {
  return (
    <Card className="p-6 lg:p-8 shadow-2xl" >
      {/* Title */}
        <div id="bingo-card-export">
      {title && (
        <div className="text-center mb-6">
          <h2 
            className="break-words"
            style={{ 
              fontFamily,
              color: textColor,
              fontSize: `${titleSize}px`,
              fontWeight: titleBold ? 'bold' : 'normal'
            }}
          >
            {title}
          </h2>
        </div>
      )}

      {/* Grid */}
      <div 
        className="mx-auto"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gap: showGridLines ? '0px' : '8px',
          maxWidth: gridSize === 3 ? '500px' : gridSize === 4 ? '650px' : '800px',
          border: showGridLines ? `${gridLineThickness}px solid ${gridLineColor}` : 'none'
        }}
      >
        {cells.map((cell) => {
          const cellTextSize = cell.textSize !== null ? cell.textSize : textSize;
          const cellTextBold = cell.textBold !== null ? cell.textBold : textBold;
          const cellBgColor = cell.backgroundColor || backgroundColor;
          
          return (
            <button
              key={cell.id}
              onClick={() => onCellClick(cell.id)}
              className="relative aspect-square overflow-hidden hover:opacity-80 transition-opacity duration-200 group"
              style={{ 
                backgroundColor: cellBgColor,
                borderRight: showGridLines ? `${gridLineThickness}px solid ${gridLineColor}` : 'none',
                borderBottom: showGridLines ? `${gridLineThickness}px solid ${gridLineColor}` : 'none',
                borderRadius: showGridLines ? '0' : '8px'
              }}
            >
              {/* Content */}
              <div className="absolute inset-0 p-2 flex flex-col items-center justify-center">
                {/* Image */}
                {cell.image && (
                  <img 
                    src={cell.image} 
                    alt="Cell content"
                    className={`${cell.imageFit === 'fill' ? 'w-full h-full object-cover' : 'max-w-full max-h-[60%] object-contain'} ${cell.text ? 'mb-1' : ''}`}
                  />
                )}

                {/* Text */}
                {cell.text && (
                  <p 
                    className="text-center break-words w-full line-clamp-3"
                    style={{ 
                      fontFamily,
                      color: textColor,
                      fontSize: `${cellTextSize}px`,
                      fontWeight: cellTextBold ? 'bold' : 'normal'
                    }}
                  >
                    {cell.text}
                  </p>
                )}

                {/* Empty state */}
                {!cell.text && !cell.image && (
                  <div className="flex flex-col items-center justify-center text-gray-400 group-hover:text-indigo-500 transition-colors">
                    <Plus className="w-6 h-6 lg:w-8 lg:h-8 mb-1" />
                    <span className="text-xs">Add content</span>
                  </div>
                )}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-indigo-500 bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-200" />
            </button>
          );
        })}
      </div>

      {/* Footer hint */}
      <div className="mt-6 text-center text-sm text-gray-500">
        Click any cell to edit • {cells.filter(c => c.text || c.image).length} of {cells.length} cells filled
      </div>
     </div>
    </Card>
  );
}