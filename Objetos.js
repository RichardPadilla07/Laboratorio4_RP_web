// Richard Padilla
// Laboratorio 4

// Objeto de un miembro del grupo de Discord
const miembro = {
    usuario: "Jeremy05G",
    id: "jeremy05g",
    descripcion: "Le tengo miedo a las mujeres",
    email: "jeremy05g@gmail.com",
    roles: ["Miembro", "Player", "op_jeremy"],
    actividad: "online",
    contactos:["Chrisito 16", "RichardVN"],
    sendMail (){
        return `send email to ${this.contactos[1]}`
    }
}

// Ver informacion
console.log(miembro)
console.log(miembro.sendMail())


// Eliminar propiedades
delete miembro.actividad
console.log(miembro)

// Desestructuración
const {descripcion, email, roles, contactos} = miembro
console.log(descripcion)
console.log(email)
console.log(roles)
console.log(contactos)







// Segundo objeto de amigos de algun miembro
const amigos = {
    status: true,
    listaAmigos: ["Richard", "Lucho777", "Mela_2417"],
    sendEmail(){
        return `Send email to ${amigos.listaAmigos[0]}`
    }
}

console.log(amigos.sendEmail())


// Concatenar dos objetos
const allInformation = {...miembro, ...amigos}
console.log(allInformation)

//Agregar propiedades
miembro.hasPFP = true
amigos.hasPFP = true

//Congelar objeto
Object.freeze(miembro)
console.log(Object.isFrozen(miembro));
miembro.hasPFP = false
console.log(miembro);

//Sellar objeto
Object.seal(amigos)
console.log(Object.isSealed(amigos))
amigos.hasPFP = false
console.log(amigos);