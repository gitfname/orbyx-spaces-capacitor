import { ReactNode } from "react";

export interface FileOptions {
    id: string;
    name: string;
    size: string;
    date: string;
    img: string | ReactNode;
}