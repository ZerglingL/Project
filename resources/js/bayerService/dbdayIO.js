function formatDate(input) {
    let year = 'yyyy';
    let month = 'mm';
    let day = 'dd';

    if (input.length >= 4) {
        year = input.substring(0, 4);
    } else {
        year = input + year.substring(input.length);
    }

    if (input.length >= 6) {
        month = input.substring(4, 6);
    } else if (input.length > 4) {
        month = input.substring(4) + month.substring(input.length - 4);
    }

    if (input.length >= 8) {
        day = input.substring(6, 8);
    } else if (input.length > 6) {
        day = input.substring(6) + day.substring(input.length - 6);
    }

    return `${year}년 ${month}월 ${day}일`;
}

function showDate() {
    const input = document.getElementById('yyyyinput').value;
    const result = formatDate(input);
    document.getElementById('result').innerHTML = result;
}