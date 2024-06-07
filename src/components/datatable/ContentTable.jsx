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
            const filteredData = list.filter((content) => content.postType === docType);
            setData(filteredData);
          }
        );
      
        return () => unsub();
      }, [docType]);
  
  
    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellAction">
              <Link to={`/contents/${params.row.id}`} style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
            
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