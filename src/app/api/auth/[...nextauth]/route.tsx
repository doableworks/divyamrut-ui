// 



import NextAuth from "next-auth";
import { authOptions } from "@/app/auth";
import { NextApiRequest, NextApiResponse } from "next";

// Define the GET and POST handlers with types for request and response
export const GET = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions);
export const POST = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions);
