/**
 * Mobile Guest App Render Engine (20 Screens) - Red, Gray & Maroon Luxury Identity
 */

function renderMobileShell() {
  const currentScreen = appStore.currentMobileScreen;
  const isFullWidth = window.mobileFullWidthMode || false;

  return `
    <div class="p-4 sm:p-6 min-h-[calc(100vh-65px)] bg-brandGray900 space-y-4">
      <!-- Screen Switcher Bar & View Mode Toggle (Phone Frame vs Full Desktop Canvas) -->
      <div class="max-w-4xl mx-auto p-3 rounded-2xl bg-brandGray800 border border-brandGray700 flex flex-wrap items-center justify-between gap-3 shadow-xl">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-brandRedLight animate-pulse"></span>
          <span class="text-xs font-bold text-white uppercase tracking-wider">Screen ${currentScreen} / 20</span>
        </div>

        <div class="flex items-center gap-3">
          <!-- Dropdown Screen Selector -->
          <select onchange="appStore.setMobileScreen(parseInt(this.value))" class="bg-brandGray900 text-white text-xs font-semibold py-1.5 px-3 rounded-xl border border-brandGray700 focus:outline-none focus:border-brandRed">
            <optgroup label="Main Flow (1-3)">
              <option value="1" ${currentScreen === 1 ? 'selected' : ''}>1. Welcome / Home Screen</option>
              <option value="2" ${currentScreen === 2 ? 'selected' : ''}>2. User Profile & Active Tokens</option>
              <option value="3" ${currentScreen === 3 ? 'selected' : ''}>3. Global Notifications</option>
            </optgroup>
            <optgroup label="Hotel Module (4-9)">
              <option value="4" ${currentScreen === 4 ? 'selected' : ''}>4. Hotel Landing & Search</option>
              <option value="5" ${currentScreen === 5 ? 'selected' : ''}>5. Room Listing & Category Filters</option>
              <option value="6" ${currentScreen === 6 ? 'selected' : ''}>6. Room Details & 360° View</option>
              <option value="7" ${currentScreen === 7 ? 'selected' : ''}>7. Add-Ons & Requests</option>
              <option value="8" ${currentScreen === 8 ? 'selected' : ''}>8. Hotel Checkout & Card Payment</option>
              <option value="9" ${currentScreen === 9 ? 'selected' : ''}>9. Check-In Token Screen</option>
            </optgroup>
            <optgroup label="Restaurant Module (10-16)">
              <option value="10" ${currentScreen === 10 ? 'selected' : ''}>10. Restaurant Main Menu</option>
              <option value="11" ${currentScreen === 11 ? 'selected' : ''}>11. Food Customization Modal</option>
              <option value="12" ${currentScreen === 12 ? 'selected' : ''}>12. Cellar Wines & Beverages</option>
              <option value="13" ${currentScreen === 13 ? 'selected' : ''}>13. Dining Cart Summary</option>
              <option value="14" ${currentScreen === 14 ? 'selected' : ''}>14. Delivery Address & Notes</option>
              <option value="15" ${currentScreen === 15 ? 'selected' : ''}>15. Dining Payment & Room Bill</option>
              <option value="16" ${currentScreen === 16 ? 'selected' : ''}>16. Order Status & KDS Live Tracker</option>
            </optgroup>
            <optgroup label="Wellness Module (17-20)">
              <option value="17" ${currentScreen === 17 ? 'selected' : ''}>17. Wellness & Pool Landing</option>
              <option value="18" ${currentScreen === 18 ? 'selected' : ''}>18. Pass Selection & Tiers</option>
              <option value="19" ${currentScreen === 19 ? 'selected' : ''}>19. Wellness Pass Checkout</option>
              <option value="20" ${currentScreen === 20 ? 'selected' : ''}>20. Pass Digital Access QR Code</option>
            </optgroup>
          </select>

          <!-- Toggle View Frame Mode -->
          <div class="flex items-center gap-1 bg-brandGray900 p-1 rounded-xl border border-brandGray700">
            <button onclick="window.mobileFullWidthMode = false; appStore.notify();" class="px-2.5 py-1 rounded-lg text-xs font-bold ${!isFullWidth ? 'bg-brandRed text-white' : 'text-brandGray600 hover:text-white'}">
              📱 Phone View
            </button>
            <button onclick="window.mobileFullWidthMode = true; appStore.notify();" class="px-2.5 py-1 rounded-lg text-xs font-bold ${isFullWidth ? 'bg-brandRed text-white' : 'text-brandGray600 hover:text-white'}">
              🖥️ Full Canvas
            </button>
          </div>
        </div>
      </div>

      <!-- Container Body: Phone Frame or Full Canvas -->
      ${isFullWidth ? `
        <!-- Full Canvas View Mode -->
        <div class="max-w-4xl mx-auto p-6 bg-brandGray800 border border-brandGray700 rounded-3xl shadow-2xl space-y-6">
          ${renderScreenContent(currentScreen)}
        </div>
      ` : `
        <!-- Realistic Titanium Phone Frame Simulator -->
        <div class="mobile-device-container">
          <div class="phone-shell">
            <div class="phone-screen">
              <div class="phone-notch">
                <div class="phone-notch-camera"></div>
                <div class="phone-notch-speaker"></div>
              </div>

              <!-- Phone Status Bar -->
              <div class="pt-8 px-6 pb-2 flex items-center justify-between text-[11px] font-semibold text-brandGray200 z-30">
                <span>9:41</span>
                <div class="flex items-center gap-1.5">
                  <i data-lucide="signal" class="w-3 h-3"></i>
                  <i data-lucide="wifi" class="w-3 h-3"></i>
                  <i data-lucide="battery-charging" class="w-3.5 h-3.5 text-brandRedLight"></i>
                </div>
              </div>

              <!-- Screen Scrollable Area -->
              <div class="screen-scrollable">
                ${renderScreenContent(currentScreen)}
              </div>

              <!-- Bottom Nav Bar -->
              <div class="mobile-bottom-nav">
                <button onclick="appStore.setMobileScreen(1)" class="nav-tab-btn ${[1, 4, 10, 17].includes(currentScreen) ? 'active' : ''}">
                  <i data-lucide="home" class="w-5 h-5"></i>
                  <span>Home</span>
                </button>
                <button onclick="appStore.setMobileScreen(5)" class="nav-tab-btn ${[5, 6, 7, 8, 9].includes(currentScreen) ? 'active' : ''}">
                  <i data-lucide="hotel" class="w-5 h-5"></i>
                  <span>Stay</span>
                </button>
                <button onclick="appStore.setMobileScreen(10)" class="nav-tab-btn ${[10, 11, 12, 13, 14, 15, 16].includes(currentScreen) ? 'active' : ''}">
                  <i data-lucide="utensils" class="w-5 h-5"></i>
                  <span>Dine</span>
                </button>
                <button onclick="appStore.setMobileScreen(17)" class="nav-tab-btn ${[17, 18, 19, 20].includes(currentScreen) ? 'active' : ''}">
                  <i data-lucide="waves" class="w-5 h-5"></i>
                  <span>Wellness</span>
                </button>
                <button onclick="appStore.setMobileScreen(2)" class="nav-tab-btn ${[2, 3].includes(currentScreen) ? 'active' : ''}">
                  <i data-lucide="user" class="w-5 h-5"></i>
                  <span>Profile</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `}
    </div>
  `;
}

