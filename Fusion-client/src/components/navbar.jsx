import React from "react";
import { Group, Button } from "@mantine/core";

const NavBar = ({ setSelectedComponent }) => {
  return (
    <nav style={{ marginBottom: '16px', background: 'transparent' }}>
      <Group spacing="lg">
        <Button variant="outline" onClick={() => setSelectedComponent("view-course")}>
          View Courses
        </Button>
        <Button variant="outline" onClick={() => setSelectedComponent("pre-registration")}>
          Pre-Registration
        </Button>
        <Button variant="outline" onClick={() => setSelectedComponent("final-registration")}>
          Final Registration
        </Button>
        <Button variant="outline" onClick={() => setSelectedComponent("view-registration")}>
          View Registration
        </Button>
        <Button variant="outline" onClick={() => setSelectedComponent("other-course-selection")}>
          Other Course Selection
        </Button>
        <Button variant="outline" onClick={() => setSelectedComponent("add-drop-courses")}>
          Add/Drop Course
        </Button>
        <Button variant="outline" onClick={() => setSelectedComponent("replace")}>
          Replace Course
        </Button>
      </Group>
    </nav>
  );
};

export default NavBar;
