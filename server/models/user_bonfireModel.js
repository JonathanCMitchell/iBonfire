const db = require('../db/db.js');

const User_Bonfire = module.exports;

User_Bonfire.createJoinTable = (attr) => {
	return db('Users_Bonfires').insert(attr)
		.then((result) => {
			attr.id = result[0];
			return attr;
		});
};

User_Bonfire.findJoinTable = (bonfireId) => {
	return db('Users_Bonfires').where({
			id_Bonfires: bonfireId
		}).limit(1)
		.then((rows) => {
			return rows;
		});
};

User_Bonfire.checkIfUserExists = (userId, bonfireId) => {
	return db('Users_Bonfires').where({
			id_Bonfires: bonfireId
		}).where({
			id_Users: userId
		})
		.then((rows) => {
			return rows;
		})
};

User_Bonfire.joinBonfire = (userId, bonfireId) => {
	return db('Users_Bonfires').where({
			id_Bonfires: bonfireId
		}).insert({
			id_Users: userId,
			id_Bonfires: bonfireId
		})
		.then((response) => {
			return response;
		})
};

// Updated this function to return all bonfires that the user has joined, not just the bonfires the user has created, easily reverted to older

User_Bonfire.findUserBonfires = (userId) => {
	return db('Users_Bonfires').where({
			id_Users: userId
		})
		.then((rows) => {
			return rows;
		})
};

User_Bonfire.findCreatedBonfires = (userId) => {
	return db('Bonfires').where({
			createdBy: userId
		})
		.then((rows) => {
			return rows;
		})
};

User_Bonfire.findBonfiresById = (bonfireId) => {
	return db('Users_Bonfires').where({
			id_Bonfires: bonfireId
		})
		.then((rows) => {
			return rows;
		})
};

User_Bonfire.findAllUsers = (bonfireId) => {
	return db('Users_Bonfires').where({
		id_Bonfires: bonfireId
	})
	.then((rows) => {
		return rows;
	})
};

User_Bonfire.findAllBonfires = (userId) => {
	return db('Users_Bonfires').where({
		id_Users: userId
	})
	.then((rows) => {
		return rows;
	})
};

