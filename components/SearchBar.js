import * as React from 'react';
import { useState } from 'react';
import { Search } from "@mui/icons-material";
import { Close } from '@mui/icons-material';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import costumes from '../public/costumes.json'
import regions from '../public/regions.json'
import { Card } from '@mui/material';

import { Noto_Nastaliq_Urdu } from '@next/font/google';


const noto = Noto_Nastaliq_Urdu({ subsets: ['latin'] })


const style = {
    position: 'absolute',
    top:0,
    left:0,
    width:"100%",
    height:"100vh",
    p: 4,
    background:"#757575"
  };
  
  const searchStyle ={
      background: "transparent",
      border: "0",
      borderBottom: "2px solid white",
      width: "100%",
      color: "#fff",
      borderRadius:0
  }

  

  function findRegion(id){
        let obj = regions.find(element => element["id"]===id)
        return obj.name
  }

  export default function SearchCostumes(){

    function filterCostumes(string){
        let str = string.trim().toLowerCase()

        if(str.length==0){
            setList([])
            setInput("")
        }
        else{
        console.log("string",str)
        console.log("input0",input)
        setInput(str)
        console.log("input1",input)
        let result = costumes.filter(element=> element["name"].toLowerCase().includes(str.trim().toLowerCase()))
        setList(result)
        }
      }
    
    const [input,setInput] = useState("")

    const [open,setOpen] = useState(false)

    const [list,setList] = useState([])

   const handleClose = ()=> setOpen(false)

    const handleOpen = ()=>setOpen(true)


    return (
        <>
       
        <Search onClick={handleOpen}/>

        
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="scrollable searchBar"
        style={{background:'black'}}
      >
        <Box sx={style}>
            <Close onClick={handleClose} />
            <input type="text" style={searchStyle} value={input} onChange={e=> filterCostumes(e.target.value)} placeholder="SEARCH" className={noto.className}/>
            <span>INPUT: {input}</span>
        
          <ul style={{paddingBottom:"400px"}}>
            {list.map((costume)=>(
                <li key={costume.id} style={{border:"1px solid white"}} className="my-3 p-1">
                    <Card sx={{ minWidth: 275, minHeight:200,position:"relative",boxShadow:"none",backgroundImage:"none",background:"transparent" }}>
                        <h2>{costume.name}</h2>
                        <span>Category: {costume.summary}</span><br></br>
                        <span style={{position:"absolute",bottom:0,left:0}}>{costume.popular_regions.length && findRegion(costume.popular_regions[0][0])}</span>
                    </Card>
                    {/* <p></p>
                    <p>{costume.summary}</p>
                    <p>{costume.popular_regions.length && findRegion(costume.popular_regions[0][0])}</p> */}
                </li>
            ))}
          </ul>
        </Box>
      </Modal>
     
        </>
    )
  }