var express = require('express');
var router = express.Router();
const multer = require("multer");
const path = require("path");

// Set storage engine for uploading files
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // 1MB max file size
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
}).single("image");

// Check file type
function checkFileType(file, cb) {
  // Allowed file extensions
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

// Route for uploading image file
router.post("/upload", (req, res) => {
  upload(req, res, err => {
    if (err) {
      res.status(400).json({ msg: err });
    } else {
      if (req.file == undefined) {
        res.status(400).json({ msg: "Error: No file selected" });
      } else {
        const fileURL = req.protocol + "://" + req.get("host") + "/uploads/" + req.file.filename;
        res.json({
          fileName: req.file.filename,
          filePath: fileURL
        }).status(200);
      }
    }
  });
});

module.exports = router;
