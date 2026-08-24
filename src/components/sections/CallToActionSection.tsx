export default function CallToActionSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-section-gap relative" id="timeline">
      <div className="absolute inset-0 bg-primary-container -z-10"></div>
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-mobile md:px-gutter text-center py-8 sm:py-stack-lg">
        <h2 className="font-display-lg text-headline-md md:text-display-lg text-on-primary mb-5 sm:mb-stack-md">
          Let's build the future.
        </h2>
        <p className="font-body-lg text-[16px] sm:text-body-lg text-on-primary-container max-w-xl mx-auto mb-6 sm:mb-stack-lg">
          Available for high-impact technical leadership and strategic product
          advisory roles.
        </p>
        <button className="bg-surface text-primary px-6 sm:px-stack-lg py-3.5 sm:py-stack-md rounded-xl font-label-caps text-label-caps uppercase tracking-widest hover:scale-105 transition-transform active:opacity-80">
          Initiate Conversation
        </button>
      </div>
    </section>
  )
}
