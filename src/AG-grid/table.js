var appPageData;
var gridOptions;

$(document).ready(function () {

    gridOptions = {
        columnDefs: [
            { field: 'athlete' },
    { field: 'age' },
    { field: 'country' },
    { field: 'year' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
    { field: 'gold', minWidth: 550 },
            {
                headerName: "Edit",
                maxWidth: 130,
                cellRenderer: editCellRendererFunc,
            },
            
        ],
        // rowData: data,
        defaultColDef: {
            flex: 1,
            minWidth: 130,
            filter: true,
            sortable: true,
            resizable: true,
            // lockPosition: true,
        },
        pagination: true,
        paginationPageSize: 20,
        rowSelection: 'single',
        suppressDragLeaveHidesColumns: true
    };

    showTable();

});

function showTable() {
    // lookup the container we want the Grid to use
    $("#myGrid").empty();
    var eGridDiv = document.querySelector('#myGrid');

    // create the grid passing in the div to use together with the columns & data we want to use
    new agGrid.Grid(eGridDiv, gridOptions);
    // create the grid passing in the div to use together with the columns & data we want to use
    // new agGrid.Grid(eGridDiv, gridOptions);
    agGrid.simpleHttpRequest({
        url: 'https://www.ag-grid.com/example-assets/olympic-winners.json'
    }).then(function (data) {
        gridOptions.api.setRowData(data);
       
    });
}

function editCellRendererFunc() {
    // //return '<button ng-click="ageClicked(data.age)" ng-bind="data.age"><\/button>';
    return '<button class="btn btnsm  btn-primary" style="min-width: 100%; " onclick="editCellRenderer()"><i class="fas fa-edit" ></i><\/button>'
};



function editCellRenderer() {
    setTimeout(function (datax) {
        var selectedNodes = gridOptions.api.getSelectedNodes()
        var selectedData = selectedNodes.map(function (node) {
	         
			alert(node.data)
			
			return node.data;
        });
    }, 3);
}

function nodeToString(rowNode) {
    return rowNode.data.bankIssuerName + ' ' + rowNode.data.productType + ' ' + rowNode.data.currentValue + ' ' +
        rowNode.data.investmentDate +
        ' ' + rowNode.data.investmentValue;
}

function onQuickFilterChanged() {
    gridOptions.api.setQuickFilter(document.getElementById('quickFilter').value);
}
