const issue = {
    title: "Ejemplo de objetos1",
    repositoryNameAssociated: "RaulGuereca",
    status: "OPEN",
    numberOfComments: 50,
    labels: 199,
    dateCreated: 01012022,
    lastUpdated: 22042022,
    getTitleAndAuthor: function(){
      return this.repositoryNameAssociated
    },
    getGeneralInfo: function(){
      return `This repository ${this.title} was created by ${this.repositoryNameAssociated}`
    }
   }
   
   console.log("Nombre del repo:" + issue.title)
   console.log("Autor del Repositorio: " + issue.getTitleAndAuthor())
   console.log(issue.getGeneralInfo())