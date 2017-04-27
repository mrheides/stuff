(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = "﻿<div class=\"comment-input\">\r\n    <label for=\"commentInputElement\">add new comment:</label>\r\n    <input id=\"commentInputElement\" type=\"text\" data-bind=\"value: commentInputValue\" />\r\n    <button data-bind=\"click: onClick\">add</button>\r\n</div>";

},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
module.exports = "﻿<div class=\"single-comment\">\r\n    <img data-bind=\"attr: {src: avatarPath}\" />\r\n    <span data-bind=\"text: commentText\"></span>\r\n</div>\r\n";

},{}],4:[function(require,module,exports){
var CommentViewModel = function (params) {
    this.commentText = params.text;
    this.avatarPath = params.avatarPath;
}

module.exports = CommentViewModel;
},{}],5:[function(require,module,exports){
module.exports = "﻿<comment-input params=\"onClick: addNewElement\"></comment-input>\r\n<!-- ko foreach: comments -->\r\n<comment params=\"text: $data.commentText, avatarPath: $data.avatarPath\"></comment>\r\n<!-- /ko -->\r\n";

},{}],6:[function(require,module,exports){
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
},{"./CommentViewModel.js":4}],7:[function(require,module,exports){
(function() {
    ko.components.register('comment-input', { viewModel: require("./CommentInputViewModel.js"), template: require("./CommentInputTemplate.html") });
    ko.components.register('comment', { viewModel: require("./CommentViewModel.js"), template: require("./CommentTemplate.html") });
    ko.components.register('comments-list', { viewModel: require("./CommentsViewModel.js"), template: require("./CommentsTemplate.html") });
})();



},{"./CommentInputTemplate.html":1,"./CommentInputViewModel.js":2,"./CommentTemplate.html":3,"./CommentViewModel.js":4,"./CommentsTemplate.html":5,"./CommentsViewModel.js":6}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDb21wb25lbnRzL0NvbW1lbnRJbnB1dFRlbXBsYXRlLmh0bWwiLCJDb21wb25lbnRzL0NvbW1lbnRJbnB1dFZpZXdNb2RlbC5qcyIsIkNvbXBvbmVudHMvQ29tbWVudFRlbXBsYXRlLmh0bWwiLCJDb21wb25lbnRzL0NvbW1lbnRWaWV3TW9kZWwuanMiLCJDb21wb25lbnRzL0NvbW1lbnRzVGVtcGxhdGUuaHRtbCIsIkNvbXBvbmVudHMvQ29tbWVudHNWaWV3TW9kZWwuanMiLCJDb21wb25lbnRzL0NvbXBvbmVudFJlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gXCLvu788ZGl2IGNsYXNzPVxcXCJjb21tZW50LWlucHV0XFxcIj5cXHJcXG4gICAgPGxhYmVsIGZvcj1cXFwiY29tbWVudElucHV0RWxlbWVudFxcXCI+YWRkIG5ldyBjb21tZW50OjwvbGFiZWw+XFxyXFxuICAgIDxpbnB1dCBpZD1cXFwiY29tbWVudElucHV0RWxlbWVudFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTogY29tbWVudElucHV0VmFsdWVcXFwiIC8+XFxyXFxuICAgIDxidXR0b24gZGF0YS1iaW5kPVxcXCJjbGljazogb25DbGlja1xcXCI+YWRkPC9idXR0b24+XFxyXFxuPC9kaXY+XCI7XG4iLCJ2YXIgQ29tbWVudElucHV0Vmlld01vZGVsID0gZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgc2VsZi5jb21tZW50SW5wdXRWYWx1ZSA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgIHNlbGYub25DbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIChwYXJhbXMub25DbGljaykgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcGFyYW1zLm9uQ2xpY2soc2VsZi5jb21tZW50SW5wdXRWYWx1ZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGYuY29tbWVudElucHV0VmFsdWUoXCJcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29tbWVudElucHV0Vmlld01vZGVsOyIsIm1vZHVsZS5leHBvcnRzID0gXCLvu788ZGl2IGNsYXNzPVxcXCJzaW5nbGUtY29tbWVudFxcXCI+XFxyXFxuICAgIDxpbWcgZGF0YS1iaW5kPVxcXCJhdHRyOiB7c3JjOiBhdmF0YXJQYXRofVxcXCIgLz5cXHJcXG4gICAgPHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiBjb21tZW50VGV4dFxcXCI+PC9zcGFuPlxcclxcbjwvZGl2PlxcclxcblwiO1xuIiwidmFyIENvbW1lbnRWaWV3TW9kZWwgPSBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICB0aGlzLmNvbW1lbnRUZXh0ID0gcGFyYW1zLnRleHQ7XHJcbiAgICB0aGlzLmF2YXRhclBhdGggPSBwYXJhbXMuYXZhdGFyUGF0aDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50Vmlld01vZGVsOyIsIm1vZHVsZS5leHBvcnRzID0gXCLvu788Y29tbWVudC1pbnB1dCBwYXJhbXM9XFxcIm9uQ2xpY2s6IGFkZE5ld0VsZW1lbnRcXFwiPjwvY29tbWVudC1pbnB1dD5cXHJcXG48IS0tIGtvIGZvcmVhY2g6IGNvbW1lbnRzIC0tPlxcclxcbjxjb21tZW50IHBhcmFtcz1cXFwidGV4dDogJGRhdGEuY29tbWVudFRleHQsIGF2YXRhclBhdGg6ICRkYXRhLmF2YXRhclBhdGhcXFwiPjwvY29tbWVudD5cXHJcXG48IS0tIC9rbyAtLT5cXHJcXG5cIjtcbiIsInZhciBDb21tZW50Vmlld01vZGVsID0gcmVxdWlyZShcIi4vQ29tbWVudFZpZXdNb2RlbC5qc1wiKTtcblxudmFyIENvbW1lbnRzVmlld01vZGVsID0gZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuY29tbWVudHMgPSBrby5vYnNlcnZhYmxlQXJyYXkobG9hZEFsbFRoZUNvbW1lbnRzVXNpbmdQYXJhbWVudGVyKHBhcmFtcy5sb2FkaW5nUGFyYW1ldGVyKSB8fCBbXSk7XG4gICAgdGhpcy5hZGROZXdFbGVtZW50ID0gZnVuY3Rpb24gKHRleHRWYWx1ZSkge1xyXG4gICAgICAgIHNlbGYuY29tbWVudHMucHVzaChuZXcgQ29tbWVudFZpZXdNb2RlbCh7IHRleHQ6IHRleHRWYWx1ZSwgYXZhdGFyUGF0aDogXCJwYXRoL3RvL25ldy5wbmdcIiB9KSk7XHJcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkQWxsVGhlQ29tbWVudHNVc2luZ1BhcmFtZW50ZXIocGFyYW1ldGVyKSB7XG4gICAgICAgIC8vVE9ETzogQWRkIHNvbWUgZmFuY3kgY3JlYXRpb24gbG9naWNcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG5ldyBDb21tZW50Vmlld01vZGVsKHsgdGV4dDogXCJmaXJzdCBjb21tZW50XCIsIGF2YXRhclBhdGg6IFwicGF0aC90by9hdmF0YXIxLnBuZ1wiIH0pLFxuICAgICAgICAgICAgbmV3IENvbW1lbnRWaWV3TW9kZWwoeyB0ZXh0OiBcInNlY29uZCBjb21tZW50XCIsIGF2YXRhclBhdGg6IFwicGF0aC90by9hdmF0YXIyLnBuZ1wiIH0pLFxuICAgICAgICAgICAgbmV3IENvbW1lbnRWaWV3TW9kZWwoeyB0ZXh0OiBcInRoaXJkIGNvbW1lbnRcIiwgYXZhdGFyUGF0aDogXCJwYXRoL3RvL2F2YXRhcjMucG5nXCIgfSksXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21tZW50c1ZpZXdNb2RlbDsiLCIoZnVuY3Rpb24oKSB7XHJcbiAgICBrby5jb21wb25lbnRzLnJlZ2lzdGVyKCdjb21tZW50LWlucHV0JywgeyB2aWV3TW9kZWw6IHJlcXVpcmUoXCIuL0NvbW1lbnRJbnB1dFZpZXdNb2RlbC5qc1wiKSwgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL0NvbW1lbnRJbnB1dFRlbXBsYXRlLmh0bWxcIikgfSk7XHJcbiAgICBrby5jb21wb25lbnRzLnJlZ2lzdGVyKCdjb21tZW50JywgeyB2aWV3TW9kZWw6IHJlcXVpcmUoXCIuL0NvbW1lbnRWaWV3TW9kZWwuanNcIiksIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9Db21tZW50VGVtcGxhdGUuaHRtbFwiKSB9KTtcclxuICAgIGtvLmNvbXBvbmVudHMucmVnaXN0ZXIoJ2NvbW1lbnRzLWxpc3QnLCB7IHZpZXdNb2RlbDogcmVxdWlyZShcIi4vQ29tbWVudHNWaWV3TW9kZWwuanNcIiksIHRlbXBsYXRlOiByZXF1aXJlKFwiLi9Db21tZW50c1RlbXBsYXRlLmh0bWxcIikgfSk7XHJcbn0pKCk7XHJcblxyXG5cclxuIl19
