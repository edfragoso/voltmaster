'use client';
import styled from 'styled-components';

export const ContactContainer = styled.div`
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 2rem;
`;

export const ContactTitle = styled.h1`
  color: var(--primary);
  margin-bottom: 1rem;
`;

export const ContactIntro = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #555;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin: 3rem 0;
`;

export const ContactInfoCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-top: 3px solid var(--secondary);
  
  h2 {
    color: var(--primary);
    margin-top: 0;
    margin-bottom: 2rem;
  }
`;

export const ContactMethod = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  h3 {
    margin: 0 0 0.3rem 0;
    font-size: 1.1rem;
  }
  
  p {
    margin: 0;
    font-size: 1rem;
  }
  
  small {
    color: #666;
    font-size: 0.9rem;
  }
  
  a {
    color: var(--primary);
    text-decoration: none;
    transition: color 0.3s;
    
    &:hover {
      color: var(--accent);
    }
  }
`;

export const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: var(--accent);
  margin-right: 1rem;
  width: 40px;
  text-align: center;
`;

export const ContactFormCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-top: 3px solid var(--secondary);
  
  h2 {
    color: var(--primary);
    margin-top: 0;
    margin-bottom: 2rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--primary);
  }
`;

export const FormControl = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
  
  &[as="textarea"] {
    min-height: 150px;
    resize: vertical;
  }
  
  &[as="select"] {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 1em;
  }
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  background-color: var(--accent);
  color: white;
  padding: 1rem;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: background-color 0.3s;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: #e03c00;
  }
`;

export const MapContainer = styled.div`
  margin: 3rem 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  
  iframe {
    width: 100%;
    height: 400px;
    border: none;
  }
`;

export const HighlightSection = styled.div`
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

export const LoadingSpinner = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 2px solid white;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
  display: inline-block;
  margin-right: 8px;
  vertical-align: middle;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const AlertMessage = styled.div<{ type: "success" | "error" }>`
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
  color: white;
  background-color: ${({ type }) => (type === "success" ? "#4CAF50" : "#F44336")};
  text-align: center;
`;