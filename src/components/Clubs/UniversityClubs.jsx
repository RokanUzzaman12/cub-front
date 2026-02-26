import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { fetchClubsAndFillStore } from "../../loaders/clubsLoader";
import { clubList } from "../../stores/clubStore";
import {
  departmentWiseClubs,
  facultyWiseClubs,
} from "../../stores/clubStore.js";
import {
  fetchDepartmentWiseClubsAndFillStore,
  fetchFacultyWiseClubsAndFillStore,
} from "../../loaders/clubsLoader.js";

const UniversityClubs = ({
  slug = null,
  departmentClub = false,
  facultyClub = false,
}) => {
  let allClubs = [];
  const CLUBS = useStore(clubList);
  const departmentClubs = useStore(departmentWiseClubs) || [];
  const facultyClubs = useStore(facultyWiseClubs) || [];
  if (CLUBS.length > 0) {
    allClubs = CLUBS;
  }
  if (departmentClubs.length > 0) {
    allClubs = departmentClubs;
  }
  if (facultyClubs.length > 0) {
    allClubs = facultyClubs;
  }
  useEffect(() => {
    if (slug == null) {
      fetchClubsAndFillStore();
    } else {
      if (departmentClub) {
        fetchDepartmentWiseClubsAndFillStore(slug);
      }
      if (facultyClub) {
        fetchFacultyWiseClubsAndFillStore(slug);
      }
    }
  }, []);
  return (
    <>
      <div className="rts-blog v_3 rts-section-padding">
        <div className="container">
          <div className="row justify-content-md-start justify-content-sm-center g-5">
            {allClubs.map((item) => (
              <div
                className="col-sm-10 col-md-6 col-lg-6 col-xl-4"
                key={item.id}
              >
                <div className="single-blog">
                  <div className="blog single-blog__content">
                    <div className="blog__thumb">
                      <a href={`/clubs/${item.id}`}>
                        <img src={item.images} alt="blog thumbnail" />
                      </a>
                    </div>
                    <div className="blog__meta">
                      {/* <div className="blog__meta--da">
                        <div className="blog-date">
                          <span>
                            <i className="fal fa-calendar"></i>
                          </span>
                          <span>{item.date}</span>
                        </div>
                        <div className="blog-author">
                          <span>
                            <i className="far fa-user"></i>
                          </span>
                          <span>
                            <a href="#">{item.author || "Unknown"}</a>
                          </span>
                        </div>
                      </div> */}
                      <h5 className="blog__title">
                        <a href={`/clubs/${item.id}`}>{item.title}</a>
                      </h5>
                      <a
                        href={`/clubs/${item.id}`}
                        className="rts-theme-btn primary with-arrow lh-100"
                      >
                        Read More{" "}
                        <span>
                          <i className="fa-thin fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .rts-blog.v_3 .single-blog {
          border: 1px solid var(--rt-line);
          box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
          transition: var(--transition);
          overflow: hidden;
        }
        .rts-blog.v_3 .single-blog__content .blog__thumb {
          overflow: hidden;
        }
        .rts-blog.v_3 .single-blog__content .blog__thumb img {
          width: 100%;
          object-fit: cover;
          transition: var(--transition);
          transform: scale(1);
        }
        .rts-blog.v_3 .single-blog__content .blog__thumb img:hover {
          transform: scale(1.05);
        }
        .rts-blog.v_3 .single-blog__content .blog__meta {
          padding: 25px;
        }
        .rts-blog.v_3 .single-blog__content .blog__meta--da {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .rts-blog.v_3 .single-blog__content .blog__meta--da .blog-date,
        .rts-blog.v_3 .single-blog__content .blog__meta--da .blog-author {
          display: flex;
          gap: 8px;
        }
        .rts-blog.v_3 .single-blog__content .blog__meta--da .blog-date span i,
        .rts-blog.v_3 .single-blog__content .blog__meta--da .blog-author span i {
          color: var(--rt-primary-1);
        }
      `}</style>
    </>
  );
};

export default UniversityClubs;
