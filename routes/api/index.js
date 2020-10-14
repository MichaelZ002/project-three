const router = require("express").Router();
const db = require("../../models")
//matches with /api/save-link
router.route("/save-link").post((req, res) => {
    let videoURL = `https://www.youtube.com/watch?v=${req.body.id}`

    db.Fave.create({ UID: req.body.uid, faveVids: [videoURL]})
        .then(result => {
            console.log(result)
        })
        .catch(({ message }) => {
            console.log(message);
        })

})

module.exports = router