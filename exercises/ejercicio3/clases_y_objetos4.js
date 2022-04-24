class twitter {
    constructor(user, trending_topic, hashtag){
    this.user = user
    this.trending_topic = trending_topic
    this.hashtag = hashtag   
    }

    getusuario(){
        return this.user
    }

    getgeneralinfo(){
        return `Tranding topic es :  ${this.trending_topic} y el hashtag es: ${this.hashtag}`
    }

}

  console.log("Ejemplo 4: convertir de objetos a clases del ejemplo TWITTER")
  const myTwitter = new twitter("@raulguereca", "Walking Dead", "#AMC")
  console.log("Trending topic del  dia :" + myTwitter.trending_topic)
  console.log("Cual es el Nombre del Usuario: " + myTwitter.getusuario())
  console.log(myTwitter.getgeneralinfo())