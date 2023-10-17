import React, { useEffect, useState } from 'react';
import { getExercises } from '../api';
import {Link} from 'react-router-dom'

const Exercise = () => {
  const [exercises, setExercises] = useState([]);
  
  useEffect(() => {
    const fetchRandomExercises = async () => {
      try {
        const result = await getExercises();
        setExercises(result.data);
      } catch (error) {
        console.log('the error is', error);
      }
    };

    fetchRandomExercises();
  }, []);

  return (
    <div className='flex flex-row gap-4 mx-4'>
      <div className='w-1/4 bg-slate-200 font-bold pl-12 '>
        <Link to = '/equipments'><div className='w-3/4 bg-slate-50 font-bold rounded p-2 my-2 hover:bg-slate-400 cursor-pointer'>All Equipment</div></Link>
        <div className='w-3/4 bg-slate-50 font-bold rounded p-2 my-2 hover:bg-slate-400 cursor-pointer'>All Body Parts</div>
        <div className='w-3/4 bg-slate-50 font-bold rounded p-2 my-2 hover:bg-slate-400 cursor-pointer'>All Exercises</div>
        <div className='w-3/4 bg-slate-50 font-bold rounded p-2 my-2 hover:bg-slate-400 cursor-pointer'>All Targets</div>
      </div>
      <div className='flex flex-row flex-wrap'>
        {/* Render the fetched random exercises */}
        {exercises.map((exercise, id) => (
          <div key={id} className='flex flex-col w-1/4 p-2 shadow-md gap-2'>
            <img src={exercise.gifUrl} alt='gif' className='w-24' />
            <div className='p-2'>
              <h3>{exercise.name}</h3>
              <h3>{exercise.bodyPart}</h3>
              <p>{exercise.target}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercise;
