import multer from 'multer';
const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
	if (!file.mimetype.includes('image')) {
		return cb('Supported only image files!', false);
	}
	cb(null, true);
};
const imageFileFilter = (req, file, cb) => {
	if (!file.mimetype.startsWith('image')) {
		cb('Supported only image files!', false);
	}
	cb(null, true);
};

const videoFileFilter = (req, file, cb) => {
	if (!file.mimetype.startsWith('video')) {
		cb('Supported only video files!', false);
	}
	cb(null, true);
};

export const uploadImage = multer({storage, fileFilter: imageFileFilter});
export const thumbnail = multer({storage, fileFilter});
export const uploadVideo = multer({storage, fileFilter: videoFileFilter});
