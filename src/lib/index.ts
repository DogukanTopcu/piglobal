"use server"
import { User } from "@/models/User.model";
import axios from "axios";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("100 sec from now")
    .sign(key);
}
export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}


export const login = async ({ email, password } : { email: string; password: string; }) : Promise<User | undefined> => {
    // Verify credentials and get the user
    const user = { email: email, password: password };
    try {
      const res = await axios.post("http://localhost:3000/api/user/login", user);

      // Create the session
      const expires = new Date(Date.now() + 100 * 1000);
      const session = await encrypt({ user, expires });

      // Save the session in a cookie
      cookies().set("session", session, { expires, httpOnly: true });

      const u : User = {
        _id: res.data.user._id,
        username: res.data.user.username,
        email: res.data.user.email,
        password: res.data.user.password,
        adminType: res.data.user.adminType,
        access: res.data.user.access
      }
      console.log(u);
      return u;

    }
    catch(e) {
      console.log("error");
      return undefined;
    }

}


export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}


export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}


export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 100 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}