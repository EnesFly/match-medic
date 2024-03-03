import { getStorage, ref, getDownloadURL } from "firebase/storage";

async function getFromFirebaseStorage(path) {
	if (!path) {
		console.error("Invalid image path:", path);
		return "";
	}

	const storage = getStorage();
	const imageRef = ref(storage, path);

	try {
		const url = await getDownloadURL(imageRef);
		return url;
	} catch (error) {
		console.error("Error fetching image URL:", error);
		return "";
	}
}

export default getFromFirebaseStorage;