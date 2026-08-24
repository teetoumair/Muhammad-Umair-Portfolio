export default function AiFooter() {
  return (
    <footer className="w-full py-stack-lg px-4 sm:px-margin-mobile md:px-gutter max-w-container-max mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-headline-sm text-headline-sm font-bold text-white">EL</div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a className="font-body-md text-body-md text-white/50 hover:text-white transition-colors duration-200" href="#">Privacy Policy</a>
          <a className="font-body-md text-body-md text-white/50 hover:text-white transition-colors duration-200" href="#">Terms of Service</a>
          <a className="font-body-md text-body-md text-white/50 hover:text-white transition-colors duration-200" href="#">LinkedIn</a>
          <a className="font-body-md text-body-md text-white/50 hover:text-white transition-colors duration-200" href="#">GitHub</a>
        </div>
        <p className="font-body-md text-body-md text-white/40">© 2024 Ethereal Logic. All rights reserved.</p>
      </div>
    </footer>
  )
}
