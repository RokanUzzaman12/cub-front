import { useStore } from "@nanostores/react";
import { departmentProgramWiseCourses } from "../../stores/coursesStore";
import { fetchDepartmentProgramWiseCoursesAndFillStore } from "../../loaders/coursesLoader";
import { useEffect } from "react";

const ProgramCourses = ({ program }) => {
  const programCourses = useStore(departmentProgramWiseCourses) || {};
  //  group courses by year
  const groupedByYear = [];
  programCourses.forEach((item) => {
    const { year, semester, courses } = item;
    let yearGroup = groupedByYear.find((y) => y.year === year);

    if (!yearGroup) {
      yearGroup = { year, semesters: [] };
      groupedByYear.push(yearGroup);
    }
    yearGroup.semesters.push({ semester, courses });
  });

  useEffect(() => {
    const department = JSON.parse(localStorage.getItem("selectedDepartment"));
    fetchDepartmentProgramWiseCoursesAndFillStore(
      `department=${department.slug}&program=${program}`
    );
  }, []);
  return (
    <>
      <div className="program-accordion">
        <div className="accordion" id="rts-accordion">
          {groupedByYear.map((year, index1) => {
            return (
              <div className="accordion-item" key={index1}>
                <button
                  className="accordion-button collapsed rt-theme-bg"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index1}`}
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  {groupedByYear.length > 1 ? `Year ${index1 + 1}` : "Courses"}
                </button>
                <div
                  id={`collapse${index1}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#rts-accordion"
                >
                  <div className="accordion-body-content">
                    {year.semesters.map((semester, index2) => (
                      <table className="table" key={index2}>
                        <thead className="table-theme">
                          <tr>
                            <th style={{ minWidth: "80%" }}>
                              {groupedByYear.length > 1
                                ? `Level ${index1 + 1}, Semester ${
                                    semester.semester
                                  }`
                                : "Course Title"}
                            </th>
                            <th>Credits</th>
                          </tr>
                        </thead>
                        <tbody>
                          {semester.courses.map((course, index3) => (
                            <tr key={index3}>
                              <td>{course.course_name}</td>
                              <td>{course.course_credit} Credits</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProgramCourses;
