// Function to preview uploaded profile picture
function previewProfilePic() {
    const file = document.getElementById("profile-pic-upload").files[0];
    const reader = new FileReader();
  
    reader.onloadend = function () {
      document.getElementById("comment-profile-pic").src = reader.result;
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  
  // Function to load and display comments from localStorage
  function loadComments() {
    const commentsList = document.getElementById("comments-list");
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    commentsList.innerHTML = "";
  
    comments.forEach((commentObj) => {
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment-item");
  
      const commentContent = `
        <div class="comment-header">
          <img src="${commentObj.profilePicSrc}" alt="Profile" class="profile-pic-comment">
          <strong>${commentObj.name}</strong>
        </div>
        <p>${commentObj.comment}</p>
      `;
  
      commentDiv.innerHTML = commentContent;
      commentsList.appendChild(commentDiv);
    });
  }
  
  // Function to handle comment submission
  function handleCommentSubmit() {
    const name = document.getElementById("name").value.trim();
    const comment = document.getElementById("comment").value.trim();
    const profilePicSrc = document.getElementById("comment-profile-pic").src;
  
    if (name && comment) {
      // Save the comment in localStorage
      const comments = JSON.parse(localStorage.getItem("comments")) || [];
      comments.push({ name, comment, profilePicSrc });
      localStorage.setItem("comments", JSON.stringify(comments));
  
      // Reload comments display
      loadComments();
  
      // Clear input fields
      document.getElementById("name").value = "";
      document.getElementById("comment").value = "";
    }
  }
  
  // Function to generate badges dynamically based on user skills
  function awardBadges() {
    const skills = document.querySelectorAll('.skills-list li');
    const badgeContainer = document.getElementById('badge-container');
    const badgeCriteria = {
      "Solidity": "Blockchain Developer",
      "Ethereum": "Ethereum Expert",
      "JavaScript": "JavaScript Pro",
      "React": "React Specialist",
      "Node.js": "Backend Master"
    };
  
    skills.forEach(skill => {
      const skillText = skill.textContent.trim();
      if (badgeCriteria[skillText]) {
        const badge = document.createElement('div');
        badge.classList.add('badge');
        badge.textContent = badgeCriteria[skillText];
        badgeContainer.appendChild(badge);
      }
    });
  }
  
  // Function to fetch and display the user's IP address
  function displayUserIP() {
    const ipDisplay = document.getElementById("user-ip");
  
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        ipDisplay.textContent = 'IP Address: ${data.ip}';
      })
      .catch(error => {
        console.error('Error fetching IP address:', error);
        ipDisplay.textContent = 'IP Address: Not available';
      });
  }
  
  // Event listener for comment submission
  document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-comment");
  
    // Load and display comments and badges
    loadComments();
    awardBadges();
    displayUserIP();
  
    // Set up comment submission event
    submitButton.addEventListener("click", handleCommentSubmit);
  
    // Show the loading screen for a set duration
    setTimeout(function () {
      document.body.classList.add('loaded');
      document.getElementById('loading-screen').style.display = 'none';
    }, 3000);
  });
  
  // Optional: Trigger profile picture preview on file input change
  document.getElementById("profile-pic-upload").addEventListener("change", previewProfilePic);
  
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  document.getElementById("home").addEventListener("click", function () {
  
    // Redirect to the login or home page
    window.location.href = "index.html";
  });
  document.getElementById("explore").addEventListener("click", function () {
  
    // Redirect to the login or home page
    window.location.href = "rec.html";
  });
  document.getElementById("profile").addEventListener("click", function () {
  
    // Redirect to the login or home page
    window.location.href = "pro.html";
  });
  document.getElementById("sign-out-btn").addEventListener("click", function () {
    // Redirect to login page
    window.location.href = "log.html";
  });