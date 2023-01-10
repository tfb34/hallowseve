import HeaderNav from "../components/HeaderNav"
import Footer from "../components/Footer"
import MainNav from "../components/MainNav"
import { Slider,Button,Divider } from "@mui/material"
import Radio from '@mui/material/Radio';
import React from "react"
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styles from '../styles/CostumeWizard.module.css'
import Link from "next/link";

import costumes from '../public/costumes.json'
import { Pathway_Gothic_One } from "@next/font/google";

const pathwayGothic = Pathway_Gothic_One({
    weight: '400',
    subsets: ['latin'],
  })

const marks = [
    {
        value:0,
        label: '0%'
    },
    {
        value: 100,
        label: '100%'
    }
]

export default function CostumeWizard(){

    const [selectedStyle, setSelectedStyle] = React.useState('modern');

    const [isFormSubmitted,setFormSubmitted] = React.useState(false)

    const [selectedSpookiness,setSelectedSpookiness] = React.useState(50)
    
    const [selectedUniqueness,setSelectedUniqueness] = React.useState(50)


    const [result,setResult] = React.useState(null)

    function closest(array, num) {
        var i = 0;
        var minDiff = 10;
        var ans;
        for (i in array) {
          var m = Math.abs(num - array[i].probability);
          console.log(m)
          if (m < minDiff) {
            minDiff = m;
            ans = array[i];
          }
        }
        return ans;
    }

    const handleChange = (event) => {
        console.log(event.target.value)
        setSelectedStyle(event.target.value);
    };

    const handleRedoSearch = ()=>{
        setSelectedStyle('modern')
        setFormSubmitted(false)
    }




    const handleSubmit = ()=>{
        console.log("submit")
        //find result
        console.log("style", selectedStyle)
        console.log("spookiness",(selectedSpookiness/10))
        console.log("uniqueness",(selectedUniqueness/10))

        let r = costumes.filter(costume=>costume.is_classic==(selectedStyle==="classic"))
        console.log(r.length)

        r = r.filter(costume=>Math.round(costume.spookiness)==Math.round(selectedSpookiness/10))// 
        console.log("Spookines",r)
        
        r = closest(r,(selectedUniqueness/10))
        console.log("result", r)

        setResult(r)

        setFormSubmitted(!isFormSubmitted)
    }

    const handleSpookinessChange = (event)=>{
        setSelectedSpookiness(event.target.value)
    }

    const handleUniquenessChange = (event)=>{
        setSelectedUniqueness(event.target.value)
    }

    return (
        <>
        
        <main style={{backgroundImage:"url(/images/jack-gittoes.jpg)"}} id="costume-wizard">
            <HeaderNav />
            <MainNav pageName={"costume-wizard"}/>
            <div className="container scrollable">

                {
                    isFormSubmitted ? (
                        <div className="result">
                            <p className="my-5">The spell has been cast and your search is through. Here’s a costume for you to view.</p>
                            <Link href={`/costumes/${result.id}`} className={`fs-primary-heading ${pathwayGothic.className}`} >{result.name}</Link><br></br>
                            <Button variant="contained"  onClick={handleRedoSearch} className="my-5">REDO YOUR SEARCH</Button>
                        </div>
                    ) : (
                        
                        <form style={{width: "80%",margin: "0 auto",textAlign:"center"}} >
                            <h1 style={{textAlign:"center"}} className="my-5">Tune the gears below and wait for a costume to show</h1>
                            <div className="input-group">
                                <label className="form-label">SPOOKINESS LEVEL</label>
                                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" marks={marks} onChange={handleSpookinessChange}/>
                            </div>

                            <Divider variant="middle" className="my-4"/>

                            <div className="input-group">
                                <FormControl className="theme-buttons">
                                    <label className="form-label">STYLE</label>
                                    <RadioGroup defaultValue="modern" aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" onChange={handleChange}>
                                        <Button variant={selectedStyle==="modern"? "contained":"outlined"} className="fs-button" style={{boxShadow: "0px 0px 5px rgb(255 253 253 / 86%)"}}>
                                            <FormControlLabel value="modern" control={<Radio />} label="modern" />
                                        </Button>
                                        <Button variant={selectedStyle==="classic"? "contained":"outlined"} className="fs-button" style={{boxShadow: "0px 0px 5px rgb(255 253 253 / 86%)"}}>
                                            <FormControlLabel value="classic" control={<Radio />} label="classic" />
                                        </Button>
                                    </RadioGroup>
                                </FormControl>
                            </div>

                            <Divider variant="middle" className="my-5"/>

                            <div className="input-group">
                                <label className="form-label">UNIQUENESS LEVEL</label>
                                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" marks={marks} onChange={handleUniquenessChange} />
                            </div>

                            <Divider variant="middle" className="my-5"/>

                            <Button variant="contained"  onClick={handleSubmit}>SUBMIT</Button>
                        </form>
                    )
                }
                
            </div>
        </main>
        <Footer />
        </>
    )
}