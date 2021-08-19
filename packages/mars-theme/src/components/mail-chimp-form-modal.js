import { styled, connect } from "frontity";
import { useEffect } from "react";
import MailChimpSubscribeForm from "./mail-chimp-form";
import { Icon } from 'react-icons-kit'
import { androidClose } from 'react-icons-kit/ionicons/androidClose'

const MailChimpSubscribeFormModal = ({ state, actions }) => {
    const { showMailChimpForm } = state.theme;
    useEffect(() => {
        const mailChimpTimeout = setTimeout(() => actions.theme.openMailChimpForm(), state.theme.mailChimp.delayModalShowUpInSeconds*1000);
        return () => clearTimeout(mailChimpTimeout);
    }, [])
    return (
        // This ternary prevents the form to be rendered twice at start which prevents a double aria-label
        showMailChimpForm?<ExitIntentPopup showMailChimpForm={showMailChimpForm}>
            <Newsletter>
                <Close onClick={actions.theme.closeMailChimpForm}><Icon icon={androidClose} size={24}/></Close>
                <MailChimpSubscribeForm/>
            </Newsletter>
        </ExitIntentPopup>:null
        )
};

export default connect(MailChimpSubscribeFormModal);

const Newsletter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding:50px;
    background-color: var(--dark-gray-transparent);
    border-radius: 4px;
    @media (max-width: 760px) {
        width: 80%;
      }
`

const ExitIntentPopup = styled.div(props=>({
     position: 'fixed',
     top: 0,
     left: 0,
     bottom: 0,
     right: 0,
     background: 'var(--dark-gray-transparent)',
     transform: props.showMailChimpForm? "translateY(0) scale(1)" : "translateY(60%) scale(0)",
     transition: 'transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
     boxShadow: '4px 4px 13px 0px rgba(24,24,24,1)',
     zIndex: '5'
}))


const Close = styled.div`
    position: fixed;
    top: 25px;
    right: 25px;
`