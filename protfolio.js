// Menu Opening 

// function 
const ShoeMenu = (Toggleid,Navid) => {
    const toggle = document.getElementById(Toggleid),nav = document.getElementById(Navid)

    if(toggle && nav){
        toggle.addEventListener('click',() => {
            nav.classList.toggle('show') // Toggle('show') is a method to toggle an class inside an classList // calling the class in Css
        });
    }
}

ShoeMenu('nav_toggle','nav_menu');

// removing the menu after being clicked 

function removemenu(NavId){

    if(NavId){
        const navmenu = document.getElementById('nav_menu');
        navmenu.addEventListener('click' , () => {navmenu.classList.remove('show')});
        }
}

removemenu('nav_menu');

// END OF JS SCRIPT