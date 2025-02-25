import React from 'react'
import './MiniLogLink.scss'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function MiniLogLink({text}) {
  return (
    <Row className={text === 'Зарегистрироваться' && 'justify-content-center'} style={{height: '28px', width:'100%' ,
     alignContent: 'center', textAlign:'right' , display: 'flex', gap:'8px' }} >
    {text === 'Зарегистрироваться' ? <p className='lastWith'>Нет аккаунта? </p> : ''}
        
    <Link className={text === 'Зарегистрироваться' ? 'MiniLogLink w-auto' : 'MiniLogLink'}>{text}</Link>
    </Row>
  )
}
