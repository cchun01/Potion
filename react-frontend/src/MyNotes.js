import "./MyNotes.css";

function MyNotes() {
    return (
        <div>
            <div className="myHeader"> My Notes </div>
            <div className="subHeader"> All your notes are organized here </div>
            <div className="notesRow">
                <div className="noteContainer">
                    <div className="noteBoxStyle">
                        <div className="noteTitle"> + New Note </div>
                        <div className="noteEmoji"> 📝 </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyNotes;