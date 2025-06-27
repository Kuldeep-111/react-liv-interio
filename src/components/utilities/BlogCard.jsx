import React from 'react'

import {Link} from 'react-router-dom'
import Heading from './Heading'
import Pera from './Pera'
import { BlogContent } from './BlogContent'
import CustomImage from './CustomImage'

const BlogCard = ({ data, detailsPage }) => {
  const {heading,short_description,feature_image,mb_image,alt,date_at,description,slug} = data;
  const titleLimit = 8;
  const peraLimit = 30;
  const BASE_URL = "https://livinterio.com/api/"
  const date = new Date(date_at);
const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1)
  .toString()
  .padStart(2, '0')}/${date.getFullYear()}`;

console.log(formattedDate);

  
  // Limit title to 10 words
  const limitedTitle = (heading || "")
    .split(' ')
    .slice(0, titleLimit)
    .join(' ') + (heading.split(' ').length > titleLimit ? '...' : '');

   // Limit to 100 words
   const limitedDescription = (short_description || "")
   .split(' ')
   .slice(0, peraLimit)
   .join(' ') + (description.split(' ').length > peraLimit ? '...' : '');
  return (
    <div className=" overflow-hidden transition-shadow duration-300 ">
      {/* Image Section */}
      <div data-aos="fade-up" className={`relative w-full  ${detailsPage ? 'h-[400px]' : 'h-48'}`}>
                      <CustomImage
                        src={`${BASE_URL}${feature_image}`}
                        mobileSrc={`${BASE_URL}${mb_image}`}
                        alt={alt}
                        className="object-cover rounded-[10px] w-full h-full"
                      />
      </div>

      {/* Content Section  */}
      <div className="mt-4">
        {/* Title and Date Row */}
        <div className="flex justify-between items-center mb-3">
          <h3 data-aos="fade-right" className="bg-[var(--text-primary)] text-white rounded-[5px] py-[7px] px-[15px] text-[12px]">Interior Design</h3>
          <span data-aos="fade-left" className="text-[12px] text-back">{formattedDate}</span>
        </div>
         <Heading animation='fade-up' className='!text-left md:!text-[20px] my-[20px]'>{detailsPage ? heading : limitedTitle}</Heading>
        <Pera className='mb-[20px] !text-justify'>{detailsPage ? short_description : limitedDescription}</Pera>
        {/* Description */}
        <div className='editorContent'>
        {detailsPage && <BlogContent html={description}/> }
        </div>
        

        {/* View Details Button */}
        {!detailsPage && (
        <Link 
        data-aos="fade-right"
          to={`/blog/${slug}`}
          className="inline-block pb-[10px] text-[var(--text-primary)] transition-colors duration-300 border-b border-[var(--text-primary)]"
        >
          Read More <img src="/assets/icons/next-arrow.webp" alt='next arrow' width={20} height={0} className='h-auto inline-block ml-[5px]'/>
        </Link>
        )}
      </div>
    </div>
  )
}

export default BlogCard
