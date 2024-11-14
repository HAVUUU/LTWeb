// Kiểm tra trạng thái đăng nhập khi tải trang
window.onload = function () {
  const authButtonsContainer = document.getElementById("auth-buttons");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const username = localStorage.getItem("username");

  if (isLoggedIn === "true") {
    authButtonsContainer.innerHTML = `
                    <div class="welcome-message">Chào mừng, ${username}!</div>
                    <button class="logout-button" onclick="logout()">Đăng xuất</button>
                `;
  } else {
    authButtonsContainer.innerHTML = `
                    <a href="login.html" class="login-button">Đăng nhập</a>
                    <a href="register.html" class="register-button">Đăng ký</a>
                `;
  }
};

function logout() {
  localStorage.setItem("isLoggedIn", false); // Xóa trạng thái đăng nhập
  window.location.href = "HomePage.html";
}
/**-----------------------------MỤC ẢNH SẢN PHẨM---------------------------------- */
const bigImg = document.querySelector(".product-content-left-big-img img"); // Chọn phần tử <img> bên trong
const smallImgItems = document.querySelectorAll(
  ".product-content-left-small-img img"
); // Chọn tất cả <img> trong phần ảnh nhỏ

smallImgItems.forEach(function (imgItem) {
  imgItem.addEventListener("click", function () {
    bigImg.src = imgItem.src; // Thay đổi ảnh lớn bằng ảnh nhỏ được nhấp vào
  });
});
/*----------------------------------------MÔ TẢ VÀ CHI TIẾT -------------------------------*/
const mota = document.querySelector(".mota");
const chitiet = document.querySelector(".chitiet");
window.addEventListener("DOMContentLoaded", () => {
  if (motaContent && chitietContent) {
    motaContent.style.display = "block";
    chitietContent.style.display = "none";
  }
});
if (mota) {
  mota.addEventListener("click", function () {
    document.querySelector(
      ".product-content-right-buttom-content-mota"
    ).style.display = "block";
    document.querySelector(
      ".product-content-right-buttom-content-chitiet"
    ).style.display = "none";
  });
}
if (chitiet) {
  chitiet.addEventListener("click", function () {
    document.querySelector(
      ".product-content-right-buttom-content-mota"
    ).style.display = "none";
    document.querySelector(
      ".product-content-right-buttom-content-chitiet"
    ).style.display = "block";
  });
}
const botom = document.querySelector(".product-content-right-buttom-top");
if (botom) {
  botom.addEventListener("click", function () {
    document
      .querySelector(".product-content-right-buttom-main-content")
      .classList.toggle("activeB");
  });
}

/**-------------------------------------------------------------------------------------------- */
// Thêm sự kiện click cho từng phần tử
document.getElementById("home").addEventListener("click", function () {
  window.location.href = "HomePage.html"; // Điều hướng đến trang chủ
});

document.getElementById("products").addEventListener("click", function () {
  window.location.href = "products.html"; // Điều hướng đến trang sản phẩm
});

