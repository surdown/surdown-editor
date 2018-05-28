const gulp = require('gulp')
const livereload = require('gulp-livereload');
const directoryName = 'public';

const fs = require('fs')

var exec = require('child_process').exec;
let flags = process.argv.splice(3)
flags = flags.map((item) => {
    return item.replace('--', '');
})
let isDev = flags.indexOf('dev') >= 0;
let isProd = !isDev;
console.log('isProd',isProd);
require('marko/node-require');

require('lasso').configure({
    "plugins": [{
            "plugin": "lasso-marko"

        },
        {
            "plugin": "lasso-less"

        },
        {
            "plugin": "lasso-sass",
            "config":{
                "includePaths":["./node_modules"]
            }
        }
    ],
    "fileWriter": {
        "outputDir": `${directoryName}/static`,
        "fingerprintsEnabled": isProd,
        "urlPrefix": "static"


    },
    "minify": isProd,
    "resolveCssUrls": true,
    "bundlingEnabled": isProd,
    "bundles": [

    ],
    flags: flags
});





function copy() {

    return gulp.src(['./media/**/*'])
        .pipe(gulp.dest(`./${directoryName}/media`))

}
exports.copy = copy;



function marko(cb) {


    return Promise.all([
        renderPage('app-editor', 'index.html')
    ]);

    
};
exports.marko = marko;

function renderPage(pageName, htmlFileName) {
    console.log('rendering ', pageName);
    return new Promise(function (resolve, reject) {
        let main = require(`./src/components/${pageName}/${pageName}`);
        var htmlProm = main.render({});

        htmlProm.then((html) => {

            fs.writeFileSync(`./${directoryName}/` + htmlFileName, html)

            console.log('done rendering: ', `${htmlFileName}`)
            resolve();
        })

    })
}

var build = gulp.series(copy, marko);
let lastRun = new Date().getTime();

function buildShell(done) {
    let now = new Date().getTime();
    let shouldBuild = Math.abs(now - lastRun) > 7000;
    console.log('shouldbuild', shouldBuild);
    let cmd = `./build.sh`
    for (let flag of flags) {
        cmd = cmd + ` --${flag}`
    }
    shouldBuild && exec(cmd, function (err, stdout, stderr) {
        console.log(stdout);
        err && console.log(err);
        livereload.reload();
    });


    lastRun = shouldBuild ? now : lastRun;

    done();
}

function watch() {
    livereload.listen();
    gulp.watch(['src/lib/**/*.js','src/components/**/*.scss' ,'src/components/**/*.js', 'src/components/**/*.marko'], buildShell);
}
exports.watch = watch;

gulp.task('build', build);
gulp.task('default', build);

// gulp.task('watch', );