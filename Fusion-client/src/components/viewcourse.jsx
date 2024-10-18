// ViewCourse.js
import React from 'react';
import { Text, Table, Container } from '@mantine/core';

const ViewCourse = () => {
  // Sample data for courses
  const courses = [
    {
      code: 'CS101',
      name: 'Introduction to Computer Science',
      type: 'Core',
      semester: '1st Semester',
      credits: 3,
    },
    {
      code: 'CS102',
      name: 'Data Structures',
      type: 'Core',
      semester: '2nd Semester',
      credits: 4,
    },
    {
      code: 'CS201',
      name: 'Web Development',
      type: 'Elective',
      semester: '3rd Semester',
      credits: 3,
    },
    {
      code: 'CS202',
      name: 'Database Management',
      type: 'Core',
      semester: '4th Semester',
      credits: 3,
    },
    {
      code: 'CS301',
      name: 'Software Engineering',
      type: 'Elective',
      semester: '5th Semester',
      credits: 4,
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Core':
        return { color: 'gray' };
      default:
        return { color: 'green' };
    }
  };

  return (
    <Container>
      <Text size="xl" weight={800} mb="md"> {/* Increased weight for boldness */}
        Available Courses
      </Text>
      <Table striped highlightOnHover style={{ borderCollapse: 'separate', borderSpacing: '0 12px' }}> {/* Increased spacing */}
        <thead style={{ backgroundColor: '#b3e0f7' }}>
          <tr>
            <th style={{ padding: '12px 15px' }}>Course Code</th>
            <th style={{ padding: '12px 15px' }}>Course Name</th>
            <th style={{ padding: '12px 15px' }}>Course Type</th>
            <th style={{ padding: '12px 15px' }}>Semester</th>
            <th style={{ padding: '12px 15px' }}>Credits</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td style={{ padding: '12px 15px' }}>{course.code}</td>
              <td style={{ padding: '12px 15px' }}>{course.name}</td>
              <td style={{ padding: '12px 15px', ...getTypeColor(course.type) }}>{course.type}</td> {/* Conditional styling */}
              <td style={{ padding: '12px 15px' }}>{course.semester}</td>
              <td style={{ padding: '12px 15px' }}>{course.credits}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ViewCourse;
