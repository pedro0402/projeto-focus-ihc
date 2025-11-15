import Sidebar from "../components/sidebar/Sidebar"

export default function LayoutWithSidebar({ children }) {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar/>
            <main className="flex-1 overflow-y-auto">
                {children}
            </main>
        </div>
    )
}