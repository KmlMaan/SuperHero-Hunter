const name = document.getElementById("name");
const photo = document.getElementById("photo");
const power = document.getElementById("power");
const bio = document.getElementById("bio");

// Requesting and fetching the API
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(xhttp.responseText);
        if(response.response === "error"){
            console.log("error fetching data");
            return;
        }

        //To show the fetched data on the screen
        name.innerHTML = response.name;
        photo.setAttribute("src", response.image.url);
        power.innerHTML = '<h1>POWER</h1><h4>Intelligence: '+response.powerstats.intelligence+'</h4><h4>strength: '+response.powerstats.strength+'</h4><h4>Speed: '+response.powerstats.speed+'</h4><h4>Durability: '+response.powerstats.durability+'</h4><h4>Power: '+response.powerstats.power+'</h4><h4>Combat: '+response.powerstats.combat+'</h4>';
        console.log(response.biography.full-name);
        bio.innerHTML = '<h1>BIOGRAPHY</h1><h4>Full-Name: '+response.biography.full-name+'</h4><h4>Alter-Egos: '+response.biography.alter-egos+'</h4><h4>Place-of-birth: '+response.biography.place-of-birth+'</h4><h4>First-Appearence: '+response.biography.first-appearence+'</h4><h4>Publisher: '+response.biography.publisher+'</h4><h4>Alignment: '+response.biography.alignment+'</h4>';
    }
};
//API ID :  1205027906722904
xhttp.open("GET", "https://www.superheroapi.com/api.php/1205027906722904/"+localStorage.getItem("heroSelected"), true);
xhttp.send();