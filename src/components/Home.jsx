import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import ImagePreview from './ImagePreview';

// Dummy placeholder function to prevent compile error
const enhancedImageAPI = async (file) => {
  // You can replace this with the real API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ image: URL.createObjectURL(file) });
    }, 2000);
  });
};

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setenhancedImage] = useState(null);
  const [loading, setloading] = useState(false);

  const UploadImageHandler = async (file) => {
    const imageUrl = URL.createObjectURL(file);
    setUploadImage(imageUrl);
    setloading(true);
    try {
      const enhanceURl = await enhancedImageAPI(file);
      setenhancedImage(enhanceURl.image);
    } catch (error) {
      console.log(error);
      alert('Error while enhancing the image. Please try again later!!');
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <ImageUpload UploadImageHandler={UploadImageHandler} />
      <ImagePreview loading={loading} uploaded={uploadImage} enhanced={enhancedImage} />
    </>
  );
};

export default Home;
