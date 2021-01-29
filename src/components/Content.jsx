import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItems from './TodoItems';
import NavOptions from './NavOptions';
import CustomModal from './CustomModal';
import { Card, Row } from "react-bootstrap";

function Content() {
  const [viewCompleted, setViewCompleted] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const [modal, setModal] = useState(false);
  const [activeItem, setActiveItem] = useState({
    title: "",
    description: "",
    completed: false,
  });

  if (todoList.length > 0) {
    console.log(todoList);
  }

  useEffect(() => {
    refreshList();
    return;
  }, [viewCompleted]);

  function refreshList() {
    axios
      .get("http://localhost:8000/api/todo/")
      .then((res) => setTodoList(res.data))
      .catch((err) => console.log(err));
  }

  function toggle() {
    setModal(!modal);
  };

  function handleSubmit(item) {
    const URL_id = "http://localhost:8000/api/todo/" + item.id + "/";
    toggle();
    if (item.id) {
      axios.put(URL_id, item).then((res) => refreshList());
      return;
    } else {
      axios
        .post("http://localhost:8000/api/todo/", item)
        .then((res) => refreshList());
    }
  }

  function handleDelete(item) {
    const URL_id = "http://localhost:8000/api/todo/" + item.id + "/";
    axios.delete(URL_id, item).then((res) => refreshList());
  }

  function createItem() {
    const item = { title: "", description: "", completed: false };
    setActiveItem(item);
    setModal(!modal);
  }

  function editItem(item) {
    setActiveItem(item);
    setModal(!modal);
  }

  return (
    <>
      <Row noGutters>
        <Card>
          <NavOptions />

          <ul>
            <TodoItems
              todoList={todoList}
              viewCompleted={viewCompleted}
              editItem={editItem}
              handleDelete={handleDelete}
            />
          </ul>
        </Card>
      </Row>
      <CustomModal
          activeItem={activeItem}
          toggle={toggle}
          onSave={handleSubmit}
        />
    </>
  );
}

export default Content;