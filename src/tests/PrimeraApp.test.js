import React from 'react';
import PrimeraApp from "../PrimeraApp";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () =>{

    test('Debe de mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Hola soy Bruce Wayne';

        const wrapper = shallow( <PrimeraApp saludo= { saludo } />);

        expect( wrapper ).toMatchSnapshot();
        
    })
    
    

})