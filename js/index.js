window.onload = () => {

    let isMenuOpened = false;

    const toogleNavbar = document.querySelector('#toogle-navbar')
    const toogleIcon = document.querySelector('#toogle-icon')
    const navbarElement = document.querySelector('#navbar')

    window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        console.log(scroll)
        if(scroll > 10){
            navbarElement.classList.add("contrast-nav")
        } else {
            navbarElement.classList.remove("contrast-nav")
        }
    });

    toogleNavbar.addEventListener("click", (event) => {
        if(!isMenuOpened) {
            toogleIcon.src = "../assets/svg/xmark.svg"
            navbarElement.classList.add("contrast-nav")

            isMenuOpened = true;
        } else {
            toogleIcon.src = "../assets/svg/menu.svg"
            navbarElement.classList.remove("contrast-nav")

            isMenuOpened = false;
        }
    })

}