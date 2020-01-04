import React from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

// import { Container } from './styles';

export default function ListItem({data, handleLeft, handleRight}) {
  const LeftActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <View style={styles.leftActions}>
        <Animated.Text style={[styles.actionText, {transform: [{scale}]}]}>
          Concluir
        </Animated.Text>
      </View>
    );
  };

  const RightActions = ({progress, dragX, onPress}) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.rightActions}>
          <Animated.Text style={[styles.actionText, {transform: [{scale}]}]}>
            Excluir
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Swipeable
      renderLeftActions={LeftActions}
      onSwipeableLeftOpen={handleLeft}
      renderRightActions={(progress, dragX) => (
        <RightActions progress={progress} dragX={dragX} onPress={handleRight} />
      )}>
      <View style={styles.container}>
        <Text style={styles.text}>{data.tarefa}</Text>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  text: {
    fontSize: 17,
    color: '#222',
  },
  leftActions: {
    backgroundColor: '#388e3c',
    justifyContent: 'center',
    flex: 1,
  },
  rightActions: {
    backgroundColor: '#FF0000',
    justifyContent: 'center',
  },
  actionText: {
    fontSize: 17,
    color: '#fff',
    padding: 20,
  },
});
