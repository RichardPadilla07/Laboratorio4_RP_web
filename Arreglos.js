// Richard Padilla
// Laboratorio 4

// Arreglos
let Bots = [

    {
        nombre: "Carl-bot",
        actividad: "Multipurpose bot packed with features",
        roles: ["Soporte", "bots"]
    },

    {
        nombre: "Mudae",
        actividad: "I brought a lot of original multiplayer games to entertain humanity. My teas shall be your pets, my words may contain all your wishes and my waifus... will be yours.",
        roles: ["Bots", "Mudae"]
    },

    {
        nombre: "YAGPDB.xyz",
        actividad: "Yet Another General Purpose Discord Bot",
        roles: ["YAGPDB.xyz", "Bots"]
    }
]

//Acceder al contenido - Desestructuración
const [nombre, actividad, roles] = Bots
console.log(Bots[2].actividad);

//Métodos - sort
console.log(Bots[0].roles.sort());

//Rest Operator
const [val1,...rest] = Bots
console.log(val1)
console.log(rest)

Bots.forEach(bot => {
    console.log(bot);
});

Bots.map(bot => {
    console.log(bot);
});


//Recorrido
for (let i = 0; i < Bots.length; i++) {
    console.log(Bots[i]);
}




