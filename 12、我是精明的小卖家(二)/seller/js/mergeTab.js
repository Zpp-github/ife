// 合并单元格(如果结束行传0代表合并所有行)
// @param table    表格的ID
// @param startRow  起始行
// @param endRow    结束行
// @param col   合并的列号，对第几列进行合并(从0开始)。第一行从0开始
function mergeCell(table, startRow, endRow, col) {
    var tb = document.getElementById(table);
    if (!tb || !tb.rows || tb.rows.length <= 0) {
        return;
    }
    if (col >= tb.rows[0].cells.length || (startRow >= endRow && endRow != 0)) {
        return;
    }
    if (endRow == 0) {
        endRow = tb.rows.length - 1;
    }
    for (var i = startRow; i < endRow; i++) {
        if (tb.rows[startRow].cells[col].innerHTML == tb.rows[i + 1].cells[col].innerHTML) { //如果相等就合并单元格,合并之后跳过下一行
            tb.rows[i + 1].removeChild(tb.rows[i + 1].cells[col]);
            tb.rows[startRow].cells[col].rowSpan = (tb.rows[startRow].cells[col].rowSpan) + 1;
        } else {
            mergeCell(table, i + 1, endRow, col);
            break;
        }
    }
}