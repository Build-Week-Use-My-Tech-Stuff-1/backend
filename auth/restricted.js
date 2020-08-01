
const jwt = require("jsonwebtoken")

function restrict() {
	return async (req, res, next) => {
		const autherror = {
			message: "invalid credentials",
		}

		try {
			const token = req.cookies.token
			if (!token) {
				return res.status(401).json(autherror)
			}

			jwt.verify(token, "can i tell you something?", (err, decoded) => {
				if (err) {
					return res.status(401).json(autherror)
				}
				next()
			})
		} catch(err) {
			next(err)
		}
	}
}

module.exports = restrict
