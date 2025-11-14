import Sidebar from './Sidebar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.12),transparent_40%)] dark:bg-neutral-950">
      <Sidebar />
      <main className="pl-20 lg:pl-64">
        {children}
      </main>
    </div>
  )
}
