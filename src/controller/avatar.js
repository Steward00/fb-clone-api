import { prisma } from "../db.js";

const avatar = async (req, res) => {
  try {
    const { id } = req.user;
    const { image } = req.file;

    if (!image) {
      return res.status(400).json({ message: "Image is required" });
    }

    const avatar = await prisma.avatar.create({
      data: {
        image,
        ownerId: id,
      },
    });

    res.status(201).json(avatar);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { avatar };
