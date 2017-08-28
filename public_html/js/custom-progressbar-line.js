// Design
var barPhotoshop = new ProgressBar.Line('#bar-photoshop', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#a3b0a6',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#aaa'},
    to: {color: '#a3b0a6'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
});

var barIllustrator = new ProgressBar.Line('#bar-illustrator', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#efcab2',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#aaa'},
    to: {color: '#efcab2'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
});

var barInDesign = new ProgressBar.Line('#bar-indesign', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#b5a6bc',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#b5a6bc'},
    to: {color: '#b5a6bc'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
});

var barBalsamiq = new ProgressBar.Line('#bar-balsamiq', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#a2c7e0',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#a2c7e0'},
    to: {color: '#a2c7e0'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
});


// CMS
var barWordpress = new ProgressBar.Line('#bar-wordpress', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#96b2b7',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#aaa'},
    to: {color: '#96b2b7'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
});

var barJoomla = new ProgressBar.Line('#bar-joomla', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#e4a6b3',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#aaa'},
    to: {color: '#e4a6b3'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
});

var barDrupal = new ProgressBar.Line('#bar-drupal', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#c5ddc0',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#aaa'},
    to: {color: '#c5ddc0'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
});


// Databases
var barAccess = new ProgressBar.Line('#bar-access', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#f5d891',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#f5d891'},
    to: {color: '#f5d891'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
});

var barMySql = new ProgressBar.Line('#bar-mysql', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#a0b4d1',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#aaa'},
    to: {color: '#a0b4d1'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
});

var barSqlite = new ProgressBar.Line('#bar-sqlite', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#bf9498',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#aaa'},
    to: {color: '#bf9498'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
});

barPhotoshop.animate(0.7); 
barIllustrator.animate(0.8); 
barInDesign.animate(0.25); 
barBalsamiq.animate(0.2); 
barWordpress.animate(0.95); 
barJoomla.animate(0.8); 
barDrupal.animate(0.5); 
barAccess.animate(0.2); 
barMySql.animate(0.9); 
barSqlite.animate(0.75); 
