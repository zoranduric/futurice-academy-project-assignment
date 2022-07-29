import styled from 'styled-components';

// const background = '#34495e';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0.3rem;
  }
`;
