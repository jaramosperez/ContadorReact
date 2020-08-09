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

    test('Debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola soy Bruce Wayne';

        const subTitulo = 'Soy un subTitulo';
        const wrapper = shallow(
            <PrimeraApp
                 saludo = { saludo }
                 subtitulo = { subTitulo } 
                 />
        );

        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);

        expect( textoParrafo ).toBe( subTitulo );

    })
    
    
    

})