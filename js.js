const downArrow = document.querySelectorAll('.down-arrow')
const containerFotoBrazo = document.querySelector('.container-foto-brazo')
const containerFotoCapsula = document.querySelector('.container-foto-capsula')
const containerFotoGoteo = document.querySelector('.container-foto-goteo')
const containerFotoItaliana = document.querySelector('.container-foto-italiana')
const cafeterasAcordeon = document.querySelector('.cafeteras-acordeon')
const downArrowCafeteras = document.querySelector('.down-arrow-cafeteras')
const downArrowCafeterasResponsive = document.querySelector(".down-arrow-cafeteras-responsive")
const downArrowCafeterasCapsulas = document.querySelector('.down-arrow-cafeteras-capsulas')
const hamburguer = document.querySelector('.hamburguer')
const cafeterasAcordeonResponsive = document.querySelector(".cafeteras-acordeon-responsive")
const cafeteras = document.querySelector(".cafeteras")
const cross = document.querySelector('.cross')
 
hamburguer.addEventListener('click', ()=>{

            document.querySelector(".menu-tipos-responsive").classList.toggle('grow')
            hamburguer.style.visibility = 'hidden'

            cross.style.visibility = 'visible'
        })
cross.addEventListener('click', ()=>{


    document.querySelector(".menu-tipos-responsive").classList.remove('grow')
    console.log('click')
    hamburguer.style.visibility = 'visible'
    cross.style.visibility = 'hidden'


})


downArrow.forEach(element => element.addEventListener('click' , ()=>{

    if(element.classList.contains('one-arrow'))
     {   document.querySelector('.acordeon-p-one').classList.toggle('auto')
        document.querySelector('.one-arrow ').classList.toggle('degree')}
        else if (element.classList.contains('two-arrow'))
        {document.querySelector('.acordeon-p-two').classList.toggle('auto')
        document.querySelector('.two-arrow ').classList.toggle('degree')}
            else
        {document.querySelector('.acordeon-p-three').classList.toggle('auto')
        document.querySelector('.three-arrow').classList.toggle('degree')}
    

       
})
   )

   downArrowCafeteras.addEventListener('click', ()=>{
  
    cafeterasAcordeon.classList.toggle('start')
   })
 
   

   
   downArrowCafeterasResponsive.addEventListener('click', ()=>{
  
    cafeterasAcordeonResponsive.classList.toggle('start-responsive')
 
    
   })
//    downArrowCafeterasCapsulas.addEventListener('click', ()=>{
   
//     cafeterasAcordeon.classList.toggle('start')
//    })

        containerFotoBrazo.addEventListener('click', ()=>{
        location.href='./express-manual.html'
      
    })
        
        containerFotoCapsula.addEventListener('click', ()=>{
        location.href='./capsulas.html'})
        containerFotoGoteo.addEventListener('click', ()=>{
        location.href='./goteo.html'})
        containerFotoItaliana.addEventListener('click', ()=>{
        location.href='./italianas.html'})

      