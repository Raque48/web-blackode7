/*Menu Hamburguesa*/
const enlaces = document.getElementsByClassName("enlaces")[0];
const hamburguesa = document.getElementsByClassName("hamburguesa")[0];
const menuHamburguesa = document.getElementById("hamburguesa");
let abierto = false;


const toggleMenu = () =>{
    enlaces.classList.toggle("enlaces2");
    enlaces.style.transition = "transform 0.5s ease-in-out";
}

hamburguesa.addEventListener("click", function(){
    toggleMenu();
    if(document.querySelector(".enlaces.enlaces2")){
        abierto=true
    }else{
        abierto=false
    }
})

window.addEventListener("click", function(e){
    this.console.log(e.target)
    if(abierto){
        if(e.target !== menuHamburguesa){
            toggleMenu();
            abierto=false
        }
    }
})

window.addEventListener("resize", function(){
    if(screen.width > 800){
        if(abierto){
            toggleMenu();
            enlaces.style.transition = "none";
            abierto=false;
        }
    }
})


/*Carrusel imagenes infinitas Albumnes */

function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}


/*Categorias de sonido interfaz usuario*/

$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});



/*Lista para escuchar cada sonidos en las categorias de interfaz de usuario
var sound = new Audio();
sound.src = "assets/MalbecDuki.mp3";*/



/*Pausar y dar play en el mismo boton - Solo que se debe hacer uno por cada uno por que si no se reproduce en todos el mismo*/

var audio = document.getElementById('audio');
var playPauseP = document.getElementById('playPauseP');
var contador = 0;

