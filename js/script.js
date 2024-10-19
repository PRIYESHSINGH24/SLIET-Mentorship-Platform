document.addEventListener("DOMContentLoaded", function () {
    // This is where booking logic will go
});
const mentors = [
    {
        name: "Dr. John Doe",
        expertise: "Data Science, Machine Learning",
        slots: [
            { time: "10:00 AM - 11:00 AM", booked: false },
            { time: "02:00 PM - 03:00 PM", booked: false }
        ]
    },
    {
        name: "Dr. Jane Smith",
        expertise: "Web Development, AI",
        slots: [
            { time: "11:00 AM - 12:00 PM", booked: false },
            { time: "03:00 PM - 04:00 PM", booked: false }
        ]
    },
    {
        name: "Dr. John Doe",
        expertise: "Data Science, Machine Learning",
        image: "images/john.jpg",
        slots: [ /* same as before */
            { time: "11:00 AM - 12:00 PM", booked: false },
            { time: "03:00 PM - 04:00 PM", booked: false }
         ]
    },
    // Other mentors
];

document.addEventListener("DOMContentLoaded", function () {
    const mentorContainer = document.querySelector('.mentor-container');

    // Render each mentor profile dynamically
    mentors.forEach((mentor, index) => {
        const profile = document.createElement('div');
        profile.classList.add('mentor-profile');

        let slotsHTML = '';
        mentor.slots.forEach((slot, slotIndex) => {
            slotsHTML += `
                <li>
                    ${slot.time} - 
                    <button class="book-btn" data-mentor="${index}" data-slot="${slotIndex}">
                        ${slot.booked ? 'Booked' : 'Book'}
                    </button>
                </li>
            `;
        });

        profile.innerHTML = `
            <h3>${mentor.name}</h3>
            <p>Expertise: ${mentor.expertise}</p>
            <p>Available Slots:</p>
            <ul>${slotsHTML}</ul>
        `;

        mentorContainer.appendChild(profile);
    });

    // Add event listeners for booking buttons
    const bookButtons = document.querySelectorAll('.book-btn');
    bookButtons.forEach(button => {
        button.addEventListener('click', handleBooking);
    });
});

function handleBooking(event) {
    const mentorIndex = event.target.getAttribute('data-mentor');
    const slotIndex = event.target.getAttribute('data-slot');

    // Check if already booked
    if (mentors[mentorIndex].slots[slotIndex].booked) {
        alert('This slot is already booked!');
        return;
    }

    // Mark the slot as booked
    mentors[mentorIndex].slots[slotIndex].booked = true;
    
    // Update the button text
    event.target.textContent = 'Booked';
    event.target.disabled = true;

    alert('Your session has been booked successfully!');
}

document.getElementById('searchInput').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const mentorProfiles = document.querySelectorAll('.mentor-profile');

    mentorProfiles.forEach(profile => {
        const name = profile.querySelector('h3').textContent.toLowerCase();
        const expertise = profile.querySelector('p').textContent.toLowerCase();

        if (name.includes(searchValue) || expertise.includes(searchValue)) {
            profile.style.display = 'block';
        } else {
            profile.style.display = 'none';
        }
    });
});


function setReminder(time) {
    const sessionTime = new Date(time);  // Mentorship session time
    const now = new Date();

    const timeDiff = sessionTime - now;

    if (timeDiff > 0) {
        setTimeout(() => {
            alert('Reminder: Your mentorship session is about to start!');
        }, timeDiff);
    }
}


const stars = document.querySelectorAll('.rating span');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach((s, i) => {
            if (i <= index) {
                s.classList.add('selected');
            } else {
                s.classList.remove('selected');
            }
        });
    });
});



document.getElementById('expertiseFilter').addEventListener('change', function () {
    const selectedExpertise = this.value.toLowerCase();
    const mentorProfiles = document.querySelectorAll('.mentor-profile');

    mentorProfiles.forEach(profile => {
        const expertise = profile.querySelector('p').textContent.toLowerCase();

        if (selectedExpertise === 'all' || expertise.includes(selectedExpertise)) {
            profile.style.display = 'block';
        } else {
            profile.style.display = 'none';
        }
    });
});



const nav = document.querySelector('nav ul');
document.querySelector('.menu-toggle').addEventListener('click', () => {
    nav.classList.toggle('active');
});


document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});


document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});
