import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

config({path: "./config.env"});
const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
}))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



router.post("/send/mail", async(req, res, next) => {
    console.log("🔥 /send/mail route HIT");
    console.log("BODY 👉", req.body);
    const {name, email, message} = req.body;
    if(!name || !email || !message) {
        return next(res.status(400).json({
            success: false,
            message: "Please provide all details",
        }))
    }
    try {
        await sendEmail({
            email: "srishimaskare54@gmail.com",
            subject: "GYM WEBSITE CONTACT",
            message,
            userEmail: email,
        });
        res.status(200).json({
            success: true,
            message: "Message sent successfully!",
        })
    } catch(err) {
        console.error("EMAIL ERROR 👉", err);

    res.status(500).json({
        success: false,
        message: err.message || "Internal Server Error!",
    });
    }
})
app.use(router);

app.listen(PORT, ()=>{
    console.log(`App listening on PORT ${PORT}`)
});