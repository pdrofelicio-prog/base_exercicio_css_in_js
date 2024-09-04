import styled from 'styled-components'
import mainTheme from '../../themes/theme'

export const FormDasVagas = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${mainTheme.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
export const BotaoVagas = styled.button`
  background-color: ${mainTheme.corPrincipal};
  border: 1px solid ${mainTheme.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${mainTheme.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`
export const InputVagas = styled.input`
  padding: 0 16px;
  outline-color: ${mainTheme.corPrincipal};
`
