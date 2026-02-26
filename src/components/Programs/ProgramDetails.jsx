import { useStore } from '@nanostores/react';
import { programList } from '../../stores/programsStore';
import { useEffect } from 'react';
import { fetchProgramsAndFillStore, fetchProgramsByTypeAndFillStore } from '../../loaders/programsLoader';

const ProgramDetails = ({ programType }) => {
  const programs = useStore(programList) || [];
  useEffect(() => {
    fetchProgramsByTypeAndFillStore(programType);
  }, []);
  return (
    <>
      <section className='program-tution'>
        {' '}
        <div className='container'>
          <div className="card-container pb--40">
              {programs.slice(0, 4).map((program, index) => (
                <a
                  key={program.id || index}
                  href={`#`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="program-card" style={{backgroundColor: program.program_color || "red"}}>
                    <h2>{program.program_code}</h2>
                    <p>{program.program_name}</p>
                  </div>
                </a>
              ))}
            </div>
          <div className='heading-container'>
            <h3 className='heading-title'> {programType} Programme List</h3>
          </div>
          <div className='program-accordion'>
            <div className='accordion' id='rts-accordion'>
              {programs.map((program, index1) => {
                return (
                  <div className='accordion-item' key={index1}>
                    <button
                      className='accordion-button collapsed rt-theme-bg'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target={`#collapse${index1}`}
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      {program.program_name} ({program.program_credits} credits, {program.number_of_year} Years)
                    </button>
                    <div id={`collapse${index1}`} className='accordion-collapse collapse' data-bs-parent='#rts-accordion'>
                      <div className='accordion-body-content'>
                        <table className='table'>
                          {/* <thead className='table-theme'>
                            <tr>
                              <th style={{ minWidth: '80%' }}>
                                Level {index1 + 1}, Semester {semester.semester}
                              </th>
                              <th>Credits</th>
                            </tr>
                          </thead> */}
                          <tbody>
                            <tr>
                              <td>Total Credit Hours</td>
                              <td>{program.program_credits}</td>
                            </tr>
                            <tr>
                              <td>Program Duration</td>
                              <td>{program.number_of_year} Years</td>
                            </tr>

                            <tr>
                              <td>
                                Tuition Fee per Credit <br />
                                (After flat waiver of {program.special_offer}%)
                              </td>
                              <td>BDT {program.cost_per_credit}</td>
                            </tr>
                            <tr>
                              <td>Total Tuition Fee</td>
                              <td>BDT {program.tuition_fee}</td>
                            </tr>
                            <tr>
                              <td>Admission Fee (One time)</td>
                              <td>BDT {program.admission_fee}</td>
                            </tr>
                            <tr>
                              <td>Total Registration Fee</td>
                              <td>
                                BDT {program.registration_fee} x {program.number_of_semester} ={' '}
                                {Number(program.registration_fee) * Number(program.number_of_semester)}
                              </td>
                            </tr>
                            <tr>
                              <td>Total Cost</td>
                              <td>
                                BDT{' '}
                                {Number(program.tuition_fee) +
                                  Number(program.admission_fee) +
                                  Number(program.registration_fee) * Number(program.number_of_semester)}
                              </td>
                            </tr>
                            {program.waiver?.length > 0 && (
                              <tr>
                                <td colSpan={2} style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                  Waiver
                                </td>
                              </tr>
                            )}
                            {program.waiver?.map((waiverInfo, index2) => (
                              <tr key={index2}>
                                <td>
                                  {waiverInfo.title} - {waiverInfo.percent}%
                                </td>
                                <td>BDT {waiverInfo.amount}</td>
                              </tr>
                            ))}
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
                text-transform: capitalize
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

export default ProgramDetails;
