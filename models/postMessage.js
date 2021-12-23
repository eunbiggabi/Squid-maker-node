import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name: String,
    company: String,
    title: String,
    email: String,
    message: String,
    theme: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;