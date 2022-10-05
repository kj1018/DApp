import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/AutoFixHigh";

function Log(props) {
  // const [editable, setEditable] = useState(false);

  function handleDeleteClick() {
    props.onDelete(props.id);
  }

  // function handleEditClick() {
  //   setEditable((prevValue) => {
  //     console.log(!prevValue);
  //     // return !prevValue;
  //   });
  // }

  return (
    <div className="log">
      {/* <h1 contentEditable={editable}>{props.title}</h1>
      <p contentEditable={editable}>{props.content}</p> */}

      <h1>{props.title}</h1>
      <p>{props.content}</p>

      <button onClick={handleDeleteClick}>
        <DeleteIcon />
      </button>

      {/* <button onClick={handleEditClick}>
        <EditIcon />
      </button> */}
    </div>
  );
}

export default Log;
