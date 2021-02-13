
export default function loadingPage() {
    let welcome = document.querySelector('#welcome');
    let collective = document.querySelector('#collective');

    setTimeout(function() {
        welcome.classList.add('active');
    },2000);

    setTimeout(function() {
        collective.style.color = "rgb(238, 101, 51)";
    },4000);

    setTimeout(function() {
        welcome.classList.remove('active');
        document.querySelector('.active').classList.remove('off');
        document.getElementById('container').classList.remove('loadBack');
    },6000);
}