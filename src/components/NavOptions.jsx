import React from "react";
import TabList from "./TabList";
import { Container, Button, Navbar, Col } from "react-bootstrap";

function NavOptions(props) {
  return (
    <Navbar variant="light" expand="lg">
      <Container fluid className="new-button">
        <Col md={10}>
          <TabList
            setViewCompleted={props.setViewCompleted}
            viewCompleted={props.viewCompleted}
          />
        </Col>

        <Col md={2}>
          <Button
            onClick={props.createItem}
            variant="success"
            style={{ minWidth: "78px" }}
          >
            New
          </Button>
        </Col>
      </Container>
    </Navbar>
  );
}
export default NavOptions;
