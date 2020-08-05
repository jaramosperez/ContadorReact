const { getSaludo } = require("../../base/02-template-string")

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de Retornar Hola Bruce Wayne', () => {

        const nombre = 'Bruce Wayne';

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe('Hola ' + nombre +'!');
    } )

    // getSaludo debe retornar Hola Clark! si no hay ningún argumento en nombre
    test('getSaludo debe retornar Hola Clark! si no hay ningún argumento en nombreg', () => {
        const nombre = 'Bruce Wayne';

        const saludo = getSaludo();

        expect( saludo ).toBe('Hola Clark Kent!');
    })

})