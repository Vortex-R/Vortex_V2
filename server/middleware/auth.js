import jwt from "jsonwebtoken";
import User from "../models/user.js";

const secret = "test";

export const auth = async(req, res, next) => {
    // console.log(req.user);
    let token

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1]
                console.log("token: "+token);
            const decoded = jwt.verify(token, secret)

            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.error(error)
            throw new Error('Not authorized, token failed')

        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
};


export const admin = (req, res, next) => {
    if (req.user && req.user.role === 2) {
        next()
            /* res.send("you're admin") */
    } else {
        res.status(401)
        res.send("Not authorized")
    }
}
export const organizer = (req, res, next) => {
    if (req.user && req.user.role === 1) {
        next()
        res.send("you're organizer")
    } else {
        res.status(401)
        res.send("Not authorized ")
    }
}