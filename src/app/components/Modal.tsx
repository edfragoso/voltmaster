'use client';
import { useEffect, useState } from 'react';
import { ModalOverlay, ModalContent, CloseModal } from './Modal.style';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('modal-overlay')) {
        closeModal();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <ModalOverlay className="modal-overlay">
      <ModalContent>
        <h2>Aviso Importante</h2>
        <p>Página em implementação, novidades em breve!</p>
        <CloseModal onClick={closeModal}>Entendi</CloseModal>
      </ModalContent>
    </ModalOverlay>
  );
}