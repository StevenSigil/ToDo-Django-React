import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

function CustomModal(props) {
  const activeItem = props.activeItem;
  const setActiveItem = props.setActiveItem;

  const title = activeItem.title !== "" ? activeItem.title : "Enter Todo Title";
  const description =
    activeItem.description !== ""
      ? activeItem.description
      : "Enter Todo description";


  function handleChange(event) {
    let { name, value } = event.target;

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }
    setActiveItem((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header>
          <Modal.Title>Todo Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="form-title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={activeItem.title}
                onChange={handleChange}
                placeholder={title}
              />
            </Form.Group>
            <Form.Group controlId="form-description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={activeItem.description}
                onChange={handleChange}
                placeholder={description}
              />
            </Form.Group>

            <Form.Check
              type="checkbox"
              label="Completed"
              name="completed"
              defaultChecked={activeItem.completed}
              aria-checked={activeItem.completed}
              onChange={handleChange}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => props.onSave(activeItem)}>
            Save
          </Button>
          <Button variant="danger" onClick={() => props.handleDelete(activeItem)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default CustomModal;
