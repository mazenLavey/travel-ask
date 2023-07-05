type RateType = 1 | 2 | 3 | 4 | 5;

export type ImagesType = {
    orignal: string,
    small: string
}

export type ChatBoxType = "admin" | "client";

export type MessagesType = {
    id: string,
    sender: ChatBoxType,
    content: string,
    timestamp: number
}

export interface ReviewCardType {
    authorImg: string,
    authorname: string,
    title: string,
    text: string,
    creationDate: number,
    comments: number,
    likes: number,
    images: ImagesType[]
}

export interface ChatDataType {
    adminName: string,
    adminSubtext: string,
    adminImg: string,
    clientName: string,
    clientImg: string,
    clientSubtext: string,
    clientRating: RateType,
    messages: MessagesType[]
}
