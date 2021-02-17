import { styled, connect } from "frontity";
import { useEffect } from "react";
import MailChimpSubscribeForm from "./mail-chimp-form";

const MailChimpSubscribeFormModal = ({ state, actions }) => {
    const { showMailChimpForm } = state.theme;
    useEffect(() => {
        const mailChimpTimeout = setTimeout(()=>actions.theme.openMailChimpForm(), state.theme.mailChimp.delayModalShowUpInSeconds*1000);
        return () => clearTimeout(mailChimpTimeout);
    }, [])
    return (
        <ExitIntentPopup showMailChimpForm={showMailChimpForm}>
            <Newsletter><Close onClick={actions.theme.closeMailChimpForm}>x</Close>
                <MailChimpSubscribeForm/>
            </Newsletter>
        </ExitIntentPopup>
        )
};

export default connect(MailChimpSubscribeFormModal);

const Newsletter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding:50px;
    background-color: #181818;
    border-radius: 4px;
`

const ExitIntentPopup = styled.div(props=>({
     position: 'fixed',
     top: 0,
     left: 0,
     bottom: 0,
     right: 0,
     background: 'rgba(33, 33, 33, 0.8)',
     transform: props.showMailChimpForm? "translateY(0) scale(1)" : "translateY(60%) scale(0)",
     transition: 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
     boxShadow: '4px 4px 13px 0px rgba(24,24,24,1)'
}))


const Close = styled.div`
    position: fixed;
    top: 25px;
    right: 25px;
`