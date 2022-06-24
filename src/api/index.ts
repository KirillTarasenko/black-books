import axios from 'axios';
import { Alert } from 'react-native';

export let API;

const BASE_URL = 'http://104.248.26.141:3000/api';

export const initAPI = async (): Promise<void> => {
  API = axios.create({
    baseURL: BASE_URL,
  });
  API.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      Alert.alert('API error', JSON.stringify(error));
      return error;
    },
  );
};
