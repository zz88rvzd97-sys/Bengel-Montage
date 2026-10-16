(function () {
  const translations = {
    en: {
      "skip": "Skip to content",
      "nav.services": "Services",
      "nav.process": "Process & FAQ",
      "nav.area": "Service area",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "hero.eyebrow": "Assembly and setup service",
      "hero.title": "Furniture assembly in Schönwalde-Glien, Falkensee & nearby areas",
      "hero.lead": "I assemble furniture, PAX wardrobes and shelving, and I handle smaller wall-mounting jobs. We clarify the job in advance so everything runs smoothly on site.",
      "cta.call": "Call 01516 / 7969682",
      "cta.whatsapp": "Request via WhatsApp",
      "cta.mail": "Request by email",
      "trust.responseTime": "Response",
      "trust.response": "usually within 48 hours",
      "trust.pax": "wardrobe systems and interiors",
      "trust.region": "short routes around north-west Berlin",
      "hero.small": "Appointments by arrangement · Schönwalde-Glien OT Grünefeld",
      "visual.title": "Carefully assembled. Cleanly handed over.",
      "visual.ai": "AI-generated illustrative image",
      "intro.eyebrow": "Personal and straightforward",
      "intro.title": "You describe the job – I take care of the planning and assembly.",
      "intro.text": "Whether it is a single wardrobe, several pieces of furniture or a smaller wall-mounting job, we clarify the work, what is already on site and the likely time needed before the appointment.",
      "services.title": "Assembly services I provide",
      "service1.title": "Furniture assembly",
      "service1.text": "I assemble wardrobes, chests of drawers, shelves, beds, tables, sideboards and other furniture, then align everything carefully.",
      "service2.title": "PAX & wardrobe systems",
      "service2.text": "I install frames, doors, drawers, shelves, clothes rails and interior fittings, then align the wardrobe system carefully.",
      "service2.link": "More about PAX and wardrobe assembly",
      "service3.title": "Small mounting jobs",
      "service3.text": "I install shelves, brackets, curtain rods and coat racks in houses and apartments.",
      "service4.title": "Preparation & assembly",
      "service4.text": "I unpack and sort the parts, then assemble the furniture step by step.",
      "benefits.eyebrow": "Why BEngel Montage?",
      "benefits.title": "Clear arrangements and careful assembly – from start to finish.",
      "benefit1.title": "Clarify the job in advance",
      "benefit1.text": "Photos, product links and measurements help me estimate the effort and duration.",
      "benefit2.title": "Prepared for your job",
      "benefit2.text": "I plan the tools and workflow to suit your particular job.",
      "benefit3.title": "Clean handover",
      "benefit3.text": "The furniture is left stable and aligned, and the work area is left tidy.",
      "taskrabbit.eyebrow": "Also on Taskrabbit",
      "taskrabbit.title": "You can also book me through Taskrabbit.",
      "taskrabbit.text": "There you can view my profile, reviews and Taskrabbit's booking process. Please note that prices are usually higher because of the platform fees. If you contact me directly by phone, WhatsApp or email, I will provide an individual price estimate.",
      "taskrabbit.fact1": "70 tasks completed",
      "taskrabbit.fact2": "Furniture assembly",
      "taskrabbit.fact3": "Wall mounting",
      "taskrabbit.profile": "Taskrabbit profile",
      "taskrabbit.reviews": "25 reviews",
      "taskrabbit.since": "Tasker since 2021",
      "taskrabbit.tasks": "70 tasks completed",
      "taskrabbit.card": "View profile & reviews",
      "reviews.eyebrow": "Customer reviews",
      "reviews.title": "What customers say about my work",
      "reviews.text": "Short excerpts from reviews on my public Taskrabbit profile.",
      "reviews.lisa": "Wall mounting · August 2026",
      "reviews.annette": "Home repairs · August 2026",
      "reviews.julia": "Home repairs · October 2021",
      "reviews.source": "View all reviews on Taskrabbit",
      "scope.eyebrow": "Clear service boundaries",
      "scope.title": "So you know right away whether your job is a good fit.",
      "scope.text": "My focus is furniture assembly and smaller wall-mounting jobs. I do not provide the following services:",
      "scope.link": "Check whether your job fits",
      "scope1.title": "Electricity, gas and water",
      "scope1.text": "Work on supply lines, fuse boxes or fixed connections must be carried out by an authorised specialist company.",
      "scope2.title": "Regulated specialist work",
      "scope2.text": "Work that requires a master craftsperson, official approval or specialist certification is not part of my service.",
      "scope3.title": "Unsafe wall fixings",
      "scope3.text": "I only carry out wall mounting when the wall, weight and fixing method allow for safe installation.",
      "price.eyebrow": "Request & pricing",
      "price.title": "The price depends on the work involved, the size of the job and travel distance.",
      "price.text": "Small jobs are usually charged by time. If the work can be estimated reliably in advance, a fixed price may also be possible – for example for several wardrobes or a complete furniture package.",
      "price.link": "Prepare a request",
      "pricebox.title": "These details help with the estimate",
      "pricebox.li1": "Photos of the assembly location and packages",
      "pricebox.li2": "Product links, model names or assembly instructions",
      "pricebox.li3": "Number and dimensions of the furniture items",
      "pricebox.li4": "Location, floor, parking options and preferred date",
      "pricebox.li5": "Whether the furniture and packages are already at the assembly location",
      "area.eyebrow": "Service area",
      "area.title": "My service area: Schönwalde-Glien and north-west Berlin",
      "area.text": "I mainly work in Grünefeld, Schönwalde-Glien, Falkensee, Dallgow-Döberitz, Brieselang, Wustermark and Nauen. Appointments in Berlin-Spandau and other locations are possible by arrangement.",
      "area.link": "View service area and local pages",
      "local.eyebrow": "Near you",
      "local.title": "Furniture assembly, PAX assembly and small mounting jobs in the region",
      "local1.title": "Furniture assembly in Falkensee",
      "local1.text": "I assemble wardrobes, shelves, beds and complete furniture packages in Falkensee and Dallgow-Döberitz.",
      "local2.title": "PAX setup in Nauen",
      "local2.text": "I assemble wardrobe systems with doors, drawers and interior fittings, including projects with several frames.",
      "local3.title": "Small mounting jobs in Berlin-Spandau",
      "local3.text": "I install shelves, brackets, curtain rods and coat racks in north-west Berlin.",
      "local.more": "Learn more",
      "process.eyebrow": "Process",
      "process.title": "How your request works",
      "step1.title": "Send a request",
      "step1.text": "Briefly describe what needs to be assembled or mounted, ideally with photos or a product link.",
      "step2.title": "Clarify the details",
      "step2.text": "We agree on the location, scope, preferred date and price range.",
      "step3.title": "Complete the assembly",
      "step3.text": "I arrive at the agreed time and complete the assembly carefully.",
      "faq.eyebrow": "FAQ",
      "faq.title": "Good to know before your request",
      "faq1.q": "Can I request several furniture items at once?",
      "faq1.a": "Yes. Several wardrobes or a complete furniture package can be planned together.",
      "faq2.q": "What should I prepare before the appointment?",
      "faq2.a": "The packages should ideally be at the assembly location. I also need enough clear space to sort and assemble the parts.",
      "faq3.q": "Are appointments possible outside the direct area?",
      "faq3.a": "Yes, by arrangement. Just send me the location and a brief description of the job.",
      "faq4.q": "Can I get a price estimate beforehand?",
      "faq4.a": "Yes. Photos, product links, the location, floor and preferred date help me provide a more accurate estimate.",
      "faq5.q": "Can I also book through Taskrabbit?",
      "faq5.a": "Yes. On Taskrabbit you can view my profile, reviews and the booking process. Prices there are usually higher because of the platform fees.",
      "inquiry.eyebrow": "Request assistant",
      "inquiry.title": "Your request – one question at a time",
      "inquiry.text": "The assistant guides you through one question per page. If you do not know something yet, you can leave it blank.",
      "inquiry.benefit1": "No account or registration required",
      "inquiry.benefit2": "You can add photos afterwards in the WhatsApp chat",
      "inquiry.benefit3": "Your details are only transferred when WhatsApp opens",
      "inquiry.job": "What needs to be assembled?",
      "inquiry.choose": "Please select",
      "inquiry.choose.optional": "Please select (optional)",
      "inquiry.job.pax": "PAX or wardrobe assembly",
      "inquiry.job.furniture": "Other furniture assembly",
      "inquiry.job.wall": "Small wall-mounting job",
      "inquiry.job.several": "Several different jobs",
      "inquiry.job.other": "Something else",
      "inquiry.scope": "What needs to be assembled?",
      "inquiry.scope.placeholder": "For example: one wardrobe or several pieces of furniture",
      "inquiry.scope.hint": "For example: a PAX wardrobe with 3 frames. If you are not sure yet, just leave this blank.",
      "inquiry.location": "Where is the job?",
      "inquiry.location.label": "Where is the job? (town and postcode)",
      "inquiry.location.placeholder": "e.g. 14621 Schönwalde-Glien",
      "inquiry.floor": "Which floor is the job on?",
      "inquiry.floor.basement": "Basement / lower-ground floor",
      "inquiry.floor.ground": "Ground floor",
      "inquiry.floor.1": "1st floor",
      "inquiry.floor.2": "2nd floor",
      "inquiry.floor.3": "3rd floor",
      "inquiry.floor.4plus": "4th floor or higher",
      "inquiry.floor.house": "Detached house",
      "inquiry.lift": "Is there a lift?",
      "inquiry.lift.yes": "Yes",
      "inquiry.lift.no": "No",
      "inquiry.lift.na": "Not needed (e.g. ground floor / house)",
      "inquiry.zone": "Is there a parking zone or paid parking?",
      "inquiry.zone.no": "No",
      "inquiry.zone.paid": "Yes, paid parking zone",
      "inquiry.zone.resident": "Yes, residents-only parking zone",
      "inquiry.zone.other": "Yes, another restriction",
      "inquiry.unknown": "Not yet known",
      "inquiry.parking": "What is parking like right at the property?",
      "inquiry.parking.yes": "Parking is possible at the property",
      "inquiry.parking.limited": "Limited parking",
      "inquiry.parking.no": "No parking directly nearby",
      "inquiry.date": "When would suit you best?",
      "inquiry.date.hint": "A preferred date or rough time period is enough. This is optional.",
      "inquiry.details": "Would you like to add anything?",
      "inquiry.details.hint": "For example, measurements, product links or special details. You can send photos later in WhatsApp.",
      "inquiry.back": "Back",
      "inquiry.next": "Next",
      "inquiry.submit": "Create WhatsApp message",
      "inquiry.privacy": "Nothing is stored on this website. You can review and change the message in WhatsApp before sending.",
      "contact.eyebrow": "Contact",
      "contact.title": "Request assembly now",
      "contact.text": "Briefly tell me what needs to be assembled or mounted. I will get back to you to discuss the details.",
      "contact.whatsapp": "Request via WhatsApp",
      "contact.mail": "Request by email",
      "footer.text": "© 2026 BEngel Montage · Furniture assembly and setup service",
      "footer.pax": "PAX & wardrobes",
      "footer.area": "Service area",
      "footer.imprint": "Legal notice",
      "footer.privacy": "Privacy",
      "sticky.call": "Call",
      "sticky.whatsapp": "WhatsApp",
      "sticky.mail": "Email"
    }
  };

  const original = {};
  const elements = Array.from(document.querySelectorAll("[data-i18n]"));
  const originalPlaceholders = {};
  let taskrabbitStats = {
    rating: 5,
    reviewCount: 22,
    taskCount: 54,
    updatedAt: "2026-09-23T10:42:12.000Z"
  };

  elements.forEach((element) => {
    original[element.dataset.i18n] = element.innerHTML;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    originalPlaceholders[element.dataset.i18nPlaceholder] = element.getAttribute("placeholder") || "";
  });

  function formatRating(rating, language) {
    return Number(rating).toFixed(1).replace(".", language === "en" ? "." : ",");
  }

  function renderTaskrabbitStats(language) {
    const rating = formatRating(taskrabbitStats.rating, language);
    const reviewLabel = language === "en"
      ? `${taskrabbitStats.reviewCount} reviews`
      : `${taskrabbitStats.reviewCount} Bewertungen`;
    const taskLabel = language === "en"
      ? `${taskrabbitStats.taskCount} tasks completed`
      : `${taskrabbitStats.taskCount} erledigte Tasks`;
    const updatedDate = new Intl.DateTimeFormat(language === "en" ? "en-GB" : "de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }).format(new Date(taskrabbitStats.updatedAt));
    const updatedLabel = language === "en" ? `Updated: ${updatedDate}` : `Stand: ${updatedDate}`;
    const accessibleLabel = language === "en"
      ? `Overall rating ${rating} out of 5 stars from ${taskrabbitStats.reviewCount} reviews`
      : `Gesamtbewertung ${rating} von 5 Sternen aus ${taskrabbitStats.reviewCount} Bewertungen`;

    document.querySelectorAll("[data-taskrabbit-rating]").forEach((element) => {
      element.textContent = rating;
    });
    document.querySelectorAll(".taskrabbit-stars").forEach((element) => {
      const percentage = Math.max(0, Math.min(100, (taskrabbitStats.rating / 5) * 100));
      element.style.setProperty("--rating-percentage", `${percentage}%`);
    });
    document.querySelectorAll("[data-taskrabbit-reviews]").forEach((element) => {
      element.textContent = reviewLabel;
    });
    document.querySelectorAll("[data-taskrabbit-tasks]").forEach((element) => {
      element.textContent = taskLabel;
    });
    document.querySelectorAll("[data-taskrabbit-updated]").forEach((element) => {
      element.textContent = updatedLabel;
    });

    const ratingElement = document.querySelector(".taskrabbit-rating");
    if (ratingElement) ratingElement.setAttribute("aria-label", accessibleLabel);

    const profileLink = document.querySelector(".taskrabbit-card");
    if (profileLink) {
      profileLink.setAttribute(
        "aria-label",
        language === "en"
          ? `Open Benjamin-Brian E.'s Taskrabbit profile. ${accessibleLabel}.`
          : `Taskrabbit-Profil von Benjamin-Brian E. öffnen. ${accessibleLabel}.`
      );
    }
  }

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
        : "BEngel Montage übernimmt Möbelmontage, PAX-Aufbau und Kleinmontagen in Schönwalde-Glien, Falkensee, Nauen, Berlin-Spandau und Umgebung.";
    }

    elements.forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (value) element.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      const value = dictionary[key] || originalPlaceholders[key];
      if (value) element.placeholder = value;
    });

    const progressBar = document.querySelector("[data-progress]");
    if (progressBar) progressBar.setAttribute("aria-label", language === "en" ? "Form progress" : "Formularfortschritt");
    const counter = document.querySelector("[data-step-counter]");
    if (counter && progressBar) {
      const current = Number(progressBar.getAttribute("aria-valuenow") || 1);
      const total = document.querySelectorAll("[data-inquiry-step]").length;
      counter.textContent = language === "en" ? `Step ${current} of ${total}` : `Schritt ${current} von ${total}`;
    }

    document.querySelectorAll(".lang-switch button").forEach((button) => {
      const isActive = button.dataset.lang === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    document.querySelectorAll(".whatsapp-link").forEach((link) => {
      const localizedHref = language === "en" ? link.dataset.hrefEn : link.dataset.hrefDe;
      if (localizedHref) link.href = localizedHref;
    });

    const emailHref = language === "en"
      ? "mailto:kontakt@bengel-montage.de?subject=Assembly%20request&body=Hello%20BEngel%20Montage%2C%0A%0AI%20would%20like%20to%20request%20an%20assembly.%0A%0AWhat%20needs%20to%20be%20assembled%3A%0ALocation%20and%20floor%3A%0APreferred%20date%3A%0AParking%3A%0APhotos%20or%20product%20links%3A%0A%0AKind%20regards"
      : "mailto:kontakt@bengel-montage.de?subject=Montageanfrage&body=Hallo%20BEngel%20Montage%2C%0A%0Aich%20m%C3%B6chte%20gern%20eine%20Montage%20anfragen.%0A%0AWas%20soll%20montiert%20werden%3A%0AOrt%20und%20Etage%3A%0AWunschtermin%3A%0AParkm%C3%B6glichkeit%3A%0AFotos%20oder%20Produktlinks%3A%0A%0AViele%20Gr%C3%BC%C3%9Fe";
    document.querySelectorAll('a[href^="mailto:kontakt@bengel-montage.de?subject="]').forEach((link) => {
      link.href = emailHref;
    });

    renderTaskrabbitStats(language);
  }

  document.querySelectorAll(".lang-switch button").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang || "de"));
  });

  const inquiryForm = document.querySelector("#inquiry-form");
  if (inquiryForm) {
    const steps = Array.from(inquiryForm.querySelectorAll("[data-inquiry-step]"));
    const backButton = inquiryForm.querySelector("[data-step-back]");
    const nextButton = inquiryForm.querySelector("[data-step-next]");
    const submitButton = inquiryForm.querySelector("[data-step-submit]");
    const stepCounter = inquiryForm.querySelector("[data-step-counter]");
    const progress = inquiryForm.querySelector("[data-progress]");
    let currentStep = 0;

    const showStep = (index, moveFocus = true) => {
      currentStep = Math.max(0, Math.min(index, steps.length - 1));
      steps.forEach((step, stepIndex) => { step.hidden = stepIndex !== currentStep; });
      if (backButton) backButton.hidden = currentStep === 0;
      if (nextButton) nextButton.hidden = currentStep === steps.length - 1;
      if (submitButton) submitButton.hidden = currentStep !== steps.length - 1;
      const language = document.documentElement.dataset.lang === "en" ? "en" : "de";
      if (stepCounter) stepCounter.textContent = language === "en"
        ? `Step ${currentStep + 1} of ${steps.length}`
        : `Schritt ${currentStep + 1} von ${steps.length}`;
      if (progress) {
        progress.setAttribute("aria-valuemax", String(steps.length));
        progress.setAttribute("aria-valuenow", String(currentStep + 1));
        const fill = progress.querySelector("span");
        if (fill) fill.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
      }
      const heading = steps[currentStep].querySelector("h3");
      if (moveFocus && heading) heading.focus();
    };

    const advance = () => {
      const fields = Array.from(steps[currentStep].querySelectorAll("input, select, textarea"));
      const invalidField = fields.find((field) => !field.checkValidity());
      if (invalidField) {
        invalidField.reportValidity();
        invalidField.focus();
        return;
      }
      showStep(currentStep + 1);
    };

    if (backButton) backButton.addEventListener("click", () => showStep(currentStep - 1));
    if (nextButton) nextButton.addEventListener("click", advance);
    showStep(0, false);

    const messageLabels = {
      de: {
        greeting: "Hallo BEngel Montage,",
        intro: "ich möchte gern folgende Montage anfragen:",
        job: "Leistung",
        scope: "Was soll ungefähr aufgebaut werden?",
        location: "Ort/PLZ",
        floor: "Etage",
        lift: "Aufzug",
        date: "Wunschtermin",
        zone: "Parkzone",
        parking: "Parkmöglichkeit",
        details: "Weitere Angaben",
        photos: "Fotos oder weitere Unterlagen sende ich direkt im Chat.",
        closing: "Viele Grüße",
        invalid: "Bitte wähle eine Leistung aus und trage Ort sowie Postleitzahl ein."
      },
      en: {
        greeting: "Hello BEngel Montage,",
        intro: "I would like to request the following assembly:",
        job: "Service",
        scope: "What needs to be assembled?",
        location: "Town/postcode",
        floor: "Floor",
        lift: "Lift",
        date: "Preferred date",
        zone: "Parking zone",
        parking: "Parking",
        details: "Further details",
        photos: "I will send photos or further documents directly in the chat.",
        closing: "Kind regards",
        invalid: "Please select a service and enter the town and postcode."
      }
    };

    inquiryForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const language = document.documentElement.dataset.lang === "en" ? "en" : "de";
      const labels = messageLabels[language];
      const status = inquiryForm.querySelector(".form-status");

      if (!inquiryForm.checkValidity()) {
        inquiryForm.reportValidity();
        if (status) status.textContent = labels.invalid;
        return;
      }

      const data = new FormData(inquiryForm);
      const selectedText = (name) => {
        const field = inquiryForm.elements[name];
        const option = field && field.selectedOptions ? field.selectedOptions[0] : null;
        return option ? option.textContent.trim() : "";
      };
      const addLine = (lines, label, value) => {
        const cleanValue = String(value || "").trim();
        if (cleanValue) lines.push(`${label}: ${cleanValue}`);
      };

      const lines = [labels.greeting, "", labels.intro];
      addLine(lines, labels.job, selectedText("job"));
      addLine(lines, labels.scope, data.get("scope"));
      addLine(lines, labels.location, data.get("location"));
      addLine(lines, labels.floor, data.get("floor") ? selectedText("floor") : "");
      addLine(lines, labels.lift, data.get("lift") ? selectedText("lift") : "");
      addLine(lines, labels.date, data.get("date"));
      addLine(lines, labels.zone, data.get("zone") ? selectedText("zone") : "");
      addLine(lines, labels.parking, data.get("parking") ? selectedText("parking") : "");
      addLine(lines, labels.details, data.get("details"));
      lines.push("", labels.photos, "", labels.closing);

      const whatsappUrl = `https://wa.me/4915167969682?text=${encodeURIComponent(lines.join("\n"))}`;
      if (status) status.textContent = "";
      window.location.href = whatsappUrl;
    });
  }

  const statsUrl = "assets/taskrabbit-stats.json";
  fetch(statsUrl, { cache: "no-cache" })
    .then((response) => {
      if (!response.ok) throw new Error("Taskrabbit statistics unavailable");
      return response.json();
    })
    .then((stats) => {
      const rating = Number(stats.rating);
      const reviewCount = Number(stats.reviewCount);
      const taskCount = Number(stats.taskCount);
      const updatedAt = typeof stats.updatedAt === "string" ? stats.updatedAt : "";
      if (
        !Number.isFinite(rating) ||
        rating < 0 ||
        rating > 5 ||
        !Number.isInteger(reviewCount) ||
        reviewCount < 0 ||
        !Number.isInteger(taskCount) ||
        taskCount < 0 ||
        Number.isNaN(Date.parse(updatedAt))
      ) {
        throw new Error("Invalid Taskrabbit statistics");
      }

      taskrabbitStats = { rating, reviewCount, taskCount, updatedAt };
      renderTaskrabbitStats(document.documentElement.dataset.lang || "de");
    })
    .catch(() => {
      renderTaskrabbitStats(document.documentElement.dataset.lang || "de");
    });
})();
