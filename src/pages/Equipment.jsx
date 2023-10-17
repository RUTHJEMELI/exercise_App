import React, { useEffect, useState } from 'react';
import { getExerciseByEquipment, getExercises } from '../api';
import debounce from 'lodash.debounce';

const Equipment = () => {
  const [defaultD, setDefaultD] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchExerciseByEquipment = async (term) => {
    try {
      setLoading(true); // Show loading spinner
      const result = await getExerciseByEquipment(term);
      setExercise(result.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      // If there's a non-empty search term, make the API call
      fetchExerciseByEquipment(searchTerm);
    } else {
      // Clear the exercise data when the search term is empty
      setExercise([]);
    }
  }, [searchTerm]);

  useEffect(() => {
    const getDefaultData = async () => {
      const results = await getExercises();
      setDefaultD(results.data);
    };
    getDefaultData();
  }, []);

  const debounceSearch = debounce((term) => {
    setSearchTerm(term);
  }, 1000);

  const handleOnChange = (e) => {
    const term = e.target.value;
    debounceSearch(term);
  };

  return (
    <div>
      <div className='w-full mx-auto text-center'>
        <label htmlFor='equipment' className='mr-2'>
          Search Exercise By Equipment:
        </label>
        <input
          type='text'
          id='equipment'
          className='border-black border-2'
          placeholder='Search by equipment'
          onChange={handleOnChange}
        />
      </div>
      <div className='flex flex-wrap shadow-md gap-4'>
        {loading ? (
          <div className='w-36 mx-auto'>
            <div className='animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900'></div>
          </div>
        ) : exercise.length > 0 ? (
          exercise.map((item, id) => (
            <div key={id} className='flex flex-col px-4 w-36'>
              <img src={item.gifUrl} alt='gif' className='w-24' />
              <h3 className='font-bold'>{item.name}</h3>
              <h4 className='font-semibold'>{item.bodyPart}</h4>
              <p>{item.target}</p>
            </div>
          ))
        ) : defaultD.length > 0 ? (
          defaultD.map((item, id) => (
            <div key={id} className='flex flex-col px-4 w-36'>
              <img src={item.gifUrl} alt='gif' className='w-24' />
              <h3 className='font-bold'>{item.name}</h3>
              <h4 className='font-semibold'>{item.bodyPart}</h4>
              <p>{item.target}</p>
            </div>
          ))
        ) : (
          // Display a message when no items are found
          <div className='w-full text-center'>
            <p>No items found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Equipment;
