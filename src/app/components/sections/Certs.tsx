import React from "react";
import CertDetails from "@/prjtdata/CertItems.json";

const CertsSection = () => {
  return (
    <section
      id="certificates"
      className="w-[calc(100vw-3rem)] mx-auto sm:w-[93vw] md:w-[90vw] lg:w-[900px] py-20"
    >
      <h1 className="text-3xl dark:text-[#F6F6F6] mb-4 font-bold border-b-4 border-customGreen w-fit">
        Certificates
      </h1>
      <p className="text-[#ADB7BE] mb-12">
        Earned certifications and qualifications.
      </p>
      <div className="relative flex flex-col gap-20">
        {CertDetails.map((cert) => (
          <article
            key={cert.id}
            className="certificate-card relative flex flex-col pl-6 gap-4 sm:w-[50%] sm:even:translate-x-full pr-0 sm:odd:pl-0 odd:pr-6"
          >
            <span className="circle bg-customGreen absolute top-[-5px] left-[-10px] h-[24px] w-[24px] rounded-full z-[1]"></span>
            <div className="certificate-picture top-0 p-4 flex flex-col justify-center items-center gap-4 sm:absolute h-[220px] w-[320px] object-contain z-10 mb-6">
              <img
                className="w-full h-auto"
                src={`/certificates/${cert.certificatePicture}`}
                alt={`Certificate of ${cert.certificateTitle} from ${cert.certificateName}`}
                loading="lazy"
              />
            </div>
            <div className="info flex flex-col justify-center xl:mb-6">
              <div className="flex flex-col mb-4">
                <h1 className="text-[#191919] dark:text-darkTextColorPrimary font-bold text-xl">
                  {cert.certificateTitle}
                </h1>
                <a href={cert.certificateSite} target="_blank">
                  <span className="text-secondaryDarkTextColor dark:text-customGray font-semibold text-base flex items-center gap-4">
                    {cert.certificateName}
                  </span>
                </a>
                <small className="mt-1 text-secondaryDarkTextColor dark:text-customGray italic text-[0.91rem]">
                  {cert.certificateTime}
                </small>
              </div>
              <p className="text-base sm:text-sm text-[#252525] dark:text-[#CCCCCC]">
                {cert.certificateDescription}
              </p>
            </div>
          </article>
        ))}
        <div className="absolute left-0 border-l-[1px] h-full z-[-1] border-dashed border-[#BBBBBB] dark:border-[#555555] sm:left-[50%]"></div>
      </div>
    </section>
  );
};

export default CertsSection;
