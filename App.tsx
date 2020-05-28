import React, {useState} from 'react';
import {Main} from "./components/Main";
import {Button} from "./components/Button";
import {HView} from "./components/HView";
import {TextInput} from "./components/TextInput";
import {FlatList} from "react-native";
import {Goal} from "./components/Goal";

interface GoalItem {
    key: string
    value: string
}

export default () => {
    const [newGoal, setNewGoal] = useState('');
    const [goals, setGoals] = useState<GoalItem[]>([]);

    function addGoal() {
        setGoals((currentGoals) => [...currentGoals, {key: Math.random().toString(), value: newGoal}]);
        setNewGoal('');
    }

    function updateNewGoal(text: string) {
        setNewGoal(text);
    }

    return (
        <Main padding={50}>
            <HView>
                <TextInput placeholder="Add a new goal..." width={80} onChangeText={updateNewGoal} value={newGoal}/>
                <Button onPress={addGoal} label="ADD"/>
            </HView>
            <FlatList data={goals} renderItem={(i) => (
                <Goal text={i.item.value}/>
            )}/>
        </Main>
    );
}
