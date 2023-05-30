import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';

let Installments={
    term:3,
    vznos:0,
}

export default (state = Installments, acion) => {
    switch (acion.type) {
        default: return state
    }
}
