import React from 'react';
import { imagesArr } from '../data.js'

export const Controll = ({currentKep}) => {
  console.log(currentKep)
  console.log(imagesArr[currentKep]);
  
  return (
    <div>
          <img src={imagesArr[currentKep]} alt="" />
    </div>
  )
}
