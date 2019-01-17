

const allMessages = [];

module.exports = {

    getAllMessages: (req, res, next) => {
        res.status(200).send( allMessages );
    },

    createMessages: ( req, res, next ) => {
        let { username, message } = req.body;
        let newMessage;
        newMessage = {
            username: username,
            message: message
        }

        allMessages.push( newMessage );
        res.status(200).send( allMessages );
    },
}