module.exports = (req, res, next) => {
    if (!req.session.adminId) {
        return res.redirect('/') // if admin is not logged in, redirect to home page
    }
    next()
}