(function() {
    ko.components.register('comment-input', { viewModel: require("./CommentInputViewModel.js"), template: require("./CommentInputTemplate.html") });
    ko.components.register('comment', { viewModel: require("./CommentViewModel.js"), template: require("./CommentTemplate.html") });
    ko.components.register('comments-list', { viewModel: require("./CommentsViewModel.js"), template: require("./CommentsTemplate.html") });
})();


