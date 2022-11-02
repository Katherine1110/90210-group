const openModalBtn = document.querySelectorAll('[data-modal-open]');
const closeModalBtn = document.querySelectorAll('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

const bookingTypes = document.querySelectorAll('.booking__types [data-type]');
const bookingFormTypes = document.querySelectorAll('.booking__form [data-type]');

function toggleActiveType() {
  bookingTypes.forEach((type) => {
    type.addEventListener('click', (e) => {
      document.querySelector('.booking__types [data-type].active').classList.remove('active');
      e.currentTarget.classList.add('active');

      bookingFormTypes.forEach((item) => {
        if (e.currentTarget.dataset.type === item.dataset.type) {
          item.classList.remove('hidden');
        } else if (e.currentTarget.dataset.type !== item.dataset.type) {
          item.classList.add('hidden');
        }
      });
    });
  });
}

toggleActiveType();

function toggleModal() {
  // modal.classList.toggle('active');
  openModalBtn.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.currentTarget === item) {
        modal.classList.add('active');
      }
    });
  });

  closeModalBtn.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.currentTarget === item) {
        modal.classList.toggle('active');
      }
    });
  });
}

toggleModal();
