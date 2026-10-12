/* Shared chrome: header, drawer, footer, sheets, tab bar.
   Pages include <div id="chrome-top"></div> and <div id="chrome-bottom"></div>
   and set <body data-page="shop|about|contact|product"> for active-state. */
(function(){
  const page = document.body.dataset.page || "";
  const cur = p => page===p ? ' aria-current="page"' : "";
  const ICON = {
    search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    user:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>',
    heart:'<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>',
    bag:'<svg viewBox="0 0 24 24"><path d="M5 8h14l-1 13H6L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
    home:'<svg viewBox="0 0 24 24"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></svg>',
    grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>'
  };

  const top = `
<div class="note">Design mockup for review. Product names and prices from bravomalibu.com. Photography from bravomalibu.com and the Bravo Google Drive folder.</div>
<div class="topbar">
  <div class="wrap">
    <div class="left">
      <a href="contact.html">158 S. Beverly Drive, Beverly Hills</a>
      <a href="contact.html#book">Book a personal styling session</a>
    </div>
    <div class="right">
      <a href="https://www.instagram.com/bravomalibu/">Instagram</a>
      <a href="#">United States (USD $)</a>
      <a href="#">Log in</a>
    </div>
  </div>
</div>
<header class="site">
  <div class="wrap head-row">
    <div class="head-left">
      <button class="icon-btn burger" aria-label="Open menu" id="openDrawer"><svg viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18"/></svg></button>
      <a href="collection.html?c=new">New In</a>
      <a href="collection.html?c=dresses">Dresses</a>
      <a href="collection.html?c=bags">Bags</a>
    </div>
    <a class="logo" href="index.html" aria-label="Bravo by Michal Avital home"><span class="mark">BRAVO</span><span class="sub">by Michal Avital</span></a>
    <div class="head-right">
      <button class="icon-btn" aria-label="Search" data-sheet="search">${ICON.search}</button>
      <a class="icon-btn hide-sm" href="#" aria-label="Account">${ICON.user}</a>
      <button class="icon-btn hide-sm" aria-label="Wishlist" data-sheet="wish">${ICON.heart}<span class="badge" id="wishCount">0</span></button>
      <button class="icon-btn" aria-label="Bag" data-sheet="cart">${ICON.bag}<span class="badge" id="cartCount">0</span></button>
    </div>
  </div>
  <nav class="navrow" aria-label="Main">
    <ul class="mainnav">
      <li><a href="index.html">Home</a></li>
      <li class="has-mega">
        <a href="collection.html"${cur("shop")}>Shop</a>
        <div class="mega">
          <div><h4>Clothing</h4><ul>
            <li><a href="collection.html?c=dresses">Dresses</a></li><li><a href="collection.html?c=tops">Tops</a></li><li><a href="collection.html?c=blouses">Blouses</a></li><li><a href="collection.html?c=basics">Basics</a></li><li><a href="collection.html?c=bottoms">Bottoms</a></li><li><a href="collection.html?c=jackets">Jackets</a></li>
          </ul></div>
          <div><h4>More</h4><ul>
            <li><a href="collection.html?c=bags">Bags</a></li><li><a href="collection.html?c=accessories">Accessories</a></li><li><a href="collection.html?c=new">New in</a></li><li><a href="collection.html">View all</a></li>
          </ul></div>
          <figure><img src="https://lh3.googleusercontent.com/d/1KWWAtiK7dOAGTwGgDSf_gRsl68-aicqs=w700" alt="Bravo new season look" onerror="driveErr(this)"><figcaption>New season</figcaption></figure>
        </div>
      </li>
      <li><a href="product.html?p=11">The Famous Bag</a></li>
      <li><a href="about.html"${cur("about")}>Who We Are</a></li>
      <li><a href="contact.html"${cur("contact")}>Contact Us</a></li>
    </ul>
  </nav>
</header>
<div class="drawer" id="drawer" aria-hidden="true">
  <div class="scrim" data-close></div>
  <nav aria-label="Mobile">
    <button class="close" data-close aria-label="Close menu">×</button>
    <div style="clear:both;height:12px"></div>
    <a href="index.html">Home</a>
    <a href="collection.html?c=new">New In</a>
    <a href="collection.html">Shop all</a>
    <a href="product.html?p=11">The Famous Bag</a>
    <a href="about.html">Who We Are</a>
    <a href="contact.html">Contact Us</a>
    <a href="#">Log in</a>
  </nav>
</div>`;

  const bottom = `
<footer>
  <div class="wrap">
    <div class="fgrid">
      <div>
        <div class="logo"><span class="mark">BRAVO</span><span class="sub">by Michal Avital</span></div>
        <p class="about">Effortlessly chic women's clothing with coastal elegance, since 2015.</p>
      </div>
      <div><h4>Shop</h4><ul><li><a href="collection.html?c=dresses">Dresses</a></li><li><a href="collection.html?c=blouses">Tops &amp; blouses</a></li><li><a href="collection.html?c=bags">Bags</a></li><li><a href="collection.html?c=accessories">Accessories</a></li><li><a href="collection.html?c=new">New in</a></li></ul></div>
      <div><h4>Help</h4><ul><li><a href="contact.html">Contact us</a></li><li><a href="contact.html#faq">Shipping &amp; returns</a></li><li><a href="#">Refund policy</a></li><li><a href="#">Photography copyright</a></li><li><a href="#">Terms of service</a></li></ul></div>
      <div><h4>Visit</h4><ul><li>158 S. Beverly Drive</li><li>Beverly Hills, CA 90210</li><li><a href="https://maps.app.goo.gl/ZPWMWd4N5RVzx9r58">Google Maps</a></li><li><a href="https://www.instagram.com/bravomalibu/">Instagram</a></li></ul></div>
    </div>
    <div class="fbottom">
      <span>© 2026 Bravo Michal Avital</span>
      <div class="pay"><span>Amex</span><span>Diners</span><span>Discover</span><span>Mastercard</span><span>PayPal</span><span>Shop Pay</span><span>Venmo</span><span>Visa</span></div>
    </div>
  </div>
</footer>

<div class="sheet" id="sheet-search" aria-hidden="true" role="dialog" aria-label="Search">
  <div class="sbg" data-sheet-close></div>
  <div class="sheet-panel"><div class="grab"></div>
    <div class="sheet-head"><h3>Search</h3><button class="x" data-sheet-close aria-label="Close">×</button></div>
    <div class="sheet-body"><label class="search-field">${ICON.search}<input id="searchInput" type="search" placeholder="Search blouses, jeans, bags" aria-label="Search products" enterkeyhint="search"></label>
      <div class="chips" id="trend"><button class="chip">Button-up</button><button class="chip">Satin</button><button class="chip">Jeans</button><button class="chip">Dress</button><button class="chip">Bag</button></div>
      <div class="s-label" id="searchLabel">Popular right now</div><div id="searchResults"></div></div>
  </div>
</div>
<div class="sheet" id="sheet-cart" aria-hidden="true" role="dialog" aria-label="Your bag">
  <div class="sbg" data-sheet-close></div>
  <div class="sheet-panel"><div class="grab"></div>
    <div class="sheet-head"><h3>Your bag</h3><button class="x" data-sheet-close aria-label="Close">×</button></div>
    <div class="sheet-body"><div class="ship-msg" id="shipMsg"></div><div class="ship-bar"><i id="shipBar"></i></div><div id="cartBody"></div></div>
    <div class="sheet-foot"><div class="row"><span>Subtotal</span><span id="subtotal">$0.00</span></div><button class="btn-block" id="checkoutBtn" disabled>Check out</button><div class="hint">Free returns within 14 days · Secure checkout</div></div>
  </div>
</div>
<div class="sheet" id="sheet-wish" aria-hidden="true" role="dialog" aria-label="Wishlist">
  <div class="sbg" data-sheet-close></div>
  <div class="sheet-panel"><div class="grab"></div>
    <div class="sheet-head"><h3>Wishlist</h3><button class="x" data-sheet-close aria-label="Close">×</button></div>
    <div class="sheet-body"><div id="wishBody"></div></div>
  </div>
</div>
<div class="sheet" id="sheet-shop" aria-hidden="true" role="dialog" aria-label="Shop">
  <div class="sbg" data-sheet-close></div>
  <div class="sheet-panel"><div class="grab"></div>
    <div class="sheet-head"><h3>Shop</h3><button class="x" data-sheet-close aria-label="Close">×</button></div>
    <div class="sheet-body"><div class="shop-list">
      <a href="collection.html?c=new">New in</a><a href="collection.html?c=dresses">Dresses</a><a href="collection.html?c=tops">Tops</a><a href="collection.html?c=blouses">Blouses</a><a href="collection.html?c=basics">Basics</a><a href="collection.html?c=bottoms">Bottoms</a><a href="collection.html?c=jackets">Jackets</a><a href="product.html?p=11">The Famous Bag</a><a href="collection.html?c=bags">Bags</a><a href="collection.html?c=accessories">Accessories</a><a href="collection.html">View all</a><a href="about.html">Who we are</a><a href="contact.html">Contact us</a>
    </div></div>
  </div>
</div>
<div class="sheet" id="sheet-qv" aria-hidden="true" role="dialog" aria-label="Quick view">
  <div class="sbg" data-sheet-close></div>
  <div class="sheet-panel"><div class="grab"></div>
    <div class="sheet-head"><h3>Quick view</h3><button class="x" data-sheet-close aria-label="Close">×</button></div>
    <div class="sheet-body"><div id="qvBody"></div></div>
    <div class="sheet-foot"><button class="btn-block" id="qvAdd">Add to bag</button></div>
  </div>
</div>
<nav class="tabbar" aria-label="App navigation">
  <a href="index.html" data-tab-go="home">${ICON.home}Home</a>
  <button data-sheet="shop">${ICON.grid}Shop</button>
  <button data-sheet="search">${ICON.search}Search</button>
  <button data-sheet="wish">${ICON.heart}Wishlist<span class="badge" id="tabWish" hidden>0</span></button>
  <button data-sheet="cart">${ICON.bag}Bag<span class="badge" id="tabCart" hidden>0</span></button>
</nav>
<div class="toast" id="toast" role="status"></div>`;

  document.getElementById("chrome-top").outerHTML = top;
  document.getElementById("chrome-bottom").outerHTML = bottom;
})();
