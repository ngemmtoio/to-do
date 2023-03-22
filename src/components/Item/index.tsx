import { useState } from 'react';
import checkboxIcon from '../../../public/check-mark.svg';
import { InputCheckbox, Wrapper, TextOutput, Image } from './index.styles';
interface IItem {
  text: string;
  checked: boolean;
}
export function Item({ text, checked }: IItem) {
  let [isChecked, setChecked] = useState(checked);
  return (
    <Wrapper>
      <InputCheckbox onClick={() => setChecked((prevState) => !prevState)}>
        {isChecked && <Image src={checkboxIcon} alt="check mark" />}
      </InputCheckbox>
      <TextOutput>{text}</TextOutput>
    </Wrapper>
  );
}
