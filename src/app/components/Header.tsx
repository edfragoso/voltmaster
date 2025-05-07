"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  HeaderWrapper,
  HeaderContainer,
  Logo,
  MenuToggle,
  Nav,
  Tagline,
  Slogan,
  StyledLink,
} from "./Header.style";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // ... (outros useEffect permanecem iguais)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo>
          <StyledLink href="/" onClick={closeMenu}>
            VoltMaster
          </StyledLink>
        </Logo>
        <MenuToggle
          ref={toggleRef}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </MenuToggle>

        <Nav $isOpen={isMenuOpen} ref={navRef}>
          <ul>
            <li>
              <StyledLink href="/" onClick={closeMenu}>
                Principal
              </StyledLink>
            </li>
            <li>
              <StyledLink href="/assignments" onClick={closeMenu}>
                Serviços
              </StyledLink>
            </li>
            <li>
              <StyledLink href="#about" onClick={closeMenu}>
                Sobre
              </StyledLink>
            </li>
            <li>
              <StyledLink href="/contact" onClick={closeMenu}>
                Contato
              </StyledLink>
            </li>
          </ul>
        </Nav>
      </HeaderContainer>
      <Tagline>Eletricista que não leva choque na carreira!</Tagline>
      <Slogan>
        "20 anos de mercado não mentem: quem sabe faz na hora, sem desculpas."
      </Slogan>
    </HeaderWrapper>
  );
}