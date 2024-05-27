import moment from 'moment';

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },

  {
    field: "university",
    headerName: "University",
    width: 200,
  },
  {
    field: "department",
    headerName: "Department",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const contentColumns = [
  { field: "id", headerName: "ID", width: 70 }, 
  {
    field: "title",
    headerName: "Title",
    width: 200,

  
    
    // renderCell: (params) => (
    //   <Link to={`/contents/${params.row.id}`}>
    //     {params.row.title}
    //   </Link>
    // ),
  },
  { field: "author", headerName: "Author", width: 150 }, 
  {
    field: "university",
    headerName: "University",
    width: 200,
  },
  {
    field: "department",
    headerName: "Department",
    width: 200,
  },

  { 
    field: "createdAt", 
    headerName: "Created At", 
    width: 170, type: "date",
    valueGetter: (params) => moment(params.row.createdAt).toDate(),}, 
 
];

