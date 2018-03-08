// Import dependencies
import hexToRgb from 'hex-to-rgb';

// Convert hex string to RGB with optional alpha channel
export function hexToRgba(hex, alpha = 1) {
  const rgb = hexToRgb(hex);
  return `rgba(${rgb.join(', ')}, ${alpha})`;
}
