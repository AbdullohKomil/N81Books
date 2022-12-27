const elRow = document.querySelector(".js-row");
const elSelect2 = document.querySelector(".select-js-second")
function renderBooks(array, node) {
  node.innerHTML = "";
  for (let i of array) {
    let createColBox = document.createElement("div");
    createColBox.setAttribute(
      "class",
      "p-2 mb-5 text-center col-5 box-css"
    );

    node.appendChild(createColBox);

    let elImage = document.createElement("img");
    elImage.setAttribute("src", i.imageLink);
    createColBox.appendChild(elImage);

    let elPages = document.createElement("h4");
    elPages.innerHTML = "pages: " + i.pages;
    createColBox.appendChild(elPages);

    let elTitle = document.createElement("h2");
    elTitle.innerHTML = "name: " + i.title;
    createColBox.appendChild(elTitle);

    let elId = document.createElement("h6");
    elId.innerHTML = "ID : " + i.id;
    createColBox.appendChild(elId);

    let elAuthor = document.createElement("h4");
    elAuthor.innerHTML = "creator: " + i.author;
    createColBox.appendChild(elAuthor);

    let elCountry = document.createElement("p");
    elCountry.innerHTML = "country: " + i.country;
    createColBox.appendChild(elCountry);

    let elLanguange = document.createElement("p");
    elLanguange.innerHTML = "langunge: " + i.language;
    createColBox.appendChild(elLanguange);

    let elLink = document.createElement("a");
    elLink.setAttribute("href", i.link);
    elLink.setAttribute("class", "text-decoration-none link-info");
    elLink.innerHTML = "link to read";
    createColBox.appendChild(elLink);

    let elYear = document.createElement("p");
    elYear.innerHTML = "year: " + i.year;
    createColBox.appendChild(elYear);
  }
}

renderBooks(books, elRow);

let elSelect = document.querySelector(".select-js");

elSelect.addEventListener("change", () => {
  let elSelectVal = elSelect.value;
  if (elSelectVal != "default") {
    if (elSelectVal == "A-Z") {
      const booksSort = books.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });
      renderBooks(booksSort, elRow);
    }
    if (elSelectVal == "Z-A") {
      const booksSort_2 = books.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        }
        if (a.title < b.title) {
          return 1;
        }
        return 0;
      });
      renderBooks(booksSort_2, elRow);
    }
    if (elSelectVal == "Sort by year") {
      const booksSort = books.sort((a, b) => {
          if (a.year > b.year) {
            return -1;
        }
        if (a.year < b.year) {
          return 1;
        }
        return 0;
      });
      renderBooks(booksSort, elRow);
    }
    if (elSelectVal == "Sort by year reverse") {
      const booksSort = books.sort((a, b) => {
        if (a.year > b.year) {
          return 1; 
        }
        if (a.year < b.year) {
          return -1;
        }
        return 0;
      });
      renderBooks(booksSort, elRow);
    }
    if (elSelectVal == "page-small to page-big") {
      const booksSort = books.sort((a, b) => {
        if (a.pages > b.pages) {
          return 1;
        }
        if (a.pages < b.pages) {
          return -1;
        }
        return 0;
      });
      renderBooks(booksSort, elRow);
    }
    if (elSelectVal == "page-big to page-small") {
      const booksSort = books.sort((a, b) => {
        if (a.pages > b.pages) {
          return -1;
        }
        if (a.pages < b.pages) {
          return 1;
        }
        return 0;
      });
      renderBooks(booksSort, elRow);
    }
    books.forEach((item) => {
      let newArray = [];
      if (elSelectVal == item.language) {
        newArray.push(item)
        renderBooks(newArray,elRow)
      }
    });
  } else if (elSelectVal == "default") {
    window.location.reload();
  }
});

let newSet = new Set();
books.forEach((item) => {
  item.language.split(", ").forEach((lang) => {
    newSet.add(lang);
  });
});

newSet.forEach((langs) => {
  let elOption = document.createElement("option");
  elSelect.appendChild(elOption);
  elOption.textContent = langs;
  elOption.value = langs;
});





const btnMode = document.querySelector(".dark-mode-btn");
let theme = false;

btnMode.addEventListener("click", () => {
  theme = !theme;
  const bg = theme ? "dark" : "light";
  window.localStorage.setItem("theme", bg);
  changeTheme();
});

function changeTheme() {
  if (window.localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}
changeTheme();


let elForm = document.querySelector('.js-form')
let newArr2 = []
let elInput = document.querySelector('.js-input')
elForm.addEventListener('input', (evt) => {
  elRow.innerHTML = ""
  evt.preventDefault()
  let elInputVal = elInput.value.toLocaleLowerCase(); 
  books.forEach((el) => {
    if(el.title.toLocaleLowerCase().includes(elInputVal)) {
      newArr2.push(el)
    }
  })
  renderBooks(newArr2 , elRow)
  newArr2 = []
})