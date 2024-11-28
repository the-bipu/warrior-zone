import { json } from '@sveltejs/kit';
import connectMongo from '$lib/mongodb';
import { Post } from '$lib/models/Post';

export const GET = async () => {
    try {
        await connectMongo();

        // Fetch posts from MongoDB
        const posts = await Post.find({});
        const reversePosts = posts.reverse();

        return json(reversePosts, { status: 200 });
    } catch (error: any) {
        console.error('Server Error:', error.message);
        return json({ message: error.message }, { status: 500 });
    }
};
