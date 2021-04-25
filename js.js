let startTime = undefined;

function updateClock()
{
    let time = new Date();
    let nowStr = dateFns.format(time, 'HH:mm:ss', {locale: dateFns.ja});

    let currentElem = document.getElementById( "currentTime" );

    currentElem.innerText = nowStr;
}

window.addEventListener( "DOMContentLoaded", () => {

    // Stop button
    //document.getElementById( "stopBtn" ).onclick = e => {
    //    janus.destroy();
    //};

    setInterval( updateClock, 500 );
});

