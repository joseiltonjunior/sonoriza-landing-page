import { LanguageSwitcher } from '../ui/LanguageSwitcher';

type NavbarProps = {
  cta: string;
  isHidden: boolean;
};

export function Navbar({ cta, isHidden }: NavbarProps) {
  return (
    <nav className={isHidden ? 'nav-hidden' : ''}>
      <div className="nav-logo">Sonoriza</div>

      <div className="flex items-center gap-3 sm:gap-4">
        <LanguageSwitcher />
        <a href="#contato" className="nav-cta">
          {cta}
        </a>
      </div>
    </nav>
  );
}
