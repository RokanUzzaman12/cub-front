import React, { useEffect } from "react";
import { scholarshipList } from "../../stores/scholarships";
import { useStore } from "@nanostores/react";
import { fetchScholarshipsAndFillStore } from "../../loaders/scholarshipLoader";

const ProgramScholarship = ({ id }) => {
  const scholarship_data = useStore(scholarshipList) || {};
  useEffect(() => {
    fetchScholarshipsAndFillStore();
  }, []);
  return (
    <>
      <div class="repeating-content">
        <h5 class="title">Merit-Based Scholarships</h5>
        <div class="row g-5">
          {scholarship_data["merit-based-scholarships"]
            ?.filter((scholarship) => scholarship.program_id == id)
            .map((item, index) => {
              const card_color = [
                "rt-primary-bg",
                "rt-theme-bg",
                "rt-secondary-bg",
              ][index % 3];
              return (
                <div class="col-lg-6" key={index}>
                  <div class={"single-information-box " + card_color}>
                    <div class="single-info">
                      <h4 class="title">{item.title}</h4>
                      <u class="eligibility">Eligibility:</u>
                      <p>{item.condition}</p>
                      <p class="amount">
                        <u>Amount:</u>
                        {item.discount} tuition fee waiver
                      </p>
                      {/* <u class='application'>Conditions:</u>
                    <p>{item.conditions}</p> */}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div class="repeating-content pt--50 pb--50">
        <h5 class="title">Specialized Scholarships</h5>
        <div class="row g-5">
          {scholarship_data["specialized-scholarships"]
            ?.filter((scholarship) => scholarship.program_id == id)
            .map((item, index) => {
              const card_color = [
                "rt-primary-bg",
                "rt-theme-bg",
                "rt-secondary-bg",
              ][index % 3];
              return (
                <div class="col-lg-6" key={index}>
                  <div class={"single-information-box " + card_color}>
                    <div class="single-info">
                      <h4 class="title">{item.title}</h4>
                      <u class="eligibility">Eligibility:</u>
                      <p>{item.condition}</p>
                      <p class="amount">
                        <u>Amount:</u>
                        {item.discount} tuition fee waiver
                      </p>
                      {/* <u class='application'>Conditions:</u>
                    <p>{item.conditions}</p> */}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <style>
        {`
  .repeating-content .title {
    font-size: 28px;
    margin-bottom: 30px;
    text-align: center;
    padding: 20px 0;
  }
  .repeating-content .single-information-box {
    padding: 40px;
    color: var(--rt-white);
  }
  @media screen and (max-width: 1200px) {
    .repeating-content .single-information-box {
      padding: 30px;
    }
  }

  .repeating-content .single-information-box.rt-theme-bg .single-info .title {
    color: var(--rt-heading);
  }

  .repeating-content .single-information-box.rt-theme-bg .single-info .amount {
    color: var(--rt-heading);
  }

  .repeating-content .single-information-box.rt-theme-bg .single-info p {
    color: var(--rt-heading);
  }

  .repeating-content .single-information-box.rt-theme-bg .single-info p u {
    color: var(--rt-heading);
  }

  .repeating-content .single-information-box.rt-theme-bg .single-info u {
    color: var(--rt-heading);
  }

  .repeating-content .single-information-box .single-info .title {
    font-size: 22px;
    color: var(--rt-white);
  }

  .repeating-content .single-information-box .single-info .amount {
    display: inline-block;
    margin-bottom: 10px;
  }

  .repeating-content .single-information-box .single-info p {
    color: var(--rt-white);
  }

  .repeating-content .single-information-box .single-info p u {
    font-weight: 600;
    display: inline-block;
    margin-right: 5px;
  }

  .repeating-content .single-information-box .single-info u {
    font-weight: 600;
    margin-bottom: 10px;
    display: block;
  }

  .repeating-content .single-information-box.big-box {
    padding: 40px 100px;
  }
  @media screen and (max-width: 1200px) {
    .repeating-content .single-information-box.big-box {
      padding: 40px;
    }
  }

  .repeating-content .single-information-box.big-box .title {
    text-align: center;
  }

  .repeating-content .single-information-box.big-box .single-info-content {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 576px) {
    .repeating-content .single-information-box.big-box .single-info-content {
      flex-wrap: wrap;
      gap: 30px;
    }
  }

  .repeating-content
    .single-information-box.big-box
    .single-info-content
    .right-item {
    max-width: 280px;
  }`}
      </style>
    </>
  );
};

export default ProgramScholarship;
