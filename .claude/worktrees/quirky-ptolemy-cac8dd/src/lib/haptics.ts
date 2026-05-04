export const triggerHaptic = (pattern: number | number[] = 50) => {
  if (typeof window !== "undefined" && "vibrate" in navigator) {
    try {
      navigator.vibrate(pattern);
    } catch {
      // Silently fail if haptics are unsupported or disabled by the OS
    }
  }
};

export const hapticPatterns = {
  light: 30,
  medium: 60,
  heavy: 100,
  success: [30, 50, 60],
  macroToggle: [40, 60, 100, 40],
};
