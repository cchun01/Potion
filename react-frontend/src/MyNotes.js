import "./MyNotes.css";
import { useNavigate } from "react-router-dom";

function MyNotes() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="myHeader">My Notes</div>
      <div className="subHeader">All your notes are organized here</div>
      <div className="notesRow">
        <div className="noteContainer">
          <div className="noteBoxStyle">
            <button onClick={()=> {navigate("/new-note");}} className="noteTitle">
            + New Note
             </button>
            <div className="noteEmoji"> 📝 </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyNotes;
