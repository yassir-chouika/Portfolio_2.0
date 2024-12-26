import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faEnvelope,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const ContactComponent = () => {
  const handlePreview = () => {
    window.open(
      "https://chyassirresume.vercel.app/",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const handleDownload = () => {
    const pdfUrl = "/Yassir_chouika.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Yassir_chouika.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleGmail = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&to=yassir.chouika@gmail.com",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <section id="Contact">
      <h2 className="text-2xl tablet:text-3xl laptop:text-4xl font-bold text-center pt-20 mb-6  dark:text-white">
        Contact
      </h2>
      <div className=" m-4 flex flex-row mt-24 ">
        <div className="w-full">
          <img
            className="w-full"
            src="/Contact_me.png"
            alt="illustration"
          />
        </div>

        <div className="flex flex-col gap-4 items-center align-middle w-full md:mt-24 laptop:mt-24">
          <div className="flex flex-col align-middle">
            <button
              onClick={handlePreview}
              type="button"
              className="m-4 text-white bg-SteelBlue hover:bg-IceBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Preview Resume <FontAwesomeIcon icon={faEye} />
            </button>
            <button
              onClick={handleDownload}
              type="button"
              className="m-4 text-white bg-SteelBlue hover:bg-IceBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Download Resume <FontAwesomeIcon icon={faDownload} />
            </button>
            <button
              onClick={handleGmail}
              type="button"
              className="m-4 text-white bg-SteelBlue hover:bg-IceBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Email Me <FontAwesomeIcon icon={faEnvelope} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
