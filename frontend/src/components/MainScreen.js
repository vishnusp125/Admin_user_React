import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './MainScreen.css'

function MainScreen({title, children}) {
  return (
    <div className='mainback'>
        <Container>
            <Row>

            </Row>
            <div className='page'>
                {
                    title && (
                    <>
                    <h1 className='heading'>{title}</h1>
                    </>
                )}
                {children}

            </div>

        </Container>
        </div>
  )
}

export default MainScreen