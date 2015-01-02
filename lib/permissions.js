/**
 * Created by Rob on 02/01/2015.
 */
//check owndership

ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}