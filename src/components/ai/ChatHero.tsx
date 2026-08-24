import Starfield from '../ui/Starfield'

export default function ChatHero() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center min-h-[500px] md:min-h-[600px] text-center overflow-hidden bg-black"
    >
      <Starfield
        canvasId="ai-hero-starfield"
        options={{ count: 180, baseSpeed: 0.15, reactiveRadius: 200 }}
      />
      <div className="max-w-4xl z-10 px-4 sm:px-margin-mobile md:px-gutter pt-24 pb-12">
        <span className="inline-block font-mono-label text-mono-label text-white/90 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full mb-6 border border-white/20">
          Digital Concierge v2.0
        </span>
        <h1 className="font-display-lg text-[36px] leading-[42px] sm:text-display-lg-mobile md:text-display-lg text-white mb-6 md:mb-8 tracking-tighter">
          Ask My AI
        </h1>
        <p className="font-body-lg text-[16px] sm:text-body-lg text-white/70 max-w-2xl mx-auto mb-10 md:mb-12">
          Learn about projects, experience, expertise, and innovation through an intelligent conversation.
        </p>
        <div className="flex items-center justify-center gap-2 text-white/50">
          <span className="material-symbols-outlined text-[20px]">bolt</span>
          <span className="font-label-caps text-label-caps uppercase tracking-widest">Powered by Ethereal Neural Engine</span>
        </div>
      </div>
    </section>
  )
}
