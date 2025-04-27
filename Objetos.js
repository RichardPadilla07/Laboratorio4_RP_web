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
