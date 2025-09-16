import { useEffect } from 'react';
import { router } from 'expo-router';

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(auth)/splash');
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return null;
}
