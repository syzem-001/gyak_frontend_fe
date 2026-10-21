import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { ButtonGroup, IconChevronLeft, IconChevronRight } from '@heroui/react'
import { Button } from '@heroui/react'
import { Controll } from './component/Controll'
import { Header } from './component/Header'

function App() {
  const [currentKep, setcurrentKep] = useState(0)



  return (
    <>
      <div className='main'>
        <h1 className='size 3xl'>
            Galéria
        </h1>    
            <Header currentKep = {currentKep}/>
            <div className='tarolo'>
              <Controll currentKep = {currentKep}/>
            </div>
              <div className="flex flex-col gap-2">
                <ButtonGroup variant="tertiary">
                  <Button onClick={() => currentKep != 0 ? setcurrentKep(currentKep - 1) : setcurrentKep(3)}>
                    <IconChevronLeft />
                    
                  </Button>
                  <Button onClick={() => currentKep != 3 ? setcurrentKep(currentKep + 1) : setcurrentKep(0)}>
                    <ButtonGroup.Separator />
                    <IconChevronRight />
                  </Button>
                </ButtonGroup>
              </div>
      </div>  
    </>
  )
}

export default App
