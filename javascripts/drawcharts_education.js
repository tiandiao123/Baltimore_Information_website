  var time=[2013,2014];


  var chart = c3.generate({
    bindto:'#chart_education',
    data: {
        columns: [
            ['white people who received degrees', 8552, 8661],
            ['black people who received degrees', 4899, 4984],
            ['asian who received degrees',1527,1531],
            ['Hispanic who received degrees',755,797],
            ['multi who received degrees',367,445],
            ['unknown',673,569]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        },
      },

     axis: {
          x: {
              type: 'category',
              categories: time,
              tick: {
                multiline: false
              }
          }
      },
      zoom: {
          enabled: true
      },
      legend: {
          position: 'right'
      } 

});



schools=['johns hopkins','university of Maryland-Baltimore','Loyola University Maryland','All state Career Baltimore','University of Baltmore'];

  var chart2 = c3.generate({
    bindto:'#chart_education2',
    data: {
        columns: [
            ['the number of male students', 3701, 534,600,892,654],
            ['the number of female students', 4057, 1517,1028,463,838]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        },
      },

     axis: {
          x: {
              type: 'category',
              categories: schools,
              tick: {
                multiline: false
              }
          }
      },
      zoom: {
          enabled: true
      },
      legend: {
          position: 'right'
      } 

});