import React from "react";
import ReactDOM from 'react-dom';
//import PrimeraApp from "./PrimeraApp";
import './index.css';
import CounterApp from "./CounterApp";

const divRoot = document.querySelector('#app');

//ReactDOM.render(<PrimeraApp saludo='Hola soy Bruce Wayne' /> , divRoot);
ReactDOM.render(<CounterApp /> , divRoot);