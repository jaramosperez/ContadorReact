export const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});


const user = getUser();


// Tarea
export const getUsuarioActivo = ( nombre ) =>{
    return ({
        uid: 'ABC567',
        username: nombre,
    });
}




