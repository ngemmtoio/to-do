import styled from '@emotion/styled';

export let Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export let StyledInput = styled.input`
  min-width: 250px;
  min-height: 32px;
  background: #dbe2ef;
  border: 1px solid rgba(177, 177, 177, 0.4);
  border-radius: 5px 0 0 5px;
  padding: 0 0 0 10px;
  ::-webkit-input-placeholder {
    color: #7b7b7b;
  }
`;

export let Button = styled.div`
  position: relative;
  min-width: 45px;
  min-height: 32px;
  background-color: #aaaaaa;
  border: #aaaaaa;
  border-radius: 0 5px 5px 0;
  cursor: pointer;

  &::before,
  ::after {
    content: '';
    position: absolute;
    top: 16px;
    left: 15px;
    display: block;
    width: 14px;
    height: 2px;
    background-color: #ffffff;
    border-radius: 2px;
  }

  &::before {
    transform: rotate(0deg);
  }

  &::after {
    transform: rotate(-90deg);
  }
`;
