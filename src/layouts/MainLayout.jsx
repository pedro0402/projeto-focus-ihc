import BottomBar from "../components/bottombar/BottomBar";
import Topbar from "../components/topbar/Topbar";
import { usePlayer } from "../context/PlayerContext";

export default function MainLayout({ children }) {
    const { currentTrack, isPlaying, togglePlay } = usePlayer();
    
    return(
        <div className="flex flex-col h-screen overflow-hidden"> 
            <Topbar/>
            <div className="flex flex-1 overflow-hidden">
                {children}
            </div>

            { currentTrack && (
                <div className="fixed bottom-0 left-0 right-0 z-50">
                    <BottomBar 
                        currentTrack={currentTrack}
                        isPlaying={isPlaying}
                        setIsPlaying={(playing) => {
                            if (playing !== isPlaying) {
                                togglePlay();
                            }
                        }}
                    />
                </div>
            )}
        </div>
    )
}