function playPause(){
    if(contador == 0){
        contador = 1;
        audio.play();
        playPauseP.innerHTML = "Pausa";
    }else{
        contador = 0;
        audio.pause();
        playPauseP.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio.addEventListener("ended", function(){   
        playPauseP.innerHTML = "Play";
        contador = 0;
        audio.currentTime = 0;
    });

}

/* Inicia de 0 el sonido
function stop(){
    playPause()
    audio.pause();
    audio.currentTime = 0;
    playPauseP.innerHTML = "Play";
}

*/


var audio1 = document.getElementById('audio1');
var playPauseP1 = document.getElementById('playPauseP1');
var contador1 = 0;

function playPause1(){
    if(contador1 == 0){
        contador1 = 1;
        audio1.play();
        playPauseP1.innerHTML = "Pausa";
    }else{
        contador1 = 0;
        audio1.pause();
        playPauseP1.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio1.addEventListener("ended", function(){   
        playPauseP1.innerHTML = "Play";
        contador1 = 0;
        audio1.currentTime = 0;
    });

}

var audio2 = document.getElementById('audio2');
var playPauseP2 = document.getElementById('playPauseP2');
var contador2 = 0;

function playPause2(){
    if(contador2 == 0){
        contador2 = 1;
        audio2.play();
        playPauseP2.innerHTML = "Pausa";
    }else{
        contador2 = 0;
        audio2.pause();
        playPauseP2.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio2.addEventListener("ended", function(){   
        playPauseP2.innerHTML = "Play";
        contador2 = 0;
        audio2.currentTime = 0;
    });

}


/*etiquetasAudio= $('audio', 'audio1', 'audio2');

function pausarTodosLosAudios() {
   etiquetasAudio.each(function() {
      var a = $(this).get(0);
      a.pause();
   });
}*/


var audio80 = document.getElementById('audio80');
var playPauseP80 = document.getElementById('playPauseP80');
var contador80 = 0;

function playPause80(){
    if(contador80 == 0){
        contador80 = 1;
        audio80.play();
        playPauseP80.innerHTML = "Pausa";
    }else{
        contador80 = 0;
        audio80.pause();
        playPauseP80.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio80.addEventListener("ended", function(){   
        playPauseP80.innerHTML = "Play";
        contador80 = 0;
        audio80.currentTime = 0;
    });

}

var audio81 = document.getElementById('audio81');
var playPauseP81 = document.getElementById('playPauseP81');
var contador81 = 0;

function playPause81(){
    if(contador81 == 0){
        contador81 = 1;
        audio81.play();
        playPauseP81.innerHTML = "Pausa";
    }else{
        contador81 = 0;
        audio81.pause();
        playPauseP81.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio81.addEventListener("ended", function(){   
        playPauseP81.innerHTML = "Play";
        contador81 = 0;
        audio81.currentTime = 0;
    });

}

var audio82 = document.getElementById('audio82');
var playPauseP82 = document.getElementById('playPauseP82');
var contador82 = 0;

function playPause82(){
    if(contador82 == 0){
        contador82 = 1;
        audio82.play();
        playPauseP82.innerHTML = "Pausa";
    }else{
        contador82 = 0;
        audio82.pause();
        playPauseP82.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio82.addEventListener("ended", function(){   
        playPauseP82.innerHTML = "Play";
        contador82 = 0;
        audio82.currentTime = 0;
    });

}

var audio83 = document.getElementById('audio83');
var playPauseP83 = document.getElementById('playPauseP83');
var contador83 = 0;

function playPause83(){
    if(contador83 == 0){
        contador83 = 1;
        audio83.play();
        playPauseP83.innerHTML = "Pausa";
    }else{
        contador83 = 0;
        audio83.pause();
        playPauseP83.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio83.addEventListener("ended", function(){   
        playPauseP83.innerHTML = "Play";
        contador83 = 0;
        audio83.currentTime = 0;
    });

}

var audio84 = document.getElementById('audio84');
var playPauseP84 = document.getElementById('playPauseP84');
var contador84 = 0;

function playPause84(){
    if(contador84 == 0){
        contador84 = 1;
        audio84.play();
        playPauseP84.innerHTML = "Pausa";
    }else{
        contador84 = 0;
        audio84.pause();
        playPauseP84.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio84.addEventListener("ended", function(){   
        playPauseP84.innerHTML = "Play";
        contador84 = 0;
        audio84.currentTime = 0;
    });

}

var audio85 = document.getElementById('audio85');
var playPauseP85 = document.getElementById('playPauseP85');
var contador85 = 0;

function playPause85(){
    if(contador85 == 0){
        contador85 = 1;
        audio85.play();
        playPauseP85.innerHTML = "Pausa";
    }else{
        contador85 = 0;
        audio85.pause();
        playPauseP85.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio85.addEventListener("ended", function(){   
        playPauseP85.innerHTML = "Play";
        contador85 = 0;
        audio85.currentTime = 0;
    });

}

var audio86 = document.getElementById('audio86');
var playPauseP86 = document.getElementById('playPauseP86');
var contador86 = 0;

function playPause86(){
    if(contador86 == 0){
        contador86 = 1;
        audio86.play();
        playPauseP86.innerHTML = "Pausa";
    }else{
        contador86 = 0;
        audio86.pause();
        playPauseP86.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio86.addEventListener("ended", function(){   
        playPauseP86.innerHTML = "Play";
        contador86 = 0;
        audio86.currentTime = 0;
    });

}

var audio87 = document.getElementById('audio87');
var playPauseP87 = document.getElementById('playPauseP87');
var contador87 = 0;

function playPause87(){
    if(contador87 == 0){
        contador87 = 1;
        audio87.play();
        playPauseP87.innerHTML = "Pausa";
    }else{
        contador87 = 0;
        audio87.pause();
        playPauseP87.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio87.addEventListener("ended", function(){   
        playPauseP87.innerHTML = "Play";
        contador87 = 0;
        audio87.currentTime = 0;
    });

}

var audio88 = document.getElementById('audio88');
var playPauseP88 = document.getElementById('playPauseP88');
var contador88 = 0;

function playPause88(){
    if(contador88 == 0){
        contador88 = 1;
        audio88.play();
        playPauseP88.innerHTML = "Pausa";
    }else{
        contador88 = 0;
        audio88.pause();
        playPauseP88.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio88.addEventListener("ended", function(){   
        playPauseP88.innerHTML = "Play";
        contador88 = 0;
        audio88.currentTime = 0;
    });

}

var audio89 = document.getElementById('audio89');
var playPauseP89 = document.getElementById('playPauseP89');
var contador89 = 0;

function playPause89(){
    if(contador89 == 0){
        contador89 = 1;
        audio89.play();
        playPauseP89.innerHTML = "Pausa";
    }else{
        contador89 = 0;
        audio89.pause();
        playPauseP89.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio89.addEventListener("ended", function(){   
        playPauseP89.innerHTML = "Play";
        contador89 = 0;
        audio89.currentTime = 0;
    });

}

var audio90 = document.getElementById('audio90');
var playPauseP90 = document.getElementById('playPauseP90');
var contador90 = 0;

function playPause90(){
    if(contador90 == 0){
        contador90 = 1;
        audio90.play();
        playPauseP90.innerHTML = "Pausa";
    }else{
        contador90 = 0;
        audio90.pause();
        playPauseP90.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio90.addEventListener("ended", function(){   
        playPauseP90.innerHTML = "Play";
        contador90 = 0;
        audio90.currentTime = 0;
    });

}

var audio91 = document.getElementById('audio91');
var playPauseP91 = document.getElementById('playPauseP91');
var contador91 = 0;

function playPause91(){
    if(contador91 == 0){
        contador91 = 1;
        audio91.play();
        playPauseP91.innerHTML = "Pausa";
    }else{
        contador91 = 0;
        audio91.pause();
        playPauseP91.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio91.addEventListener("ended", function(){   
        playPauseP91.innerHTML = "Play";
        contador91 = 0;
        audio91.currentTime = 0;
    });

}

var audio92 = document.getElementById('audio92');
var playPauseP92 = document.getElementById('playPauseP92');
var contador92 = 0;

function playPause92(){
    if(contador92 == 0){
        contador92 = 1;
        audio92.play();
        playPauseP92.innerHTML = "Pausa";
    }else{
        contador92 = 0;
        audio92.pause();
        playPauseP92.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio92.addEventListener("ended", function(){   
        playPauseP92.innerHTML = "Play";
        contador92 = 0;
        audio92.currentTime = 0;
    });

}

var audio93 = document.getElementById('audio93');
var playPauseP93 = document.getElementById('playPauseP93');
var contador93 = 0;

function playPause93(){
    if(contador93 == 0){
        contador93 = 1;
        audio93.play();
        playPauseP93.innerHTML = "Pausa";
    }else{
        contador93 = 0;
        audio93.pause();
        playPauseP93.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio93.addEventListener("ended", function(){   
        playPauseP93.innerHTML = "Play";
        contador93 = 0;
        audio93.currentTime = 0;
    });

}

var audio94 = document.getElementById('audio94');
var playPauseP94 = document.getElementById('playPauseP94');
var contador94 = 0;

function playPause94(){
    if(contador94 == 0){
        contador94 = 1;
        audio94.play();
        playPauseP94.innerHTML = "Pausa";
    }else{
        contador94 = 0;
        audio94.pause();
        playPauseP94.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio94.addEventListener("ended", function(){   
        playPauseP94.innerHTML = "Play";
        contador94 = 0;
        audio94.currentTime = 0;
    });

}

var audio95 = document.getElementById('audio95');
var playPauseP95 = document.getElementById('playPauseP95');
var contador95 = 0;

function playPause95(){
    if(contador95 == 0){
        contador95 = 1;
        audio95.play();
        playPauseP95.innerHTML = "Pausa";
    }else{
        contador95 = 0;
        audio95.pause();
        playPauseP95.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio95.addEventListener("ended", function(){   
        playPauseP95.innerHTML = "Play";
        contador95 = 0;
        audio95.currentTime = 0;
    });

}

var audio96 = document.getElementById('audio96');
var playPauseP96 = document.getElementById('playPauseP96');
var contador96 = 0;

function playPause96(){
    if(contador96 == 0){
        contador96 = 1;
        audio96.play();
        playPauseP96.innerHTML = "Pausa";
    }else{
        contador96 = 0;
        audio96.pause();
        playPauseP96.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio96.addEventListener("ended", function(){   
        playPauseP96.innerHTML = "Play";
        contador96 = 0;
        audio96.currentTime = 0;
    });

}

var audio97 = document.getElementById('audio97');
var playPauseP97 = document.getElementById('playPauseP97');
var contador97 = 0;

function playPause97(){
    if(contador97 == 0){
        contador97 = 1;
        audio97.play();
        playPauseP97.innerHTML = "Pausa";
    }else{
        contador97 = 0;
        audio97.pause();
        playPauseP97.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio97.addEventListener("ended", function(){   
        playPauseP97.innerHTML = "Play";
        contador97 = 0;
        audio97.currentTime = 0;
    });

}

var audio98 = document.getElementById('audio98');
var playPauseP98 = document.getElementById('playPauseP98');
var contador98 = 0;

function playPause98(){
    if(contador98 == 0){
        contador98 = 1;
        audio98.play();
        playPauseP98.innerHTML = "Pausa";
    }else{
        contador98 = 0;
        audio98.pause();
        playPauseP98.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio98.addEventListener("ended", function(){   
        playPauseP98.innerHTML = "Play";
        contador98 = 0;
        audio98.currentTime = 0;
    });

}

var audio99 = document.getElementById('audio99');
var playPauseP99 = document.getElementById('playPauseP99');
var contador99 = 0;

function playPause99(){
    if(contador99 == 0){
        contador99 = 1;
        audio99.play();
        playPauseP99.innerHTML = "Pausa";
    }else{
        contador99 = 0;
        audio99.pause();
        playPauseP99.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio99.addEventListener("ended", function(){   
        playPauseP99.innerHTML = "Play";
        contador99 = 0;
        audio99.currentTime = 0;
    });

}

var audio100 = document.getElementById('audio100');
var playPauseP100 = document.getElementById('playPauseP100');
var contador100 = 0;

function playPause100(){
    if(contador100 == 0){
        contador100 = 1;
        audio100.play();
        playPauseP100.innerHTML = "Pausa";
    }else{
        contador100 = 0;
        audio100.pause();
        playPauseP100.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio100.addEventListener("ended", function(){   
        playPauseP100.innerHTML = "Play";
        contador100 = 0;
        audio100.currentTime = 0;
    });

}


var audio101 = document.getElementById('audio101');
var playPauseP101 = document.getElementById('playPauseP101');
var contador101 = 0;

function playPause101(){
    if(contador101 == 0){
        contador101 = 1;
        audio101.play();
        playPauseP101.innerHTML = "Pausa";
    }else{
        contador101 = 0;
        audio101.pause();
        playPauseP101.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio101.addEventListener("ended", function(){   
        playPauseP101.innerHTML = "Play";
        contador101 = 0;
        audio101.currentTime = 0;
    });

}

var audio102 = document.getElementById('audio102');
var playPauseP102 = document.getElementById('playPauseP102');
var contador102 = 0;

function playPause102(){
    if(contador102 == 0){
        contador102 = 1;
        audio102.play();
        playPauseP102.innerHTML = "Pausa";
    }else{
        contador102 = 0;
        audio102.pause();
        playPauseP102.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio102.addEventListener("ended", function(){   
        playPauseP102.innerHTML = "Play";
        contador102 = 0;
        audio102.currentTime = 0;
    });

}

var audio103 = document.getElementById('audio103');
var playPauseP103 = document.getElementById('playPauseP103');
var contador103 = 0;

function playPause103(){
    if(contador103 == 0){
        contador103 = 1;
        audio103.play();
        playPauseP103.innerHTML = "Pausa";
    }else{
        contador103 = 0;
        audio103.pause();
        playPauseP103.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio103.addEventListener("ended", function(){   
        playPauseP103.innerHTML = "Play";
        contador103 = 0;
        audio103.currentTime = 0;
    });

}

var audio104 = document.getElementById('audio104');
var playPauseP104 = document.getElementById('playPauseP104');
var contador104 = 0;

function playPause104(){
    if(contador104 == 0){
        contador104 = 1;
        audio104.play();
        playPauseP104.innerHTML = "Pausa";
    }else{
        contador104 = 0;
        audio104.pause();
        playPauseP104.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio104.addEventListener("ended", function(){   
        playPauseP104.innerHTML = "Play";
        contador104 = 0;
        audio104.currentTime = 0;
    });

}

var audio105 = document.getElementById('audio105');
var playPauseP105 = document.getElementById('playPauseP105');
var contador105 = 0;

function playPause105(){
    if(contador105 == 0){
        contador105 = 1;
        audio105.play();
        playPauseP105.innerHTML = "Pausa";
    }else{
        contador105 = 0;
        audio105.pause();
        playPauseP105.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio105.addEventListener("ended", function(){   
        playPauseP105.innerHTML = "Play";
        contador105 = 0;
        audio105.currentTime = 0;
    });

}

var audio1006 = document.getElementById('audio106');
var playPauseP106 = document.getElementById('playPauseP106');
var contador106 = 0;

function playPause106(){
    if(contador106 == 0){
        contador106 = 1;
        audio106.play();
        playPauseP106.innerHTML = "Pausa";
    }else{
        contador106 = 0;
        audio106.pause();
        playPauseP106.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio106.addEventListener("ended", function(){   
        playPauseP106.innerHTML = "Play";
        contador106 = 0;
        audio106.currentTime = 0;
    });

}

var audio107 = document.getElementById('audio107');
var playPauseP107 = document.getElementById('playPauseP107');
var contador107 = 0;

function playPause107(){
    if(contador107 == 0){
        contador107 = 1;
        audio107.play();
        playPauseP107.innerHTML = "Pausa";
    }else{
        contador107 = 0;
        audio107.pause();
        playPauseP107.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio107.addEventListener("ended", function(){   
        playPauseP107.innerHTML = "Play";
        contador107 = 0;
        audio107.currentTime = 0;
    });

}

var audio108 = document.getElementById('audio108');
var playPauseP108 = document.getElementById('playPauseP108');
var contador108 = 0;

function playPause108(){
    if(contador108 == 0){
        contador108 = 1;
        audio108.play();
        playPauseP108.innerHTML = "Pausa";
    }else{
        contador108 = 0;
        audio108.pause();
        playPauseP108.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio108.addEventListener("ended", function(){   
        playPauseP108.innerHTML = "Play";
        contador108 = 0;
        audio108.currentTime = 0;
    });

}

var audio109 = document.getElementById('audio109');
var playPauseP109 = document.getElementById('playPauseP109');
var contador109 = 0;

function playPause109(){
    if(contador109 == 0){
        contador109 = 1;
        audio109.play();
        playPauseP109.innerHTML = "Pausa";
    }else{
        contador109 = 0;
        audio109.pause();
        playPauseP109.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio109.addEventListener("ended", function(){   
        playPauseP109.innerHTML = "Play";
        contador109 = 0;
        audio109.currentTime = 0;
    });

}

var audio110 = document.getElementById('audio110');
var playPauseP110 = document.getElementById('playPauseP110');
var contador110 = 0;

function playPause110(){
    if(contador110 == 0){
        contador110 = 1;
        audio110.play();
        playPauseP110.innerHTML = "Pausa";
    }else{
        contador110 = 0;
        audio110.pause();
        playPauseP110.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio110.addEventListener("ended", function(){   
        playPauseP110.innerHTML = "Play";
        contador110 = 0;
        audio110.currentTime = 0;
    });

}

var audio111 = document.getElementById('audio111');
var playPauseP111 = document.getElementById('playPauseP111');
var contador111 = 0;

function playPause111(){
    if(contador111 == 0){
        contador111 = 1;
        audio111.play();
        playPauseP111.innerHTML = "Pausa";
    }else{
        contador111 = 0;
        audio111.pause();
        playPauseP111.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio111.addEventListener("ended", function(){   
        playPauseP111.innerHTML = "Play";
        contador111 = 0;
        audio111.currentTime = 0;
    });

}

var audio112 = document.getElementById('audio112');
var playPauseP112 = document.getElementById('playPauseP112');
var contador112 = 0;

function playPause112(){
    if(contador112 == 0){
        contador112 = 1;
        audio112.play();
        playPauseP112.innerHTML = "Pausa";
    }else{
        contador112 = 0;
        audio112.pause();
        playPauseP112.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio112.addEventListener("ended", function(){   
        playPauseP112.innerHTML = "Play";
        contador112 = 0;
        audio112.currentTime = 0;
    });

}

var audio113 = document.getElementById('audio113');
var playPauseP113 = document.getElementById('playPauseP113');
var contador113 = 0;

function playPause113(){
    if(contador113 == 0){
        contador113 = 1;
        audio113.play();
        playPauseP113.innerHTML = "Pausa";
    }else{
        contador113 = 0;
        audio113.pause();
        playPauseP113.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio113.addEventListener("ended", function(){   
        playPauseP113.innerHTML = "Play";
        contador113 = 0;
        audio113.currentTime = 0;
    });

}

var audio114 = document.getElementById('audio114');
var playPauseP114 = document.getElementById('playPauseP114');
var contador114 = 0;

function playPause114(){
    if(contador114 == 0){
        contador114 = 1;
        audio114.play();
        playPauseP114.innerHTML = "Pausa";
    }else{
        contador114 = 0;
        audio114.pause();
        playPauseP114.innerHTML = "Play";
        /*audio.currentTime = 0; Inicia desde el principio el sonido*/
    }

    /*Funcion para cuando termine un audio poner un mensaje para volver a escuchar 
    (parece un nuevo boton pero no se ve por que esplay nuevamenete y se vuelve un bucle)*/
    audio114.addEventListener("ended", function(){   
        playPauseP114.innerHTML = "Play";
        contador114 = 0;
        audio114.currentTime = 0;
    });

}
