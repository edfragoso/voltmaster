"use client"
import styled from 'styled-components';

export const CTAContainer = styled.div`
  text-align: center;
  margin: 3rem 0;
`;

export const Button = styled.div`
  display: inline-block;
  background-color: var(--accent);
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e03c00;
  }
`;