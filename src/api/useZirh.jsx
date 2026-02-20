import { useEffect } from 'react';

/**
 * Serverdan kelgan Push xabarlarni tinglash uchun
 * @param {string} methodName - Metod nomi (masalan: 'new_message')
 * @param {function} callback - Ma'lumot kelganda ishlaydigan funksiya
 */
export const useZirhEvent = (methodName, callback) => {
  useEffect(() => {
    const handler = (e) => callback(e.detail);
    const eventLabel ='zirh:push';
    
    window.addEventListener(eventLabel, handler);
    return () => window.removeEventListener(eventLabel, handler);
  }, [methodName, callback]);
};

/**
 * WebSocket tayyor bo'lishini kutish uchun
 */
export const useZirhReady = (callback) => {
  useEffect(() => {
    const handler = (e) => callback(e.detail);
    window.addEventListener('zirh:ready', handler);
    return () => window.removeEventListener('zirh:ready', handler);
  }, [callback]);
};