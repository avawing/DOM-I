const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo


let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

document.getElementById('cta-img').setAttribute('src', siteContent['cta']['img-src']);
document.getElementById('middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

document.querySelector("h1").textContent = siteContent['cta']['h1'];
document.querySelector('button').textContent = siteContent['cta']['button'];
document.querySelector("footer p").textContent = siteContent['footer']['copyright'];

document.querySelector('.text-content h4').textContent = siteContent['main-content']['features-h4'];
document.querySelector('.text-content p').textContent = siteContent['main-content']['features-content'];
document.querySelector('.top-content div:nth-child(2) h4').textContent = siteContent['main-content']['about-h4'];
document.querySelector('.top-content div:nth-child(2) p').textContent = siteContent['main-content']['about-content'];






/*let main = document.querySelector('.text-content');
main.innerHTML = `<h4>Features</h4>
<p>Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
    in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
    scelerisque quis.</p>`;

let sub = document.querySelector("body > div > section.main-content > div.top-content > div:nth-child(2)");
sub.innerHTML = `<h4>About</h4>
<p>About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
    interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
    scelerisque quis.</p>`;




let navi = document.querySelector('.container > header > nav');
navi.innerHTML = `
<a href="#">Services</a>
                <a href="#">Product</a>
                <a href="#">Vision</a>
                <a href="#">Features</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
`

let bottomtxt = document.querySelector("body > div > section.main-content > div.bottom-content > div:nth-child(1)");
bottomtxt.innerHTML = `<h4>Services</h4>
                    <p>Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
                        in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
                        scelerisque quis.</p>`;

let midtxt = document.querySelector("body > div > section.main-content > div.bottom-content > div:nth-child(2)");
midtxt.innerHTML = `<h4>Product</h4>
<p>Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
    interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
    scelerisque quis.</p>`;

let bottext = document.querySelector("body > div > section.main-content > div.bottom-content > div:nth-child(3)");
bottext.innerHTML = `<h4>Vision</h4>
<p>Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
    interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
    scelerisque quis.</p>`

let contact = document.querySelector('.contact');
contact.innerHTML = `<h4>Contact</h4>
  <p>123 Way 456 Street<br>
  Somewhere, USA</p>
  <p>1 (888) 888-8888</p>
  <p>sales@greatidea.io</p>`;

 */



