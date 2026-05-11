'use client';

// Importamos íconos de React Icons 
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

/**
 * MENÚ LATERAL DERECHO - COMPONENTE MOLÉCULA
 * 
 * Este menú es FIJO en la pantalla (no hace scroll)
 * Contiene íconos de redes sociales que redirigen a los perfiles del estudiante
 * 
 * REQUISITO DEL PROYECTO: "Se debe incluir mínimamente Github y LinkedIn"

 * Cada ícono:
 * - Tiene enlace al perfil real del estudiante
 * - Se abre en nueva pestaña (target="_blank")
 * - Cambia de color al hacer hover (de gris a azul)
 */
export default function RightMenu() {
  

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/MarianaMartinezGaviria", label: "GitHub" },      
    { icon: FaLinkedin, href: "https://linkedin.com/in/mariana-martinez-gaviria-bba31740a/", label: "LinkedIn" }, 
    { icon: FaInstagram, href: "https://instagram.com/mari.mg18", label: "Instagram" }, 
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-6 h-full">
      {socialLinks.map((Social, index: number) => (
        <a
          key={index}
          href={Social.href}
          target="_blank"          // Abre en nueva pestaña para no perder el portafolio
          rel="noopener noreferrer" // Seguridad: evita que la nueva página acceda a la actual
          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          aria-label={Social.label} // Accesibilidad: describe el ícono para lectores de pantalla
        >
          <Social.icon size={24} />
        </a>
      ))}
    </div>
  );
}