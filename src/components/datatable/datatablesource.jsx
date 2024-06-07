import moment from 'moment';

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "email",
    headerName: "Email",
    width: 200,
  },
  {field: "department",
  headerName: "Department",
  width: 200,
  },
  // {field: "university",
  //   headerName: "University",
  //   width: 200,
  // },
];

export const contentColumns = [
  { field: "id", headerName: "ID", width: 70 }, 
  { field: "username", headerName: "Author", width: 150 }, 
  { field: "totalComments", headerName: "Comment ", width: 150 }, 
  { field: "totalLikes", headerName: "Like ", width: 150 }, 
  { field: "createdAt", 
  headerName: "Created At", 
  width: 170, type: "date",
  valueGetter: (params) => moment(params.row.createdAt).toDate(),}, 
];

