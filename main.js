// Bootcamp12_BaiTap_JS_Buoi_4_NguyenMinhHoang
// Bài 1: Nhập 3 số nguyên

var displayInfoBai1 = document.getElementById('displayInfoBai1');
displayInfoBai1.style.display = 'none';
var dpSoMin = document.getElementById('dpsoMin');
var dpSo2nd = document.getElementById('dpso2nd');
var dpSoMax = document.getElementById('dpsoMax');

var btnMax = document.getElementById('btnMax');
btnMax.onclick = function(){
    // Input 3 so nguyen
    var soNguyen1 = document.getElementById('soNguyen1').value;
    var soNguyen2 = document.getElementById('soNguyen2').value;
    var soNguyen3 = document.getElementById('soNguyen3').value;
    var soMax;
    var so2nd;
    var soMin;
    // Operation: so sanh so1 voi so2 va so3, roi so sanh so2 voi so3
    if(soNguyen1 > soNguyen2){
        if(soNguyen1 > soNguyen3){
            soMax = soNguyen1;
            if(soNguyen2 > soNguyen3){
                so2nd = soNguyen2;
                soMin = soNguyen3;
            }else{
                so2nd = soNguyen3;
                soMin = soNguyen2;
            }
        } else{
            soMax = soNguyen3;
            so2nd = soNguyen1;
            soMin = soNguyen2;
        }
    }else{
        if(soNguyen1 > soNguyen3){
            soMax = soNguyen2;
            so2nd = soNguyen1;
            soMin = soNguyen3;
        }else{
            soMin = soNguyen1;
            if(soNguyen2 > soNguyen3){
                soMax = soNguyen2;
                so2nd = soNguyen3;
            }else{
                soMax = soNguyen3;
                so2nd = soNguyen2;
            }
        }
    }

    // output thuNhap
    dpSoMin.innerHTML = soMin;
    dpSo2nd.innerHTML = so2nd;
    dpSoMax.innerHTML = soMax;
    displayInfoBai1.style.display = 'inline';
}



// Bài 2: Chào hỏi

var btnGreet = document.getElementById('btnGreet');
var dpGreet = document.getElementById('dpGreet');
var txtGreet = document.getElementById('txtGreet');

btnGreet.onclick = function(){
    // Input nguoi dung
    var famMem = document.getElementById('famMem').value;
    switch(famMem){
        case 'B':
            txtGreet.innerHTML = "Con hết tiền rồi!";
        break;
        case 'M':
            txtGreet.innerHTML = "Cho con xin tiền!";
        break;
        case 'A':
            txtGreet.innerHTML = "Cho em xin tiền!";
        break;
        case 'E':
            txtGreet.innerHTML = "Cho anh xin tiền!";
        break;
        default:
            txtGreet.innerHTML = "Ai đây? Có tiền không?";
    }

    // Output lời chào
    dpGreet.style.display = 'inline';

}



// Bài 3: Số chẵn, lẻ

var dpEvenOdd = document.getElementById('dpEvenOdd');
var btnEvenOdd = document.getElementById('btnEvenOdd');
var txtEven = document.getElementById('txtEven');
var txtOdd = document.getElementById('txtOdd');

btnEvenOdd.onclick = function(){
    // input so nguyen
    var intNum1 = document.getElementById('intNum1').value;
    var intNum2 = document.getElementById('intNum2').value;
    var intNum3 = document.getElementById('intNum3').value;

    var countEven = 0;
    var countOdd = 0;

    if(intNum1 % 2 == 0){
        countEven += 1;
    }
    if(intNum2 % 2 == 0){
        countEven += 1;
    }
    if(intNum3 % 2 == 0){
        countEven += 1;
    }

    countOdd = 3 - countEven;
    txtEven.innerHTML = countEven;
    txtOdd.innerHTML = countOdd;
    dpEvenOdd.style.display = 'block';
}



// Bài 4: Tam giác

// Input button
var dpTamGiac = document.getElementById('dpTamGiac');
var txtTamGiac = document.getElementById('txtTamGiac');
var btnTamGiac = document.getElementById('btnTamGiac');

// Loại tam giác
btnTamGiac.onclick = function() {
    var canhA = document.getElementById('canhA').value;
    var canhB = document.getElementById('canhB').value;
    var canhC = document.getElementById('canhC').value;

    if(canhA == canhB && canhA == canhC) {
        txtTamGiac.innerHTML = 'Tam Giác Đều';
    }
    else if(canhA == canhB || canhA == canhC || canhB == canhC){
        txtTamGiac.innerHTML = 'Tam Giác Cân';
    }
    else if(canhA == Math.sqrt(canhB*canhB + canhC*canhC) || canhB == Math.sqrt(canhA*canhA + canhC*canhC) || canhC == Math.sqrt(canhB*canhB + canhA*canhA) ){
        txtTamGiac.innerHTML = 'Tam Giác Vuông';
    }
    else{
        txtTamGiac.innerHTML = 'Tam Giác Không Có Gì Đặc Biệt';
    }
    dpTamGiac.style.display = 'block';
}
