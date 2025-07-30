import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-400">© {new Date().getFullYear()} • Built by Thejaswi S • </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
