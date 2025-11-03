// Avoid touching `window` during SSR. Access Chartist lazily on the client.
function withChartist(run, retries = 15) {
  if (typeof window !== 'undefined' && window.Chartist) {
    return run(window.Chartist);
  }
  if (retries <= 0) return;
  setTimeout(() => withChartist(run, retries - 1), 150);
}

export function initProductSalesChart() {
  withChartist((Chartist) => {
    Chartist.Bar('.ct-chart-product', {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    series: [
      [800000, 1200000, 1400000, 1300000],
      [200000, 400000, 500000, 300000],
      [100000, 200000, 400000, 600000]
    ]
    }, {
    stackBars: true,
    axisY: {
      labelInterpolationFnc: function(value) {
        return (value / 1000) + 'k';
      }
    }
  }).on('draw', function(data) {
    if (data.type === 'bar') {
      data.element.attr({
        style: 'stroke-width: 40px'
      });
    }
  });
  });
}

export function initProductCategoryChart() {
  withChartist((Chartist) => {
    var pieChart = Chartist.Pie('.ct-chart-category', {
    series: [60, 30, 30],
    labels: ['Bananas', 'Apples', 'Grapes']
  }, {
    donut: true,
    showLabel: false,
    donutWidth: 40
  });

  pieChart.on('draw', function(data) {
    if (data.type === 'slice') {
      var pathLength = data.element._node.getTotalLength();
      data.element.attr({
        'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
      });
      var animationDefinition = {
        'stroke-dashoffset': {
          id: 'anim' + data.index,
          dur: 1000,
          from: -pathLength + 'px',
          to: '0px',
          easing: Chartist.Svg.Easing.easeOutQuint,
          fill: 'freeze'
        }
      };
      if (data.index !== 0) {
        animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
      }
      data.element.attr({
        'stroke-dashoffset': -pathLength + 'px'
      });
      data.element.animate(animationDefinition, false);
    }
  });
  });
}

export function initCustomerAcquisitionChart() {
  withChartist((Chartist) => {
    var lineChart = Chartist.Line('.ct-chart', {
    labels: ['Mon', 'Tue', 'Wed'],
    series: [
      [1, 5, 2, 5],
      [2, 3, 4, 8]
    ]
  }, {
    low: 0,
    showArea: true,
    showPoint: false,
    fullWidth: true
  });

  lineChart.on('draw', function(data) {
    if (data.type === 'line' || data.type === 'area') {
      data.element.animate({
        d: {
          begin: 2000 * data.index,
          dur: 2000,
          from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
          to: data.path.clone().stringify(),
          easing: Chartist.Svg.Easing.easeOutQuint
        }
      });
    }
  });
  });
}

export function initGoodServiceChart() {
  withChartist((Chartist) => {
    var lineChart = Chartist.Line('#goodservice', {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    series: [
      [5, 9, 7, 8, ],
      [3, 5, 4, 6, ]
    ]
  }, {
    low: 0,
    showArea: true,
    showPoint: false,
    fullWidth: true
  });

  lineChart.on('draw', function(data) {
    if (data.type === 'line' || data.type === 'area') {
      data.element.animate({
        d: {
          begin: 1500 * data.index,
          dur: 1500,
          from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
          to: data.path.clone().stringify(),
          easing: Chartist.Svg.Easing.easeOutQuint
        }
      });
    }
  });
  });
}

export function initTotalRevenueChart() {
  withChartist((Chartist) => {
    var barChart = Chartist.Bar('#morris_totalrevenue', {
    labels: ['Jan', 'Feb', 'Mar', 'Apr',],
    series: [
      [5000, 7000, 6000, 8000,]
    ]
  }, {
    stackBars: true,
    axisY: {
      labelInterpolationFnc: function(value) {
        return   value / 1000 + 'k';
      }
    }
  });

  barChart.on('draw', function(data) {
    if (data.type === 'bar') {
      data.element.attr({
        style: 'stroke-width: 30px'
      });
    }
  });
  });
}
