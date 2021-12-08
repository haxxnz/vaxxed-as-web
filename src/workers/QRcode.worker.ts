import jsQR from "jsqr";
import { verifyPassURIOffline } from "@vaxxnz/nzcp";

type ParseQrcodeProps = {
  imageData?: ImageData;
  trustedIssuers: string[];
  passString?: string;
};

export const readQRcode = async ({
  imageData,
  trustedIssuers,
  passString
}: ParseQrcodeProps): Promise<string> => {
  const message = {
    status: "none",
    payload: null
  };
  let data = null;

  if (imageData?.data && imageData?.width && imageData?.height) {
    const foundQRcode = jsQR(imageData.data, imageData.width, imageData.height);

    if (foundQRcode?.data) {
      data = foundQRcode.data;
    }
  }

  if (passString) {
    data = passString;
  }

  if (data) {
    message.status = "success";
    const verification = verifyPassURIOffline(data, {
      trustedIssuer: trustedIssuers
    });
    message.payload = { verification, raw: data, timestamp: new Date() };
  }

  return JSON.stringify(message);
};
