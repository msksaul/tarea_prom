const axios = require('axios');

function pokemon(nombre){
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`
    const character=axios.get(url)
    console.log('El pokemon '+nombre.toUpperCase()+' es de tipo:')

    character.then((response)=>{
        //console.log(response.status)
        const pokemonMap=response.data.types.map((poke)=>{
            return poke.type.name
        })
        console.log(pokemonMap)
    })
    .catch((error)=>{
        //console.log(error.response.data)
        console.log(error.response.status)
    })
}

function autor(nombre){
    const url = `http://openlibrary.org/search.json?author=${nombre}`
    const character=axios.get(url)
    console.log('Los libros del autor '+nombre.toUpperCase()+' son:')

    character.then((response)=>{
        //console.log(response.status)
        const autorMap=response.data.docs.map((escritor)=>{
            return escritor.title_suggest
        })
        console.log(autorMap)
    })
    .catch((error)=>{
        //console.log(error.response.data)
        console.log(error.response.status)
    })
}

function getClima(path){
    const character=axios.get(path)
    character.then((response)=>{
        //console.log(response.status)
        const texto = `El ${response.data.forecast.forecastday[0].date} clima: ${response.data.forecast.forecastday[0].day.avgtemp_c}C`
        console.log(texto)
    })
    .catch((error)=>{
        //console.log(error.response.data)
        console.log(error.response.status)
    })
}

function getClimaActual(path){
    const character=axios.get(path)
    character.then((response)=>{
        //console.log(response.status)
        const texto = `Ciudad: ${response.data.location.name}
Clima actual: ${response.data.forecast.forecastday[0].day.avgtemp_c}C`
        console.log(texto)
    })
    .catch((error)=>{
        //console.log(error.response.data)
        console.log(error.response.status)
    })
}

function clima(fecha){
    let fechaT = new Date(fecha)
    const fecha1 = `${fechaT.getFullYear().toString()}-${(fechaT.getMonth()+1).toString()}-${(fechaT.getDate()-0).toString()}`
    const fecha2 = `${fechaT.getFullYear().toString()}-${(fechaT.getMonth()+1).toString()}-${(fechaT.getDate()-1).toString()}`
    const fecha3 = `${fechaT.getFullYear().toString()}-${(fechaT.getMonth()+1).toString()}-${(fechaT.getDate()-2).toString()}`
    const fecha4 = `${fechaT.getFullYear().toString()}-${(fechaT.getMonth()+1).toString()}-${(fechaT.getDate()-3).toString()}`
    const fecha5 = `${fechaT.getFullYear().toString()}-${(fechaT.getMonth()+1).toString()}-${(fechaT.getDate()-4).toString()}`   
    
    const url = 'http://api.weatherapi.com/v1/history.json?key=61f747296a8845fba8a164817201105&q=Guatemala&dt='

    getClimaActual(url+fecha+'')
    getClima(url+fecha1+'')
    getClima(url+fecha2+'')
    getClima(url+fecha3+'')
    getClima(url+fecha4+'')
    getClima(url+fecha5+'')
    
}

//================= editar texto para mostrar funciones ===========================//

//pokemon('bulbasaur')//     ----> escribir el nombre del pokemon para saber sus tipos
//autor('verne')//           ----> escribir el nombre del autor para ver sus libros
clima('2020-05-11')//      ----> escribir la fecha en formato año-mes-dia para obtener el clima
