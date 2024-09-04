import { Link } from 'react-router-dom'
import styled from 'styled-components'
import mainTheme from '../../themes/theme'

export const Vaga = styled.li`
  border: 1px solid ${mainTheme.corPrincipal};
  background-color: ${mainTheme.corSecundaria};
  color: ${mainTheme.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  :hover {
    background-color: ${mainTheme.corPrincipal};
    color: ${mainTheme.corSecundaria};

    a {
      border-color: ${mainTheme.corPrincipal};
      background-color: ${mainTheme.corSecundaria};
      color: ${mainTheme.corPrincipal};
    }
  }
`
export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
export const VagaLink = styled(Link)`
  border-color: ${mainTheme.corSecundaria};
  background-color: ${mainTheme.corPrincipal};
  color: ${mainTheme.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
