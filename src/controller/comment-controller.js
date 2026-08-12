import { prisma } from "../db.js";

const commentaire = async (req, res) => {
  try {
    const { content } = req.body;
    const { postId } = req.params;
    const { id } = req.user;

    if (!content || !content.trim()) {
      return res.status(400).json({ message: "there is no content to submit" });
    }
    if (!id) {
      return res
        .status(400)
        .json({ message: "you need to be connected to submit a comment" });
    }

    const comment = await prisma.comment.create({
      data: {
        content: content.trim(),
        postId: postId,
        authorId: id,
      },
    });

    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default commentaire;
