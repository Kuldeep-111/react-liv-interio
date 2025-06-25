import Pera from "../components/utilities/Pera";
import Section from "../components/utilities/Section";


const Disclaimer = () => {
  return (
    <Section className="!p-[30px]">
        {/* <Container> */}
      <div className="mx-auto text-[13px] font-normal font-sans p-8 border-y border-[var(--text-primary)]">
        <Pera className="!text-justify mb-[10px]">
            <span className="font-bold text-[15px]">Disclaimer: </span>
          The information provided on this website is for general informational purposes only. All content, including images, design concepts, and styling recommendations, is intended to showcase the services and expertise of Liv Interio. While we strive to ensure that all information is accurate and current, we make no warranties or representations regarding the completeness, reliability, or suitability of the content for your specific requirements.
        </Pera>
        <Pera className="mb-[10px]">All designs, visuals, and photographs featured on this site are the intellectual property of Liv Interio or their respective owners and may not be reproduced, distributed, or used without prior written permission.</Pera>
        <Pera className="mb-[10px]">Design outcomes can vary based on site conditions, client preferences, and other factors. Any reliance you place on the information provided is strictly at your own risk. We encourage consulting with our professional team for tailored advice before making design or renovation decisions.</Pera>
        <Pera className="mb-[10px]">
         Liv Interio will not be liable for any loss or damage, direct or indirect, arising from the use of this website or the information contained within it.</Pera>
      </div>
      {/* </Container> */}
    </Section>
  );
};

export default Disclaimer;
