// read a CSV file
var csvParser = new SimpleExcel.Parser.CSV();
var fileInput = document.getElementById('fileInput');

// parse when file loaded, then print the result to console
fileInput.addEventListener('change', function (e) {
    var file = e.target.files[0];
    csvParser.loadFile(file, function () {
        console.log(csvParser.getSheet()); // print!
    });
});

// write an XLSX file            
var xlsxWriter = new SimpleExcel.Writer.XLSX();
var xlsxSheet = new SimpleExcel.Sheet();
var Cell = SimpleExcel.Cell;
xlsxSheet.setRecord([
    [new Cell('ID', 'TEXT'), new Cell('Nama', 'TEXT'), new Cell('Kode Wilayah', 'TEXT')],
    [new Cell(1, 'NUMBER'), new Cell('Kab. Bogor', 'TEXT'), new Cell(1, 'NUMBER')],
    [new Cell(2, 'NUMBER'), new Cell('Kab. Cianjur', 'TEXT'), new Cell(1, 'NUMBER')],
    [new Cell(3, 'NUMBER'), new Cell('Kab. Sukabumi', 'TEXT'), new Cell(1, 'NUMBER')],
    [new Cell(4, 'NUMBER'), new Cell('Kab. Tasikmalaya', 'TEXT'), new Cell(2, 'NUMBER')]
]);
xlsxWriter.insertSheet(xlsxSheet);

// export when button clicked
document.getElementById('fileExport').addEventListener('click', function () {
    xlsxWriter.saveFile(); // pop! ("Save As" dialog appears)
});