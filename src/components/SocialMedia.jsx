import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin, BsWhatsapp, BsGithub } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href='https://linkedin.com/in/fadhil-amhadin/' target='_blank'>
        <div>
          <BsLinkedin /> 
        </div>
      </a>
      <a href='https://github.com/fadhil-amhadin' target='_blank'>
        <div>
          <BsGithub />
        </div>
      </a>
      <a href='https://api.whatsapp.com/send?phone=6282233419336'>
        <div>
          <BsWhatsapp />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia
