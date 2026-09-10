/**
 * Mobile Guest App Render Engine (All 20 Screens Fully Implemented)
 * Strict Color Palette: Red (#DC2626), Gray (#111827 / #1F2937), Maroon (#6B0012 / #3F000A)
 */

function renderMobileShell() {
  const currentScreen = appStore.currentMobileScreen;
  const isFullWidth = window.mobileFullWidthMode || false;

  return `
    <div class="p-4 sm:p-6 min-h-[calc(100vh-65px)] bg-brandGray900 space-y-4">
      <!-- Screen Switcher Bar & View Mode Toggle -->
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

          <!-- Toggle View Mode -->
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

      <!-- Container Body -->
      ${isFullWidth ? `
        <div class="max-w-4xl mx-auto p-6 bg-brandGray800 border border-brandGray700 rounded-3xl shadow-2xl space-y-6">
          ${renderScreenContent(currentScreen)}
        </div>
      ` : `
        <div class="mobile-device-container">
          <div class="phone-shell">
            <div class="phone-screen">
              <div class="phone-notch">
                <div class="phone-notch-camera"></div>
                <div class="phone-notch-speaker"></div>
              </div>

              <div class="pt-8 px-6 pb-2 flex items-center justify-between text-[11px] font-semibold text-brandGray200 z-30">
                <span>9:41</span>
                <div class="flex items-center gap-1.5">
                  <i data-lucide="signal" class="w-3 h-3"></i>
                  <i data-lucide="wifi" class="w-3 h-3"></i>
                  <i data-lucide="battery-charging" class="w-3.5 h-3.5 text-brandRedLight"></i>
                </div>
              </div>

              <div class="screen-scrollable">
                ${renderScreenContent(currentScreen)}
              </div>

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

// SCREEN 1: WELCOME SCREEN
function renderWelcomeScreen() {
  return `
    <div class="relative min-h-[640px] flex flex-col justify-between p-6 bg-cover bg-center rounded-2xl" style="background-image: linear-gradient(to bottom, rgba(63, 0, 10, 0.65), rgba(17, 24, 39, 0.96)), url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80');">
      <div class="flex items-center justify-between pt-2">
        <div class="flex items-center gap-2">
          <div class="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center p-0.5 border border-brandRed/40 overflow-hidden shadow-lg">
            <img src="assets/logo.png" alt="City Star Restaurant & Accomodation Logo" class="w-full h-full object-contain">
          </div>
          <div>
            <span class="font-outfit font-extrabold text-sm text-white tracking-wider block uppercase">City Star</span>
            <span class="text-[9px] font-semibold text-brandRedLight uppercase tracking-wider block">Restaurant & Accomodation</span>
          </div>
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

      <div class="my-auto py-8">
        <span class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brandMaroon border border-brandRed/40 text-brandRedLight text-xs font-bold uppercase tracking-wider mb-4">
          <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
          Welcome to City Star
        </span>
        <h1 class="font-outfit font-black text-3xl text-white leading-tight">
          Luxury Stay <br/><span class="text-brandRedLight">• Fine Dining • Wellness</span>
        </h1>
        <p class="text-xs text-brandGray200 mt-2 font-normal leading-relaxed">
          Book luxury rooms, order fine meals, and access our wellness facilities with ease.
        </p>
      </div>

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

// SCREEN 2: PROFILE
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
    </div>
  `;
}

// SCREEN 3: NOTIFICATIONS
function renderNotificationsScreen() {
  const notifs = appStore.notifications;
  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <button onclick="appStore.setMobileScreen(1)" class="p-1.5 rounded-lg bg-brandGray800 text-brandGray200 border border-brandGray700">
          <i data-lucide="arrow-left" class="w-4 h-4"></i>
        </button>
        <h2 class="font-outfit font-bold text-base text-white">Notifications</h2>
      </div>

      <div class="space-y-3">
        ${notifs.map(n => `
          <div class="p-4 rounded-2xl bg-brandGray800 border border-brandGray700 flex items-start gap-3">
            <div class="w-8 h-8 rounded-xl bg-brandMaroon text-brandRedLight flex items-center justify-center flex-shrink-0 mt-0.5 border border-brandRed/30">
              <i data-lucide="bell" class="w-4 h-4"></i>
            </div>
            <div class="flex-1">
              <h4 class="font-outfit font-bold text-xs text-white">${n.title}</h4>
              <p class="text-xs text-brandGray200 mt-1">${n.text}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// SCREEN 4: HOTEL LANDING
function renderHotelLandingScreen() {
  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <button onclick="appStore.setMobileScreen(1)" class="p-1.5 rounded-lg bg-brandGray800 text-white border border-brandGray700">
          <i data-lucide="arrow-left" class="w-4 h-4"></i>
        </button>
        <span class="text-xs font-bold text-brandRedLight uppercase tracking-wider">Hotel Module</span>
      </div>

      <div class="py-4">
        <h1 class="font-outfit font-black text-2xl text-white">Find Your Suite</h1>
        <p class="text-xs text-brandGray200 mt-1">Discover world-class luxury accommodations.</p>
      </div>

      <button onclick="appStore.setMobileScreen(5)" class="w-full py-4 rounded-xl bg-brandRed text-white font-outfit font-bold text-xs uppercase tracking-wider shadow-lg shadow-brandRed/30 flex items-center justify-center gap-2">
        <i data-lucide="search" class="w-4 h-4"></i>
        Browse Available Suites
      </button>
    </div>
  `;
}

// SCREEN 5: ROOM LISTING
function renderRoomListingScreen() {
  const rooms = appStore.rooms;
  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <button onclick="appStore.setMobileScreen(4)" class="p-1.5 rounded-lg bg-brandGray800 text-white border border-brandGray700">
          <i data-lucide="arrow-left" class="w-4 h-4"></i>
        </button>
        <h2 class="font-outfit font-bold text-sm text-white">Available Suites</h2>
      </div>

      <div class="space-y-4">
        ${rooms.map(room => `
          <div onclick="appStore.selectRoom('${room.id}')" class="rounded-2xl bg-brandGray800 border border-brandGray700 overflow-hidden cursor-pointer hover:border-brandRed transition-all">
            <img src="${room.image}" class="w-full h-40 object-cover">
            <div class="p-4 flex items-center justify-between">
              <div>
                <h3 class="font-outfit font-bold text-sm text-white">${room.name}</h3>
                <p class="text-xs text-brandGray200">$${room.price} / night</p>
              </div>
              <button class="px-3 py-1.5 rounded-xl bg-brandRed text-white text-xs font-bold">Select</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// SCREEN 6: ROOM DETAILS
function renderRoomDetailsScreen() {
  const room = appStore.rooms.find(r => r.id === appStore.selectedRoomId) || appStore.rooms[0];
  return `
    <div class="p-5 space-y-4">
      <button onclick="appStore.setMobileScreen(5)" class="p-1.5 rounded-lg bg-brandGray800 text-white border border-brandGray700">
        <i data-lucide="arrow-left" class="w-4 h-4"></i>
      </button>

      <img src="${room.image}" class="w-full h-48 rounded-2xl object-cover">
      <h2 class="font-outfit font-bold text-lg text-white">${room.name}</h2>
      <p class="text-xs text-brandGray200">${room.description}</p>
      <div class="text-lg font-black text-brandRedLight">$${room.price} / night</div>

      <button onclick="appStore.setMobileScreen(7)" class="w-full py-4 rounded-xl bg-brandRed text-white font-bold text-xs uppercase tracking-wider">
        Proceed to Add-Ons
      </button>
    </div>
  `;
}

// SCREEN 7: ADD-ONS
function renderAddOnsScreen() {
  return `
    <div class="p-5 space-y-4">
      <button onclick="appStore.setMobileScreen(6)" class="p-1.5 rounded-lg bg-brandGray800 text-white border border-brandGray700">
        <i data-lucide="arrow-left" class="w-4 h-4"></i>
      </button>

      <h2 class="font-outfit font-bold text-base text-white">Select Suite Add-Ons</h2>

      <div class="space-y-3">
        <div class="p-4 rounded-2xl bg-brandGray800 border border-brandGray700 flex justify-between items-center text-xs">
          <div>
            <div class="font-bold text-white">Breakfast Buffet</div>
            <div class="text-brandGray200">Daily international spread</div>
          </div>
          <span class="text-brandRedLight font-bold">+$35 / day</span>
        </div>
      </div>

      <button onclick="appStore.setMobileScreen(8)" class="w-full py-4 rounded-xl bg-brandRed text-white font-bold text-xs uppercase">
        Proceed to Payment
      </button>
    </div>
  `;
}

// SCREEN 8: HOTEL CHECKOUT
function renderHotelCheckoutScreen() {
  return `
    <div class="p-5 space-y-4">
      <button onclick="appStore.setMobileScreen(7)" class="p-1.5 rounded-lg bg-brandGray800 text-white border border-brandGray700">
        <i data-lucide="arrow-left" class="w-4 h-4"></i>
      </button>

      <h2 class="font-outfit font-bold text-base text-white">Hotel Payment Gateway</h2>
      <div class="p-5 rounded-2xl bg-gradient-to-tr from-brandMaroonDark to-brandRed text-white font-mono">
        4892 •••• •••• 1092
      </div>

      <button onclick="appStore.bookRoom()" class="w-full py-4 rounded-xl bg-brandRed text-white font-bold text-xs uppercase">
        Confirm & Generate 6-Digit Token
      </button>
    </div>
  `;
}

// SCREEN 9: BOOKING CONFIRMATION & TOKEN
function renderBookingConfirmationScreen() {
  const b = appStore.bookings[0] || { token: 'CS-7892', roomName: 'Presidential Suite' };
  return `
    <div class="p-5 text-center space-y-5 my-auto">
      <h2 class="font-outfit font-black text-xl text-white">Booking Confirmed!</h2>
      <div class="p-6 rounded-3xl bg-brandGray800 border-2 border-brandRed space-y-3">
        <span class="text-xs font-bold text-brandRedLight uppercase">FRONT DESK TOKEN</span>
        <div class="font-mono text-3xl font-black text-white">${b.token}</div>
        <div class="text-xs text-brandGray200">${b.roomName}</div>
      </div>
    </div>
  `;
}

// SCREEN 10: RESTAURANT MAIN MENU
function renderRestaurantMainScreen() {
  const menu = appStore.menuItems;
  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <button onclick="appStore.setMobileScreen(1)" class="p-1.5 rounded-lg bg-brandGray800 text-white border border-brandGray700">
          <i data-lucide="arrow-left" class="w-4 h-4"></i>
        </button>
        <h2 class="font-outfit font-bold text-base text-white">Gourmet Dining</h2>
        <button onclick="appStore.setMobileScreen(13)" class="p-2 rounded-xl bg-brandRed text-white">
          <i data-lucide="shopping-bag" class="w-4 h-4"></i>
        </button>
      </div>

      <div class="flex gap-2 overflow-x-auto">
        <button class="px-3.5 py-1.5 rounded-xl bg-brandRed text-white text-xs font-bold">All Menu</button>
        <button onclick="appStore.setMobileScreen(12)" class="px-3.5 py-1.5 rounded-xl bg-brandGray800 text-brandGray200 text-xs border border-brandGray700">Cellar Drinks</button>
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
              <div class="flex justify-between items-center pt-1">
                <span class="font-outfit font-bold text-xs text-brandRedLight">$${item.price}</span>
                <span class="text-[10px] px-2 py-0.5 rounded bg-brandRed/20 text-brandRedLight">Customize</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// SCREEN 11: FOOD DETAILS & CUSTOMIZATION MODAL
function renderFoodDetailsModal() {
  const food = appStore.menuItems.find(f => f.id === appStore.selectedFoodId) || appStore.menuItems[0];
  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <button onclick="appStore.setMobileScreen(10)" class="p-1.5 rounded-lg bg-brandGray800 text-white border border-brandGray700">
          <i data-lucide="arrow-left" class="w-4 h-4"></i>
        </button>
        <span class="text-xs text-brandRedLight font-bold">Food Details & Customization</span>
      </div>

      <img src="${food.image}" class="w-full h-48 rounded-2xl object-cover">

      <div>
        <div class="flex justify-between items-center">
          <h2 class="font-outfit font-bold text-base text-white">${food.name}</h2>
          <span class="font-outfit font-bold text-base text-brandRedLight">$${food.price}</span>
        </div>
        <p class="text-xs text-brandGray200 mt-1">${food.description}</p>
      </div>

      <div class="space-y-2">
        <label class="text-[10px] font-bold text-brandGray200 uppercase">Portion Size</label>
        <div class="flex gap-2">
          <button class="flex-1 py-2 rounded-xl bg-brandRed text-white text-xs font-bold">Standard</button>
          <button class="flex-1 py-2 rounded-xl bg-brandGray800 text-brandGray200 text-xs border border-brandGray700">Large (+20%)</button>
        </div>
      </div>

      <div class="space-y-1">
        <label class="text-[10px] font-bold text-brandGray200 uppercase">Chef Notes</label>
        <input type="text" placeholder="e.g. Medium rare, sauce on side..." class="w-full p-3 rounded-xl bg-brandGray900 border border-brandGray700 text-xs text-white">
      </div>

      <button onclick="appStore.addToCart({ foodId: '${food.id}', name: '${food.name}', price: ${food.price}, quantity: 1, size: 'Standard' }); appStore.setMobileScreen(13);" class="w-full py-4 rounded-xl bg-brandRed text-white font-bold text-xs uppercase shadow-lg shadow-brandRed/30 flex items-center justify-center gap-2">
        <i data-lucide="shopping-bag" class="w-4 h-4"></i>
        Add to Dining Cart ($${food.price})
      </button>
    </div>
  `;
}

// SCREEN 12: DRINKS & BEVERAGES
function renderDrinksScreen() {
  const drinks = appStore.menuItems.filter(i => i.category === 'Drinks');
  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <button onclick="appStore.setMobileScreen(10)" class="p-1.5 rounded-lg bg-brandGray800 text-white border border-brandGray700">
          <i data-lucide="arrow-left" class="w-4 h-4"></i>
        </button>
        <h2 class="font-outfit font-bold text-sm text-white">Cellar Drinks & Wines</h2>
      </div>

      <div class="space-y-3">
        ${drinks.map(d => `
          <div class="p-3.5 rounded-2xl bg-brandGray800 border border-brandGray700 flex gap-3">
            <img src="${d.image}" class="w-20 h-20 rounded-xl object-cover">
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <h3 class="font-outfit font-bold text-xs text-white">${d.name}</h3>
                <p class="text-[10px] text-brandGray200 mt-0.5">${d.description}</p>
              </div>
              <div class="flex justify-between items-center pt-1">
                <span class="font-outfit font-bold text-xs text-brandRedLight">$${d.price}</span>
                <button onclick="appStore.addToCart({ foodId: '${d.id}', name: '${d.name}', price: ${d.price}, quantity: 1, size: 'Standard' }); appStore.setMobileScreen(13);" class="px-3 py-1 rounded-lg bg-brandRed text-white text-[10px] font-bold">Add to Order</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// SCREEN 13: DINING CART
function renderCartScreen() {
  const cart = appStore.cart;
  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);

  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <button onclick="appStore.setMobileScreen(10)" class="p-1.5 rounded-lg bg-brandGray800 text-white border border-brandGray700">
          <i data-lucide="arrow-left" class="w-4 h-4"></i>
        </button>
        <h2 class="font-outfit font-bold text-sm text-white">Dining Cart (${cart.length})</h2>
      </div>

      <div class="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-brandGray800 border border-brandGray700 text-xs">
        <button onclick="appStore.cartServiceType = 'Room Delivery'; appStore.notify();" class="py-2.5 rounded-xl font-bold ${appStore.cartServiceType === 'Room Delivery' ? 'bg-brandRed text-white' : 'text-brandGray200'}">Room Service</button>
        <button onclick="appStore.cartServiceType = 'Dine-In'; appStore.notify();" class="py-2.5 rounded-xl font-bold ${appStore.cartServiceType === 'Dine-In' ? 'bg-brandRed text-white' : 'text-brandGray200'}">Dine-In Table</button>
      </div>

      <div class="space-y-3">
        ${cart.length === 0 ? `<div class="py-12 text-center text-brandGray200 text-xs">Your cart is empty.</div>` : cart.map((item, idx) => `
          <div class="p-3.5 rounded-2xl bg-brandGray800 border border-brandGray700 flex justify-between items-center">
            <div>
              <h4 class="font-outfit font-bold text-xs text-white">${item.name}</h4>
              <div class="text-[10px] text-brandGray200">$${item.price} each</div>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="appStore.updateCartQuantity(${idx}, -1)" class="w-7 h-7 bg-brandGray900 text-white rounded-lg">-</button>
              <span class="font-bold text-xs text-white w-4 text-center">${item.quantity}</span>
              <button onclick="appStore.updateCartQuantity(${idx}, 1)" class="w-7 h-7 bg-brandRed text-white rounded-lg">+</button>
            </div>
          </div>
        `).join('')}
      </div>

      ${cart.length > 0 ? `
        <div class="p-4 rounded-2xl bg-brandGray800 border border-brandGray700 space-y-2 text-xs">
          <div class="flex justify-between text-brandGray200">
            <span>Subtotal</span>
            <span>$${subtotal}</span>
          </div>
          <div class="flex justify-between text-white font-bold text-sm pt-2 border-t border-brandGray700">
            <span>Total Amount</span>
            <span class="text-brandRedLight font-outfit text-base">$${subtotal + Math.round(subtotal * 0.08)}</span>
          </div>
        </div>

        <button onclick="appStore.setMobileScreen(14)" class="w-full py-4 rounded-xl bg-brandRed text-white font-bold text-xs uppercase shadow-lg shadow-brandRed/30 flex items-center justify-center gap-2">
          Delivery Address & Notes
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
      ` : ''}
    </div>
  `;
}

// SCREEN 14: DELIVERY ADDRESS & INSTRUCTIONS
function renderDeliveryInstructionsScreen() {
  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <button onclick="appStore.setMobileScreen(13)" class="p-1.5 rounded-lg bg-brandGray800 text-white border border-brandGray700">
          <i data-lucide="arrow-left" class="w-4 h-4"></i>
        </button>
        <h2 class="font-outfit font-bold text-sm text-white">Delivery Location</h2>
      </div>

      <div class="space-y-3">
        <div class="space-y-1">
          <label class="text-[10px] font-bold text-brandGray200 uppercase">Room Number / Address</label>
          <input type="text" value="${appStore.cartDeliveryInfo.address}" class="w-full p-3 rounded-xl bg-brandGray900 border border-brandGray700 text-xs text-white">
        </div>

        <div class="space-y-1">
          <label class="text-[10px] font-bold text-brandGray200 uppercase">Contact Phone</label>
          <input type="text" value="${appStore.cartDeliveryInfo.phone}" class="w-full p-3 rounded-xl bg-brandGray900 border border-brandGray700 text-xs text-white">
        </div>

        <div class="space-y-1">
          <label class="text-[10px] font-bold text-brandGray200 uppercase">Delivery Instructions</label>
          <textarea class="w-full h-20 p-3 rounded-xl bg-brandGray900 border border-brandGray700 text-xs text-white">${appStore.cartDeliveryInfo.notes}</textarea>
        </div>
      </div>

      <button onclick="appStore.setMobileScreen(15)" class="w-full py-4 rounded-xl bg-brandRed text-white font-bold text-xs uppercase shadow-lg shadow-brandRed/30 flex items-center justify-center gap-2">
        Proceed to Dining Payment
        <i data-lucide="credit-card" class="w-4 h-4"></i>
      </button>
    </div>
  `;
}

// SCREEN 15: RESTAURANT CHECKOUT
function renderRestaurantCheckoutScreen() {
  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <button onclick="appStore.setMobileScreen(14)" class="p-1.5 rounded-lg bg-brandGray800 text-white border border-brandGray700">
          <i data-lucide="arrow-left" class="w-4 h-4"></i>
        </button>
        <h2 class="font-outfit font-bold text-sm text-white">Dining Payment</h2>
      </div>

      <div class="space-y-3">
        <label class="p-4 rounded-2xl bg-brandGray800 border border-brandRed flex items-center justify-between cursor-pointer">
          <div class="flex items-center gap-3">
            <input type="radio" name="pay" checked class="accent-brandRed">
            <div>
              <div class="text-xs font-bold text-white">Charge to Room Bill (Suite 102)</div>
              <div class="text-[10px] text-brandGray200">Post directly to master guest checkout invoice</div>
            </div>
          </div>
          <i data-lucide="key" class="w-4 h-4 text-brandRedLight"></i>
        </label>

        <label class="p-4 rounded-2xl bg-brandGray800 border border-brandGray700 flex items-center justify-between cursor-pointer">
          <div class="flex items-center gap-3">
            <input type="radio" name="pay" class="accent-brandRed">
            <div>
              <div class="text-xs font-bold text-white">Credit Card (MasterCard **** 4892)</div>
              <div class="text-[10px] text-brandGray200">Instant online card authorization</div>
            </div>
          </div>
          <i data-lucide="credit-card" class="w-4 h-4 text-brandGray200"></i>
        </label>
      </div>

      <button onclick="appStore.placeRestaurantOrder()" class="w-full py-4 rounded-xl bg-brandRed hover:bg-brandRedLight text-white font-outfit font-bold text-xs uppercase shadow-xl shadow-brandRed/40 transition-all flex items-center justify-center gap-2">
        <i data-lucide="send" class="w-4 h-4"></i>
        Send Order to Kitchen KDS
      </button>
    </div>
  `;
}

// SCREEN 16: ORDER STATUS & LIVE TRACKER
function renderOrderStatusScreen() {
  const ord = appStore.orders[0] || { id: 'ord-104', status: 'Preparing', prepTimer: '12:45', serviceType: 'Room Delivery' };

  return `
    <div class="p-5 space-y-5">
      <div class="flex items-center justify-between">
        <button onclick="appStore.setMobileScreen(10)" class="p-1.5 rounded-lg bg-brandGray800 text-white border border-brandGray700">
          <i data-lucide="arrow-left" class="w-4 h-4"></i>
        </button>
        <span class="text-xs text-brandRedLight font-bold">KDS Live Tracker</span>
      </div>

      <div class="p-5 rounded-2xl bg-brandGray800 border border-brandGray700 text-center space-y-2">
        <div class="text-[10px] text-brandGray200 font-bold uppercase">Estimated Delivery Timer</div>
        <div class="font-mono font-black text-3xl text-brandRedLight animate-pulse">${ord.prepTimer}</div>
        <div class="text-xs text-white font-semibold">Order #${ord.id} • ${ord.serviceType}</div>
      </div>

      <div class="space-y-4 px-2">
        <div class="flex items-start gap-3">
          <div class="w-6 h-6 rounded-full bg-brandRed text-white flex items-center justify-center text-xs font-bold">✓</div>
          <div>
            <div class="text-xs font-bold text-white">Order Received</div>
            <div class="text-[10px] text-brandGray200">Logged at kitchen terminal</div>
          </div>
        </div>

        <div class="flex items-start gap-3">
          <div class="w-6 h-6 rounded-full ${['Preparing', 'Ready', 'Dispatched'].includes(ord.status) ? 'bg-brandRed text-white' : 'bg-brandGray700 text-brandGray600'} flex items-center justify-center text-xs font-bold">
            ${['Preparing', 'Ready', 'Dispatched'].includes(ord.status) ? '✓' : '2'}
          </div>
          <div>
            <div class="text-xs font-bold text-white">Kitchen Preparing</div>
            <div class="text-[10px] text-brandGray200">Chef cooking & plating</div>
          </div>
        </div>

        <div class="flex items-start gap-3">
          <div class="w-6 h-6 rounded-full ${['Ready', 'Dispatched'].includes(ord.status) ? 'bg-brandRed text-white' : 'bg-brandGray700 text-brandGray600'} flex items-center justify-center text-xs font-bold">
            ${['Ready', 'Dispatched'].includes(ord.status) ? '✓' : '3'}
          </div>
          <div>
            <div class="text-xs font-bold text-white">Out for Delivery / Ready</div>
            <div class="text-[10px] text-brandGray200">Waiter en route</div>
          </div>
        </div>
      </div>

      <button onclick="appStore.switchMode('kitchen')" class="w-full py-3.5 rounded-xl bg-brandGray800 border border-brandGray700 text-white text-xs font-bold hover:border-brandRed">
        Switch to Kitchen KDS Dashboard
      </button>
    </div>
  `;
}

// SCREEN 17: WELLNESS LANDING
function renderWellnessLandingScreen() {
  return `
    <div class="relative min-h-[640px] flex flex-col justify-between p-5 bg-cover bg-center rounded-2xl shadow-2xl overflow-hidden" style="background-image: linear-gradient(to bottom, rgba(63, 0, 10, 0.4), rgba(15, 23, 42, 0.95)), url('assets/wellness-hero.jpg');">
      <div class="flex items-center justify-between z-10">
        <button onclick="appStore.setMobileScreen(1)" class="p-2 rounded-xl bg-brandGray800/80 backdrop-blur-md text-white border border-brandGray700">
          <i data-lucide="arrow-left" class="w-4 h-4"></i>
        </button>
        <span class="text-xs font-bold text-brandRedLight uppercase tracking-widest px-3 py-1 rounded-full bg-brandMaroonDark/90 border border-brandRed/40">Wellness & Pool Suite</span>
      </div>

      <div class="my-auto py-6 z-10 space-y-2">
        <span class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brandMaroon border border-brandRed/40 text-brandRedLight text-xs font-bold uppercase tracking-wider">
          <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
          Poolside Sanctuary
        </span>
        <h1 class="font-serif font-black text-3xl text-white leading-tight">Rejuvenate Body & Soul</h1>
        <p class="text-xs text-brandGray200 font-normal leading-relaxed max-w-sm">Outdoor swimming pool, sun deck cabanas, thermal spa & VIP gym facility.</p>
      </div>

      <div class="p-5 rounded-2xl bg-brandGray800/95 border border-brandGray700 backdrop-blur-xl space-y-3.5 shadow-2xl z-10">
        <div class="flex items-center justify-between text-xs text-white font-bold">
          <span class="flex items-center gap-2 text-brandGray200 font-normal">
            <i data-lucide="clock" class="w-4 h-4 text-brandRedLight"></i> Operating Hours
          </span>
          <span class="text-brandRedLight font-bold">6:00 AM – 11:00 PM</span>
        </div>
        <button onclick="appStore.setMobileScreen(18)" class="w-full py-4 rounded-xl bg-gradient-to-r from-brandRed via-brandRedDark to-brandMaroon text-white font-outfit font-bold text-xs uppercase tracking-wider shadow-lg shadow-brandRed/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2">
          Select Access Pass Tier
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `;
}

// SCREEN 18: PASS SELECTION
function renderPassSelectionScreen() {
  return `
    <div class="p-5 space-y-4">
      <div class="flex items-center justify-between">
        <button onclick="appStore.setMobileScreen(17)" class="p-1.5 rounded-lg bg-brandGray800 text-white border border-brandGray700">
          <i data-lucide="arrow-left" class="w-4 h-4"></i>
        </button>
        <h2 class="font-outfit font-bold text-sm text-white">Select Access Pass</h2>
      </div>

      <div class="space-y-3">
        <div onclick="appStore.selectedPassTier = 'Daily Pass'; appStore.setMobileScreen(19);" class="p-4 rounded-2xl bg-brandGray800 border border-brandGray700 hover:border-brandRed cursor-pointer flex justify-between items-center">
          <div>
            <div class="font-bold text-sm text-white">Daily Pass</div>
            <div class="text-[11px] text-brandGray200">24-Hour full facility access</div>
          </div>
          <span class="font-bold text-brandRedLight text-base">$45</span>
        </div>

        <div onclick="appStore.selectedPassTier = 'Monthly VIP'; appStore.setMobileScreen(19);" class="p-4 rounded-2xl bg-brandGray800 border border-brandRed cursor-pointer flex justify-between items-center">
          <div>
            <div class="font-bold text-sm text-white">Monthly VIP Combo Pass</div>
            <div class="text-[11px] text-brandGray200">30-Day unlimited access</div>
          </div>
          <span class="font-bold text-brandRedLight text-base">$350</span>
        </div>
      </div>
    </div>
  `;
}

// SCREEN 19: WELLNESS CHECKOUT
function renderWellnessCheckoutScreen() {
  const tier = appStore.selectedPassTier || 'Daily Pass';
  const price = tier.includes('Daily') ? 45 : 350;

  return `
    <div class="p-5 space-y-4">
      <button onclick="appStore.setMobileScreen(18)" class="p-1.5 rounded-lg bg-brandGray800 text-white border border-brandGray700">
        <i data-lucide="arrow-left" class="w-4 h-4"></i>
      </button>

      <h2 class="font-outfit font-bold text-sm text-white">Pass Checkout Summary</h2>
      <div class="p-4 rounded-2xl bg-brandGray800 border border-brandGray700 flex justify-between text-sm font-bold text-white">
        <span>${tier} (All-Access Combo)</span>
        <span class="text-brandRedLight">$${price}</span>
      </div>

      <button onclick="appStore.purchaseWellnessPass('${tier}', 'All-Access Luxury Combo', ${price})" class="w-full py-4 rounded-xl bg-brandRed text-white font-bold text-xs uppercase shadow-lg shadow-brandRed/30">
        Pay & Generate Digital QR Pass
      </button>
    </div>
  `;
}

// SCREEN 20: PASS DIGITAL ACCESS QR
function renderPassDigitalAccessScreen() {
  const pass = appStore.wellnessPasses[0] || { qrCode: 'CS-PASS-771-VIP', status: 'Active', tier: 'Monthly VIP' };
  const isExpired = pass.status === 'Expired';

  return `
    <div class="p-5 text-center space-y-4 my-auto">
      <div class="flex items-center justify-between">
        <button onclick="appStore.setMobileScreen(17)" class="p-1.5 rounded-lg bg-brandGray800 text-white border border-brandGray700">
          <i data-lucide="arrow-left" class="w-4 h-4"></i>
        </button>
        <span class="text-xs font-bold ${isExpired ? 'text-brandRedLight' : 'text-brandRedLight'}">
          ${isExpired ? 'EXPIRED' : 'ACTIVE PASS'}
        </span>
      </div>

      <div class="p-6 rounded-3xl bg-brandGray800 border-4 ${isExpired ? 'border-brandGray700' : 'border-brandRed'} shadow-2xl space-y-4">
        <div class="text-xs font-bold text-white uppercase">${pass.tier} Access Pass</div>

        <div class="w-44 h-44 bg-white p-3 rounded-2xl mx-auto flex items-center justify-center">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${pass.qrCode}" class="w-full h-full object-contain">
        </div>

        <div class="font-mono text-xs font-bold text-brandGray200">${pass.qrCode}</div>
      </div>

      <button onclick="appStore.togglePassExpiry('${pass.id}')" class="w-full py-3 rounded-xl bg-brandGray800 border border-brandGray700 text-xs font-bold text-brandGray200">
        Simulate Expiry (Toggle Pass Status)
      </button>
    </div>
  `;
}
