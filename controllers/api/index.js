(function (controllers) {
    var notesController = require("./notesController");
    
    controllers.init = function (app){
        notesController.init(app);
    };

})(module.exports);