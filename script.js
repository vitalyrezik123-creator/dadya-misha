function  show_weather() {
    document.getElementById("weather").style.display="inline"
    document.getElementById("main").style.display="none"

    document.getElementById("horoscope").style.display="none"
}

function show_news() {
    document.getElementById("main").style.display="block"
    document.getElementById("weather").style.display="none"

    document.getElementById("horoscope").style.display="none"
}


function show_horoscope() {
    document.getElementById("horoscope").style.display="block"
    document.getElementById("main").style.display="none"
    document.getElementById("weather").style.display="none"
    
}

function show_text(element){
    let text = element.querySelector(".text")
    if (text.style.display === "none"){
    text.style.display = "block"
    } else {
        text.style.display ="none"
    }
    
}