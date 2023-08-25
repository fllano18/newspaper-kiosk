let urls = [
    "https://www.ultimahora.com/",
    "https://www.abc.com.py/",
    "https://www.lanacion.com.py/"
  ];//defino un array de las paginas que se utilizaran
  let currentPageIndex = 0;//en la pagina actual que esta el frame
  
  const prevPageButton = document.getElementById("pagPrevia");
  const nextPageButton = document.getElementById("pagSig");
  const contentFrame = document.getElementById("frame-container");
  
  function updateContent() {
    contentFrame.src = urls[currentPageIndex];
  }
  
  prevPageButton.addEventListener("click", () => {
    currentPageIndex = (currentPageIndex - 1 + urls.length) % urls.length;
    updateContent();
  });
  
  nextPageButton.addEventListener("click", () => {
    currentPageIndex = (currentPageIndex + 1) % urls.length;
    updateContent();
  });
  
  updateContent();
  