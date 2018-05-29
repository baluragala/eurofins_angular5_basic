"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Course = /** @class */ (function () {
    function Course(title, about, author) {
        this.title = title;
        this.about = about;
        this.author = author;
    }
    Course.prototype.describe = function () { };
    return Course;
}());
var OnlineCourse = /** @class */ (function (_super) {
    __extends(OnlineCourse, _super);
    function OnlineCourse(title, about, author, meetingLink) {
        var _this = _super.call(this, title, about, author) || this;
        _this.title = title;
        _this.about = about;
        _this.author = author;
        _this.meetingLink = meetingLink;
        return _this;
    }
    OnlineCourse.prototype.describe = function () { };
    OnlineCourse.CLASSNAME = "OnlineCourse";
    return OnlineCourse;
}(Course));
