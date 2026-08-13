import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingShare from './components/FloatingShare'

function App() {
  return (
    <div className="bg-white dark:bg-darkmode text-midnight_text dark:text-white transition-colors duration-300 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingShare />
    </div>
  )
}

export default App
