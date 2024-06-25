const lampada = document.getElementById ('lampada');

function lampOn () {
        lampada.src = './img/ligada.jpg';
}

function lampOff () {
    if (!lampOn () ) {
        lampada.src = './img/desligada.jpg';
    }
}

lampada.addEventListener ('mouseover', lampOn);
lampada.addEventListener ('mouseleave', lampOff);