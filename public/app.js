let button_1 = document.querySelector("#button_1");
button_1.addEventListener('click', function () {
    window.location.href="https://en.wikipedia.org/wiki/Reversi";
});

let button_2 = document.querySelector("#button_2");
button_2.addEventListener('click', function () {
    window.location.href="https://documentation.help/Reversi-Rules/rules.htm";
});

let button_3 = document.querySelector("#button_3");
button_3.addEventListener('click', function () {
    window.location.href="https://www.youtube.com/watch?v=jlll7wfEKaI";
});

let socket = io();

socket.on('connect', () => {
    console.log('Connected');
});

let room_btn = document.querySelector("#room_btn");
room_btn.addEventListener('click', function () {
    window.location.href="/private";
});


//listen for data form the server
socket.on('draw-data',(data)=>{
    console.log(data);
})