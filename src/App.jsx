import { useState, useEffect } from "react";
import avatarImg from "./assets/Gambar.jpeg";

function TypingText({ words }) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.slice(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentWord.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <span className="text-accent">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function App() {
  const projects = [
    {
      title: "Fade Barbershop",
      description: "Landing page barbershop dengan sistem booking sederhana. Fokus pada desain modern dan pengalaman pengguna yang smooth.",
      tech: ["React", "Tailwind CSS"],
      demo: "https://fade-barbershop.vercel.app",
      github: "https://github.com/Rohman82/fade-barbershop",
    },
    {
      title: "Movie Search",
      description: "Aplikasi pencarian film menggunakan TMDB API. Ada fitur trending, search, dan detail modal lengkap dengan genre & sinopsis.",
      tech: ["React", "Tailwind CSS", "REST API"],
      demo: "https://movie-search-k3vif3duk-rohman.vercel.app",
      github: "https://github.com/Rohman82/movie-search",
    },
    {
      title: "To-Do List App",
      description: "Task manager dengan fitur tambah, edit, hapus, filter status, dan penyimpanan otomatis ke localStorage.",
      tech: ["React", "Tailwind CSS", "localStorage"],
      demo: "https://todo-app-five-omega-11.vercel.app",
      github: "https://github.com/Rohman82/todo-app",
    },
  ];

  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Git & GitHub", "REST API", "Responsive Design", "Vite"];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-accent tracking-wide">ROHMAN</span>
          <div className="flex gap-6 text-sm">
            <a href="#home" className="hover:text-accent transition">
              Home
            </a>
            <a href="#projects" className="hover:text-accent transition">
              Projects
            </a>
            <a href="#about" className="hover:text-accent transition">
              About
            </a>
            <a href="#contact" className="hover:text-accent transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-6 pt-32 pb-20 flex flex-col md:flex-row items-center gap-16">
        <div className="flex flex-col items-center">
          <h3 className="text-accent font-semibold tracking-[3px] mb-6 uppercase">Rohman</h3>
          <div className="relative w-64 h-80 md:w-80 md:h-[26rem] rounded-[80%] overflow-hidden border-[3.5px] border-accent flex items-center justify-center bg-gray-900" style={{ boxShadow: "0 0 50px rgba(224, 90, 71, 0.55)" }}>
            <img src={avatarImg} className="w-full h-full object-cover" alt="Rohman" />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-medium mb-1">
            Hey I'm <span className="text-accent">Rohman</span>
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-wide">
            I'm a <TypingText words={["FRONTEND DEVELOPER", "REACT DEVELOPER"]} />
          </h1>
          <p className="text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0 mb-8">
            Saya membangun antarmuka web yang bersih, responsif, dan fungsional menggunakan React dan Tailwind CSS. Fokus pada detail dan pengalaman pengguna yang nyaman digunakan.
          </p>

          <div className="flex gap-5 justify-center md:justify-start mb-8">
            <a
              href="https://github.com/Rohman82"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-black transition hover:-translate-y-1"
            >
              <i className="fab fa-github text-lg"></i>
            </a>
            <a href="mailto:sofairohman27@gmail.com" aria-label="Email" className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-black transition hover:-translate-y-1">
              <i className="fas fa-envelope text-lg"></i>
            </a>
            <a
              href="https://wa.me/6281225779801"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-black transition hover:-translate-y-1"
            >
              <i className="fab fa-whatsapp text-lg"></i>
            </a>
          </div>

          <a href="#contact" className="inline-block px-10 py-3.5 bg-accent hover:bg-accent-dark rounded-lg font-semibold transition hover:scale-[1.02]">
            Hire me
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-2">
          <span className="text-accent">/</span> Project
        </h2>
        <p className="text-gray-400 mb-10">Beberapa project yang sudah saya kerjakan dan deploy.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-gray-900 rounded-xl p-6 border border-white/10 hover:border-accent/50 transition flex flex-col">
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs bg-black border border-white/10 px-2 py-1 rounded-full text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 text-sm">
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">
                  Live Demo
                </a>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:underline">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-2">
          <span className="text-accent">/</span> Tentang Saya
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl leading-relaxed">
          Saya sedang membangun karier sebagai Frontend Developer dengan fokus pada React dan pengembangan antarmuka yang responsif. Saya suka menerjemahkan ide menjadi tampilan web yang rapi dan mudah digunakan, dan terus belajar praktik
          terbaik dalam pengembangan web modern.
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="text-sm bg-gray-900 border border-accent/40 px-3 py-1.5 rounded-full text-gray-200">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold mb-2">
          <span className="text-accent">/</span> Mari Terhubung
        </h2>
        <p className="text-gray-400 mb-8">Terbuka untuk peluang kerja, kolaborasi, atau sekadar diskusi.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:sofairohman27@gmail.com" className="px-6 py-3 bg-accent hover:bg-accent-dark rounded-lg font-semibold transition">
            Email: sofairohman27@gmail.com
          </a>
          <a href="https://wa.me/6281225779801" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-black rounded-lg font-semibold transition">
            WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">© {new Date().getFullYear()} Rohman. Built with React & Tailwind CSS.</footer>
    </div>
  );
}

export default App;
