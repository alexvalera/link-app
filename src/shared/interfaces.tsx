export type ProfileState = {
  posts: PostProps[];
  profileUrl: string;
  modalOpen: boolean;
};

export type PostProps = {
  title: string;
  image?: PostImage;
  link: string;
  id?: string;
};

export type PostImage = {
  src: string;
  meta: string;
};

export type PostSource = {
  icon: string;
  domain: string;
};

export type ModalProps = {
  isOpen: boolean;
};

export type Actions = {
  type: string;
  payload?: any;
  meta?: string;
};
