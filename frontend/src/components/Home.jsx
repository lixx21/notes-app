import { Container } from 'postcss'
import React from 'react'
import { useState, useEffect } from 'react';

const Home = () => {

  const [notes, setNotes] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:3000/note')
      .then((res)=>{
        if (!res){
          throw new Error("Network response wat not ok")
        }
        return res.json();
      })
      .then((data)=>{
        console.log('fetched data: ',data);
        setNotes(data)
      })
      .catch((error)=> console.error("There was a problem: ", error))
  }, []);

  return (
    <div className="container">
        
        <div className='pt-36 justify-center'>
            <h1 className='font-bold text-center uppercase text-xl lg:text-4xl'>🚀 Welcome to My Notes 🚀</h1>

            <div className='pt-10 px-10 flex flex-wrap max-w-full gap-4'>
                {notes.map((note)=>(
                  <div className='max-w-full border-4 rounded-xl p-4 w-full overflow-hidden text-ellipsis'>
                      <h3 className='font-bold text-2xl lg:text-3xl'>{note.title}</h3>
                      <p className='pt-4 text-sm lg:text-lg pt-20 truncate'>{note.notes}</p>
                  </div>
                ))}
            </div>
        </div>


    </div>
  )
}

export default Home