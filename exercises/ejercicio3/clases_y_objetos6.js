class uber {
    constructor(user,destino, precio, conductor, DescAuto){
    this.user = user
    this.destino = destino
    this.precio = precio
    this.conductor = conductor
    this.DescAuto = DescAuto     
    }

    getnombre(){
        return this.user
    }

    getGeneralInfo(){
        return `Destino viaje:  ${this.destino} precio: ${this.precio} Conductor: ${this.conductor} Automovil: ${this.DescAuto}`
    }

}

console.log("Ejemplo 6: convertir de objetos a clases del ejemplo UBER")
const myUber = new uber("Raul Guereca", "Estadio Azteca", 80, "Carlos Martinez", "Nissan Sentra color rojo")
console.log("Nombre del Usuario : " + myUber.getnombre())
console.log(myUber.getGeneralInfo())
