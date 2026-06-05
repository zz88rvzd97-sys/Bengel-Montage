(function () {
  const translations = {
    en: {
      "skip": "Skip to content",
      "nav.services": "Services",
      "nav.process": "Process",
      "nav.area": "Service area",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "hero.eyebrow": "Assembly and setup service",
      "hero.title": "Furniture assembly in Schönwalde-Glien, Falkensee & nearby areas",
      "hero.lead": "BEngel Montage assembles furniture, PAX wardrobes, shelves and smaller wall-mounted items with clear coordination beforehand and a tidy result on site.",
      "cta.call": "Call 01516 / 7969682",
      "cta.whatsapp": "WhatsApp request",
      "cta.mail": "Request by email",
      "trust.response": "response depending on availability",
      "trust.pax": "wardrobe systems and interiors",
      "trust.region": "short routes around north-west Berlin",
      "hero.small": "Appointments by arrangement - Schönwalde-Glien OT Grünefeld",
      "visual.title": "Clean assembly, clean handover.",
      "intro.eyebrow": "Simply well assembled",
      "intro.title": "You describe the job. I bring structure to the assembly, timing and process.",
      "intro.text": "Whether it is a single cabinet, several wardrobe frames or small wall and interior jobs: before the appointment, the scope, available parts and realistic effort are clarified.",
      "services.title": "How BEngel Montage can help",
      "service1.title": "Furniture assembly",
      "service1.text": "Wardrobes, chests of drawers, shelves, beds, tables, sideboards and other furniture are assembled and aligned cleanly.",
      "service2.title": "PAX & wardrobe systems",
      "service2.text": "Frames, doors, drawers, shelves, clothes rails and interior fittings are mounted properly.",
      "service3.title": "Small mounting jobs",
      "service3.text": "Shelves, brackets, curtain rods, coat racks and smaller solutions around home and apartment.",
      "service4.title": "Assembly support",
      "service4.text": "Sorting, preparing, unpacking and step-by-step proper assembly.",
      "benefits.eyebrow": "Why BEngel Montage?",
      "benefits.title": "Clear coordination, clean execution and realistic estimates.",
      "benefit1.title": "Clarified beforehand",
      "benefit1.text": "Photos, product links and scope help estimate effort and appointment timing sensibly.",
      "benefit2.title": "Prepared on site",
      "benefit2.text": "Tools, assembly sequence and details are matched to the job.",
      "benefit3.title": "Finished neatly",
      "benefit3.text": "The goal is stable assembly, a clean handover and as little back and forth as possible.",
      "price.eyebrow": "Request & pricing",
      "price.title": "Fairly calculated by effort, scope and distance.",
      "price.text": "Small jobs can often be billed by time. If the job can be described clearly, a fixed-price offer may also be possible - for example for several wardrobes or a complete furniture package.",
      "price.link": "Send a non-binding request",
      "pricebox.title": "This helps for a quick estimate",
      "pricebox.li1": "Photos of the assembly location and packages",
      "pricebox.li2": "Product links, model names or assembly instructions",
      "pricebox.li3": "Number and dimensions of the furniture items",
      "pricebox.li4": "Location, floor, parking options and preferred date",
      "pricebox.li5": "Information whether the goods are already at the assembly location",
      "area.eyebrow": "Service area",
      "area.title": "Available around Schönwalde-Glien and north-west Berlin.",
      "area.text": "In the direct area, BEngel Montage mainly serves Grünefeld, Schönwalde-Glien, Falkensee, Dallgow-Döberitz, Brieselang, Wustermark and Nauen. Other locations are possible by arrangement.",
      "local.eyebrow": "Local searches",
      "local.title": "Furniture assembly, PAX setup and small mounting jobs near you",
      "local1.title": "Furniture assembly in Falkensee",
      "local1.text": "Fast coordination for wardrobes, shelves, beds and furniture packages in Falkensee and Dallgow-Döberitz.",
      "local2.title": "PAX setup in Nauen",
      "local2.text": "Wardrobe systems, sliding doors, drawers and interior fittings mounted cleanly, including multiple frames.",
      "local3.title": "Small mounting jobs in Berlin-Spandau",
      "local3.text": "Shelves, brackets, curtain rods and smaller mounting jobs by arrangement in north-west Berlin.",
      "process.eyebrow": "Process",
      "process.title": "How your assembly job gets started quickly",
      "step1.title": "Send a request",
      "step1.text": "Briefly describe what should be assembled or mounted.",
      "step2.title": "Estimate the effort",
      "step2.text": "Scope, location, appointment, material and price range are clarified.",
      "step3.title": "Complete the appointment",
      "step3.text": "The assembly is completed carefully at the agreed appointment.",
      "faq.eyebrow": "FAQ",
      "faq.title": "Good to know before your request",
      "faq1.q": "Can I request several furniture items at once?",
      "faq1.a": "Yes. Several frames, wardrobes or a furniture package can be planned well together.",
      "faq2.q": "What should I prepare before the appointment?",
      "faq2.a": "The packages should ideally already be at the assembly location. Enough space for sorting the parts is also helpful.",
      "faq3.q": "Are appointments possible outside the direct area?",
      "faq3.a": "Yes, by arrangement. Distance, scope and a sensible appointment plan are the deciding factors.",
      "faq4.q": "Can I get a price estimate beforehand?",
      "faq4.a": "Yes. Photos, product links, location and scope make the estimate much more accurate.",
      "contact.eyebrow": "Contact",
      "contact.title": "Request assembly now",
      "contact.text": "Briefly describe what needs to be done. BEngel Montage will get back to you to coordinate the details.",
      "contact.whatsapp": "Write on WhatsApp",
      "contact.mail": "Write an email",
      "legal.privacy.title": "Privacy note",
      "legal.privacy.text": "This website can be used without a contact form. If you contact us by phone or email, your details will only be used to process your request. No tracking or analytics tools are integrated on this static website.",
      "footer.text": "© 2026 BEngel Montage · Furniture assembly and setup service",
      "sticky.call": "Call",
      "sticky.whatsapp": "WhatsApp",
      "sticky.mail": "Email"
    }
  };

  const original = {};
  const elements = Array.from(document.querySelectorAll("[data-i18n]"));
  elements.forEach((element) => {
    original[element.dataset.i18n] = element.innerHTML;
  });

  function setLanguage(language) {
    const html = document.documentElement;
    const dictionary = language === "en" ? translations.en : original;
    html.lang = language;
    html.dataset.lang = language;
    document.title = language === "en"
      ? "BEngel Montage | Furniture assembly in Schönwalde-Glien & nearby areas"
      : "BEngel Montage | Möbelmontage in Schönwalde-Glien & Umgebung";

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.content = language === "en"
        ? "BEngel Montage: furniture assembly, PAX setup, wardrobe systems and small mounting jobs in Schönwalde-Glien, Falkensee, Nauen, Berlin-Spandau and nearby areas."
        : "BEngel Montage: Möbelmontage, PAX Aufbau, Schranksysteme und Kleinmontagen in Schönwalde-Glien, Falkensee, Nauen, Berlin-Spandau und Umgebung.";
    }

    elements.forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (value) element.innerHTML = value;
    });

    document.querySelectorAll(".lang-switch button").forEach((button) => {
      const isActive = button.dataset.lang === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    document.querySelectorAll(".whatsapp-link").forEach((link) => {
      const localizedHref = language === "en" ? link.dataset.hrefEn : link.dataset.hrefDe;
      if (localizedHref) link.href = localizedHref;
    });
  }

  document.querySelectorAll(".lang-switch button").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang || "de"));
  });
})();
