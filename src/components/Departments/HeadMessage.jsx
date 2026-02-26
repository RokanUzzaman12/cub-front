import { useStore } from "@nanostores/react";
import { singleDepartment } from "../../stores/departmentsStore";
import { useEffect } from "react";
import { fetchDepartmentBySlugAndFillStore } from "../../loaders/departmentsLoader";

export default function HeadMessage({ slug }) {
  const department = useStore(singleDepartment) || {};
  useEffect(() => {
    fetchDepartmentBySlugAndFillStore(slug);
  }, [slug]);
  return (
    <div className="rts-faculty-details rts-section-padding bg-color-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="faculty-image text-center mb--30">
                <img
                  src={department.head_image}
                  alt="faculty image"
                  style={{
                    width: "300px",
                    aspectRatio: "1 / 1",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div className='h5 mb-2 mt-5'>{department.head_name}</div>
                <div className='h5 mb-2'>{department.head_designation}</div>
                <p className='text-center mb-2' style={{ fontWeight: 600 }}>{department.name}</p>
                <p className='text-center mb-2'  style={{ fontWeight: 600 }}>Canadian University of Bangladesh</p>
              </div>
            </div>
            <div className="col-lg-12">
              <p
                className="faculty-content-text text-center has-medium-font-size"
                dangerouslySetInnerHTML={{ __html: department.head_message }}
              />
            </div>
          </div>
        </div>
      </div>
  );
}
