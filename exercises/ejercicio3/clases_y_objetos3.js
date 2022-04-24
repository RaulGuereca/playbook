class pullRequest {
    constructor(title, branchName, dateCreated, status, repositoryNameAssociated){
    this.title = title
    this.branchName = branchName
    this.dateCreated = dateCreated
    this.status = status
    this.repositoryNameAssociated =  repositoryNameAssociated      
    }

    getStatus(){
        return this.status
    }

    getTitleAndAutor(){
        return `This pullRequest ${this.title} was created by ${this.repositoryNameAssociated}`
    }

}

console.log("Ejemplo 3: convertir de objetos a clases del ejemplo PULLREQUEST")
const mypullRequest = new pullRequest("Modificaciones al proyecto Objetos1", "Ejemplos de Objetos", 15022022, "OPEN", "RaulGuereca")
console.log("Nombre del pullRequest:" + mypullRequest.title)
console.log("Cual es el estatus del proyecto: " + mypullRequest.getStatus())
console.log(mypullRequest.getTitleAndAutor())