import express from "express";
import { addLike, createMessage, showAllMessages, updateMessage } from "../controller/Mensagens.controller.js";
import { verifyJwt } from "../middlewares/auth.js";
// import { createNewMessage, messagelist, addLike} from "../controller/MensagensController.js";
const MensagensRouter = express.Router();


MensagensRouter.post("/create-message", verifyJwt('user'),createMessage )

MensagensRouter.patch("/toggle-like/:messageid",verifyJwt('user'), addLike )

MensagensRouter.patch("/update-message/:messageid",verifyJwt('user'), updateMessage )


MensagensRouter.get("/mensagemsDeApoio", showAllMessages)

export {MensagensRouter}