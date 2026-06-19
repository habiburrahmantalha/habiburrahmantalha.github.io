import "./Navbar.css";

const navItems = [
  { key: "about", label: "About", href: "#aboutme" },
  { key: "tech", label: "Skills", href: "#techiknow" },
  { key: "experience", label: "Experience", href: "#experience" },
  { key: "projects", label: "Projects", href: "#projects" },
  { key: "education", label: "Education", href: "#education" },
  { key: "contact", label: "Contact", href: "#contact" },
  {
    key: "resume",
    label: "Resume",
    href: "https://drive.google.com/file/d/1RmfdQzGNen4ENbWwuw5slBDWuGGmfiM_/view?usp=sharing",
    external: true,
    cta: true,
  },
];

export const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#landing" className="navbar-brand">
        HR
      </a>
      <nav className="navbar-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.key}
            className={`nav-item${item.cta ? " nav-item-cta" : ""}`}
            href={item.href}
            {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};
