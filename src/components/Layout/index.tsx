import { useMemo } from 'react';
import { Item } from '../Item';
import { Input } from '../Input';
import { Header, Wrapper, Line } from './index.styles';

let mocToDos = [
  { text: 'Hi', checked: true },
  { text: 'Men', checked: false },
  { text: 'Lol', checked: true },
  { text: 'Aga', checked: false },
];

localStorage.setItem('mocToDos', JSON.stringify(mocToDos));
let parseMocToDos: Array<{ text: string; checked: boolean }> = JSON.parse(
  localStorage.getItem('mocToDos') || '',
);

interface ILayout {}

export function Layout({}: ILayout) {
  let renderedToDoItems = useMemo(
    () =>
      parseMocToDos.map((item) => (
        <Item text={item.text} key={item.text} checked={item.checked} />
      )),
    [],
  );

  return (
    <Wrapper>
      <Header>To Do App</Header>
      <Input />
      <Line />
      {renderedToDoItems}
    </Wrapper>
  );
}
