import React from 'react';
import { AppRegistry, StyleSheet, Text, View, asset } from 'react-360';
import Video360 from './src/components/Video360.react';

// The mock database
const SCENE_DEF = [
  {
    type: 'photo',
    title: 'Welcome Scene',
    source: asset('chess-world.jpg'),
    audio: asset('cafe.wav'),
    next: 1,
    subtitle: 'This is the welcome scene, just look around!',
  },
  {
    type: 'photo',
    title: '2D Street View',
    source: asset('360_world.jpg'),
    screen: {url: asset('banana.mp4').uri},
    next: 0,
    subtitle: 'This is a 2d video of street view, you can see the traffic.',
  },
];

// The root react component of the app main surface
export default class MediaAppTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
    };
  }

  render() {
    const currentScene = SCENE_DEF[this.state.index];
    const nextScene = SCENE_DEF[SCENE_DEF[this.state.index].next];
    return (
      <View style={styles.panel}>
        <Video360
          currentScene={currentScene}
          nextScene={nextScene}
         />
      </View>
    );
  }
};

// defining StyleSheet
const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

// register the root component
AppRegistry.registerComponent('MediaAppTemplate', () => MediaAppTemplate);