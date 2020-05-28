import styled from "styled-components/native";

export const Main = styled.View<{ padding: Number }>`
    padding: ${props => `${props.padding}px`};
`;
