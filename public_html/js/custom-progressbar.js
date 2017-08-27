var barCss = new ProgressBar.Circle('#bar-css', {
    color: '#bbb',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailColor: '#eee',
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#aaa', width: 5 },
    to: { color: '#f5d891', width: 5 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
        circle.setText('');
        } else {
        circle.setText(value);
        }

    }
});

var barLess = new ProgressBar.Circle('#bar-less', {
    color: '#bbb',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailColor: '#eee',
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#aaa', width: 5 },
    to: { color: '#e4a6b3', width: 5 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
        circle.setText('');
        } else {
        circle.setText(value);
        }

    }
});

var barSass = new ProgressBar.Circle('#bar-sass', {
    color: '#bbb',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailColor: '#eee',
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#aaa', width: 5 },
    to: { color: '#a2c7e0', width: 5 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
        circle.setText('');
        } else {
        circle.setText(value);
        }

    }
});

var barHtml = new ProgressBar.Circle('#bar-html', {
    color: '#bbb',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailColor: '#eee',
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#aaa', width: 5 },
    to: { color: '#cab2d6', width: 5 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
        circle.setText('');
        } else {
        circle.setText(value);
        }

    }
});

var barJs = new ProgressBar.Circle('#bar-js', {
    color: '#bbb',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailColor: '#eee',
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#aaa', width: 5 },
    to: { color: '#b6d6bd', width: 5 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
        circle.setText('');
        } else {
        circle.setText(value);
        }

    }
});

var barPhp = new ProgressBar.Circle('#bar-php', {
    color: '#bbb',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailColor: '#eee',
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#aaa', width: 5 },
    to: { color: '#96b2b7', width: 5 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
        circle.setText('');
        } else {
        circle.setText(value);
        }

    }
});

var barSql = new ProgressBar.Circle('#bar-sql', {
    color: '#bbb',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailColor: '#eee',
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#aaa', width: 5 },
    to: { color: '#efcab2', width: 5 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
        circle.setText('');
        } else {
        circle.setText(value);
        }

    }
});

var barJava = new ProgressBar.Circle('#bar-java', {
    color: '#bbb',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailColor: '#eee',
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#aaa', width: 5 },
    to: { color: '#bf9498', width: 5 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
        circle.setText('');
        } else {
        circle.setText(value);
        }

    }
});

var barC = new ProgressBar.Circle('#bar-c', {
    color: '#bbb',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailColor: '#eee',
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#aaa', width: 5 },
    to: { color: '#738677', width: 5 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
        circle.setText('');
        } else {
        circle.setText(value);
        }

    }
});

var barJquery = new ProgressBar.Circle('#bar-jquery', {
    color: '#bbb',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailColor: '#eee',
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#eee', width: 5 },
    to: { color: '#ddd', width: 5 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
        circle.setText('');
        } else {
        circle.setText(value);
        }

    }
});

var barBootstrap = new ProgressBar.Circle('#bar-bootstrap', {
    color: '#bbb',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailColor: '#eee',
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#eee', width: 5 },
    to: { color: '#ddd', width: 5 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
        circle.setText('');
        } else {
        circle.setText(value);
        }

    }
});

var fontFamily = '"Lato", Helvetica, sans-serif';

barCss.text.style.fontFamily = fontFamily;
barLess.text.style.fontFamily = fontFamily;
barSass.text.style.fontFamily = fontFamily;
barHtml.text.style.fontFamily = fontFamily;
barJs.text.style.fontFamily = fontFamily;
barPhp.text.style.fontFamily = fontFamily;
barSql.text.style.fontFamily = fontFamily;
barJava.text.style.fontFamily = fontFamily;
barC.text.style.fontFamily = fontFamily;
barJquery.text.style.fontFamily  = fontFamily;
barBootstrap.text.style.fontFamily  = fontFamily;

var fontSize = '1em';

barCss.text.style.fontSize = fontSize;
barLess.text.style.fontSize = fontSize;
barSass.text.style.fontSize = fontSize;
barHtml.text.style.fontSize = fontSize;
barJs.text.style.fontSize = fontSize;
barPhp.text.style.fontSize = fontSize;
barSql.text.style.fontSize = fontSize;
barJava.text.style.fontSize = fontSize;
barC.text.style.fontSize = fontSize;
barJquery.text.style.fontSize = fontSize;
barBootstrap.text.style.fontSize = fontSize;

barCss.animate(0.95); 
barLess.animate(0.9); 
barSass.animate(0.3); 
barHtml.animate(0.95); 
barJs.animate(0.8); 
barPhp.animate(0.8); 
barSql.animate(0.8); 
barJava.animate(0.8); 
barC.animate(0.2); 
barJquery.animate(0.9); 
barBootstrap.animate(0.9); 
