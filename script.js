let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('#menu');
let croos = document.querySelector('#cross');
let sidebar = document.querySelector('.sidebar');
let sidebargo = document.querySelector('.sidebargo');

cross.style.display = 'none';

hamburger.addEventListener("click", () => {

    sidebar.classList.toggle('sidebargo');
    if(sidebar.classList.contains('sidebargo')){
        menu.style.display = 'inline';
        cross.style.display = 'none';

    }else{
        cross.style.display = 'inline';
        menu.style.display = 'none';
    }

    console.log("menu was clicked");

});