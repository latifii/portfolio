import React from 'react'
import Wrapper from '../assets/wrappers/Faqs'
import { Faq } from '../components'
import { faqsData } from '../data/data'
const Faqs = () => {
  return (
    <Wrapper id='faqs'>
      <h2>Frequently Asked Questions</h2>
      {/* Paragraf tt  */}
      <p>
        Here are some questions I usually get. Click to toggle the answer, and
        if you still have some more questions, shoot me a message from the
        contact section!
      </p>
      <div className='container faqs__container'>
        {faqsData.map((item) => {
          return <Faq key={item.id} faq={item} />
        })}
      </div>
    </Wrapper>
  )
}

export default Faqs
