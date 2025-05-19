
// Format a number as a price in USD (e.g., $12.99)
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

// Alias for formatPrice for backward compatibility
export const formatCurrency = formatPrice;

// Format a date string to a readable format (e.g., "Jan 15, 2023")
export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};

// Format time elapsed since a given date (e.g., "2 hours ago", "3 days ago")
export const timeAgo = (dateStr: string): string => {
  const date = new Date(dateStr);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  let interval = Math.floor(seconds / 31536000); // years
  if (interval >= 1) {
    return interval === 1 ? `${interval} year ago` : `${interval} years ago`;
  }
  
  interval = Math.floor(seconds / 2592000); // months
  if (interval >= 1) {
    return interval === 1 ? `${interval} month ago` : `${interval} months ago`;
  }
  
  interval = Math.floor(seconds / 86400); // days
  if (interval >= 1) {
    return interval === 1 ? `${interval} day ago` : `${interval} days ago`;
  }
  
  interval = Math.floor(seconds / 3600); // hours
  if (interval >= 1) {
    return interval === 1 ? `${interval} hour ago` : `${interval} hours ago`;
  }
  
  interval = Math.floor(seconds / 60); // minutes
  if (interval >= 1) {
    return interval === 1 ? `${interval} minute ago` : `${interval} minutes ago`;
  }
  
  return seconds <= 5 ? 'just now' : `${Math.floor(seconds)} seconds ago`;
};
