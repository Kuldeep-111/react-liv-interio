

const TeamCard = ({ data, className,animation="" }) => {
    const {image, alt, name, designation} = data;
  return (
    <div data-aos={animation} className=" rounded-xl  overflow-hidden text-center p-4 ">
      <div  className={`w-32 h-32 mx-auto mb-4 relative  border-2 border-[var(--text-primary)] ${className}`}>
        <img
          src={image}
          alt={alt}
          className="w-full  h-full object-cover"
        />
      </div>
      <h3 className="text-[10px] md:text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-[8px] md:text-sm text-gray-500">{designation}</p>
    </div>
  );
};

export default TeamCard;
