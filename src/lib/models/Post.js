import mongoose from 'mongoose';

const replySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const commentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    replies: [replySchema],
});

const postSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        default: '',
    },
    confession: {
        type: String,
        required: true,
        default: '',
    },
    type: {
        type: String,
        required: true,
        default: '',
    },
    likes: {
        type: Number,
        required: true,
        default: 0,
    },
    saves: {
        type: Number,
        required: true,
        default: 0,
    },
    comments: [commentSchema],
},{
    timestamps: true,
});

export const Post = mongoose.models.Post || mongoose.model('Post', postSchema);