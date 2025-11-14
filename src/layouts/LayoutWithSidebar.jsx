import Sidebar from "../components/sidebar/Sidebar"

export default function LayoutWithSidebar({ children }) {
    return (
        <div className="flex">
            <Sidebar/>

            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    )
}