


const nombre   = 'Bruce';
const apellido = 'Wayne';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

export function getSaludo(nombreCompleto = 'Clark Kent') {
    return 'Hola ' + nombreCompleto+ '!';
}
