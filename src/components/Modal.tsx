import styled from "styled-components"
import { typeScale } from "../utils"
import { Illustration, CloseIcon } from "../assets";
import { PrimaryButton } from "./Button";

const ModalWrapper = styled.div`
  background-color: ${props => props.theme.bodyBg};
  color: ${props => props.theme.textColorDark};
  width: 800px;
  height: 500px;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 80px;
  gap: 30px;
  position: relative;
  border-radius: 2px;
`

const Header = styled.h3`
  font-size: ${typeScale.h3};
  font-weight: bold;
  color: ${props => props.theme.secondary};
`;

const Text = styled.p`
  font-size: ${typeScale.base};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  align-items: center;
`;

const ModalCloseBtn = styled.button`
  cursor: pointer;
  background: none;
  border: 0;
  box-shadow: none;
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  width: 2rem;
  height: 2rem;
`

export default function Modal() {
  return (
    <ModalWrapper>
      <ModalCloseBtn aria-label="Close Modal">
        <CloseIcon/>
      </ModalCloseBtn>
      <Grid>
        <div>
          <Header>Sign Up!</Header>
          <Text>Sign up today to get access to cool things!</Text>
          <PrimaryButton>Sign Up</PrimaryButton>
        </div>
        <div>
          <img src={Illustration.SignUp} alt="" aria-hidden="true" />
        </div>
      </Grid>
    </ModalWrapper>
  )
}
