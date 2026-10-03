const products = [
  {
    id: 1,
    name: "Wireless Headphones Pro",
    category: "Electronics",
    price: 4999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85"
    ],
    rating: 4.8,
    reviews: 245,
    description: "Premium wireless headphones with Active Noise Cancellation, rich audio and up to 40 hours of battery backup.",
    specs: {
      Brand: "AudioTech",
      Bluetooth: "5.3",
      Battery: "40 Hours",
      Weight: "250 g",
      "Noise Cancellation": "Active ANC"
    }
  },
  {
    id: 2,
    name: "Smart Watch X",
    category: "Electronics",
    price: 3499,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=900&q=85"
    ],
    rating: 4.6,
    reviews: 182,
    description: "A stylish smartwatch with a bright AMOLED display, fitness tracking, notifications and all-day battery life.",
    specs: {
      Brand: "TimeTech",
      Display: "1.9-inch AMOLED",
      Battery: "7 Days",
      Water: "5 ATM",
      Connectivity: "Bluetooth 5.2"
    }
  },
  {
    id: 3,
    name: "Urban Sneakers",
    category: "Fashion",
    price: 2799,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=85"
    ],
    rating: 4.7,
    reviews: 126,
    description: "Lightweight everyday sneakers designed with a clean urban look and comfortable cushioning.",
    specs: {
      Brand: "StreetMode",
      Material: "Mesh & Synthetic",
      Sole: "Rubber",
      Type: "Casual Sneakers",
      Weight: "620 g"
    }
  },
  {
    id: 4,
    name: "Gaming Mouse RGB",
    category: "Gaming",
    price: 1499,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?auto=format&fit=crop&w=900&q=85"
    ],
    rating: 4.5,
    reviews: 214,
    description: "High-precision gaming mouse with a responsive sensor, programmable buttons and customizable RGB lighting.",
    specs: {
      Brand: "GameCore",
      Sensor: "16,000 DPI",
      Buttons: "7 Programmable",
      Lighting: "RGB",
      Weight: "95 g"
    }
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    category: "Gaming",
    price: 3299,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85"
    ],
    rating: 4.7,
    reviews: 98,
    description: "Compact mechanical keyboard with tactile switches, RGB lighting and a durable metal-style frame.",
    specs: {
      Brand: "KeyForge",
      Switches: "Mechanical",
      Layout: "87 Keys",
      Lighting: "RGB",
      Connection: "USB-C"
    }
  },
  {
    id: 6,
    name: "Minimal Backpack",
    category: "Fashion",
    price: 1899,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=900&q=85"
    ],
    rating: 4.4,
    reviews: 76,
    description: "A clean everyday backpack with a laptop compartment, multiple pockets and a minimalist silhouette.",
    specs: {
      Brand: "CarryCo",
      Capacity: "22 L",
      Material: "Water-resistant Fabric",
      Laptop: "Up to 15.6-inch",
      Weight: "720 g"
    }
  }
];

const wishlistKey = "showcaseWishlist";
const reviewKey = "showcaseReviews";

function getWishlist() {
  return JSON.parse(localStorage.getItem(wishlistKey) || "[]");
}

function saveWishlist(items) {
  localStorage.setItem(wishlistKey, JSON.stringify(items));
}

function toggleWishlist(id) {
  const wishlist = getWishlist();
  const index = wishlist.indexOf(id);

  if (index === -1) {
    wishlist.push(id);
  } else {
    wishlist.splice(index, 1);
  }

  saveWishlist(wishlist);
  updateWishlistUI();
}

function updateWishlistUI() {
  const wishlist = getWishlist();
  const count = document.getElementById("wishlist-count");

  if (count) count.textContent = wishlist.length;

  document.querySelectorAll("[data-wishlist]").forEach(button => {
    const id = Number(button.dataset.wishlist);
    const active = wishlist.includes(id);
    button.classList.toggle("active", active);
    button.textContent = active ? "♥" : "♡";
  });

  const detailButton = document.getElementById("wishlist-button");
  if (detailButton) {
    const id = Number(new URLSearchParams(location.search).get("id")) || 1;
    const active = wishlist.includes(id);
    detailButton.textContent = active ? "♥ Remove from Wishlist" : "♡ Add to Wishlist";
  }
}

