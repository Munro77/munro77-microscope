/**
 * Created by Rob on 02/01/2015.
 */
Errors = new Mongo.Collection(null);

throwError = function(message) {
    Errors.insert({message: message});
};