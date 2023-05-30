import React from 'react'
import { useState } from 'react';
import { Range } from 'react-range';
export default function MySlider() {
    const [values, setValues] = useState([0, 100000]);
  
    return (
      <div className='MySlider'>
        <p className='SliderTitle'>Цена</p>
        <Range className='Range' values={values} step={1} min={0} max={100000} onChange={(newValues) => {
            setValues(newValues);
        }}
        renderTrack={({ props, children }) => (
          <div 
            {...props}
            style={{ ...props.style, height: '10px', width: '100%', backgroundColor: '#ccc',
            borderRadius:'10px',
            }}>
            {children}
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '10px',
              width: '10px',
              borderRadius: '50%',
              backgroundColor: isDragged ? '#0000FF' : '#0000FF'
            }}
          />
        )}
        />
        <div className='SlideSpan'>
          <span>{values[0]}</span> 
          <span>{values[1]}</span> 
        </div>
      </div>
    );
  }