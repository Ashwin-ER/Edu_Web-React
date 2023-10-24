import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
          {/* <img src="public/images/owl.webp" ></img> */}
          
            {/* <h1><b>ONLEARN</b></h1><img src="public/images/owl1.png" /> */}
            <h1><p class="larger-text">ONLEARN</p></h1>
            {/* <span>ONLINE EDUCATION & LEARNING</span> */}
            
          </div>

          <div className='social'>
            <h1></h1>
            <button className='primary-btn'>
                LOGIN <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                SIGN UP <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            {/* <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
