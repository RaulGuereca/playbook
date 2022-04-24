const pullRequest = {
    title: "Modificaciones al proyecto Objetos1",
    branchName: "Ejemplos de Objetos",
    dateCreated: 15022022,
    status: "OPEN",
    repositoryNameAssociated: "RaulGuereca",
    getStatus: function(){
      return this.status
    },
    getTitleAndAutor: function(){
      return `This pullRequest ${this.title} was created by ${this.repositoryNameAssociated}`
    }
   }
   
   console.log("Nombre del pullRequest:" + pullRequest.title)
   console.log("Cual es el estatus del proyecto: " + pullRequest.getStatus())
   console.log(pullRequest.getTitleAndAutor())