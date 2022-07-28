import React from 'react';
import Coverflow from 'react-coverflow';

export const imageSlider = () => {


  return(
      <Coverflow
          width={960}
          height={480}
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={false}
      >
          <div
              role="menuitem"
              tabIndex="0"
          >
              <img
                  src='[image/path/please_change]'
                  alt='title or description'
                  style={{ display: 'block', width: '100%' }}
              />
          </div>
          <img src='[image/path/please_change]' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
          <img src='[image/path/please_change]' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
      </Coverflow>
  )
}
