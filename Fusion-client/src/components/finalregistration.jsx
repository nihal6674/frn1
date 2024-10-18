import React from 'react';
import { Text, Table, Container } from '@mantine/core';

// Sample data for submitted courses
const submittedCourses = [
  {
    code: 'CS101',
    name: 'Introduction to Computer Science',
    type: 'Core',
    credits: 3,
    status: 'Added', // Only show courses that are added
  },
  {
    code: 'CS102',
    name: 'Data Structures',
    type: 'Core',
    credits: 4,
    status: 'Added',
  },
  {
    code: 'CS201',
    name: 'Web Development',
    type: 'Elective',
    credits: 3,
    status: 'Added',
  },
  {
    code: 'CS202',
    name: 'Database Management',
    type: 'Elective',
    credits: 3,
    status: 'Not Added', // This one will not be displayed
  },
  // Add more courses as needed
];

const FinalRegistration = () => {
  // Filter courses to show only those that are added
  const filteredCourses = submittedCourses.filter(course => course.status === 'Added');

  return (
    <Container>
      <Text size="xl" weight={800} mb="md">
        Final Registration
      </Text>
      <Table striped highlightOnHover style={{ borderCollapse: 'separate', borderSpacing: '0 12px' }}>
        <thead style={{ backgroundColor: '#b3e0f7' }}>
          <tr>
            <th style={{ padding: '12px 15px' }}>Course Code</th>
            <th style={{ padding: '12px 15px' }}>Course Name</th>
            <th style={{ padding: '12px 15px' }}>Course Type</th>
            <th style={{ padding: '12px 15px' }}>Credits</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map((course, index) => (
            <tr key={index}>
              <td style={{ padding: '12px 15px' }}>{course.code}</td>
              <td style={{ padding: '12px 15px' }}>{course.name}</td>
              <td style={{ padding: '12px 15px', color: course.type === 'Core' ? 'gray' : 'green' }}>
                {course.type}
              </td>
              <td style={{ padding: '12px 15px' }}>{course.credits}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default FinalRegistration;
