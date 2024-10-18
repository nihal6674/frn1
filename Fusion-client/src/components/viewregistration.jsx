import React, { useState } from 'react';
import { Text, Select, Table, Container, Button } from '@mantine/core';

const ViewRegistration = () => {
  // Sample data for final registrations for each semester
  const registrationData = {
    1: [
      { code: 'CS101', name: 'Introduction to Computer Science', type: 'Core', credits: 3 },
      { code: 'MA101', name: 'Calculus I', type: 'Core', credits: 4 },
      { code: 'PH101', name: 'Physics I', type: 'Core', credits: 3 },
      { code: 'EN101', name: 'English Communication', type: 'Core', credits: 2 },
      { code: 'HS101', name: 'Environmental Science', type: 'Elective', credits: 3 },
    ],
    2: [
      { code: 'CS102', name: 'Data Structures', type: 'Core', credits: 4 },
      { code: 'CS201', name: 'Algorithms', type: 'Elective', credits: 3 },
      { code: 'MA102', name: 'Calculus II', type: 'Core', credits: 4 },
      { code: 'PH102', name: 'Physics II', type: 'Core', credits: 3 },
      { code: 'CS202', name: 'Discrete Mathematics', type: 'Elective', credits: 3 },
    ],
    3: [
      { code: 'CS201', name: 'Web Development', type: 'Elective', credits: 3 },
      { code: 'CS202', name: 'Database Management', type: 'Core', credits: 3 },
      { code: 'CS203', name: 'Operating Systems', type: 'Core', credits: 4 },
      { code: 'CS204', name: 'Software Engineering', type: 'Elective', credits: 4 },
      { code: 'CS205', name: 'Computer Networks', type: 'Core', credits: 3 },
    ],
    4: [
      { code: 'CS301', name: 'Mobile App Development', type: 'Elective', credits: 3 },
      { code: 'CS302', name: 'Machine Learning', type: 'Elective', credits: 4 },
      { code: 'CS303', name: 'Artificial Intelligence', type: 'Core', credits: 4 },
      { code: 'CS304', name: 'Human-Computer Interaction', type: 'Elective', credits: 3 },
      { code: 'CS305', name: 'Cloud Computing', type: 'Core', credits: 3 },
    ],
    5: [
      { code: 'CS401', name: 'Cyber Security', type: 'Core', credits: 3 },
      { code: 'CS402', name: 'Data Science', type: 'Elective', credits: 4 },
      { code: 'CS403', name: 'Big Data Analytics', type: 'Elective', credits: 3 },
      { code: 'CS404', name: 'Blockchain Technology', type: 'Elective', credits: 4 },
      { code: 'CS405', name: 'Capstone Project', type: 'Core', credits: 6 },
    ],
    6: [
      { code: 'CS501', name: 'Game Development', type: 'Elective', credits: 4 },
      { code: 'CS502', name: 'Advanced Web Development', type: 'Core', credits: 3 },
      { code: 'CS503', name: 'Network Security', type: 'Elective', credits: 4 },
      { code: 'CS504', name: 'Mobile Security', type: 'Elective', credits: 3 },
      { code: 'CS505', name: 'Data Mining', type: 'Core', credits: 3 },
    ],
    7: [
      { code: 'CS601', name: 'Digital Image Processing', type: 'Elective', credits: 3 },
      { code: 'CS602', name: 'Deep Learning', type: 'Elective', credits: 4 },
      { code: 'CS603', name: 'IoT Systems', type: 'Core', credits: 3 },
      { code: 'CS604', name: 'Mobile Application Security', type: 'Elective', credits: 4 },
      { code: 'CS605', name: 'Cloud Security', type: 'Elective', credits: 3 },
    ],
    8: [
      { code: 'CS701', name: 'Internship', type: 'Core', credits: 6 },
      { code: 'CS702', name: 'Thesis', type: 'Elective', credits: 4 },
      { code: 'CS703', name: 'Software Testing', type: 'Core', credits: 3 },
      { code: 'CS704', name: 'Distributed Systems', type: 'Elective', credits: 4 },
      { code: 'CS705', name: 'Project Management', type: 'Elective', credits: 3 },
    ],
  };

  const [selectedSemester, setSelectedSemester] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleGetDetails = () => {
    setShowDetails(true);
  };

  return (
    <Container>
      <Text size="xl" weight={800} mb="md">View Registration</Text>
      <Select
        label="Select Semester"
        placeholder="Pick one"
        data={[
          { value: '1', label: '1st Semester' },
          { value: '2', label: '2nd Semester' },
          { value: '3', label: '3rd Semester' },
          { value: '4', label: '4th Semester' },
          { value: '5', label: '5th Semester' },
          { value: '6', label: '6th Semester' },
          { value: '7', label: '7th Semester' },
          { value: '8', label: '8th Semester' },
        ]}
        onChange={setSelectedSemester}
        mb="md"
      />
      <Button onClick={handleGetDetails} disabled={!selectedSemester}>
        Get Details
      </Button>

      {showDetails && selectedSemester && (
        <Table striped highlightOnHover mt="md">
          <thead style={{ backgroundColor: '#b3e0f7' }}>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Course Type</th>
              <th>Credits</th>
            </tr>
          </thead>
          <tbody>
            {registrationData[selectedSemester].map((course, index) => (
              <tr key={index}>
                <td>{course.code}</td>
                <td>{course.name}</td>
                <td style={{ color: course.type === 'Core' ? 'gray' : 'green' }}>{course.type}</td>
                <td>{course.credits}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default ViewRegistration;
