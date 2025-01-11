let count = 0; //initialize count to 0

function increaseCount(){
    count++; //Increment the count by 1
    displayCount(); // Call displayCount() function inside increaseCount() function to increase and display count value simultaneously.
    checkCountValue(); // Check count value and display messages 
}

function displayCount() {
    document.getElementById('countDisplay').innerText = count; //Display the count in HTML
}

function checkCountValue() {
    if (count === 10) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}
