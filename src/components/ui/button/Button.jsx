import { ButtonContainer } from "./Button.styles"

export const Button = ({ onClick, text }) => {
  return (
    <ButtonContainer onClick={onClick}>{text}</ButtonContainer>
  )
}
