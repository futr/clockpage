let startTime = undefined;

function updateClock()
{
    let time = new Date();
    let nowStr = dateFns.format(time, 'HH:mm:ss', {locale: dateFns.ja});

    let currentElem = document.getElementById( "currentTime" );
    let countUpElem = document.getElementById( "countUp" );

    currentElem.innerText = nowStr;
    
    if ( startTime != null ) {
        let sec = dateFns.differenceInSeconds( time, startTime );
        
        let h = Math.floor( sec / 3600 );
        let m = Math.floor( ( sec % 3600 ) / 60 );
        let s = sec % 60;
        
        h = ( '0' + h ).slice( -2 );
        m = ( '0' + m ).slice( -2 );
        s = ( '0' + s ).slice( -2 );
        
        countUpStr = h + ":" + m + ":" + s;
        
        countUpElem.textContent = countUpStr;
    } else {
        countUpElem.textContent = "";
    }
}

window.addEventListener( "DOMContentLoaded", () => {
    document.getElementById( "startButton" ).onclick = e => {
        startTime = new Date();
        updateClock();
    };
    
    document.getElementById( "clearButton" ).onclick = e => {
        startTime = undefined;
        updateClock();
    };

    setInterval( updateClock, 1000 );
});

