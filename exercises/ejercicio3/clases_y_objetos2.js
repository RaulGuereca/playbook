class issue {
    constructor(title, repositoryNameAssociated, status, numberOfComments, labels, dateCreated, lastUpdated){
    this.title = title
    this.repositoryNameAssociated = repositoryNameAssociated
    this.status = status
    this.numberOfComments = numberOfComments
    this.labels = labels
    this.dateCreated = dateCreated
    this.lastUpdated = lastUpdated  
    }

    getTitleAndAuthor(){
        return this.repositoryNameAssociated
      }

    getGeneralInfo(){
        return `This repository ${this.title} was created by ${this.repositoryNameAssociated}`
    }

}

console.log("Ejemplo 2: convertir de objetos a clases del ejemplo ISSUE")
const myIssue = new issue("Ejemplo de objetos1", "RaulGuereca", "OPEN", 50, 199, 01012022, 22042022)
console.log("Nombre del repo:" + myIssue.title)
console.log("Autor del Repositorio: " + myIssue.getTitleAndAuthor())
console.log(myIssue.getGeneralInfo())

