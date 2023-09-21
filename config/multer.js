import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, 'uploads/');
	},
	filename: (req, file, callback) => {
		callback(null, Date.now() + path.extname(file.originalname));
	},
});

const upload = multer({ storage });

export default { upload };
