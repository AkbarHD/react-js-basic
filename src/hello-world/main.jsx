import { createRoot } from 'react-dom/client'
import HelloWorld from './HelloWorld'
import { StrictMode } from 'react'
import Container from './Container'
import Todolist from '../todolist/Todolist.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <Todolist />
    </Container>
  </StrictMode>,
)
