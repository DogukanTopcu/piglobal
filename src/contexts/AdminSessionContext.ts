import { AdminContext } from "@/types/ContextTypes";
import { ObjectId } from "mongoose";
import { createContext } from "react";


const AdminContextState = {
    user: {
        _id: "" as unknown as ObjectId,
        username: "",
        email: "",
        password: "",
        adminType: "",
        access: [""],
    },
    setUser: () => ({
        _id: () => "" as unknown as ObjectId,
        username: () => "",
        email: () => "",
        password: () => "",
        adminType: () => "",
        access: () => [""],
    }),

    session: "",
    setSession: () => "",

    login: async () => {
        
    },
    logout: () => {},

}

export const AdminContexts = createContext<AdminContext>(AdminContextState);