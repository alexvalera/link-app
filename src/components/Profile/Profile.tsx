import React, {useEffect, useState, Fragment} from 'react'; 
import './Profile.scss';
import BasicInfo from '../BasicInfo/BasicInfo';

const Profile = () => {
  const applyFixedNav = (): void => {
    document.documentElement.scrollTop >= 32 
    ? setInfoFixed(true)
    : setInfoFixed(false);
  };

  const [isInfoFixed, setInfoFixed] = useState(false); 

  useEffect(() => {
    document.addEventListener('scroll', applyFixedNav);
    return () => {
      document.removeEventListener('scroll', applyFixedNav);
    }
  }, []);

  return (
    <Fragment>
      <BasicInfo 
        fullName = "Alex Valera"
        profession = "UX Engineer"
        location = "Washington D.C."
        isInfoFixed
      />
      <div style = {{height: '100vh', marginTop: `${isInfoFixed ? '8.5rem': ''}`}}>Posts</div>
    </Fragment>
  )
}; 

export default Profile;