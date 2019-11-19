import React, {useEffect, useState} from 'react'; 
import './Profile.scss';
import BasicInfo from '../BasicInfo/BasicInfo';

const Profile = () => {
  const [infoFixed, setInfoFixed] = useState(false); 
  useEffect(() => {
    document.addEventListener('scroll', () => {
      document.documentElement.scrollTop >= 32 
      ? setInfoFixed(true)
      : setInfoFixed(false);
    });
    return () => {
      document.removeEventListener('scroll');
    }
  }, []);
  const info = {
    fullName: 'Alex Valera', 
    profession: 'UX Engineer',
    location: 'Washington D.C.', 
    infoFixed
  }
  return (
    <React.Fragment>
      <BasicInfo {...info}/>
      <div style = {{height: '100vh', marginTop: `${infoFixed ? '8.5rem': ''}`}}>Posts</div>
    </React.Fragment>
  )
}; 

export default Profile;