import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataTable from "../../components/datatable/DataTable"


const List = ({ collectionType, docType }) => {

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable collectionType={collectionType} docType={docType} />
      </div>
    </div>
  );
};

export default List