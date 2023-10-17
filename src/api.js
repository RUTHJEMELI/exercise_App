import axios from 'axios';

const BASE_URL = 'https://exercisedb.p.rapidapi.com';

const commonHeaders = {
  'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  params:{limit:'999'}
};

// Create a new Axios instance for the getExercises endpoint with a custom configuration
const getExercisesApi = axios.create({
  baseURL: BASE_URL,
  headers: commonHeaders,
  params: { limit: '12' }, // Custom configuration for this endpoint
});

// Create your other Axios instance for the remaining endpoints
const api = axios.create({
  baseURL: BASE_URL,
  headers: commonHeaders,
});

// Define your API functions
export const getExercises = () => {
  return getExercisesApi.get('/exercises');
};
export const getExercisesByName = (name) => {
    return api.get(`/exercises/name/${name}`)
}

export const getExercisesByTarget = (target) => {
    return api.get(`/exercises/target/${target}`)
}

export const getExerciseByEquipment = (type) => {
    return api.get(`/exercises/equipment/${type}`)
}

export const getExerciseTargetList = () => {
    return api.get('/exercise/targetList')
}
export const getEquipmentList = () => {
    return api.get('/exercise/equipmentList')
}

export const getListOfBodyParts = () => {
    return api.get('/exercise/bodyPartList')
}
export const getBodyPartList = (bodyPart) => {
    return api.get(`/exercise/bodyPart/${bodyPart}`)
}