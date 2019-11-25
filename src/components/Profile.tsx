import React, { useEffect, useState, Fragment, ReactElement } from 'react';
import BasicInfo from '@components/BasicInfo';
import PostList from '@components/PostList';
import AddPost from '@components/AddPost';

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
      <PostList isInfoFixed={isInfoFixed} />
      <AddPost />
    </Fragment>
  );
};

export default Profile;
