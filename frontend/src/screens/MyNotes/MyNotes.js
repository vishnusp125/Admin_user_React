import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import axios from 'axios';

const MyNotes = () => {

  const [notes, setNote] = useState([])

const deleteHandler =(id) =>{
  if(window.confirm("Are you sure ?")){

  }
}
const fetchNotes = async() => {
  const {data} = await axios.get('/api/notes')
  setNote(data);
}
console.log(notes);

useEffect(() => {
  fetchNotes();
},[])

  return (
    <MainScreen title="Welcome ....">
      <Link to="createnote">
        <Button
          variant="success"
          style={{ marginLeft: 10, marginBottom: 6 }}
          size="lg"
        >
          Create New Note
        </Button>
        </Link>

        {notes.map((note) => (
          <Card key={note._id} style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                {note.title}
              </span>

              <div>
                <Button href={`/note/${note._id}`} >Edit</Button>
                <Button variant="danger" className="mx-2" onClick={() => deleteHandler(note._id)}>
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Card.Body>
            <blockquote className="blockquote mb-0">
          <p>
            {note.content}
          </p>
          <footer className="blockquote-footer">
            Created On - date
          </footer>
        </blockquote>
            </Card.Body>
          </Card>
        ))}
    
    </MainScreen>
  );
};

export default MyNotes;
