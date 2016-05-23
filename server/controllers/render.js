/**
 * Wrapper for res.render().
 */
module.exports = function(template, variables) {
    return function (req, res) {
        console.log(req.user);
        res.render(template, variables);
    };
};
