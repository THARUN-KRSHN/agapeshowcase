"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = ["hero", "posters", "ui", "quiz", "about", "contact"];

function NavDots({ active }: { active: string }) {
  return (
    <div className="nav-dots">
      {sections.map((s) => (
        <a key={s} href={`#${s}`} className={`nav-dot ${active === s ? "active" : ""}`} aria-label={`Go to ${s}`} />
      ))}
    </div>
  );
}

// allow passing className on motion elements without strict TS types in this template
const MDiv: any = motion.div;

export default function Home() {
  const [active, setActive] = useState("hero");

  const posters = [
    {
      src: '/posters/Agape2.png',
      title: 'Agape Poster — Growth',
      desc: 'A retro-inspired poster promoting Agape’s personality workshops. Bold colors and type convey energy and optimism.'
    },
    {
      src: '/posters/CONFIDENCE.png',
      title: 'Confidence Poster',
      desc: 'Poster focused on confidence-building sessions — clean layout and typographic emphasis.'
    }
  ];

  const uiItems = [
    { src: '/ui/Screenshot 2025-08-16 175800.png', title: 'Dashboard', desc: 'Main dashboard - overview of progress and quick actions.' },
    { src: '/ui/Screenshot 2025-08-16 175837.png', title: 'Profile', desc: 'Learner profile with achievements and badges.' },
    { src: '/ui/Screenshot 2025-08-16 175915.png', title: 'Lesson Player', desc: 'Interactive lesson player with progress tracking.' },
    { src: '/ui/Screenshot 2025-08-16 175937.png', title: 'Quiz Flow', desc: 'Quiz UI showcasing question cards and immediate feedback.' },
    { src: '/ui/Screenshot 2025-08-16 175948.png', title: 'Resources', desc: 'Resource library with curated materials.' },
    { src: '/ui/Screenshot 2025-08-16 180007.png', title: 'Settings', desc: 'Settings and preferences screen.' }
  ];
  const quizItems = [
    { src: '/quiz/Screenshot 2025-08-16 180943.png', title: 'Quiz — Home', desc: 'Landing and start flow for the quiz app.' },
    { src: '/quiz/Screenshot 2025-08-16 181010.png', title: 'Quiz — Question', desc: 'Question card UI with options and progress bar.' },
    { src: '/quiz/Screenshot 2025-08-16 181049.png', title: 'Quiz — Results', desc: 'Results summary with feedback and next steps.' }
  ];

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div>
      <NavDots active={active} />

      <header className="fixed left-0 right-0 top-0 z-50 bg-transparent backdrop-blur-sm px-6 py-4">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-xl font-bold retro-title">Agape</div>
          <div className="hidden md:flex gap-4 items-center">
            {sections.map((s) => (
              <a key={s} href={`#${s}`} className="text-sm opacity-80 hover:opacity-100">
                {s}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="mt-20">
        <section id="hero" className="section bg-[var(--agape-yellow)] text-center">
          <MDiv initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl sm:text-6xl retro-title">Agape – Personality Development School</h1>
            <p className="mt-4 text-lg sm:text-2xl">Showcasing our creative works and digital innovations</p>
          </MDiv>
        </section>

        <section id="posters" className="section bg-[var(--agape-cream)]">
          <MDiv className="max-w-6xl w-full mx-auto space-y-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold retro-title mb-6">Posters Showcase</h2>
            <div className="insta-grid">
              {posters.map((p) => (
                <div key={p.src} className="insta-card">
                  <div className="insta-media relative">
                    <Image src={encodeURI(p.src)} alt={p.title} fill style={{ objectFit: 'contain' }} />
                  </div>
                  <div className="insta-caption">
                    <strong>{p.title}</strong>
                    <div className="text-sm mt-1">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </MDiv>
        </section>

        <section id="ui" className="section bg-[var(--agape-pink)] text-white">
          <MDiv initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="max-w-6xl mx-auto w-full">
            <h2 className="text-2xl font-bold retro-title mb-6">UI Design Showcase</h2>
            <div className="insta-grid">
              {uiItems.map((u) => (
                <div key={u.src} className="insta-card">
                  <div className="insta-media relative">
                    <Image src={encodeURI(u.src)} alt={u.title} fill style={{ objectFit: 'contain' }} />
                  </div>
                  <div className="insta-caption">
                    <strong>{u.title}</strong>
                    <div className="text-sm mt-1">{u.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </MDiv>
        </section>

        <section id="quiz" className="section bg-[var(--agape-teal)]">
          <MDiv initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold retro-title mb-4">Quiz App</h2>
            <p className="mb-6">A lightweight quiz app built to help students practice personality and soft-skill questions.</p>
            <div className="rounded-lg overflow-hidden shadow-md w-full max-w-xl mx-auto mb-4">
              <Image src={encodeURI('/quiz/Screenshot 2025-08-16 180943.png')} alt="Quiz screenshot" width={1200} height={700} className="w-full h-auto object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-3 max-w-xl mx-auto mt-4">
              <div className="rounded overflow-hidden">
                <Image src={encodeURI('/quiz/Screenshot 2025-08-16 180943.png')} alt="Quiz 1" width={400} height={250} className="w-full h-auto object-cover" />
              </div>
              <div className="rounded overflow-hidden">
                <Image src={encodeURI('/quiz/Screenshot 2025-08-16 181010.png')} alt="Quiz 2" width={400} height={250} className="w-full h-auto object-cover" />
              </div>
              <div className="rounded overflow-hidden">
                <Image src={encodeURI('/quiz/Screenshot 2025-08-16 181049.png')} alt="Quiz 3" width={400} height={250} className="w-full h-auto object-cover" />
              </div>
            </div>
          </MDiv>
        </section>

        <section id="about" className="section bg-[var(--agape-cream)]">
          <MDiv initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold retro-title mb-4">About Agape</h2>
            <p>Agape is a personality development school dedicated to helping learners grow in confidence, communication, and leadership through creative projects and digital learning tools.</p>
          </MDiv>
        </section>
        <footer className="py-8 text-center bg-[var(--agape-ink)] text-white">
          <div className="max-w-6xl mx-auto">© {new Date().getFullYear()} Agape — Personality Development School</div>
        </footer>
      </main>
    </div>
  );
}
