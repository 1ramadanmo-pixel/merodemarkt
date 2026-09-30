const products = [
  { id: 1, name: "Biologische bananen", category: "Groenten & fruit", price: 1.99, unit: "per kg", image: "./assets/produce-products.jpg", badge: "Dagvers" },
  { id: 2, name: "Aardbeien", category: "Groenten & fruit", price: 3.49, unit: "500 g", image: "./assets/produce-products.jpg", badge: "Seizoen" },
  { id: 3, name: "Trostomaten", category: "Groenten & fruit", price: 2.29, unit: "per kg", image: "./assets/produce-products.jpg" },
  { id: 4, name: "Avocado", category: "Groenten & fruit", price: 1.49, unit: "per stuk", image: "./assets/produce-products.jpg" },
  { id: 5, name: "Verse komkommer", category: "Groenten & fruit", price: 0.89, unit: "per stuk", image: "./assets/produce-products.jpg" },
  { id: 6, name: "Jonagold appels", category: "Groenten & fruit", price: 2.19, unit: "per kg", image: "./assets/produce-products.jpg" },
  { id: 7, name: "Volle melk", category: "Zuivel & eieren", price: 1.25, unit: "1 liter", image: "./assets/dairy-products.jpg" },
  { id: 8, name: "Jonge Goudse kaas", category: "Zuivel & eieren", price: 4.99, unit: "stuk", image: "./assets/dairy-products.jpg", badge: "Favoriet" },
  { id: 9, name: "Scharreleieren", category: "Zuivel & eieren", price: 2.89, unit: "10 stuks", image: "./assets/dairy-products.jpg" },
  { id: 10, name: "Griekse yoghurt", category: "Zuivel & eieren", price: 2.49, unit: "1 kg", image: "./assets/dairy-products.jpg" },
  { id: 11, name: "Volkorenbrood", category: "Bakkerij", price: 2.49, unit: "heel brood", image: "./assets/bakery-products.jpg", badge: "Vers gebakken" },
  { id: 12, name: "Roombotercroissants", category: "Bakkerij", price: 1.79, unit: "2 stuks", image: "./assets/bakery-products.jpg" },
  { id: 13, name: "Wit stokbrood", category: "Bakkerij", price: 1.10, unit: "per stuk", image: "./assets/bakery-products.jpg" },
  { id: 14, name: "Verse sinaasappelsap", category: "Dranken", price: 2.99, unit: "1 liter", image: "./assets/drinks-products.jpg" },
  { id: 15, name: "Bruisend mineraalwater", category: "Dranken", price: 0.95, unit: "1,5 liter", image: "./assets/drinks-products.jpg" },
  { id: 16, name: "Basmati rijst", category: "Voorraadkast", price: 2.39, unit: "1 kg", image: "./assets/pantry-products.jpg" },
  { id: 17, name: "Rode linzen", category: "Voorraadkast", price: 1.79, unit: "500 g", image: "./assets/pantry-products.jpg" },
  { id: 18, name: "Extra vierge olijfolie", category: "Voorraadkast", price: 6.99, unit: "750 ml", image: "./assets/pantry-products.jpg" },
  { id: 19, name: "Runderbiefstuk", category: "Vlees", price: 5.99, unit: "250 g", image: "./imge/4.jpg" },
  { id: 20, name: "Malse kipfilet", category: "Vlees", price: 4.99, unit: "400 g", image: "./imge/4.jpg" },
  { id: 21, name: "Coca-Cola Original Taste", brand: "Coca-Cola", category: "Dranken", price: 2.19, unit: "1,5 L", image: "./assets/products/coca-cola-original-15l.jpg", packshot: true },
  { id: 22, name: "Nutella hazelnootpasta", brand: "Nutella", category: "Voorraadkast", price: 7.49, unit: "1 kg", image: "./assets/products/nutella-1kg.jpg", packshot: true },
  { id: 23, name: "Panzani spaghetti", brand: "Panzani", category: "Voorraadkast", price: 1.69, unit: "500 g", image: "./assets/products/panzani-spaghetti-500g.jpg", packshot: true },
  { id: 24, name: "Lotus Biscoff Speculoos", brand: "Lotus", category: "Snacks & zoet", price: 2.99, unit: "250 g", image: "./assets/products/lotus-biscoff-250g.jpg", packshot: true },
  { id: 25, name: "Heinz Tomato Ketchup", brand: "Heinz", category: "Voorraadkast", price: 3.29, unit: "400 ml", image: "./assets/products/heinz-ketchup-400ml.jpg", packshot: true },
  { id: 26, name: "Lay's Paprika Chips", brand: "Lay's", category: "Snacks & zoet", price: 2.99, unit: "275 g", image: "./assets/products/lays-paprika-275g.jpg", packshot: true },
  { id: 27, name: "Danone Oikos aardbei", brand: "Danone", category: "Zuivel & eieren", price: 3.49, unit: "500 g", image: "./assets/products/oikos-aardbei-500g.jpg", packshot: true },
  { id: 28, name: "Milka Caramelo", brand: "Milka", category: "Snacks & zoet", price: 1.59, unit: "100 g", image: "./assets/products/milka-caramelo-100g.jpg", packshot: true }
];

