export const uploadToCloudinary = async (file) => {
  const cloudName = "ddketghv2";   // dashboard se copy
  const uploadPreset = "archaspect"; // jo tumne banaya

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();
  return data.secure_url; // 🔥 final image URL
};