console.log('Hola Mundo');
//INDICADOR DE MENU
const secciones = document.querySelectorAll('seccion');
const menuItems = document.querySelectorAll('.menu_item');

const functionObserver = entries =>{
    entries.forEach(entry =>{
        if (entry.isIntesecting){
            const itemActual = Array.from(menuItems).find(item => item.dataset.url === entry.target.id)
            itemActual,classList.add('active')
            for(const item of menuItems){
                if(item != itemActual){
                    item.classList.remove('active')
                }
            }
        }
    })
}

const observer = new IntersectionObserver(functionObserver,{
    root:null,
    rootMargin: '0px',
    threshold:0.8
})

secciones.forEach(seccion => observer.observe(seccion));




