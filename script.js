document.addEventListener('DOMContentLoaded', function () {
    var changeColorBtn = document.getElementById('change-color-btn');
    var helloWorldText = document.querySelector('#hello-world p');

    // Function to change the color of the text
    function changeTextColor() {
        var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Generate a random color
        helloWorldText.style.color = randomColor; // Apply the random color to the text
    }

    // Event listener for the button click
    changeColorBtn.addEventListener('click', changeTextColor);
});
