import React from 'react'

import BackgroundColor from '../components/BackgroundColor'
import Modal from '../components/Modal'
import PrimaryColor from '../components/PrimaryColor'
import { primaryColors } from '../data/data'
import { backgroundColors } from '../data/data'
const Theme = () => {
  return (
    <Modal className='theme__modal'>
      <h3>Customize Your Theme</h3>
      <small>Change the primary and background color to your preference.</small>
      <div className='theme__primary-wrapper'>
        <h5>Primary Color</h5>
        <div className='theme__primary-colors'>
          {primaryColors.map((color, index) => {
            return <PrimaryColor key={index} {...color} />
          })}
        </div>
      </div>
      <div className='theme__background-wrapper'>
        <h5>Background Color</h5>
        <div className='theme__background-colors'>
          {backgroundColors.map((bcg, index) => {
            return <BackgroundColor key={index} {...bcg} />
          })}
        </div>
      </div>
    </Modal>
  )
}

export default Theme
