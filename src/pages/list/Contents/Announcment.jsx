import "../list.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import AnnouncmentTable from "../../../components/datatable/Contents/AnnouncmentTable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <AnnouncmentTable />
      </div>
    </div>
  )
}

export default List