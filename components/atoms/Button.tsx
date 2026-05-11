'use client';

// Interface que define las propiedades que puede recibir el botón
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

/**
 * Componente reutilizable de botón.Se puede usar en cualquier parte del portafolio
 */
export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '' 
}: ButtonProps) {
    // Estilos base que todos los botones comparten
  const baseStyles = "px-4 py-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}