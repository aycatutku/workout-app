import { Workout } from '../types/data';
import {
 containsKey, getData, removeItem, storeData 
} from './index';
import data from '../../data.json';

export const getWorkouts = async (): Promise<Workout[]> => {
  const workouts = await getData('workout-data');
  return workouts;
};

export const initWorkouts = async (): Promise<boolean> => {
  const hasWorkouts = await containsKey('workout-data');
  if (!hasWorkouts) {
    await storeData('workout-data', data);
    return true;
  }
  return false;
};

export const clearWorkouts = async (): Promise<boolean> => {
  await removeItem('workout-data');
};
