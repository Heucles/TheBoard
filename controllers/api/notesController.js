//notesController.js
(function (notesController){
    
    var data = require("../../data");

    notesController.init = function (app) {

        app.get("/api/notes/:categoryName", function (req, res) {
            
            var categoryName = req.params.categoryName;

            data.getNotes(categoryName, function (err, notes) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(notes.notes);
                }
            });            
        });

        app.post("/api/notes/:categoryName", function (req, res) {
            var categoryName = req.params.categoryName;

            var noteToInsert = {
                note: req.body.note,
                color: req.body.color,
                author: "Shaun Wildermuth"
            };

            data.addNote(categoryName, noteToInsert, function (err) {
                if (err) {
                    res.send(400, "Failed to add note to data store");
                } else {
                    //TODO: REVER COMO FAZER A BUSCA DENTRO DE UM ARRAY DE UM OBJETO NO MONGO, isso não é tão importante agora
                    //data.getNote(categoryName, noteToInsert.note, function (err, insertedNote) {
                    //    if (err) {
                    //        res.send(404, "Failed to obtain the note that was just created");
                    //    } else {                            
                    //        res.set("Content-Type", "application/json");
                    //        res.send(201, insertedNote.note);
                    //    }
                    //});

                    res.set("Content-Type", "application/json");
                    res.send(201, noteToInsert);


                }
            });
        });
    };

})(module.exports)