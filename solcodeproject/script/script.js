const problems = [
  {
    id: 1,
    name: "Free Contest 79 - MOKIM",
    category: "Free Contest",
    ID: "fc079_mokim",
    link: "https://oj.vnoi.info/problem/fc079_mokim",
  },
  {
    id: 2,
    name: "COCI 2019/2020 - Contest 4 - Nivelle",
    category: "COCI",
    ID: "coci1920_r4_nivelle",
    link: "https://oj.vnoi.info/problem/coci1920_r4_nivelle",
  },
  {
    id: 3,
    name: "Free Contest 4 - ROOK1",
    category: "Free Contest",
    ID: "fc004_rook1",
    link: "https://oj.vnoi.info/problem/fc004_rook1",
  },
  {
    id: 4,
    name: "VOI 17 Bài 3 - Trò chơi",
    category: "VOI",
    ID: "voi17_bgame",
    link: "https://oj.vnoi.info/problem/voi17_bgame",
  },
  {
    id: 5,
    name: "Binpacking",
    category: "OI Style",
    ID: "binpack",
    link: "https://oj.vnoi.info/problem/binpack",
  },
  {
    id: 6,
    name: "Số nguyên tố",
    category: "OI Style",
    ID: "c11prime",
    link: "https://oj.vnoi.info/problem/c11prime",
  },
  {
    id: 7,
    name: "Duyên Hải 2021 - Khối 10 - Bài 3 - Mua hàng",
    category: "DHBB",
    ID: "dhbb21_buying",
    link: "https://oj.vnoi.info/problem/dhbb21_buying",
  },
  {
    id: 8,
    name: "COCI 2016/2017 - Contest 3 - Kronican",
    category: "COCI",
    ID: "coci1617_r3_kronican",
    link: "https://oj.vnoi.info/problem/coci1617_r3_kronican",
  },
  {
    id: 9,
    name: "Free Contest 132 - EXPONENTIAL",
    category: "Free Contest",
    ID: "fc132_exponential",
    link: "https://oj.vnoi.info/problem/fc132_exponential",
  },
  {
    id: 10,
    name: "Free Contest 131 - HURRYBIRD",
    category: "Free Contest",
    ID: "fc131_hurrybird",
    link: "https://oj.vnoi.info/problem/fc131_hurrybird",
  },
  {
    id: 11,
    name: "Dịch vụ truyền thông",
    category: "OI Style",
    ID: "dhserv",
    link: "https://oj.vnoi.info/problem/dhserv",
  },
  {
    id: 12,
    name: "Olympic Sinh Viên 2023 - Chuyên tin - Phát kẹo",
    category: "Olympic Sinh Viên",
    ID: "olp_ct23_candy",
    link: "https://oj.vnoi.info/problem/olp_ct23_candy",
  },
  {
    id: 13,
    name: "Olympic Sinh Viên 2023 - Không chuyên - Diện tích tam giác",
    category: "Olympic Sinh Viên",
    ID: "olp_kc23_triangle",
    link: "https://oj.vnoi.info/problem/olp_kc23_triangle",
  },
  {
    id: 14,
    name: "Olympic Sinh Viên 2023 - Không chuyên - Bể xăng",
    category: "Olympic Sinh Viên",
    ID: "olp_kc23_fuel",
    link: "https://oj.vnoi.info/problem/olp_kc23_fuel",
  },
  {
    id: 15,
    name: "Olympic Sinh Viên 2023 - Không chuyên - Xâu đẹp",
    category: "Olympic Sinh Viên",
    ID: "olp_kc23_beastr",
    link: "https://oj.vnoi.info/problem/olp_kc23_beastr",
  },
  {
    id: 16,
    name: "Bedao Grand Contest 08 - EQUAL",
    category: "Bedao Contest",
    ID: "bedao_g08_equal",
    link: "https://oj.vnoi.info/problem/bedao_g08_equal",
  },
  {
    id: 17,
    name: "Bedao Grand Contest 07 - PASSWORD",
    category: "Bedao Contest",
    ID: "bedao_g07_password",
    link: "https://oj.vnoi.info/problem/bedao_g07_password",
  },
  {
    id: 18,
    name: "Bedao Grand Contest 04 - ZEZE",
    category: "Bedao Contest",
    ID: "bedao_g04_zeze",
    link: "https://oj.vnoi.info/problem/bedao_g04_zeze",
  },
  {
    id: 19,
    name: "Bedao Grand Contest 03 - BONPAIR",
    category: "Bedao Contest",
    ID: "bedao_g03_bonpair",
    link: "https://oj.vnoi.info/problem/bedao_g03_bonpair",
  },
  {
    id: 20,
    name: "Bedao Grand Contest 01 - KPRIME",
    category: "Bedao Contest",
    ID: "bedao_g01_kprime",
    link: "https://oj.vnoi.info/problem/bedao_g01_kprime",
  },
  {
    id: 21,
    name: "Bedao Grand Contest 02 - SCHEDULE",
    category: "Bedao Contest",
    ID: "bedao_g02_schedule",
    link: "https://oj.vnoi.info/problem/bedao_g02_schedule",
  },
  {
    id: 22,
    name: "Bedao Grand Contest 03 - THREE",
    category: "Bedao Contest",
    ID: "bedao_g03_three",
    link: "https://oj.vnoi.info/problem/bedao_g03_three",
  },
  {
    id: 23,
    name: "Free Contest 35 - KEYLOGGER",
    category: "Free Contest",
    ID: "fc035_keylogger",
    link: "https://oj.vnoi.info/problem/fc035_keylogger",
  },
  {
    id: 24,
    name: "Dãy 2-Sum",
    category: "OI Style",
    ID: "twosum",
    link: "https://oj.vnoi.info/problem/twosum",
  },
  {
    id: 25,
    name: "Free Contest 69 - NUMBERWARS",
    category: "Free Contest",
    ID: "fc069_numberwars",
    link: "https://oj.vnoi.info/problem/fc069_numberwars",
  },
  {
    id: 26,
    name: "Free Contest 74 - COUNT",
    category: "Free Contest",
    ID: "fc074_count",
    link: "https://oj.vnoi.info/problem/fc074_count",
  },
  {
    id: 27,
    name: "Free Contest 109 - SWAP",
    category: "Free Contest",
    ID: "fc109_swap",
    link: "https://oj.vnoi.info/problem/fc109_swap",
  },
  {
    id: 28,
    name: "Free Contest 109 - SEG",
    category: "Free Contest",
    ID: "fc109_seg",
    link: "https://oj.vnoi.info/problem/fc109_seg",
  },
  {
    id: 29,
    name: "Free Contest 108 - SUMPOW",
    category: "Free Contest",
    ID: "fc108_sumpow",
    link: "https://oj.vnoi.info/problem/fc108_sumpow",
  },
  {
    id: 30,
    name: "Free Contest 107 - MAXIMUM",
    category: "Free Contest",
    ID: "fc107_maximum",
    link: "https://oj.vnoi.info/problem/fc107_maximum",
  },
  {
    id: 31,
    name: "VOI 20 Bài 1 - Phần thưởng",
    category: "VOI",
    ID: "voi20_bonus",
    link: "https://oj.vnoi.info/problem/voi20_bonus",
  },
  {
    id: 32,
    name: "VOI 14 Bài 4 - Trò Chơi Với Những Viên Bi",
    category: "VOI",
    ID: "ballgmvn",
    link: "https://oj.vnoi.info/problem/ballgmvn",
  },
  {
    id: 33,
    name: "VOI 11 Bài 1 - Phần thưởng",
    category: "VOI",
    ID: "bonus",
    link: "https://oj.vnoi.info/problem/bonus",
  },
  {
    id: 34,
    name: "VOI 11 Bài 4 - Nối điểm đen trắng",
    category: "VOI",
    ID: "bwpoints",
    link: "https://oj.vnoi.info/problem/bwpoints",
  },
  {
    id: 35,
    name: "VOI 05 Bài 3 - Bộ sưu tập",
    category: "VOI",
    ID: "collect",
    link: "https://oj.vnoi.info/problem/collect",
  },
  {
    id: 36,
    name: "VOI 09 Bài 1 - Trò chơi với băng số",
    category: "VOI",
    ID: "linegame",
    link: "https://oj.vnoi.info/problem/linegame",
  },
  {
    id: 37,
    name: "VOI 10 Bài 1 - Dãy con chung không liền kề dài nhất",
    category: "VOI",
    ID: "lnacs",
    link: "https://oj.vnoi.info/problem/lnacs",
  },
  {
    id: 38,
    name: "VOI 15 Bài 4 - Cắt hình",
    category: "VOI",
    ID: "mincut",
    link: "https://oj.vnoi.info/problem/mincut",
  },
  {
    id: 39,
    name: "VOI 14 Bài 1 - Con đường Tùng Trúc",
    category: "VOI",
    ID: "minroad",
    link: "https://oj.vnoi.info/problem/minroad",
  },
  {
    id: 40,
    name: "VOI 08 Bài 2 - Lò cò",
    category: "VOI",
    ID: "nkjump",
    link: "https://oj.vnoi.info/problem/nkjump",
  },
  {
    id: 41,
    name: "VOI 08 Bài 1 - Trò chơi với dãy số",
    category: "VOI",
    ID: "nksgame",
    link: "https://oj.vnoi.info/problem/nksgame",
  },
  {
    id: 42,
    name: "VOI 06 Bài 1 - Chọn ô",
    category: "VOI",
    ID: "qbselect",
    link: "https://oj.vnoi.info/problem/qbselect",
  },
  {
    id: 43,
    name: "VOI 15 Bài 3 - Kế hoạch cải tổ",
    category: "VOI",
    ID: "reform",
    link: "https://oj.vnoi.info/problem/reform",
  },
  {
    id: 44,
    name: "VOI 12 Bài 5 - Robocon",
    category: "VOI",
    ID: "robocon",
    link: "https://oj.vnoi.info/problem/robocon",
  },
  {
    id: 45,
    name: "VOI 10 Bài 2 - Ổn định",
    category: "VOI",
    ID: "stable",
    link: "https://oj.vnoi.info/problem/stable",
  },
  {
    id: 46,
    name: "VOI 11 Bài 6 - Nâng cấp mạng",
    category: "VOI",
    ID: "upgranet",
    link: "https://oj.vnoi.info/problem/upgranet",
  },
  {
    id: 47,
    name: "VOI 17 Bài 4 - Tàu điện ngầm",
    category: "VOI",
    ID: "voi17_metro",
    link: "https://oj.vnoi.info/problem/voi17_metro",
  },
  {
    id: 48,
    name: "ICPC 2023 vòng Regional - B: Beautiful Scoreboard",
    category: "ICPC",
    ID: "icpc23_regional_b",
    link: "https://oj.vnoi.info/problem/icpc23_regional_b",
  },
  {
    id: 49,
    name: "Olympic 30/4 2018 - Khối 10 - Bài 3 - Golf",
    category: "Olympic 30/4",
    ID: "olp304_18_golf",
    link: "https://oj.vnoi.info/problem/olp304_18_golf",
  },
  {
    id: 50,
    name: "Olympic 30/4 2018 - Khối 10 - Bài 2 - Chia đất",
    category: "Olympic 30/4",
    ID: "olp304_18_chiadat",
    link: "https://oj.vnoi.info/problem/olp304_18_chiadat",
  },
  // {
  //   id: 51,
  //   name: "",
  //   category: "",
  //   ID: "",
  //   link: "",
  // },
  // {
  //   id: 52,
  //   name: "",
  //   category: "",
  //   ID: "",
  //   link: "",
  // },
  // {
  //   id: 53,
  //   name: "",
  //   category: "",
  //   ID: "",
  //   link: "",
  // },
  // {
  //   id: 54,
  //   name: "",
  //   category: "",
  //   ID: "",
  //   link: "",
  // },
  // {
  //   id: 55,
  //   name: "",
  //   category: "",
  //   ID: "",
  //   link: "",
  // },
  // {
  //   id: 56,
  //   name: "",
  //   category: "",
  //   ID: "",
  //   link: "",
  // },
  // {
  //   id: 57,
  //   name: "",
  //   category: "",
  //   ID: "",
  //   link: "",
  // },
  // {
  //   id: 58,
  //   name: "",
  //   category: "",
  //   ID: "",
  //   link: "",
  // },
  // {
  //   id: 59,
  //   name: "",
  //   category: "",
  //   ID: "",
  //   link: "",
  // },
  // {
  //   id: 60,
  //   name: "",
  //   category: "",
  //   ID: "",
  //   link: "",
  // },
  // {
  //   id: 61,
  //   name: "",
  //   category: "",
  //   ID: "",
  //   link: "",
  // },
  // {
  //   id: 62,
  //   name: "",
  //   category: "",
  //   ID: "",
  //   link: "",
  // },
  // {
  //   id: 63,
  //   name: "",
  //   category: "",
  //   ID: "",
  //   link: "",
  // },
  // {
  //   id: 64,
  //   name: "",
  //   category: "",
  //   ID: "",
  //   link: "",
  // },
  // {
  //   id: 65,
  //   name: "",
  //   category: "",
  //   ID: "",
  //   link: "",
  // },
  // {
  //   id: 66,
  //   name: "",
  //   category: "",
  //   ID: "",
  //   link: "",
  // },
  // {
  //   id: 67,
  //   name: "",
  //   category: "",
  //   ID: "",
  //   link: "",
  // },
  // {
  //   id: 68,
  //   name: "",
  //   category: "",
  //   ID: "",
  //   link: "",
  // },
  // {
  //   id: 69,
  //   name: "",
  //   category: "",
  //   ID: "",
  //   link: "",
  // },
  // {
  //   id: 70,
  //   name: "",
  //   category: "",
  //   ID: "",
  //   link: "",
  // },
];

let currentPage = localStorage.getItem("currentPage")
  ? parseInt(localStorage.getItem("currentPage"))
  : 1;
const problemsPerPage = 10; // SO THANH PHAN TREN 1 TRANG
const TmpF = "./problem";
const EndF = ".html";

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

renderProblems();
/*
{
    id: ,
    name: "",
    category: "",
    ID: "",
    link:"",
  },
 */
