google.charts.load('current', {'packages':['corechart']});

      google.charts.setOnLoadCallback(drawSarahChart);
      google.charts.setOnLoadCallback(drawAnthonyChart);
      google.charts.setOnLoadCallback(drawlineChart);
      google.charts.setOnLoadCallback(drawChart);


     function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'white', 'Black', 'Asian'],
          ['2014', 1000, 400, 200],
          ['2015', 1170, 460, 250],
          ['2016', 660, 1120, 300],
          ['2017', 1030, 540, 350]
        ]);

        var options = {
          chart: {
            title: 'Baltimore education information by race',
            subtitle: 'the number of people who have degrees',
          },
          bars: 'vertical',
          vAxis: {format: 'decimal'},
          height: 400,
          colors: ['#1b9e77', '#d95f02', '#7570b3']
        };

        var chart = new google.charts.Bar(document.getElementById('chart_div'));

        chart.draw(data, google.charts.Bar.convertOptions(options));

        var btns = document.getElementById('btn-group');

        btns.onclick = function (e) {

          if (e.target.tagName === 'BUTTON') {
            options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
            chart.draw(data, google.charts.Bar.convertOptions(options));
          }
        }
      }
      
      function drawSarahChart() {

        
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Cities');
        data.addColumn('number', 'GDP(million in dollar)');
        data.addRows([
          ['Baltimore', 173516],
          ['Minneapolis',235733 ],
          ['New York', 1558518],
          ['San Francicso',411969],
          ['Salt lake City', 75672]
        ]);

      
        var options = {title:'The GDP comparison with other cities(million dollars)',
                       width:400,
                       height:300};

        var chart = new google.visualization.PieChart(document.getElementById('p1'));
        chart.draw(data, options);
      }

      function drawAnthonyChart() {

      
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Cities');
        data.addColumn('number', 'GDP');
        data.addRows([
          ['Chicago', 610552],
          ['Houston', 525397],
          ['Portland', 159328],
          ['Coloumbus', 117824],
          ['Baltimore', 173516]
        ]);

  
        var options = {title:'comparison with some other cities(million dollars)',
                       width:400,
                       height:300};

        var chart = new google.visualization.PieChart(document.getElementById('p2'));
        chart.draw(data, options);
      }


   function drawlineChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Baltimore', 'MaryLand'],
          ['2010',152.82,310.7],
          ['2011',157.62,  316.77],
          ['2012',  163.03,      318.15],
          ['2014',  167.46,      318.26],
          ['2014',  174.44,       321.54],
          ['2015',  181.42,      328.1]
        ]);

        var options = {
          title: 'MaryLand nad Baltimore GDP(billion dollars) ',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 1}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('p3'));
        chart.draw(data, options);
      }



