var barJquery = new ProgressBar.Circle('#bar-jquery', {
    color: '#bbb',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#eee', width: 1 },
    to: { color: '#ddd', width: 4 },
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
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#eee', width: 1 },
    to: { color: '#ddd', width: 4 },
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

// var barDesign = new ProgressBar.Circle('#bar-responsive-design', {
//     color: '#bbb',
//     // This has to be the same size as the maximum width to
//     // prevent clipping
//     strokeWidth: 4,
//     trailWidth: 1,
//     easing: 'easeInOut',
//     duration: 1400,
//     text: {
//         autoStyleContainer: false
//     },
//     from: { color: '#eee', width: 1 },
//     to: { color: '#ddd', width: 4 },
//     // Set default step function for all animate calls
//     step: function(state, circle) {
//         circle.path.setAttribute('stroke', state.color);
//         circle.path.setAttribute('stroke-width', state.width);

//         var value = Math.round(circle.value() * 100);
//         if (value === 0) {
//         circle.setText('');
//         } else {
//         circle.setText(value);
//         }

//     }
// });

barJquery.text.style.fontFamily  = '"Lato", Helvetica, sans-serif';
barBootstrap.text.style.fontFamily  = '"Lato", Helvetica, sans-serif';
// barDesign.text.style.fontFamily = '"Lato", Helvetica, sans-serif';
barJquery.text.style.fontSize = '2em';
barBootstrap.text.style.fontSize = '2em';
// barDesign.text.style.fontSize = '2em';

barJquery.animate(0.7); 
barBootstrap.animate(0.9); 
// barDesign.animate(0.9); 