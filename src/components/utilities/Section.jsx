import React from 'react';

const Section = React.forwardRef(({ children, className = '', id = '', ...rest }, ref) => {
  return (
    <section
      id={id}
      ref={ref}
      className={`py-[40px] md:py-[60px] lg:py-[70px] 2xl:py-[100px] ${className}`}
      {...rest} 
    >
      {children}
    </section>
  );
});

export default Section;
