module.exports = (req, res, next) => {
    if (req.session.userId || req.session.adminId || req.session.examinerId) {
        return res.redirect('/') // if user logged in, redirect to home page
    }
    next()
}