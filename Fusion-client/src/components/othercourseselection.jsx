import React, { useState } from 'react';
import { Text, Checkbox, Button, Container, Table, Group } from '@mantine/core';

const OtherCourseSelection = () => {
  // Sample data for SWAYAM courses with credits
  const swayamCourses = [
    { code: 'SWY101', name: 'Python for Everybody', type: 'SWAYAM', credits: 1 },
    { code: 'SWY102', name: 'Digital Marketing', type: 'SWAYAM', credits: 2 },
    { code: 'SWY103', name: 'Data Science Basics', type: 'SWAYAM', credits: 1 },
    { code: 'SWY104', name: 'Introduction to Artificial Intelligence', type: 'SWAYAM', credits: 2 },
  ];

  // Sample backlog courses with grades
  const backlogCourses = [
    { code: 'BC101', name: 'Fundamentals of Computer Science', type: 'Backlog', credits: 3, grade: 'C' },
    { code: 'BC102', name: 'Discrete Mathematics', type: 'Backlog', credits: 3, grade: 'B' },
    { code: 'BC103', name: 'Database Systems', type: 'Backlog', credits: 3, grade: 'C+' },
    { code: 'BC104', name: 'Software Engineering', type: 'Backlog', credits: 4, grade: 'D' }, // Eligible for backlog
  ];

  const [selectedSwayam, setSelectedSwayam] = useState([]);
  const [selectedBacklog, setSelectedBacklog] = useState([]);

  const handleSwayamChange = (courseCode) => {
    setSelectedSwayam((prev) =>
      prev.includes(courseCode) ? prev.filter((code) => code !== courseCode) : [...prev, courseCode]
    );
  };

  const handleBacklogChange = (courseCode) => {
    setSelectedBacklog((prev) =>
      prev.includes(courseCode) ? prev.filter((code) => code !== courseCode) : [...prev, courseCode]
    );
  };

  const handleSubmit = () => {
    // Handle submission logic here
    alert(`Selected SWAYAM Courses: ${selectedSwayam.join(', ')}\nSelected Backlog Courses: ${selectedBacklog.join(', ')}`);
  };

  const isBacklogEligible = (grade) => {
    return grade && (grade <= 'C+');
  };

  return (
    <Container>
      <Text size="xl" weight={800} mb="md">Other Course Selection</Text>

      <Text size="lg" weight={500} mb="md">Select SWAYAM Courses</Text>
      <Table striped highlightOnHover style={{ borderCollapse: 'separate', borderSpacing: '0 12px' }}>
        <thead style={{ backgroundColor: '#b3e0f7' }}>
          <tr>
            <th style={{ padding: '12px 15px' }}>Select</th>
            <th style={{ padding: '12px 15px' }}>Course Code</th>
            <th style={{ padding: '12px 15px' }}>Course Name</th>
            <th style={{ padding: '12px 15px' }}>Credits</th>
          </tr>
        </thead>
        <tbody>
          {swayamCourses.map((course) => (
            <tr key={course.code}>
              <td style={{ padding: '12px 15px' }}>
                <Checkbox
                  checked={selectedSwayam.includes(course.code)}
                  onChange={() => handleSwayamChange(course.code)}
                  size="xs"
                />
              </td>
              <td style={{ padding: '12px 15px' }}>{course.code}</td>
              <td style={{ padding: '12px 15px' }}>{course.name}</td>
              <td style={{ padding: '12px 15px' }}>{course.credits}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Text size="lg" weight={500} mb="md" mt="md">Select Backlog Courses</Text>
      <Table striped highlightOnHover style={{ borderCollapse: 'separate', borderSpacing: '0 12px' }}>
        <thead style={{ backgroundColor: '#b3e0f7' }}>
          <tr>
            <th style={{ padding: '12px 15px' }}>Select</th>
            <th style={{ padding: '12px 15px' }}>Course Code</th>
            <th style={{ padding: '12px 15px' }}>Course Name</th>
            <th style={{ padding: '12px 15px' }}>Credits</th>
          </tr>
        </thead>
        <tbody>
          {backlogCourses
            .filter(course => isBacklogEligible(course.grade)) // Filter out ineligible courses
            .map((course) => (
              <tr key={course.code}>
                <td style={{ padding: '12px 15px' }}>
                  <Checkbox
                    checked={selectedBacklog.includes(course.code)}
                    onChange={() => handleBacklogChange(course.code)}
                    size="xs"
                  />
                </td>
                <td style={{ padding: '12px 15px' }}>{course.code}</td>
                <td style={{ padding: '12px 15px' }}>{course.name}</td>
                <td style={{ padding: '12px 15px' }}>{course.credits}</td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Group position="right" mt="md">
        <Button onClick={handleSubmit} disabled={selectedSwayam.length === 0 && selectedBacklog.length === 0}>
          Submit
        </Button>
      </Group>
    </Container>
  );
};

export default OtherCourseSelection;
