import React from "react";
import Person from "./Person";

const PersonList = () => {
  const users = [
    {
      img: 22,
      name: "Tope",
      job: "Data Analyst",
    },
    {
      img: 45,
      name: "tunde",
      job: "photographer",
    },
    {
      img: 48,
      name: "ben",
      job: "technical writer",
    },
    {
      img: 32,
      name: "nelson",
      job: "fashion designer",
    },
    {
      img: 98,
      name: "burna",
      job: "artist",
    },
    {
      img: 52,
      name: "kings",
      job: "consultant",
    },
    {
      img: 19,
      name: "Rapheal",
      job: "designer",
    },
  ];
  return (
    <section>
      <Person person={users[0]}>
        <p>I bring technical expertise to ensure the quality and accuracy of that data, then process, design, and present it in ways to help people, businesses, and organizations make better decisions.</p></Person>;
      <Person person={users[1]} >
        <p>I Capture images as directed, taking all aspects into consideration, including outside lighting, shadows and lens requirements. Edit and pre-edit images to ensure they are high quality and properly color-corrected.</p>
        
        </Person>;
      <Person person={users[2]}><p>Knowledgeable wordsmith with a unique ability to combine technical know-how and effective written communication techniques.</p> </Person>;
      <Person person={users[3]}><p>Innovative Fashion Designer proficient in Adobe Photoshop and Illustrator with passion for creating new fashions. Proven history of successful collaboration with clients, brand managers and executives to deliver seasonal lines and specialized projects.</p></Person>;
      <Person person={users[4]}><p>Passionate and experienced musician with several years of experience in orchestra, band and theater performances.</p></Person>;
      <Person person={users[5]}><p>Strong and decisive business leader with excellent analytical, organizational, team building and planning skills. Maintains uncompromising focus on high quality standards and bottom-line profit improvement</p></Person>;
    </section>
  );
};

export default PersonList;
