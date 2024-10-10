let lastKnownScrollPosition = 0;
let ticking = false;

function updateFloatingBox(scrollPos) {
    const floatingBox = document.getElementById('floating-box');
    const section1 = document.querySelector('.section1');
    const section2 = document.querySelector('.section2');
    const section3 = document.querySelector('.section3');

    const section1Top = section1.getBoundingClientRect().top;
    const section2Top = section2.getBoundingClientRect().top;
    const section3Top = section3.getBoundingClientRect().top;

    // Cambia el contenido, posición, color del texto y la fuente basados en la sección
    if (section1Top <= window.innerHeight / 2 && section1Top > -section1.clientHeight / 2) {
        floatingBox.innerHTML = 'Domicilios';
        floatingBox.style.top = '30%'; // Cambia la posición top
        floatingBox.style.left = '55%'; // Cmbia la posición left
        floatingBox.style.right= '20%';
        floatingBox.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Color de fondo
        floatingBox.style.color = '#fff'; // Color del texto
        floatingBox.style.fontFamily = "'Arial', sans-serif"; // Fuente
    } else if (section2Top <= window.innerHeight / 2 && section2Top > -section2.clientHeight / 2) {
        floatingBox.innerHTML = 'Restaurantes';
        floatingBox.style.top = '50%'; // Cambia la posición más abajo
        floatingBox.style.left = '100px'; // Ajuste de la posición en x
        floatingBox.style.backgroundColor = 'rgba(200, 200, 255, 0.8)'; // Otro color de fondo
        floatingBox.style.color = '#fff'; // Cambia el color del texto a blanco
        floatingBox.style.fontFamily = "'Courier New', monospace"; // Cambia la fuente
    } else if (section3Top <= window.innerHeight / 2 && section3Top > -section3.clientHeight / 2) {
        floatingBox.innerHTML = 'Tiendas';
        floatingBox.style.top = '80%'; // Lo ubicamos en la parte inferior
        floatingBox.style.left = '300px'; // Ajuste de la posición en x
        floatingBox.style.backgroundColor = 'rgba(255, 200, 200, 0.8)'; // Otro color de fondo
        floatingBox.style.color = '#000'; // Cambia el color del texto a negro
        floatingBox.style.fontFamily = "'Times New Roman', serif"; // Cambia la fuente
    }
}

window.addEventListener('scroll', function() {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function() {
            updateFloatingBox(lastKnownScrollPosition);
            ticking = false;
        });

        ticking = true;
    }
});
