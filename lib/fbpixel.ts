// lib/fbpixel.ts

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '';

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

/**
 * Sends a standard Facebook pageview tracking event.
 */
export const pageview = () => {
  if (!window.fbq) return;
  window.fbq('track', 'PageView');
};

/**
 * Sends a custom Facebook Pixel event.
 * 
 * @param name - The name of the event (e.g., 'Purchase', 'Lead', etc.)
 * @param options - Optional parameters for the event.
 */
export const event = (name: string, options: Record<string, unknown> = {}) => {
  if (!window.fbq) return;
  window.fbq('trackCustom', name, options);
};
