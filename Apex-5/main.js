
document.addEventListener('DOMContentLoaded', () => {
    const experienceType = document.getElementById('experience-type');
    const destinationSelect = document.getElementById('destination');
    const numPersonsInput = document.getElementById('num-persons');
  
    // Store destination options grouped by experience type
    const destinations = {
      adventure: [
        { value: 'new_zealand', text: 'New Zealand' },
        { value: 'canada', text: 'Canada' },
        { value: 'norway', text: 'Norway' },
        { value: 'switzerland', text: 'Switzerland' }
      ],
      wellness: [
        { value: 'indonesia', text: 'Indonesia' },
        { value: 'thailand', text: 'Thailand' },
        { value: 'mexico', text: 'Mexico' },
        { value: 'spain', text: 'Spain' }
      ],
      cultural: [
        { value: 'italy', text: 'Italy' },
        { value: 'egypt', text: 'Egypt' },
        { value: 'greece', text: 'Greece' },
        { value: 'turkey', text: 'Turkey' }
      ],
      luxury: [
        { value: 'maldives', text: 'Maldives' },
        { value: 'france', text: 'France' },
        { value: 'uae', text: 'UAE' },
        { value: 'switzerland_luxury', text: 'Switzerland' }
      ],
      ecotourism: [
        { value: 'costa_rica', text: 'Costa Rica' },
        { value: 'australia', text: 'Australia' },
        { value: 'south_africa', text: 'South Africa' },
        { value: 'norway_fjord', text: 'Norway' }
      ]
    };
  
    // Update destination options based on selected experience type
    experienceType.addEventListener('change', () => {
      const selectedType = experienceType.value;
  
      // Clear existing options and set the initial prompt
      destinationSelect.innerHTML = '<option value="" disabled selected>-- Select Destination --</option>';
  
      // Add new options based on the selected experience type
      if (selectedType && destinations[selectedType]) {
        destinations[selectedType].forEach(destination => {
          const option = document.createElement('option');
          option.value = destination.value;
          option.textContent = destination.text;
          destinationSelect.appendChild(option);
        });
      }
    });
  
    // Form submission event
    document.getElementById('booking-form').addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form from actual submission for demo purposes
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const experience = experienceType.value;
      const destinationValue = destinationSelect.value;
      const numPersons = numPersonsInput.value;
      const date = document.getElementById('date').value;
  
      if (name && email && experience && destinationValue && date) {
        alert(`Ticket has been booked\n\nBooking Summary:\nName: ${name}\nEmail: ${email}\nExperience Type: ${experience}\nDestination: ${destinationValue}\nNumber of Persons: ${numPersons}\nTravel Date: ${date}`);
      } else {
        alert('Please fill out all fields before submitting.');
      }
    });
  });
  