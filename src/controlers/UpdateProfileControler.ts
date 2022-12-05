// import { Express, Request, Response } from "express";
// import UpdateProfileService from "../services/UpdateProfileService";

// class UpdateProfileControler {
//   constructor(private service: UpdateProfileService) {}

//   public execute = async (
//     request: Request,
//     response: Response
//   ): Promise<any> => {
//     const { id, profileName} = request.body;
//     try {
//     } catch (error) {
//       if (
//         error instanceof Error &&
//         error.message == "is not possible update your profile"
//       ) {
//         return response.status(400).send({ message: error.message });
//       }
//       console.error(error);
//       return response.sendStatus(500);
//     }
//   };
// }

// export default UpdateProfileControler;
