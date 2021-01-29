import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

function TabList(props) {
  return (
    <ButtonGroup>
      <Button
        onClick={() => props.setViewCompleted(true)}
        active={props.viewCompleted}
        variant={!props.viewCompleted ? "outline-success" : "outline-success"}
      >
        Completed
      </Button>
      <Button
        onClick={() => props.setViewCompleted(false)}
        active={!props.viewCompleted}
        variant={props.viewCompleted ? "outline-secondary" : "outline-secondary"}
      >
        Incomplete
      </Button>
    </ButtonGroup>
  );
}

export default TabList;
