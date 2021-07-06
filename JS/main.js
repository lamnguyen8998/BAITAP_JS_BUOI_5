
 const diemChuan = 7;
 const khuVucA = 2;
 const khuVucB = 1;
 const khuVucC = 0.5;
 const khongUuTien = 0;
 const doiTuong1 = 2.5;
 const doiTuong2 = 1.5;
 const doiTuong3= 1;
 const doiTuongKhongUuTien = 0;



function kiemTraNao(){
    var diemToan1 = document.getElementById("diemToan").value;
    var diemLy1 = document.getElementById("diemLy").value;
    var diemHoa1 = document.getElementById("diemHoa").value;
    var khuVucA = document.getElementById('khuVucA');
    var khuVucB = document.getElementById('khuVucB');
    var khuVucC= document.getElementById('khuVucC');
    var doiTuong1 = document.getElementById('doiTuong1');
    var doiTuong2 = document.getElementById('doiTuong2');
    var doiTuong3 = document.getElementById('doiTuong3');

    var diemTrungBinh = Math.floor((+diemToan1 + +diemLy1 + +diemHoa1)/3);
    if (khuVucA.checked == true) {
        diemkhuVuc = 2;
    } else if (khuVucB.checked == true) {
        diemkhuVuc = 1;
    } else if (khuVucC.checked == true) {
        diemkhuVuc = 0.5;
    } else {
        diemkhuVuc = 0;
    }
    if (doiTuong1.checked == true) {
        diemDoiTuong = 2.5;
    } else if (doiTuong2.checked == true) {
        diemDoiTuong = 1.5;
    } else if (doiTuong3.checked == true) {
        diemDoiTuong = 1;
    } else {
        diemDoiTuong = 0;
    }
    var ketQUaCuoi = Math.floor(diemTrungBinh + diemkhuVuc + diemDoiTuong);
    var kiemTra = document.getElementById('kiemTra');
 kiemTra.innerHTML = ketQUaCuoi +" " + "điểm";

var elementKetQua = document.getElementById("ketQua");
var textKetQua = "";

if (ketQUaCuoi >= diemChuan ){
    textKetQua = "Kết quả đậu";
}
else {
    textKetQua = "Kết quả rớt"
}

elementKetQua.innerHTML = textKetQua;

}

const kw50Dau = 500;
const kw50Ke1 = 650;
const kw100ke2 = 850;
const kw150ke3 = 1100;
const kw350ke4 = 1300;

function tinhTienDien() {
    var dienNangTieuThu = document.getElementById("soDienDung").value;
    var nguoiDungDien = document.getElementById("tenNguoiDung").value;
    var tongSoTienDien = 0;
    var tenNguoiDung = "";


    if (dienNangTieuThu <= 50) {
        tongSoTienDien = +dienNangTieuThu * kw50Dau;
    }
    else if(dienNangTieuThu > 50 && dienNangTieuThu <= 100) {
        tongSoTienDien = (kw50Dau * 50) + ((dienNangTieuThu - 50) * kw50Ke1);
    }
    else if (dienNangTieuThu > 100 && dienNangTieuThu <= 200) {
        tongSoTienDien = (kw50Dau * 50 ) + (kw50Ke1 * 50) + ((dienNangTieuThu - 100) * kw100ke2);
    }
    else if (dienNangTieuThu > 200 && dienNangTieuThu <= 350) {
        tongSoTienDien = (kw50Dau * 50 ) + (kw50Ke1 * 50) + (kw100ke2 * 100) + ((dienNangTieuThu - 150) * kw150ke3);
    }
    else if (dienNangTieuThu > 350) {
        tongSoTienDien = (kw50Dau * 50 ) + (kw50Ke1 * 50) + (kw100ke2 * 100) +(kw150ke3 * 150 )+ ((dienNangTieuThu - 350) * kw350ke4);
    }

    hoVaTen.innerHTML = nguoiDungDien;

    var soTienDien = document.getElementById('soTienDien');
    soTienDien.innerHTML ="Tổng số tiền cần thanh toán :"  + tongSoTienDien + " " + "vnd";


}
