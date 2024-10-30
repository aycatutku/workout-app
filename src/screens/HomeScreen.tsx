import { Pressable, View, StyleSheet, FlatList } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import data from '../../data.json';
import { Workout } from '../types/data';
import WorkoutItem from '../components/workoutItem';
import MontserratText from '../components/styled/MontserratText';

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
  // const workout.ts : Workout = {
  //     slug:"kjasds",
  //     name: "dsklsdf",
  //     difficulty:"easy",
  //     duration:900,
  //     sequence:[]
  // }
  return (
    <View style={styles.container}>
      <MontserratText style={styles.header}>New Workouts</MontserratText>

      <FlatList
        data={data as Workout[]}
        keyExtractor={(item) => item.slug}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate('WorkoutDetail', { slug: item.slug })}>
            <WorkoutItem item={item} />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    fontFamily: 'montserrat-bold',
  },
});
