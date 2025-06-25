import React from "react";
import Section from "./utilities/Section";
import Pera from "./utilities/Pera";
import Heading from "./utilities/Heading";
import Container from "./utilities/Container";
import TeamCard from "./utilities/TeamCard";

const TeamSection = () => {
  const teamList = [
    {image:"/assets/images/team/maninder-singh.webp", alt:"Maninder Singh", name: "Maninder Singh", designation: "Purchase Head" },
    {image:"/assets/images/team/muskan-sharma.webp", alt:"Muskan Sharma", name: "Muskan Sharma", designation: "Designer" },
    {image:"/assets/images/team/akshat-singhal.webp", alt:"Akshat Singhal", name: "Akshat Singhal", designation: "3D Visualiser" },
    {image:"/assets/images/team/kunal-panchal.webp", alt:"Kunal panchal", name: "Kunal Panchal", designation: "2D Designer" },
  ];
  return (
    <Section
      id="teamSection"
      className="overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-6">
            <Heading animation="fade-up" className="uppercase !text-center">Core Team</Heading>
            <TeamCard
            animation="fade-up"
            data={{image:"/assets/images/team/about-section.webp",
              alt:"Manmeet Kaur",
              name:"Manmeet Kaur",
              designation:"Founder"}}
              className="h-[300px] md:h-[450px] w-full max-w-[400px] "
            />
          </div>
          <div  className="md:col-span-6">
            <div className="grid grid-cols-12">
            {teamList.map((data,index)=>(
              <div key={index} className="col-span-6">
              <TeamCard animation="fade-up" data={data} className="w-full max-w-[200px] h-[150px] sm:h-[200px]"/>
            </div>
            ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default TeamSection;
