import Image from "next/image"
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer(){
    return (
        <footer style={{position:"fixed",width:"100%",bottom:0,zIndex:"2",backgroundImage: "linear-gradient(to bottom, rgba(255,0,0,0), #191818)"}}>
            <div className="container">
            <ul style={{display:"flex",alignItems:"center",justifyContent:"space-between"}} className="my-1">
                <li><a href="https://trends.google.com/trends/" target="_blank"><Image
                src="/images/google-trends.png"
                alt="Google Trends logo"
                width={88}
                height={14}
                priority
              /></a></li>
              <li><TwitterIcon /></li>
            </ul>
            </div>
        </footer>
    )
}