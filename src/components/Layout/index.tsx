import { Input } from '../Input';
import { Header, Wrapper } from './index.styles';

interface ILayout {}
export function Layout({}: ILayout) {
  return (
    <Wrapper>
      <Header>To Do App</Header>
      <Input />
    </Wrapper>
  );
}
