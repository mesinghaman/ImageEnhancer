import axios from "axios";

const API_KEY = "wx7b3xiu7o1nqduh1";
const BASE_URL = "https://techhk.aoscdn.com/api/tasks/visual/scale";
const MAXIMUM_RETRIES = 20;

export const enhanceLmageApi = async (file) => {
  try {
    const taskId = await uploadImage(file);
    const EnhancedImageData = await PollForEnhancedImage(taskId);
    return EnhancedImageData;
  } catch (error) {
    console.log("Error enhancing image:", error.message);
    throw error;
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(BASE_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      "X-API-KEY": API_KEY,
    },
  });

  if (!data?.data?.task_id) {
    throw new Error("Failed to upload image! Task ID not found.");
  }

  return data.data.task_id;
};

const fetchEnhancedImage = async (taskId) => {
  const { data } = await axios.get(`${BASE_URL}/${taskId}`, {
    headers: {
      "X-API-KEY": API_KEY,
    },
  });

  if (!data?.data) {
    throw new Error("Failed to fetch enhanced image! Image not found.");
  }

  return data.data;
};

const PollForEnhancedImage = async (taskId, retries = 0) => {
  const result = await fetchEnhancedImage(taskId);

  if (result.status === 4) {
    console.log(`Processing... (${retries}/${MAXIMUM_RETRIES})`);

    if (retries >= MAXIMUM_RETRIES) {
      throw new Error("Max retries reached. Please try again later!!");
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));
    return PollForEnhancedImage(taskId, retries + 1);
  }

  // ✅ Add this return so the function completes with the image data
  return result;
};
