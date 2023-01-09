import { useState,useEffect } from "react"
import { Button } from "@mui/material"
import HeaderNav from "../components/HeaderNav"
import CircleIcon from '@mui/icons-material/Circle';
import styles from '../styles/TopCostumes.module.css'
import { Josefin_Slab } from "@next/font/google";
import Footer from "../components/Footer"
import MainNav from "../components/MainNav";
import Link from "next/link";

const josefinSlab = Josefin_Slab({ subsets: ['latin'] })



function play(){
    new Audio("/clown-piano.wav").play()
}
import costumes from "../public/costumes.json"
import { NearMe } from "@mui/icons-material";

export default function TopCostumes(){

    const NEXT = 100
    const [showMore,setShowMore] = useState(true)

    const [limit,setLimit] = useState(99)

    // const [value,setValue] = useState(0)

    // useEffect(()=>{
    //    console.log("hello")
    //    play()
    // },[])

    function loadMoreCostumes(){
        let newLimit = limit+NEXT
        setLimit(newLimit)
        if(newLimit>=costumes.length){
            setShowMore(false)
        }
    }

    return (
        <>
        <HeaderNav />
        <MainNav pageName={"top-costumes"}/>
        <main className={styles.bg}>
            <section>
            <div className="container scrollable">
            <ul className="costumes-list" style={{fontSize:"27px",marginTop:"1em",marginBottom: showMore?0:"400px"}}>

                {costumes.slice(0,limit).map((costume)=>(
                    <li key={costume.id}>
                        <Link href={`/costumes/${costume.id}`} style={{display:"flex",alignItems:"baseline",textTransform:"uppercase",textShadow: "0px 2px 2px #fff9f9"}} className={josefinSlab.className}>
                        <span>{costume.rank}</span>
                        <div className="divider">
                            <CircleIcon />
                            <CircleIcon />
                            <CircleIcon />
                            <CircleIcon />
                        </div>
                        <span className="my-1">{costume.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            {showMore && <Button variant="contained" style={{marginBottom:"400px"}} onClick={loadMoreCostumes}>SHOW MORE</Button>}
            
            </div>
            </section>
        </main>
        <Footer />
        </>
    )
}

