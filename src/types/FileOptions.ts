import { ReactNode } from "react";

export interface FileOptions {
    id: string;
    name: string;
    size: string;
    date: string;
    img: string | ReactNode;
    type: "audio/mpeg" | "audio/aac" | "image/avif" | "video/x-msvideo" | "text/css" | "text/csv" |
    "application/msword" | "application/epub+zip" | "application/gzip" | "image/gif" | "text/html" |
    "image/vnd.microsoft.icon" | "application/java-archive" | "image/jpeg" | "text/javascript" | "application/json" |
    "audio/mpeg" | "video/mp4" | "video/mpeg"
}