import React from 'react'
import './LogWithPart.scss'
import { Row } from 'react-bootstrap'
import { BiLogoGoogle } from 'react-icons/bi'
import { FaFacebookF } from 'react-icons/fa'

export default function LogWithPart() {
  return (
    <div className="LogWithPart">
        <Row className="LogWithTop">
            <div className="line"></div>
            <p className="greyLineText">или войти с помощью</p>
            <div className="line"></div>
        </Row>
        <Row className="LogWithBottom d-flex justify-content-space-between">
            <button className="LogWith1">
            <BiLogoGoogle />
                Google
            </button>
            <button className="LogWith2">
            <FaFacebookF />
                Facebook
            </button>
        </Row>
    </div>
  )
}