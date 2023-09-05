const { checkRedis, checkDatabase } = require('../utils'); // Import your utility functions here

import RedisClient from '../utils/redis';
import DBClient from '../utils/db';

const AppController = {
  getStatus: async (req, res) => {
    try {
      const redisStatus = await checkRedis();
      const dbStatus = await checkDatabase();
      
      if (redisStatus && dbStatus) {
        res.status(200).json({ "redis": true, "db": true });
      } else {
        res.status(500).json({ "redis": false, "db": false });
      }
    } catch (error) {
      res.status(500).json({ "error": "Internal Server Error" });
    }
  },

  getStats: async (req, res) => {
    try {
      // Assuming you have MongoDB as your database
      const usersCount = await User.countDocuments();
      const filesCount = await File.countDocuments();
      
      res.status(200).json({ "users": usersCount, "files": filesCount });
    } catch (error) {
      res.status(500).json({ "error": "Internal Server Error" });
    }
  }
};

module.exports = AppController;

