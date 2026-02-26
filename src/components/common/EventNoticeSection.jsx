import { useStore } from "@nanostores/react";
import EventSection from "./EventSection";
import NoticeSection from "./NoticeSection";
import { useEffect } from "react";
import { departmentWiseNotices, facultyWiseNotices, noticeList } from "../../stores/noticesStore";
import {
  fetchDepartmentWiseNoticesAndFillStore,
  fetchFacultyWiseNoticesAndFillStore,
  fetchNoticesAndFillStore,
} from "../../loaders/noticesLoader";
import {
  fetchDepartmentWiseEventsAndFillStore,
  fetchEventsAndFillStore,
  fetchFacultyWiseEventsAndFillStore,
} from "../../loaders/eventsLoader";
import { departmentWiseEvents, eventList, facultyWiseEvents } from "../../stores/eventsStore";

const EventNoticeSection = ({ slug, facultyEventNotice = false, departmentEventNotice = false }) => {
  let events = [];
  let notices = [];
  // faculty wise events and notices
  const facultyNotices = useStore(facultyWiseNotices) || [];
  const facultyEvents = useStore(facultyWiseEvents) || [];

  // department wise events and notices
  const departmentNotices = useStore(departmentWiseNotices) || [];
  const departmentEvents = useStore(departmentWiseEvents) || [];

  // all events and notices
  const notice_lists = useStore(noticeList) || [];
  const event_lists = useStore(eventList) || [];

  if (facultyEventNotice) {
    events = [...facultyEvents];
    notices = [...facultyNotices];
  } else if (departmentEventNotice) {
    events = [...departmentEvents];
    notices = [...departmentNotices];
  } else {
    events = [...event_lists];
    notices = [...notice_lists];
  }
  useEffect(() => {
    if (facultyEventNotice) {
      fetchFacultyWiseNoticesAndFillStore(slug);
      fetchFacultyWiseEventsAndFillStore(slug);
    } else if (departmentEventNotice) {
      fetchDepartmentWiseNoticesAndFillStore(slug);
      fetchDepartmentWiseEventsAndFillStore(slug);
    } else {
      fetchNoticesAndFillStore();
      fetchEventsAndFillStore();
    }
  }, []);
  return (
    <>
    {facultyEvents || facultyNotices ?  (
      <section className="rts-notice rts-section-padding rts-section-padding">
        <div className="container">
          <div className="row gy-5 gy-lg-0 justify-content-md-center">
            <div className="col-md-12 col-lg-7">
              <EventSection facultyEvents={events} />
            </div>
            <div className="col-md-12 col-lg-5">
              <NoticeSection facultyNotices={notices} />
            </div>
          </div>
        </div>
      </section>
      ) : null}
    </>
  );
};

export default EventNoticeSection;
