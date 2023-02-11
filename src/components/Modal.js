import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { closeModal } from '../featuers/modalSlice'
import Card from './Card'

const Modal = ({ children, className }) => {
  const dispatch = useDispatch()

  const { isModal } = useSelector((store) => store.modal)

  const closeHandler = (e) => {
    const findClass = e.target.classList.contains('overleay')
    if (findClass) {
      return dispatch(closeModal())
    }
  }

  return (
    <>
      {isModal && (
        <Overleay onClick={closeHandler} className='overleay'>
          <Card className={className}>{children}</Card>
        </Overleay>
      )}
    </>
  )
}

export default Modal

const Overleay = styled.section`
  background: rgba(0, 0, 0, 0.3) !important;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(5px);
  z-index: 99;
  opacity: 0;
  animation: animateBackdrop 500ms ease-in forwards;

  .theme__modal {
    width: 80vw;
    background: var(--color-white);
    max-width: 400px;
    border-radius: var(--border-radius-1);
    padding: 2rem 1rem;
    text-align: center;
    margin: auto;
    background: #dedede;
    box-shadow: 0 3rem 3rem rgba(0, 0, 0, 0.2);
    animation: animateModal 500ms ease-in forwards;
  }

  .theme__modal h3,
  h5 {
    color: #111 !important;
  }
  .theme__modal:hover {
    background: #dedede;
    transform: translateY(0);
  }
  @keyframes animateBackdrop {
    to {
      opacity: 1;
    }
  }

  .card.theme__modal small {
    margin-top: 0.6rem;
    display: block;
    width: 80%;
    margin-inline: auto;
  }

  .theme__primary-wrapper {
    margin: 3rem 0;
  }

  .theme__primary-colors {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  .theme__primary-colors button {
    width: 2rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    cursor: pointer;
  }

  .theme__primary-colors .color-1 {
    background: hsl(270, 70%, 46%);
  }

  .theme__primary-colors .color-2 {
    background: hsl(110, 70%, 46%);
  }

  .theme__primary-colors .color-3 {
    background: hsl(240, 70%, 46%);
  }

  .theme__primary-colors .color-4 {
    background: hsl(325, 70%, 46%);
  }

  .theme__primary-colors .color-5 {
    background: hsl(0, 70%, 46%);
  }

  .theme__primary-colors .color-6 {
    background: hsl(52, 70%, 46%);
  }

  .theme__background-colors {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;
  }

  .theme__background-colors button {
    width: 7rem;
    height: 2.5rem;
    background: white;
    border-radius: var(--border-radius-3);
    cursor: pointer;
  }

  .theme__background-colors .bg-2 {
    background: #111;
  }

  /* MEDIA QUERIES (phones) */
  @media screen and (max-width: 600px) {
    .card.theme__modal {
      /* width: var(--container-width-md); */
      padding: 3rem 0.5rem;
    }

    .theme__primary-colors {
      gap: 0.6rem;
    }
  }
`
