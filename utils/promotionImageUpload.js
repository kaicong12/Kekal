import { storage } from "@/utils/firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

export async function uploadPromotionImage(file, promotionId = "new") {
  const timestamp = Date.now();
  const ext = file.name.split(".").pop();
  const path = `promotionImages/${promotionId}/${timestamp}.${ext}`;
  const storageRef = ref(storage, path);

  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}
