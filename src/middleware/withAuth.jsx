import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const navigate = useNavigate();
  const ADMIN_URL = import.meta.env.VITE_ADMIN_URL

    useEffect(() => {
      const checkAuth = async () => {
        const token = localStorage.getItem('authToken');
        const expiry = localStorage.getItem('authExpiry');

        // If no token or expired, redirect
        if (!token || !expiry || Date.now() > parseInt(expiry)) {
          localStorage.removeItem('authToken');
          localStorage.removeItem('authExpiry');
          navigate('/admin/login');
          return;
        }
 
        try {
          // Validate token
          await axios.post(
            `${ADMIN_URL}validate-token`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          // Set auto logout timer
          const timeout = parseInt(expiry) - Date.now();
          const timer = setTimeout(() => {
            localStorage.removeItem('authToken');
            localStorage.removeItem('authExpiry');
            navigate('/admin/login');
          }, timeout);

          return () => clearTimeout(timer);
        } catch (err) {
          console.error('Token validation failed:', err);
          localStorage.removeItem('authToken');
          localStorage.removeItem('authExpiry');
          navigate('/admin/login');
        }
      };

      checkAuth();
    }, [navigate]);

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
