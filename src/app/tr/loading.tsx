"use client"
import { usePathname } from "next/navigation";
import Loader from "../common/Loader";

export default function Loading() {
    const location = usePathname();
    return <Loader />
  }