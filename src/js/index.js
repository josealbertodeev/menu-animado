const navBar = document.querySelector('.navbar');
const allList = document.querySelectorAll('li');

allList.forEach((li, index) => {

    li.addEventListener('click', clique => {
        navBar.querySelector(".active-list").classList.remove("active-list");
        li.classList.add("active-list");

        const indicador = document.querySelector(".indicador");
        indicador.style.transform = `translateX(calc(${index * 80}px))`;
    })

})