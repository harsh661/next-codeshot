import React, { MutableRefObject } from 'react'
import { Card } from '../ui/card'
import Themes from './Themes'
import Background from './Background'
import DarkMode from './DarkMode'
import Padding from './Padding'
import Languages from './Languages'
import FontFamily from './FontFamily'
import ExportButton from './ExportButton'
import Fontsize from './Fontsize'

interface ControlProps {
  bodyRef: MutableRefObject<HTMLElement | null>
}

const Controls: React.FC<ControlProps> = ({bodyRef}) => {
  return (
    <Card className='p-5 fixed bottom-10 flex items-start flex-wrap gap-5 m-5'>
        <Themes />
        <Background />
        <DarkMode />
        <Padding />
        <Languages />
        <FontFamily />
        <Fontsize />
        <ExportButton targetRef={bodyRef} />
    </Card>
  )
}

export default Controls