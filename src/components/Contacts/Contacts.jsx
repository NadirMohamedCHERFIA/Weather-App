import React from 'react'
import './socials.css'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Contacts = () => {
  return (
    <div className='container'>
        <h4>
            Reach me on:
        </h4>
        <div className="socials" id="socials">
            <a href="https://github.com/NadirMohamedCHERFIA"><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/cherfia-mohamed-nadir-21709a226/"><AiFillLinkedin/></a>
            <a href="https://www.linkedin.com/in/cherfia-mohamed-nadir-21709a226/"><AiFillInstagram/></a>
        </div>
    </div>
  )
}

export default Contacts