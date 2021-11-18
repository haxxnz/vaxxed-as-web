export enum FacingMode {
  REAR = "rear",
  BACK = "back",
  ENVIRONMENT = "environment",
  USER = "user",
  FACE = "face"
}

const defaultDeviceIdChooser = ({
  filteredDevices,
  videoDevices
}): MediaDeviceInfo => {
  if (filteredDevices.length > 0) {
    return filteredDevices?.[0]?.deviceId;
  }
  if (videoDevices.length === 1) {
    return videoDevices?.[0]?.deviceId;
  }
  return videoDevices?.[0]?.deviceId;
};

const getVideoDevices = (): Promise<MediaDeviceInfo[]> =>
  new Promise(resolve => {
    if (typeof window !== "undefined") {
      let enumerateDevices: Promise<MediaDeviceInfo[]>;
      try {
        enumerateDevices = navigator?.mediaDevices?.enumerateDevices();
      } catch {
        resolve([]);
      }
      enumerateDevices.then((devices: MediaDeviceInfo[]) => {
        // Filter out non-videoinputs
        const videoDevices = devices?.filter(
          device => device?.kind === "videoinput"
        );

        resolve(videoDevices);
      });
      return;
    }
    resolve([]);
  });

const getDeviceId = async ({
  deviceId,
  chooseDeviceId = defaultDeviceIdChooser
}) => {
  const videoDevices = await getVideoDevices();

  const filteredDevices = videoDevices?.filter(device => {
    if (deviceId) {
      return device.deviceId === deviceId;
    }
    return true;
  });
  return chooseDeviceId({ filteredDevices, videoDevices });
};

export { getDeviceId, getVideoDevices };
