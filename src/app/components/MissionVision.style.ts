'use client';
import styled from 'styled-components';

export const MissionVisionContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-top: 3px solid var(--secondary);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
  }

  h2 {
    color: var(--primary);
    margin-top: 0;
    display: flex;
    align-items: center;

    &::before {
      content: "⚡";
      margin-right: 10px;
    }
  }
`;