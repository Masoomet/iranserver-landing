// import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import 'bootstrap';
import $ from 'jquery';
import '../scss/main.scss';
import '../images/logo.png';
import '../images/vector-image.png';
import '../images/vps-icon.png';
import '../images/shared-hosting-icon.png';
import '../images/dedicated-server-icon.png';
import '../images/security-image.png';
import '../images/operation-center-section.png';
import '../images/alibaba.png';
import '../images/cafebazaar.png';
import '../images/digikala.png';
import '../images/maskan.png';
import '../images/mellat.png';
import '../images/mtn.png';
import '../images/redcrescent.png';
import '../images/snapp.png';
import '../images/tejarat.png';
import '../images/tw.png';
import '../images/more-arrow.png';
import '../images/enamad.png';


$(document).ready(function () {
  console.log("jQuery is working!");
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("content.json")
    .then(response => response.json())
    .then(data => {
      // تنظیم عنوان و زیرعنوان
      document.querySelector(".main-section h1").textContent = data.header.title;
      document.querySelector(".main-section p").textContent = data.header.subtitle;
      document.querySelector(".search input").placeholder = data.header.searchPlaceholder;

      // بارگذاری پسوندها به عنوان اسلایدها
      const extensionsContainer = document.querySelector(".extensions-slider .swiper-wrapper");
      extensionsContainer.innerHTML = ""; // پاک کردن محتوای قبلی
      data.extensions.forEach(ext => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.textContent = `${ext.name} ${ext.price}`;
        extensionsContainer.appendChild(slide);
      });

      // تنظیم لینک تخفیف دار و متن داغ‌ترین پسوندها
      const promoLink = document.querySelector(".promo-link");
      promoLink.innerHTML = `<i class="fas fa-percent"></i> ${data.promoText}`;
      promoLink.href = "#";
      
      // تنظیم تصویر
      document.querySelector(".vector img").src = data.image;

      // ایجاد SwiperJS برای اسلایدر extensions پس از اضافه شدن اسلایدها
      console.log("Initializing Swiper...");
      new Swiper('.extensions-slider', {
        loop: true,
        loopFillGroupWithBlank: true,
        initialSlide: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        initialSlide: 0,
      });
      
      
    console.log("Swiper initialized!");

    
    })
    .catch(error => console.error("Error loading JSON data:", error));
});



fetch("content.json")
  .then(response => response.json())
  .then(data => {
    const servicesData = data.servicesSection;

    // عنوان و توضیحات سکشن
    document.querySelector(".section-title").textContent = servicesData.title;
    document.querySelector(".section-subtitle").textContent = servicesData.subtitle;

    // اضافه کردن کارت‌های خدمات
    const servicesContainer = document.querySelector(".services-container");
    servicesContainer.innerHTML = "";
    servicesData.services.forEach((service, index) => {
      const serviceCard = document.createElement("div");
      serviceCard.classList.add("service-card");

      if (index === 0) {
        serviceCard.classList.add("left");
      } else if (index === 1) {
        serviceCard.classList.add("center");
      } else if (index === 2) {
        serviceCard.classList.add("right");
      }


      serviceCard.innerHTML = `
                <img src="images/${service.icon}" alt="${service.name}">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <p class="details">${service.details}</p>
                <a href="${service.buttonLink}">${service.buttonText}</a>
            `;

      servicesContainer.appendChild(serviceCard);
    });
  })
  .catch(error => console.error("Error loading JSON data:", error));

document.addEventListener("DOMContentLoaded", () => {
  fetch("content.json")
    .then(response => response.json())
    .then(data => {
      // تنظیم عنوان و زیرعنوان
      document.querySelector(".security-title").textContent = data.securitySection.title;
      document.querySelector(".security-subtitle").textContent = data.securitySection.subtitle;

      // تنظیم تصویر امنیتی
      document.querySelector(".security-image img").src = data.securitySection.image;

      // افزودن آیتم‌های امنیتی
      const itemsContainer = document.querySelector(".security-items");
      itemsContainer.innerHTML = ""; // پاک کردن آیتم‌های قبلی
      data.securitySection.items.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "security-item";
        itemDiv.innerHTML = `<i class="${item.icon}"></i><span class="item-title">${item.title}</span>`;
        itemsContainer.appendChild(itemDiv);
      });
    })
    .catch(error => console.error("Error loading JSON data:", error));
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("content.json")
      .then(response => response.json())
      .then(data => {
          const operationCenterData = data.operationCenterSection;
          
          // تنظیم تصویر پس‌زمینه
          const section = document.querySelector(".operation-center-section");
          section.style.backgroundImage = `url(${operationCenterData.image})`;

          // تنظیم محتوای متنی
          document.querySelector(".title").textContent = operationCenterData.title;
          document.querySelector(".subtitle").textContent = operationCenterData.subtitle;
          document.querySelector(".code").textContent = operationCenterData.code;
      })
      .catch(error => console.error("Error loading JSON data:", error));
});

