'use client';

import Image from 'next/image';
import Button from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  onLearnMore: () => void;
}

/**
 * Tarjeta de proyecto con altura fija y descripción limitada
 * Diseño más cuadrado y compacto
 */
export default function ProjectCard({ title, description, image, onLearnMore }: ProjectCardProps) {
  
  
  const shortDescription = description.length > 100 
    ? description.substring(0, 100) + "..." 
    : description;

  return (
    <div className="min-w-[280px] w-[280px] bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 flex flex-col">
      
      <div className="h-36 bg-gray-200 relative">
        {image ? (
          <Image src={image} alt={title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl">
            📷
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        
        <h3 className="font-bold text-base mb-2 line-clamp-2 min-h-[48px]">
          {title}
        </h3>
        
        <p className="text-gray-600 text-xs mb-3 line-clamp-3 min-h-[54px]">
          {shortDescription}
        </p>
        
        <div className="mt-auto">
          <Button variant="outline" onClick={onLearnMore} className="w-full text-sm py-1.5">
            Learn More →
          </Button>
        </div>
      </div>
      
    </div>
  );
}