import React from 'react'; 

export default function KlaroElement({children, kname}) {
    if (typeof window !== "undefined") {
        
        const klaro = window.klaro;

        if(klaro.getManager().consents[kname] === true) {
            return children;
        } else {    
            return (<p>Inhalt blockiert.<br/> Zum Entblocken kannst du <a class="footer__link-item" href="#" id="cookie-settings" onclick="return klaro.show();" >hier</a> deine Cookie Einstellungen ändern</p>);
        }

    // browser code
    } else {
        // server code
        return (<p></p>);
    }

}