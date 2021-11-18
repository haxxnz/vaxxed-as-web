class NoVideoInputDevicesError extends Error {
  constructor() {
    super("No video input devices found");
  }
}

export { NoVideoInputDevicesError };
