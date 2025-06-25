'use client';
;
import ReactCompareImage from 'react-compare-image';

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  return (
    <div className="w-full max-w-[800px] md:max-h-[600px] mx-auto  overflow-hidden ">
      <ReactCompareImage
        leftImage={beforeImage}
        rightImage={afterImage}
        sliderPositionPercentage={0.5}
          handle={
          <div className="absolute top-[50%] bg-white p-2 rounded-full shadow-lg text-white">
            <img src="/assets/icons/slide-handle.webp" alt='Slider Handle' width={30} height={30}/>
          </div>
        }
      />
    </div>
  );
};

export default BeforeAfterSlider;