function renderScreenContent(screenNum) {
  switch (screenNum) {
    case 1: return renderWelcomeScreen();
    case 2: return renderProfileScreen();
    case 3: return renderNotificationsScreen();
    case 4: return renderHotelLandingScreen();
    case 5: return renderRoomListingScreen();
    case 6: return renderRoomDetailsScreen();
    case 7: return renderAddOnsScreen();
    case 8: return renderHotelCheckoutScreen();
    case 9: return renderBookingConfirmationScreen();
    case 10: return renderRestaurantMainScreen();
    case 11: return renderFoodDetailsModal();
    case 12: return renderDrinksScreen();
    case 13: return renderCartScreen();
    case 14: return renderDeliveryInstructionsScreen();
    case 15: return renderRestaurantCheckoutScreen();
    case 16: return renderOrderStatusScreen();
    case 17: return renderWellnessLandingScreen();
    case 18: return renderPassSelectionScreen();
    case 19: return renderWellnessCheckoutScreen();
    case 20: return renderPassDigitalAccessScreen();
    default: return renderWelcomeScreen();
  }
}

// -------------------------------------------------------------
// SCREEN 1: WELCOME SCREEN (Red, Gray & Maroon Luxury Theme)
// -------------------------------------------------------------
function renderWelcomeScreen() {
  return `
    <div class="relative min-h-[640px] flex flex-col justify-between p-6 bg-cover bg-center rounded-2xl" style="background-image: linear-gradient(to bottom, rgba(63, 0, 10, 0.65), rgba(17, 24, 39, 0.96)), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80');">
      <!-- Top Brand Rule -->
      <div class="flex items-center justify-between pt-2">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-brandRed to-brandMaroon flex items-center justify-center border border-white/20">
            <i data-lucide="crown" class="w-4 h-4 text-white"></i>
          </div>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(3)" class="relative p-2 rounded-full bg-brandGray800/80 border border-brandGray700 text-white hover:border-brandRed transition-all">
            <i data-lucide="bell" class="w-4 h-4"></i>
            <span class="absolute top-1 right-1 w-2 h-2 rounded-full bg-brandRed"></span>
          </button>
          <button onclick="appStore.setMobileScreen(2)" class="p-2 rounded-full bg-brandGray800/80 border border-brandGray700 text-white hover:border-brandRed transition-all">
            <i data-lucide="user" class="w-4 h-4"></i>
          </button>
        </div>
      </div>

      <!-- Welcome Hero Message -->
      <div class="my-auto py-8">
        <span class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brandMaroon border border-brandRed/40 text-brandRedLight text-xs font-bold uppercase tracking-wider mb-4">
          <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
          Welcome to Maiduguri
        </span>
        <h1 class="font-outfit font-black text-3xl text-white leading-tight">
          Unrivaled Luxury <br/><span class="text-brandRedLight">& Extraordinary</span> Experience
        </h1>
        <p class="text-xs text-brandGray200 mt-2 font-normal leading-relaxed">
          Indulge in 5-star hotel accommodations, gourmet fine dining, and exclusive wellness membership.
        </p>
      </div>

      <!-- 3 Primary Luxury Buttons (Red, Gray & Maroon Accent) -->
      <div class="space-y-3 mb-2">
        <button onclick="appStore.setMobileScreen(4)" class="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-brandRed via-brandRedDark to-brandMaroon text-white font-outfit font-bold text-sm tracking-wide flex items-center justify-between shadow-xl shadow-brandRed/30 hover:scale-[1.01] transition-all">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <i data-lucide="hotel" class="w-5 h-5 text-white"></i>
            </div>
            <div class="text-left">
              <div class="text-sm uppercase tracking-wider">STAY</div>
              <div class="text-[10px] text-white/80 font-normal">Hotel Rooms & Luxury Suites</div>
            </div>
          </div>
          <i data-lucide="chevron-right" class="w-5 h-5 text-white/80"></i>
        </button>

        <button onclick="appStore.setMobileScreen(10)" class="w-full py-4 px-5 rounded-2xl bg-brandGray800 border border-brandGray700 text-white font-outfit font-bold text-sm tracking-wide flex items-center justify-between hover:border-brandRed transition-all">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-brandMaroon flex items-center justify-center text-brandRedLight border border-brandRed/30">
              <i data-lucide="utensils" class="w-5 h-5"></i>
            </div>
            <div class="text-left">
              <div class="text-sm uppercase tracking-wider">DINE</div>
              <div class="text-[10px] text-brandGray200 font-normal">Gourmet Restaurant & Room Service</div>
            </div>
          </div>
          <i data-lucide="chevron-right" class="w-5 h-5 text-brandGray200"></i>
        </button>

        <button onclick="appStore.setMobileScreen(17)" class="w-full py-4 px-5 rounded-2xl bg-brandGray800 border border-brandGray700 text-white font-outfit font-bold text-sm tracking-wide flex items-center justify-between hover:border-brandRed transition-all">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-brandMaroon flex items-center justify-center text-brandRedLight border border-brandRed/30">
              <i data-lucide="waves" class="w-5 h-5"></i>
            </div>
            <div class="text-left">
              <div class="text-sm uppercase tracking-wider">WELLNESS</div>
              <div class="text-[10px] text-brandGray200 font-normal">Infinity Pool, Spa & VIP Gym</div>
            </div>
          </div>
          <i data-lucide="chevron-right" class="w-5 h-5 text-brandGray200"></i>
        </button>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 2: USER PROFILE & BOOKING HISTORY
// -------------------------------------------------------------
function renderProfileScreen() {
  const activeBooking = appStore.bookings[0];
  const activePass = appStore.wellnessPasses[0];

  return `
    <div class="p-5 space-y-5">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-brandRed flex items-center justify-center border border-white/20">
            <i data-lucide="crown" class="w-4 h-4 text-white"></i>
          </div>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <h2 class="font-outfit font-bold text-base text-white">Guest Profile</h2>
      </div>

      <div class="p-4 rounded-2xl bg-brandGray800 border border-brandGray700 flex items-center gap-4 shadow-lg">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" class="w-14 h-14 rounded-full border-2 border-brandRed object-cover">
        <div>
          <h3 class="font-outfit font-bold text-base text-white">Alhaji Ibrahim Usman</h3>
          <p class="text-xs text-brandRedLight font-medium">VIP Gold Member #CS-9902</p>
          <p class="text-[11px] text-brandGray200">ibrahim.u@citystar.ng</p>
        </div>
      </div>

      <!-- Active Check-In Token -->
      <div class="p-4 rounded-2xl bg-brandMaroonDark border border-brandRed/50 space-y-2">
        <div class="flex items-center justify-between text-xs text-brandRedLight font-bold">
          <span class="flex items-center gap-1.5"><i data-lucide="key" class="w-4 h-4"></i> ACTIVE FRONT DESK TOKEN</span>
          <span class="px-2 py-0.5 rounded-full bg-brandRed/30 text-[10px]">Ready</span>
        </div>
        <div class="flex items-center justify-between bg-brandGray900 p-3 rounded-xl border border-brandGray700">
          <div>
            <div class="text-[11px] text-brandGray200">Guest Room</div>
            <div class="text-xs font-bold text-white">${activeBooking ? activeBooking.roomName : 'Presidential Suite'}</div>
          </div>
          <div class="text-right">
            <div class="text-[10px] text-brandGray200">6-Digit Code</div>
            <div class="font-mono text-lg font-black text-brandRedLight tracking-widest">${activeBooking ? activeBooking.token : 'CS-7892'}</div>
          </div>
        </div>
      </div>

      <!-- Active Pass -->
      <div class="p-4 rounded-2xl bg-brandGray800 border border-brandGray700 space-y-3">
        <div class="flex items-center justify-between">
          <h4 class="font-outfit font-bold text-xs text-white uppercase flex items-center gap-1.5">
            <i data-lucide="qr-code" class="w-4 h-4 text-brandRedLight"></i> Active Wellness Pass
          </h4>
          <button onclick="appStore.setMobileScreen(20)" class="text-xs text-brandRedLight font-semibold hover:underline">View QR</button>
        </div>
        <div class="flex items-center justify-between text-xs text-brandGray200">
          <span>${activePass ? activePass.passType : 'All-Access Combo'}</span>
          <span class="px-2.5 py-0.5 rounded-full bg-brandRed/20 text-brandRedLight border border-brandRed/40 font-bold text-[10px]">Valid</span>
        </div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 3: GLOBAL NOTIFICATIONS
// -------------------------------------------------------------
function renderNotificationsScreen() {
  const notifs = appStore.notifications;

  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(1)" class="p-1.5 rounded-lg bg-brandGray800 text-brandGray200 border border-brandGray700">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <h2 class="font-outfit font-bold text-base text-white">Notifications</h2>
      </div>

      <div class="space-y-3">
        ${notifs.map(n => `
          <div class="p-4 rounded-2xl bg-brandGray800 border border-brandGray700 flex items-start gap-3">
            <div class="w-8 h-8 rounded-xl bg-brandMaroon text-brandRedLight flex items-center justify-center flex-shrink-0 mt-0.5 border border-brandRed/30">
              <i data-lucide="${n.type === 'token' ? 'key' : n.type === 'kitchen' ? 'utensils' : 'bell'}" class="w-4 h-4"></i>
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <h4 class="font-outfit font-bold text-xs text-white">${n.title}</h4>
                <span class="text-[10px] text-brandGray200">${n.time}</span>
              </div>
              <p class="text-xs text-brandGray200 mt-1 leading-relaxed">${n.text}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 4: HOTEL LANDING SCREEN
// -------------------------------------------------------------
function renderHotelLandingScreen() {
  return `
    <div class="relative min-h-[600px] flex flex-col justify-between p-5 bg-cover bg-center rounded-2xl" style="background-image: linear-gradient(to bottom, rgba(63, 0, 10, 0.6), rgba(17, 24, 39, 0.95)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80');">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(1)" class="p-1.5 rounded-lg bg-brandGray800 text-white border border-brandGray700">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <span class="text-xs font-bold text-brandRedLight uppercase tracking-wider">Hotel Module</span>
      </div>

      <div class="my-auto py-6">
        <h1 class="font-outfit font-black text-2xl text-white">Find Your Sanctuary</h1>
        <p class="text-xs text-brandGray200 mt-1">Discover world-class luxury rooms & suites in Maiduguri.</p>
      </div>

      <div class="p-5 rounded-2xl bg-brandGray800/95 border border-brandGray700 space-y-4 backdrop-blur-xl shadow-2xl">
        <div class="space-y-1">
          <label class="text-[10px] font-bold text-brandGray200 uppercase tracking-wider">Dates of Stay</label>
          <div class="flex items-center gap-2 bg-brandGray900 p-3 rounded-xl border border-brandGray700 text-xs text-white">
            <i data-lucide="calendar" class="w-4 h-4 text-brandRedLight"></i>
            <span class="font-semibold">Sep 10, 2026</span>
            <span class="text-brandGray600">→</span>
            <span class="font-semibold">Sep 14, 2026</span>
          </div>
        </div>

        <button onclick="appStore.setMobileScreen(5)" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-brandRed to-brandMaroon text-white font-outfit font-bold text-xs uppercase tracking-wider shadow-lg shadow-brandRed/30 flex items-center justify-center gap-2">
          <i data-lucide="search" class="w-4 h-4"></i>
          Search Available Suites
        </button>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 5: ROOM LISTING
// -------------------------------------------------------------
function renderRoomListingScreen() {
  const rooms = appStore.rooms;

  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(4)" class="p-1.5 rounded-lg bg-brandGray800 text-white border border-brandGray700">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <h2 class="font-outfit font-bold text-sm text-white">Available Suites (${rooms.length})</h2>
      </div>

      <div class="space-y-4">
        ${rooms.map(room => `
          <div onclick="appStore.selectRoom('${room.id}')" class="rounded-2xl bg-brandGray800 border border-brandGray700 overflow-hidden shadow-lg hover:border-brandRed transition-all cursor-pointer">
            <div class="relative h-44 bg-cover bg-center" style="background-image: url('${room.image}');">
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-brandMaroonDark/90 text-[10px] font-bold text-white uppercase border border-brandRed/30">${room.category}</span>
              <span class="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-brandRed text-white font-outfit font-bold text-xs shadow-lg">$${room.price} / night</span>
            </div>
            <div class="p-4 space-y-2">
              <div class="flex items-center justify-between">
                <h3 class="font-outfit font-bold text-base text-white">${room.name}</h3>
                <div class="flex items-center gap-1 text-brandRedLight text-xs font-bold">
                  <i data-lucide="star" class="w-3.5 h-3.5 fill-brandRed"></i>
                  <span>${room.rating}</span>
                </div>
              </div>
              <p class="text-xs text-brandGray200 line-clamp-2">${room.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 6: ROOM DETAILS
// -------------------------------------------------------------
function renderRoomDetailsScreen() {
  const room = appStore.rooms.find(r => r.id === appStore.selectedRoomId) || appStore.rooms[0];

  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(5)" class="p-1.5 rounded-lg bg-brandGray800 text-white border border-brandGray700">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <span class="text-xs text-brandRedLight font-bold">Suite Details</span>
      </div>

      <div class="relative h-56 rounded-2xl overflow-hidden border border-brandGray700 bg-cover bg-center" style="background-image: url('${room.image}');"></div>

      <div>
        <div class="flex items-center justify-between">
          <h2 class="font-outfit font-bold text-lg text-white">${room.name}</h2>
          <span class="font-outfit font-black text-xl text-brandRedLight">$${room.price}/night</span>
        </div>
        <p class="text-xs text-brandGray200 mt-2 leading-relaxed">${room.description}</p>
      </div>

      <button onclick="appStore.setMobileScreen(7)" class="w-full py-4 rounded-xl bg-gradient-to-r from-brandRed to-brandMaroon text-white font-outfit font-bold text-xs uppercase tracking-wider shadow-xl shadow-brandRed/30 flex items-center justify-center gap-2">
        Reserve Suite & Add-Ons
        <i data-lucide="arrow-right" class="w-4 h-4"></i>
      </button>
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 7: ADD-ONS
// -------------------------------------------------------------
function renderAddOnsScreen() {
  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(6)" class="p-1.5 rounded-lg bg-brandGray800 text-white border border-brandGray700">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <h2 class="font-outfit font-bold text-sm text-white">Customize Add-Ons</h2>
      </div>

      <div class="space-y-3">
        <label class="p-4 rounded-2xl bg-brandGray800 border border-brandGray700 flex items-center justify-between cursor-pointer">
          <div>
            <div class="text-xs font-bold text-white">Gourmet Breakfast Buffet</div>
            <div class="text-[10px] text-brandGray200">Daily international breakfast spread</div>
          </div>
          <span class="text-xs font-bold text-brandRedLight">+$35 / day</span>
        </label>
      </div>

      <button onclick="appStore.setMobileScreen(8)" class="w-full py-4 rounded-xl bg-brandRed text-white font-outfit font-bold text-xs uppercase tracking-wider shadow-xl shadow-brandRed/30">
        Proceed to Checkout
      </button>
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 8: HOTEL CHECKOUT
// -------------------------------------------------------------
function renderHotelCheckoutScreen() {
  const room = appStore.rooms.find(r => r.id === appStore.selectedRoomId) || appStore.rooms[0];

  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(7)" class="p-1.5 rounded-lg bg-brandGray800 text-white border border-brandGray700">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <h2 class="font-outfit font-bold text-sm text-white">Payment Gateway</h2>
      </div>

      <div class="p-5 rounded-2xl bg-gradient-to-tr from-brandMaroonDark via-brandMaroon to-brandRed text-white shadow-2xl border border-white/20 space-y-6">
        <div class="flex justify-between items-center">
          <span class="font-outfit font-black text-sm tracking-widest uppercase">City Star VIP</span>
          <i data-lucide="wifi" class="w-5 h-5 text-white/80"></i>
        </div>
        <div class="font-mono text-base tracking-widest font-bold">4892 •••• •••• 1092</div>
      </div>

      <button onclick="appStore.bookRoom()" class="w-full py-4 rounded-xl bg-brandRed text-white font-outfit font-bold text-xs uppercase tracking-wider shadow-xl shadow-brandRed/40 flex items-center justify-center gap-2">
        Confirm & Generate Check-In Token
      </button>
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 9: BOOKING CONFIRMATION & TOKEN SCREEN
// -------------------------------------------------------------
function renderBookingConfirmationScreen() {
  const latestBooking = appStore.bookings[0] || { token: 'CS-7892', roomName: 'Presidential Suite' };

  return `
    <div class="p-5 text-center space-y-5 my-auto">
      <div class="w-16 h-16 rounded-full bg-brandMaroon text-brandRedLight border border-brandRed/40 flex items-center justify-center mx-auto shadow-2xl">
        <i data-lucide="check" class="w-8 h-8"></i>
      </div>

      <h2 class="font-outfit font-black text-xl text-white">Booking Confirmed!</h2>

      <div class="p-6 rounded-3xl bg-brandGray800 border-2 border-brandRed shadow-2xl space-y-3">
        <span class="text-[10px] font-bold text-brandRedLight uppercase tracking-widest">FRONT DESK CHECK-IN TOKEN</span>
        <div class="font-mono font-black text-3xl text-white tracking-widest py-2 bg-brandGray900 rounded-xl border border-brandGray700 text-brandRedLight">
          ${latestBooking.token}
        </div>
        <div class="text-xs text-brandGray200 font-semibold">${latestBooking.roomName}</div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 10: RESTAURANT MAIN SCREEN
// -------------------------------------------------------------
function renderRestaurantMainScreen() {
  const menu = appStore.menuItems;

  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(1)" class="p-1.5 rounded-lg bg-brandGray800 text-white border border-brandGray700">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <button onclick="appStore.setMobileScreen(13)" class="relative p-2 rounded-xl bg-brandRed text-white">
          <i data-lucide="shopping-bag" class="w-4 h-4"></i>
        </button>
      </div>

      <div class="space-y-3">
        ${menu.map(item => `
          <div onclick="appStore.selectFood('${item.id}')" class="p-3 rounded-2xl bg-brandGray800 border border-brandGray700 flex gap-3 cursor-pointer hover:border-brandRed transition-all">
            <img src="${item.image}" class="w-20 h-20 rounded-xl object-cover">
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-outfit font-bold text-xs text-white">${item.name}</h3>
                <p class="text-[10px] text-brandGray200 mt-1 leading-tight">${item.description}</p>
              </div>
              <span class="font-outfit font-bold text-xs text-brandRedLight">$${item.price}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Placeholder helper functions for screens 11 to 20
function renderFoodDetailsModal() { return renderRestaurantMainScreen(); }
function renderDrinksScreen() { return renderRestaurantMainScreen(); }
function renderCartScreen() { return renderRestaurantMainScreen(); }
function renderDeliveryInstructionsScreen() { return renderRestaurantMainScreen(); }
function renderRestaurantCheckoutScreen() { return renderRestaurantMainScreen(); }
function renderOrderStatusScreen() { return renderRestaurantMainScreen(); }

function renderWellnessLandingScreen() {
  return `
    <div class="p-5 space-y-4">
      <h2 class="font-outfit font-bold text-base text-white">Wellness & Pool Suite</h2>
      <button onclick="appStore.setMobileScreen(18)" class="w-full py-4 rounded-xl bg-brandRed text-white font-bold text-xs uppercase">Select Pass Tier</button>
    </div>
  `;
}
function renderPassSelectionScreen() {
  return `
    <div class="p-5 space-y-4">
      <h2 class="font-outfit font-bold text-base text-white">Pass Selection</h2>
      <button onclick="appStore.purchaseWellnessPass('Monthly VIP', 'All-Access Combo', 350)" class="w-full py-4 rounded-xl bg-brandRed text-white font-bold text-xs uppercase">Purchase VIP Pass ($350)</button>
    </div>
  `;
}
function renderWellnessCheckoutScreen() { return renderPassSelectionScreen(); }
function renderPassDigitalAccessScreen() {
  const pass = appStore.wellnessPasses[0] || { qrCode: 'CS-PASS-771-VIP', status: 'Active' };
  return `
    <div class="p-5 text-center space-y-4">
      <h2 class="font-outfit font-bold text-base text-white">Digital Access QR Pass</h2>
      <div class="p-6 rounded-3xl bg-brandGray800 border-4 border-brandRed shadow-2xl">
        <div class="font-mono text-lg text-brandRedLight font-bold">${pass.qrCode}</div>
      </div>
    </div>
  `;
}
