import { useState, useEffect } from 'react'; 
import { PostSource } from '@shared/interfaces';
import { postSources } from '@constants/index';
import UrlService from '../services/url-service';

export const useSource = (link: string): PostSource => {
  const [source, setSource] = useState({icon: '', domain: ''});
  useEffect(() => {
    const domain = UrlService.getDomain(link).toUpperCase();
    let sourceTemp = {icon: '', domain: ''}
    Object.entries(postSources).forEach(([k, v]) => {
      domain.includes(k) && (sourceTemp = v); 
    });
    setSource(sourceTemp);
  }, [link])
  return source; 
}