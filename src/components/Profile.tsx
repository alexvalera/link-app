import React, { useEffect, useState, Fragment, ReactElement } from 'react';
import BasicInfo from '@components/BasicInfo';

const Profile = (): ReactElement => {
  const [isInfoFixed, setInfoFixed] = useState(false);
  const applyFixedNav = (): void => {
    document.documentElement.scrollTop >= 32 ? setInfoFixed(true) : setInfoFixed(false);
  };

  useEffect(() => {
    document.addEventListener('scroll', applyFixedNav);
    return (): void => {
      document.removeEventListener('scroll', applyFixedNav);
    };
  }, []);

  return (
    <Fragment>
      <BasicInfo fullName="Alex Valera" profession="UX Engineer" location="Washington D.C." isInfoFixed={isInfoFixed} />
      <div style={{ height: '100vh', marginTop: `${isInfoFixed ? '8.5rem' : ''}` }}>Posts!</div>
    </Fragment>
  );
};

export default Profile;
