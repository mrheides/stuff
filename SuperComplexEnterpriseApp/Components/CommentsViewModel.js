var CommentViewModel = require("./CommentViewModel.js");

var CommentsViewModel = function (params) {
    var self = this;
    this.comments = ko.observableArray(loadAllTheCommentsUsingParamenter(params.loadingParameter) || []);
    this.addNewElement = function (textValue) {
        self.comments.push(new CommentViewModel({ text: textValue, avatarPath: "path/to/new.png" }));
    }

    function loadAllTheCommentsUsingParamenter(parameter) {
        //TODO: Add some fancy creation logic
        return [
            new CommentViewModel({ text: "first comment", avatarPath: "path/to/avatar1.png" }),
            new CommentViewModel({ text: "second comment", avatarPath: "path/to/avatar2.png" }),
            new CommentViewModel({ text: "third comment", avatarPath: "path/to/avatar3.png" }),
        ];
    }
}

module.exports = CommentsViewModel;