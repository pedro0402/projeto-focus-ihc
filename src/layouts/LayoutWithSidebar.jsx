import Sidebar from "../components/sidebar/Sidebar"


export default function LayoutWithSidebar({ children }) {
    return (
        <div className="flex flex-1 overflow-hidden">
            <div className="hidden md:block h-full">
                <Sidebar/>
            </div>
            <main className="flex-1 overflow-y-auto">
                {children}
            </main>
        </div>
    )
}