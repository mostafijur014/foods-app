import React from 'react';

function Header ()  {
  return(
      <div id='main'>
          <div className='header-heading'>
              <h3>It's Great Time For A Good Taste Of Burger</h3>
              <h1><span>BURGER</span> FOR <br/> Week </h1>
              <p className='details'> Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              <div className='header-btn'>
                  <a href='#' className='productbox-button'>Order</a>
              </div>
          </div>
      </div>
  )
};

export default Header;

