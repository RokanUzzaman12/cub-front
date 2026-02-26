import { useStore } from "@nanostores/react";
import { singleFaculty } from "../../stores/facultiesStore";
import { useEffect } from "react";
import { fetchfacultyBySlugAndFillStore } from "../../loaders/facultiesLoader";

export default function DeansMessage({ slug }) {
  const faculty = useStore(singleFaculty) || {};
  useEffect(() => {
    fetchfacultyBySlugAndFillStore(slug);
  }, [slug]);
  return (
    <div className="rts-faculty-details rts-section-padding bg-color-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="faculty-image text-center mb--30">
                <img
                  src={faculty.dean_image}
                  alt="faculty image"
                  style={{
                    width: "300px",
                    aspectRatio: "1 / 1",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div className='h5 mb-2 mt-5'>{faculty.dean_name}</div>
                <div className='h5 mb-2'>{faculty.dean_designation}</div>
                <p className='text-center mb-2' style={{ fontWeight: 600 }}>{faculty.name}</p>
                <p className='text-center mb-2'  style={{ fontWeight: 600 }}>Canadian University of Bangladesh</p>
              </div>
            </div>
            <div className="col-lg-12">
              <p
                className="faculty-content-text text-center has-medium-font-size"
                dangerouslySetInnerHTML={{ __html: faculty.dean_message }}
              />
            </div>
          </div>
        </div>
      </div>
  );
}
