
export class PieChart {

    commonSeriesOptions: {
        marker: {
            dataLabel: {
                visible: boolean;
                shape: string;
                textMappingName: string;
                connectorLine: {
                    type: string;
                    color: string;
                };
                font: {
                    size: string;
                };
            };
        };
        border: {
            width: number;
            color: string;
        };
        name: string;
        type: string;
        enableAnimation: boolean;
        labelPosition: string;
        enableSmartLabels: boolean;
        startAngle: number;
    };
    size: {
        width: string;
        height: string;
    };
    legend: {
        visible: boolean;
    };
    title: {
        text: string;
    };
    
    fontsize: '14px';

    ExpendituresList;

    constructor() {
        this.commonSeriesOptions = { marker: { dataLabel: { visible: true, shape: 'none', textMappingName: 'text', connectorLine: { type: 'bezier', color: 'black' }, font: { size: '14px' } } }, border: { width: 2, color: 'white' }, name: 'Expenses', type: 'pie', enableAnimation: true, labelPosition: 'outsideExtended', enableSmartLabels: true, startAngle: 145 };

        this.size = { width: '900px', height: '550px' };
        this.title = { text: 'Expenditures' };
        this.legend = { visible: false };
        this.ExpendituresList = [{ xName: 'Other Personnal', yName: 94658, text: 'Other Personal,  88.47%' }, { xName: 'Medical care', yName: 9090, text: 'Medical care,  8.49%' }, { xName: 'Housing', yName: 2577, text: 'Housing,  2.40%' }, { xName: 'Transportation', yName: 473, text: 'Transportation,  0.44%' }, { xName: 'Education', yName: 120, text: 'Education,  0.11%' }, { xName: 'Electronics', yName: 70, text: 'Electronics,  0.06%' }];
    }

    onchartload(sender) { }
}
