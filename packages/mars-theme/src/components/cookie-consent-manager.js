import { useEffect } from 'react'
import CookieConsent from 'react-cookie-consent';
import { connect } from 'frontity';
import exitIntentCookies from '../utils/cookie-handler';
import Link from "./link";

const CookieConsentManager = ({state, actions}) => {

    useEffect(() => {
        if(exitIntentCookies.getCookie('CookieConsent')==='true'){
            actions.theme.enableAnalytics()   
        }
    }, [])

    return (
        <CookieConsent 
            style={{ 
                background: 'var(--dark-gray-transparent)',
                fontSize: '0.95rem'}}
            buttonStyle={{ 
                background: 'var(--mustard-yellow)', 
                fontSize: '1rem',
                borderRadius: '4px',
                padding: '1rem' }}
            buttonText='Aceptar cookies' 
            onAccept={() => { actions.theme.enableAnalytics() }}
            enableDeclineButton
            declineButtonText='Denegar'
            declineButtonStyle={{ 
                fontSize: '1rem',
                borderRadius: '4px',
                background: '#00000000',
                border: '1px solid var(--red)',
                color: 'var(--red)',
                padding: '1rem' }}>
            ¡Hola! Como en todos los sitios web, uso cookies con propósitos estadísticos. Las únicas cookies que recibirás son las de Google analytics. Puedes leer más en la  <Link link={'/politica-de-cookies/'}>política de cookies.</Link> Da click en el botón amarillo para dejarme saber que estás de acuerdo.{' '}
        </CookieConsent>
        )
}
export default connect(CookieConsentManager);