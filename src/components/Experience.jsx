import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="section-padding bg-section dark:bg-darkmode">
      <div className="container mx-auto max-w-5xl px-4">
        
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">My Journey</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Professional Experience & Education</h2>
          <p className="text-gray-800 dark:text-gray-200 max-w-2xl mx-auto text-lg font-medium">A track record of continuous growth and impactful contributions in software engineering.</p>
        </div>

        <div className="flex flex-col gap-16">
          
          {/* Experience Timeline */}
          <div>
            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10 flex items-center gap-3 border-b border-gray-300 dark:border-gray-700 pb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Work Experience
            </h3>
            
            <div className="space-y-12">
              {experience.map((exp, idx) => (
                <div key={idx} className="bg-white dark:bg-darklight p-8 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
                    <div>
                      <h4 className="font-extrabold text-2xl text-gray-900 dark:text-white mb-1">{exp.role}</h4>
                      <span className="font-bold text-lg text-primary">{exp.company}</span>
                    </div>
                    <span className="text-sm font-bold px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full border border-gray-300 dark:border-gray-600 shadow-sm">{exp.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="text-base text-gray-800 dark:text-gray-200 font-medium flex gap-3">
                        <span className="text-primary font-bold shrink-0 text-lg">›</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10 flex items-center gap-3 border-b border-gray-300 dark:border-gray-700 pb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>
              Education
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-white dark:bg-darklight p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow flex flex-col items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"></path></svg>
                  </div>
                  <div className="flex flex-col h-full">
                    <h4 className="font-extrabold text-xl text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                    <p className="text-base font-bold text-gray-700 dark:text-gray-300 flex-grow">{edu.institute}</p>
                    <span className="inline-block mt-4 text-sm font-bold px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full border border-gray-300 dark:border-gray-600 shadow-sm w-fit">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-gray-900 to-primary dark:from-darklight dark:to-primary rounded-3xl p-10 text-white shadow-2xl border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h4 className="text-3xl font-extrabold mb-3">Ready to build something amazing?</h4>
                <p className="text-white/90 text-lg font-medium">Looking for a skilled Full Stack .NET Developer to join your team or for a freelance project? Let's connect!</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <a href={`mailto:${portfolioData.personalInfo.email}`} className="flex items-center justify-center gap-2 bg-white text-gray-900 font-extrabold py-3 px-8 rounded-xl hover:bg-gray-100 transition shadow-lg text-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  Email Me
                </a>
                <a href={portfolioData.personalInfo.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-extrabold py-3 px-8 rounded-xl hover:bg-[#20b958] transition shadow-lg text-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0c-6.627 0-11.996 5.373-11.996 12.001 0 2.115.548 4.186 1.59 5.998l-1.625 5.94 6.081-1.595c1.765.955 3.754 1.458 5.945 1.458 6.625 0 11.997-5.374 11.997-12 0-6.628-5.372-12.002-11.992-12.002zm0 22.06c-1.785 0-3.535-.48-5.068-1.387l-.36-.214-3.766.987.997-3.666-.235-.373c-1.002-1.594-1.528-3.428-1.528-5.347 0-5.551 4.519-10.068 10.071-10.068 5.55 0 10.068 4.517 10.068 10.067s-4.518 10.068-10.069 10.068zm5.525-7.545c-.302-.152-1.791-.884-2.067-.986-.276-.101-.477-.152-.679.151-.201.303-.781.986-.957 1.189-.176.202-.352.227-.654.076-1.545-.776-2.736-1.89-3.771-3.239-.23-.3-.024-.463.128-.614.135-.135.302-.353.453-.531.151-.177.202-.303.303-.504.101-.202.05-.38-.025-.531-.075-.152-.678-1.638-.929-2.242-.244-.59-.492-.51-.678-.519-.176-.01-.378-.01-.58-.01-.202 0-.528.076-.805.379-.276.303-1.055 1.034-1.055 2.522 0 1.488 1.08 2.926 1.232 3.128.151.202 2.133 3.255 5.166 4.563.721.312 1.283.498 1.724.638.724.23 1.384.197 1.9.119.584-.088 1.791-.732 2.043-1.439.252-.707.252-1.313.176-1.439-.075-.127-.276-.202-.579-.353z"/></svg>
                  WhatsApp
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
