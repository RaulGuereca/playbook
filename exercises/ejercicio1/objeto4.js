const twitter = {
    user: "@raulguereca",
    trending_topic: "Walking Dead",
    hashtag: "#AMC",
    getusuario: function(){
      return this.user
    },
    getgeneralinfo: function(){
      return `Tranding topic es :  ${this.trending_topic} y el hashtag es: ${this.hashtag}`
    }
   }
   
   console.log("Trending topic del  dia :" + twitter.trending_topic)
   console.log("Cual es el Nombre del Usuario: " + twitter.getusuario())
   console.log(twitter.getgeneralinfo())