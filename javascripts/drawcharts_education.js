  var time=[2013,2014];


  var chart = c3.generate({
    bindto:'#chart_education',
    data: {
        columns: [
            ['white', 8552, 8661],
            ['black', 4899, 4984],
            ['asian',1527,1531],
            ['Hispanic',755,797],
            ['multi',367,445],
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