import React from 'react'
import Container from './utilities/Container'
import Section from './utilities/Section'
import Heading from './utilities/Heading'
import Pera from './utilities/Pera'
import Button from './utilities/Button'

const InteriorSection = ({onOpen}) => {
  return (
    <Section id="interiorSection" className='overflow-hidden relative before:absolute before:bottom-0 before:left-[7.5%] before:w-[85%] before:h-[0.5px] before:bg-[var(--text-primary)] '>
      <Container>
        {/* First Row  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-[50px]">
          {/* First Column - Image */}
          <div  data-aos='fade-up' className="relative w-full max-w-[315px] h-[250px] md:h-[300px] hidden lg:block">
            <img
              src="/assets/images/interior/1.webp"
              alt="Interior Design"
              className="w-full h-full object-cover rounded-lg position-center" 
              loading='lazy'
            />
          </div>

          {/* Second Column - Content */}
          <div className="flex flex-col justify-center" >
            <Heading animation='fade-up' className='uppercase md:!text-center mb-[20px]'>interiors with a difference</Heading>
            <Pera animation='fade-up' className="!text-center">
              We make interior design accessible and affordable for everyone, regardless of budget.
            </Pera>
            <Button animation='fade-up' href='/projects' className='mt-[20px] md:mx-auto'>View More</Button>
          </div>

          {/* Third Column - Image */}
          <div data-aos='fade-up' className="relative ms-auto w-full max-w-[315px] h-[250px] md:h-[300px] hidden lg:block">
            <img
              src="/assets/images/interior/2.webp"
              alt="Interior Design"
              className="w-full h-full object-cover rounded-lg position-center"
              loading='lazy'
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* First Column - Image */}
          <div data-aos='fade-up' className="relative w-full max-w-[500px] h-[350px] mx-auto md:ml-auto">
            <img
              src="/assets/images/interior/3.webp"
              alt="Interior Design"
              className="w-full h-full object-cover rounded-lg"
              loading='lazy'
            />
          </div>

          {/* Second Column - Image */}
          <div data-aos='fade-up' className="relative w-full max-w-[500px] h-[350px] mx-auto md:mr-auto">
            <img
              src="/assets/images/interior/4.webp"
              alt="Interior Design"
              className="w-full h-full object-cover rounded-lg"
              loading='lazy'
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default InteriorSection
