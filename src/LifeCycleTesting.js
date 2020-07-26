import React from "react";
import {
  View,
  Button,
  Text,
  ScrollView,
  StyleSheet,
  Switch
} from "react-native";

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  count: {
    fontSize: 40
  }
});

class Count extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !(nextProps.count % 2);
  }
  render() {
    return <Text style={this.props.style}> {this.props.count} </Text>;
  }
}

export default class LifeCycleTesting extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    setInterval(() => this.inc(), 1000);
  }
  //componentWillRecieveProps(nextProps)
  //componentDidUpdate(prevProps,prevState)

  inc = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      // <View style={[styles.appContainer]}>
      //   <Text style={styles.count}> {this.state.count} </Text>
      // </View>

      <View style={[styles.appContainer]}>
        <Count count={this.state.count} style={styles.count} />
      </View>
    );
  }
}
