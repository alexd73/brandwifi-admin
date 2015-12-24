nv.addGraph(function () {
    var chart = nv.models.discreteBarChart()
      .x(function (d) { return d.label; })
      .y(function (d) { return d.value; })
      .staggerLabels(true)
      .tooltips(false)
      .showValues(true);
    var data = [
  {
      key: 'Пол',
      values: [
      {
          label: 'Мужчины',
          value: 49
      },
      {
          label: 'Женщины',
          value: 51
      }
    ]
  }
];

    d3.select('#nv-gender-bar-chart svg')
      .datum(data)
      .transition().duration(500)
      .call(chart)
      ;

    nv.utils.windowResize(chart.update);

    return chart;
});