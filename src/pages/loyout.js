import Sidebar from "@/components/common/SideBar"
 
export default function Layout({ children }) {
  return (
    <div className="flexing">
      <Sidebar />
      <main style={{
          width: '80%'
      }}>{children}</main>
    </div>
  )
}