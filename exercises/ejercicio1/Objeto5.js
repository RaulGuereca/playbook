const facebook = {
    user: "Raul Guereca",
    post: "Vacaciones proximo verano",
    Biography: "Especialista en paseos turisticos",
    getnombre: function(){
      return this.user
    },
    getgeneralinfo: function(){
      return `Post es :  ${this.post} Biografia: ${this.Biography}`
    }
   }
   
   console.log("Cual es el Nombre : " + facebook.getnombre())
   console.log(facebook.getgeneralinfo())