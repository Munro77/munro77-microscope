/**
 * Created by Rob on 02/01/2015.
 */
Errors = {
    collection: new Mongo.Collection(null),
    throw: function(message) {
        Errors.collection.insert({message: message, seen: false})
    }
};