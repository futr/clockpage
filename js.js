let startTime = undefined;

function updateClock()
{
    let time = new Date();
    let nowStr = dateFns.format(time, 'HH:mm:ss', {locale: dateFns.ja});

    let currentElem = document.getElementById( "currentTime" );

    currentElem.innerText = nowStr;
    
    if ( startTime != null ) {
        let countUpElem = document.getElementById( "countUp" );
        let countUpSec = dateFns.differenceInSeconds( time, startTime );
        let countUpStr = new Date( countUpSec * 1000 ).toISOString().substr( 11, 8 );
        countUpElem.innerText = countUpStr;
    }
}

window.addEventListener( "DOMContentLoaded", () => {
    document.getElementById( "startButton" ).onclick = e => {
        startTime = new Date();
        
    };

    setInterval( updateClock, 500 );
});