function renderCatalog() {
  const list = document.getElementById("product-list");
  if (!list) return;

  const search = (document.getElementById("search")?.value || "").toLowerCase().trim();
  const category = document.getElementById("category")?.value || "all";

  const filtered = products.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search);

    const matchesCategory =
      category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  list.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        <button class="heart-btn ${getWishlist().includes(product.id) ? "active" : ""}"
                data-wishlist="${product.id}"
                aria-label="Toggle wishlist">
          ${getWishlist().includes(product.id) ? "♥" : "♡"}
        </button>
      </div>
      <div class="product-info">
        <span class="tag">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price-row">
          <strong>₹${product.price.toLocaleString("en-IN")}</strong>
          <a href="product.html?id=${product.id}">View →</a>
        </div>
      </div>
    </article>
  `).join("");

  const count = document.getElementById("result-count");
  if (count) count.textContent = `${filtered.length} product${filtered.length === 1 ? "" : "s"}`;

  const noResults = document.getElementById("no-results");
  if (noResults) noResults.hidden = filtered.length !== 0;

  list.querySelectorAll("[data-wishlist]").forEach(button => {
    button.addEventListener("click", () => {
      toggleWishlist(Number(button.dataset.wishlist));
      renderCatalog();
    });
  });
}

function setupFeaturedWishlist() {
  document.querySelectorAll("[data-wishlist]").forEach(button => {
    button.addEventListener("click", () => {
      toggleWishlist(Number(button.dataset.wishlist));
    });
  });
}

function renderProductDetail() {
  const name = document.getElementById("product-name");
  if (!name) return;

  const id = Number(new URLSearchParams(location.search).get("id")) || 1;
  const product = products.find(item => item.id === id) || products[0];

  document.title = `${product.name} | ShowCase`;
  document.getElementById("product-category").textContent = product.category;
  name.textContent = product.name;
  document.getElementById("product-price").textContent =
    `₹${product.price.toLocaleString("en-IN")}`;
  document.getElementById("product-description").textContent = product.description;
  document.getElementById("rating-text").textContent =
    `${product.rating} (${product.reviews} Reviews)`;

  const mainImage = document.getElementById("mainImage");
  mainImage.src = product.gallery[0];
  mainImage.alt = product.name;

  const thumbnails = document.getElementById("thumbnails");
  thumbnails.innerHTML = product.gallery.map((image, index) => `
    <img src="${image}" alt="${product.name} view ${index + 1}"
         class="${index === 0 ? "active" : ""}" data-image="${image}">
  `).join("");

  thumbnails.querySelectorAll("img").forEach(image => {
    image.addEventListener("click", () => {
      mainImage.src = image.dataset.image;
      thumbnails.querySelectorAll("img").forEach(img => img.classList.remove("active"));
      image.classList.add("active");
    });
  });

  const specsBody = document.getElementById("specs-body");
  specsBody.innerHTML = Object.entries(product.specs)
    .map(([key, value]) => `<tr><td>${key}</td><td>${value}</td></tr>`)
    .join("");

  const wishlistButton = document.getElementById("wishlist-button");
  wishlistButton.addEventListener("click", () => {
    toggleWishlist(product.id);
  });

  renderReviews(product.id);
  setupReviewForm(product.id);
  updateWishlistUI();
}

function getReviews(productId) {
  const allReviews = JSON.parse(localStorage.getItem(reviewKey) || "{}");

  if (!allReviews[productId]) {
    allReviews[productId] = [
      { name: "Rahul", rating: 5, text: "Amazing sound quality. Best headphones under ₹5000." },
      { name: "Priya", rating: 4, text: "Very comfortable and the battery backup is excellent." }
    ];
  }

  return allReviews[productId];
}

function saveReviews(productId, reviews) {
  const allReviews = JSON.parse(localStorage.getItem(reviewKey) || "{}");
  allReviews[productId] = reviews;
  localStorage.setItem(reviewKey, JSON.stringify(allReviews));
}

function renderReviews(productId) {
  const container = document.getElementById("reviews-list");
  if (!container) return;

  const reviews = getReviews(productId);

  container.innerHTML = reviews.map(review => `
    <article class="review">
      <h4>${escapeHTML(review.name)}
        <span class="stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</span>
      </h4>
      <p>${escapeHTML(review.text)}</p>
    </article>
  `).join("");
}

function setupReviewForm(productId) {
  const form = document.getElementById("reviewForm");
  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("reviewName").value.trim();
    const rating = Number(document.getElementById("reviewRating").value);
    const text = document.getElementById("reviewText").value.trim();

    if (!name || !text) return;

    const reviews = getReviews(productId);
    reviews.unshift({ name, rating, text });
    saveReviews(productId, reviews);
    renderReviews(productId);
    form.reset();
    alert("Review submitted successfully!");
  });
}

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

document.addEventListener("DOMContentLoaded", () => {
  updateWishlistUI();
  setupFeaturedWishlist();

  const search = document.getElementById("search");
  const category = document.getElementById("category");

  if (search) {
    search.addEventListener("input", renderCatalog);
    category.addEventListener("change", renderCatalog);
    renderCatalog();
  }

  renderProductDetail();
});
