import React from "react"
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native"

import { TaskContainer, TextTask } from "./styles"

import { MaterialIcons } from '@expo/vector-icons';

export const TaskList = ({ data, deleteItem, editItem }) => {
    return (
        <TaskContainer>
            <TouchableOpacity onPress={() => deleteItem(data.key)}>
                <MaterialIcons name="delete" size={24} color="purple" />
            </TouchableOpacity>
            <View>
                <TouchableWithoutFeedback onPress={() => editItem(data)}>
                    <TextTask>{data.nome}</TextTask>
                </TouchableWithoutFeedback>
            </View>
        </TaskContainer>
    )
}