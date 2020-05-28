import styled from "styled-components/native";

export const TextInput = styled.TextInput<{ width?: Number }>`
    border-bottom-color: rebeccapurple;
    border-bottom-width: 1px;
    margin-right: 10px;
    padding: 10px;
    ${props => (props.width ? `width: ${props.width}%` : "")}
`;
