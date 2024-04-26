import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import UserTable from "../../components/datatable/UserTable";
import ContentTable from "../../components/datatable/ContentTable";


const List = ({docType }) => {
  
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <UserTable docType={docType} />
      </div>
    </div>
  );
};

export default List