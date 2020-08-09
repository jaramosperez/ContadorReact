import CounterApp from "../CounterApp";
import React from 'react';
import { shallow } from "enzyme";

//Tarea
/* 1. Crear las siguientes pruebas para el <CounterApp />
    * debe de mostrar <CounterApp /> corecctamente (Hacer match con un snapshot)
        Y sus valores por defecto

    * Debe de mostrar el valor por defecto de 100
        *usar el wrapper.find, tomando el elemento html donde se muestra el valor del contador */

describe('Pruebas en <CounterApp />', () => {


    test('debe de mostrar <CounterApp /> corecctamente (Hacer match con un snapshot) ', () => {
        const wrapper = shallow( <CounterApp />);

        expect( wrapper ).toMatchSnapshot();
        
    });
    
    test('Debe de mostrar el valor por defecto de 100', () => {

        const wrapper = shallow( <CounterApp value = {100} /> );

        const counterText = wrapper.find('h2').text().trim();
        console.log(counterText);

        expect( counterText ).toBe('100');
        
    })
    

})

