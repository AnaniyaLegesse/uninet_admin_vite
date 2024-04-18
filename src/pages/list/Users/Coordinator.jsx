import "../list.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import CoordinatorTable from "../../../components/datatable/Users/CoordinatorTable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <CoordinatorTable />
      </div>
    </div>
  )
}

export default List