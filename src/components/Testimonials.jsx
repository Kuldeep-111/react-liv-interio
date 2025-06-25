import React from 'react'
import Section from './utilities/Section'
import Container from './utilities/Container'
import Heading from './utilities/Heading'
import CustomSlider from './utilities/CustomSlider'


const data = [
    {name:"Mr. Shiv Shankar",location:"Parx Laureate",desc:"Liv Interio transformed my 4BHK apartment into a modern, elegant home that feels straight out of a design magazine. Their attention to detail, innovative use of space, and timely execution made the entire journey seamless and stress-free. I still get compliments every time someone visits!"},
    {name:"Mr Suman Kumar",location:"Ats Happy Trails",desc:"From the first consultation to the final reveal, Liv Interio’s process was smooth, transparent, and customer-centric. They brought our dream kitchen and living room to life, and the entire home now radiates warmth and personality. Truly grateful for their creativity and dedication."},
    {name:"Mr. Ashwani Sharma",location:"Parx Laureate",desc:"From our first meeting, Liv Interio made us feel heard and understood. They took our scattered ideas and turned them into a cohesive, beautiful home that we absolutely love. Every room feels both functional and uniquely us."},
    {name:"Mr. Vivek Sharma",location:"Cleo County",desc:"We had no idea where to start, but Liv Interio guided us every step of the way. They made the process fun and stress-free. Now, our space feels modern, fresh, and truly ours."},
    {name:"Mr. Gopal Gupta",location:"Sunworld Arista",desc:"When we started, our house was just concrete and walls. Liv Interio stepped in and turned it into a warm, welcoming home. They handled everything — from space planning and finishes to furniture and decor. It was incredible to see the transformation unfold."}
]

const Testimonials = () => {
  return (
   <Section id='testimonials' className='overflow-hidden bg-[var(--background-secondary)]'>
    <Container>
        <div className='text-center'>
        <Heading animation='fade-up' className='uppercase  inline-block mx-auto border-b border-[var(--text-primary)] pb-[10px] px-[20px] md:px-[40px]'>Testimonials</Heading>
        </div>
        <CustomSlider data={data}/>
    </Container>
   </Section>
  )
}

export default Testimonials
