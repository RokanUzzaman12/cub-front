import { useEffect } from "react";
import { singleFaculty } from "../../stores/facultiesStore";
import { fetchfacultyBySlugAndFillStore } from "../../loaders/facultiesLoader";
import { useStore } from "@nanostores/react";
import FacultyAdminDetails from "./FacultyAdminDetail";
import DepartmentsList from "./DepartmentsList";
import ScholarshipCard from "../common/ScholarshipCard";
import EventNoticeSection from "../common/EventNoticeSection";
import { facultyWiseActivities } from "../../stores/activitiesStore.js";
import { fetchFacultyWiseActivitiesAndFillStore } from "../../loaders/activitesLoader.js";
import FacultyActivities from "./FacultyActivities.jsx";
import { facultyWiseClubs } from "../../stores/clubStore.js";
import { fetchFacultyWiseClubsAndFillStore } from "../../loaders/clubsLoader.js";
import FacultyClubs from "./FacultyClubs.jsx";
import { facultyWiseResearch } from "../../stores/researchStore.js";
import { fetchFacultyWiseResearchAndFillStore } from "../../loaders/researchLoader.js";
import FacultyResearch from "./FacultyResearch.jsx";

const Faculty = ({ slug }) => {
  const faculty = useStore(singleFaculty) || {};
  const facultyActivities = useStore(facultyWiseActivities) || [];
  const facultyClubs = useStore(facultyWiseClubs) || [];
  const facultyResearch = useStore(facultyWiseResearch) || [];
  useEffect(() => {
    fetchfacultyBySlugAndFillStore(slug);
    fetchFacultyWiseActivitiesAndFillStore(slug);
    fetchFacultyWiseClubsAndFillStore(slug);
    fetchFacultyWiseResearchAndFillStore(slug);
  }, []);
  return (
    <>
      <FacultyAdminDetails faculty={faculty} />
      <DepartmentsList slug={slug} />
      <FacultyResearch facultyResearch={facultyResearch} slug={slug} />
      <FacultyActivities facultyActivities={facultyActivities} slug={slug} />
      <FacultyClubs facultyClubs={facultyClubs} slug={slug} />
      <ScholarshipCard />
      <EventNoticeSection slug={slug} facultyEventNotice={true} />
    </>
  );
};

export default Faculty;
