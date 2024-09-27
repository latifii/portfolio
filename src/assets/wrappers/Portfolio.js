import styled from "styled-components";

const Wrapper = styled.section`
  .portfolio__categories {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  .portfolio__project {
    max-width: 100%;
    overflow: hidden;
    margin: auto;
  }

  .container {
    max-width: 100%;
    overflow: hidden;
  }
  .btn.cat__btn {
    text-transform: capitalize;
    transition: var(--transition);
  }

  .btn.cat__btn:hover {
    transform: translateY(0);
  }

  .portfolio__projects {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    align-items: start;
  }

  .card.portfolio__project {
    animation: animateProject 800ms ease-in forwards;
  }

  @keyframes animateProject {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .portfolio__project-image {
    width: 100%;
    height: fit-content;
    height: 7rem;
    /* max-height: 15rem; */
    background: var(--color-light);
    border-radius: var(--border-radius-2);
    margin-bottom: 1.5rem;
    overflow: hidden;
    border: 1px solid #e7e7e7;
  }
  .portfolio__project h4 {
    margin: 0.6rem 0;
  }
  .portfolio__project p {
    margin: 0.6rem 0;
  }

  .portfolio__project-cta {
    display: flex;
    gap: 1rem;
  }

  .portfolio__project:hover .btn.sm {
    border-color: var(--color-white);
  }

  .portfolio__project:hover .btn.sm.primary {
    background: transparent;
    color: var(--color-primary);
    border-color: var(--color-primary);
  }

  .portfolio__project-tech {
    display: flex;
    align-items: center;
    margin: 0.6rem 0;
  }

  .portfolio__project-tech img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  /* MEDIA QUERIES (tablets) */
  @media screen and (max-width: 1024px) {
    .portfolio__projects {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }

  /* MEDIA QUERIES (phones) */
  @media screen and (max-width: 600px) {
    .portfolio__categories {
      gap: 0.6rem;
    }

    .btn.cat__btn {
      padding: 0.7rem 0.8rem;
    }

    .portfolio__projects {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
`;

export default Wrapper;