const categories = ["Alles", "Groenten & fruit", "Zuivel & eieren", "Bakkerij", "Dranken", "Voorraadkast", "Snacks & zoet", "Vlees"];
let selectedCategory = "Alles";
let cart = readCart();
let toastTimer;

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("merode-markt-cart") || "[]");
    return Array.isArray(saved) ? saved.filter(function (item) {
      return products.some(function (product) { return product.id === item.id; }) && Number(item.quantity) > 0;
    }) : [];
  } catch (error) {
    return [];
  }
}

function saveCart() {
  localStorage.setItem("merode-markt-cart", JSON.stringify(cart));
}

function formatPrice(amount) {
  return new Intl.NumberFormat("nl-BE", { style: "currency", currency: "EUR" }).format(amount);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, function (character) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
  });
}

function renderHome() {
  const page = document.getElementById("page-content");
  const categoryMarkup = categories.map(function (category) {
    return '<button class="category-chip' + (category === selectedCategory ? " active" : "") + '" type="button" data-category="' + escapeHTML(category) + '" aria-pressed="' + (category === selectedCategory) + '">' + escapeHTML(category) + "</button>";
  }).join("");

  page.innerHTML =
    '<div class="content-shell">' +
      '<section class="hero">' +
        '<div class="hero-copy">' +
          '<span class="hero-kicker"><span class="hero-kicker-dot"></span> Jouw buurtwinkel in Turnhout</span>' +
          '<h1>Goed eten.<br><em>Een goed gevoel.</em></h1>' +
          '<p>Ontdek verse favorieten en vertrouwde producten voor elke dag. Met zorg gekozen, vlak bij jou.</p>' +
          '<div class="hero-actions"><button class="button button-primary" type="button" data-scroll-products>Bekijk het assortiment <span aria-hidden="true">→</span></button><button class="button button-text" type="button" data-action="how-to-order">Zo bestel je <span aria-hidden="true">↗</span></button></div>' +
          '<div class="hero-points"><span><b>✓</b> Dagvers gekozen</span><span><b>✓</b> Persoonlijke service</span></div>' +
        '</div>' +
        '<figure class="hero-photo"><img src="./assets/market-hero.jpg" alt="Verse groenten, fruit en brood op een markttafel" fetchpriority="high" /></figure>' +
        '<div class="hero-stamp"><span class="stamp-leaf" aria-hidden="true">✳</span><span>Vers<br />voor jou</span></div>' +
      '</section>' +
      '<section class="benefits" aria-label="Waarom Merode Markt">' +
        '<article class="benefit"><span class="benefit-icon">✳</span><div><h2>Elke dag vers</h2><p>Een kleurrijke selectie voor elke maaltijd.</p></div></article>' +
        '<article class="benefit"><span class="benefit-icon">♡</span><div><h2>Met zorg gekozen</h2><p>Kwaliteit en smaak staan voorop.</p></div></article>' +
        '<article class="benefit"><span class="benefit-icon">↗</span><div><h2>Bestel eenvoudig</h2><p>Rond je boodschappen af via WhatsApp.</p></div></article>' +
      '</section>' +
      '<section class="shop-section" id="assortiment">' +
        '<div class="section-heading">' +
          '<div><span class="eyebrow">Van vers tot voorraadkast</span><h2>Ontdek het assortiment</h2><p>Favorieten voor op tafel, met één klik in je winkelwagen.</p></div>' +
          '<label class="search-box"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m16 16 4 4"></path></svg><input id="product-search" type="search" placeholder="Zoek een product..." aria-label="Zoek producten" autocomplete="off" /><kbd>⌘ K</kbd></label>' +
        '</div>' +
        '<div class="category-row" aria-label="Filter op categorie">' + categoryMarkup + '</div>' +
        '<div class="results-line"><span id="result-count"></span><span class="results-note">Indicatieve prijzen · bevestiging via WhatsApp</span></div>' +
        '<div class="products-grid" id="products-grid"></div>' +
      '</section>' +
      '<section class="order-banner" id="bestellen">' +
        '<div class="order-banner-icon" aria-hidden="true">♡</div>' +
        '<div><span class="eyebrow">Makkelijk geregeld</span><h2>Jouw boodschappen, zo besteld.</h2><p>Stel je winkelwagen samen en verstuur je lijst met één klik via WhatsApp.</p></div>' +
        '<button class="button button-light" type="button" data-action="open-cart">Bekijk winkelwagen <span aria-hidden="true">→</span></button>' +
      '</section>' +
    '</div>';

  renderProducts();
}

