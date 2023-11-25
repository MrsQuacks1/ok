function NOse() {
    player1_name=document.getElementById("I").value;
    player2_name=document.getElementById("okk").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location="ok.html"
}