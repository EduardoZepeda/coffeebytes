import { styled, connect, css } from "frontity";
import { useState } from 'react';

const MailChimpSubscribeForm = ({ state, actions, formTitle=null, formDescription=null }) => {
    const iconSize = 36;
    const [signupFormData, setSignupFormData] = useState({FNAME: "", EMAIL: ""});
    const title = formTitle || "¿Ya formas parte de mi comunidad de lectores?"
    const description = formDescription || "Únete y recibe contenido como este una vez por semana directo en tu correo electrónico. ¿No? Que tal si me sigues en Instagram"
    const handleInput = (event) => {
        setSignupFormData({...signupFormData, [event.target.name]: event.target.value})
    }

    return (
        <FormContainer formTitle={formTitle} id="mc_embed_signup">
        <form action={state.theme.mailChimp.formUrl} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate="">
            <MCEmbedSignupScroll>
            <h2>{title}</h2>
            <p>{description}</p>
            <IndicatedRequired><span className="asterisk">*</span> Campo obligatorio</IndicatedRequired>
            <MCFieldGroup>
                <label htmlFor="mce-EMAIL">Email  <span className="asterisk">*</span>
            </label>
                <MCInput type="email" placeholder="Tu email" aria-label="Campo de email" value={signupFormData.EMAIL} onChange={handleInput} name="EMAIL" className="required email" id="mce-EMAIL"/>
            </MCFieldGroup>
            <MCFieldGroup>
                <label htmlFor="mce-FNAME">Tu nombre  <span className="asterisk">*</span>
            </label>
                <MCInput type="text" placeholder="Tu nombre" aria-label="Campo de nombre" value={signupFormData.FNAME} onChange={handleInput} name="FNAME" className="required" id="mce-FNAME"/>
            </MCFieldGroup>
                <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                    <div className="response" id="mce-success-response" style={{display:"none"}}></div>
                </div>
                <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                <input type="text" onChange={handleInput} name={state.theme.mailChimp.formHiddenField} tabIndex="-1" value=""/>
                </div>
                <div className="clear">
                    <SubscribeButton type="submit" value="Quiero suscribirme" name="subscribe"/>
                    {formTitle? null: <CloseButton onClick={actions.theme.closeMailChimpForm}>Cerrar</CloseButton>}
                </div>
                </MCEmbedSignupScroll>
        </form>
        </FormContainer>
        )
};

export default connect(MailChimpSubscribeForm);

const FormContainer = styled.div`
    ${props => props.formTitle ? css`
        padding: 2rem 4rem;
        background: rgb(3,52,95);
        background: -moz-linear-gradient(90deg, rgba(3,52,95,1) 0%, rgba(0,66,117,1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(3,52,95,1) 0%, rgba(0,66,117,1) 100%);
        background: linear-gradient(90deg, rgba(3,52,95,1) 0%, rgba(0,66,117,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#03345f",endColorstr="#004275",GradientType=1); 
        border-radius: 4px;
    `:null};
`

const SubscribeButton = styled.input`
    font-size: 1rem;
    padding: 1rem;
    background-color: var(--blue);
    border: 0px solid;
    color: var(--white);
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
    color: var(--dark-gray);
    text-indent:1rem;
`;

const CloseButton = styled.button`
    font-size: 1rem;
    padding: 1rem;
    background-color: var(--red);
    border: 0px solid;
    border-radius: 4px;
    margin: 10px 1rem;
    outline: none;
    color: var(--white);
`;

const MCEmbedSignupScroll = styled.div`
    
`;
