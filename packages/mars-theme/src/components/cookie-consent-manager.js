import { useEffect, useState } from 'react'
import { connect, styled } from 'frontity';
import CookieConsent from 'react-cookie-consent';
import exitIntentCookies from '../utils/cookie-handler';
import Link from "./link";

const CookieConsentManager = ({state, actions}) => {
    const [showCookieOptions, setCookieOptions] = useState(false)
    const [configOpened, setOpenedConfig] = useState(false)
 
    useEffect(() => {
        if(exitIntentCookies.getCookie('CookieConsent')==='true'){
            actions.theme.enableAnalytics()   
        }
    }, [configOpened])

    return (
        <>
        <CookieConsent 
            style={{ 
                background: 'var(--dark-gray-transparent)',
                fontSize: '0.95rem'}}
            buttonStyle={{ 
                background: 'var(--mustard-yellow)', 
                fontSize: '1rem',
                borderRadius: '4px',
                padding: '1rem' }}
            buttonText={configOpened?'Aceptar solo cookies seleccionadas':'Aceptar cookies'} 
            onAccept={configOpened? actions.theme.processCookieConsent: actions.theme.enableAnalytics}
            enableDeclineButton={false}
            declineButtonText='Declinar'
            declineButtonStyle={{ 
                fontSize: '1rem',
                borderRadius: '4px',
                background: '#00000000',
                border: '1px solid var(--red)',
                color: 'var(--red)',
                padding: '1rem' }}>
            ¡Hola! Como en todos los sitios web, uso cookies con propósitos estadísticos. Puedes leer más al respecto en la  <strong><Link link={'/politica-de-cookies/'}>política de cookies.</Link></strong> Da click en el botón amarillo para dejarme saber que estás de acuerdo.{' '}
        <div onClick={() => {setCookieOptions(!showCookieOptions); setOpenedConfig(!configOpened)}}><strong>{showCookieOptions? "Cerrar configuración":"Ver Configuración"}</strong></div>
        {showCookieOptions && <div><label><CookieOptions onChange={() => {}} type="checkbox" checked={true} value="site" disabled /> Cookies necesarias para el funcionamiento del sitio</label></div>}
        {showCookieOptions && <div><label><CookieOptions onChange={actions.theme.toggleAnalytics} type="checkbox" checked={state.analytics.pageviews.googleAnalytics} value={"ga"} /> Google analytics</label></div>}
        </CookieConsent>
        </>
        )
}
export default connect(CookieConsentManager);


const CookieOptions = styled.input`
`;