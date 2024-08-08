/* Navbar Logic */
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector("nav");

function showSidebar() {
  sidebar.style.transform = "translateX(275px)";
  sidebar.style.filter = "blur(0px)";
  closeIcon.style.transform = "translateX(287px)";
  overlay.style.display = "block";
}

function hideSidebar() {
  sidebar.style.transform = "translateX(-275px)";
  sidebar.style.filter = "blur(5px)";
  closeIcon.style.transform = "translateX(-287px)";
  overlay.style.display = "none";
}

document.addEventListener("click", function (event) {
  if (
    sidebar.style.display != "none" &&
    !sidebar.contains(event.target) &&
    !menuIcon.contains(event.target)
  ) {
    hideSidebar();
  }
});

window.addEventListener("scroll", function () {
  const scrolleY = window.scrollY;

  /* Shadowed Navbar when content is covered */
  if (scrolleY > 16) {
    navbar.classList.add("shadowed");
  } else {
    navbar.classList.remove("shadowed");
  }

  /* Intro section image -> faster scroll */
  const imageContainer = document.querySelector(".image2");

  // Adjust speed as needed (higher value = faster movement)
  const movementSpeed = 0.3;

  const newImagePosition = scrollY * movementSpeed;

  imageContainer.style.top = `-${newImagePosition}px`;
});

// Creating Feature Elements
const featuresData = [
  {
    imageSrc: "2",
    heading: "Mobile Optimized",
    subtitle:
      "Ensure visitors who access your site from mobile devices\n                      have an experience optimized for the device.",
  },
  {
    imageSrc: "3",
    heading: "E-commerce Built-In",
    subtitle:
      "Whether you're selling a single product or a hundred, we\n                      make it easy.",
  },
  {
    imageSrc: "4",
    heading: "Receive Online Payments",
    subtitle:
      "Configure your payment gateway in one click & start\n                      receiving payments for any service that you offer.",
  },
  {
    imageSrc: "5",
    heading: "Customized Enquiry Form",
    subtitle:
      "Create new forms with custom fields to gather information\n                      about your prospects in detail.",
  },
  {
    imageSrc: "6",
    heading: "Online Booking & Scheduling",
    subtitle:
      "Schedule appointments and receive online bookings so that\n                      you can focus on giving quality service.",
  },
  {
    imageSrc: "7",
    heading: "SEO Ready Website",
    subtitle:
      "We follow the best practices to help your website rank\n                      higher across major search engines.",
  },
  {
    imageSrc: "8",
    heading: "Sell on Social Media",
    subtitle:
      "Turn your social media visitors into paying customers.\n                      Share payment links and get paid immediately.",
  },
  {
    imageSrc: "9",
    heading: "WhatsApp Chat Integrated",
    subtitle:
      "The fastest way to help your customers is through a live\n                      chat. And what better way than WhatsApp!",
  },
  {
    imageSrc: "10",
    heading: "SMS & Email Marketing",
    subtitle:
      "Extend your reach and capture customer attention with\n                      compelling and personalized SMSes & emails.",
  },
  {
    imageSrc: "11",
    heading: "Gallery & Video Showcase",
    subtitle:
      "Show your photos and place business videos, PDF files,\n                      brochures, audio on website.",
  },
  {
    imageSrc: "12",
    heading: "Animation & Scroll Effects",
    subtitle:
      "Bring your website to life. Add a wow factor with\n                      animations to keep your visitors engaged.",
  },
  {
    imageSrc: "13",
    heading: "Social Media Linking",
    subtitle:
      "Link your website to Facebook, Twitter, Instagram,\n                      LinkedIn for higher visibility & brand engagement.",
  },
  {
    imageSrc: "14",
    heading: "Google Analytics Support",
    subtitle:
      "Track your website traffic and get a deeper understanding\n                      of your customer behavior.",
  },
  {
    imageSrc: "15",
    heading: "Third Party Apps",
    subtitle:
      "Engage with your audience using an extensive set of third\n                      party tools from search to social.",
  },
  {
    imageSrc: "16",
    heading: "…and Much, Much more",
    subtitle:
      "Create Unlimited Pages, Upload Favicon, Add Logo, Maps,\n                      Custom Code, Testimonials and a lot more.",
  },
];

function createFeatureDivs(myArray) {
  const container = document.querySelector(".features-grid"); // Replace with your container element's ID
  myArray.forEach((feature) => {
    const divContainer = document.createElement("div");
    divContainer.classList.add("single-feature-container");
    divContainer.classList.add("hidden");

    const newDiv = document.createElement("div");
    newDiv.classList.add("single-feature"); // Add the class name
    divContainer.appendChild(newDiv);

    // Feature Logo (assuming you have the logic to define the image path)
    const featureLogo = document.createElement("div");
    featureLogo.classList.add("feature-logo");
    const logoImg = document.createElement("img");
    logoImg.src = `./assets/img/features/${feature.imageSrc}.png`; // Replace with your image logic
    featureLogo.appendChild(logoImg);
    newDiv.appendChild(featureLogo);

    // Feature Data
    const featureData = document.createElement("div");
    featureData.classList.add("feature-data");

    const headingContainer = document.createElement("div");
    headingContainer.classList.add("heading-container");
    const heading = document.createElement("h3");
    heading.textContent = feature.heading; // Replace with your desired heading
    headingContainer.appendChild(heading);

    const subtitleContainer = document.createElement("div");
    subtitleContainer.classList.add("subtitle-contianer");

    const subtitle = document.createElement("p");
    subtitleContainer.appendChild(subtitle);
    subtitle.classList.add("subtitle");
    subtitle.textContent = feature.subtitle; // Set the content from the array

    featureData.appendChild(headingContainer);
    featureData.appendChild(subtitleContainer);

    newDiv.appendChild(featureData);

    container.appendChild(divContainer);
  });
}

createFeatureDivs(featuresData);

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
