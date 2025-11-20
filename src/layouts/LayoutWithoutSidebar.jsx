import BottomBar from "../components/bottombar/BottomBar";

export default function LayoutWithoutSidebar({ children }) {
    return (
        <div className="flex flex-1 flex-col overflow-hidden">
            <main className="flex-1 overflow-y-auto">
                {children}
            </main>
        </div>
    )
}