import React from "react";
import { ButtonGroup, Button, ListGroup, Col, Row } from "react-bootstrap";

function TodoItems(props) {
  const newItems = props.todoList.filter((item) => {
    return item.completed === props.viewCompleted;
  });

  const variableClass = (item) => {
    if (props.viewCompleted) {
      return <h5 className="todo-title completed-todo">{item.title}</h5>;
    } else return <h5 className="todo-title">{item.title}</h5>;
  };

  function handleComplete(item) {
    item.completed = true;
    props.handleSubmit(item);
  }

  return newItems.map((item) => (
    <div key={item.id}>
      <ListGroup.Item>
        <Row noGutters>
          <Col sm={2}></Col>
          <Col sm={8}>
            <div>
              {variableClass(item)}
              <p className="todo-description">{item.description}</p>
            </div>
          </Col>

          <Col sm={2}>
            <ButtonGroup vertical size="sm" style={{ minWidth: "78px" }}>
              <Button
                variant="primary"
                onClick={() => handleComplete(item)}
                disabled={props.viewCompleted}
              >
                Complete
              </Button>
              <Button
                variant="outline-dark"
                onClick={() => props.editItem(item)}
              >
                Edit
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </ListGroup.Item>
    </div>
  ));
}

export default TodoItems;
