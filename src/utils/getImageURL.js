const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const getImageURL = (image) => `${IMAGE_BASE_URL}${image}`;

export default getImageURL;
