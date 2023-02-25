//* VARIABLES
const boton=document.querySelector("#boton")
const divFotos=document.querySelector("#divfotos")
const fragment= document.createDocumentFragment()



  let arrayFotos = [{
        id:"foto1",
        titulo:"imagen 1",
        src:"img/banner/1.jpg",
    },
    {
        id:"foto2",
        titulo:"imagen 2",
        src:"img/banner/2.jpg",
    },
    {
        id:"foto3",
        titulo:"imagen 3",
        src:"img/banner/3.jpg",
    },
    {
        id:"foto4",
        titulo:"imagen 4",
        src:"img/banner/4.jpg",
    },
    ];

//* EVENTOS
boton.addEventListener('click', (ev) => {
  pintarFotos()
});


//* FUNCIONES


const pintarFotos=()=>{ 
    
    divFotos.innerHTML=""
    arrayFotos.forEach(({titulo,src}) => {
        
        const caja=document.createElement('DIV')
        const img = document.createElement("img");
        img.classList.add('fotos');
        img.src = src;
        const titulofoto = document.createElement("h3");
        titulo.textContent = titulo;

        caja.append(img,titulofoto)

        fragment.append(caja)
       
      });
      divFotos.append(fragment);
    }

    console.log(arrayFotos);