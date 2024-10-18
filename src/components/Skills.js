import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function Skills() {
  return (
    <div className="skills-container">
      <h2 className="text-center">My Skills</h2>
      <ListGroup>
        <ListGroup.Item>JavaScript</ListGroup.Item>
        <ListGroup.Item>Blender</ListGroup.Item>
        <ListGroup.Item>C#</ListGroup.Item>
        <ListGroup.Item>Unity</ListGroup.Item>
        <ListGroup.Item>Python</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Skills;