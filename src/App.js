import React, { useState, useEffect } from "react";
import "./public/css/app.css";
import { ListGroup, Row, Col, Card } from "react-bootstrap";

import CustomModal from "./components/CustomModal";
import TodoItems from "./components/TodoItems";
import NavOptions from "./components/NavOptions";
import axios from "axios";

function App() {
  const [viewCompleted, setViewCompleted] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [activeItem, setActiveItem] = useState({
    title: "",
    description: "",
    completed: false,
  });

  useEffect(() => {
    refreshList();
    return;
  }, [viewCompleted]);

  function refreshList() {
    setShowModal(false);
    axios
      .get("http://localhost:8000/api/todo/")
      .then((res) => setTodoList(res.data))
      .catch((err) => console.log(err));
  }

  function handleSubmit(item) {
    const URL_id = "http://localhost:8000/api/todo/" + item.id + "/";
    setShowModal(false);

    if (item.id) {
      axios
        .put(URL_id, item)
        .then(refreshList)
        .catch((error) => console.log(error));
      return;
    } else {
      axios
        .post("http://localhost:8000/api/todo/", item)
        .then(() => refreshList())
        .catch((error) => console.log(error));
    }
  }

  function handleDelete(item) {
    const URL_id = "http://localhost:8000/api/todo/" + item.id + "/";
    axios
      .delete(URL_id, item)
      .then(() => refreshList())
      .catch((error) => console.log(error));
  }

  function createItem() {
    const item = { title: "", description: "", completed: false };
    setActiveItem(item);
    setShowModal(true);
  }

  function editItem(item) {
    setActiveItem(item);
    setShowModal(true);
  }

  function getDate() {
    var date = new Date();
    var d = date.getDate().toString();
    var m = date.getDay().toString();
    var y = date.getFullYear().toString();
    return (m + "/" + d + "/" + y);
  }

  return (
    <>
      <Row className="main-row">
        <Col md={6} className="mx-auto p-0">
          {/* <div className="card p-4"> */}

          <Card>
            <Card.Header>
              <h1>To-do</h1>
              <h2>{getDate()}</h2>
            </Card.Header>
            <Card.Header>
              <NavOptions
                setViewCompleted={setViewCompleted}
                viewCompleted={viewCompleted}
                createItem={createItem}
              />
            </Card.Header>

            <ListGroup>
              <TodoItems
                todoList={todoList}
                viewCompleted={viewCompleted}
                editItem={editItem}
                handleDelete={handleDelete}
                handleSubmit={handleSubmit}
              />
            </ListGroup>
          </Card>
        </Col>

        {/* </div> */}
      </Row>

      <CustomModal
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        show={showModal}
        onHide={() => setShowModal(false)}
        onSave={handleSubmit}
        handleDelete={handleDelete}
      />
    </>
  );
}
export default App;
