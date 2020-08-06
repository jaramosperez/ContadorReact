const { getUser, getUsuarioActivo } = require("../../base/05-funciones")

describe('Pruebas en 05-Funciones', () => {


    test('getUser Debe de retornar un Objeto ', () => {
        

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502',
        }

        const user = getUser();

        expect( user ).toEqual( userTest);

    })

    //getUsuarioActivo debe de retornar un Objeto
    test('getUsuarioActivo debe de retornar un objeto', () => {

        const nombre = 'Clark Kent';
        const user = getUsuarioActivo( nombre );

        expect( user ).toEqual({
            uid: 'ABC567',
            username: nombre,
        });

    });
})