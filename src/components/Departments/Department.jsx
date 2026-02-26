import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { fetchDepartmentBySlugAndFillStore } from "../../loaders/departmentsLoader";
import { singleDepartment } from "../../stores/departmentsStore";
import BreadCrumb from "../common/BreadCrumb.jsx";
import DepartmentAdminDetail from "./DepartmentAdminDetail.jsx";
import DepartmentAcademicDetail from "./DepartmentAcademicDetail.jsx";
import DepartmentFacultyDetail from "./DepartmentFacultyDetail.jsx";
import EventNoticeSection from "../common/EventNoticeSection.jsx";
import DepartmentActivities from "./DepartmentActivites.jsx";
import { fetchDepartmentWiseProgramAndFillStore } from "../../loaders/programsLoader.js";
import { departmentWisePrograms } from "../../stores/programsStore.js";
import { fetchDepartmentWiseStaffsAndFillStore } from "../../loaders/staffLoader.js";
import { departmentWiseStaffs } from "../../stores/staffStore.js";
import { departmentWiseActivities } from "../../stores/activitiesStore.js";
import { fetchDepartmentWiseActivitiesAndFillStore } from "../../loaders/activitesLoader.js";
import { departmentWiseClubs } from "../../stores/clubStore.js";
import { fetchDepartmentWiseClubsAndFillStore } from "../../loaders/clubsLoader.js";
import DepartmentClubs from "./DepartmentClubs.jsx";
import { departmentWiseResearch } from "../../stores/researchStore.js";
import { fetchDepartmentWiseResearchAndFillStore } from "../../loaders/researchLoader.js";
import DepartmentResearch from "./DepartmentResearch.jsx";
import { departmentWiseAlumni } from "../../stores/alumni.js";
import { fetchDepartmentWiseAlumniAndFillStore } from "../../loaders/alumniLoader.js";
import DepartmentAlumni from "./DepartmentAlumni.jsx";
import DepartmentUniqueFeature from "./DepartmentUniqueFeature.jsx";
import { fetchDepartmentWiseUniqueFeatureAndFillStore } from "../../loaders/uniqueFeaturesLoader.js";
import { departmentWiseUniqueFeatures } from "../../stores/uniqueFeaturesStore.js";
const Department = ({ slug }) => {
  const department = useStore(singleDepartment) || {};
  const departmentPrograms = useStore(departmentWisePrograms) || [];
  const departmentStaffs = useStore(departmentWiseStaffs) || [];
  const departmentActivities = useStore(departmentWiseActivities) || [];
  const departmentClubs = useStore(departmentWiseClubs) || [];
  const departmentResearch = useStore(departmentWiseResearch) || [];
  const departmentAlumni = useStore(departmentWiseAlumni) || [];
  const departmentUniqueFeature = useStore(departmentWiseUniqueFeatures) || [];
  useEffect(() => {
    fetchDepartmentBySlugAndFillStore(slug);

    if (departmentPrograms.length == 0) {
      fetchDepartmentWiseProgramAndFillStore(slug);
    }
    if (departmentStaffs.length == 0) {
      fetchDepartmentWiseStaffsAndFillStore(slug);
    }
    if (departmentActivities.length == 0) {
      fetchDepartmentWiseActivitiesAndFillStore(slug);
    }
    if (departmentClubs.length == 0) {
      fetchDepartmentWiseClubsAndFillStore(slug);
    }
    if (departmentResearch.length == 0) {
      fetchDepartmentWiseResearchAndFillStore(slug);
    }
    if (departmentAlumni.length == 0) {
      fetchDepartmentWiseAlumniAndFillStore(slug);
    }
    if (departmentUniqueFeature.length == 0) {
      fetchDepartmentWiseUniqueFeatureAndFillStore(slug);
    }
  }, [slug]);
  return (
    <>
      <BreadCrumb data={department} />
      <DepartmentAdminDetail department={department} />
      <DepartmentUniqueFeature
        departmentUniqueFeature={departmentUniqueFeature}
        department={department}
        slug={slug}
      />
      {!department.is_office && (
        <DepartmentAcademicDetail departmentPrograms={departmentPrograms} />
      )}
      <DepartmentFacultyDetail
        departmentStaffs={departmentStaffs}
        department={department}
        slug={slug}
      />

      <DepartmentResearch
        departmentResearch={departmentResearch}
        department={department}
        slug={slug}
      />
      <DepartmentActivities
        departmentActivities={departmentActivities}
        department={department}
        slug={slug}
      />
      <DepartmentClubs
        departmentClubs={departmentClubs}
        department={department}
        slug={slug}
      />
      <DepartmentAlumni
        departmentAlumni={departmentAlumni}
        department={department}
        slug={slug}
      />
      <EventNoticeSection slug={slug} departmentEventNotice={true} />
    </>
  );
};

export default Department;
