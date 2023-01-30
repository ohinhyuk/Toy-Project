import React from "react";
import styled from "styled-components";

const Father = styled.div`
  display : flex;
`;

const Box = styled.div`
  background-color : ${(props) => props.bgColor };
  width : 100px;
  height : 100px;
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

const Text = styled.span`
color : white;
margin-left: 50px;
`

const AttrsText = styled(Text).attrs({ href : "www.naver.com"})`
  margin-left : 0px
`


function App(){
  return (
    <Father >
      <Box bgColor="teal">
        <Text>T1</Text>
      </Box>
      <Circle bgColor="tomato">
        <Text as="a" href="/">T2</Text>
        <AttrsText as="a"> attrs Applied</AttrsText>
      </Circle>
    </Father>
  );
}

export default App;

