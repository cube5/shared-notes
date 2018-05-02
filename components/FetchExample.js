import React from "react";
import { FlatList, ActivityIndicator, Text, View } from "react-native";

export default class FetchExample extends React.Component {
  state = { isLoading: true };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const response = await fetch(
        "https://facebook.github.io/react-native/movies.json"
      );
      const result = await response.json();
      await this.wait(2000);
      this.setState({
        isLoading: false,
        dataSource: result.movies
      });
    } catch (error) {
      console.error(error);
    }
  };

  wait = async milis => new Promise(resolve => setTimeout(resolve, milis));

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
          keyExtractor={(item, index) => `${index}`}
        />
      </View>
    );
  }
}
