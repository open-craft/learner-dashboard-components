import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

export default {
  title: "Sidebar",
  component: Sidebar,
};

const SidebarComponent = (args) => {
  const [activeFilters, setActiveFilters] = useState({
    type: "all",
    status: "inProgress",
    subjects: ["immunology"],
    durations: ["2-4"],
  });

  return (
    <Sidebar
      {...args}
      activeFilters={activeFilters}
      setActiveFilters={setActiveFilters}
    />
  );
}

export const SidebarFilter = {
  args: {
    btnGroups: [
      { text: "All", id: "all" },
      { text: "Courses", id: "course" },
      { text: "Learning Paths", id: "learningPath" },
    ],
    statusOptions: [
      { text: "In progress", id: "inProgress" },
      { text: "Not started", id: "notStarted" },
      { text: "Completed", id: "completed" },
    ],
    subjectOptions: [
      { text: "Artificial Intelligence", id: "artificialIntelligence" },
      { text: "Biochemistry", id: "biochemistry" },
      { text: "Genetics", id: "genetics" },
      { text: "Immunology", id: "immunology" },
      { text: "Pharmacology", id: "pharmacology" },
      { text: "Physiology", id: "physiology" },
    ],
    durationOptions: [
      { text: "0 to 1 week", id: "0-1" },
      { text: "1 to 2 weeks", id: "1-2" },
      { text: "2 to 4 weeks", id: "2-4" },
      { text: "4 to 8 weeks", id: "4-8" },
      { text: "8 to 12 weeks", id: "8-12" },
      { text: "12+ weeks", id: "12+" },
    ],
  },
  render: (args) => <SidebarComponent
    {...args}
  />,
};
