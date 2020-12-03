const key='LHKjvPOcrvZfM2JlFS29ZKDsCBm5pQbb';

btn_comenzar.addEventListener("click",(event)=>{
    document.getElementById('contenedor_crear_gifs').style.display='none';
    document.getElementById('contenedor_capturar_gifs').style.display='block';
})


iniciar.addEventListener("click",(event)=>{
     document.getElementById('h3_chequeo').style.display='none';
     document.getElementById('contenedor_btn_inicio').style.display='none';
     document.getElementById('h3_capturando').style.display='block';
     document.getElementById('contenedor_btn_listo').style.display='block';
})



parar.addEventListener("click",(event)=>{
     document.getElementById('video_capturar').style.display='none';
     document.getElementById('contenedor_capturar_gifs').style.display='none';
     document.getElementById('contenedor_vista_previa').style.display='block';
     document.getElementById('previo').style.display='block';
})


btn_repetir.addEventListener("click",(event)=>{
    document.getElementById('contenedor_vista_previa').style.display='none';
    document.getElementById('contenedor_btn_listo').style.display='none';
    document.getElementById('h3_capturando').style.display='none';
    document.getElementById('contenedor_capturar_gifs').style.display='block';
    document.getElementById('video_capturar').style.display='block';
    document.getElementById('h3_chequeo').style.display='block';
    document.getElementById('contenedor_btn_inicio').style.display='block';
    // document.getElementsByClassName(contenedor_capturar)
})

btn_subir.addEventListener("click",(event)=>{
    document.getElementById('contenedor_vista_previa').style.display='none';
    document.getElementById('subiendo').style.display='block';
})

btn_cancelar.addEventListener("click",(event)=>{
    window.location.href = "../crearGif.html";
})
btn_subir.addEventListener("click", (event)=>{
    setTimeout(function(){
        document.getElementById('subiendo').style.display='none';
        document.getElementById('contenedor_guifo_sub_exito').style.display='block';
    },5000);
})
btn_mis_gifs.addEventListener("click",(event) =>{
    document.getElementById('contenedor_crear_gifs').style.display='none';
})



// funcion camara
var recorder = null;

function getStreamAndRecord () {

    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { width: 832}
    }).then(function(stream) {

        var video = document.querySelector('video');
        video.srcObject = stream;
        video.play();

        recorder = RecordRTC(stream, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 832,
            hidden: 434,

            onGifRecordingStarted: function() {

             console.log('Inicio de grabacion!!')
            }
        });
    });
}

getStreamAndRecord();

btn_repetir.addEventListener('click', (event) => {
    recorder.startRecording();
});

iniciar.addEventListener('click', (event) => {
    recorder.startRecording();
});

parar.addEventListener('click', (event) => {
    recorder.stopRecording(function(){
        let blob = recorder.getBlob();

        var imagenPrevia = document.getElementById("previo");
        imagenPrevia.src = URL.createObjectURL(blob);

    });
});
//  setTimeout(function(){
//      btn_subir.addEventListener('loadstart',(event) =>{
//          if (btn_subir==true){
//              console.log('se cargo');
//          }
//          else(btn_cancelar==true){
//              console.log('no se cargo');
//          }
//      })
//  },1000);

btn_subir.addEventListener('click', (event) => {
    // recorder.stopRecording(function(){

        let blob = recorder.getBlob();

        var imagenPrevia = document.getElementById("previo");
        imagenPrevia.src = URL.createObjectURL(blob);

        let formulario = new FormData();
        formulario.append('file', blob, 'miGif.gif');
        //console.log(formulario.get('file'));

        const sugerencias = fetch('https://upload.giphy.com/v1/gifs?api_key=' + key ,
        {
            method: 'post',
            body: formulario
        })
        .then(response => {
            return response.json();

        })
        .then(datos => {
            // vamos a guardar la informacion en localstorage
        
            console.log(datos);
            var nombre = "gif"+datos.data.id;
            localStorage.setItem(nombre,JSON.stringify(datos));
            
             return datos;
        })
        .catch(error => {
            return error;
        });
    
 }
);





for (item in localStorage) {
      if(item.includes("gif")){
        var id=[];
        var ids=id.push('gif');
      //aca podes construir un string con los id separados por coma.
      }
      console.log(ids);
}
fetch('https://api.giphy.com/v1/gifs?api_key=' +key +'&ids='+id)
.then(response => {
             return response.json();
         })
         .then(datos => {
             var containerBox3 = document.getElementById("contenedor_mis_gifos");
             var contenedor_mis_gifos = "";
             for (let index = 0; index < datos.data.length; index++) {
                contenedor_mis_gifos += "<img src='"+ datos.data[index].images.original.url +"'/>"
             }
             containerBox3.innerHTML = contenedor_mis_gifos;
             console.log(datos);
    
             return datos;
         })
         .catch(error => {
             console.log(error);
             return error;
 });
       