/**-------------------------------------------------------------------------------------------- */
// Lấy tham số `id` từ URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Dữ liệu sản phẩm mẫu
const products = {
  1: {
    name: "Sofa Hiện Đại",
    price: "5.990.000₫",
    bigImg: "images/sofa.jpg",
    smallImg: ["images/sofa.jpg", "images/sp0.0.1.jpg", "images/sp0.1.1.jpg"],
    description:
      "Sofa hiện đại mang đến phong cách trang nhã cho phòng khách của bạn. Với màu sắc trung tính và thiết kế tối giản, chiếc sofa này phù hợp với nhiều phong cách nội thất và không gian khác nhau. Phù hợp cho gia đình hoặc các buổi gặp mặt bạn bè.",
    details:
      "Kích thước: 200cm x 80cm x 90cm.\nSản phẩm bao gồm: khung gỗ tự nhiên, lớp nệm cao cấp, bọc vải chống nhăn và 2 gối ôm đi kèm.",
  },
  2: {
    name: "Giường Gỗ Sồi",
    price: "7.500.000₫",
    bigImg: "images/bed.jpg",
    smallImg: [],
    description:
      "Giường ngủ được làm từ gỗ sồi tự nhiên, bền bỉ và thân thiện với môi trường. Thiết kế đơn giản nhưng sang trọng, giường gỗ sồi sẽ mang lại cảm giác ấm áp và thoải mái cho phòng ngủ của bạn.",
    details:
      "Kích thước: 180cm x 200cm.\nSản phẩm bao gồm: khung giường gỗ sồi, chân giường chắc chắn, vạt giường.",
  },
  3: {
    name: "Bàn Ăn Tròn",
    price: "3.490.000₫",
    bigImg: "images/table2.webp",
    smallImg: [],
    description:
      "Bàn ăn tròn thiết kế tinh tế, nhỏ gọn, dễ dàng bố trí trong không gian phòng ăn hoặc bếp. Phù hợp cho các bữa ăn gia đình và tạo không gian ấm cúng.",
    details:
      "Kích thước: đường kính 120cm, cao 75cm.\nSản phẩm bao gồm: bàn gỗ tự nhiên với lớp sơn phủ chống thấm và chân bàn kim loại sơn tĩnh điện.",
  },
  4: {
    name: "Ghế Gỗ Tự Nhiên",
    price: "1.200.000₫",
    bigImg: "images/chair.jpg",
    smallImg: [],
    description:
      "Ghế làm từ gỗ tự nhiên, thích hợp cho phòng khách hoặc phòng ăn. Thiết kế trang nhã, mang lại cảm giác gần gũi và thanh lịch.",
    details:
      "Kích thước: 45cm x 45cm x 90cm.\nSản phẩm bao gồm: ghế gỗ tự nhiên với đệm ngồi mềm, bề mặt gỗ mịn.",
  },
  5: {
    name: "Sofa Da Thật",
    price: "9.500.000₫",
    bigImg: "images/sofa2.jpg",
    smallImg: ["images/sofa2.jpg", "images/sofa2.1.jpg", "images/sofa2.2.jpg"],
    description:
      "Sofa bọc da thật, mang đến vẻ sang trọng và đẳng cấp cho không gian sống. Chất liệu da cao cấp, dễ dàng vệ sinh và bền bỉ.",
    details:
      "Kích thước: 220cm x 90cm x 100cm. \nSản phẩm bao gồm: sofa da thật với khung gỗ chắc chắn, đệm mút dày và hai gối đi kèm.",
  },
  6: {
    name: "Sofa Góc",
    price: "8.200.000₫",
    bigImg: "images/sofa3.jpg",
    smallImg: ["images/sofa3.jpg", "images/sofa3.1.webp", "images/sofa3.2.jpg"],
    description:
      "Sofa góc bọc vải, phù hợp cho không gian lớn, tạo điểm nhấn và cung cấp chỗ ngồi rộng rãi cho gia đình.",
    details:
      "Kích thước: 260cm x 150cm x 90cm.\nSản phẩm bao gồm: khung gỗ bền, vải bọc mềm mại, đệm mút dày, và chân gỗ tự nhiên.",
  },
  7: {
    name: "Giường Ngủ Kim Loại",
    price: "4.300.000₫",
    bigImg: "images/bed1.jpg",
    smallImg: [],
    description:
      "Giường ngủ kim loại với thiết kế hiện đại, bền bỉ. Phù hợp cho các phong cách nội thất hiện đại và tối giản.",
    details:
      "Kích thước: 160cm x 200cm. \nSản phẩm bao gồm: khung giường kim loại, vạt giường chắc chắn.",
  },
  8: {
    name: "Giường Tầng Trẻ Em",
    price: "6.500.000₫",
    bigImg: "images/doublebed.jpg",
    smallImg: [],
    description:
      "Giường tầng thiết kế an toàn cho trẻ em, giúp tiết kiệm không gian. Phù hợp cho gia đình có hai con nhỏ.",
    details:
      "Kích thước: 90cm x 200cm mỗi tầng. \nSản phẩm bao gồm: khung gỗ bền, thang leo, và lan can bảo vệ.",
  },
  9: {
    name: "Bàn Ăn Tròn",
    price: "2.800.000₫",
    bigImg: "images/table2.webp",
    smallImg: [],
    description:
      "Bàn ăn tròn, thích hợp cho gia đình nhỏ với thiết kế đơn giản, tiện lợi.",
    details:
      "Kích thước: đường kính 100cm, cao 75cm.\n Sản phẩm bao gồm: bàn gỗ tự nhiên với lớp phủ chống ẩm.",
  },
  10: {
    name: "Bàn Ăn Gia Đình 6 Ghế",
    price: "5.200.000₫",
    bigImg: "images/table3.jpg",
    smallImg: [
      "images/table3.jpg",
      "images/table3.1.jpg",
      "images/table3.2.jpg",
    ],
    description:
      "Bàn ăn lớn kèm 6 ghế, phù hợp cho gia đình đông người. Thiết kế hiện đại, chất liệu bền.",
    details:
      "Kích thước: 180cm x 90cm x 75cm. \nSản phẩm bao gồm: bàn lớn gỗ, 6 ghế với đệm bọc vải.",
  },
  11: {
    name: "Ghế Nhựa",
    price: "600.000₫",
    bigImg: "images/platchair.jpg",
    smallImg: [],
    description:
      "Ghế nhựa nhẹ, dễ di chuyển, phù hợp cho không gian trong nhà và ngoài trời.",
    details:
      "Kích thước: 45cm x 45cm x 80cm.\n Sản phẩm bao gồm: ghế nhựa cao cấp, thiết kế tiện dụng.",
  },
  12: {
    name: "SOFA TRẮNG ÊM PHÒNG KHÁCH",
    price: "4.500.000₫",
    bigImg: "images/sofa1.jpg",
    smallImg: [],
    description:
      "SOFA màu trắng thanh lịch, tạo không gian sáng sủa và rộng rãi hơn cho phòng khách.",
    details:
      "Kích thước: 200cm x 80cm x 90cm. \nSản phẩm bao gồm: khung gỗ, đệm mút dày và 2 gối ôm.",
  },
};

