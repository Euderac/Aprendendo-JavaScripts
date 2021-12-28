function getAdmins(map){
    let admins = [];
    for([key, value] of map) {
        if(value === `Admin`){
            admins.push(key);
        }
    }

}
const usuarios = new Map();

usuarios.set(`Luis`, `Admin`);
usuarios.set('Staphenny', 'Admin');
usuarios.set('Jorge','User');
usuarios.set('Natalia','Admin');

console.log(getAdmins(usuarios));
