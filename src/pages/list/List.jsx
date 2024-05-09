import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import UserTable from "../../components/datatable/UserTable";
import ContentTable from "../../components/datatable/ContentTable";


const List = ({DBcollection, docType }) => {
  
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {DBcollection==="users"? <UserTable docType={docType} />:
            DBcollection==="contents"? <ContentTable docType={docType}/> :null }
        
      </div>
    </div>
  );
};

export default List