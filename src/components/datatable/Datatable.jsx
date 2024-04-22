import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import {
  userColumns,
  contentColumns,
} from "./datatablesource"; 
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

function Datatable({ collectionType, docType }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, collectionType), // Use function to determine collection and filter
      (snapshot) => {
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        const filteredData = collectionType === "users" ? list.filter((user) => user.userType === docType) :
                             collectionType === "contents" ? list.filter((content) => content.contentType === docType):null;
        setData(filteredData);
      }
    );

    return () => unsub();
  }, [docType]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, collectionType , id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];


  return (
    <div className="datatable">
      <div className="datatableTitle">
        {docType}
        <Link to={`/${collectionType}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={collectionType === "users" ? userColumns.concat(actionColumn) : contentColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection />
    </div>
  );
}

export default Datatable;