function productMarkup(product) {
  const badge = product.badge ? '<span class="product-badge">' + escapeHTML(product.badge) + "</span>" : "";
  const photoClass = product.packshot ? " product-card-packshot" : "";
  return '<article class="product-card' + photoClass + '">' +
    '<div class="product-media">' +
      '<img src="' + escapeHTML(product.image) + '" alt="' + escapeHTML(product.name) + '" loading="lazy" decoding="async" />' +
      badge +
      '<button class="quick-add" type="button" data-action="add" data-id="' + product.id + '" aria-label="' + escapeHTML(product.name) + ' toevoegen"><span aria-hidden="true">+</span></button>' +
    '</div>' +
    '<div class="product-details">' +
      '<span class="product-category">' + escapeHTML(product.category) + '</span>' +
      '<h3>' + escapeHTML(product.name) + '</h3>' +
      '<div class="product-bottom"><div><strong>' + formatPrice(product.price) + '</strong><span class="product-unit">' + escapeHTML(product.unit) + '</span></div>' +
      '<button class="add-button" type="button" data-action="add" data-id="' + product.id + '">Toevoegen <span aria-hidden="true">+</span></button></div>' +
    '</div>' +
  '</article>';
}

function renderProducts() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;
  const search = (document.getElementById("product-search").value || "").trim().toLocaleLowerCase("nl-BE");
  const filtered = products.filter(function (product) {
    const matchesCategory = selectedCategory === "Alles" || product.category === selectedCategory;
    const matchesSearch = !search || (product.name + " " + product.category + " " + (product.brand || "")).toLocaleLowerCase("nl-BE").includes(search);
    return matchesCategory && matchesSearch;
  });

  document.getElementById("result-count").textContent = filtered.length + (filtered.length === 1 ? " product" : " producten");
  grid.innerHTML = filtered.length ? filtered.map(productMarkup).join("") : '<div class="empty-results"><span aria-hidden="true">⌕</span><h3>Geen producten gevonden</h3><p>Pas je zoekopdracht aan of kies een andere categorie.</p></div>';
}

