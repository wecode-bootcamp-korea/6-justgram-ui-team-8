const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const profiles = async (req, res) => {
  try {
    const allprofiles = await prisma.$queryRaw`
      SELECT users.user_id, users.description, users.profile_image 
      FROM users`;
    res.status(200).json({ profiles: allprofiles });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { profiles };
