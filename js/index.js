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


let navigation = document.querySelectorAll("nav a")
navigation.forEach(function(items, index) {
  items.textContent = siteContent.nav[`nav-item-${index +1}`]
})
console.log(navigation)

let image= document.querySelector(".logo")
image.src="img/logo.png"

let headerimage=document.querySelector("#cta-img")
headerimage.setAttribute('src', siteContent["cta"]["img-src"])

 let contenth4 = document.querySelector("div h4")
contenth4.textContent= siteContent["main-content"]["features-h4"]

let textcontent1=document.querySelector(".text-content p")
textcontent1.textContent=siteContent["main-content"]["features-content"]

let textcontent2=document.querySelector("div h4")
textcontent2.textContent=siteContent["main-content"]["about-h4"]

let middleImage=document.querySelector(".middle-img")
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let bottomh4one=document.querySelector(".bottom-content h4")
bottomh4one.textContent =siteContent["main-content"]["services-h4"]

let bottomcontent1=document.querySelector(".bottom-content p")
bottomcontent1.textContent=siteContent["main-content"]["services-content"]

let bottomh4two=document.querySelectorAll(".bottom-content h4")
bottomh4two.textContent=siteContent["main-content"]["product-h4"]

let bottomcontent2=document.querySelector(".bottom-content p")
bottomcontent2.textContent=siteContent["main-content"]["product-content"]

let bottomh4three=document.querySelector(".bottom-content h4")
bottomh4three.textContent=siteContent["main-content"]["vision-h4"]

let bottomcontent3=document.querySelector(".bottom-content p")
bottomcontent3.textContent=siteContent["main-content"]["vision-content"]

let contact =document.querySelector(".contact h4")
contact.textContent=siteContent["contact"]["contact-h4"]

let contactinfo=document.querySelector(".contact p")
contactinfo.textContent=siteContent["contact"]["address"]

let ctatext=document.querySelector(".cta-text")
ctatext.textContent=siteContent["cta"]["h1"]

let ctabutton=document.querySelector("button")
ctabutton.setAttribute('button', siteContent["cta"]["button"])

let contactnum=document.querySelector(".contact p")
contactnum.textContent=siteContent["contact"]["phone"]

let contactemail=document.querySelector(".contact p")
contactemail.textContent=siteContent["contact"]["email"]
let footer=document.querySelector("footer p")
footer.textContent=siteContent["footer"]["copyright"]