function renderCart() {
  const count = cart.reduce(function (sum, item) { return sum + item.quantity; }, 0);
  const total = cart.reduce(function (sum, item) { return sum + item.price * item.quantity; }, 0);
  document.getElementById("cart-count").textContent = count;
  document.getElementById("cart-total").textContent = formatPrice(total);

  const checkoutButton = document.querySelector('[data-action="checkout"]');
  checkoutButton.disabled = cart.length === 0;

  const items = document.getElementById("cart-items");
  if (!cart.length) {
    items.innerHTML = '<div class="cart-empty"><span aria-hidden="true">♧</span><h3>Je winkelwagen is nog leeg</h3><p>Voeg iets lekkers toe uit het assortiment.</p><button type="button" class="text-action" data-action="close-cart">Verder winkelen <span aria-hidden="true">→</span></button></div>';
    return;
  }

  items.innerHTML = cart.map(function (item) {
    return '<article class="cart-item">' +
      '<img src="' + escapeHTML(item.image) + '" alt="" />' +
      '<div class="cart-item-info"><strong>' + escapeHTML(item.name) + '</strong><span>' + formatPrice(item.price) + " · " + escapeHTML(item.unit) + '</span>' +
      '<div class="quantity-control"><button type="button" data-action="decrease" data-id="' + item.id + '" aria-label="Minder ' + escapeHTML(item.name) + '">−</button><span>' + item.quantity + '</span><button type="button" data-action="increase" data-id="' + item.id + '" aria-label="Meer ' + escapeHTML(item.name) + '">+</button></div></div>' +
      '<button class="remove-item" type="button" data-action="remove" data-id="' + item.id + '" aria-label="' + escapeHTML(item.name) + ' verwijderen">×</button>' +
      '<strong class="cart-item-subtotal">' + formatPrice(item.price * item.quantity) + '</strong>' +
    '</article>';
  }).join("");
}

function addToCart(id) {
  const product = products.find(function (item) { return item.id === Number(id); });
  if (!product) return;
  const existing = cart.find(function (item) { return item.id === product.id; });
  if (existing) existing.quantity += 1;
  else cart.push(Object.assign({}, product, { quantity: 1 }));
  saveCart();
  renderCart();
  showToast(product.name + " toegevoegd");
}

function updateQuantity(id, amount) {
  const item = cart.find(function (entry) { return entry.id === Number(id); });
  if (!item) return;
  item.quantity += amount;
  if (item.quantity <= 0) cart = cart.filter(function (entry) { return entry.id !== Number(id); });
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(function (entry) { return entry.id !== Number(id); });
  saveCart();
  renderCart();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(function () { toast.classList.remove("visible"); }, 2400);
}

function openCart() {
  const panel = document.getElementById("cart-panel");
  panel.hidden = false;
  document.querySelector(".cart-trigger").setAttribute("aria-expanded", "true");
}

function closeCart() {
  document.getElementById("cart-panel").hidden = true;
  document.querySelector(".cart-trigger").setAttribute("aria-expanded", "false");
}

function checkout() {
  if (!cart.length) return;
  const lines = cart.map(function (item) {
    return "• " + item.name + " (" + item.quantity + " × " + formatPrice(item.price) + ") = " + formatPrice(item.price * item.quantity);
  });
  const total = cart.reduce(function (sum, item) { return sum + item.price * item.quantity; }, 0);
  const message = "Hallo Merode Markt, ik wil graag het volgende bestellen:\n\n" + lines.join("\n") + "\n\nIndicatief totaal: " + formatPrice(total) + "\nGraag de definitieve prijs en beschikbaarheid bevestigen.\n\nAlvast bedankt!";
  window.open("https://wa.me/32470685016?text=" + encodeURIComponent(message), "_blank", "noopener,noreferrer");
}