// Kiểm tra xem sản phẩm có tồn tại không
if (products[productId]) {
  const product = products[productId];

  // Hiển thị thông tin sản phẩm
  document.querySelector(".product-content-right-product-name h1").innerText =
    product.name;
  document.querySelector(".product-content-right-product-price p").innerText =
    product.price;
  document.querySelector(
    ".product-content-right-buttom-content-mota p"
  ).innerText = product.description;
  document.querySelector(
    ".product-content-right-buttom-content-chitiet p"
  ).innerText = product.details;

  // Hiển thị ảnh lớn
  const bigImgElement = document.querySelector(
    ".product-content-left-big-img img"
  );
  bigImgElement.src = product.bigImg;

  // Xóa các ảnh nhỏ hiện có và thêm ảnh mới nếu có ảnh nhỏ
  const smallImgContainer = document.querySelector(
    ".product-content-left-small-img"
  );
  smallImgContainer.innerHTML = ""; // Xóa các nội dung hiện có

  if (product.smallImg && product.smallImg.length > 0) {
    product.smallImg.forEach((imgSrc) => {
      const imgElement = document.createElement("img");
      imgElement.src = imgSrc;
      imgElement.alt = product.name;
      imgElement.style.cursor = "pointer";

      // Sự kiện khi nhấn vào ảnh nhỏ để đổi ảnh lớn
      imgElement.addEventListener("click", function () {
        bigImgElement.src = imgSrc;
      });

      smallImgContainer.appendChild(imgElement);
    });
  } else {
    // Ẩn phần ảnh nhỏ nếu không có ảnh nhỏ
    smallImgContainer.style.display = "none";
  }
} else {
  // Hiển thị thông báo lỗi nếu sản phẩm không tồn tại
  document.querySelector(".product-content").innerHTML =
    "<p>Oops! Product not found.</p>";
}

/*--------------------RELATED------------------------ */
document.querySelectorAll(".product-related-item").forEach((item) => {
  item.addEventListener("click", () => {
    const productId = item.getAttribute("data-id");
    if (productId) {
      window.location.href = `product-detail.html?id=${productId}`;
    }
  });
});
