let formData = {
  email: '',
  message: '',
};
// перевірки на наявність даних у сховищі
const storedData = localStorage.getItem('feedback-form-state');
if (storedData) {
  try {
    formData = JSON.parse(storedData);
    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
  } catch (error) {
    console.log(error);
  }
}

// відстеження input

const feedbackForm = document.querySelector('.feedback-form');
feedbackForm.addEventListener('input', handleFormInput);

function handleFormInput(event) {
  if (event.target.name && event.target.value !== undefined) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
}

// submit

const feedbackSubmit = document.querySelector('.feedback-form');
feedbackSubmit.addEventListener('submit', handleFormSubmit);
function handleFormSubmit(event) {
  event.preventDefault();
  if (formData.email && formData.message) {
    console.log('Form Data:', formData);
    localStorage.removeItem('feedback-form-state');
    formData = {
      email: '',
      message: '',
    };
    document.querySelector('input[name="email"]').value = '';
    document.querySelector('textarea[name="message"]').value = '';
  } else {
    alert('Fill please all fields');
  }
}
