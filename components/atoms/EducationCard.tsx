'use client';

// Propiedades para la tarjeta de educación (sección "Education" del Figma)
interface EducationCardProps {
  institution: string;   
  role: string;          
  startDate: string;     
  endDate: string;       
  certificate: string;   
  description: string;   
}

/**
 * Tarjeta vertical que muestra la historia educativa */
export default function EducationCard({
  institution,
  role,
  startDate,
  endDate,
  certificate,
  description
}: EducationCardProps) {
  return (

    <div className="border-l-4 border-blue-600 pl-6 mb-8">
      <h3 className="text-xl font-bold">{institution}</h3>
      <p className="text-gray-600 italic">{role}</p>
      <p className="text-sm text-gray-500 mb-2">{startDate} - {endDate}</p>
      <h4 className="font-semibold mb-2">{certificate}</h4>
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
    </div>
  );
}