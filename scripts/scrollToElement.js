const scrollToElement = (id) =>{
    let element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth"})
}

//użytkownik zostanie przekierowany do elementu na stronie o podanym id