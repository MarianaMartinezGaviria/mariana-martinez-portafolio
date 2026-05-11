'use client';

// Propiedades para mostrar una habilidad con su porcentaje
interface SkillBadgeProps {
  name: string;
  percentage: number;
}

/**
 * Componente que muestra una habilidad con una barra de progreso
 * Se usa tanto para idiomas como para lenguajes de programación
 * La barra se anima automáticamente al cargar la página
 */
export default function SkillBadge({ name, percentage }: SkillBadgeProps) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}