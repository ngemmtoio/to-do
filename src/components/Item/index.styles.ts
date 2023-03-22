import styled from '@emotion/styled';

export let Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 55px;
  min-width: 490px;
  background-color: #dbe2ef;
  border-radius: 5px;
`;

export let InputCheckbox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  left: 30px;
  top: 18px;
  min-width: 24px;
  min-height: 24px;
  border: 2px solid #7d7c7c;
  border-radius: 5px;
`;

export let Image = styled.img`
  width: 21px;
  height: 18px;
`;

export let TextOutput = styled.p`
  font-size: 20px;
  line-height: 1.1;
  color: #000;
`;
