import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.sm};
    padding: .625rem 2rem;
    line-height: 1.42857;
  `,
  large: () => `
    font-size: ${typeScale.h5};
    padding: .8125rem 3rem;
  `,
  warning: () => `
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};

    &:hover, &:focus {
      background-color: ${defaultTheme.status.warningColorHover};
    }

    &:active {
      background-color: ${defaultTheme.status.warningColorActive};
      outline: 3px solid ${defaultTheme.status.warningColorHover};
      outline-offset: 2px;
    }
  `,
  error: () => `
    background-color: ${defaultTheme.status.errorColor};
    color: ${defaultTheme.textColorInverted};

    &:hover, &:focus {
      background-color: ${defaultTheme.status.errorColorHover};
    }

    &:active {
      background-color: ${defaultTheme.status.errorColorActive};
      outline: 3px solid ${defaultTheme.status.errorColorHover};
      outline-offset: 2px;
    }
  `,
  success: () => `
    background-color: ${defaultTheme.status.successColor};
    color: ${defaultTheme.textColorInverted};

    &:hover, &:focus {
      background-color: ${defaultTheme.status.successColorHover};
    }

    &:active {
      background-color: ${defaultTheme.status.successColorActive};
      outline: 3px solid ${defaultTheme.status.successColorHover};
      outline-offset: 2px;
    }
  `
};

const BaseButton = styled.button`
  min-width: 100px;
  padding: .75rem 3rem;
  font-size: ${typeScale.base};
  border-radius: .125rem;
  font-weight: 500;
  border: none;
  display: inline-flex;
  justify-content: center;
  line-height: 1.5;
  cursor: pointer;
  transition: all .25s;

  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }
`

const PrimaryButton = styled(BaseButton)`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.textColorLight};
  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
  }
  &:focus {
    background-color: ${props => props.theme.primaryActiveColor};
  }
  &:active {
    outline: 2px solid ${props => props.theme.primaryActiveColor};
    outline-offset: 2px;
  }
  &:disabled {
    background-color: ${props => props.theme.primary};
    opacity: .5;
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const SecondaryButton = styled(BaseButton)`
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.textColorLight};
  &:hover {
    background-color: ${props => props.theme.secondaryHoverColor};
  }
  &:focus {
    background-color: ${props => props.theme.secondaryActiveColor};
  }
  &:active {
    outline: 2px solid ${props => props.theme.secondaryActiveColor};
    outline-offset: 2px;
  }
  &:disabled {
    background-color: ${props => props.theme.secondary};
    opacity: .5;
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

const TertiaryButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.tertiary};
  color: ${(props) => props.theme.textColorLight};
  &:hover {
    background-color: ${props => props.theme.tertiaryHoverColor};
  }
  &:focus {
    background-color: ${props => props.theme.tertiaryActiveColor};
  }
  &:active {
    outline: 2px solid ${props => props.theme.tertiaryActiveColor};
    outline-offset: 2px;
  }
  &:disabled {
    background-color: ${props => props.theme.tertiary};
    opacity: .5;
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`
export {PrimaryButton, SecondaryButton, TertiaryButton}
