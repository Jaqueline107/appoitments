import path from "path";
import multer from "multer";
import { request } from "express";
import crypto from "crypto";

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "temp"),
    filename(request, File, callback) {
      const fileHash = crypto.randomBytes(10).toString("hex");
      const fileName = `${fileHash}-${File.originalname} `;

      callback(null, fileName);
    },
  }),
};