function renderAbout() {
  document.getElementById("page-content").innerHTML =
    '<div class="content-shell inner-page">' +
      '<section class="page-intro"><span class="eyebrow">Aangenaam, wij zijn Merode Markt</span><h1>Een vertrouwd adres<br /><em>voor elke dag.</em></h1><p>Bij Merode Markt vind je dagelijkse boodschappen en verse producten, met een warm welkom en persoonlijke service.</p></section>' +
      '<section class="story-card"><div class="story-mark"><img src="./assets/merode-markt.svg" alt="" /></div><div><span class="eyebrow">Onze winkel</span><h2>Dichtbij, vers en vertrouwd</h2><p>We willen het je makkelijk maken om goed en lekker te eten. Daarom vind je bij ons een zorgvuldig samengesteld assortiment: van groenten en fruit tot brood, zuivel en producten voor je voorraadkast.</p><p>Kom gerust langs in Turnhout of kies je favorieten online. Je bestelling rond je eenvoudig af via WhatsApp.</p><a href="#winkel" class="button button-primary" data-page="winkel">Bekijk het assortiment <span aria-hidden="true">→</span></a></div></section>' +
      '<section class="values-grid"><article><span>01</span><h3>Vers voorop</h3><p>Een dagelijkse selectie van vertrouwde producten en verse favorieten.</p></article><article><span>02</span><h3>Persoonlijk welkom</h3><p>Een buurtwinkel waar aandacht en service bij het boodschappen doen horen.</p></article><article><span>03</span><h3>Eenvoudig bestellen</h3><p>Stel je lijst samen en stuur je bestelling rechtstreeks naar ons via WhatsApp.</p></article></section>' +
    '</div>';
}

function renderContact() {
  document.getElementById("page-content").innerHTML =
    '<div class="content-shell inner-page">' +
      '<section class="page-intro compact"><span class="eyebrow">We helpen je graag</span><h1>Kom gerust <em>langs.</em></h1><p>Heb je een vraag over ons assortiment of je bestelling? Neem contact op of bezoek de winkel.</p></section>' +
      '<section class="contact-layout"><div class="contact-card"><div class="contact-block"><span class="contact-icon">⌖</span><div><span class="eyebrow">Bezoek ons</span><h2>Merode Markt</h2><p>2300 Turnhout, België</p><a href="https://maps.google.com/?q=Merode+Markt+Turnhout" target="_blank" rel="noreferrer">Route bekijken <span aria-hidden="true">↗</span></a></div></div><div class="contact-block"><span class="contact-icon">☎</span><div><span class="eyebrow">Bel ons</span><h2>+32 470 68 50 16</h2><a href="tel:+32470685016">Bel de winkel <span aria-hidden="true">↗</span></a></div></div><div class="contact-block"><span class="contact-icon">◷</span><div><span class="eyebrow">Openingstijden</span><h2>We staan voor je klaar</h2><p>Maandag – vrijdag <strong>08:00 – 20:00</strong><br />Zaterdag <strong>08:00 – 18:00</strong><br />Zondag <strong>Gesloten</strong></p></div></div><a class="email-link" href="mailto:info@markt.be">info@markt.be <span aria-hidden="true">↗</span></a></div><div class="map-card"><iframe title="Kaart van Merode Markt in Turnhout" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2210.9502418189318!2d4.942062023950756!3d51.32204372422805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6b355eab2e91f%3A0x940dc5a6dfca4459!2sMerode%20Markt!5e1!3m2!1sar!2sbe!4v1780257014722!5m2!1sar!2sbe" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></section>' +
    '</div>';
}

