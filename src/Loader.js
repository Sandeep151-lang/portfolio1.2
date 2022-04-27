import React from 'react'
import { Animated } from "react-animated-css";

const Loader = () => {
    return (
        <div className='loader'>
            <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true} className="load-name">
                <p style={{ 'fontSize': '50px' }}>
                    Sandeep Nandanwar ;)
                </p>
            </Animated>
        </div>
    )
}

export default Loader
