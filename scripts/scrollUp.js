const scrollUp = (value)=>{
    window.scrollTo({
        top: value,
        behavior: 'smooth'
    })
}

//uruchomenie funkcji przesuwa stronę na podaną wartość, np. jeśli value =0, 
// użytkownik pojedzie na samą górę strony