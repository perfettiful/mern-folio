// Google Analytics 4 utility functions

// Replace with your actual GA4 Measurement ID
export const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url, title) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: title,
      page_location: url,
    });
  }
};

// Track custom events
export const trackEvent = (action, category = 'engagement', label = '', value = 0) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName, location = '') => {
  trackEvent('click', 'button', `${buttonName}${location ? ` - ${location}` : ''}`, 1);
};

// Track external link clicks
export const trackExternalLink = (url, linkText = '') => {
  trackEvent('click', 'external_link', `${linkText} - ${url}`, 1);
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('submit', 'form', formName, 1);
};

// Track video interactions
export const trackVideoPlay = (videoTitle) => {
  trackEvent('play', 'video', videoTitle, 1);
};

// Track scroll depth
export const trackScrollDepth = (percentage) => {
  trackEvent('scroll', 'engagement', `${percentage}%`, percentage);
};

// Track contact form interactions
export const trackContactForm = (action) => {
  trackEvent(action, 'contact_form', action, 1);
};
