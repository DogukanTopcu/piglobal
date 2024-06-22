import React from 'react'

const Hero = ({ title, img } : { title : string, img : string }) => {
  return (
    <section>
        <div
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            
        >
            <h1>{title}</h1>
        </div>
    </section>
  )
}

export default Hero