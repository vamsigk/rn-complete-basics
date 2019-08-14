import React from 'react';
import { View, ScrollView, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

const goalItem = (props) => {

    return (
        <ScrollView>
            <FlatList
                keyExtractor={(item, index) => item.courseId}
                data={props.goals}
                renderItem={
                    ({ item }) =>
                        <TouchableOpacity onPress={props.onGoalSelect.bind(this, item)}>
                            <View style={styles.listItems}>
                                <Text>{item.courseName}</Text>
                            </View>
                        </TouchableOpacity>
                }
            />
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    listItems: {
        backgroundColor: "#bbb",
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
        width: 300
      }
});


export default goalItem;