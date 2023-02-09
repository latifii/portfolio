import styled from 'styled-components'

const Wrapper = styled.header`
  margin-top: 5rem;
  height: calc(100vh - 5rem);
  display: grid;
  place-items: center;
  background: var(--color-white);
  transition: var(--transition);

  .header__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .header__profile {
    width: 18rem;
    border-radius: 9rem 9rem 2rem 2rem;
    overflow: hidden;
    margin-bottom: 1.5rem;
  }

  .header__container p {
    width: 35rem;
    text-align: center;
    margin: 0.6rem 0 2rem;
  }

  .header__cta {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .header__socials {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .header__socials a {
    width: 1.8rem;
    aspect-ratio: 1/1;
    background: var(--color-light);
    color: var(--color-black);
    display: grid;
    place-items: center;
    border-radius: var(--border-radius-3);
  }

  .header__socials a:hover {
    background: var(--color-primary);
    color: var(--color-white);
    transform: translateX(-0.5rem);
  }

  /* MEDIA QUERIES (tablets) */
  @media screen and (max-width: 1024px) {
    header {
      margin-top: 0;
      height: 100vh;
    }
  }

  /* MEDIA QUERIES (tablets) */
  @media screen and (max-width: 600px) {
    .header__profile {
      width: 14rem;
      height: 17rem;
      max-width: 60%;
      max-height: 35vh;
    }

    .header__container p {
      width: 100%;
    }

    .header__cta {
      gap: 1rem;
    }

    .header__socials {
      display: none;
    }
  }
`

export default Wrapper
