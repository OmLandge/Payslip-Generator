import express, { Request, Response, NextFunction } from "express";
import z from "zod";
import { PrismaClient } from '@prisma/client'
import { JwtPayload, sign, verify } from "jsonwebtoken";
import { config } from "dotenv"
import cors from "cors";

config();

const prisma = new PrismaClient()

const loginInput = z.object({
    username: z.string(),
    password: z.string().min(6).max(9)
})

const contactBodyInput = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    concern: z.string(),
})

const paymentSlipInput = z.string()

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const authorization = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization?.toString();
    if(!authHeader){
        return res.status(401).json({
            message: "Authorization header missing"
        })
    }
    try{
        const user = await verify(authHeader, process.env.JWT_SECRET as string) as JwtPayload;
        if(user){
            app.set("username",user.id);
            await next();
        }else{
            return res.status(403).json({
                message: "You are not logged in"
            })
        }
    } catch(e){
        console.log(e)
        return res.status(403).json({
            message: "You are not logged in"
        })
    }
}

app.post("/login",async (req, res)=>{
    const body = await req.body;
    const { success } = loginInput.safeParse(body);
    if(!success){
        return res.status(411).json({
            message: "inputs are invalid"
        })
    }
    try{
        const user = await prisma.users.findUnique({
            where: {
                username: body.username
            }
        })
        if(!user){
            return res.status(403).json({
                message: "User not found"
            })
        }
        if(!process.env.JWT_SECRET){
            return
        }
        const jwt = await sign({ id: user.username }, process.env.JWT_SECRET)
        return res.status(200).json({jwt})
    } catch (e){
        console.log(e);
        return res.status(411).json({
            message: "Invalid"
        })
    }
})

app.get("/user", authorization, async (req, res)=>{
    const userId = app.get("username");
    try {
        const userDetails = await prisma.users.findFirst({
            where: {
                username: userId
            }
        })
        if(!userDetails){
            return res.status(403).json({
                message: "User not found"
            })
        }
        return res.status(200).json(userDetails)
    } catch (e) {
        console.log(e);
        return res.status(411).json({
            message: "invalid"
        })
    }
})

app.get("/paymentSlip", authorization, async (req, res)=>{
    const body = req.headers.month as string;
    const {success} = paymentSlipInput.safeParse(body);
    if(!success){
        return res.status(411).json({
            message: "inputs are invalid"
        })
    }
    const userId = app.get("username");
    try{
        const paymentSlipDetails = await prisma.payments.findFirst({
            where: {
                userId,
                Month: body
            }
        })
        if(!paymentSlipDetails){
            return res.status(403).json({
                message: "Data not found"
            })
        }
        return res.status(200).json(paymentSlipDetails);
    }catch (e){
        console.log(e);
        return res.status(411).json({
            message: "invalid"
        })
    }
})

app.post("/contact", async (req, res) => {
    const contactBody = await req.body;
    const { success } = contactBodyInput.safeParse(contactBody);
    if(!success){
        return res.status(411).json({
            message: "inputs are invalid"
        })
    }
    try {
        const contact = await prisma.contact.create({
            data:{
                firstName: contactBody.firstName,
                lastName: contactBody.lastName,
                email: contactBody.email,
                concern: contactBody.concern
            }
        });
        if(!contact){
            return res.status(403).json({
                message: "insertion failed"
            })
        }
        return res.status(200).json({
            message: "inserted successfully"
        })
    } catch (e) {
        console.log(e);
        return res.status(411).json({
            message: "invalid"
        })
    }
})

app.get("/contactAdmin", async (req, res) => {
    try {
        const allContact = await prisma.contact.findMany();
        if(!allContact){
            return res.status(403).json({
                message: "Data not found"
            })
        }
        return res.status(200).json({
            allContact
        })
    } catch (e) {
        console.log(e);
        return res.status(411).json({
            message: "invalid"
        })
    }
})

app.listen(PORT, ()=>{
    console.log(`listening on port http://localhost:${PORT}`)
})