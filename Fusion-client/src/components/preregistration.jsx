import React, { useState } from 'react';
import { Text, Table, Container, Button, Group, NumberInput } from '@mantine/core';

const PreRegistration = () => {
  const initialCourses = [
    {
      code: 'CS101',
      name: 'Introduction to Computer Science',
      type: 'Core',
      credits: 3,
      added: false,
    },
    {
      code: 'CS102',
      name: 'Data Structures',
      type: 'Core',
      credits: 4,
      added: false,
    },
    {
      code: 'CS201',
      name: 'Web Development',
      type: 'PR Project',
      credits: 3,
      added: false,
    },
    {
      code: 'CS202',
      name: 'Database Management',
      type: 'Core',
      credits: 3,
      added: false,
    },
    {
      code: 'CS301',
      name: 'Software Engineering',
      type: 'PR Project',
      credits: 4,
      added: false,
    },
  ];

  const initialElectives = [
    {
      code: 'CS401',
      name: 'Machine Learning',
      credits: 3,
      priority: null,
      editable: true,
    },
    {
      code: 'CS404',
      name: 'Cloud Computing',
      credits: 3,
      priority: null,
      editable: true,
    },
    {
      code: 'CS405',
      name: 'Artificial Intelligence',
      credits: 3,
      priority: null,
      editable: true,
    },
    {
      code: 'CS406',
      name: 'Data Analytics',
      credits: 3,
      priority: null,
      editable: true,
    },
    {
      code: 'CS407',
      name: 'Internet of Things',
      credits: 3,
      priority: null,
      editable: true,
    },
    {
      code: 'CS408',
      name: 'Blockchain Technology',
      credits: 3,
      priority: null,
      editable: true,
    },
  ];

  const [courses, setCourses] = useState(initialCourses);
  const [electives, setElectives] = useState(initialElectives);
  const [submittedCourses, setSubmittedCourses] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getTypeColor = (type) => {
    switch (type) {
      case 'Core':
        return { color: 'gray' };
      case 'PR Project':
        return { color: 'blue' };
      default:
        return { color: 'green' };
    }
  };

  const handleToggleCourse = (index, isElective) => {
    if (isElective) {
      setElectives((prevElectives) =>
        prevElectives.map((course, idx) =>
          idx === index ? { ...course, added: !course.added } : course
        )
      );
    } else {
      setCourses((prevCourses) =>
        prevCourses.map((course, idx) =>
          idx === index ? { ...course, added: !course.added } : course
        )
      );
    }
  };

  const handlePriorityChange = (index, value) => {
    setElectives((prevElectives) =>
      prevElectives.map((course, idx) =>
        idx === index ? { ...course, priority: value } : course
      )
    );
  };

  const handleSubmit = () => {
    const confirmation = window.confirm('Are you sure you want to submit your course selections?');
    if (confirmation) {
      const addedCourses = [
        ...courses.filter((course) => course.added),
        ...electives.filter((course) => course.priority !== null),
      ];
      setSubmittedCourses(addedCourses);
      setIsSubmitted(true);
    }
  };

  return (
    <Container>
      <Text size="xl" weight={800} mb="md">
        Pre-Registered Courses
      </Text>
      <Text size="lg" weight={600} mb="sm">Core and PR Project Courses</Text>
      <Table striped highlightOnHover style={{ borderCollapse: 'separate', borderSpacing: '0 12px' }}>
        <thead style={{ backgroundColor: '#b3e0f7' }}>
          <tr>
            <th style={{ padding: '12px 15px' }}>Course Code</th>
            <th style={{ padding: '12px 15px' }}>Course Name</th>
            <th style={{ padding: '12px 15px' }}>Course Type</th>
            <th style={{ padding: '12px 15px' }}>Credits</th>
            <th style={{ padding: '12px 15px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td style={{ padding: '12px 15px' }}>{course.code}</td>
              <td style={{ padding: '12px 15px' }}>{course.name}</td>
              <td style={{ padding: '12px 15px', ...getTypeColor(course.type) }}>{course.type}</td>
              <td style={{ padding: '12px 15px' }}>{course.credits}</td>
              <td style={{ padding: '12px 15px' }}>
                {course.type === 'Core' ? (
                  <Button color="gray" disabled>
                    Added
                  </Button>
                ) : submittedCourses.includes(course) ? (
                  <Button color="gray" disabled>
                    Added
                  </Button>
                ) : (
                  <Button
                    color={course.added ? 'green' : 'blue'}
                    onClick={() => handleToggleCourse(index, false)}
                  >
                    {course.added ? 'Added' : 'Add Course'}
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Electives Section */}
      <Text size="lg" weight={600} mt="md" mb="sm">Elective Courses</Text>
      <Table striped highlightOnHover style={{ borderCollapse: 'separate', borderSpacing: '0 12px' }}>
        <thead style={{ backgroundColor: '#b3e0f7' }}>
          <tr>
            <th style={{ padding: '12px 15px' }}>Course Code</th>
            <th style={{ padding: '12px 15px' }}>Course Name</th>
            <th style={{ padding: '12px 15px' }}>Credits</th>
            <th style={{ padding: '12px 15px' }}>Priority</th>
          </tr>
        </thead>
        <tbody>
          {electives.map((course, index) => (
            <tr key={index}>
              <td style={{ padding: '12px 15px' }}>{course.code}</td>
              <td style={{ padding: '12px 15px' }}>{course.name}</td>
              <td style={{ padding: '12px 15px' }}>{course.credits}</td>
              <td style={{ padding: '12px 15px' }}>
                <NumberInput
                  min={1}
                  max={electives.length}
                  value={course.priority}
                  onChange={(value) => handlePriorityChange(index, value)}
                  placeholder="Priority"
                  disabled={isSubmitted} // Disable input if submitted
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Group position="right" mt="md">
        <Button onClick={handleSubmit} color="green" disabled={isSubmitted}>
          Submit
        </Button>
      </Group>
    </Container>
  );
};

export default PreRegistration;
