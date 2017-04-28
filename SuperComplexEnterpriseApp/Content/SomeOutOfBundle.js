var SomeOutOfBundle = (function() {
    var _comments = ko.observableArray([
        new ViewModels.CommentViewModel({
            avatarPath: "test2",
            text: "comment2"
        })
    ]);

    var _commentInputValue = ko.observable();

    function init() {
        ko.applyBindings({
            commentInputValue: _commentInputValue,
            onClick: function() {
                _comments.push(new ViewModels.CommentViewModel({
                    avatarPath: "newAvatar",
                    text: _commentInputValue()
                }));
                _commentInputValue("");
            },
            comments: _comments

        }, document.getElementById("test2"));
    }

    return {
        init: init
    }
})()