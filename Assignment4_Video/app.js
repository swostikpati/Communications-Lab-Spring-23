window.addEventListener('load', () => {
    video_player1.style.display = 'block';
});

video_player1.addEventListener('ended', function () {
    menu1.style.display = 'flex';
});

video_player2.addEventListener('ended', function () {
    menu2.style.display = 'flex';
});

video_player3.addEventListener('ended', function () {
    menu3.style.display = 'flex';
});

video_player4.addEventListener('ended', function () {
    menu4.style.display = 'flex';
});

video_player5.addEventListener('ended', function () {
    video_player5.style.display = 'none';
    respect.style.display = 'flex';
    respect.play();
});

video_player7.addEventListener('ended', function () {
    video_player7.style.display = 'none';
    respect.style.display = 'flex';
    respect.play();
});

video_player9.addEventListener('ended', function () {
    video_player9.style.display = 'none';
    respect.style.display = 'flex';
    respect.play();
});

video_player6.addEventListener('ended', function () {
    video_player6.style.display = 'none';
    wasted.style.display = 'flex';
    wasted.play();
});

video_player8.addEventListener('ended', function () {
    video_player8.style.display = 'none';
    wasted.style.display = 'flex';
    wasted.play();
});

video_player10.addEventListener('ended', function () {
    video_player10.style.display = 'none';
    wasted.style.display = 'flex';
    wasted.play();
});

vd_studio.addEventListener('click', function () {
    video_player1.style.display = 'none';
    menu1.style.display = "none";
    video_player2.style.display = 'block';
    video_player2.play();
});

im_lab.addEventListener('click', function () {
    video_player1.style.display = 'none';
    menu1.style.display = "none";
    video_player3.style.display = 'block';
    video_player3.play();
});

lobby.addEventListener('click', function () {
    video_player1.style.display = 'none';
    menu1.style.display = "none";
    video_player4.style.display = 'block';
    video_player4.play();
});

vd_studio_sleep.addEventListener('click', function () {
    video_player2.style.display = 'none';
    menu2.style.display = "none";
    video_player5.style.display = 'block';
    video_player5.play();
});

vd_studio_work.addEventListener('click', function () {
    video_player2.style.display = 'none';
    menu2.style.display = "none";
    video_player6.style.display = 'block';
    video_player6.play();
});


im_lab_inside.addEventListener('click', function () {
    video_player3.style.display = 'none';
    menu3.style.display = "none";
    video_player7.style.display = 'block';
    video_player7.play();
});

im_lab_outside.addEventListener('click', function () {
    video_player3.style.display = 'none';
    menu3.style.display = "none";
    video_player8.style.display = 'block';
    video_player8.play();
});

lobby_punch.addEventListener('click', function () {
    video_player4.style.display = 'none';
    menu4.style.display = "none";
    video_player9.style.display = 'block';
    video_player9.play();
});

lobby_getpunched.addEventListener('click', function () {
    video_player4.style.display = 'none';
    menu4.style.display = "none";
    video_player10.style.display = 'block';
    video_player10.play();
});

const replayButton = document.getElementById("replay-button");

replayButton.addEventListener("click", function() {
  location.reload();
});
