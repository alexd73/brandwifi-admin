nv.addGraph(function () {
    var chart = nv.models.pieChart()
        .x(function (d) { return d.label; })
        .y(function (d) { return d.value; })
        .showLabels(true);
    var data =  [
      {
          label: '15-25',
          value: 29.765957771107
      },
      {
          label: '26-31',
          value: 0
      },
      {
          label: '32-37',
          value: 32.807804682612
      },
      {
          label: '38-43',
          value: 196.45946739256
      },
      {
          label: '44-49',
          value: 0.19434030906893
      },
      {
          label: '50-55',
          value: 98.079782601442
      }
];

    d3.select('#nv-age-chart svg')
        .datum(data)
      .transition().duration(1200)
        .call(chart);

    return chart;
});