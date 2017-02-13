System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CoursesService;
    return {
        setters:[],
        execute: function() {
            CoursesService = (function () {
                function CoursesService() {
                }
                CoursesService.prototype.getFaculty = function () {
                    return ['Ravi Prakash', 'Sangireddy', 'Amit Mishra'];
                };
                return CoursesService;
            }());
            exports_1("CoursesService", CoursesService);
        }
    }
});
//# sourceMappingURL=courses.service.js.map