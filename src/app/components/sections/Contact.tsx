import EmailCard from "@/app/components/ContactCards/Email";
import FacebookCard from "@/app/components/ContactCards/Facebook";
import GithubCard from "@/app/components/ContactCards/Github";
import InstagramCard from "@/app/components/ContactCards/Instagram";
import LinkedinCard from "@/app/components/ContactCards/LinkedIn";
import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-[calc(100vw-3rem)] mx-auto sm:w-[93vw] md:w-[90vw] lg:w-[900px] pt-16 pb-20 gap-16"
    >
      <h1 className="text-3xl dark:text-[#F6F6F6] font-bold border-b-4 mb-4 border-customGreen w-fit">
        Contact
      </h1>
      <p className="text-[#ADB7BE] mb-12">
        Kindly connect with me via the provided links:
      </p>
      <ul className="contact-links grid gap-x-8 gap-y-12">
        <EmailCard />
        <LinkedinCard />
        <GithubCard />
        <FacebookCard />
        <InstagramCard />
      </ul>
    </section>
  );
};

export default ContactSection;
