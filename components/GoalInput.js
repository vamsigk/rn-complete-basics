import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const goalInput = (props) => {

    return (
        <View style={styles.inputContainer}>
            <View style={styles.inputText}>
                <TextInput placeholder="Course Goal" 
                    onChangeText={props.onGoalChange} 
                    value={props.enteredGoal} />
            </View>

            <View style={styles.addButton}>
                <Button title="Add" onPress={props.onGoalAdd} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        //flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
    inputText: {
        width: "70%",
        marginLeft: 5
      },
      addButton: {
        width: "30%"
      },
});


export default goalInput;