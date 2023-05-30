import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';

let bag=[
    {
      id:1,
      Quantity:1,
      Memory:'260',
      Color:'Black'
    },
  ]

export default (state = bag, acion) => {
    switch (acion.type) {
        default: return state
    }
}
