import { json } from '@sveltejs/kit';
import connectMongo from '$lib/mongodb';
import { Post } from '$lib/models/Post';

export const POST = async ({ request }: any) => {
    try {
        await connectMongo();
        const data = await request.json();
        const newPost = await Post.create(data);

        return json(newPost, { status: 201 });
    } catch (error: any) {
        console.error('Server Error:', error.message);
        return json({ message: error.message }, { status: 500 });
    }
};
