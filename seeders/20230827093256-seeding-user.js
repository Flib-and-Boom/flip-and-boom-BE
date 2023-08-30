"use strict";
let user = require("../db/user.json");
const { hashPassword } = require("../helpers");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		user = user.map((el) => {
			el.experience = 0;
			el.balance = 10;
			el.selectedSkin = "default";
			el.selectedChar = "default";
			el.mediumScore = 0;
			el.hardScore = 0;
			el.impossibleScore = 0;
			el.createdAt = new Date();
			el.updatedAt = new Date();
			el.password = hashPassword(el.password);
			return el;
		});
		await queryInterface.bulkInsert("Users", user);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Users", null);
	},
};
