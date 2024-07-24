// Mock data (should be replaced with actual data from server)
const cards = [
    { id: 1, accountNumber: '1234567890', owner: 'Nguyễn Văn A', openDate: '01/01/2023', availableBalance: 1000.00 },
    { id: 2, accountNumber: '0987654321', owner: 'Trần Thị B', openDate: '02/02/2023', availableBalance: 500.00 }
];

document.addEventListener('DOMContentLoaded', function() {
    const cardInfo = document.getElementById('card-info');
    const cardList = document.getElementById('card-list');
    const cardTransmissionForm = document.getElementById('card-transmission-form');
    const selectedCardDropdown = document.getElementById('selected-card');

    // Function to display account info
    function displayAccountInfo(card) {
        document.getElementById('account-number').textContent = card.accountNumber;
        document.getElementById('account-owner').textContent = card.owner;
        document.getElementById('account-open-date').textContent = card.openDate;
        document.getElementById('available-balance').textContent = `$${card.availableBalance.toFixed(2)}`;
    }

    // Function to display card list
    function displayCardList() {
        cardList.innerHTML = ''; // Clear previous content

        if (cards.length === 0) {
            cardList.innerHTML = '<p>Chưa có thẻ nào được thêm vào.</p>';
        } else {
            cards.forEach(card => {
                const cardItem = document.createElement('div');
                cardItem.classList.add('card-item');
                cardItem.innerHTML = `
                    <p><strong>Số thẻ:</strong> ${card.accountNumber}</p>
                    <p><strong>Chủ thẻ:</strong> ${card.owner}</p>
                    <button class="delete-btn" data-id="${card.id}">Xoá thẻ</button>
                `;
                cardList.appendChild(cardItem);
            });

            // Add event listener for delete buttons
            const deleteButtons = document.querySelectorAll('.delete-btn');
            deleteButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const cardId = parseInt(button.getAttribute('data-id'));
                    deleteCard(cardId);
                });
            });
        }
    }

    // Function to delete card
    function deleteCard(cardId) {
        const index = cards.findIndex(card => card.id === cardId);
        if (index !== -1) {
            cards.splice(index, 1);
            displayCardList();
        }
    }

    // Function to populate select dropdown with cards
    function populateCardDropdown() {
        selectedCardDropdown.innerHTML = ''; // Clear previous content

        if (cards.length === 0) {
            const defaultOption = document.createElement('option');
            defaultOption.textContent = 'Không có thẻ nào';
            selectedCardDropdown.appendChild(defaultOption);
        } else {
            cards.forEach(card => {
                const option = document.createElement('option');
                option.value = card.id;
                option.textContent = `${card.accountNumber} - ${card.owner}`;
                selectedCardDropdown.appendChild(option);
            });
        }
    }

    // Event listener for card transmission form submission
    cardTransmissionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedCardId = parseInt(selectedCardDropdown.value);
        const selectedCard = cards.find(card => card.id === selectedCardId);
        if (selectedCard) {
            // Simulate card transmission process
            alert(`Đang gửi thông tin thẻ ${selectedCard.accountNumber}...`);
        } else {
            alert('Vui lòng chọn thẻ để truyền thông tin.');
        }
    });

    // Display initial account info and card list
    if (cards.length > 0) {
        displayAccountInfo(cards[0]); // Display the first card's info by default
    }
    displayCardList();
    populateCardDropdown();
});
