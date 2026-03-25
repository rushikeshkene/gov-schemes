const schemeList = document.getElementById("schemeList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const detailsModal = document.getElementById("detailsModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");
const langToggle = document.getElementById("langToggle");
const micBtn = document.getElementById("micBtn");
const resultAlert = document.getElementById("resultAlert");
const resultText = document.getElementById("resultText");
const toastContainer = document.getElementById("toastContainer");

let globalSchemes =[];
let currentLang = "en";
let activeFilter = null;

// Ensure we fetch from Node.js backend on Port 5000, NOT Live Server port.
const API_URL = (window.location.protocol === "file:" || window.location.port !== "5000") 
    ? "http://localhost:5000/api/schemes" 
    : "/api/schemes";

function getText(en, mr) {
  return currentLang === "mr" ? (mr || en || "माहिती उपलब्ध नाही") : (en || "Details not available");
}

function showToast(message) {
  toastContainer.textContent = message;
  toastContainer.classList.remove("hidden");
  setTimeout(() => toastContainer.classList.add("hidden"), 3000);
}

function updateStaticText() {
  document.getElementById("pageTitle").innerHTML = currentLang === "mr" ? "<i class='fas fa-landmark'></i> शासकीय योजना पोर्टल" : "<i class='fas fa-landmark'></i> Government Schemes Portal";
  langToggle.textContent = currentLang === "en" ? "मराठी" : "English";
  searchInput.placeholder = currentLang === "mr" ? "योजनेचे नाव शोधा..." : "Search scheme name...";
  document.getElementById("eligibilityTitle").innerHTML = currentLang === "mr" ? "<i class='fas fa-user-check'></i> तुमची पात्रता तपासा" : "<i class='fas fa-user-check'></i> Check Your Eligibility";
  document.getElementById("btnCheck").innerHTML = currentLang === "mr" ? "<i class='fas fa-magic'></i> योजना शोधा" : "<i class='fas fa-magic'></i> Find Schemes";
  if(micBtn) micBtn.title = currentLang === "mr" ? "आवाजाने शोधा" : "Search by Voice";
}

async function loadSchemes() {
  try {
    document.getElementById("loadingIndicator").classList.remove("hidden");
    
    // The "?v=" prevents the browser from caching old 33 schemes
    const res = await fetch(API_URL + "?v=" + new Date().getTime());
    if (!res.ok) throw new Error("Server response failed");
    
    globalSchemes = await res.json();
    console.log("✅ Successfully loaded schemes count:", globalSchemes.length);
    renderSchemes(globalSchemes);
  } catch (err) {
    console.error("Fetch Error:", err);
    schemeList.innerHTML = `<p style="color:red; text-align:center; grid-column:1/-1;">
      Failed to load schemes. Make sure <b>node server.js</b> is running in the backend folder!
    </p>`;
  } finally {
    document.getElementById("loadingIndicator").classList.add("hidden");
  }
}

// ==========================================
// ELIGIBILITY FILTER LOGIC
// ==========================================
document.getElementById("eligibilityForm").addEventListener("submit", (e) => {
  e.preventDefault();
  activeFilter = {
    age: Number(document.getElementById("elAge").value),
    gender: document.getElementById("elGender").value,
    income: Number(document.getElementById("elIncome").value),
    occupation: document.getElementById("elOccupation").value
  };
  document.getElementById("btnReset").style.display = "flex";
  filterSchemes();
  window.scrollTo({ top: document.querySelector(".controls").offsetTop - 20, behavior: 'smooth' });
});

document.getElementById("btnReset").addEventListener("click", () => {
  activeFilter = null;
  document.getElementById("eligibilityForm").reset();
  document.getElementById("btnReset").style.display = "none";
  resultAlert.classList.add("hidden");
  filterSchemes();
});

function filterSchemes() {
  const searchVal = searchInput.value.toLowerCase().trim();
  const catVal = categoryFilter.value;

  let baseFiltered = globalSchemes.filter(s => {
    const textMatch = getText(s.name, s.nameMr).toLowerCase().includes(searchVal) || getText(s.description, s.descriptionMr).toLowerCase().includes(searchVal);
    const categoryMatch = catVal === "" || s.category === catVal || (s.categoryMr && s.categoryMr === catVal);
    return textMatch && categoryMatch;
  });

  if (activeFilter) {
    const { age, gender, income, occupation } = activeFilter;
    
    let exactMatches = baseFiltered.filter(s => {
      let pass = true;
      const minAge = s.minAge || 0;
      const maxAge = s.maxAge || 150;
      const incomeLimit = s.incomeLimit || 999999999;
      const targetGender = s.targetGender || "All";
      const sOcc = s.occupation || "Any";

      if (age < minAge || age > maxAge) pass = false;
      if (income > incomeLimit) pass = false;
      if (targetGender !== "All" && targetGender !== gender) pass = false;
      if (sOcc !== "Any" && sOcc !== occupation) pass = false;
      return pass;
    });

    if (exactMatches.length > 0) {
      baseFiltered = exactMatches;
      resultAlert.className = "result-alert";
      resultText.innerHTML = currentLang === "mr" 
        ? `अभिनंदन! तुमच्या प्रोफाईलशी जुळणाऱ्या <b>${exactMatches.length}</b> योजना सापडल्या.` 
        : `Success! Found <b>${exactMatches.length}</b> exact schemes matching your profile.`;
    } else {
      // Fallback if no exact match
      baseFiltered = baseFiltered.filter(s => {
        const sOcc = s.occupation || "Any";
        return (sOcc === occupation || s.category === occupation);
      });
      resultAlert.className = "result-alert warning";
      resultText.innerHTML = currentLang === "mr"
        ? `अचूक योजना सापडली नाही, पण <b>${occupation}</b> साठी या <b>${baseFiltered.length}</b> इतर योजना पहा:`
        : `No exact match found, but here are <b>${baseFiltered.length}</b> similar schemes for <b>${occupation}</b>:`;
    }
    resultAlert.classList.remove("hidden");
  } else {
    resultAlert.classList.add("hidden");
  }

  renderSchemes(baseFiltered);
}

function renderSchemes(schemes) {
  schemeList.innerHTML = "";
  if (schemes.length === 0) {
    schemeList.innerHTML = `<p style="grid-column:1/-1; text-align:center;">No schemes found.</p>`;
    return;
  }
  schemes.forEach(s => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <span class="badge">${getText(s.category, s.categoryMr)}</span>
      <h3>${getText(s.name, s.nameMr)}</h3>
      <p>${getText(s.description, s.descriptionMr).substring(0, 100)}...</p>
      <div class="button-row">
        <button class="details-btn" onclick="openDetails(${s.id})">Details</button>
        ${s.link ? `<a class="apply-btn" href="${s.link}" target="_blank">Apply</a>` : `<span class="details-btn" style="background:#fee2e2; color:#ef4444;">No Link</span>`}
      </div>
    `;
    schemeList.appendChild(card);
  });
}

function openDetails(id) {
  const scheme = globalSchemes.find(s => s.id === id);
  if (!scheme) return;
  const docs = currentLang === "mr" ? (scheme.documentsMr || scheme.documents) : scheme.documents;
  
  modalBody.innerHTML = `
    <h2 style="color:var(--primary-color); margin-top:0;">${getText(scheme.name, scheme.nameMr)}</h2>
    <hr style="border:0; height:1px; background:#e2e8f0; margin-bottom:15px;">
    <div class="detail-group"><h4>Description</h4><p>${getText(scheme.description, scheme.descriptionMr)}</p></div>
    <div class="detail-group"><h4>Benefits</h4><p>${getText(scheme.benefits, scheme.benefitsMr)}</p></div>
    <div class="detail-group"><h4>Eligibility</h4><p>${getText(scheme.eligibility, scheme.eligibilityMr)}</p></div>
    <div class="detail-group"><h4>Required Documents</h4><ul>${docs ? docs.map(d => `<li>${d}</li>`).join('') : '<li>N/A</li>'}</ul></div>
  `;
  detailsModal.classList.remove("hidden");
}

// ==========================================
// FIX: VOICE SEARCH & EVENTS
// ==========================================
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;
if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.onstart = () => { 
    micBtn.classList.add("listening"); 
    showToast(currentLang === 'mr' ? "मी ऐकत आहे... बोला" : "Listening... Speak now");
  };
  recognition.onend = () => { 
    micBtn.classList.remove("listening"); 
  };
  recognition.onerror = (e) => {
    micBtn.classList.remove("listening");
    if(e.error === 'not-allowed') showToast("Microphone permission blocked.");
    else showToast("Speech not recognized. Try again.");
  };
  recognition.onresult = (e) => {
    const text = e.results[0][0].transcript.toLowerCase();
    searchInput.value = text;
    showToast(`Searched: "${text}"`);

    // Smart Keyword Detection
    if(text.includes("शेतकरी") || text.includes("farmer")) categoryFilter.value = "Farmer";
    else if(text.includes("विद्यार्थी") || text.includes("student")) categoryFilter.value = "Education";
    else if(text.includes("महिला") || text.includes("women")) categoryFilter.value = "Women";
    
    filterSchemes();
  };
}

function toggleVoiceSearch() {
  if (!SpeechRecognition) return showToast("Mic not supported in this browser. Please use Chrome/Edge.");
  
  if (micBtn.classList.contains("listening")) {
    recognition.stop();
  } else {
    // FIX: Must set language BEFORE starting recognition
    recognition.lang = currentLang === "mr" ? "mr-IN" : "en-IN";
    try {
      recognition.start();
    } catch(e) {
      console.error(e);
    }
  }
}

// Feedback Form Handler
document.getElementById("feedbackForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("fbName").value;
  const contact = document.getElementById("fbContact").value;
  const query = document.getElementById("fbQuery").value;
  document.getElementById("btnSubmitFeedback").innerHTML = `Submitting...`;
const FEEDBACK_URL = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" 
    ? "http://localhost:5000/api/feedback" 
    : "/api/feedback";
  try {
    const res = await fetch(FEEDBACK_URL, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, contact, query })
    });
    if (res.ok) {
      showToast(currentLang === "mr" ? "अभिप्राय यशस्वीरीत्या पाठवला!" : "Feedback submitted!");
      document.getElementById("feedbackForm").reset();
    }
  } catch(err) {
    showToast("Error submitting feedback.");
  } finally {
    document.getElementById("btnSubmitFeedback").innerHTML = `<i class="fas fa-paper-plane"></i> Submit`;
  }
});

searchInput.addEventListener("input", filterSchemes);
categoryFilter.addEventListener("change", filterSchemes);
closeModal.addEventListener("click", () => detailsModal.classList.add("hidden"));
langToggle.addEventListener("click", () => { currentLang = currentLang === "en" ? "mr" : "en"; updateStaticText(); filterSchemes(); });

updateStaticText();
loadSchemes();