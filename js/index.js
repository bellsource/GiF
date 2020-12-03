const key='LHKjvPOcrvZfM2JlFS29ZKDsCBm5pQbb';
// var search="dinero"

function busqueda(search){
    const found = fetch('https://api.giphy.com/v1/gifs/search?q=' + search.trim() + '&api_key=' + key)
        .then(response => {
            return response.json();
        })
        .then(datos => {
            var containerBox = document.getElementById("box");
            var box = "";
            for (let index = 0; index < datos.data.length; index++) {
                box += "<img src='"+ datos.data[index].images.original.url +"'/>"
            }
            containerBox.innerHTML = box;
            console.log(datos);

            return datos;
        })
        .catch(error => {
            console.log(error);
            return error;
        });
}

btnBuscar.addEventListener("click", (event) => {
    var palabra = document.getElementById('txtBusqueda').value;
    busqueda(palabra);
})


  

// Estos son los fijos para los 4 primeros
    //fetch('https://api.giphy.com/v1/gifs/search?q=Jonathanvanness&api_key=' + giphy_apikey)
    //fetch('https://api.giphy.com/v1/gifs/search?q=SailorMercury&api_key=' + giphy_apikey)
    //fetch('https://api.giphy.com/v1/gifs/search?q=queereye&api_key=' + giphy_apikey)
    //fetch('https://api.giphy.com/v1/gifs/search?q=Unicorns&Rainbows&api_key=' + giphy_apikey)

    fetch('https://api.giphy.com/v1/gifs/search?q=Jonathanvanness&api_key=' + key)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
        console.log(json.data[0].images.original.url);
        var boxS1 = document.getElementById("boxS1");
        boxS1.innerHTML= "<img src='"+ json.data[1].images.original.url +"'/>";     
    });

    
    fetch('https://api.giphy.com/v1/gifs/search?q=SailorMercury&api_key=' + key)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
        console.log(json.data[0].images.original.url);
        var boxS2 = document.getElementById("boxS2");
        boxS2.innerHTML= "<img src='"+ json.data[0].images.original.url +"'/>";     
    });

    fetch('https://api.giphy.com/v1/gifs/search?q=queereye&api_key=' + key)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
        console.log(json.data[0].images.original.url);
        var boxS3 = document.getElementById("boxS3");
        boxS3.innerHTML= "<img src='"+ json.data[0].images.original.url +"'/>";     
    });

    fetch('https://api.giphy.com/v1/gifs/search?q=Unicorns&Rainbows&api_key=' + key)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
        console.log(json.data[0].images.original.url);
        var boxS4 = document.getElementById("boxS4");
        boxS4.innerHTML= "<img src='"+ json.data[0].images.original.url +"'/>";     
    });

// TENDENCIAS

const found = fetch('https://api.giphy.com/v1/gifs/trending?limit=12&api_key=' + key)

         .then(response => {
             return response.json();
         })
         .then(datos => {
             var containerBox3 = document.getElementById("boxTendencias");
             var boxTendencias = "";
             for (let index = 0; index < datos.data.length; index++) {
                 boxTendencias += "<img src='"+ datos.data[index].images.original.url +"'/>"
             }
             containerBox3.innerHTML = boxTendencias;
             console.log(datos);

             return datos;
         })
         .catch(error => {
             console.log(error);
             return error;
});


// CAMBIO DE TEMA
// btn_selector_tema.addEventListener("click",(event) => {
//      var linkTema = document.getElementById('tema');
//      console.log(linkTema.href)
//      if (linkTema == "http://127.0.0.1:5501/css/stylesNight.css")
//      linkTema.href = "css/stylesDay.css";
//      else
//         linkTema.href = "css/stylesNight.css";     
//  })



