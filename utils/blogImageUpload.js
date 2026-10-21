import { storage } from "@/utils/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function uploadBlogImage(file, postId = "new") {
  const timestamp = Date.now();
  const ext = file.name.split(".").pop();
  const path = `blogImages/${postId}/${timestamp}.${ext}`;
  const storageRef = ref(storage, path);

  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}
