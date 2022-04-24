class facebook {
    constructor(user, post, Biography){
    this.user = user
    this.post = post
    this.Biography = Biography     
    }

    getnombre(){
        return this.user
    }

    getgeneralinfo(){
        return `Post es :  ${this.post} Biografia: ${this.Biography}`
    }

}

console.log("Ejemplo 5: convertir de objetos a clases del ejemplo FACEBOOK")
const myFacebook = new facebook("Raul Guereca", "Vacaciones proximo verano", "Especialista en paseos turisticos")
console.log("Cual es el Nombre : " + myFacebook.getnombre())
console.log(myFacebook.getgeneralinfo())

