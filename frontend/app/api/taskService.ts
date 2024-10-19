import axiosInstance, { setAuthToken } from './axiosInstance';
import { Task } from '../types/task';

// Set the token (call this function when you log in or retrieve the token)
const setAuthTokenFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      setAuthToken(token);
    }
};

// Get all tasks
export const getTasks = async () => {
    setAuthTokenFromLocalStorage();
  const response = await axiosInstance.get('/tasks/');
  return response.data;
};

// Get a task by ID
export const getTaskById = async (id: number) => {
    setAuthTokenFromLocalStorage();
  const response = await axiosInstance.get(`/tasks/${id}`);
  return response.data;
};

// Create a new task
export const createTask = async (taskData: {
  title: string;
  description: string;
  isCompleted: boolean;
}) => {
  setAuthTokenFromLocalStorage();
  const response = await axiosInstance.post('/tasks/', taskData);
  return response.data;
};

// Update an existing task
export const updateTask = async (id: number, taskData: Task) => {
  setAuthTokenFromLocalStorage();
  const response = await axiosInstance.put(`/tasks/${id}`, taskData);
  return response.data;
};

// Delete a task
export const deleteTask = async (id: number) => {
  setAuthTokenFromLocalStorage();
  await axiosInstance.delete(`/tasks/${id}`);
};
