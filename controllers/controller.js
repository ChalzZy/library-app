module.exports.guest_get = (req, res) => {
    res.render('pages/guest');
}

module.exports.librarian_get = (req, res) => {
    res.render('pages/librarian');
}

module.exports.bookworm_get = (req, res) => {
    res.render('pages/bookworm');
}