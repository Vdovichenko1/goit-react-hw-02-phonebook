import styled from '@emotion/styled';

export const FormGeneral = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const LabelForm = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
  color: blue;
  font-size: 20px;
`;

export const InputForm = styled.input`
  margin-bottom: 20px;
  height: 25px;
  outline: none;
  border-radius: 10px;
  border: 1px solid red;
  padding-left: 10px;
  font-size: 20px;

  &:focus {
    border: 1px solid green;
  }
`;
export const BtnAddContact = styled.button`
  width: 150px;
  height: 30px;
  margin: 0 auto;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid white;
  border-radius: 5px;
  background-color: #39a1f4;
  color: white;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  transform: transition 250ms linear;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #8f4bab;
    transform: scale(1.2);
  }
`;
