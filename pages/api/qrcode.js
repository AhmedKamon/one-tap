import nc from "next-connect";
import { addQrCode } from "../../backend/controller/qrcode";
import dbConnect from "../../utilites/db";

const handler = nc();
dbConnect();

handler.get(addQrCode);

export default handler;
