import { useStore } from "@nanostores/react";
import {
  programList,
  programListError,
  programListLoading,
  programTypeList,
} from "../../stores/programsStore";
import { useEffect, useState } from "react";
import {
  fetchProgramsAndFillStore,
  fetchProgramsByTypeAndFillStore,
  fetchProgramTypesAndFillStore,
} from "../../loaders/programsLoader";
import Loader from "../common/Loader";
import Error from "../common/Error";

const Programs = () => {
  const program_type_List = useStore(programTypeList) || [];
  // const loading = useStore(programListLoading);
  // const error = useStore(programListError);
  useEffect(() => {
    fetchProgramTypesAndFillStore();
  }, []);
  // if (error) {
  //   return <Error statusCode={error.code} message={error.message} error={error} />;
  // }
  // if (!error && loading) {
  //   return <Loader />;
  // }

  const [undergraduatePrograms, setUndergraduatePrograms] = useState([]);
  const [graduatePrograms, setGraduatePrograms] = useState([]);

  useEffect(() => {
    const fetchAllProgramsInParallel = async () => {
      await Promise.all(
        program_type_List.map(async (programType) => {
          const programs = await fetchProgramsByTypeAndFillStore(programType.slug);
          
          if (programType.slug === "undergraduate") {
            setUndergraduatePrograms(programs);
          } else if (programType.slug === "graduate") {
            setGraduatePrograms(programs);
          }
        })
      );
    };

    fetchAllProgramsInParallel();
  }, [program_type_List]);
  return (
    <>
      <section className="rts-program v_2 rts-section-padding">
        <div className="container">
          <div className="row rt-center">
            <div className="col-sm-12">
              <div className="rts__section--wrapper v__5">
                <h2 className="rts__section--title">Discover Our Program</h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {/* {program_type_List.map((program, index) => (
              <div className="col-lg-4 col-md-10" key={index}>
                <div className="rts-program-single">
                  <div className="rts-program-single__content">
                    <div className="rts-program-hover">
                      <div className="icon">
                        <img src={program.image} alt="education" />
                      </div>
                      <a href="/" className="program-link">
                        {program.title} Admissions
                      </a>
                      <p>{program.description}</p>
                      <a
                        href={`/programs/${program.slug}`}
                        className="about-btn rts-nbg-btn btn-arrow"
                      >
                        Visit Program{" "}
                        <span>
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))} */}
            <div className="program-header rts-border-bottom-1 mb--50">
              <h4>Undergraduate Programs</h4>
              <a href="/programs/undergraduate" className="rts-arrow">
                View All{" "}
                <span>
                  <i className="fa-sharp fa-regular fa-arrow-right"></i>
                </span>
              </a>
            </div>
            <div className="card-container">
              {undergraduatePrograms.slice(0, 4).map((program, index) => (
                <a
                  key={program.id || index}
                  href={`/programs/undergraduate`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="program-card" style={{backgroundColor: program.program_color || "red"}}>
                    <h2>{program.program_code}</h2>
                    <p>{program.program_name}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="program-header rts-border-bottom-1 mt--50 mb--50">
              <h4>Graduate Programs</h4>
              <a href="/programs/graduate" className="rts-arrow">
                View All{" "}
                <span>
                  <i className="fa-sharp fa-regular fa-arrow-right"></i>
                </span>
              </a>
            </div>

             <div className="card-container">
              {graduatePrograms.slice(0, 4).map((program, index) => (
                <a
                  key={program.id || index}
                  href={`/programs/graduate`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="program-card" style={{backgroundColor: program.program_color || "red"}}>
                    <h2>{program.program_code}</h2>
                    <p>{program.program_name}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
  .program-header{
    display: flex;
    justify-content: space-between;
  }
  .rts-program.v_2 .rts-program-single {
    padding: 0;
    border: unset;
  }

  .rts-program.v_2 .rts-program-single .rts-program-hover {
    background: var(--light-white);
    position: unset;
    opacity: 1;
    padding: 36px 70px;

    height: 100%;
  }
  @media screen and (max-width: 1200px) {
    .rts-program.v_2 .rts-program-single .rts-program-hover {
      padding: 40px 60px;
    }
  }
  @media screen and (max-width: 576px) {
    .rts-program.v_2 .rts-program-single .rts-program-hover {
      padding: 40px 30px;
    }
  }
  .rts-program.v_2 .rts-program-single .rts-program-hover:hover {
    background: var(--rt-primary);
  }
  .rts-program.v_2 .rts-program-single .rts-program-hover .icon img {
    filter: invert(100%);
    transition: var(--transition);
  }
  .rts-program.v_2 .rts-program-single .rts-program-hover.center-item {
    padding: 32.5px 40px;
  }
  @media screen and (max-width: 1200px) {
    .rts-program.v_2 .rts-program-single .rts-program-hover.center-item {
      padding: 44.2px 40px;
    }
  }
  .rts-program.v_2 .rts-program-single .rts-program-hover ul {
    margin: 0;
  }
  .rts-program.v_2 .rts-program-single .single-program {
    display: flex;
    gap: 15px;
    border: 1px solid #fff;
    padding: 10px 23px;
    align-items: center;
    margin-top: 0;
    transition: var(--transition);
  }
  @media screen and (max-width: 576px) {
    .rts-program.v_2 .rts-program-single .single-program {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .rts-program.v_2 .rts-program-single .single-program:hover {
    background: var(--rt-secondary);
    border-color: var(--rt-secondary);
  }
  .rts-program.v_2 .rts-program-single .single-program:not(:last-child) {
    margin-bottom: 20px;
  }
  .rts-program.v_2 .rts-program-single .single-program a {
    font-size: 20px;
    color: var(--rt-white);
  }

  .rts-program-single {
    padding: 20px;
    border: 1px solid var(--rt-line);
    height: 100%;
  }
  @media screen and (max-width: 576px) {
    .rts-program-single {
      padding: 0;
    }
  }
  .rts-program-single__content {
    position: relative;
    height: 100%;
  }

  .rts-program-single__content:hover .rts-program-hover .icon {
    border-color: var(--rt-white);
  }
  .rts-program-single__content:hover .rts-program-hover .icon img {
    filter: none !important;
  }
  .rts-program-single__content:hover .rts-program-hover .program-link {
    color: var(--rt-white);
  }
  .rts-program-single__content:hover .rts-program-hover p {
    color: var(--rt-white);
  }
  .rts-program-single__content:hover .rts-program-hover .about-btn {
    color: var(--rt-white) !important;
  }
  .rts-program-single__content:hover .rts-program-hover .about-btn::before {
    background: var(--rt-white) !important;
  }
  .rts-program-single__content .program-image {
    position: relative;
    overflow: hidden;
  }
  .rts-program-single__content .program-image img {
    transform: scale(1);
    transition: var(--transition);
    min-height: 400px;
    object-fit: cover;
    width: 100%;
  }
  .rts-program-single__content .program-image::before {
    position: absolute;
    height: 100%;
    width: 100%;
    content: "";
    left: 0;
    top: 0;
    background: linear-gradient(
      180deg,
      rgba(12, 12, 15, 0.12) 0%,
      rgba(12, 12, 15, 0.6) 100%
    );
    z-index: 1;
    transition: var(--transition);
    opacity: 1;
  }
  .rts-program-single__content .program-image::after {
    position: absolute;
    height: 100%;
    width: 100%;
    content: "";
    left: 0;
    top: 0;
    background: linear-gradient(
      180deg,
      rgba(12, 12, 15, 0.16) 0%,
      rgba(12, 12, 15, 0.8) 100%
    );
    z-index: 1;
    opacity: 0;
    transition: var(--transition);
  }
  .rts-program-single__content .content {
    position: absolute;
    bottom: 40px;
    left: 40px;
    gap: 20px;
    z-index: 2;
    opacity: 1;
    transition: var(--transition);
  }
  .rts-program-single__content .content .icon {
    height: 60px;
    min-width: 60px;
    border-radius: 50%;
    border: 1px solid var(--rt-white);
    display: grid;
    place-items: center;
    padding: 10px;
    transition: var(--transition);
  }
  .rts-program-single__content .content a {
    font-size: 22px;
    font-weight: 600;
    color: var(--rt-white);
    font-family: var(--font-secondary);
  }
  .rts-program-single__content .rts-program-hover {
    padding: 40px;
    text-align: center;
    position: absolute;
    content: "";
    bottom: 0;
    z-index: 1;
    opacity: 0;
    transition: var(--transition);
  }
  .rts-program-single__content .rts-program-hover .icon {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    border: 1px solid var(--rt-heading);
    display: grid;
    place-items: center;
    padding: 10px;
    margin: auto auto 30px;
  }
  .rts-program-single__content .rts-program-hover .program-link {
    font-size: 22px;
    color: var(--rt-heading);
    font-family: var(--font-secondary);
    margin-bottom: 10px;
    display: inline-block;
  }
  .rts-program-single__content .rts-program-hover p {
    color: var(--rt-heading);
  }
  .rts-program-single__content .rts-program-hover .about-btn {
    color: var(--rt-heading) !important;
  }
  .rts-program-single__content .rts-program-hover .about-btn::before {
    background: var(--rt-heading) !important;
  }
  .rts-program-single__content:hover .rts-program-hover {
    opacity: 1;
  }
  .rts-program-single__content:hover .program-image::before {
    opacity: 0;
  }
  .rts-program-single__content:hover .program-image::after {
    opacity: 1;
  }
  .rts-program-single__content:hover .program-image img {
    transform: scale(1.2);
  }
  .rts-program-single__content:hover .content {
    opacity: 0;
    visibility: hidden;
  }`}
      </style>
    </>
  );
};

export default Programs;
