import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function Skills() {
  return (
    <div className="skills-container">
      <h2 className="text-center">My Skills</h2>
      <ListGroup>
        <ListGroup.Item>JavaScript</ListGroup.Item>
        <ListGroup.Item>React</ListGroup.Item>
        <ListGroup.Item>CSS</ListGroup.Item>
        <ListGroup.Item>Node.js</ListGroup.Item>
        <ListGroup.Item>Python</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Skills;