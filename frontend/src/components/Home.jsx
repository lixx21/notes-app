import { Container } from 'postcss'
import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

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

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="container">
        
        <div className='pt-20 justify-center'>
            <h1 className='font-bold text-center uppercase text-xl lg:text-4xl'>🚀 Welcome to My Notes 🚀</h1>
            
            <div className='pt-10 px-10 flex flex-wrap max-w-full gap-4'>
              <Button  
                variant="contained"
                color="primary"
                size={isSmallScreen ? 'small' : 'medium'}
                sx={{
                  fontSize: isSmallScreen ? '0.7rem' : '1rem', // Adjust font size
                  padding: isSmallScreen ? '5px 10px' : '8px 16px', // Adjust padding
                }}
                >Add Notes</Button>

                {/* Card */}
                {notes.map((note)=>(
                  <div className='max-w-full border-4 rounded-xl p-4 w-full overflow-hidden text-ellipsis'>
                      <h3 className='font-bold text-xl lg:text-3xl'>{note.title}</h3>
                      <p className='pt-4 text-sm lg:text-lg pt-20 truncate'>{note.notes}</p>
                  </div>
                ))}

                  <div className='max-w-full border-4 rounded-xl p-4 w-full overflow-hidden text-ellipsis'>
                      <h3 className='font-bold text-xl lg:text-3xl'>Title</h3>
                      <p className='pt-4 text-sm lg:text-lg pt-20 truncate'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, velit reiciendis. Quasi illo fugit natus atque hic non itaque possimus aliquam, nostrum esse similique aut veniam expedita eligendi enim architecto!</p>
                  </div>
            </div>
        </div>


    </div>
  )
}

export default Home