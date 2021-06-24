import { styled, connect } from "frontity";
import { useState } from 'react';

const MailChimpSubscribeForm = ({ state, actions }) => {
    const [signupFormData, setSignupFormData] = useState({FNAME: "", EMAIL: ""});

    const handleInput = (event) => {
        setSignupFormData({...signupFormData, [event.target.name]: event.target.value})
    }

    return (
        <div id="mc_embed_signup">
        <form action={state.theme.mailChimp.formUrl} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate="">
            <MCEmbedSignupScroll>
            <h2>¿Te sirvió el contenido?</h2>
            <p>Recibe más contenido gratuito y en español como este en tu correo electrónico. Suscríbete, te toma unos segundos y puedes cancelar cuando quieras</p>
            <IndicatedRequired><span className="asterisk">*</span> Campo obligatorio</IndicatedRequired>
            <MCFieldGroup>
                <label htmlFor="mce-EMAIL">Email  <span className="asterisk">*</span>
            </label>
                <MCInput type="email" placeholder="Tu email" value={signupFormData.EMAIL} onChange={handleInput} name="EMAIL" className="required email" id="mce-EMAIL"/>
            </MCFieldGroup>
            <MCFieldGroup>
                <label htmlFor="mce-FNAME">Tu nombre  <span className="asterisk">*</span>
            </label>
                <MCInput type="text" placeholder="Tu nombre" value={signupFormData.FNAME} onChange={handleInput} name="FNAME" className="required" id="mce-FNAME"/>
            </MCFieldGroup>
                <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                    <div className="response" id="mce-success-response" style={{display:"none"}}></div>
                </div>
                <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                <input type="text" onChange={handleInput} name={state.theme.mailChimp.formHiddenField} tabIndex="-1" value=""/>
                </div>
                <div className="clear">
                    <SubscribeButton type="submit" value="Sí, suscríbeme gratis" name="subscribe"/>
                    <CloseButton onClick={actions.theme.closeMailChimpForm}>Cerrar</CloseButton>
                </div>
                </MCEmbedSignupScroll>
        </form>
        </div>
        )
};

export default connect(MailChimpSubscribeForm);

const SubscribeButton = styled.input`
    font-size: 1rem;
    padding: 1rem;
    background-color: #F3B433;
    border: 0px solid;
    color: #181818;
    border-radius: 4px;
    margin: 10px 0;
    outline: none;
`;

const MCFieldGroup = styled.div`
    margin: 14px 0;
    width: 100%;
`;

const IndicatedRequired = styled.div`
    font-size: 0.9rem;
`;

const MCInput = styled.input`
    display: block;
    padding: 1rem 0;
    width: 100%;
    margin: 1rem 0;
    color: #181818;
    text-indent:1rem;
`;

const CloseButton = styled.button`
    font-size: 1rem;
    padding: 1rem;
    background-color: #3370f3;
    border: 0px solid;
    border-radius: 4px;
    margin: 10px 1rem;
    outline: none;
    color:white;
`;

const MCEmbedSignupScroll = styled.div`
    
`;
