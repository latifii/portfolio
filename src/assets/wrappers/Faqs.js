import styled from 'styled-components'

const Wrapper = styled.section`
  .faqs__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem 4rem;
    align-items: start;
  }

  .card.faq:hover {
    cursor: pointer;
    background: var(--color-white);
  }

  .faq > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
  }

  .faq h5 {
    line-height: 1.4;
  }

  .faq__icon {
    font-size: 1.2rem;
    color: var(--color-black);
    background: transparent;
  }

  .faq__answer {
    margin-top: 1rem;
    opacity: 0;
    animation: animateAnswer 500ms ease-in forwards;
  }

  @keyframes animateAnswer {
    to {
      opacity: 1;
    }
  }

  /* MEDIA QUERIES (tablets) */
  @media screen and (max-width: 1024px) {
    .faqs__container {
      grid-template-columns: 1fr;
    }
  }

  /* MEDIA QUERIES (phones) */
  @media screen and (max-width: 600px) {
    .faqs__container {
      gap: 1rem;
    }
  }
`

export default Wrapper