function renderPrivacy() {
  document.getElementById("page-content").innerHTML =
    '<div class="content-shell inner-page privacy-page">' +
      '<section class="page-intro compact"><span class="eyebrow">Duidelijk en zorgvuldig</span><h1>Privacybeleid</h1><p>Laatst bijgewerkt: 29 september 2026</p></section>' +
      '<article class="privacy-card"><h2>Bestellingen via WhatsApp</h2><p>Als je op de bestelknop drukt, opent WhatsApp met de inhoud van je winkelwagen. Je kiest zelf of je het bericht verstuurt. WhatsApp verwerkt gegevens volgens het eigen privacybeleid.</p><h2>Winkelwagen</h2><p>De inhoud van je winkelwagen wordt alleen in je browser bewaard, zodat je selectie behouden blijft wanneer je de pagina opnieuw opent. Je kunt producten op elk moment verwijderen.</p><h2>Contact</h2><p>Voor vragen over privacy kun je contact opnemen met Merode Markt via <a href="mailto:info@markt.be">info@markt.be</a>.</p><p class="privacy-identity">Merode Markt · 2300 Turnhout, België · +32 470 68 50 16</p></article>' +
    '</div>';
}

function renderPage(page) {
  const pages = {
    winkel: renderHome,
    "over-ons": renderAbout,
    contact: renderContact,
    privacy: renderPrivacy
  };
  const pageName = pages[page] ? page : "winkel";
  pages[pageName]();
  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.classList.toggle("active", link.dataset.page === pageName);
  });
  document.querySelector(".main-nav").classList.remove("open");
  document.querySelector(".mobile-menu-toggle").setAttribute("aria-expanded", "false");
  closeCart();
  document.getElementById("current-year").textContent = new Date().getFullYear();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setPage(page) {
  if (window.location.hash !== "#" + page) history.pushState(null, "", "#" + page);
  renderPage(page);
}

document.addEventListener("click", function (event) {
  const clickedInsideCart = Boolean(event.target.closest(".cart-panel"));
  const pageLink = event.target.closest("[data-page]");
  if (pageLink) {
    event.preventDefault();
    setPage(pageLink.dataset.page);
    document.querySelector(".main-nav").classList.remove("open");
    document.querySelector(".mobile-menu-toggle").setAttribute("aria-expanded", "false");
    return;
  }

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    selectedCategory = categoryButton.dataset.category;
    document.querySelectorAll(".category-chip").forEach(function (button) {
      const active = button.dataset.category === selectedCategory;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    renderProducts();
    return;
  }

  if (event.target.closest("[data-scroll-products]")) {
    document.getElementById("assortiment").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    const action = actionButton.dataset.action;
    if (action === "add") addToCart(actionButton.dataset.id);
    if (action === "increase") updateQuantity(actionButton.dataset.id, 1);
    if (action === "decrease") updateQuantity(actionButton.dataset.id, -1);
    if (action === "remove") removeFromCart(actionButton.dataset.id);
    if (action === "open-cart") {
      openCart();
      return;
    }
    if (action === "close-cart") closeCart();
    if (action === "checkout") checkout();
    if (action === "how-to-order") {
      document.getElementById("bestellen").scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  if (event.target.closest(".cart-trigger")) {
    const panel = document.getElementById("cart-panel");
    if (panel.hidden) openCart();
    else closeCart();
  }

  if (event.target.closest(".mobile-menu-toggle")) {
    const menu = document.querySelector(".main-nav");
    const isOpen = menu.classList.toggle("open");
    event.target.closest(".mobile-menu-toggle").setAttribute("aria-expanded", String(isOpen));
  }

  if (!clickedInsideCart && !event.target.closest(".cart-trigger")) closeCart();
});

document.addEventListener("input", function (event) {
  if (event.target.id === "product-search") renderProducts();
});

window.addEventListener("hashchange", function () {
  renderPage(window.location.hash.slice(1));
});

window.addEventListener("popstate", function () {
  renderPage(window.location.hash.slice(1));
});

document.addEventListener("keydown", function (event) {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    const search = document.getElementById("product-search");
    if (search) {
      event.preventDefault();
      search.focus();
    }
  }
  if (event.key === "Escape") {
    closeCart();
    document.querySelector(".main-nav").classList.remove("open");
    document.querySelector(".mobile-menu-toggle").setAttribute("aria-expanded", "false");
  }
});

renderPage(window.location.hash.slice(1) || "winkel");
renderCart();
