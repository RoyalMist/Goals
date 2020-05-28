import styled from "styled-components/native";
import React from "react";

const Container = styled.TouchableOpacity`
    padding:15px;
    border-radius: 30px;
    background-color: rebeccapurple;
`;

const Text = styled.Text`
    color: white;
    font-weight: bold;
    text-align: center;
`;

interface Props {
    onPress: Function
    label: String
}

export const Button = (props: Props) => {
    return (
        <Container onPress={props.onPress}>
            <Text>{props.label}</Text>
        </Container>
    );
}



