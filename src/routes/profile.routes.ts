import { request, response, Router } from "express";
import multer from "multer";
import ensoreAthenticated from "../middlewares/ensure.Athenticated";
import uploadConfig from "../config/upload";
import UpdateProfileService from "../services/UpdateProfileService";

const profileRouter = Router();

const upload = multer(uploadConfig);

profileRouter.use(ensoreAthenticated);

profileRouter.patch(
  "/",
  ensoreAthenticated,
  upload.single("file"),
  async (request, response) => {
    console.log(request.file);

    if (!request.file || !request.file?.filename) {
      return response.status(400).send({ message: "fileName is requirid" });
    }

    try {
      const updateProfileService = new UpdateProfileService();

      await updateProfileService.execute({
        id: request.user.id,
        profileName: request.file.filename,
      });
      return { ok: true };
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).send({ message: error.message });
      }
    }
    return { ok: true };
  }
);

export default profileRouter;
