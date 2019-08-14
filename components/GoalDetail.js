import React from 'react';
import { View, Modal, Text, StyleSheet, Button } from 'react-native';

const goalDetail = (props) => {
    return (
            <Modal animationType="slide" visible={props.modalVisible} >
                <View style={styles.modalContainer}>
                <Text>{props.selectedGoal.courseName}</Text>
                </View>
                <View>
                    <Button title="Close" onPress={props.onModalClose}/>
                    <Button title="Delete" onPress={props.onDeleteGoal.bind(this, props.selectedGoal.courseId)}/>
                </View>
            </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        padding: 50
    }
})


export default goalDetail;