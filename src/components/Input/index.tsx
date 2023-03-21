import { Wrapper, StyledInput, Button } from './index.styles';

interface IInput {}
export function Input({}: IInput) {
  return (
    <Wrapper>
      <StyledInput placeholder="some words" />
      <Button />
    </Wrapper>
  );
}
