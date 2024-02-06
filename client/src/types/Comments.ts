export type Comment = {
    id: number;
    postId: number;
    userId: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    likes: number;
    replies: number[];
    
};