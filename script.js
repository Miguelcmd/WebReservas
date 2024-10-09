window.addEventListener('load', function() {
    const postIt = document.getElementById('post-it');
    setTimeout(function() {
        postIt.style.opacity = '1'; // Cambia la opacidad a 1 para que aparezca
    }, 1000); // Aparece después de 1 segundo
});


window.addEventListener('load', function() {
    const postIt = document.getElementById('post-it');

    // Muestra el post-it después de 1 segundo
    setTimeout(function() {
        postIt.style.opacity = '1'; 
    }, 1000);

    // Mueve el post-it con el scroll
    window.addEventListener('scroll', function() {
        let scrollY = window.scrollY;
        
        // Ajusta la posición del post-it a medida que haces scroll
        postIt.style.transform = `translateY(${scrollY}px)`;
    });
});