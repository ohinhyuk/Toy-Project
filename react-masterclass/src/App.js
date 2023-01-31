import React from "react";
import styled , { keyframes } from "styled-components";

const Father = styled.div`
  display : flex;
  width : 100%;
  height: 800px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.backgroundColor};
`;

const Text = styled.span`
color : ${props => props.theme.textColor};

`

function App(){
  return (
    <Father >
      <Text>hello</Text>
    </Father>
  );
}

export default App;

