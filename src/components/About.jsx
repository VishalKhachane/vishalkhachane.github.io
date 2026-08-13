import { portfolioData } from '../data/portfolioData';
import resumePdf from '../assets/Vishal_Khachane_Resume.pdf';

const About = () => {
  const { personalInfo } = portfolioData;

  const infoItems = [
    { label: "Full Name", value: personalInfo.name, icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { label: "Birth Date", value: personalInfo.birthDate, icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
    { label: "Experience", value: `${personalInfo.experienceYears} Years`, icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { label: "Location", value: personalInfo.location, icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
    { label: "Email", value: personalInfo.email, link: `mailto:${personalInfo.email}`, icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { label: "WhatsApp / Phone", value: personalInfo.phone, link: personalInfo.socials.whatsapp, icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
  ];

  return (
    <section id="about" className="section-padding bg-section dark:bg-darkmode">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/2 w-full order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {infoItems.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-darklight p-5 rounded-2xl shadow-service border border-border dark:border-dark_border hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-SkyBlueMist/30 flex shrink-0 items-center justify-center text-primary">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                      </svg>
                    </div>
                    <div className="overflow-hidden flex-1 min-w-0">
                      <p className="text-sm font-semibold text-grey mb-1">{item.label}</p>
                      {item.link ? (
                        <a href={item.link} target={item.link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer" className="text-midnight_text dark:text-white font-bold block text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] break-all hover:text-primary transition-colors" title={item.value}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-midnight_text dark:text-white font-bold block text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[17px] break-all" title={item.value}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full order-1 lg:order-2">
            <div className="mb-6">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Who I Am</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-midnight_text dark:text-white mb-6 relative inline-block">
                About Me
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
              </h2>
            </div>
            
            <div className="space-y-4 text-black font-bold dark:text-white text-lg leading-relaxed">
              {personalInfo.about.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-8">
              <a href={resumePdf} download="Vishal_Khachane_Resume.pdf" className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download Resume
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
