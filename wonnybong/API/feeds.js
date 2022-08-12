const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const feeds = async (req, res) => {
  try {
    const allfeeds =
      await prisma.$queryRaw`SELECT postings.id, postings.like, postings.contents, postings.created_at, users.user_id, posting_images.image_url, posting_images.image_alt
      FROM postings 
      JOIN users ON postings.user_id = users.id 
      JOIN posting_images ON postings.id = posting_images.posting_id`;
    res.status(200).json({ feeds: allfeeds });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { feeds };
