function createWithHtmlTable(rows, cols, highlight) {
    const output = document.getElementById('output');
    output.innerHTML = '';

    if (rows < 1 || cols < 1) {
        output.innerHTML = '<p>Please enter valid numbers greater than 0 for rows and columns.</p>';
        return;
    }

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.appendChild(document.createElement('th'));
    for (let c = 1; c <= cols; c++) {
        const th = document.createElement('th');
        th.textContent = c;
        if (highlight > 0 && c === highlight) th.style.backgroundColor = '#ffeb3b';
        headerRow.appendChild(th);
    }

    const tbody = document.createElement('tbody');
    for (let r = 1; r <= rows; r++) {
        const row = document.createElement('tr');
        const rowHeader = document.createElement('th');
        rowHeader.textContent = r;
        if (highlight > 0 && r === highlight) rowHeader.style.backgroundColor = '#ffeb3b';
        row.appendChild(rowHeader);

        for (let c = 1; c <= cols; c++) {
            const cell = document.createElement('td');
            cell.textContent = r * c;
            if (highlight > 0 && (r === highlight || c === highlight)) {
                cell.style.backgroundColor = '#ffeb3b';
            }
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);

    output.appendChild(table);
}

function getRowsDesired() {
    return parseInt(document.getElementById('rows').value, 10) || 10;
}
function getColumnsDesired() {
    return parseInt(document.getElementById('cols').value, 10) || 10;
}
function getHighlightValue() {
    const val = parseInt(document.getElementById('highlight').value, 10);
    return isNaN(val) ? 0 : val;
}

document.getElementById('generate').addEventListener('click', () => {
    createWithHtmlTable(getRowsDesired(), getColumnsDesired(), getHighlightValue());
});

window.onload = () => {
    createWithHtmlTable(getRowsDesired(), getColumnsDesired(), getHighlightValue());
};
