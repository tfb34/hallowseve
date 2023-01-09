import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import InfoIcon from '@mui/icons-material/Info';
import { Patrick_Hand } from "@next/font/google";
import SearchBar from './SearchBar';

const patrickHand = Patrick_Hand({
    weight: '400',
    subsets: ['latin'],
  })



export default function HeaderNav(){

    return (
        <div className="container">
        <nav>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
               <SearchBar />
                <span style={{fontSize:"30px"}} className={patrickHand.className}>Hallows Eve</span>
                <div className="actions">
                    <VolumeUpIcon style={{marginRight:"0.5em"}}/>
                    <InfoIcon />
                </div>
            </div>
        </nav>
        </div>
    )
}