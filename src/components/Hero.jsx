import { ChevronDown } from 'lucide-react';

const hero = '/images/hero.avif';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src={hero}
        alt="The Total Workout studio community"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-slate/70 via-brand-slate/50 to-brand-slate/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
          Montclair's Community Studio Since 1983.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-blue-100 font-medium tracking-wide">
          In-Studio&ensp;|&ensp;Zoom&ensp;|&ensp;Hybrid&ensp;|&ensp;Outdoors
        </p>
        <a
          href="#schedule"
          className="mt-8 inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-lg"
        >
          View Schedule
        </a>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
