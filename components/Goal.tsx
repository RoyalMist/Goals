import styled from "styled-components/native";
import React from "react";

const Container = styled.View`
    padding: 10px;
    margin-top: 10px;
    background-color: lavender;
    border-color: rebeccapurple;
    border-width: 1px;
    border-radius: 10px;
`;

const Label = styled.Text`
    color: rebeccapurple;
    text-align: center;
`;

interface Props {
    text: string
}

export const Goal = (props: Props) => {
    return (
        <Container>
            <Label>{props.text}</Label>
        </Container>
    )
}
