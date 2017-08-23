var ctxLanguages = $("#chart-languages");
var ctxDesign = $("#chart-design");
var ctxCms = $("#chart-cms");
options = {
    legend: {
        display: true,
        position: 'left',
        fontFamily: "'Lato', sans-serif"
    },
    // title: {
    //     display: true,
    //     text: 'Languages',
    //     fontSize: 16,
    //     fontFamily: "'Lato', sans-serif",
    //     fontColor: '#7a7a7a',
    //     fontStyle: 'normal'
    // }   
}
var chartLanguages = new Chart(ctxLanguages, {
    type: 'polarArea',
    data: {
        datasets: [{
            data: [9, 9, 2, 9, 8, 7, 6, 8, 2],
            backgroundColor: [
                '#f5d891',
                '#e4a6b3',
                '#a2c7e0',
                '#cab2d6',
                '#b6d6bd',
                '#96b2b7',
                '#efcab2',
                '#bf9498',
                '#738677'
            ] 
        }],
        labels: [
            'CSS3',
            'Less',
            'Sass',
            'HTML5',
            'JavaScript',
            'PHP',
            'SQL',
            'Java (Android SDK)',
            'C#'               
        ]
    },
    options: options
});

var chartDesign = new Chart(ctxDesign, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [8, 9, 2, 3],
            backgroundColor: [
                '#96b2b7',
                '#efcab2',
                '#bf9498',
                '#738677'
            ] 
        }],
        labels: [
            'Photoshop',
            'Illustrator',
            'InDesign',
            'Balsamiq'            
        ]
    },
    options: {
        legend: {
            display: true,
            position: 'left',
            fontFamily: "'Lato', sans-serif"
        },
    }
});

var chartCms = new Chart(ctxCms, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [8,7,4],
            backgroundColor: [
                '#f5d891',
                '#e4a6b3',
                '#a2c7e0'
            ] 
        }],
        labels: [
            'Wordpress',
            'Joomla',
            'Drupal'           
        ]
    },
    options: {
        legend: {
            display: true,
            position: 'left',
            fontFamily: "'Lato', sans-serif"
        },
    }
});