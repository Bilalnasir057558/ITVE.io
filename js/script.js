const dots = document.querySelectorAll(".dot-wrapper");
const sections = document.querySelectorAll("section");
const courses = [
    {
        title: "Web Development",
        desc: "Master modern web technologies including React, Node.js, and cloud deployment.",
        icon: "fa-code", 
        color: "blue"
    }, 
    {
        title: "Computer Hardware",
        desc: "Learn computer assembly, troubleshooting, and hardware maintenance.",
        icon: "fa-microchip", 
        color: "green"
    },
    {
        title: "Mechanical Engineering",
        desc: "Hands-on training in CNC machining, welding, and industrial machinery.",
        icon: "fa-wrench", 
        color: "orange"
    },
    {
        title: "Electrical Technology",
        desc: "Industrial wiring, PLC programming, and electrical system design.",
        icon: "fa-bolt-lightning", 
        color: "blue"
    },
    {
        title: "WCivil Technology",
        desc: "Master modern web technologies including React, Node.js, and cloud deployment.",
        icon: "fa-building", 
        color: "green"
    },
    {
        title: "Medical Technology",
        desc: "Medical lab techniques, equipment handling, and healthcare support.",
        icon: "fa-stethoscope", 
        color: "orange"
    },

];

const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Web Development Graduate",
    image: "images/user1.jpeg",
    quote: "ITVE gave me the skills and confidence to land my first job in tech."
  },
  {
    name: "Imran Noor",
    role: "Medical Technology",
    image: "images/user2.jpeg",
    quote: "Practical training and great instructors. Highly recommended."
  },
  {
    name: "Muhammad Iqbal",
    role: "Web Developer",
    image: "images/user3.jpeg",
    quote: "Very engaging and cooperative environment. Helped me achieving my dream."
  }
];



const grid = document.getElementById("courses-grid");

courses.forEach(course => {
    grid.innerHTML += `
        <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card shadow">
              <div class="card-body">
                <div class="icon icon-${course.color}">
                  <i class="fa-solid ${course.icon}"></i>
                </div>
                <h4 class="mb-2 mt-3 course-card-heading">
                  ${course.title}
                </h4>
                <p class="card-text">
                  ${course.desc}
                </p>
              </div>
            </div>
        </div>
    `;
});


const container = document.getElementById("testimonial-container");

testimonials.forEach((t, index) => {
  container.innerHTML += `
    <div class="carousel-item ${index === 0 ? "active" : ""}">
      <div class="testimonial-card text-center">
        <img src="${t.image}" alt="${t.name}">
        <h5>${t.name}</h5>
        <p class="role">${t.role}</p>
        <p class="quote">"${t.quote}"</p>
      </div>
    </div>
  `;
});


dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const target = document.getElementById(dot.dataset.target);
    target.scrollIntoView({ behavior: "smooth" });
  });
});

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.id;
    }
  });

  dots.forEach(dot => {
    dot.querySelector(".dot").classList.remove("active");
    if (dot.dataset.target === current) {
      dot.querySelector(".dot").classList.add("active");
    }
  });
});

window.addEventListener("load", () => {
    document.querySelector("#hero").classList.add("hero-show");
});
