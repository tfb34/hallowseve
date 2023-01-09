import { Button } from "@mui/material"

export default function MainNav({pageName}){
    return (
        <div className="container">
            <nav className="main-nav">
                <ul style={{display:"flex"}}>
                    <li><Button variant={pageName==="top-costumes"?"contained":"outlined"} className="fs-button" style={{boxShadow: "0px 0px 5px rgb(255 253 253 / 86%)"}}>TOP COSTUMES</Button></li>
                    <li><Button variant={pageName==="costume-map"?"contained":"outlined"} className="fs-button" style={{boxShadow: "0px 0px 5px rgb(255 253 253 / 86%)"}}>COSTUME MAP</Button></li>
                    <li><Button variant={pageName==="costume-wizard"?"contained":"outlined"} className="fs-button" style={{boxShadow: "0px 0px 5px rgb(255 253 253 / 86%)"}}>COSTUME WIZARD</Button></li>
                </ul>
            </nav>
        </div>
    )
}