document.addEventListener('DOMContentLoaded', function() {
    const addCardBtn = document.getElementById('addCardBtn');
    const cancelAddCardBtn = document.getElementById('cancelAddCard');
    const addCardForm = document.getElementById('addCardForm');
    const newCardForm = document.getElementById('newCardForm');
    const cardList = document.getElementById('cardList');

    let cards = []; // Mảng lưu trữ các thẻ

    // Hiển thị form thêm thẻ mới khi nhấn nút Thêm thẻ mới
    addCardBtn.addEventListener('click', function() {
        addCardForm.classList.remove('hidden');
    });

    // Hủy bỏ thêm thẻ mới khi nhấn nút Hủy bỏ
    cancelAddCardBtn.addEventListener('click', function() {
        addCardForm.classList.add('hidden');
        newCardForm.reset();
    });

    // Xử lý khi người dùng thêm thẻ mới
    newCardForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const cardNumber = document.getElementById('cardNumber').value;
        const cardHolder = document.getElementById('cardHolder').value;
        const expiryDate = document.getElementById('expiryDate').value;

        // Thêm thẻ vào mảng cards
        cards.push({
            cardNumber: cardNumber,
            cardHolder: cardHolder,
            expiryDate: expiryDate
        });

        // Hiển thị danh sách thẻ
        renderCardList();

        // Đặt lại form và ẩn form thêm thẻ mới
        newCardForm.reset();
        addCardForm.classList.add('hidden');
    });

    // Hàm hiển thị danh sách thẻ
    function renderCardList() {
        cardList.innerHTML = '';

        cards.forEach(function(card, index) {
            const cardItem = document.createElement('div');
            cardItem.classList.add('card-item');
            cardItem.innerHTML = `
                <div><strong>Số thẻ:</strong> ${card.cardNumber}</div>
                <div><strong>Tên chủ thẻ:</strong> ${card.cardHolder}</div>
                <div><strong>Ngày hết hạn:</strong> ${card.expiryDate}</div>
                <button class="delete-card" data-index="${index}">Xóa thẻ</button>
            `;
            cardList.appendChild(cardItem);
        });

        // Thêm sự kiện xóa thẻ khi nhấn nút Xóa thẻ
        const deleteButtons = document.querySelectorAll('.delete-card');
        deleteButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const index = button.getAttribute('data-index');
                cards.splice(index, 1); // Xóa thẻ khỏi mảng cards
                renderCardList(); // Cập nhật lại danh sách thẻ
            });
        });
    }
});
