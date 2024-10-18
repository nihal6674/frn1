import React, { useState } from "react";
import { Text } from "@mantine/core";
import CustomBreadcrumbs from "../../components/Breadcrumbs";
import NavBar from "../../components/navbar";
import ViewCourse from "../../components/viewcourse"; // Import your ViewCourse component
import PreRegistration from "../../components/preregistration"; // Import your ViewCourse component
import FinalRegistration from "../../components/finalregistration"; // Import your ViewCourse component
import ViewRegistration from "../../components/viewregistration"; // Import your ViewCourse component
import OtherCourseSelection from "../../components/othercourseselection"; // Import your ViewCourse component
import AddDropCourses from "../../components/adddropcourse"
import ReplaceCourses from "../../components/replacecourse"
const AcademicPage = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderComponent = () => {
    switch (selectedComponent) {
      case "view-course":
        return <ViewCourse />;
      case "pre-registration":
        return <PreRegistration/>;
      case "final-registration":
        return <FinalRegistration />;
      case "view-registration":
        return <ViewRegistration />;
      case "other-course-selection":
        return <OtherCourseSelection />;
      case "add-drop-courses":
        return <AddDropCourses />;
      case "replace":
        return <ReplaceCourses />;
    
      // Add other cases as needed
      default:
        return <Text>Select an option from the navigation.</Text>;
    }
  };

  return (
    <>
      <NavBar setSelectedComponent={setSelectedComponent} />
      {renderComponent()} {/* Render the selected component below the NavBar */}
    </>
  );
};

export default AcademicPage;
