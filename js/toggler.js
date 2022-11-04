const openModalBtn = document.querySelectorAll('[data-modal-open]');
const closeModalBtn = document.querySelectorAll('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

const bookingTypes = document.querySelectorAll('.booking__types [data-type]');
const bookingFormTypes = document.querySelectorAll('.booking__form [data-type]');

const filterTypes = document.querySelectorAll('.products__buttons [data-type]');
const productsTypes = document.querySelectorAll('.products__types [data-type]');

const faq = document.querySelectorAll('.faq__item');
const answer = document.querySelectorAll('.faq__answer');

console.log(answer);
function toggleActiveType() {
  bookingTypes.forEach((type) => {
    type.addEventListener('click', (e) => {
      document.querySelector('.booking__types [data-type].active').classList.remove('active');
      type.classList.add('active');

      bookingFormTypes.forEach((item) => {
        if (e.currentTarget.dataset.type === item.dataset.type) {
          item.classList.remove('hidden');
        }
        if (e.currentTarget.dataset.type !== item.dataset.type) {
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

function filters() {
  filterTypes.forEach((type) => {
    type.addEventListener('click', (e) => {
      document.querySelector('.products__buttons [data-type].active').classList.remove('active');
      type.classList.add('active');

      productsTypes.forEach((item) => {
        if (item.dataset.type === type.dataset.type) {
          item.classList.remove('hidden');
        }
        if (item.dataset.type !== type.dataset.type) {
          item.classList.add('hidden');
        }
      });
    });
  });
}

filters();

// function toggleAnswers() {
//   faq.forEach((item) => {
//     item.addEventListener('click', (e) => {
//       e.currentTarget.classList.toggle('active');
//       answer.forEach((item) => {
//         if (item.closest('.active') !== null) {
//           item.classList.remove('hidden');
//         } else {
//           item.classList.add('hidden');
//         }
//       });
//     });
//   });
// }

function toggleAnswers() {
  document.querySelectorAll('.faq__item').forEach((item) => {
    item.addEventListener('click', (e) => {
      item.classList.toggle('active');
    });
  });
}

toggleAnswers();
