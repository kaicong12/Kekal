import { storage } from "@/utils/firebase";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

export async function uploadBlogImage(file, postId = "new") {
  const timestamp = Date.now();
  const ext = file.name.split(".").pop();
  const path = `blogImages/${postId}/${timestamp}.${ext}`;
  const storageRef = ref(storage, path);

  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
}

export async function deleteBlogImage(imageUrl) {
  try {
    await deleteObject(ref(storage, imageUrl));
  } catch {
    // Silently skip non-Firebase URLs or already-deleted images
  }
}
