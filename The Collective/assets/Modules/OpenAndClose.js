
export default class OpenAndClose {

    static openApp(active,modal,card,container) {
        active.classList.add('off');
        container.classList.add(card.dataset.modalTarget);
        setTimeout(() => {
            modal.classList.add('active');
        },200);
    }

    static closeApp(active,modal,btn,container) {
        modal.classList.remove('active');       
        setTimeout(function() {
            active.classList.remove('off');
            container.classList.remove(btn.dataset.modalTarget);
        },500);
    }

    static openError(text,backgroundColor) {
        const error = document.getElementById("error");
        error.getElementsByTagName("h3")[0].innerText = text;
        error.style.backgroundColor = backgroundColor;
        error.classList.add('active');
        document.getElementById("overlay").classList.add("active");
    }

    static closeError() {
        const error = document.getElementById("error");
        error.classList.remove('active');
        document.getElementById("overlay").classList.remove("active");
    }

}