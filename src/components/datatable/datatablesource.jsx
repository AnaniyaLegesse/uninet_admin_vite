export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
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
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 100,
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
  { field: "id", headerName: "ID", width: 90 }, 
  {
    field: "title",
    headerName: "Title",
    width: 250,
    
    renderCell: (params) => (
      <Link to={`/contents/${params.row.id}`}>
        {params.row.title}
      </Link>
    ),
  },
  { field: "author", headerName: "Author", width: 150 }, 
  { field: "contentType", headerName: "Type", width: 120 }, 
  { field: "createdAt", headerName: "Created At", width: 170, type: "date" }, 
  { field: "isActive", headerName: "Active", width: 90, type: "boolean" }, 
];