fetch("content.json")
    .then(response => response.json())
    .then(data => {
        const trustData = data.trustSection;

        // تنظیم عنوان و زیرعنوان
        document.querySelector(".trust-section .section-title").textContent = trustData.title;
        document.querySelector(".trust-section .section-subtitle").textContent = trustData.subtitle;

        // اضافه کردن کارت‌های آمار
        const statsContainer = document.querySelector(".trust-section .stats-container");
        statsContainer.innerHTML = ""; // پاک کردن محتوای قبلی
        trustData.stats.forEach(stat => {
            const statCard = document.createElement("div");
            statCard.classList.add("stat-card");

            statCard.innerHTML = `
                <div class="stat-number">${stat.number}</div>
                <div class="stat-description">${stat.description}</div>
            `;

            statsContainer.appendChild(statCard);
        });
    })
    .catch(error => console.error("Error loading JSON data:", error));

    fetch("content.json")
    .then(response => response.json())
    .then(data => {
        const testimonials = data.testimonials;

        const swiperWrapper = document.querySelector(".testimonial-slider .swiper-wrapper");
        swiperWrapper.innerHTML = ""; // پاک کردن محتوای قبلی

        testimonials.forEach(testimonial => {
            const slide = document.createElement("div");
            slide.className = "swiper-slide";

            slide.innerHTML = `
                <div class="testimonial-content">${testimonial.content}</div>
                <div class="testimonial-author">${testimonial.author} - <span>${testimonial.role}</span></div>
            `;

            swiperWrapper.appendChild(slide);
        });

        // ایجاد SwiperJS برای اسلایدر پس از اضافه شدن اسلایدها
        new Swiper('.testimonial-slider', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 1, // نمایش تنها یک اسلاید در هر لحظه
            spaceBetween: 20, // فاصله بین اسلایدها
            centeredSlides: true,
        });
    })
    .catch(error => console.error("Error loading JSON data:", error));

    fetch("content.json")
    .then(response => response.json())
    .then(data => {
        const clients = data.clients;
        const clientsContainer = document.getElementById("clientsLogos");
        const loadMoreIcon = document.getElementById("loadMore");
        let itemsToShow = 6; // تعداد آیتم‌هایی که هر بار نمایش داده می‌شوند

        function displayClients() {
            clientsContainer.innerHTML = ""; // پاک کردن محتوای قبلی
            const visibleClients = clients.slice(0, itemsToShow);
            visibleClients.forEach(client => {
                const logoElement = document.createElement("img");
                logoElement.src = client.logo;
                logoElement.alt = client.alt;
                logoElement.className = "client-logo";
                clientsContainer.appendChild(logoElement);
            });

            // پنهان کردن دکمه "نمایش بیشتر" در صورت نمایش تمام لوگوها
            if (itemsToShow >= clients.length) {
                loadMoreIcon.style.display = "none";
            }
        }

        // نمایش اولین مجموعه لوگوها
        displayClients();

        // افزودن عملکرد به دکمه "نمایش بیشتر"
        loadMoreIcon.addEventListener("click", () => {
          itemsToShow += 6;
          displayClients();
      });
      
    })
    .catch(error => console.error("Error loading JSON data:", error));

    document.addEventListener("DOMContentLoaded", () => {
      fetch("content.json")
        .then(response => response.json())
        .then(data => {
          // تنظیم اطلاعات فوتر
          document.querySelector(".footer-phone").textContent = data.footer.contact.phone;
          document.querySelector(".footer-availability").textContent = data.footer.contact.availability;
          document.querySelector(".footer-title").textContent = data.footer.title;
          document.querySelector(".footer-subtitle").textContent = data.footer.subtitle;
          document.querySelector(".footer-mission").textContent = data.footer.mission;
          document.querySelector(".footer-logo img").src = data.footer.logo;
    
          // افزودن لینک‌های فوتر
          const footerLinks = document.querySelector(".footer-link-list");
          data.footer.links.forEach(linkText => {
            const listItem = document.createElement("li");
            listItem.textContent = linkText;
            footerLinks.appendChild(listItem);
          });
    
          // افزودن آیکون‌های شبکه اجتماعی
          const socialIcons = document.querySelector(".social-icons");
          socialIcons.innerHTML = "";
          data.footer.social.forEach(platform => {
            const iconItem = document.createElement("li");
            iconItem.innerHTML = `<i class="fab fa-${platform}"></i>`;
            socialIcons.appendChild(iconItem);
          });
    
          // حق کپی‌رایت
          const footerNav = document.querySelector(".footer-nav");
          footerNav.innerHTML = ""; // پاک کردن محتوای قبلی
          data.footer.copylinks.forEach(link => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<a href="${link.url}">${link.text}</a>`;
            footerNav.appendChild(listItem);
          });
      
          // متن کپی‌رایت
          const copyrightText = document.querySelector(".copyright-text");
          copyrightText.textContent = data.footer.copyright;
      
          // متن طراحی
          const designText = document.querySelector(".design-text");
          designText.textContent = data.footer.design;
        })
        .catch(error => console.error("Error loading footer data:", error));
      })