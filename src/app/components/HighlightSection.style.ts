'use client';
import styled from 'styled-components';

export const HighlightContainer = styled.section`
  background-color: rgba(255, 215, 0, 0.1);
  padding: 2rem;
  border-radius: 8px;
  margin: 3rem 0;
  border-left: 5px solid var(--accent);

  h2 {
    color: var(--primary);
    margin-top: 0;
  }
`;