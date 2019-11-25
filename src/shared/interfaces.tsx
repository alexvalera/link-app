export interface PostProps {
  title: string;
  image?: PostImage;
  link: string;
  source: PostSource;
}

export interface PostImage {
  src: string;
  meta: string;
}

export interface PostSource {
  icon: string;
  domain: string;
}

export interface ModalProps {
  isOpen: boolean;
}
