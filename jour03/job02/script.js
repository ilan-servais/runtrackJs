// Function to shuffle array elements
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Function to check if images are in correct order
  function checkOrder() {
    const images = document.querySelectorAll('.draggable');
    let correctOrder = true;
    images.forEach((image, index) => {
      if (parseInt(image.id.slice(3)) !== index + 1) {
        correctOrder = false;
      }
    });
    return correctOrder;
  }
  
  // Function to handle drag and drop
  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    if (checkOrder()) {
      document.getElementById('message').innerText = "Vous avez gagné";
      document.getElementById('message').style.color = "green";
    } else {
      document.getElementById('message').innerText = "Vous avez perdu";
      document.getElementById('message').style.color = "red";
    }
  }
  
  
  // Function to shuffle images
  function shuffleImages() {
    const imagesContainer = document.getElementById('imageContainer');
    const images = Array.from(imagesContainer.children);
    const shuffledImages = shuffleArray(images);
    imagesContainer.innerHTML = '';
    shuffledImages.forEach(image => {
      imagesContainer.appendChild(image);
    });
    document.getElementById('message').innerText = "";
  }
  
  // Event listeners
  document.getElementById('shuffleButton').addEventListener('click', shuffleImages);
  document.querySelectorAll('.draggable').forEach(item => {
    item.addEventListener('dragstart', drag);
  });
  document.getElementById('imageContainer').addEventListener('drop', drop);
  document.getElementById('imageContainer').addEventListener('dragover', allowDrop);
  
  