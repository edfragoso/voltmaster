'use client';
'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: linear-gradient(135deg, var(--primary), var(--dark));
  color: white;
  padding: 1rem 0;
  border-bottom: 5px solid var(--secondary);
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const HeaderContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const MenuToggle = styled.button`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: white;
  background: none;
  border: none;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Nav = styled.nav<{ $isOpen: boolean }>`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-left: 1.5rem;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.3s;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    display: block;
  }

  a:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 82px; /* Ajuste conforme altura do header */
    left: 0;
    width: 100%;
    background: linear-gradient(135deg, var(--primary), var(--dark));
    padding: 1rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transform: ${({ $isOpen }) => $isOpen ? 'translateY(0)' : 'translateY(-150%)'};
    transition: transform 0.3s ease-in-out;
    z-index: 99;

    ul {
      flex-direction: column;
    }

    li {
      margin: 0.5rem 0;
    }
  }
`;

export const Tagline = styled.div`
  font-style: italic;
  font-size: 1.2rem;
  opacity: 0.9;
  text-align: center;
  padding: 1rem 0;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Slogan = styled.div`
  background-color: var(--accent);
  color: white;
  padding: 0.5rem;
  display: inline-block;
  margin-top: 1rem;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;