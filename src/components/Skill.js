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
  padding: 0.4rem;
  border: 1px solid #b9b9b9;
  border-radius: 0.5rem;
  width: 14rem;
  height: 5rem;
  transform: none;
  transition: all 0.2s ease-out;
  &:hover {
    transform: translateX(0) translateY(0) translateZ(0) scale(1.05);
  }
  .skill__img {
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    object-fit: fill;
  }
  .skill__name {
    font-weight: 600;
  }

  /* MEDIA QUERIES (phones) */
  @media screen and (max-width: 600px) {
    width: 10rem;
  }
  .skill__name {
    font-weight: bold;
  }
`;
