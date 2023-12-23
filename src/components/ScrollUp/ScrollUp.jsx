import './ScrollUp.css'
import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

const ScrollUp = (scrollUp) => {
    const [scroll, setScroll] = useState(false)
    const changeScroll = () => {
        if (window.scrollY >= 50) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', changeScroll)

    return (
        <div>
            <ScrollLink to={scrollUp.to} className={scroll ? 'scrollup show-scroll' : 'scrollup'} spy={true} smooth={true} offset={-50} duration={250}>
                <FontAwesomeIcon icon={faAngleUp} />
            </ScrollLink>
        </div>
    )
}

export default ScrollUp