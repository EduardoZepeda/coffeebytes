import { styled, connect } from 'frontity'
import { useEffect, useState } from 'react'
import { Icon } from 'react-icons-kit'
import { androidClose } from 'react-icons-kit/ionicons/androidClose'

const MailChimpSubscribeFormModal = ({ state, actions }) => {
  const { showMailChimpForm } = state.theme
  const [signupFormData, setSignupFormData] = useState({ FNAME: '', EMAIL: '' })

  const handleInput = (event) => {
    setSignupFormData({ ...signupFormData, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    const mailChimpTimeout = setTimeout(() => actions.theme.openMailChimpForm(), state.theme.mailChimp.delayModalShowUpInSeconds * 1000)
    return () => clearTimeout(mailChimpTimeout)
  }, [])
  return (
    showMailChimpForm
      ? (
        <Newsletter>
          <MCContainer>
            <MCFormContainer action={state.theme.mailChimp.formUrl} method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' className='validate' target='_blank' noValidate=''>
              <MCInputContainer>
                <h2>Únete a mi newsletter</h2>
                <p> ✅ Más de 100 desarrolladores registrados. Tutoriales gratuitos cada semana directo en tu correo y cero spam</p>
              </MCInputContainer>
              <MCFields>
                <MCInputContainer>
                  <MCLabel htmlFor='mce-FNAME'>¿Cómo te llamas?<span className='asterisk'>*</span>
                  </MCLabel>
                  <MCInput type='text' placeholder='Tu nombre' aria-label='Campo de nombre' value={signupFormData.FNAME} onChange={handleInput} name='FNAME' className='required' id='mce-FNAME' />
                </MCInputContainer>
                <MCInputContainer>
                  <MCLabel htmlFor='mce-EMAIL'>Tu email<span className='asterisk'>*</span>
                  </MCLabel>
                  <MCInput type='email' placeholder='tu@correo.com' aria-label='Campo de email' value={signupFormData.EMAIL} onChange={handleInput} name='EMAIL' className='required email' id='mce-EMAIL' />
                </MCInputContainer>
              </MCFields>
              <div id='mce-responses' className='clear'>
                <div className='response' id='mce-error-response' style={{ display: 'none' }} />
                <div className='response' id='mce-success-response' style={{ display: 'none' }} />
              </div>
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden='true'>
                <input type='text' onChange={handleInput} name={state.theme.mailChimp.formHiddenField} tabIndex='-1' value='' />
              </div>
              <div className='clear'>
                <SubscribeButton type='submit' value='Quiero suscribirme' name='subscribe' />
              </div>
            </MCFormContainer>
            <Close onClick={actions.theme.handleCloseMailChimpForm}><Icon icon={androidClose} size={24} /></Close>
          </MCContainer>
        </Newsletter>)
      : null
  )
}

export default connect(MailChimpSubscribeFormModal)

const Newsletter = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--blue-transparent);
  width: 100%;
  color: var(--white);
  z-index:9;
`

const MCContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const MCFormContainer = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
`

const MCFields = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`

const MCInputContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 0 1rem;
`

const MCInput = styled.input`
  vertical-align: middle;
  padding: 0.5rem 0;
  margin: 1rem 0;
  color: var(--dark-gray);
  text-indent: 0.5rem;
`

const MCLabel = styled.label`
  font-size: 0.9rem;
  color: var(--white);
`

const Close = styled.div`
  color: var(--white);
  display: flex;
  justify-content: flex-end;
`

const SubscribeButton = styled.input`
  font-size: 1rem;
  padding: 1rem;
  background-color: var(--blue);
  border: 0px solid;
  color: var(--white);
  border-radius: 4px;
  margin: 1rem;
  outline: none;
`
