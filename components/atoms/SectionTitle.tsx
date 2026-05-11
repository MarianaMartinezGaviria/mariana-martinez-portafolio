'use client';

// Propiedades para el título de cada sección del portafolio
interface SectionTitleProps {
  title: string;      
  subtitle?: string;  
}

/**
 * Componente que estandariza los títulos de todas las secciones
 * Garantiza consistencia visual en todo el portafolio
 */
export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-6">
      {/* Título principal en negrita y tamaño grande */}
      <h2 className="text-2xl font-bold">{title}</h2>
      
      {/* Subtítulo: solo se muestra si existe */}
      {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
    </div>
  );
}