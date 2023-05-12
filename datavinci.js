// Create the banner element
var banner = document.createElement('div');
banner.id = 'limited-time-offer';
banner.style.position = 'fixed';
banner.style.top = '0';
banner.style.left = '0';
banner.style.width = '100%';
banner.style.backgroundColor = '#f2f2f2';
banner.style.color = '#000';
banner.style.textAlign = 'center';
banner.style.padding = '10px';
banner.style.zIndex = '9999';

// Create the image element
var image = document.createElement('img');
image.src = 'C:\\Users\\Amma\\Desktop\\offer2.jfif'; // Replace with the path to your image

// Create the countdown element
var countdown = document.createElement('span');
countdown.id = 'countdown';
countdown.style.fontWeight = 'bold';
countdown.style.fontSize = '20px'; // Example: Set the font size to 20 pixels
countdown.style.marginRight = '10px'; // Example: Add margin on the right side of the countdown

// Create the "Ends at" text element
var endsAtText = document.createElement('span');
endsAtText.textContent = 'Ends at: ';

// Append the image, countdown, and "Ends at" text elements to the banner
banner.appendChild(image);
banner.appendChild(endsAtText);
banner.appendChild(countdown);

// Append the banner to the document body
document.body.appendChild(banner);

// Function to update the countdown
function updateCountdown() {
  var now = new Date();
  var targetDate = new Date('2023-05-13'); // Set your target date here
  var timeDiff = targetDate.getTime() - now.getTime();

  // Check if the countdown has reached zero
  if (timeDiff <= 0) {
    clearInterval(interval);
    countdown.textContent = 'Offer expired';
    return;
  }

  // Calculate the remaining time
  var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Update the countdown text
  countdown.textContent = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
}

// Update the countdown immediately
updateCountdown();

// Update the countdown every second
var interval = setInterval(updateCountdown, 1000);
