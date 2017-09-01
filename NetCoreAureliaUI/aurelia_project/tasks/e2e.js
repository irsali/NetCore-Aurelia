define(["require", "exports", "../aurelia.json", "gulp", "del", "gulp-typescript", "../../tsconfig.json", "gulp-protractor"], function (require, exports, project, gulp, del, typescript, tsConfig, gulp_protractor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function clean() {
        return del(project.e2eTestRunner.dist + '*');
    }
    function build() {
        var typescriptCompiler = typescriptCompiler || null;
        if (!typescriptCompiler) {
            delete tsConfig.compilerOptions.lib;
            typescriptCompiler = typescript.createProject(Object.assign({}, tsConfig.compilerOptions, {
                module: 'commonjs'
            }));
        }
        return gulp.src(project.e2eTestRunner.typingsSource.concat(project.e2eTestRunner.source))
            .pipe(typescript(typescriptCompiler))
            .pipe(gulp.dest(project.e2eTestRunner.dist));
    }
    function e2e() {
        return gulp.src(project.e2eTestRunner.dist + '**/*.js')
            .pipe(gulp_protractor_1.protractor({
            configFile: 'protractor.conf.js',
            args: ['--baseUrl', 'http://127.0.0.1:9000']
        }))
            .on('end', function () { process.exit(); })
            .on('error', function (e) { throw e; });
    }
    exports.default = gulp.series(gulp_protractor_1.webdriver_update, clean, build, e2e);
});
//# sourceMappingURL=e2e.js.map