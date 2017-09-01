import { IChart, Constants } from '../chart-resources/chart-factory';
import $ from 'jquery';

export class Charts {

    title: IChart.Title;
    legend: IChart.Legend;
    commonSeriesOptions: IChart.CommonSeriesOptions;
    size: IChart.Size;

    titleText: string = 'Expenditures';
    isShowLegend = false;
    width = '900px';
    height = '550px';
    fontsize: '14px';
    ExpendituresList;

    constructor() {

        this.updateChartData();
        // data
        this.ExpendituresList = [{
            xName: 'Other Personnal',
            yName: 94658,
            text: 'Other Personal,  88.47%'
        }, {
            xName: 'Medical care',
            yName: 9090,
            text: 'Medical care,  8.49%'
        }, {
            xName: 'Housing',
            yName: 2577,
            text: 'Housing,  2.40%'
        }, {
            xName: 'Transportation',
            yName: 473,
            text: 'Transportation,  0.44%'
        }, {
            xName: 'Education',
            yName: 120,
            text: 'Education,  0.11%'
        }, {
            xName: 'Electronics',
            yName: 70,
            text: 'Electronics,  0.06%'
        }];
    }

    onchartload(sender) {

    }

    contanierWidth;
    contanierHeight;

    onContentResize(x) {
        this.contanierWidth = x.width;
        this.contanierHeight = x.height;
    }

    // update chart with some predefined values
    updateChartData() {
        // set data
        this.title = { text: this.titleText };
        this.legend = { visible: this.isShowLegend };
        this.size = { width: this.width, height: this.height };
        this.commonSeriesOptions = <IChart.CommonSeriesOptions>{ marker: { dataLabel: { visible: true, shape: 'none', textMappingName: 'text', connectorLine: { type: 'bezier', color: 'black' }, font: { size: '14px' } } }, border: { width: 2, color: 'white' }, name: 'Expenses', type: 'pie', enableAnimation: true, labelPosition: 'outsideExtended', enableSmartLabels: true, startAngle: 145 };

    }

    updateChart() {
        this.titleText = "New Expenditiure";
        this.legend.visible = true;
        this.updateChartData();
        this.commonSeriesOptions.labelPosition = 'outside';

        // update chart command
        var chartObj = $("#container").data("ejChart");
        chartObj.redraw();
    }
}
