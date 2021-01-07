const cloudinary = require('cloudinary'); // eslint-disable-line
const axios = require('redaxios'); // eslint-disable-line

const CLOUDINARY_CONFIG = {
  cloud_name: process.env.REACT_APP_CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
};

cloudinary.config(CLOUDINARY_CONFIG);

module.exports = async (req, res) => {
  const signature = await cloudinary
    .utils
    .api_sign_request(req.body, CLOUDINARY_CONFIG.api_secret);

  try {
    const result = await cloudinary.v2.uploader.destroy(req.body.publicId, signature);
    res.send(result);
  } catch (e) {
    res.send('not ok');
  }
};
