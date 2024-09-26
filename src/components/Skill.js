import styled from "styled-components";

export default function Skill({ name, logo }) {
  return (
    <Wrapper>
      <img className="skill__img" src={logo} alt={name} />
      <p className="skill__name">{name}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.4rem;
  border: 1px solid #000;
  border-radius: 0.5rem;
  width: 10rem;
  height: 5rem;
  .skill__img {
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
  }
  .skill__name {
    font-weight: 500;
  }
`;
