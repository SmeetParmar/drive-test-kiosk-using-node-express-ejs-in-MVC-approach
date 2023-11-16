module.exports = (req, res, next) => {
    if (!req.session.userId) {
        return res.redirect('/') // if user is not logged in, redirect to home page
    }
    next()
}