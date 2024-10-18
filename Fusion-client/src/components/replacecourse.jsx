import React, { useState } from 'react';
import { Text, Button, Container, Table, Select, Group } from '@mantine/core';

const ReplaceCourse = () => {
  // Sample data for registered courses (including Core and Elective)
  const registeredCourses = [
    { code: 'CS101', name: 'Introduction to Computer Science', credits: 3, type: 'Core' },
    { code: 'CS102', name: 'Data Structures', credits: 4, type: 'Core' },
    { code: 'CS201', name: 'Web Development', credits: 3, type: 'Elective' },
    { code: 'CS202', name: 'Database Management', credits: 3, type: 'Elective' },
  ];

  // Sample data for Swayam courses (only for electives)
  const swayamCourses = [
    { code: 'SW101', name: 'Introduction to Swayam', credits: 1 },
    { code: 'SW102', name: 'Advanced Swayam Topics', credits: 2 },
  ];

  const [selectedCourses, setSelectedCourses] = useState(
    registeredCourses.reduce((acc, course) => {
      acc[course.code] = null; // Initialize selection with null
      return acc;
    }, {})
  );
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission

  const handleReplaceChange = (courseCode, newElectiveCode) => {
    setSelectedCourses((prev) => ({
      ...prev,
      [courseCode]: newElectiveCode,
    }));
  };

  const handleSubmit = () => {
    // Handle course replacement logic here
    const replacements = Object.entries(selectedCourses)
      .filter(([, elective]) => elective) // Only get replacements that have been selected
      .map(([course, elective]) => ({ course, elective }));

    alert(`Courses replaced: ${JSON.stringify(replacements, null, 2)}`);
    setIsSubmitted(true); // Mark as submitted
  };

  return (
    <Container>
      <Text size="xl" weight={800} mb="md">
        Replace Courses
      </Text>
      <Table striped highlightOnHover style={{ borderCollapse: 'separate', borderSpacing: '0 12px' }}>
        <thead style={{ backgroundColor: '#b3e0f7' }}>
          <tr>
            <th style={{ padding: '12px 15px' }}>Registered Course</th>
            <th style={{ padding: '12px 15px' }}>Replace With</th>
          </tr>
        </thead>
        <tbody>
          {registeredCourses.map((course) => (
            <tr key={course.code}>
              <td style={{ padding: '12px 15px' }}>
                {course.code} - {course.name} ({course.credits} Credits)
              </td>
              <td style={{ padding: '12px 15px' }}>
                {course.type === 'Elective' ? (
                  <Select
                    value={selectedCourses[course.code]}
                    onChange={(value) => handleReplaceChange(course.code, value)}
                    data={swayamCourses.map((swayam) => ({
                      value: swayam.code,
                      label: `${swayam.code} - ${swayam.name} (${swayam.credits} Credits)`,
                    }))}
                    placeholder="Select Swayam Course"
                    disabled={isSubmitted} // Disable selection after submission
                  />
                ) : (
                  <Text color="gray">Core courses cannot be replaced.</Text>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Group position="right" mt="md">
        <Button onClick={handleSubmit} disabled={isSubmitted || Object.values(selectedCourses).every((value) => !value)}>
          Submit
        </Button>
      </Group>
    </Container>
  );
};

export default ReplaceCourse;
