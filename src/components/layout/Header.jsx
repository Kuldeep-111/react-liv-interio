import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Container from "../utilities/Container";
import NavLink from "../utilities/NavLink";
import Partition from "../utilities/Partition";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact-us", label: "Contact Us" },
];

const Header = ({ onOpen }) => {
  const [showHeader, setShowHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 400) {
        if (currentScrollY < lastScrollY) {
          setShowHeader(true); // Scrolling up
        } else {
          setShowHeader(false); // Scrolling down
        }
      } else {
        setShowHeader(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="overflow-hidden z-50 py-[10px] lg:py-[20px] 2xl:py-[30px] absolute top-0 left-0 w-full">
      <Container>
        <div className="flex items-center justify-between p-[10px] md:p-0">
          <a
            href="tel:+919071000645"
            className="border md:flex hidden text-white hover:text-black hover:bg-white text-[12px] tracking-[1px] uppercase border-white px-[10px] py-[7px] rounded-full  flex items-center gap-2"
          >
            <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[rgba(210,210,210,0.6)]">
              <img
                src="/assets/icons/call.webp"
                alt="phone icon"
                className="w-[12px] h-[12px] object-contain"
              />
            </div>
            +91-9071000645
          </a>

          <Link to="/">
            <img
              src="/assets/images/logo.webp"
              alt="Liv Interio Logo"
              className="h-auto object-contain w-[160px] 2xl:w-[200px]"
            />
          </Link>

          <button
            onClick={onOpen}
            className="hidden md:inline-block border hover:text-black hover:bg-white text-[12px] tracking-[1px] uppercase border-white px-[30px] py-[12px] text-white rounded-full"
          >
            Enquire now
          </button>

          <button
            className="block md:hidden"
            onClick={() => setIsMenuOpen(prev => !prev)}
          >
            <img
              src={isMenuOpen ? "/assets/icons/close.webp" : "/assets/icons/menu.webp"}
              alt="Menu Icon"
              className={`w-[25px] xl:w-[35px] h-auto object-contain ${showHeader ? "invert" : ""}`}
            />
          </button>
        </div>

        <Partition className="my-[10px] 2xl:my-[20px]" />

        <nav
          className={`
            fixed top-[90px] md:top-auto w-full max-w-[500px] md:mx-auto h-[calc(100vh-90px)] md:relative md:w-fit md:max-w-fit md:h-auto md:p-0 md:bg-transparent p-[40px] bg-[var(--background-primary)] transition-all duration-400 ease-in-out 
            ${isMenuOpen ? "right-0 z-50" : "right-[-550px] md:right-auto"}
            ${showHeader ? "navShadow md:flex md:justify-between !bg-[var(--background-primary)] md:!fixed md:!top-0 md:!left-0 md:!z-50 md:!w-full md:!max-w-full md:!px-[5%] md:!py-[10px] 2xl:!py-[20px] md:shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]" : ''}
          `}
        >
          {showHeader && (
            <Link to="/">
              <img
                src="/assets/images/logo-black.webp"
                alt="Liv Interio Logo"
                className="h-auto object-contain w-[160px] 2xl:w-[200px]"
              />
            </Link>
          )}

          <ul
            className={`flex items-center justify-center space-x-6 ${
              isMenuOpen ? "flex-col gap-[25px] mt-[35px] md:mt-0 md:flex-row md:gap-0" : ""
            }`}
          >
            {navLinks.map(({ href, label }) => (
              <li
                onClick={() => setIsMenuOpen(false)}
                key={href}
                className="mr-0 md:mr-[30px] ml:mr-[40px]"
              >
                <NavLink
                  href={href}
                  showHeader={showHeader}
                  className={isMenuOpen ? "text-[var(--text-primary)] text-nowrap" : ""}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
