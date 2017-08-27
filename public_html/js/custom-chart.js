var ctxDesign = $("#chart-design");
var ctxCms = $("#chart-cms");
var ctxDatabases = $("#chart-databases");

options = {
    legend: {
        display: true,
        position: 'left',
        fontFamily: "'Lato', sans-serif"
    }
}

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
    options: options
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
    options: options
});

var ctxDatabases = new Chart(ctxDatabases, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [4, 7, 8],
            backgroundColor: [
                '#cab2d6',
                '#96b2b7',
                '#738677'
            ] 
        }],
        labels: [
            'Access',
            'MySQL',
            'SQLite'           
        ]
    },
    options: options
});