const logoutBtn = document.querySelector('#logout-btn');

logoutBtn.addEventListener('click', () => {
  alert('You have successfully logged out!');
});

const dropdown = document.querySelectorAll(".dropdown");
  
dropdown.forEach(function(element) {
  element.addEventListener("click", function() {
    this.classList.toggle("active");
    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
});