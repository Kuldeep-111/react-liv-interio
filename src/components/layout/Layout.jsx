import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CustomModal from '../utilities/CustomModal';

// Lazy load Form only when needed
const LazyForm = lazy(() => import('../utilities/Form'));

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const noLayoutRoutes = ['/disclaimer', '/privacy-policy'];
  const shouldHideLayout = noLayoutRoutes.some(route =>
    location.pathname.includes(route)
  );

  // useEffect(() => {
  //   const openLater = () => {
  //     setTimeout(() => setIsModalOpen(true), 5000);
  //   };

  //   if ('requestIdleCallback' in window) {
  //     requestIdleCallback(openLater);
  //   } else {
  //     openLater();
  //   }
  // }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative">
      {!shouldHideLayout && <Header onOpen={openModal} />}

      {/* {isModalOpen && (
        <CustomModal onClose={closeModal}>
          <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
            <LazyForm logo={true} />
          </Suspense>
        </CustomModal>
      )} */}

      <Outlet context={{ openModal }} />

      {!shouldHideLayout && <Footer openModal={openModal} />}
    </div>
  );
}
