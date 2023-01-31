import styled from "styled-components";

const StyledH1 = styled.h1`
    color : ${props => props.theme.accentColor};
`

function Coins(){
    return<StyledH1>Coins</StyledH1>;
}

export default Coins;