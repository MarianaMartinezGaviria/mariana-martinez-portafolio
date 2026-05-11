'use client';

// Propiedad simple: solo el nombre de la habilidad extra
interface ExtraSkillItemProps {
  name: string;
}

/**
 * Componente tipo "chip" o "etiqueta" para habilidades
 */
export default function ExtraSkillItem({ name }: ExtraSkillItemProps) {
  return (
    <span className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm">
      {name}
    </span>
  );
}