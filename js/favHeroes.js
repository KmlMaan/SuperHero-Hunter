const favHeroContainer = document.getElementById("fav-hero-container");
const body = document.getElementsByTagName("body")[0];
var favHeroes = JSON.parse(localStorage.getItem("favHeroes"));

// showing the list of all the charcters that are hearted(favourite)
if(favHeroes.length == 0){
    let div = document.createElement('div');
    div.innerHTML = '<h2>No Super Heroes added yet.</h2>';
    favHeroContainer.appendChild(div);
}else{
    for(let i of favHeroes){
        let div = document.createElement('div');
        div.innerHTML = '<img src="'+i.photoUrl+'" alt="" class="favImage"><h3>'+i.name+'</h3><div class="removeFav" data-id="'+i.id+'">delete</div>';
        favHeroContainer.appendChild(div);
    }
    
    // to remove the character from the favourite page
    const removeButtons = document.getElementsByClassName("removeFav");
    for(let i of removeButtons){
        i.addEventListener("click", function(){
            function remove(value){
                return this.dataset.id != value.id;
            }
            favHeroes = favHeroes.filter(remove.bind(i));
            localStorage.setItem('favHeroes', JSON.stringify(favHeroes));
            location.reload();
        });
    }

}