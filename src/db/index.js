const express = require("express");

const PORT = process.env.PORT || 3001;


const getProducts = async (req, res) => {
	try {
		const [result] = await pool.query("SELECT * FROM produto");

		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
	}
};