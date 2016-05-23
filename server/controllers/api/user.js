'use strict';

module.exports = function(req, res){
    console.log(req.sessionStore.sessions);
    if (req.user) {
        return res.send(req.user);
    } else {
        return res.sendStatus(404);
    }

};
