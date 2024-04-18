import "../list.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import AlmuniTable from "../../../components/datatable/Users/AlmuniTable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <AlmuniTable />
      </div>
    </div>
  )
}

export default List