import React from 'react'
import styled from 'styled-components'

const Card = ({ children, className }) => {
  return <Wrapper className={`card ${className}`}>{children}</Wrapper>
}

const Wrapper = styled.article`
  &.card {
    background: var(--color-white);
    padding: 1.5rem;
    border: 2px solid transparent;
    border-radius: var(--border-radius-1);
    transition: var(--transition);
  }

  &.card:hover {
    background: transparent;
    border-color: var(--color-white);
    transform: translateY(-0.5rem);
  }

  &.card.light {
    background: var(--color-light);
  }

  &.card.light:hover {
    background: transparent;
    border-color: var(--color-light);
  }

  /* MEDIA QUERIES (phones) */
  @media screen and (max-width: 600px) {
    &.card {
      padding: 1.2rem;
    }
  }
`
export default Card
