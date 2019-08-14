import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';


import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import GoalDetail from './components/GoalDetail';


export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');

  const [goals, setGoals] = useState([]);

  const [selectedGoal, setSelectedGoal] = useState({});

  const [modalVisible, setModalVisible] = useState(false);

  goalChangeHandler = (textEntered) => {
    setEnteredGoal(textEntered);
  }

  onGoalAddHandler = () => {
    if(enteredGoal === '') {
      return
    }
    enteredGoalWithKey = {courseId: Math.floor((Math.random() * 100) + 1).toString(), courseName: enteredGoal};
    setGoals(currentGoals => [...goals, enteredGoalWithKey]);
    setEnteredGoal('');
  }

  onGoalDeleteHandler = (id) => {
    setGoals(goals.filter((x) => x.courseId !== id));
    setModalVisible(false);
  }

  onGoalSelectHandler = (x) => {
    setSelectedGoal(x);
    setModalVisible(true);
  }

  onModalCloseHandler = () => {
    setModalVisible(false);
  }

//onDeleteGoal={onGoalDeleteHandler}
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <GoalInput enteredGoal={enteredGoal} onGoalChange={goalChangeHandler} onGoalAdd={onGoalAddHandler}/> 
        <GoalItem goals={goals} onGoalSelect={onGoalSelectHandler} />
        <GoalDetail 
          onGoalSelect={onGoalSelectHandler} 
          selectedGoal={selectedGoal} 
          onModalClose={onModalCloseHandler}
          onDeleteGoal={onGoalDeleteHandler}
          modalVisible={modalVisible}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    width: "100%"
  },
  inputContainer: {
    width: "100%",
    //flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
