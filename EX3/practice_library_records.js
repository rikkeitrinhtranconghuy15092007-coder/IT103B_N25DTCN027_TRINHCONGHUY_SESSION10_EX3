const borrowRecords = [
    { recordId: 'PM01', studentId: 'SV101', bookTitle: 'Cấu trúc dữ liệu', borrowDays: 10, isReturned: false },
    { recordId: 'PM02', studentId: 'SV102', bookTitle: 'Mạng máy tính', borrowDays: 16, isReturned: false },
    { recordId: 'PM03', studentId: 'SV103', bookTitle: 'Hệ điều hành', borrowDays: 14, isReturned: false }
];

console.log("--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN ---");

borrowRecords.push({
    recordId: 'PM04', 
    studentId: 'SV104', 
    bookTitle: 'Clean Code', 
    borrowDays: 18, 
    isReturned: false
});
console.log("[CREATE] Đã thêm thành công phiếu mượn PM04 cho sinh viên SV104.");

console.log("\n[READ] Kiểm tra các phiếu mượn quá hạn:");
for (let i = 0; i < borrowRecords.length; i++) {
    if (borrowRecords[i].borrowDays > 14) {
        const lateDays = borrowRecords[i].borrowDays - 14;
        borrowRecords[i].fineAmount = lateDays * 5000;
        console.log(`- Phiếu ${borrowRecords[i].recordId} (${borrowRecords[i].bookTitle}) trễ ${lateDays} ngày. Phạt: ${borrowRecords[i].fineAmount} VNĐ`);
    } else {
        borrowRecords[i].fineAmount = 0;
    }
}

for (let i = 0; i < borrowRecords.length; i++) {
    if (borrowRecords[i].recordId === 'PM01') {
        borrowRecords[i].isReturned = true;
        console.log(`\n[UPDATE] Sinh viên giữ phiếu ${borrowRecords[i].recordId} đã trả sách thành công.`);
        break; 
    }
}

for (let i = 0; i < borrowRecords.length; i++) {
    if (borrowRecords[i].recordId === 'PM03') {
        const removedRecord = borrowRecords.splice(i, 1);
        console.log(`[DELETE] Đã tất toán và xóa phiếu mượn ${removedRecord[0].recordId} khỏi hệ thống.`);
        break; 
    }
}

console.log("\n===================================================================");
console.log("             BẢNG THEO DÕI PHIẾU MƯỢN SÁCH HIỆN TẠI              ");
console.log("===================================================================");
console.table(borrowRecords);
console.log("===================================================================\n");
