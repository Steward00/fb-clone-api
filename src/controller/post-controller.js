import { prisma } from "../db.js";

const post = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.user;

    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "title and content are required" });
    }
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        authorId: id,
      },
    });
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default post;
