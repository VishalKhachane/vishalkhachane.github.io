import { useState, useEffect } from 'react';
import Logo from './Logo';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [theme, setTheme] = useState('light');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Profile', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header
      className={`fixed h-24 top-0 py-1 z-50 w-full transition-all ${
        sticky
          ? 'shadow-lg bg-white dark:shadow-dark-md dark:bg-darklight'
          : 'shadow-none bg-transparent'
      }`}
    >
      <div className="container mx-auto max-w-6xl flex items-center justify-between p-6">
        <a href="#home">
          <Logo />
        </a>
        
        <nav className="hidden lg:flex grow items-center justify-center gap-6">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`font-semibold text-base transition-colors hover:text-primary ${
                !sticky ? 'text-midnight_text dark:text-white' : 'text-midnight_text dark:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center duration-300 dark:text-white"
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 16 16" className="h-6 w-6 text-white" fill="currentColor">
                <path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 23 23" className="h-8 w-8 text-midnight_text" fill="currentColor">
                <path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z" />
              </svg>
            )}
          </button>
          

          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="block lg:hidden p-2 rounded-lg"
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 bg-midnight_text dark:bg-white transition-all ${navbarOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-midnight_text dark:bg-white mt-1.5 transition-all ${navbarOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-midnight_text dark:bg-white mt-1.5 transition-all ${navbarOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Backdrop */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${navbarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setNavbarOpen(false)}
      ></div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-darkmode shadow-2xl z-50 transition-transform duration-300 transform ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6 pb-2">
          <button onClick={() => setNavbarOpen(false)} className="text-midnight_text dark:text-white p-2 hover:text-primary transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <nav className="flex flex-col p-6 space-y-6">
          {navLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="font-bold text-lg text-midnight_text dark:text-white hover:text-primary transition-colors border-b border-gray-100 dark:border-gray-800 pb-2"
              onClick={() => setNavbarOpen(false)}
            >
              {item.name}
            </a>
          ))}

        </nav>
      </div>
    </header>
  );
};

export default Header;
