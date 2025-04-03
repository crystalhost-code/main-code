function mobile_navbar_link_hider() {
    
    var x = document.getElementById("mobile_navbar_links");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
    x.classList.toggle("show"); 
} 