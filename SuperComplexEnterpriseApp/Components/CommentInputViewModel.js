var CommentInputViewModel = function (params) {
    var self = this;
    self.commentInputValue = ko.observable();
    self.onClick = function () {
        if (typeof (params.onClick) === 'function') {
            params.onClick(self.commentInputValue());
        }

        self.commentInputValue("");
    }
}

module.exports = CommentInputViewModel;