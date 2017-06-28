let messages = [];
let id = 0;
let name = 'bob';

module.exports = {
    create: ( req, res ) => {
        const { text, time, name } = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).send( messages );
    },
    read: ( req, res ) => {
        res.status(200).send( messages );
    },
    update: ( req, res ) => {
        const { text } = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex( message => message.id == updateID );
        const { name } = req.name;
        let message = messages[ messageIndex ];

        messages[ messageIndex ] = {
            id: message.id,
            text: text || message.text,
            time: message.time,
            name: message.name
    };

    res.status(200).send( messages );
  },
    delete: (req, res ) => {
        const deleteID = req.params.id;
        messageIndex = messages.findIndex(message => message.id ==deleteID);
        messages.splice(messageIndex, 1);
        res.status(200).send( messages );
    }
};