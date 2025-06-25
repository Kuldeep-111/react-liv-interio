import React, { useEffect, useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Form from '../utilities/Form';
import CustomModal from '../utilities/CustomModal';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const noLayoutRoutes = ['/disclaimer', '/privacy-policy'];
  const shouldHideLayout = noLayoutRoutes.some(route => location.pathname.includes(route));
  useEffect(()=>{
    setTimeout(()=>{
      setIsModalOpen(true)
    },5000)
  },[])

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative">
      {!shouldHideLayout && <Header onOpen={openModal} />}

      {isModalOpen && (
        <CustomModal onClose={closeModal}>
          <Form logo={true} />
        </CustomModal>
      )}

      {/* Pass openModal to children if needed using context instead */}
      <Outlet context={{ openModal }} />

      {!shouldHideLayout && <Footer openModal={openModal} />}
    </div>
  );
}
