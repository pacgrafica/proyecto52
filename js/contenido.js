const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
    
    // Alternamos estilos para el menú y el body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    //Atributo para el ícono del menú
    const rutaActual = e.target.getAttribute('src');
    
    if(rutaActual == 'images/menu.png'){
        e.target.setAttribute('src', 'menu2.png');
    }else{
        e.target.setAttribute('src', 'images/menu.png');
    }
});