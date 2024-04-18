import "../list.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import FacultyTable from "../../../components/datatable/Users/FacultyTable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <FacultyTable />
      </div>
    </div>
  )
}

export default List