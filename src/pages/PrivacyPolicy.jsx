import React from "react";
import Section from "../components/utilities/Section";
import Pera from "../components/utilities/Pera";

const PrivacyPolicy = () => {
    const list = [
        {title:"Updation of privacy policy :",desc:"This privacy policy is subject to undergo change and review without any prior notice or approval. So to keep yourself updated on the changes introduced, please keep visiting and reviewing the terms and conditions of this privacy policy."},
        {title:"User information :",desc:"By using our website, you agree to abide by the rules laid out by us and consent to collection and use of all such information that you may furnish to, or through, our website. In some cases, while you visit our website, you may not need to provide any personal information. But in certain instances, we must have your personal information in order for us to grant you access to some of the links or sites. Such links/ pages may ask for your name, e-mail address, phone number etc. The information furnished by you is used to provide relevant products and services and to acknowledge receipt of your communication or to send out information and updates to you. You have option of requesting removal from our mailing list. We do not give away your personal information to any third party."},
        {title:"Security: ",desc:"To ensure security while transferring sensitive information, all the ongoing transmissions between client and server are encrypted using advanced and standard protocols. We also practice restricted access by employees and hold them to high levels of confidentiality. Use of cookies We may use cookies for security, session continuity, and customization purposes. In case of a user opting to reject a cookie, he/ she may not be able to gain access to some of the limited services or use some features of the site. In case of any queries or suggestions regarding privacy statement or your dealings with this web site, please contact:"}
    ]
  return (
    <Section className="!p-[30px]">
      {/* <Container> */}
      <div className="mx-auto text-[13px] font-normal font-sans p-8 border-y border-[var(--text-primary)]">
        <Pera className="!text-justify mb-[10px]">
          <span className="font-bold text-[15px]">Privacy Policy : </span>
          In our endeavor and commitment of protecting your personal
          information, we have designed this comprehensive privacy policy. This
          is to keep your interests and information safe on our website.
        </Pera>
        <ul className="list-disc ml-6">
            {list.map((data,index)=>(
          <li key={index} className="mb-[10px]">
            <Pera className="!text-justify">
            <span className="font-bold text-[15px] mr-[3px]">
              {data.title}
            </span>
            {data.desc}
            </Pera>
             </li>

            ))}
        </ul>
      </div>
      {/* </Container> */}
    </Section>
  );
};

export default PrivacyPolicy;
