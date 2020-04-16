import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK,
  PUT_OFF_TASK,
  LIKE_TASK,
} from './const';

export const addTaskAction = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTaskAction = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const toggleTaskAction = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const putOffTaskAction = (id) => ({
  type: PUT_OFF_TASK,
  payload: id,
});

export const likeTaskAction = (id) => ({
  type: LIKE_TASK,
  payload: id,
});
