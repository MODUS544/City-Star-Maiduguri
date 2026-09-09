/**
 * Mobile Guest App Render Engine (20 Screens)
 */

function renderMobileShell() {
  const currentScreen = appStore.currentMobileScreen;

  return `
    <div class="mobile-device-container">
      <div class="phone-shell">
        <div class="phone-screen">
          <!-- Dynamic Top Notch -->
          <div class="phone-notch">
            <div class="phone-notch-camera"></div>
            <div class="phone-notch-speaker"></div>
          </div>

          <!-- Status Bar -->
          <div class="pt-8 px-6 pb-2 flex items-center justify-between text-[11px] font-semibold text-slate-300 z-30">
            <span>9:41</span>
            <div class="flex items-center gap-1.5">
              <i data-lucide="signal" class="w-3 h-3"></i>
              <i data-lucide="wifi" class="w-3 h-3"></i>
              <i data-lucide="battery-charging" class="w-3.5 h-3.5 text-emerald-400"></i>
            </div>
          </div>

          <!-- Screen Switcher Toolbar (For Easy Navigation during Testing) -->
          <div class="px-4 py-1.5 bg-charcoal-800/90 border-b border-white/10 flex items-center justify-between z-30">
            <span class="text-[10px] font-bold text-crimson-light uppercase tracking-wider">Screen ${currentScreen} / 20</span>
            <select onchange="appStore.setMobileScreen(parseInt(this.value))" class="bg-charcoal-700 text-white text-[11px] py-1 px-2 rounded-lg border border-white/20 focus:outline-none">
              <optgroup label="Main Flow (1-3)">
                <option value="1" ${currentScreen === 1 ? 'selected' : ''}>1. Welcome Screen</option>
                <option value="2" ${currentScreen === 2 ? 'selected' : ''}>2. User Profile & Tokens</option>
                <option value="3" ${currentScreen === 3 ? 'selected' : ''}>3. Global Notifications</option>
              </optgroup>
              <optgroup label="Hotel Module (4-9)">
                <option value="4" ${currentScreen === 4 ? 'selected' : ''}>4. Hotel Landing</option>
                <option value="5" ${currentScreen === 5 ? 'selected' : ''}>5. Room Listing & Filters</option>
                <option value="6" ${currentScreen === 6 ? 'selected' : ''}>6. Room Details</option>
                <option value="7" ${currentScreen === 7 ? 'selected' : ''}>7. Add-Ons & Requests</option>
                <option value="8" ${currentScreen === 8 ? 'selected' : ''}>8. Hotel Checkout</option>
                <option value="9" ${currentScreen === 9 ? 'selected' : ''}>9. Check-In Token Screen</option>
              </optgroup>
              <optgroup label="Restaurant Module (10-16)">
                <option value="10" ${currentScreen === 10 ? 'selected' : ''}>10. Restaurant Main</option>
                <option value="11" ${currentScreen === 11 ? 'selected' : ''}>11. Food Customization</option>
                <option value="12" ${currentScreen === 12 ? 'selected' : ''}>12. Drinks & Beverages</option>
                <option value="13" ${currentScreen === 13 ? 'selected' : ''}>13. Dining Cart</option>
                <option value="14" ${currentScreen === 14 ? 'selected' : ''}>14. Delivery Address</option>
                <option value="15" ${currentScreen === 15 ? 'selected' : ''}>15. Dining Checkout</option>
                <option value="16" ${currentScreen === 16 ? 'selected' : ''}>16. Order Live Tracker</option>
              </optgroup>
              <optgroup label="Wellness Module (17-20)">
                <option value="17" ${currentScreen === 17 ? 'selected' : ''}>17. Wellness Landing</option>
                <option value="18" ${currentScreen === 18 ? 'selected' : ''}>18. Pass Selection</option>
                <option value="19" ${currentScreen === 19 ? 'selected' : ''}>19. Pass Checkout</option>
                <option value="20" ${currentScreen === 20 ? 'selected' : ''}>20. Pass Digital Access QR</option>
              </optgroup>
            </select>
          </div>

          <!-- Main Scrollable Screen Content -->
          <div class="screen-scrollable">
            ${renderScreenContent(currentScreen)}
          </div>

          <!-- Bottom Mobile Nav Bar -->
          <div class="mobile-bottom-nav">
            <button onclick="appStore.setMobileScreen(1)" class="nav-tab-btn ${[1, 4, 10, 17].includes(currentScreen) ? 'active' : ''}">
              <i data-lucide="home" class="w-5 h-5"></i>
              <span>Home</span>
            </button>
            <button onclick="appStore.setMobileScreen(5)" class="nav-tab-btn ${[5, 6, 7, 8, 9].includes(currentScreen) ? 'active' : ''}">
              <i data-lucide="bed-double" class="w-5 h-5"></i>
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
// SCREEN 1: WELCOME SCREEN
// -------------------------------------------------------------
function renderWelcomeScreen() {
  return `
    <div class="relative min-h-full flex flex-col justify-between p-6 bg-cover bg-center" style="background-image: linear-gradient(to bottom, rgba(16, 16, 21, 0.4), rgba(16, 16, 21, 0.95)), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80');">
      <!-- Top Brand Header Rule -->
      <div class="flex items-center justify-between pt-2">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-crimson flex items-center justify-center border border-white/20">
            <i data-lucide="crown" class="w-4 h-4 text-white"></i>
          </div>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(3)" class="relative p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
            <i data-lucide="bell" class="w-4 h-4"></i>
            <span class="absolute top-1 right-1 w-2 h-2 rounded-full bg-crimson"></span>
          </button>
          <button onclick="appStore.setMobileScreen(2)" class="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
            <i data-lucide="user" class="w-4 h-4"></i>
          </button>
        </div>
      </div>

      <!-- Welcome Hero Message -->
      <div class="my-auto py-8">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson/20 border border-crimson/40 text-crimson-light text-xs font-semibold uppercase tracking-wider mb-4">
          <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
          Welcome to Maiduguri
        </span>
        <h1 class="font-outfit font-black text-3xl text-white leading-tight">
          Unrivaled Luxury <br/><span class="text-crimson-light">& Extraordinary</span> Experience
        </h1>
        <p class="text-xs text-slate-300 mt-2 font-normal leading-relaxed">
          Indulge in 5-star hotel accommodations, gourmet fine dining, and exclusive wellness membership.
        </p>
      </div>

      <!-- 3 Primary Luxury Module Buttons -->
      <div class="space-y-3 mb-4">
        <button onclick="appStore.setMobileScreen(4)" class="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-crimson to-crimson-dark text-white font-outfit font-bold text-sm tracking-wide flex items-center justify-between shadow-xl shadow-crimson/30 hover:scale-[1.02] transition-all">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <i data-lucide="bed-double" class="w-5 h-5 text-white"></i>
            </div>
            <div class="text-left">
              <div class="text-sm">STAY</div>
              <div class="text-[10px] text-white/80 font-normal">Hotel Rooms & Luxury Suites</div>
            </div>
          </div>
          <i data-lucide="chevron-right" class="w-5 h-5 text-white/70"></i>
        </button>

        <button onclick="appStore.setMobileScreen(10)" class="w-full py-4 px-5 rounded-2xl bg-charcoal-800/90 border border-white/15 text-white font-outfit font-bold text-sm tracking-wide flex items-center justify-between backdrop-blur-lg hover:border-crimson/50 transition-all">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-crimson/20 flex items-center justify-center text-crimson-light">
              <i data-lucide="utensils" class="w-5 h-5"></i>
            </div>
            <div class="text-left">
              <div class="text-sm">DINE</div>
              <div class="text-[10px] text-slate-400 font-normal">Gourmet Restaurant & Room Service</div>
            </div>
          </div>
          <i data-lucide="chevron-right" class="w-5 h-5 text-slate-400"></i>
        </button>

        <button onclick="appStore.setMobileScreen(17)" class="w-full py-4 px-5 rounded-2xl bg-charcoal-800/90 border border-white/15 text-white font-outfit font-bold text-sm tracking-wide flex items-center justify-between backdrop-blur-lg hover:border-crimson/50 transition-all">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-crimson/20 flex items-center justify-center text-crimson-light">
              <i data-lucide="waves" class="w-5 h-5"></i>
            </div>
            <div class="text-left">
              <div class="text-sm">WELLNESS</div>
              <div class="text-[10px] text-slate-400 font-normal">Infinity Pool, Spa & VIP Gym</div>
            </div>
          </div>
          <i data-lucide="chevron-right" class="w-5 h-5 text-slate-400"></i>
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
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-crimson flex items-center justify-center border border-white/20">
            <i data-lucide="crown" class="w-4 h-4 text-white"></i>
          </div>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <h2 class="font-outfit font-bold text-base text-white">Guest Profile</h2>
      </div>

      <!-- User Card -->
      <div class="p-4 rounded-2xl bg-gradient-to-br from-charcoal-800 to-charcoal-700 border border-white/10 flex items-center gap-4 shadow-lg">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" class="w-14 h-14 rounded-full border-2 border-crimson object-cover">
        <div>
          <h3 class="font-outfit font-bold text-base text-white">Alhaji Ibrahim Usman</h3>
          <p class="text-xs text-crimson-light font-medium">VIP Gold Member #CS-9902</p>
          <p class="text-[11px] text-slate-400">ibrahim.u@citystar.ng</p>
        </div>
      </div>

      <!-- Active Check-In Token Card -->
      <div class="p-4 rounded-2xl bg-crimson/15 border border-crimson/40 space-y-2">
        <div class="flex items-center justify-between text-xs text-crimson-light font-bold">
          <span class="flex items-center gap-1.5"><i data-lucide="key" class="w-4 h-4"></i> ACTIVE FRONT DESK TOKEN</span>
          <span class="px-2 py-0.5 rounded-full bg-crimson/30 text-[10px]">Ready</span>
        </div>
        <div class="flex items-center justify-between bg-charcoal-900/80 p-3 rounded-xl border border-white/10">
          <div>
            <div class="text-[11px] text-slate-400">Guest Room</div>
            <div class="text-xs font-bold text-white">${activeBooking ? activeBooking.roomName : 'Presidential Suite'}</div>
          </div>
          <div class="text-right">
            <div class="text-[10px] text-slate-400">6-Digit Code</div>
            <div class="font-mono text-lg font-black text-crimson-light tracking-widest">${activeBooking ? activeBooking.token : 'CS-7892'}</div>
          </div>
        </div>
      </div>

      <!-- Active Wellness QR Card -->
      <div class="p-4 rounded-2xl bg-charcoal-800 border border-white/10 space-y-3">
        <div class="flex items-center justify-between">
          <h4 class="font-outfit font-bold text-xs text-white uppercase flex items-center gap-1.5">
            <i data-lucide="qr-code" class="w-4 h-4 text-emerald-400"></i> Active Wellness Pass
          </h4>
          <button onclick="appStore.setMobileScreen(20)" class="text-xs text-crimson-light font-semibold hover:underline">View QR</button>
        </div>
        <div class="flex items-center justify-between text-xs text-slate-300">
          <span>${activePass ? activePass.passType : 'All-Access Combo'}</span>
          <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">Valid</span>
        </div>
      </div>

      <!-- Past Invoices & Saved Cards -->
      <div class="space-y-3">
        <h4 class="font-outfit font-bold text-xs text-slate-400 uppercase tracking-wider">Saved Payment Methods</h4>
        <div class="p-3.5 rounded-xl bg-charcoal-800 border border-white/10 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <i data-lucide="credit-card" class="w-5 h-5 text-crimson-light"></i>
            <div>
              <div class="text-xs font-bold text-white">MasterCard ending in 4892</div>
              <div class="text-[10px] text-slate-400">Expires 08/28</div>
            </div>
          </div>
          <span class="text-[10px] px-2 py-0.5 rounded bg-white/10 text-slate-300">Default</span>
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
          <button onclick="appStore.setMobileScreen(1)" class="p-1.5 rounded-lg bg-charcoal-800 text-slate-300">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <h2 class="font-outfit font-bold text-base text-white">Notifications</h2>
      </div>

      <div class="space-y-3">
        ${notifs.map(n => `
          <div class="p-4 rounded-2xl bg-charcoal-800 border border-white/10 flex items-start gap-3">
            <div class="w-8 h-8 rounded-xl bg-crimson/20 text-crimson-light flex items-center justify-center flex-shrink-0 mt-0.5">
              <i data-lucide="${n.type === 'token' ? 'key' : n.type === 'kitchen' ? 'utensils' : 'bell'}" class="w-4 h-4"></i>
            </div>
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <h4 class="font-outfit font-bold text-xs text-white">${n.title}</h4>
                <span class="text-[10px] text-slate-400">${n.time}</span>
              </div>
              <p class="text-xs text-slate-300 mt-1 leading-relaxed">${n.text}</p>
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
    <div class="relative min-h-full flex flex-col justify-between p-5 bg-cover bg-center" style="background-image: linear-gradient(to bottom, rgba(16, 16, 21, 0.5), rgba(16, 16, 21, 0.95)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80');">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(1)" class="p-1.5 rounded-lg bg-charcoal-800 text-slate-300">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <span class="text-xs font-bold text-crimson-light uppercase tracking-wider">Hotel Module</span>
      </div>

      <div class="my-auto py-6">
        <h1 class="font-outfit font-black text-2xl text-white">Find Your Perfect Sanctuary</h1>
        <p class="text-xs text-slate-300 mt-1">Discover world-class rooms & suites tailored to your elegance.</p>
      </div>

      <!-- Search Widget Card -->
      <div class="p-5 rounded-2xl bg-charcoal-800/95 border border-white/15 space-y-4 backdrop-blur-xl shadow-2xl">
        <div class="space-y-1">
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Check-in & Check-out Dates</label>
          <div class="flex items-center gap-2 bg-charcoal-900 p-3 rounded-xl border border-white/10 text-xs text-white">
            <i data-lucide="calendar" class="w-4 h-4 text-crimson-light"></i>
            <span class="font-semibold">Sep 10, 2026</span>
            <span class="text-slate-500">→</span>
            <span class="font-semibold">Sep 14, 2026</span>
          </div>
        </div>

        <div class="space-y-1">
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Guests & Rooms</label>
          <div class="flex items-center justify-between bg-charcoal-900 p-3 rounded-xl border border-white/10 text-xs text-white">
            <div class="flex items-center gap-2">
              <i data-lucide="users" class="w-4 h-4 text-crimson-light"></i>
              <span>2 Adults, 1 Luxury Suite</span>
            </div>
            <i data-lucide="chevron-down" class="w-4 h-4 text-slate-400"></i>
          </div>
        </div>

        <button onclick="appStore.setMobileScreen(5)" class="w-full py-3.5 rounded-xl bg-crimson text-white font-outfit font-bold text-xs uppercase tracking-wider shadow-lg shadow-crimson/40 hover:bg-crimson-light transition-all flex items-center justify-center gap-2">
          <i data-lucide="search" class="w-4 h-4"></i>
          Search Available Suites
        </button>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 5: ROOM LISTING & FILTERS
// -------------------------------------------------------------
function renderRoomListingScreen() {
  const rooms = appStore.rooms;

  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(4)" class="p-1.5 rounded-lg bg-charcoal-800 text-slate-300">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <h2 class="font-outfit font-bold text-sm text-white">Available Suites (${rooms.length})</h2>
      </div>

      <!-- Filter Tabs -->
      <div class="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button class="px-3.5 py-1.5 rounded-xl bg-crimson text-white font-bold text-xs flex-shrink-0">All Suites</button>
        <button class="px-3.5 py-1.5 rounded-xl bg-charcoal-800 text-slate-300 font-medium text-xs border border-white/10 flex-shrink-0">Deluxe</button>
        <button class="px-3.5 py-1.5 rounded-xl bg-charcoal-800 text-slate-300 font-medium text-xs border border-white/10 flex-shrink-0">Royal Suite</button>
        <button class="px-3.5 py-1.5 rounded-xl bg-charcoal-800 text-slate-300 font-medium text-xs border border-white/10 flex-shrink-0">Villa</button>
      </div>

      <!-- Room Cards -->
      <div class="space-y-4">
        ${rooms.map(room => `
          <div onclick="appStore.selectRoom('${room.id}')" class="rounded-2xl bg-charcoal-800 border border-white/10 overflow-hidden shadow-lg hover:border-crimson/50 transition-all cursor-pointer">
            <div class="relative h-44 bg-cover bg-center" style="background-image: url('${room.image}');">
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-charcoal-900/80 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white uppercase">${room.category}</span>
              <span class="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-crimson text-white font-outfit font-bold text-xs shadow-lg">$${room.price} / night</span>
            </div>
            <div class="p-4 space-y-2">
              <div class="flex items-center justify-between">
                <h3 class="font-outfit font-bold text-base text-white">${room.name}</h3>
                <div class="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400"></i>
                  <span>${room.rating}</span>
                </div>
              </div>
              <p class="text-xs text-slate-400 line-clamp-2">${room.description}</p>
              <div class="flex items-center gap-3 pt-2 text-[11px] text-slate-300 border-t border-white/10">
                <span class="flex items-center gap-1"><i data-lucide="users" class="w-3.5 h-3.5 text-crimson-light"></i> ${room.capacity}</span>
                <span class="flex items-center gap-1"><i data-lucide="maximize" class="w-3.5 h-3.5 text-crimson-light"></i> ${room.size}</span>
                <span class="flex items-center gap-1"><i data-lucide="bed" class="w-3.5 h-3.5 text-crimson-light"></i> ${room.bed}</span>
              </div>
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
          <button onclick="appStore.setMobileScreen(5)" class="p-1.5 rounded-lg bg-charcoal-800 text-slate-300">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <span class="text-xs text-crimson-light font-bold">Room Details</span>
      </div>

      <div class="relative h-56 rounded-2xl overflow-hidden border border-white/10 bg-cover bg-center" style="background-image: url('${room.image}');">
        <button class="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-charcoal-900/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 border border-white/20">
          <i data-lucide="eye" class="w-3.5 h-3.5 text-crimson-light"></i> 360° Tour
        </button>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <h2 class="font-outfit font-bold text-lg text-white">${room.name}</h2>
          <div class="text-right">
            <span class="font-outfit font-black text-xl text-crimson-light">$${room.price}</span>
            <span class="text-[10px] text-slate-400 block">per night</span>
          </div>
        </div>
        <p class="text-xs text-slate-300 mt-2 leading-relaxed">${room.description}</p>
      </div>

      <div class="space-y-2">
        <h4 class="font-outfit font-bold text-xs text-slate-400 uppercase tracking-wider">Included Suite Amenities</h4>
        <div class="grid grid-cols-2 gap-2">
          ${room.amenities.map(a => `
            <div class="p-2.5 rounded-xl bg-charcoal-800 border border-white/10 flex items-center gap-2 text-xs text-slate-200">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 flex-shrink-0"></i>
              <span>${a}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <button onclick="appStore.setMobileScreen(7)" class="w-full py-4 rounded-xl bg-crimson text-white font-outfit font-bold text-xs uppercase tracking-wider shadow-xl shadow-crimson/40 hover:bg-crimson-light transition-all flex items-center justify-center gap-2">
        Reserve Suite & Customize Add-Ons
        <i data-lucide="arrow-right" class="w-4 h-4"></i>
      </button>
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 7: ADD-ONS & CUSTOMIZATION
// -------------------------------------------------------------
function renderAddOnsScreen() {
  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(6)" class="p-1.5 rounded-lg bg-charcoal-800 text-slate-300">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <h2 class="font-outfit font-bold text-sm text-white">Customize Add-Ons</h2>
      </div>

      <div class="space-y-3">
        <label class="p-4 rounded-2xl bg-charcoal-800 border border-white/10 flex items-center justify-between cursor-pointer">
          <div class="flex items-center gap-3">
            <input type="checkbox" checked class="w-4 h-4 accent-crimson">
            <div>
              <div class="text-xs font-bold text-white">Gourmet Breakfast Buffet</div>
              <div class="text-[10px] text-slate-400">Daily international breakfast spread</div>
            </div>
          </div>
          <span class="text-xs font-bold text-crimson-light">+$35 / day</span>
        </label>

        <label class="p-4 rounded-2xl bg-charcoal-800 border border-white/10 flex items-center justify-between cursor-pointer">
          <div class="flex items-center gap-3">
            <input type="checkbox" checked class="w-4 h-4 accent-crimson">
            <div>
              <div class="text-xs font-bold text-white">VIP Spa & Sauna Pass</div>
              <div class="text-[10px] text-slate-400">Unlimited thermal hydrotherapy pool access</div>
            </div>
          </div>
          <span class="text-xs font-bold text-crimson-light">+$80</span>
        </label>

        <label class="p-4 rounded-2xl bg-charcoal-800 border border-white/10 flex items-center justify-between cursor-pointer">
          <div class="flex items-center gap-3">
            <input type="checkbox" class="w-4 h-4 accent-crimson">
            <div>
              <div class="text-xs font-bold text-white">Late Check-Out (4:00 PM)</div>
              <div class="text-[10px] text-slate-400">Extended relaxation timing</div>
            </div>
          </div>
          <span class="text-xs font-bold text-crimson-light">+$50</span>
        </label>

        <label class="p-4 rounded-2xl bg-charcoal-800 border border-white/10 flex items-center justify-between cursor-pointer">
          <div class="flex items-center gap-3">
            <input type="checkbox" class="w-4 h-4 accent-crimson">
            <div>
              <div class="text-xs font-bold text-white">Airport Luxury Limousine Transfer</div>
              <div class="text-[10px] text-slate-400">Private chauffeur pickup from Maiduguri Airport</div>
            </div>
          </div>
          <span class="text-xs font-bold text-crimson-light">+$120</span>
        </label>
      </div>

      <div class="space-y-1 pt-2">
        <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Special Requests / Preferences</label>
        <textarea placeholder="e.g. High floor, extra pillows, floral arrangement..." class="w-full h-20 p-3 rounded-xl bg-charcoal-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-crimson"></textarea>
      </div>

      <button onclick="appStore.setMobileScreen(8)" class="w-full py-4 rounded-xl bg-crimson text-white font-outfit font-bold text-xs uppercase tracking-wider shadow-xl shadow-crimson/40 hover:bg-crimson-light transition-all flex items-center justify-center gap-2">
        Proceed to Checkout
        <i data-lucide="credit-card" class="w-4 h-4"></i>
      </button>
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 8: HOTEL CHECKOUT & PAYMENT
// -------------------------------------------------------------
function renderHotelCheckoutScreen() {
  const room = appStore.rooms.find(r => r.id === appStore.selectedRoomId) || appStore.rooms[0];
  const totalAmount = room.price * 4 + 115;

  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(7)" class="p-1.5 rounded-lg bg-charcoal-800 text-slate-300">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <h2 class="font-outfit font-bold text-sm text-white">Payment Gateway</h2>
      </div>

      <!-- Credit Card Interactive Card Preview -->
      <div class="p-5 rounded-2xl bg-gradient-to-tr from-crimson-dark via-crimson to-crimson-light text-white shadow-2xl border border-white/20 space-y-6">
        <div class="flex justify-between items-center">
          <span class="font-outfit font-black text-sm tracking-widest uppercase">City Star VIP</span>
          <i data-lucide="wifi" class="w-5 h-5 text-white/80"></i>
        </div>
        <div class="font-mono text-base tracking-widest font-bold">4892 •••• •••• 1092</div>
        <div class="flex justify-between items-end text-[10px] uppercase tracking-wider">
          <div>
            <div class="opacity-75">Cardholder</div>
            <div class="font-bold text-xs">Alhaji Ibrahim Usman</div>
          </div>
          <div>
            <div class="opacity-75">Expires</div>
            <div class="font-bold text-xs">08/28</div>
          </div>
        </div>
      </div>

      <!-- Price Breakdown -->
      <div class="p-4 rounded-2xl bg-charcoal-800 border border-white/10 space-y-2 text-xs">
        <div class="flex justify-between text-slate-300">
          <span>${room.name} (4 Nights)</span>
          <span>$${room.price * 4}</span>
        </div>
        <div class="flex justify-between text-slate-300">
          <span>Breakfast & Spa Add-Ons</span>
          <span>+$115</span>
        </div>
        <div class="flex justify-between text-slate-300">
          <span>Taxes & Service Charge</span>
          <span>Included</span>
        </div>
        <div class="flex justify-between text-white font-bold text-sm pt-2 border-t border-white/10">
          <span>Total Payment</span>
          <span class="text-crimson-light font-outfit text-base">$${totalAmount}</span>
        </div>
      </div>

      <button onclick="appStore.bookRoom()" class="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-outfit font-bold text-xs uppercase tracking-wider shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-2">
        <i data-lucide="check-circle-2" class="w-4 h-4"></i>
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
      <div class="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/30">
        <i data-lucide="check" class="w-8 h-8"></i>
      </div>

      <div>
        <h2 class="font-outfit font-black text-xl text-white">Booking Confirmed!</h2>
        <p class="text-xs text-slate-300 mt-1">Show this 6-Digit token at Front Desk Reception for Instant Check-In.</p>
      </div>

      <!-- Prominent 6-Digit Check-In Token Display -->
      <div class="p-6 rounded-3xl bg-gradient-to-br from-charcoal-800 to-charcoal-900 border-2 border-crimson/60 shadow-2xl space-y-3">
        <span class="text-[10px] font-bold text-crimson-light uppercase tracking-widest">FRONT DESK CHECK-IN TOKEN</span>
        <div class="font-mono font-black text-3xl text-white tracking-widest py-2 bg-charcoal-900 rounded-xl border border-white/10 text-crimson-light">
          ${latestBooking.token}
        </div>
        <div class="text-xs text-slate-300 font-semibold">${latestBooking.roomName}</div>
        <p class="text-[10px] text-slate-400">Guest: Alhaji Ibrahim Usman • Sep 10-14, 2026</p>
      </div>

      <div class="flex gap-2">
        <button onclick="appStore.setMobileScreen(2)" class="flex-1 py-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-white text-xs font-bold">
          View Booking History
        </button>
        <button onclick="appStore.switchMode('hotel')" class="flex-1 py-3.5 rounded-xl bg-crimson text-white text-xs font-bold shadow-lg shadow-crimson/30">
          Simulate Front Desk Verify
        </button>
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
          <button onclick="appStore.setMobileScreen(1)" class="p-1.5 rounded-lg bg-charcoal-800 text-slate-300">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <button onclick="appStore.setMobileScreen(13)" class="relative p-2 rounded-xl bg-crimson text-white">
          <i data-lucide="shopping-bag" class="w-4 h-4"></i>
          <span class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white text-crimson font-bold text-[9px] flex items-center justify-center">${appStore.cart.length}</span>
        </button>
      </div>

      <!-- Hero Banner -->
      <div class="h-36 rounded-2xl overflow-hidden bg-cover bg-center p-4 flex flex-col justify-end" style="background-image: linear-gradient(to top, rgba(16, 16, 21, 0.9), transparent), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80');">
        <span class="text-[10px] font-bold text-crimson-light uppercase tracking-wider">Grand Culinary Experience</span>
        <h2 class="font-outfit font-extrabold text-lg text-white">Gourmet Dining & Room Service</h2>
      </div>

      <!-- Category Carousel -->
      <div class="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button class="px-4 py-2 rounded-xl bg-crimson text-white font-bold text-xs flex-shrink-0">All Menu</button>
        <button class="px-4 py-2 rounded-xl bg-charcoal-800 text-slate-300 font-medium text-xs border border-white/10 flex-shrink-0">Mains</button>
        <button class="px-4 py-2 rounded-xl bg-charcoal-800 text-slate-300 font-medium text-xs border border-white/10 flex-shrink-0">Starters</button>
        <button onclick="appStore.setMobileScreen(12)" class="px-4 py-2 rounded-xl bg-charcoal-800 text-slate-300 font-medium text-xs border border-white/10 flex-shrink-0">Drinks & Wines</button>
        <button class="px-4 py-2 rounded-xl bg-charcoal-800 text-slate-300 font-medium text-xs border border-white/10 flex-shrink-0">Desserts</button>
      </div>

      <!-- Menu Items Grid -->
      <div class="space-y-3">
        ${menu.map(item => `
          <div onclick="appStore.selectFood('${item.id}')" class="p-3 rounded-2xl bg-charcoal-800 border border-white/10 flex gap-3 cursor-pointer hover:border-crimson/50 transition-all">
            <img src="${item.image}" class="w-24 h-24 rounded-xl object-cover border border-white/10">
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between">
                  <h3 class="font-outfit font-bold text-xs text-white">${item.name}</h3>
                  <span class="font-outfit font-bold text-xs text-crimson-light">$${item.price}</span>
                </div>
                <p class="text-[10px] text-slate-400 mt-1 line-clamp-2">${item.description}</p>
              </div>
              <div class="flex items-center justify-between pt-1">
                <span class="text-[9px] px-2 py-0.5 rounded bg-white/5 text-slate-300">${item.prepTime}</span>
                <button class="px-2.5 py-1 rounded-lg bg-crimson text-white text-[10px] font-bold">Customize</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 11: FOOD DETAILS & CUSTOMIZATION MODAL
// -------------------------------------------------------------
function renderFoodDetailsModal() {
  const food = appStore.menuItems.find(f => f.id === appStore.selectedFoodId) || appStore.menuItems[0];

  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(10)" class="p-1.5 rounded-lg bg-charcoal-800 text-slate-300">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <span class="text-xs text-crimson-light font-bold">Culinary Details</span>
      </div>

      <img src="${food.image}" class="w-full h-48 rounded-2xl object-cover border border-white/10 shadow-lg">

      <div>
        <div class="flex items-center justify-between">
          <h2 class="font-outfit font-bold text-base text-white">${food.name}</h2>
          <span class="font-outfit font-black text-lg text-crimson-light">$${food.price}</span>
        </div>
        <p class="text-xs text-slate-300 mt-1 leading-relaxed">${food.description}</p>
      </div>

      <!-- Size Selector -->
      <div class="space-y-1">
        <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Portion Size</label>
        <div class="flex gap-2">
          <button class="flex-1 py-2 rounded-xl bg-crimson text-white font-bold text-xs">Standard Portion</button>
          <button class="flex-1 py-2 rounded-xl bg-charcoal-800 border border-white/10 text-slate-300 font-medium text-xs">Chef Deluxe (+20%)</button>
        </div>
      </div>

      <!-- Add-Ons -->
      <div class="space-y-2">
        <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Garnish & Extra Add-Ons</label>
        <label class="p-2.5 rounded-xl bg-charcoal-800 border border-white/10 flex items-center justify-between text-xs text-slate-200 cursor-pointer">
          <span class="flex items-center gap-2"><input type="checkbox" checked class="accent-crimson"> Extra Shaved Black Truffle</span>
          <span class="text-crimson-light font-bold">+$8</span>
        </label>
        <label class="p-2.5 rounded-xl bg-charcoal-800 border border-white/10 flex items-center justify-between text-xs text-slate-200 cursor-pointer">
          <span class="flex items-center gap-2"><input type="checkbox" class="accent-crimson"> 24K Gold Leaf Flakes</span>
          <span class="text-crimson-light font-bold">+$15</span>
        </label>
      </div>

      <!-- Special Instructions -->
      <div class="space-y-1">
        <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Special Chef Instructions</label>
        <input type="text" placeholder="e.g. Medium rare, sauce on the side..." class="w-full p-3 rounded-xl bg-charcoal-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-crimson">
      </div>

      <button onclick="appStore.addToCart({ foodId: '${food.id}', name: '${food.name}', price: ${food.price}, quantity: 1, size: 'Standard', addOns: ['Truffle Butter'] }); appStore.setMobileScreen(13);" class="w-full py-4 rounded-xl bg-crimson text-white font-outfit font-bold text-xs uppercase tracking-wider shadow-xl shadow-crimson/40 hover:bg-crimson-light transition-all flex items-center justify-center gap-2">
        Add to Dining Cart ($${food.price})
        <i data-lucide="shopping-bag" class="w-4 h-4"></i>
      </button>
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 12: DRINKS & BEVERAGES
// -------------------------------------------------------------
function renderDrinksScreen() {
  const drinks = appStore.menuItems.filter(i => i.category === 'Drinks');

  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(10)" class="p-1.5 rounded-lg bg-charcoal-800 text-slate-300">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <h2 class="font-outfit font-bold text-sm text-white">Cellar & Bar</h2>
      </div>

      <div class="space-y-3">
        ${drinks.map(d => `
          <div class="p-3.5 rounded-2xl bg-charcoal-800 border border-white/10 flex gap-3">
            <img src="${d.image}" class="w-20 h-20 rounded-xl object-cover border border-white/10">
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-outfit font-bold text-xs text-white">${d.name}</h3>
                <p class="text-[10px] text-slate-400 mt-0.5 leading-tight">${d.description}</p>
              </div>
              <div class="flex items-center justify-between pt-1">
                <span class="font-outfit font-bold text-xs text-crimson-light">$${d.price}</span>
                <button onclick="appStore.addToCart({ foodId: '${d.id}', name: '${d.name}', price: ${d.price}, quantity: 1, size: 'Standard' })" class="px-2.5 py-1 rounded-lg bg-crimson text-white text-[10px] font-bold">Add to Order</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 13: CART SCREEN
// -------------------------------------------------------------
function renderCartScreen() {
  const cart = appStore.cart;
  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);

  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(10)" class="p-1.5 rounded-lg bg-charcoal-800 text-slate-300">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <h2 class="font-outfit font-bold text-sm text-white">Dining Cart (${cart.length})</h2>
      </div>

      <!-- Service Type Toggle Buttons -->
      <div class="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-charcoal-800 border border-white/10 text-xs">
        <button onclick="appStore.cartServiceType = 'Room Delivery'; appStore.notify();" class="py-2.5 rounded-xl font-bold transition-all ${appStore.cartServiceType === 'Room Delivery' ? 'bg-crimson text-white' : 'text-slate-400'}">Room Service</button>
        <button onclick="appStore.cartServiceType = 'Dine-In'; appStore.notify();" class="py-2.5 rounded-xl font-bold transition-all ${appStore.cartServiceType === 'Dine-In' ? 'bg-crimson text-white' : 'text-slate-400'}">Dine-In Table</button>
      </div>

      <!-- Cart Items List -->
      <div class="space-y-3">
        ${cart.length === 0 ? `
          <div class="py-12 text-center text-slate-400 text-xs">
            <i data-lucide="shopping-bag" class="w-10 h-10 mx-auto mb-2 text-slate-600"></i>
            Your dining cart is empty.
          </div>
        ` : cart.map((item, idx) => `
          <div class="p-3.5 rounded-2xl bg-charcoal-800 border border-white/10 flex items-center justify-between">
            <div>
              <h4 class="font-outfit font-bold text-xs text-white">${item.name}</h4>
              <div class="text-[10px] text-slate-400">$${item.price} each</div>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="appStore.updateCartQuantity(${idx}, -1)" class="w-7 h-7 rounded-lg bg-charcoal-900 text-white font-bold flex items-center justify-center border border-white/10">-</button>
              <span class="font-outfit font-bold text-xs text-white w-4 text-center">${item.quantity}</span>
              <button onclick="appStore.updateCartQuantity(${idx}, 1)" class="w-7 h-7 rounded-lg bg-crimson text-white font-bold flex items-center justify-center">+</button>
            </div>
          </div>
        `).join('')}
      </div>

      ${cart.length > 0 ? `
        <div class="p-4 rounded-2xl bg-charcoal-800 border border-white/10 space-y-2 text-xs">
          <div class="flex justify-between text-slate-300">
            <span>Subtotal</span>
            <span>$${subtotal}</span>
          </div>
          <div class="flex justify-between text-slate-300">
            <span>Luxury Service Charge (8%)</span>
            <span>$${Math.round(subtotal * 0.08)}</span>
          </div>
          <div class="flex justify-between text-white font-bold text-sm pt-2 border-t border-white/10">
            <span>Total Amount</span>
            <span class="text-crimson-light font-outfit text-base">$${subtotal + Math.round(subtotal * 0.08)}</span>
          </div>
        </div>

        <button onclick="appStore.setMobileScreen(14)" class="w-full py-4 rounded-xl bg-crimson text-white font-outfit font-bold text-xs uppercase tracking-wider shadow-xl shadow-crimson/40 hover:bg-crimson-light transition-all flex items-center justify-center gap-2">
          Delivery Address & Notes
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
      ` : ''}
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 14: DELIVERY ADDRESS & INSTRUCTIONS
// -------------------------------------------------------------
function renderDeliveryInstructionsScreen() {
  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(13)" class="p-1.5 rounded-lg bg-charcoal-800 text-slate-300">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <h2 class="font-outfit font-bold text-sm text-white">Delivery Location</h2>
      </div>

      <div class="space-y-3">
        <div class="space-y-1">
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Room Number / Delivery Address</label>
          <input type="text" value="${appStore.cartDeliveryInfo.address}" class="w-full p-3 rounded-xl bg-charcoal-900 border border-white/10 text-xs text-white">
        </div>

        <div class="space-y-1">
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Contact Phone Number</label>
          <input type="text" value="${appStore.cartDeliveryInfo.phone}" class="w-full p-3 rounded-xl bg-charcoal-900 border border-white/10 text-xs text-white">
        </div>

        <div class="space-y-1">
          <label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Gate Code / Delivery Instructions</label>
          <textarea class="w-full h-20 p-3 rounded-xl bg-charcoal-900 border border-white/10 text-xs text-white focus:outline-none focus:border-crimson">${appStore.cartDeliveryInfo.notes}</textarea>
        </div>
      </div>

      <button onclick="appStore.setMobileScreen(15)" class="w-full py-4 rounded-xl bg-crimson text-white font-outfit font-bold text-xs uppercase tracking-wider shadow-xl shadow-crimson/40 hover:bg-crimson-light transition-all flex items-center justify-center gap-2">
        Proceed to Dining Payment
        <i data-lucide="credit-card" class="w-4 h-4"></i>
      </button>
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 15: RESTAURANT CHECKOUT
// -------------------------------------------------------------
function renderRestaurantCheckoutScreen() {
  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(14)" class="p-1.5 rounded-lg bg-charcoal-800 text-slate-300">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <h2 class="font-outfit font-bold text-sm text-white">Dining Payment</h2>
      </div>

      <div class="space-y-3">
        <label class="p-4 rounded-2xl bg-charcoal-800 border border-crimson/60 flex items-center justify-between cursor-pointer">
          <div class="flex items-center gap-3">
            <input type="radio" name="pay" checked class="accent-crimson">
            <div>
              <div class="text-xs font-bold text-white">Charge to Room Bill (Suite 102)</div>
              <div class="text-[10px] text-slate-400">Post directly to master guest checkout invoice</div>
            </div>
          </div>
          <i data-lucide="key" class="w-4 h-4 text-crimson-light"></i>
        </label>

        <label class="p-4 rounded-2xl bg-charcoal-800 border border-white/10 flex items-center justify-between cursor-pointer">
          <div class="flex items-center gap-3">
            <input type="radio" name="pay" class="accent-crimson">
            <div>
              <div class="text-xs font-bold text-white">Credit Card (MasterCard **** 4892)</div>
              <div class="text-[10px] text-slate-400">Instant online card authorization</div>
            </div>
          </div>
          <i data-lucide="credit-card" class="w-4 h-4 text-slate-400"></i>
        </label>
      </div>

      <button onclick="appStore.placeRestaurantOrder()" class="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-outfit font-bold text-xs uppercase tracking-wider shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-2">
        <i data-lucide="send" class="w-4 h-4"></i>
        Send Order to Kitchen KDS
      </button>
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 16: ORDER STATUS & LIVE TRACKER
// -------------------------------------------------------------
function renderOrderStatusScreen() {
  const latestOrder = appStore.orders[0] || { id: 'ord-104', status: 'Preparing', prepTimer: '12:45' };

  return `
    <div class="p-5 space-y-5">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(10)" class="p-1.5 rounded-lg bg-charcoal-800 text-slate-300">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <span class="text-xs text-emerald-400 font-bold flex items-center gap-1">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Live KDS Tracker
        </span>
      </div>

      <!-- Timer Banner -->
      <div class="p-5 rounded-2xl bg-charcoal-800 border border-white/10 text-center space-y-2">
        <div class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Estimated Preparation & Delivery</div>
        <div class="font-mono font-black text-3xl text-crimson-light animate-pulse-glow">${latestOrder.prepTimer}</div>
        <div class="text-xs text-white font-semibold">Order #${latestOrder.id} • ${latestOrder.serviceType}</div>
      </div>

      <!-- Step Progress Tracker -->
      <div class="space-y-4 px-2">
        <div class="flex items-start gap-3">
          <div class="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">✓</div>
          <div>
            <div class="text-xs font-bold text-white">Order Received</div>
            <div class="text-[10px] text-slate-400">Order logged at kitchen terminal</div>
          </div>
        </div>

        <div class="flex items-start gap-3">
          <div class="w-6 h-6 rounded-full ${['Preparing', 'Ready', 'Dispatched'].includes(latestOrder.status) ? 'bg-emerald-500 text-white' : 'bg-charcoal-700 text-slate-500'} flex items-center justify-center text-xs font-bold mt-0.5">
            ${['Preparing', 'Ready', 'Dispatched'].includes(latestOrder.status) ? '✓' : '2'}
          </div>
          <div>
            <div class="text-xs font-bold text-white">Kitchen Preparing</div>
            <div class="text-[10px] text-slate-400">Executive Chef cooking & plating</div>
          </div>
        </div>

        <div class="flex items-start gap-3">
          <div class="w-6 h-6 rounded-full ${['Ready', 'Dispatched'].includes(latestOrder.status) ? 'bg-emerald-500 text-white' : 'bg-charcoal-700 text-slate-500'} flex items-center justify-center text-xs font-bold mt-0.5">
            ${['Ready', 'Dispatched'].includes(latestOrder.status) ? '✓' : '3'}
          </div>
          <div>
            <div class="text-xs font-bold text-white">Out for Delivery / Ready</div>
            <div class="text-[10px] text-slate-400">Waiter en route to room</div>
          </div>
        </div>
      </div>

      <button onclick="appStore.switchMode('kitchen')" class="w-full py-3.5 rounded-xl bg-charcoal-800 border border-white/10 text-white text-xs font-bold hover:border-crimson/40">
        Switch to Kitchen KDS to Update Status Live
      </button>
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 17: WELLNESS LANDING SCREEN
// -------------------------------------------------------------
function renderWellnessLandingScreen() {
  return `
    <div class="relative min-h-full flex flex-col justify-between p-5 bg-cover bg-center" style="background-image: linear-gradient(to bottom, rgba(16, 16, 21, 0.4), rgba(16, 16, 21, 0.95)), url('https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80');">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(1)" class="p-1.5 rounded-lg bg-charcoal-800 text-slate-300">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <span class="text-xs font-bold text-crimson-light uppercase tracking-wider">Pool & Gym</span>
      </div>

      <div class="my-auto py-6">
        <h1 class="font-outfit font-black text-2xl text-white">Rejuvenate Body & Soul</h1>
        <p class="text-xs text-slate-300 mt-1">Infinity pool deck, thermal spa & state-of-the-art VIP gym facility.</p>
      </div>

      <div class="p-4 rounded-2xl bg-charcoal-800/90 border border-white/15 backdrop-blur-xl space-y-3">
        <div class="flex items-center justify-between text-xs text-white font-bold">
          <span>Operating Hours</span>
          <span class="text-emerald-400">6:00 AM – 11:00 PM</span>
        </div>
        <button onclick="appStore.setMobileScreen(18)" class="w-full py-3.5 rounded-xl bg-crimson text-white font-outfit font-bold text-xs uppercase tracking-wider shadow-lg shadow-crimson/40 flex items-center justify-center gap-2">
          Select Membership Pass Tier
          <i data-lucide="qr-code" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 18: PASS SELECTION SCREEN
// -------------------------------------------------------------
function renderPassSelectionScreen() {
  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(17)" class="p-1.5 rounded-lg bg-charcoal-800 text-slate-300">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <h2 class="font-outfit font-bold text-sm text-white">Select Access Pass</h2>
      </div>

      <div class="space-y-3">
        <div onclick="appStore.selectedPassTier = 'Daily Pass'; appStore.setMobileScreen(19);" class="p-4 rounded-2xl bg-charcoal-800 border border-white/10 hover:border-crimson/60 cursor-pointer space-y-1">
          <div class="flex justify-between items-center">
            <span class="font-outfit font-bold text-sm text-white">Daily Pass</span>
            <span class="font-outfit font-black text-base text-crimson-light">$45</span>
          </div>
          <p class="text-[11px] text-slate-400">24-Hour full access to pool, sauna & gym floor.</p>
        </div>

        <div onclick="appStore.selectedPassTier = 'Monthly VIP'; appStore.setMobileScreen(19);" class="p-4 rounded-2xl bg-charcoal-800 border border-crimson/50 hover:border-crimson cursor-pointer space-y-1 relative">
          <span class="absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full bg-crimson text-[9px] font-bold text-white uppercase">Most Popular</span>
          <div class="flex justify-between items-center">
            <span class="font-outfit font-bold text-sm text-white">Monthly VIP Combo Pass</span>
            <span class="font-outfit font-black text-base text-crimson-light">$350</span>
          </div>
          <p class="text-[11px] text-slate-400">30-Day unlimited access + complimentary locker & spa treatments.</p>
        </div>

        <div onclick="appStore.selectedPassTier = 'Annual Gold'; appStore.setMobileScreen(19);" class="p-4 rounded-2xl bg-charcoal-800 border border-white/10 hover:border-crimson/60 cursor-pointer space-y-1">
          <div class="flex justify-between items-center">
            <span class="font-outfit font-bold text-sm text-white">Annual Gold Access</span>
            <span class="font-outfit font-black text-base text-crimson-light">$2,800</span>
          </div>
          <p class="text-[11px] text-slate-400">365-Day VIP access, guest passes, and personal trainer sessions.</p>
        </div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 19: WELLNESS CHECKOUT SCREEN
// -------------------------------------------------------------
function renderWellnessCheckoutScreen() {
  const tier = appStore.selectedPassTier || 'Daily Pass';
  const price = tier.includes('Daily') ? 45 : tier.includes('Monthly') ? 350 : 2800;

  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(18)" class="p-1.5 rounded-lg bg-charcoal-800 text-slate-300">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <h2 class="font-outfit font-bold text-sm text-white">Pass Checkout</h2>
      </div>

      <div class="p-4 rounded-2xl bg-charcoal-800 border border-white/10 space-y-3">
        <div class="text-xs text-slate-400 font-bold uppercase">Pass Summary</div>
        <div class="flex justify-between text-sm font-bold text-white">
          <span>${tier} (All-Access Combo)</span>
          <span class="text-crimson-light font-outfit">$${price}</span>
        </div>
        <p class="text-[10px] text-slate-400">Generates immediate dynamic QR code for turnstile scanner entry.</p>
      </div>

      <button onclick="appStore.purchaseWellnessPass('${tier}', 'All-Access Luxury Combo', ${price})" class="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-outfit font-bold text-xs uppercase tracking-wider shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-2">
        <i data-lucide="qr-code" class="w-4 h-4"></i>
        Pay & Generate Digital QR Pass
      </button>
    </div>
  `;
}

// -------------------------------------------------------------
// SCREEN 20: PASS & QR CODE DIGITAL ACCESS SCREEN
// -------------------------------------------------------------
function renderPassDigitalAccessScreen() {
  const pass = appStore.wellnessPasses[0] || { qrCode: 'CS-PASS-771-VIP', status: 'Active', tier: 'Monthly VIP' };
  const isExpired = pass.status === 'Expired';

  return `
    <div class="p-5 text-center space-y-4 my-auto">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <button onclick="appStore.setMobileScreen(17)" class="p-1.5 rounded-lg bg-charcoal-800 text-slate-300">
            <i data-lucide="arrow-left" class="w-4 h-4"></i>
          </button>
          <span class="font-outfit font-extrabold text-sm text-white tracking-widest uppercase">City Star</span>
        </div>
        <span class="text-xs font-bold ${isExpired ? 'text-crimson-light' : 'text-emerald-400'} flex items-center gap-1">
          <span class="w-2 h-2 rounded-full ${isExpired ? 'bg-crimson' : 'bg-emerald-400'}"></span>
          ${isExpired ? 'EXPIRED' : 'ACTIVE PASS'}
        </span>
      </div>

      <!-- Dynamic QR Code Card with Border Status Indicator -->
      <div class="p-6 rounded-3xl bg-charcoal-800 ${isExpired ? 'border-4 border-crimson shadow-crimson/40' : 'border-4 border-emerald-500 shadow-emerald-500/40'} shadow-2xl space-y-4">
        <div class="text-xs font-bold text-white uppercase">${pass.tier} Access Pass</div>

        <!-- Simulated Visual QR Code -->
        <div class="w-44 h-44 bg-white p-3 rounded-2xl mx-auto flex items-center justify-center shadow-inner">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${pass.qrCode}" class="w-full h-full object-contain">
        </div>

        <div class="font-mono text-xs font-bold text-slate-300 tracking-wider">${pass.qrCode}</div>
        <div class="text-[11px] text-slate-400">Guest: Alhaji Ibrahim Usman</div>
      </div>

      <div class="space-y-2 pt-2">
        <button onclick="appStore.togglePassExpiry('${pass.id}')" class="w-full py-3 rounded-xl bg-charcoal-800 border border-white/10 text-xs font-bold text-slate-300 hover:text-white">
          Simulate Expiry (Toggle Green/Red Border)
        </button>
        <button onclick="appStore.switchMode('scanner')" class="w-full py-3 rounded-xl bg-crimson text-white text-xs font-bold shadow-lg shadow-crimson/30">
          Switch to Pool/Gym Scanner Dashboard
        </button>
      </div>
    </div>
  `;
}
