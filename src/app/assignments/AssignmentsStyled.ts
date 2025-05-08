// assignments/AssignmentsStyled.ts
"use client";
import styled from "styled-components";

export const ServicesSection = styled.section`
  padding: 2rem;
  background-color: var(--background);
  color: var(--foreground);
 
  &.with-margin {
    margin-bottom: 3rem;
  }
`;

export const ElectricalServices = styled.div`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const Title = styled.h1`
  color: var(--primary);
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const ServiceBlock = styled.div`
  background-color: var(--light);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid var(--accent);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

`;

export const ServiceTitle = styled.h2`
  color: var(--primary);
  margin-bottom: 1rem;
`;

export const ServiceList = styled.ul`
  padding-left: 1.5rem;
`;

export const ServiceItem = styled.li`
  list-style-type: none;
  margin-bottom: 0.5rem;

  span {
    vertical-align: middle;
  }
`;

export const ConclusionBlock = styled.div`
  background-color: var(--dark);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
`;

export const ConclusionTitle = styled.h2`
  color: var(--secondary);
`;

export const Cta = styled.p`
  font-weight: bold;
  color: var(--secondary);
  margin: 1.5rem 0;
`;

export const Tagline = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: var(--secondary);
`;

export const ContactBlock = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  background-color: var(--primary);
  color: white;
  border-radius: 8px;
`;

export const ContactTitle = styled.h3`
  color: var(--secondary);
`;
