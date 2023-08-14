function AddUser(){

    p1name = document.getElementById("user1").value;
    p2name = document.getElementById("user2").value;

    localStorage.setItem ("Player 1 Name", p1name);
    localStorage.setItem ("Player 2 Name", p2name);

    window.location.replace("game_page.html");
}