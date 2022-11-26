import { storge } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import imageCompression from "browser-image-compression";

/* 
  *  
     Compress Image And Upload image to firebase
  * 
 */

const options = {
  maxSizeMB: 0.5,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
};

export const CompressorImage = async (
  image: File,
  name: string
): Promise<string> => {
  const nameImage = name + Math.random();
  const imageRef = ref(storge, `images/${nameImage}`);
  const result = await imageCompression(image, options);
  let firebaseImage = await uploadBytes(imageRef, result);
  let URL = await getDownloadURL(firebaseImage.ref);
  return URL;
};
