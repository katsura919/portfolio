"use client";

import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    // If it's the home link, scroll to top
    if (sectionId === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // For other sections, scroll to the element
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    
    // Close mobile menu if open
    setIsOpen(false);
  };

  const navItems = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <Navbar>
        <NavBody>
          {/* Logo/Name */}
          <a
            href="#"
            onClick={(e) => handleScrollToSection(e, "#")}
            className="relative z-20 flex items-center text-lg font-medium text-white"
          >
            Katsura
          </a>

          {/* Navigation Items */}
          <NavItems 
            items={navItems.map(item => ({
              ...item,
              onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleScrollToSection(e, item.link)
            }))}
          />

          {/* CTA Button */}
          <div className="relative z-20">
            <Button asChild>
              <a 
                href="#contact"
                onClick={(e) => handleScrollToSection(e, "#contact")}
              >
                Get in Touch
              </a>
            </Button>
          </div>
        </NavBody>
      </Navbar>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <MobileNav>
          <MobileNavHeader>
            <a 
              href="#" 
              onClick={(e) => handleScrollToSection(e, "#")}
              className="text-lg font-medium text-white"
            >
              John Doe
            </a>
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                onClick={(e) => handleScrollToSection(e, item.link)}
                className="w-full text-white hover:text-neutral-200 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button asChild className="w-full mt-4">
              <a 
                href="#contact"
                onClick={(e) => handleScrollToSection(e, "#contact")}
              >
                Get in Touch
              </a>
            </Button>
          </MobileNavMenu>
        </MobileNav>
      </div>
    </>
  );
};

export default Navigation; 