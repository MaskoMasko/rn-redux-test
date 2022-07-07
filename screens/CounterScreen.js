import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { increment, decrement, incrementByVal, decrementByVal } from "../redux";

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const dispatchStateToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementByVal: (val) => dispatch(incrementByVal(val)),
    decrementByVal: (val) => dispatch(decrementByVal(val)),
  };
};

export const CounterScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.counter}</Text>
      <Button title="increment" onPress={props.increment} />
      <Button title="decrement" onPress={props.decrement} />
      <Button title="increment +10" onPress={() => props.incrementByVal(10)} />
      <Button title="decrement -10" onPress={() => props.decrementByVal(10)} />
    </View>
  );
};

export default connect(mapStateToProps, dispatchStateToProps)(CounterScreen);

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
});
