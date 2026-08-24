import { Link } from 'react-router-dom'
import Starfield from '../ui/Starfield'

export default function HeroSection() {
  return (
    <header
      className="relative w-full min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20 pb-12 sm:pb-0"
      style={{ backgroundColor: 'rgb(0, 0, 0)' }}
    >
      <Starfield
        canvasId="interactive-starfield"
        options={{ count: 180, baseSpeed: 0.15, reactiveRadius: 200 }}
      />
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-mobile md:px-gutter grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-gutter items-center z-10 w-full relative">
        <div className="max-w-4xl space-y-4 sm:space-y-stack-md text-center md:text-left">
          <div className="inline-flex items-center gap-2 sm:gap-base px-3 sm:px-stack-sm py-1 bg-white/10 backdrop-blur-md rounded-full mb-2 sm:mb-stack-sm">
            <span className="w-2 h-2 rounded-full bg-white live-badge-pulse shadow-[0_0_8px_rgba(255,255,255,0.5)]"></span>
            <span className="font-mono-label text-[11px] sm:text-mono-label text-on-primary uppercase tracking-widest">
              Currently innovating in AI
            </span>
          </div>
          <h1 className="font-display-lg text-[32px] leading-[38px] sm:text-display-lg-mobile md:text-display-lg text-on-primary md:leading-tight tracking-tight">
            Architecting the future of{' '}
            <br className="hidden sm:block" />
            <span className="text-on-primary-container italic font-normal">
              digital ecosystems.
            </span>
          </h1>
          <p className="font-body-lg text-[15px] sm:text-[16px] md:text-body-lg text-on-primary-container max-w-2xl opacity-90 leading-relaxed">
            Executive level full-stack engineer and product strategist
            specializing in high-performance iOS applications and AI-driven
            transformation.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-stack-md pt-2 sm:pt-stack-md justify-center md:justify-start">
            <button className="bg-surface text-primary px-5 sm:px-stack-lg py-3.5 sm:py-stack-md rounded-xl font-label-caps text-label-caps uppercase tracking-widest hover-lift shadow-2xl font-bold">
              View Portfolio
            </button>
            <button className="border border-white/30 text-on-primary px-5 sm:px-stack-lg py-3.5 sm:py-stack-md rounded-xl font-label-caps text-label-caps uppercase tracking-widest hover:bg-white/10 transition-colors hover-lift backdrop-blur-sm">
              Our Mission
            </button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="p-stack-lg rounded-xl shadow-2xl max-w-[280px] transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl bg-white/10 border border-white/20">
            <div className="flex flex-col items-center text-center gap-stack-sm">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-base">
                <span className="material-symbols-outlined text-4xl text-white">
                  auto_awesome
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-white">
                Talk to my AI
              </h4>
              <p className="font-body-md text-sm text-white/70 mb-stack-sm">
                Explore my technical expertise and project history through an
                interactive AI representative.
              </p>
              <Link
                className="w-full bg-white text-black py-stack-sm rounded-full font-label-caps text-label-caps uppercase tracking-widest font-bold hover:opacity-90 transition-all text-center inline-block"
                to="/ai-assistant"
              >
                Start Chat
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-stack-lg left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 sm:gap-base">
        <span className="font-label-caps text-[9px] sm:text-[10px] uppercase tracking-widest text-white/50">
          Scroll to Explore
        </span>
        <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </header>
  )
}
