// import React from "react";
// import styled , {keyframes} from "styled-components";

// const styledAnimation = keyframes`
  
//   from{
//     transform: rotate(0deg);
//   }
//   to{
//     transform: rotate(360deg);
//   }

//   /* 

//   another method

//   0%{
//     transform: rotate(0deg);
//   }
//   50%{
//     transform: rotate(360deg);
//   }
//   100%{
//     transform: rotate(0deg);
//   }

//   */
// `


// const InnerText = styled.span``

// const Father = styled.div`
//   display : flex;
// `;

// const Box = styled.div`
//   background-color : ${(props) => props.bgColor };
//   width : 100px;
//   height : 100px;

//   /* animation */
//   animation : ${styledAnimation} 1s linear infinite;

//   ${InnerText}{
//     color:white;
//     font-size: 36px;
//     &:hover{
//       color:black;
//     }
//     &:active{
//       opacity: 0.1;
//     }
//   }
  
//   /*
  
//   same

//   span:hover{
//     color:black
//   }

//    */

// `;

// const Circle = styled(Box)`
//   border-radius: 50%;
// `;

// const Text = styled.span.attrs({ href : '/'})`
// color : white;
// margin-left: 50px;
// `

// const AttrsText = styled(Text).attrs({ href : "www.naver.com"})`
//   margin-left : 0px
// `



// function App(){
//   return (
//     <Father >
//       <Box bgColor="teal">
//         <InnerText>innerText</InnerText>
//       </Box>
//       <div as="a" href="/"> hello</div>
//       <Circle bgColor="tomato">
//         <Text as="a">T2</Text>
//         <AttrsText as="a"> attrs Applied</AttrsText>
//       </Circle>
//     </Father>
//   );
// }

// export default App;

