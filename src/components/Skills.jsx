import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: "Programming Languages", data: skills.programming, icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
    { title: "Web Technologies", data: skills.web, icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
    { title: "Database Systems", data: skills.database, icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" },
    { title: "Frameworks & Libraries", data: skills.frameworks, icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
    { title: "Cloud & DevOps", data: skills.cloudDevops, icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
    { title: "AI & Tools", data: skills.aiTools, icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
  ];

  return (
    <section id="skills" className="section-padding bg-white dark:bg-darklight">
      <div className="container mx-auto max-w-6xl px-4">
        
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">My Arsenal</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-midnight_text dark:text-white mb-4">Technical Skills</h2>
          <p className="text-grey dark:text-white/70 max-w-2xl mx-auto text-lg">Technologies and tools I leverage to build scalable, high-performance enterprise applications.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-section dark:bg-darkmode p-6 rounded-2xl border border-border dark:border-dark_border hover:shadow-deatail_shadow transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={category.icon}></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-midnight_text dark:text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.data.map((skill, sIdx) => (
                  <span key={sIdx} className="bg-white dark:bg-darklight text-midnight_text dark:text-white/90 text-sm font-semibold px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm hover:border-primary hover:text-primary dark:hover:border-primary transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
