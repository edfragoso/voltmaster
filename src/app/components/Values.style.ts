'use client';
import styled from 'styled-components';

export const ValuesContainer = styled.section`
  background-color: rgba(0, 85, 164, 0.05);
  padding: 2rem;
  border-radius: 8px;
  margin: 3rem 0;
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const ValueItem = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
  text-align: center;

  h3 {
    color: var(--accent);
    margin-top: 0;
  }
`;