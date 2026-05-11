'use client';

interface KnowledgeCardProps {
  title: string;
  description: string;
  icon: string;
}

/**
 * Tarjeta de conocimiento que muestra imágenes JPG/PNG
 */
export default function KnowledgeCard({ title, description, icon }: KnowledgeCardProps) {
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      
      <div className="w-16 h-16 mb-4 mx-auto flex items-center justify-center">
        <img 
          src={icon}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Título */}
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      
      {/* Descripción */}
      <p className="text-gray-600 text-sm text-center leading-relaxed">{description}</p>
      
    </div>
  );
}