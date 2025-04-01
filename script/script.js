let currentPage = localStorage.getItem("currentPage")
  ? parseInt(localStorage.getItem("currentPage"))
  : 1;
const problemsPerPage = 10; // SO THANH PHAN TREN 1 TRANG
const TmpF = "./problem";
const EndF = ".html";

let problems = [];

function fetchProblems() {
  return fetch("./json/problems.json")
    .then((response) => response.json())
    .then((data) => {
      problems = data;
      renderProblems(); // Call renderProblems after fetching data
    })
    .catch((error) => console.error("Error fetching problems:", error));
}

// Retrieve the stored search and filter values from localStorage
const storedSearchValue = localStorage.getItem("searchValue") || "";
const storedCategoryFilter = localStorage.getItem("categoryFilter") || "";

document.getElementById("search").value = storedSearchValue;
document.getElementById("category-filter").value = storedCategoryFilter;

// Show the problem table
function renderProblems() {
  const problemList = document.getElementById("problem-list");
  problemList.innerHTML = "";

  const searchValue = document.getElementById("search").value.toLowerCase();
  const categoryFilter = document.getElementById("category-filter").value;

  const filteredProblems = problems.filter((problem) => {
    return (
      problem.name.toLowerCase().includes(searchValue) &&
      (categoryFilter === "" || problem.category === categoryFilter)
    );
  });

  const totalPages = Math.ceil(filteredProblems.length / problemsPerPage);
  const startIndex = (currentPage - 1) * problemsPerPage;
  const endIndex = startIndex + problemsPerPage;
  const paginatedProblems = filteredProblems.slice(startIndex, endIndex);

  //render each value for each column on 1 row
  paginatedProblems.forEach((problem) => {
    const row = document.createElement("tr");
    let NameF = TmpF + problem.id.toString() + EndF;
    row.innerHTML = `
    <td><a href="${problem.link}" target="_blank" >${problem.ID}</a></td>
                <td><a href="${NameF}" target="_self" >${problem.name}</td>
                <td>${problem.category}</a></td>
            `;
    problemList.appendChild(row);
  });

  document.getElementById("prev-page").disabled = currentPage === 1;
  document.getElementById("next-page").disabled =
    endIndex >= filteredProblems.length;

  document.getElementById("first-page-btn").disabled = currentPage === 1;
  document.getElementById("last-page-btn").disabled =
    endIndex >= filteredProblems.length;

  document.getElementById(
    "currentPageNumber"
  ).textContent = `Page: ${currentPage}`;
}

document.getElementById("search").addEventListener("input", () => {
  currentPage = 1;
  const searchValue = document.getElementById("search").value;
  localStorage.setItem("searchValue", searchValue);
  localStorage.setItem("currentPage", currentPage);
  renderProblems();
});

document.getElementById("category-filter").addEventListener("change", () => {
  currentPage = 1;
  const categoryFilter = document.getElementById("category-filter").value;
  localStorage.setItem("categoryFilter", categoryFilter);
  localStorage.setItem("currentPage", currentPage);
  renderProblems();
});

document.getElementById("prev-page").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    localStorage.setItem("currentPage", currentPage);
    renderProblems();
  }
});

document.getElementById("next-page").addEventListener("click", () => {
  currentPage++;
  localStorage.setItem("currentPage", currentPage);
  renderProblems();
});

document.getElementById("first-page-btn").addEventListener("click", () => {
  currentPage = 1;
  localStorage.setItem("currentPage", currentPage);
  renderProblems();
});

document.getElementById("last-page-btn").addEventListener("click", () => {
  currentPage = Math.ceil(problems.length / problemsPerPage);
  localStorage.setItem("currentPage", currentPage);
  renderProblems();
});

document.getElementById("jump-to-page-btn").addEventListener("click", () => {
  const pageNumber = parseInt(document.getElementById("jump-to-page").value);
  const totalPages = Math.ceil(problems.length / problemsPerPage);

  if (pageNumber > 0 && pageNumber <= totalPages) {
    currentPage = pageNumber;
    localStorage.setItem("currentPage", currentPage);
    renderProblems();
  } else if (pageNumber > totalPages) {
    currentPage = totalPages;
    localStorage.setItem("currentPage", currentPage);
    renderProblems();
    alert(`Please enter a valid page number between 1 and ${totalPages}`);
  } else {
    alert(`Please enter a valid page number between 1 and ${totalPages}`);
  }
});

// Fetch the problems and render the page
fetchProblems();
/*
{
    id: ,
    name: "",
    category: "",
    ID: "",
    link:"",
  },
 */
