import styled from "styled-components";

const Wrapper = styled.section`
  .skills__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
  .skills__cards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

export default Wrapper;
