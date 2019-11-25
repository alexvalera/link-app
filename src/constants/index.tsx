export const colors = {
  BLACK: '#212121',
  LIGHT_GREY: '#dedede',
};

const size = {
  mobile: '500px',
  tablet: '768px',
  desktop: '1280px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const postSources = {
  MEDIUM: {
    icon: '',
    domain: '',
  },
  SPOTIFY: {
    icon: '/spotify.png',
    domain: 'https://spotify.com',
  },
  INSTAGRAM: {
    icon: '',
    domain: '',
  },
};

export const actions = {
  ADD_POST: 'ADD_POST',
};

export const basicInfoConstants = {
  defaultImagePath: '/profile.jpg',
};
