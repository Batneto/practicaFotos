//* VARIABLES
const boton=document.querySelector("#boton")
const divFotos=document.querySelector("#divfotos")
const divGrande=document.querySelector("#fotoGrande")
const fragment= document.createDocumentFragment()



  let arrayFotos = [{
        id:"f-1",
        titulo:"imagen 1",
        src:"img/banner/1.jpg",
    },
    {
        id:"f-2",
        titulo:"imagen 2",
        src:"img/banner/2.jpg",
    },
    {
        id:"f-3",
        titulo:"imagen 3",
        src:"img/banner/3.jpg",
    },
    {
        id:"f-4",
        titulo:"imagen 4",
        src:"img/banner/4.jpg",
    },
    ];

//* EVENTOS
boton.addEventListener('click', (ev) => {
  pintarFotos()
});
document.addEventListener(`click`,({target})=>{
  if(target.matches(`.fotos`)){
    const id =target.parentElement.id
    
    encontrarFotoGrande(id)
  }
})




//* FUNCIONES


const pintarFotos=()=>{ 
    
    divFotos.innerHTML=""
    arrayFotos.forEach(({id,titulo,src}) => {
        
        const caja=document.createElement('DIV')
        const titulofoto = document.createElement("h3");
        titulofoto.textContent = titulo;
        const img = document.createElement("img");
        img.classList.add('fotos');
        caja.id=id
        img.src = src;
        

        caja.append(titulofoto,img)

        fragment.append(caja)
       
      });
      divFotos.append(fragment);
    }

const encontrarFotoGrande=(numero)=>{

const fotoEncontrada=arrayFotos.find(element => element.id == numero);
   pintarfotoGrande(fotoEncontrada)
  
 }  
 
const pintarfotoGrande=(objeto)=>{
      divGrande.innerHTML=""
      const titulofoto = document.createElement("h3");
      titulofoto.textContent =objeto.titulo;
     const img = document.createElement("img");
        img.src = objeto.src;
        

        divGrande.append(titulofoto,img)
}