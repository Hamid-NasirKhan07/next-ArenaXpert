// Assumes c3, d3, jQuery + sparkline are loaded via public vendor scripts in dashboard layout
// c3 is available as window.c3, jQuery as window.$ / window.jQuery

export function initializeSparklineCharts() {
    if (!(typeof window !== 'undefined' && window.$ && $.fn && $.fn.sparkline)) {
        return;
    }
    const sparklineRevenueElement = document.getElementById('sparkline-revenue');
    const sparklineRevenue2Element = document.getElementById('sparkline-revenue2');
    const sparklineRevenue3Element = document.getElementById('sparkline-revenue3');
    const sparklineRevenue4Element = document.getElementById('sparkline-revenue4');

    if (sparklineRevenueElement) {
        $(sparklineRevenueElement).sparkline([5, 5, 7, 7, 9, 5, 3, 5, 2, 4, 6, 7], {
            type: 'line',
            width: '99.5%',
            height: '100',
            lineColor: '#5969ff',
            fillColor: '#dbdeff',
            lineWidth: 2,
            resize: true,
        });
    }

    if (sparklineRevenue2Element) {
        $(sparklineRevenue2Element).sparkline([3, 7, 6, 4, 5, 4, 3, 5, 5, 2, 3, 1], {
            type: 'line',
            width: '99.5%',
            height: '100',
            lineColor: '#ff407b',
            fillColor: '#ffdbe6',
            lineWidth: 2,
            resize: true,
        });
    }

    if (sparklineRevenue3Element) {
        $(sparklineRevenue3Element).sparkline([5, 3, 4, 6, 5, 7, 9, 4, 3, 5, 6, 1], {
            type: 'line',
            width: '99.5%',
            height: '100',
            lineColor: '#25d5f2',
            fillColor: '#dffaff',
            lineWidth: 2,
            resize: true,
        });
    }

    if (sparklineRevenue4Element) {
        $(sparklineRevenue4Element).sparkline([6, 5, 3, 4, 2, 5, 3, 8, 6, 4, 5, 1], {
            type: 'line',
            width: '99.5%',
            height: '100',
            lineColor: '#fec957',
            fillColor: '#fff2d5',
            lineWidth: 2,
            resize: true,
        });
    }
}

export function initializeC3Chart() {
    const c3ChartCategoryElement = document.getElementById('c3chart_category');

    if (c3ChartCategoryElement && window.c3) {
        window.c3.generate({
            bindto: c3ChartCategoryElement,
            data: {
                columns: [
                    ['Men', 100],
                    ['Women', 80],
                    ['Accessories', 50],
                    ['Children', 40],
                    ['Apparel', 20],
                ],
                type: 'donut',
                colors: {
                    Men: '#5969ff',
                    Women: '#ff407b',
                    Accessories: '#25d5f2',
                    Children: '#ffc750',
                    Apparel: '#2ec551',
                },
            },
            donut: {
                label: {
                    show: false,
                },
            },
        });
    }
}