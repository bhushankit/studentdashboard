$( document ).ready(function() {
    
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    $('#calendar').fullCalendar({
       
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar
        eventLimit: true, // allow "more" link when too many events
        events: [
            {
                title: 'All Day Event',
                start: new Date(year, month, day-8)
            },
            {
                title: 'Long Event',
                start: new Date(year, month, day-5),
                end: new Date(year, month, day-2)
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(year, month, day)
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(year, month, day+7)
            },
            {
                title: 'Conference',
                start: new Date(year, month, day+3),
                end: new Date(year, month, day+6)
            },
            {
                title: 'Meeting',
                start: new Date(year, month, day+5)
            },
            {
                title: 'Lunch',
                start: new Date(year, month, day+7)
            },
            {
                title: 'Meeting',
                start: new Date(year, month, day+10)
            },
            {
                title: 'Happy Hour',
                start: new Date(year, month, day+10)
            },
            {
                title: 'Dinner',
                start: new Date(year, month, day+13)
            },
            {
                title: 'Birthday Party',
                start: new Date(year, month, day+15)
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: new Date(year, month, day+18)
            }
        ]
    });

    
    // CounterUp Plugin
    
    setTimeout(function() {
        toastr.options = {
            closeButton: true,
            progressBar: true,
            showMethod: 'fadeIn',
            hideMethod: 'fadeOut',
            timeOut: 5000
        };
        toastr.success('There are 3 layers in this version, others are coming soon', 'Welcome!');
    }, 1800);
    


    
    // First Chart
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "First Item",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(75,192,192,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [135, 120, 100, 93, 90, 93, 100],
                spanGaps: false,
            },
            {
                label: "Second Item",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(191, 191, 191,0.4)",
                borderColor: "rgba(191, 191, 191,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(191, 191, 191,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(191, 191, 191,1)",
                pointHoverBorderColor: "rgba(191, 191, 191,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [68, 55, 54, 48, 45, 48, 50],
                spanGaps: false,
            },
            {
                label: "Third Item",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(54, 162, 235,0.4)",
                borderColor: "rgba(54, 162, 235,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(54, 162, 235,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(54, 162, 235,1)",
                pointHoverBorderColor: "rgba(54, 162, 235,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [32, 33, 39, 33, 30, 33, 26],
                spanGaps: false,
            }
        ]
    };
    
    var ctx = $("#chart1");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        suggestedMax: 180, 
                        beginAtZero:true
                    }
                }]
            }, 
            legend: {
                display: false
            }
        }
    });
    
    
    // Second Chart
    var data2 = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                data: [65, 59, 80, 81, 56, 55, 40],
            }
        ]
    };
    
    var ctx2 = $("#chart2");
    var myBarChart = new Chart(ctx2, {
        type: 'bar',
        data: data2,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }, 
            legend: {
                display: false
            }
        }
    });   
    
});