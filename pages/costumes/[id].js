import { Button, Divider } from "@mui/material"
import { useRouter } from "next/router"
import HeaderNav from "../../components/HeaderNav"
import Footer from "../../components/Footer"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Pathway_Gothic_One, Noto_Serif_Khmer  } from "@next/font/google";
import costumes from "../../public/costumes.json"

const pathwayGothic = Pathway_Gothic_One({
    weight: '400',
    subsets: ['latin'],
  })

const noto = Noto_Serif_Khmer({subsets:['latin']})

export default ()=>{
    const router = useRouter()
    const {id} = router.query

    const costume = costumes.find(el=>el.id===id)

    return (
        <>
        
        <main id="costume-page" style={{backgroundImage:"url(/images/jack-gittoes.jpg)"}}>
             <HeaderNav />
            {costume && (<div className="container">
                <Button variant="contained" fullWidth={true} onClick={()=>router.back()} className="my-1"><ArrowBackIcon/> Back</Button>
                <Divider />

                <div className="scrollable">
                
                {/* <div className="my-5">
                <div className="fs-secondary-heading letter-spacing">CATEGORY: CARTOONS</div>
                <h1 className={`fs-primary-heading ${pathwayGothic.className}`}>RICK AND MORTY</h1>
                </div> */}
                <div className="my-3 fs-secondary-heading letter-spacing">CATEGORY: {costume.name}</div>
                <h1 className={`letter-spacing fs-primary-heading ${pathwayGothic.className}`}>RICK AND MORTY</h1>
               

                <section className="my-5">
                <h2 className="fs-secondary-heading letter-spacing">COSTUME POPULARITY</h2>
                <p className={`my-1 ${noto.className}`}>You have a shockingly low chance of running into another Rick and Morty costume at a party.</p>
                <Button variant="contained">SHOW SOMETHING MORE POPULAR</Button>
                </section>
                
                <section className="my-5">
                <h2 className="fs-secondary-heading letter-spacing">U.S NATIONAL RANK</h2>
                <p className={`rank my-1 ${noto.className}`}>396</p>
                <Button variant="contained">GO BACK TO LIST</Button>
                </section>

                <section className="my-5">
                <h2 className="fs-secondary-heading letter-spacing">SEARCHES BY REGION</h2>
                <div className={`my-1 ${noto.className}`}>
                    <p>Rick and Morty is searched most in:</p>
                    <ul>
                        <li>1. Joplin MO-pittsburg KS</li>
                    </ul>
                </div>
                <Button variant="contained">EXPLORE THE MAP</Button>
                </section>

                <section className="my-5">
                <h2 className="fs-secondary-heading letter-spacing">TREND OVER TIME</h2>
                <p className={`my-1 ${noto.className}`}>Looks like RICK AND MORTY is trending up right now</p>
                <Button variant="contained">SEARCH ON GOOGLE TRENDS</Button>
                </section>

                <section className="my-5">
                <h2 className="fs-secondary-heading letter-spacing">CATEGORY POPULARITY</h2>
                <p className={`my-1 ${noto.className}`}>Cartoons make up 6% of all costume searches</p>
                <Button variant="contained">BROWSE NATIONAL TRENDS LIST</Button>
                </section>
                </div>
            </div>)}
        </main>
        <Footer />
        </>
    )
}