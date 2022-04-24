const uber = {
    user: "Raul Guereca",
    destino: "Estadio Azteca",
    precio: 80,
    conductor: "Carlos Martinez",
    DescAuto: "Nissan Sentra color rojo",
    getnombre: function(){
      return this.user
    },
    getgeneralinfo: function(){
      return `Destino viaje:  ${this.destino} precio: ${this.precio} Conductor: ${this.conductor} Automovil: ${this.DescAuto}`
    }
   }
   
   console.log("Nombre del Usuario : " + uber.getnombre())
   console.log(uber.getgeneralinfo())