'use client';
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  position: relative;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  border-top: 5px solid var(--accent);

  h2 {
    color: var(--primary);
    margin-top: 0;
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`;

export const CloseModal = styled.button`
  background-color: var(--accent);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e03c00;
  }
`;