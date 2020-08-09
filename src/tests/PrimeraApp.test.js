import React from 'react';
import { render } from "@testing-library/jest-dom/";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () =>{

    test('Debe mostrar el mensaje "Hola soy Bruce Wayne"', () => {
        
        const saludo = 'Hola soy Bruce Wayne';
        
        const { getByText } = render( <PrimeraApp saludo = { saludo } />);

        expect( getByText( saludo )).toBeInTheDocument();

    });
    

})