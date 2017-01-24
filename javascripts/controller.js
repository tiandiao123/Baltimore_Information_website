const CHART=document.getElementById("myChart1");

//console.log(CHART);
let line=new Chart(CHART,{
     type:'line',
     data:{
    labels: ["2008", "2009", "2010", "2011", "2012", "2013", "2014","2015"],
    datasets: [
        {
            label: "Baltimore City's GPA(billion in dollars)",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,75,60,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [143.65, 146.63, 152.82, 157.62, 163.03, 167.46, 174.44,181.42],
            spanGaps: false,
        },{
            label: "Maryland's GPA(billion in dollars)",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,70,90,0.4)",
            borderColor: "rgba(75,70,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,70,90,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,70,90,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [300.6, 300.93, 310.7 ,316.77, 318.15, 318.26, 321.54,328.1],
            spanGaps: false,
        }
        ]
    },
        options:{
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZero: true
                    }
                }]
            }
        }
});




