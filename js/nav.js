// Shared nav injection — call initNav(activePage) on each page
function getNavHTML(root, activePage) {
  return `
  <div class="show-tablet">
    <header class="header">
      <header class="navbar">
        <div class="navbar-left">
          <a href="${root}index.html" class="navbar-logo w-inline-block">
            <div class="light-mode"><img src="https://cdn.prod.website-files.com/68599ae5116bfda9c17727ac/6859c3fbfdb1374e108ee250_Frame%202.svg" loading="eager" alt="" height="Auto" class="navbar-logo-image"></div>
            <div class="dark-mode"><img src="https://cdn.prod.website-files.com/68599ae5116bfda9c17727ac/6859c37a82b3db989e45ff12_Frame%201.svg" loading="eager" alt="" height="Auto" class="navbar-logo-image"></div>
          </a>
        </div>
        <nav class="navbar-menu">
          <a href="${root}work/index.html" class="navbar-menu-item w-inline-block"><div class="navbar-menu-item-text">Work</div><div class="navbar-item-line"></div></a>
          <a href="${root}motion-graphics/index.html" class="navbar-menu-item w-inline-block"><div class="navbar-menu-item-text">Motion Graphics &amp; Edits</div><div class="navbar-item-line"></div></a>
          <a href="${root}about/index.html" class="navbar-menu-item w-inline-block"><div class="navbar-menu-item-text">About</div><div class="navbar-item-line"></div></a>
        </nav>
        <div class="navbar-right">
          <a href="${root}contact/index.html" class="button-text w-inline-block"><div class="button-text-inner"><div class="button-text-text">Contact</div><div class="button-text-line"></div></div></a>
          <a href="#" class="mobile-menu-toggle w-inline-block"><div class="mobile-menu-toggle-inner"><div class="menu-toggle-line top"></div><div class="menu-toggle-line bottom"></div></div></a>
        </div>
      </header>
    </header>
  </div>
  <header class="header-small">
    <header class="navbar-small">
      <div class="navbar-small-left">
        <a href="${root}index.html" class="navbar-logo w-inline-block">
          <img loading="eager" height="Auto" alt="" src="https://cdn.prod.website-files.com/68599ae5116bfda9c17727ac/6859c37a82b3db989e45ff12_Frame%201.svg" class="navbar-logo-image">
        </a>
      </div>
      <div class="navbar-small-right">
        <nav class="navbar-small-menu">
          <a href="${root}work/index.html" class="navbar-menu-item w-inline-block"><div class="navbar-menu-item-text">Work</div><div class="navbar-item-line"></div></a>
          <a href="${root}motion-graphics/index.html" class="navbar-menu-item w-inline-block"><div class="navbar-menu-item-text">Motion Graphics &amp; Edits</div><div class="navbar-item-line"></div></a>
          <a href="${root}about/index.html" class="navbar-menu-item w-inline-block"><div class="navbar-menu-item-text">About</div><div class="navbar-item-line"></div></a>
        </nav>
        <a href="${root}contact/index.html" class="button-text w-inline-block"><div class="button-text-inner"><div class="button-text-text">Contact</div><div class="button-text-line"></div></div></a>
      </div>
    </header>
  </header>
  <div class="mobile-menu" id="mobile-menu">
    <div class="mobile-menu-wrapper">
      <nav class="mobile-menu-nav">
        <a href="${root}work/index.html" class="mobile-menu-nav-item w-inline-block"><div class="menu-nav-item-text">Work</div></a>
        <a href="${root}motion-graphics/index.html" class="mobile-menu-nav-item w-inline-block"><div class="menu-nav-item-text">Motion Graphics</div></a>
        <a href="${root}about/index.html" class="mobile-menu-nav-item w-inline-block"><div class="menu-nav-item-text">About</div></a>
        <a href="${root}contact/index.html" class="mobile-menu-nav-item w-inline-block"><div class="menu-nav-item-text">Contact</div></a>
      </nav>
    </div>
    <button id="mobile-close" style="position:absolute;top:28px;right:28px;background:none;border:none;cursor:pointer;width:30px;height:30px;display:flex;align-items:center;justify-content:center;">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
  </div>`;
}

function getFooterHTML() {
  return `
  <footer class="footer">
    <div class="footer-bottom">
      <div class="footer-nav">
        <div class="footer-column">
          <div class="text-meta-small text-color-muted-inverse">(Socials)</div>
          <nav class="nav center-phone-landscape">
            <a href="https://www.linkedin.com/in/jmadridart/" target="_blank" rel="noopener" class="nav-item inverse w-inline-block"><div class="nav-item-text">Linkedin</div><div class="nav-item-line inverse"></div></a>
            <a href="https://www.instagram.com/jmadridart/" target="_blank" rel="noopener" class="nav-item inverse w-inline-block"><div class="nav-item-text">Instagram</div><div class="nav-item-line inverse"></div></a>
            <a href="https://jmadridphoto.mypixieset.com/" target="_blank" rel="noopener" class="nav-item inverse w-inline-block"><div class="nav-item-text">Photography</div><div class="nav-item-line inverse"></div></a>
          </nav>
        </div>
      </div>
      <div class="footer-bottom-grid">
        <div class="text-meta">JOSH MADRID 2026</div>
      </div>
    </div>
  </footer>
  <div class="toggle-color"><div class="toggle-color-dot"></div></div>
  <div class="pageloader"><div class="overflow-hidden"><div class="pageloader-heading">JOSH MADRID PORTFOLIO</div></div></div>`;
}
