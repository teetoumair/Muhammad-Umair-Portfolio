const testimonials = [
  {
    quote:
      '"An exceptional technical lead who understands the \'why\' as much as the \'how\'. The results exceeded our expectations."',
    name: 'Sarah Chen',
    role: 'CTO, Veridyn Systems',
    mdMt: false,
  },
  {
    quote:
      '"Transformative approach to mobile UX. Our engagement metrics doubled within three months of the redesign."',
    name: 'Marcus Thorne',
    role: 'Product Director, Aris',
    mdMt: true,
  },
  {
    quote:
      '"Navigated our complex legacy migration with surgical precision. A masterclass in technical strategy."',
    name: 'Elena Rodriguez',
    role: 'VP Engineering, Omni',
    mdMt: false,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-section-gap overflow-hidden">
      <div className="max-w-container-max mx-auto px-4 sm:px-margin-mobile md:px-gutter">
        <h2 className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em] mb-8 sm:mb-stack-lg text-center">
          Collaborator Voices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-gutter">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className={`bg-surface-container-lowest p-6 sm:p-stack-lg rounded-xl shadow-sm border border-outline-variant/10 relative ${
                testimonial.mdMt ? 'md:mt-stack-md' : ''
              }`}
            >
              <span className="material-symbols-outlined text-surface-variant absolute top-2 sm:top-stack-md right-2 sm:right-stack-md text-4xl sm:text-5xl opacity-50">
                format_quote
              </span>
              <p className="font-body-md text-[15px] sm:text-body-md text-on-surface mb-5 sm:mb-stack-md relative z-10 italic">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-2 sm:gap-base">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-container"></div>
                <div>
                  <h5 className="font-headline-sm text-[13px] sm:text-sm text-primary">
                    {testimonial.name}
                  </h5>
                  <p className="font-mono-label text-[10px] sm:text-[11px] text-secondary uppercase">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
