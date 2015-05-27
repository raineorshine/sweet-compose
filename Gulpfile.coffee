gulp =        require 'gulp'
replace = 	  require 'gulp-replace'
rename = 		 	require 'gulp-rename'

gulp.task 'default', ->

	gulp.src('./index.js')
		.pipe(replace('compose', '+.'))
		.pipe(gulp.dest('./plusdot'))

	gulp.src('./index.js')
		.pipe(replace('compose', '+|'))
		.pipe(replace('$outer', '$outerTEMP'))
		.pipe(replace('$inner', '$outer'))
		.pipe(replace('$outerTEMP', '$inner'))
		.pipe(gulp.dest('./sequence'))
