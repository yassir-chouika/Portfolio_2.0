import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CardComponent = ({ CardImage, CardTitle, CardDescription, Url }) => {
  const handleExternalLink = () => {
    window.open(Url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col items-center p-3 tablet:w-1/2 laptop:flex laptop:flex-row laptop:w-1/2 intersect-once intersect:motion-preset-rebound-up motion-duration-[1100ms] motion-delay-700">
      <img
        className="w-full rounded-lg tablet:w-full laptop:w-64"
        src={CardImage}
        alt="checklist web app"
      />

      <div className="flex flex-col items-center laptop:items-start mt-4 laptop:mt-0">
        <h3 className="font-bold text-lg text-center tablet:text-center laptop:text-left laptop:ml-4 dark:text-white">
          {CardTitle}
        </h3>
        <p className="text-center text-wrap text-IceBlue tablet:text-center laptop:text-left laptop:ml-4 ">
          {CardDescription}
        </p>
        <button
          onClick={handleExternalLink}
          type="button"
          className="m-4 text-white bg-SteelBlue hover:bg-IceBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Source code <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
