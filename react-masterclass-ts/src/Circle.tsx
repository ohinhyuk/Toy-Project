import styled from "styled-components";

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.styledPropColor};
  border: 10px solid;
  border-color: ${(props) => props.styledPropBorderColor};
`;

// styled component로 넘겨지는 props의 interface

interface ContainerProps {
  styledPropColor: string;
  styledPropBorderColor: string;
}

// circle 객체로 넘어오는 props의 interface

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

function Circle({ bgColor, borderColor }: CircleProps) {
  return (
    <Container
      styledPropBorderColor={borderColor ?? "yellow"}
      styledPropColor={bgColor}
    />
  );
}

export default Circle;
