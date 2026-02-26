import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { eligibilityList } from "../../stores/eligibilities";
import { fetchEligibilitesAndFillStore } from "../../loaders/eligibilitiesLoader";
import { slugify } from "../../lib/slugify";

const ProgramEligibilities = () => {
  const eligibilities = useStore(eligibilityList) || [];
  useEffect(() => {
    fetchEligibilitesAndFillStore();
  }, []);
  return (
    <>
      <section className="program-tution">
        {" "}
        <div className="container">
          <div className="heading-container">
            <h3 className="heading-title">Admission Requirements</h3>
          </div>
          <div className="program-accordion">
            <div className="accordion" id="eligibility-accordion">
              {eligibilities?.map((eligibility, index1) => {
                return (
                  <div className="accordion-item" key={index1}>
                    <button
                      className="accordion-button collapsed rt-theme-bg"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${slugify(eligibility.title)}${eligibility.id}`}
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      {eligibility.title}
                    </button>
                    <div
                      id={`collapse${slugify(eligibility.title)}${eligibility.id}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#eligibility-accordion"
                    >
                      <div className="accordion-body-content">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td dangerouslySetInnerHTML={{ __html: eligibility.description }} />
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
            .program-tution{
                margin-top: 50px
            }
            .information-title{
                margin-bottom: 50px;
                font-size: 40px;
                font-weight: normal;
                text-align: center;
            }
            .heading-container{
                display:flex;
                align-items: center;
                justify-content: center;
            }
            .heading-title{
                margin-bottom: 50px;
                font-size: 35px;
                font-weight: normal;
                text-align: center;
                display: inline-block;
                border-bottom: 3px solid #890c25;
                padding-bottom: 0.3rem;
            }

            .rts-program .program-accordion {
            margin-bottom: 60px;
            }
            .rts-program .program-accordion .accordion {
            display: flex;
            flex-direction: column;
            gap: 2px;
            }
            .rts-program .program-accordion .accordion .accordion-item {
            border: none;
            }
            .rts-program .program-accordion .accordion .accordion-button {
            font-size: 20px;
            font-family: var(--font-secondary);
            color: var(--rt-secondary);
            padding: 17px 20px;
            line-height: 100%;
            border: 1px solid var(--rt-line);
            }
            .rts-program .program-accordion .accordion .accordion-button:focus {
            box-shadow: none;
            }
            .rts-program .program-accordion .accordion .accordion-button:not(.collapsed) {
            box-shadow: none;
            background: transparent;
            }
            .rts-program .program-accordion .accordion .accordion-button::after {
            content: "+";
            background-image: none;
            font-family: var(--fontawesome);
            height: 24px;
            width: 24px;
            border: 1px solid var(--rt-secondary);
            font-size: 13px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            }
            .rts-program
            .program-accordion
            .accordion
            .accordion-button:not(.collapsed)::after {
            content: "-";
            font-family: var(--fontawesome);
            background-image: none;
            }
            .rts-program .program-accordion .accordion .accordion-body-content .table {
            margin-top: 20px;
            }
            .rts-program
            .program-accordion
            .accordion
            .accordion-body-content
            .table-theme {
            background: var(--rt-primary);
            color: var(--rt-white);
            }
            .rts-program
            .program-accordion
            .accordion
            .accordion-body-content
            .table-theme
            td {
            padding: 12px;
            font-weight: 600;
            font-size: 18px;
            font-family: var(--font-secondary);
            }
            .rts-program
            .program-accordion
            .accordion
            .accordion-body-content
            .table
            tbody {
            border: 1px solid var(--rt-line);
            }
            .rts-program
            .program-accordion
            .accordion
            .accordion-body-content
            .table
            tbody
            tr {
            border-bottom: 1px solid var(--rt-line);
            }
            .rts-program
            .program-accordion
            .accordion
            .accordion-body-content
            .table
            tbody
            tr
            td {
            padding: 12px;
            color: var(--rt-body);
            }

            .program-accordion {
            margin-bottom: 60px;
            }
            .program-accordion .accordion {
            display: flex;
            flex-direction: column;
            gap: 2px;
            }
            .program-accordion .accordion .accordion-item {
            border: none;
            }
            .program-accordion .accordion .accordion-button {
            font-size: 20px;
            font-family: var(--font-secondary);
            color: var(--rt-secondary);
            padding: 17px 20px;
            line-height: 100%;
            border: 1px solid var(--rt-primary-2);
            }
            .program-accordion .accordion .accordion-button:focus {
            box-shadow: none;
            }
            .program-accordion .accordion .accordion-button:not(.collapsed) {
            box-shadow: none;
            background: transparent;
            }
            .program-accordion .accordion .accordion-button::after {
            content: "+";
            background-image: none;
            font-family: var(--fontawesome);
            height: 24px;
            width: 24px;
            border: 1px solid var(--rt-secondary);
            font-size: 14px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            }
            .program-accordion .accordion .accordion-button:not(.collapsed)::after {
            content: "-";
            font-family: var(--fontawesome);
            background-image: none;
            }
            .program-accordion .accordion .accordion-body-content .table {
            margin-top: 20px;
            }
            .program-accordion .accordion .accordion-body-content .table-theme {
            background: var(--rt-primary);
            color: var(--rt-white);
            }
            .program-accordion .accordion .accordion-body-content .table-theme tr th {
            padding: 12px;
            font-family: var(--font-secondary);
            font-weight: 400;
            }
            .program-accordion .accordion .accordion-body-content .table-theme td {
            padding: 12px;
            font-weight: 600;
            font-size: 18px;
            font-family: var(--font-secondary);
            }
            .program-accordion .accordion .accordion-body-content .table tbody {
            border: 1px solid var(--rt-line);
            }
            .program-accordion .accordion .accordion-body-content .table tbody tr {
            border-bottom: 1px solid var(--rt-line);
            }
            .program-accordion .accordion .accordion-body-content .table tbody tr td {
            padding: 12px;
            color: #27292e;
            }

        `}
      </style>
    </>
  );
};

export default ProgramEligibilities;
