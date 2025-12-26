function toggleFAQ(button) {
      const answer = button.nextElementSibling;
      const icon = button.querySelector('span:last-child');

      if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        icon.textContent = '-';
      } else {
        answer.classList.add('hidden');
        icon.textContent = '+';
      }
    }


    //Check Pin//

    function checkPin() {
      const pin = document.getElementById('pinInput').value;
      const error = document.getElementById('error');
      const content = document.getElementById('protectedContent');
      const form = document.getElementById('loginForm');

      if (pin === '1234') {
        content.classList.remove('hidden');
        form.classList.add('hidden');
        error.classList.add('hidden');
      } else {
        error.classList.remove('hidden');
      }
    }
    //  function checkPin() {
    //   const pin = document.getElementById('pinInput').value;
    //   const content = document.getElementById('protectedContent');
    //   const error = document.getElementById('error');

    //   if (pin === '1234') {
    //     content.classList.remove('hidden');
    //     document.getElementById('loginForm').classList.add('hidden');
    //   } else {
    //     error.classList.remove('hidden');
    //   }
    // }

//     function checkPin() {
//   const pin = document.getElementById('pinInput').value;
//   const error = document.getElementById('error');

//   if (pin === '1234') {
//     // Login form hide
//     document.getElementById('loginForm').classList.add('hidden');

//     // Show main content wrapper
//     const content = document.getElementById('protectedContent');
//     content.classList.remove('hidden');

//     // Also show all sections inside (just in case)
//     document.getElementById('faq')?.classList.remove('hidden');
//     document.getElementById('learn')?.classList.remove('hidden');

//   } else {
//     error.classList.remove('hidden');
//   }
// }

async function loadLessons() {
  try {
    const response = await fetch('https://openapi.programming-hero.com/api/levels/all');
    const data = await response.json();
    const lessons = data.data.slice(0, 7); // প্রথম ৭টি লেসন
    const container = document.getElementById('lessonContainer');

    lessons.forEach((lesson, index) => {
      const card = document.createElement('div');
      card.className =
        'bg-white p-6 rounded-lg shadow transition transform hover:scale-105 hover:shadow-xl';

      card.innerHTML = `
        <h3 class="text-xl font-bold mb-2">Lesson ${index + 1}</h3>
        <p class="text-gray-700 text-sm">${lesson.level_name}</p>
        <p class="text-gray-500 text-xs mt-1">ID: ${lesson.id}</p>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching lessons:', error);
  }
}

loadLessons();
