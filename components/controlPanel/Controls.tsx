import React from 'react'
import { Card } from '../ui/card'
import Themes from './Themes'
import Background from './Background'
import DarkMode from './DarkMode'
import Padding from './Padding'
import Languages from './Languages'
import FontFamily from './FontFamily'

const Controls = () => {
  return (
    <Card className='p-5 fixed bottom-10 flex items-start flex-wrap gap-5'>
        <Themes />
        <Background />
        <DarkMode />
        <Padding />
        <Languages />
        <FontFamily />
    </Card>
  )
}

export default Controls