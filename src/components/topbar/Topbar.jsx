import { Home, Search } from "lucide-react"
import Logo from "../logo/Logo"

function Topbar() {
    return (
        <div className="w-full bg-black border-b border-gray-800 px-6 py-3">
            <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
                <div className="flex items-center px-1">
                    <Logo/>
                </div>
                <div className="flex items-center gap-4 flex-1 justify-center max-w-2xl mx-8">
                <button className="p-2.5 bg-gray-900 hover:bg-gray-800 rounded-full transition-colors">
                    <Home className="w-5 h-5 text-white" />
                </button>
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                    type="text"
                    placeholder="Qual soundtrack você quer escutar?"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white placeholder-gray-400 pl-12 pr-12 py-2.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all"
                    />
                </div>
                </div>
                <div className="flex items-center">
                <div className="w-9 h-9 rounded-full bg-gray-700 overflow-hidden cursor-pointer hover:ring-2 hover:ring-gray-600 transition-all">
                    <img 
                        src="/user.jpg" 
                        alt="User avatar"
                        className="w-full h-full object-cover"/>
                </div>
                </div>
            </div>
        </div>
  );
}

export default Topbar