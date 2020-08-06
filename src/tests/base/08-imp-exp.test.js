const { getHeroeById, getHeroesByOwner } = require("../../base/08-imp-exp");
const { default: heroes } = require("../../data/heroes");

describe('Pruebas en funciones de Heroes', () => {

    test('Debe de retornar un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData )   
        
    })

    test('Debe de retornar undefined si heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );
        
    })
    
    //TAREA
    //Debe retornar un arreglo con los heroes de DC
    //owner
    //toEqual al arreglo filtrado

    
    test('Debe retornar un arreglo con los heroes de DC ', () => {

        const owner = 'DC';
        const heroesDC = getHeroesByOwner( owner );

        const heroesData = heroes.filter( h => h.owner === owner );

        expect( heroesData ).toEqual( heroesDC );
        
    })
    
    //TAREA
    // Debe de retornar un arreglo con los heroes de marvel
    // length = 2 // toBe

    test('Debe de retornar un arreglo con los heroes de marvel', () => {

        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner( owner )

        expect( heroesMarvel.length ).toEqual( 2 );
        
    })



})