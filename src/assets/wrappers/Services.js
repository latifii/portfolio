import styled from 'styled-components'

const Wrapper = styled.section`
  text-align: center;

  .services__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem 4rem;
  }

  .card.service {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .service__icon {
    background: var(--color-primary);
    padding: 0.6rem;
    border-radius: var(--border-radius-3);
    font-size: 1.5rem;
    color: var(--color-white);
    transition: var(--transition);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .service:hover .service__icon {
    background: var(--color-light);
    color: var(--color-primary);
  }

  .service h4 {
    margin-bottom: 0.7rem;
  }

  /* MEDIA QUERIES (tablets) */
  @media screen and (max-width: 1024px) {
    .services__container {
      gap: 1.5rem;
    }
  }

  /* MEDIA QUERIES (phones) */
  @media screen and (max-width: 600px) {
    .services__container {
      grid-template-columns: 1fr;
      gap: 1.2rem;
    }

    .card.service {
      gap: 1.2rem;
    }
  }
`

export default Wrapper
