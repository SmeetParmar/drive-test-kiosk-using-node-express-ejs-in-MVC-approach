module.exports = (req, res, next) => {
    if (!req.session.examinerId) {
        return res.redirect('/') // if examiner is not logged in, redirect to home page
    }
    next()
}