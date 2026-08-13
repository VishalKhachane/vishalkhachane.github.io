import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section-padding bg-white dark:bg-darklight">
      <div className="container mx-auto max-w-6xl px-4">
        
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-midnight_text dark:text-white mb-4">Recent Projects</h2>
          <p className="text-midnight_text dark:text-white font-bold max-w-2xl mx-auto text-lg">Scalable, real-world applications built with modern technologies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-section dark:bg-darkmode border border-border dark:border-dark_border rounded-2xl p-6 md:p-8 hover:shadow-deatail_shadow transition-all duration-300 flex flex-col h-full group">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <h3 className="font-bold text-xl text-midnight_text dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
                <span className="text-xs font-semibold px-3 py-1 bg-white dark:bg-darklight text-grey dark:text-white/70 border border-border dark:border-dark_border rounded-full flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  {project.duration}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="text-[0.7rem] font-bold uppercase tracking-wider px-2.5 py-1 bg-primary/10 text-primary rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="text-midnight_text/90 dark:text-white/80 font-medium mb-4 text-sm leading-relaxed">
                {project.desc}
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                <ul className="space-y-2">
                  {project.points.map((point, pIdx) => (
                    <li key={pIdx} className="text-sm text-black font-bold dark:text-white flex items-start gap-2">
                      <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
