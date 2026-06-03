import imageCompression from "browser-image-compression";

export const uploadToCloudinary = async (file) => {
  try {
    // 🔥 Compress image
    const compressedFile = await imageCompression(file, {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    });

    console.log("Original Size:", file.size);
    console.log("Compressed Size:", compressedFile.size);

    const data = new FormData();

    data.append("file", compressedFile);
    data.append("upload_preset", "archaspect");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/ddketghv2/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();

    console.log("Cloudinary Response:", result);

    return result.secure_url;

  } catch (err) {
    console.log("Cloudinary Error:", err);
    return null;
  }
};