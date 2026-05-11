'use client';

import { Project } from '@/types';
import LeftMenu from '@/components/molecules/LeftMenu';
import RightMenu from '@/components/molecules/RightMenu';
import SectionTitle from '@/components/atoms/SectionTitle';
import KnowledgeCard from '@/components/atoms/KnowledgeCard';
import EducationCard from '@/components/atoms/EducationCard';
import ProjectCard from '@/components/atoms/ProjectCard';
import Button from '@/components/atoms/Button';
import { personalInfo, knowledges, educations, projects } from '@/data/portfolioData';
import { useState } from 'react';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <main className="flex min-h-screen bg-gray-50">
      {/* Menú izquierdo*/}
      <aside className="w-80 bg-white shadow-lg fixed left-0 top-0 h-screen overflow-y-auto">
        <LeftMenu />
      </aside>

      {/* Contenido central */}
      <section className="ml-80 mr-16 flex-1 p-8 overflow-y-auto h-screen">
        <div className="max-w-3xl mx-auto">
          
          {/* Perfil */}
          <section className="mb-16">
            <SectionTitle title="Perfil" />
            <div className="bg-white p-6 rounded-lg shadow-md">
              
              {/* Contenedor flex: texto a la izquierda, foto a la derecha */}
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-between">
                
                {/* Texto del perfil (izquierda) */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {personalInfo.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {personalInfo.title}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {personalInfo.description}
                  </p>
                  
                  {/* Botón que ABRE el diálogo */}
                  <Button variant="primary" className="mt-4" onClick={() => setIsDialogOpen(true)}>
                    Conoce un poco más sobre mí →
                  </Button>
                </div>
                
                {/* Foto del perfil (derecha) */}
                <div className="w-32 h-60 flex-shrink-0">
                  {personalInfo.photo ? (
                    <img 
                      src={personalInfo.photo} 
                      alt={personalInfo.name}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-blue-400 to-purple-500 text-white rounded-lg">
                      📸
                    </div>
                  )}
                </div>
                
              </div>
            </div>
          </section>

          {/* Mi Conocimiento */}
          <section className="mb-16">
            <SectionTitle 
              title="Mi Conocimiento" 
              subtitle="Cuento con bases en áreas clave de la ingeniería de sistemas y el desarrollo tecnológico, complementadas con habilidades en diseño digital y gestión de proyectos, que me permiten aportar de manera integral en entornos colaborativos."
            />
            <div className="grid md:grid-cols-2 gap-6">
              {knowledges.map((knowledge, index: number) => (
                <KnowledgeCard key={index} {...knowledge} />
              ))}
            </div>
          </section>

          {/* Educación */}
          <section className="mb-16">
            <SectionTitle 
              title="Educación" 
            />
            <div>
              {educations.map((edu, index: number) => (
                <EducationCard key={index} {...edu} />
              ))}
            </div>
          </section>

          {/* Habilidades*/}
          <section className="mb-16">
            <SectionTitle 
              title="Habilidades" 
              subtitle="Mis competencias y habilidades interpersonales"
            />
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium">
                    Resolución de problemas
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium">
                    Liderazgo
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium">
                    Pensamiento estratégico
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium">
                    Trabajo en equipo
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium">
                    Comunicación efectiva
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Portafolio */}
          <section className="mb-16">
            <SectionTitle 
              title="Portafolio" 
              subtitle="A continuación, se presentan algunos proyectos desarrollados durante mi proceso de formación."
            />
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-6">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    {...project}
                    onLearnMore={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center py-8 text-gray-500 text-sm border-t">
            © {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
          </footer>
        </div>
      </section>

      {/* Menú derecho */}
      <aside className="w-16 bg-white shadow-lg fixed right-0 top-0 h-screen">
        <RightMenu />
      </aside>

      {/* MODAL / DIÁLOGO DEL PERFIL */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            
            {/* Encabezado con gradiente */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Para que conozcas un poco más sobre mí</h2>
                <button 
                  onClick={() => setIsDialogOpen(false)}
                  className="text-white hover:text-gray-200 text-3xl leading-none"
                >
                  ×
                </button>
              </div>
            </div>
            
            {/* Contenido */}
            <div className="p-6">
              
              {/* Título de bienvenida */}
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">🏅</div>
                <p className="text-gray-700 text-lg">
                  Hola, soy <span className="font-bold text-blue-600">{personalInfo.name}</span>
                </p>
                <p className="text-gray-500 text-sm">Mi trayectoria deportiva y laboral</p>
              </div>
              
              {/* CARRERA DEPORTIVA */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold text-gray-800">Mi carrera deportiva</h3>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4 ml-2">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Soy deportista de alto rendimiento, practico patinaje, una disciplina que me ha formado con valores como la 
                    constancia, la resiliencia y el enfoque en el logro de objetivos. Mi pasión por el deporte 
                    me ha llevado a representar a mi región y a mi país en competencias nacionales e internacionales.
                  </p>
                </div>
              </div>
              
              {/* LOGROS */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold text-gray-800">Mis logros</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">🏅</span>
                      <div>
                        <p className="font-bold text-gray-800">Selección Antioquia</p>
                        <p className="text-blue-600 text-sm">2025</p>
                        <p className="text-gray-600 text-sm mt-1">
                          Tuve el honor de ser convocada y representar a mi departamento en el Campeonato Nacional Interligas.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">🌍</span>
                      <div>
                        <p className="font-bold text-gray-800">Medallista a nivel internacional</p>
                        <p className="text-purple-600 text-sm">2026</p>
                        <p className="text-gray-600 text-sm mt-1">
                          Representé a Colombia en competencias internacionales, obtuve una medalla de bronce en GroB Gerau - Alemania.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* EXPERIENCIA COMO FORMADORA */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">📚</span>
                  <h3 className="text-xl font-bold text-gray-800">Formadora Deportiva</h3>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-800">Corporación Grandes Paisas</p>
                  <ul className="mt-2 space-y-2 text-gray-600 text-sm">
                    <li className="flex gap-2">
                      <span className="text-blue-500">✓</span>
                      Planifico y dirigo entrenamientos para grupos de niños, promoviendo disciplina, trabajo en equipo y desarrollo técnico.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-500">✓</span>
                      Coordino actividades y acompaño procesos formativos, fortaleciendo habilidades sociales y deportivas en los alumnos.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-500">✓</span>
                      Gestiono la comunicación con padres de familia, garantizando seguimiento y compromiso en el proceso de formación.
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
            
            {/* Botón de cerrar */}
            <div className="p-6 border-t bg-gray-50 rounded-b-2xl">
              <Button variant="primary" className="w-full" onClick={() => setIsDialogOpen(false)}>
                Cerrar
              </Button>
            </div>
            
          </div>
        </div>
      )}

      {/* Modal para proyectos */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="text-gray-600 mb-4">{selectedProject.description}</p>
            <div className="flex gap-3">
              {selectedProject.githubLink && (
                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  GitHub →
                </a>
              )}
              {selectedProject.liveLink && (
                <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Ver Demo →
                </a>
              )}
            </div>
            <Button variant="secondary" className="mt-4 w-full" onClick={() => setSelectedProject(null)}>
              Cerrar
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}