/*
Viết chương trình có một ô input, một button. Khi click vào button
thì in ra các số nguyên tố từ 1 tới giá trị của ô input
Input: N

Process: Tạo 2 function (kiểm tra số nguyên tố và in kết quả). Dùng
if else để kiểm tra trường hợp.Sau đó tạo hàm in để in ra kết quả 
ra màn hình

Output: Chuỗi số nguyên tố tới n
*/

// hàm kiểm tra số nguyên tố
function kiem_tra_snt(n)
{
    // Biến để kiểm tra
    var checked = true;

    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2) {
        checked = false;
    }
    else if (n == 2) {
        checked = true;
    }
    else if (n % 2 == 0) {
        checked = false;
    }
    else {
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i <= Math.sqrt(n); i += 2)
        {
            if (n % i == 0) {
                checked = false;
                break;
            }
        }
    }

    return checked;
}

// Hàm in ra các số nguyên tố từ 1 tới n
function printSNT()
{
    // Lấy number
    var number = document.getElementById("input").value;

    // Lặp để in kết quả
    var html = '';
    for (var i = 1; i <= number; i++) {
        if (kiem_tra_snt(i)){
            html += i + ' ';
        }
    }
    document.getElementById("result").innerHTML = html;
}
