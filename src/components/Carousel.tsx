import { useState, useEffect, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: ReactNode[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel = ({ children, autoPlay = true, interval = 4000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = children.length;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const getCardPosition = (index: number) => {
    const diff = index - currentIndex;
    const normalizedDiff = ((diff % totalItems) + totalItems) % totalItems;

    if (normalizedDiff === 0) return 'center';
    if (normalizedDiff === 1 || normalizedDiff === totalItems - 1) {
      return normalizedDiff === 1 ? 'right' : 'left';
    }
    return 'hidden';
  };

  const getCardStyles = (position: string) => {
    const baseStyles = 'absolute top-1/2 transition-all duration-500 ease-out h-full ';

    switch (position) {
      case 'center':
        return `${baseStyles} left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 scale-100 opacity-100`;
      case 'left':
        return `${baseStyles} left-0 sm:left-[5%] -translate-y-1/2 z-20 scale-75 sm:scale-85 opacity-40 sm:opacity-60`;
      case 'right':
        return `${baseStyles} right-0 sm:right-[5%] -translate-y-1/2 z-20 scale-75 sm:scale-85 opacity-40 sm:opacity-60`;
      default:
        return `${baseStyles} left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 scale-50 opacity-0`;
    }
  };

  return (
    <div className="relative w-full h-[420px] ">
      {/* Cards Container */}
      <div className="relative w-full h-full overflow-hidden">
        {children.map((child, index) => (
          <div
            key={index}
            className={getCardStyles(getCardPosition(index))}
            style={{
              width: 'min(90%, 390px)',
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-16 sm:h-12 flex items-center justify-center bg-background rounded-full text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 w-11 h-10 sm:w-16 sm:h-12 flex items-center justify-center bg-background rounded-full text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicators */}

    </div>
  );
};

export default Carousel;
