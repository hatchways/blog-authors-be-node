const Sequelize = require('sequelize');

const db = require('../db');
const Post = require('./post');
const User = require('./user');

const UserPost = db.define('user_post', {
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  postId: {
    type: Sequelize.INTEGER,
    references: {
      model: Post,
      key: 'id'
    }
  }
}, { timestamps: false });

module.exports = UserPost;
