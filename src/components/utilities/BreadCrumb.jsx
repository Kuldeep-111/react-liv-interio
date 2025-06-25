import { Link } from 'react-router-dom';

export default function Breadcrumb({ title, parent }) {
  return (
    <nav aria-label="breadcrumb" className='mt-[10px]'>
      <ol className="flex items-center justify-center gap-[10px] text-white">
        <li data-aos="fade-right">
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>/</li>
        {parent && (
          <>
            <li data-aos="fade-up">
              <Link to={parent.link} className="hover:underline">
                {parent.title}
              </Link>
            </li>
            <li>/</li>
          </>
        )}
        <li data-aos="fade-left" aria-current="page" className="font-medium text-white/70">
          {title}
        </li>
      </ol>
    </nav>
  );
}
