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

    const handleChange = (event) => {
        console.log(event.target.value)
        setSelectedStyle(event.target.value);
    };

    return (
        <>
        
        <main style={{backgroundImage:"url(/images/jack-gittoes.jpg)"}} id="costume-wizard">
            <HeaderNav />
            <MainNav pageName={"costume-wizard"}/>
            <div className="container scrollable">
                <h1 style={{textAlign:"center"}} className="my-5">Tune the gears below and wait for a costume to show</h1>
                <form style={{width: "80%",margin: "0 auto"}}>

                <div className="input-group">
                    <label className="form-label">SPOOKINESS LEVEL</label>
                    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" marks={marks}/>
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
                    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" marks={marks}/>
                </div>
                <Divider variant="middle" className="my-5"/>

                <Button variant="contained" fullWidth={true}>SUBMIT</Button>
                </form>
            </div>
        </main>
        <Footer />
        </>
    )
}