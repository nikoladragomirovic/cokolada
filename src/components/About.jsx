import React from "react";
import { TbPhoneFilled } from "react-icons/tb";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import mi from "../assets/mi.jpeg";

const About = () => {
  const title = "text-5xl font-bold tracking-wider text-text";
  const subtitle = "text-4xl font-bold tracking-wider text-text";

  return (
    <div className="grid grid-flow-col grid-cols-2 grid-rows-1">
      <div className="flex flex-col items-center justify-center">
        <h1 className={title}>О НАМА</h1>
        <img src={mi} className="max-h-72 mt-10 rounded-3xl"></img>
        <p className="m-24 mt-12 text-center text-text">
          Добродошли у наш виртуелни свет, где се иновације и креативност
          ускупљују под нашим динамичким ћирилизатором и базом података на делу!
          Ми смо предани развоју веб простора на ћирилици, пружајући вам
          несгаснуту извор инспирације и иновативних технологија.
        </p>
      </div>
      <div className="flex flex-col items-center justify-start">
        <h1 className={title}>КОНТАКТ</h1>
        <div className="hover:translate-x-5 duration-200">
          <h1 className={subtitle + " mt-14 mb-4"}>ДА</h1>
          <div className="flex flex-row items-center justify-start text-xl text-text mb-2">
            <TbPhoneFilled className="mr-2 text-3xl" />
            +381 695548874
          </div>
          <div className="flex flex-row items-center justify-start text-xl text-text mb-2">
            <IoMdMail className="mr-2 text-3xl" />
            mihic.darko.01@gmail.com
          </div>
          <div className="flex flex-row items-center justify-start text-xl text-text">
            <RiInstagramFill className="mr-2 text-3xl" />
            @darko.mihic
          </div>
        </div>
        <div className="hover:translate-x-5 duration-200">
          <h1 className={subtitle + " mt-6 mb-4"}>РО</h1>
          <div className="flex flex-row items-center justify-start text-xl text-text mb-2">
            <TbPhoneFilled className="mr-2 text-3xl" />
            +381 691007322
          </div>
          <div className="flex flex-row items-center justify-start text-xl text-text mb-2">
            <IoMdMail className="mr-2 text-3xl" />
            david.rosic300@gmail.com
          </div>
          <div className="flex flex-row items-center justify-start text-xl text-text">
            <RiInstagramFill className="mr-2 text-3xl" />
            @david.rosic
          </div>
        </div>
        <div className="hover:translate-x-5 duration-200">
          <h1 className={subtitle + " mt-6 mb-4"}>НИ</h1>
          <div className="flex flex-row items-center justify-start text-xl text-text mb-2">
            <TbPhoneFilled className="mr-2 text-3xl" />
            +381 612118877
          </div>
          <div className="flex flex-row items-center justify-start text-xl text-text mb-2">
            <IoMdMail className="mr-2 text-3xl" />
            adragomirovic@icloud.com
          </div>
          <div className="flex flex-row items-center justify-start text-xl text-text mb-20">
            <RiInstagramFill className="mr-2 text-3xl" />
            @niledragomirovic
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
