import BottomBar from "../components/bottombar/BottomBar";
import Topbar from "../components/topbar/Topbar";

export default function({ children }) {
    return(
        <div className="flex flex-col h-screen overflow-hidden"> 
            <Topbar/>
            <div className="flex flex-1 overflow-hidden">
                {children}
            </div>
            <BottomBar/>
        </div>
    )
}