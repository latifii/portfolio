import React, { useState } from 'react'
import Card from './Card'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Faq = ({ faq }) => {
  const { question, answer } = faq
  const [toggle, setToggle] = useState(false)
  return (
    <Card className='faq'>
      <div onClick={() => setToggle(!toggle)}>
        <h5 className='faq__question'>{question}</h5>
        <button className='faq__icon' type='button'>
          {toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {toggle && <div className='faq__answer'>{answer}</div>}
    </Card>
  )
}

export default Faq
