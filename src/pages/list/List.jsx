import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import StudentTable from "../../components/datatable/Users/StudentTable"
import CoordinatorTable from "../../components/datatable/Users/CoordinatorTable"
import FacultyTable from "../../components/datatable/Users/FacultyTable"
import AlmuniTable from "../../components/datatable/Users/AlmuniTable"
import PostTable from "../../components/datatable/Contents/PostTable"
import NewsTable from "../../components/datatable/Contents/NewsTable"
import EventTable from "../../components/datatable/Contents/EventTable"
import AnnouncmentTable from "../../components/datatable/Contents/AnnouncmentTable"

const tableComponents = {
  student: <StudentTable />,
  almuni: <AlmuniTable />,
  faculty: <FacultyTable />,
  coordinator: <CoordinatorTable />,
  post: <PostTable />,
  news: <NewsTable />,
  event: <EventTable />,
  announcment: <AnnouncmentTable />,
};

const List = ({ tableType }) => {
  const table = tableComponents[tableType]; 

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {table}
      </div>
    </div>
  );
};

export default List