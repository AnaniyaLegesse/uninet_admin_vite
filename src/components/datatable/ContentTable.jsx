import React from 'react'
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import {contentColumns} from "./datatablesource"; 
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";



const ContentTable = ({docType}) => {
 
    const [data, setData] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(
          collection(db, "contents"),
          (snapshot) => {
            const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            const filteredData = list.filter((content) => content.contentType === docType);
            setData(filteredData);
          }
        );
      
        return () => unsub();
      }, [docType]);
  
    const handleDelete = async (id) => {
      try {
        await deleteDoc(doc(db, contents , id));
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
        </div>
        <DataGrid
          className="datagrid"
          rows={data}
          columns={contentColumns.concat(actionColumn) }
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection />
      </div>
    );
  }

export default ContentTable