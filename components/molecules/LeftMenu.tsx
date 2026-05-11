'use client';

import Image from 'next/image';
import { personalInfo, contactInfo, languages, programmingSkills, extraSkills } from '@/data/portfolioData';
import SkillBadge from '@/components/atoms/SkillBadge';
import ExtraSkillItem from '@/components/atoms/ExtraSkillItem';
import SectionTitle from '@/components/atoms/SectionTitle';
import { Language, Skill, ExtraSkill } from '@/types';

/**
 * MENÚ LATERAL IZQUIERDO - COMPONENTE MOLÉCULA
 Contiene toda mi información personal
 */
export default function LeftMenu() {
  return (
    <div className="p-6">
      
      {/* ========== SECCIÓN: FOTO Y NOMBRE ========== */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 mb-4 border-4 border-blue-600">
          {personalInfo.photo ? (
            <Image 
              src={personalInfo.photo} 
              alt={personalInfo.name} 
              width={128} 
              height={128} 
              className="object-cover w-full h-full"
            />
          ) : (
            /* Placeholder mientras no haya foto */
            <div className="w-full h-full flex items-center justify-center text-4xl">
              📸
            </div>
          )}
        </div>
        
        <h2 className="text-xl font-bold text-center">{personalInfo.name}</h2>
        <p className="text-gray-600 text-center mt-1">{personalInfo.title}</p>
      </div>

      <div className="mb-8">
        <SectionTitle title="Contacto" />
        <div className="space-y-2 text-sm text-gray-700">
          <p>📍 {contactInfo.city}</p>
          <p>📞 {contactInfo.phone}</p>
          <p>✉️ {contactInfo.email}</p>
        </div>
      </div>

      <div className="mb-8">
        <SectionTitle title="Idiomas" />
        {languages.map((lang: Language, index: number) => (
          <SkillBadge key={index} name={lang.name} percentage={lang.percentage} />
        ))}
      </div>

      <div className="mb-8">
        <SectionTitle title="Lenguajes de Programación" />
        {programmingSkills.map((skill: Skill, index: number) => (
          <SkillBadge key={index} name={skill.name} percentage={skill.percentage} />
        ))}
      </div>

      <div className="mb-8">
        <SectionTitle title="Habilidades Extra" />
        <div className="flex flex-wrap gap-2">
          {extraSkills.map((skill: ExtraSkill, index: number) => (
            <ExtraSkillItem key={index} name={skill.name} />
          ))}
        </div>
      </div>
      
    </div>
  );
}