/**
 * Operational Dashboards Render Engine (4 Web/Tablet Dashboards)
 */

// -------------------------------------------------------------
// DASHBOARD 1: HOTEL FRONT DESK DASHBOARD (RECEPTION)
// -------------------------------------------------------------
function renderHotelFrontDeskDashboard() {
  const rooms = appStore.rooms;
  const bookings = appStore.bookings;

  return `
    <div class="p-6 max-w-7xl mx-auto space-y-6 animate-fade-in">
      <!-- Header Bar -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-charcoal-800/90 p-5 rounded-2xl border border-white/10 shadow-xl">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-crimson flex items-center justify-center shadow-lg shadow-crimson/30">
            <i data-lucide="hotel" class="w-6 h-6 text-white"></i>
          </div>
          <div>
            <h1 class="font-outfit font-extrabold text-xl text-white">Hotel Front Desk Reception</h1>
            <p class="text-xs text-slate-400">Manage real-time guest arrivals, check-in tokens, and room statuses.</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="px-4 py-2 rounded-xl bg-charcoal-900 border border-white/10 text-xs">
            <span class="text-slate-400 block text-[10px]">Today's Occupancy</span>
            <span class="font-outfit font-bold text-sm text-emerald-400">75% (3/4 Suites)</span>
          </div>
        </div>
      </div>

      <!-- Main Operational Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Token Verification Tool Column (1 Col) -->
        <div class="lg:col-span-1 space-y-6">
          <!-- Token Verification Box -->
          <div class="p-6 rounded-2xl bg-gradient-to-br from-charcoal-800 to-charcoal-900 border-2 border-crimson/50 shadow-2xl space-y-4">
            <div class="flex items-center gap-2 text-crimson-light font-outfit font-bold text-sm uppercase tracking-wider">
              <i data-lucide="key-round" class="w-5 h-5"></i>
              <span>Token Verification Tool</span>
            </div>
            <p class="text-xs text-slate-300">Input guest's 6-digit Check-In Token generated on guest app to trigger 1-click Check-In.</p>

            <div class="space-y-2">
              <input id="token-input" type="text" placeholder="e.g. CS-7892" class="w-full p-4 text-center font-mono font-black text-xl tracking-widest uppercase bg-charcoal-900 border border-white/20 rounded-xl text-white focus:outline-none focus:border-crimson focus:ring-2 focus:ring-crimson/50">
              <button onclick="
                const val = document.getElementById('token-input').value;
                appStore.verifyToken(val);
              " class="w-full py-3.5 rounded-xl bg-crimson hover:bg-crimson-light text-white font-outfit font-bold text-xs uppercase tracking-wider shadow-lg shadow-crimson/40 transition-all">
                Verify Token & Check-In
              </button>
            </div>

            <!-- Quick Copy Shortcut for Testing -->
            <div class="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Active Token Sample:</span>
              <button onclick="document.getElementById('token-input').value = '${bookings[0] ? bookings[0].token : 'CS-7892'}'" class="font-mono text-crimson-light hover:underline font-bold">
                ${bookings[0] ? bookings[0].token : 'CS-7892'}
              </button>
            </div>
          </div>

          <!-- Active Today Arrivals List -->
          <div class="p-5 rounded-2xl bg-charcoal-800 border border-white/10 space-y-3">
            <h3 class="font-outfit font-bold text-sm text-white flex items-center justify-between">
              <span>Expected Arrivals Today</span>
              <span class="text-xs text-slate-400 font-normal">(${bookings.length})</span>
            </h3>

            <div class="space-y-3">
              ${bookings.map(b => `
                <div class="p-3.5 rounded-xl bg-charcoal-900 border border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <div class="font-bold text-white">${b.guestName}</div>
                    <div class="text-slate-400 text-[11px]">${b.roomName}</div>
                  </div>
                  <div class="text-right">
                    <span class="px-2 py-0.5 rounded-full ${b.status === 'Checked-In' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'} font-bold text-[10px]">${b.status}</span>
                    <div class="font-mono text-[10px] text-slate-400 mt-0.5">${b.token}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Room Management Real-Time Map (2 Cols) -->
        <div class="lg:col-span-2 space-y-4">
          <div class="flex items-center justify-between">
            <h2 class="font-outfit font-bold text-base text-white">Live Suite Status Grid</h2>
            <div class="flex gap-2 text-xs">
              <span class="flex items-center gap-1.5 text-emerald-400"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Available</span>
              <span class="flex items-center gap-1.5 text-crimson-light"><span class="w-2.5 h-2.5 rounded-full bg-crimson"></span> Occupied</span>
              <span class="flex items-center gap-1.5 text-amber-400"><span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Cleaning Needed</span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${rooms.map(room => `
              <div class="p-5 rounded-2xl bg-charcoal-800 border ${room.status === 'Occupied' ? 'border-crimson/50' : room.status === 'Available' ? 'border-emerald-500/40' : 'border-amber-500/40'} space-y-4 shadow-lg">
                <div class="flex justify-between items-start">
                  <div>
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">${room.category} • ${room.id.toUpperCase()}</span>
                    <h3 class="font-outfit font-bold text-base text-white">${room.name}</h3>
                  </div>
                  <span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                    room.status === 'Occupied' ? 'bg-crimson/20 text-crimson-light border border-crimson/40' :
                    room.status === 'Available' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' :
                    'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                  }">
                    ${room.status}
                  </span>
                </div>

                <div class="flex items-center justify-between text-xs text-slate-300">
                  <span>Rate: <strong class="text-white">$${room.price}/night</strong></span>
                  <span>Cap: <strong class="text-white">${room.capacity}</strong></span>
                </div>

                <!-- 1-Click Front Desk Status Toggles -->
                <div class="pt-2 border-t border-white/10 flex gap-2">
                  <button onclick="
                    const r = appStore.rooms.find(x => x.id === '${room.id}');
                    if(r) { r.status = 'Available'; appStore.notify(); }
                  " class="flex-1 py-1.5 rounded-lg bg-charcoal-900 hover:bg-emerald-900/40 text-[10px] font-bold text-emerald-400 border border-white/10">Set Available</button>

                  <button onclick="
                    const r = appStore.rooms.find(x => x.id === '${room.id}');
                    if(r) { r.status = 'Occupied'; appStore.notify(); }
                  " class="flex-1 py-1.5 rounded-lg bg-charcoal-900 hover:bg-crimson/30 text-[10px] font-bold text-crimson-light border border-white/10">Set Occupied</button>

                  <button onclick="
                    const r = appStore.rooms.find(x => x.id === '${room.id}');
                    if(r) { r.status = 'Cleaning Needed'; appStore.notify(); }
                  " class="flex-1 py-1.5 rounded-lg bg-charcoal-900 hover:bg-amber-900/40 text-[10px] font-bold text-amber-400 border border-white/10">Set Cleaning</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// DASHBOARD 2: KITCHEN & RESTAURANT DASHBOARD (KDS)
// -------------------------------------------------------------
function renderKitchenKDSDashboard() {
  const orders = appStore.orders;

  return `
    <div class="p-6 max-w-7xl mx-auto space-y-6 animate-fade-in">
      <!-- Header Bar -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-charcoal-800/90 p-5 rounded-2xl border border-white/10 shadow-xl">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-crimson flex items-center justify-center shadow-lg shadow-crimson/30">
            <i data-lucide="utensils-crossed" class="w-6 h-6 text-white"></i>
          </div>
          <div>
            <h1 class="font-outfit font-extrabold text-xl text-white">Kitchen Display System (KDS)</h1>
            <p class="text-xs text-slate-400">Executive Chef order queue, live prep timers, and dispatch station.</p>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <span class="px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            KDS Operational (${orders.length} Active Orders)
          </span>
        </div>
      </div>

      <!-- KDS Order Tickets Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${orders.map(ord => {
          const isLate = (Date.now() - ord.createdAt) > 900000; // >15 mins

          return `
            <div class="p-5 rounded-2xl bg-charcoal-800 border-2 ${isLate ? 'border-crimson animate-pulse' : 'border-white/15'} space-y-4 shadow-xl flex flex-col justify-between">
              <div>
                <!-- Ticket Top Header -->
                <div class="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <span class="font-mono text-xs font-black text-crimson-light">#${ord.id}</span>
                    <h3 class="font-outfit font-bold text-sm text-white">${ord.guestName}</h3>
                  </div>
                  <div class="text-right">
                    <span class="px-2 py-1 rounded bg-crimson/20 border border-crimson/40 text-crimson-light text-[10px] font-bold uppercase">${ord.serviceType}</span>
                    <div class="font-mono text-xs font-bold text-slate-300 mt-1">${ord.prepTimer}</div>
                  </div>
                </div>

                <!-- Ordered Items List -->
                <div class="py-3 space-y-2">
                  ${ord.items.map(item => `
                    <div class="flex items-center justify-between text-xs">
                      <span class="text-slate-200 font-semibold"><strong class="text-crimson-light">${item.qty}x</strong> ${item.name}</span>
                      <span class="text-slate-400 font-mono">$${item.price * item.qty}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Action Status Controls -->
              <div class="space-y-2 pt-3 border-t border-white/10">
                <div class="text-[10px] text-slate-400 uppercase font-bold flex justify-between">
                  <span>Current Status</span>
                  <span class="text-emerald-400 font-bold">${ord.status}</span>
                </div>

                <div class="grid grid-cols-3 gap-1.5">
                  <button onclick="appStore.updateOrderStatus('${ord.id}', 'Preparing')" class="py-2 rounded-lg ${ord.status === 'Preparing' ? 'bg-crimson text-white font-bold' : 'bg-charcoal-900 text-slate-400 hover:text-white'} text-[10px]">Preparing</button>
                  <button onclick="appStore.updateOrderStatus('${ord.id}', 'Ready')" class="py-2 rounded-lg ${ord.status === 'Ready' ? 'bg-amber-500 text-black font-bold' : 'bg-charcoal-900 text-slate-400 hover:text-white'} text-[10px]">Ready</button>
                  <button onclick="appStore.updateOrderStatus('${ord.id}', 'Dispatched')" class="py-2 rounded-lg ${ord.status === 'Dispatched' ? 'bg-emerald-600 text-white font-bold' : 'bg-charcoal-900 text-slate-400 hover:text-white'} text-[10px]">Dispatched</button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// DASHBOARD 3: POOL & GYM ACCESS SCANNER DASHBOARD
// -------------------------------------------------------------
function renderPoolGymScannerDashboard() {
  const passes = appStore.wellnessPasses;

  return `
    <div class="p-6 max-w-7xl mx-auto space-y-6 animate-fade-in">
      <!-- Header Bar -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-charcoal-800/90 p-5 rounded-2xl border border-white/10 shadow-xl">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-crimson flex items-center justify-center shadow-lg shadow-crimson/30">
            <i data-lucide="qr-code" class="w-6 h-6 text-white"></i>
          </div>
          <div>
            <h1 class="font-outfit font-extrabold text-xl text-white">Pool & Gym Access Scanner</h1>
            <p class="text-xs text-slate-400">Scan digital QR codes for turnstile verification & instant Access Control.</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Scanner Terminal Card -->
        <div class="p-6 rounded-2xl bg-charcoal-800 border border-white/10 space-y-4 shadow-xl">
          <h2 class="font-outfit font-bold text-base text-white flex items-center gap-2">
            <i data-lucide="camera" class="w-5 h-5 text-crimson-light"></i>
            QR Turnstile Terminal
          </h2>

          <div class="relative h-64 bg-charcoal-900 rounded-2xl border-2 border-dashed border-crimson/40 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
            <div class="w-32 h-32 border-2 border-crimson text-crimson-light rounded-xl flex items-center justify-center animate-pulse">
              <i data-lucide="scan" class="w-16 h-16"></i>
            </div>
            <p class="text-xs text-slate-400 mt-3">Position Guest QR Code in front of terminal camera...</p>
          </div>

          <!-- Manual Code Entry Input -->
          <div class="space-y-2">
            <label class="text-[10px] font-bold text-slate-400 uppercase">Manual Member QR Code Lookup</label>
            <div class="flex gap-2">
              <input id="qr-input" type="text" placeholder="e.g. CS-PASS-771-VIP" class="flex-1 p-3 bg-charcoal-900 border border-white/10 rounded-xl text-white font-mono text-sm uppercase focus:outline-none focus:border-crimson">
              <button onclick="
                const code = document.getElementById('qr-input').value;
                const result = appStore.scanQRCode(code);
                window.lastScanResult = result;
                appStore.notify();
              " class="px-5 py-3 rounded-xl bg-crimson hover:bg-crimson-light text-white font-outfit font-bold text-xs uppercase shadow-lg shadow-crimson/40">
                Scan Pass
              </button>
            </div>
          </div>

          <!-- Sample Quick Button Shortcuts -->
          <div class="pt-2 flex gap-2">
            <button onclick="
              document.getElementById('qr-input').value = '${passes[0] ? passes[0].qrCode : 'CS-PASS-771-VIP'}';
              const result = appStore.scanQRCode('${passes[0] ? passes[0].qrCode : 'CS-PASS-771-VIP'}');
              window.lastScanResult = result;
              appStore.notify();
            " class="flex-1 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
              Test VALID QR Pass
            </button>

            <button onclick="
              document.getElementById('qr-input').value = '${passes[1] ? passes[1].qrCode : 'CS-PASS-772-POOL'}';
              const result = appStore.scanQRCode('${passes[1] ? passes[1].qrCode : 'CS-PASS-772-POOL'}');
              window.lastScanResult = result;
              appStore.notify();
            " class="flex-1 py-2 rounded-xl bg-crimson/20 border border-crimson/40 text-crimson-light text-xs font-bold">
              Test EXPIRED QR Pass
            </button>
          </div>
        </div>

        <!-- Verification Results Screen (FLASH GREEN / RED SCREEN) -->
        <div class="space-y-4">
          <h2 class="font-outfit font-bold text-base text-white">Instant Verification Screen</h2>

          ${window.lastScanResult ? (
            window.lastScanResult.valid ? `
              <!-- GREEN SCREEN: VALID ACCESS -->
              <div class="p-8 rounded-3xl bg-emerald-950/90 border-4 border-emerald-500 shadow-2xl text-center space-y-4 animate-fade-in glow-emerald">
                <div class="w-20 h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-2xl">
                  <i data-lucide="check-circle-2" class="w-12 h-12"></i>
                </div>
                <h3 class="font-outfit font-black text-2xl text-white tracking-wide">ACCESS GRANTED</h3>
                <div class="p-4 rounded-2xl bg-charcoal-900/80 border border-emerald-500/40 space-y-1 text-left">
                  <div class="text-xs text-emerald-400 font-bold">Guest: ${window.lastScanResult.pass.guestName}</div>
                  <div class="text-xs text-white">Pass Type: ${window.lastScanResult.pass.passType} (${window.lastScanResult.pass.tier})</div>
                  <div class="text-[10px] text-slate-400">Expires: ${new Date(window.lastScanResult.pass.expiresAt).toLocaleDateString()}</div>
                </div>
              </div>
            ` : `
              <!-- RED SCREEN: EXPIRED / INVALID ACCESS -->
              <div class="p-8 rounded-3xl bg-crimson-dark/90 border-4 border-crimson shadow-2xl text-center space-y-4 animate-fade-in glow-crimson">
                <div class="w-20 h-20 rounded-full bg-crimson text-white flex items-center justify-center mx-auto shadow-2xl">
                  <i data-lucide="x-circle" class="w-12 h-12"></i>
                </div>
                <h3 class="font-outfit font-black text-2xl text-white tracking-wide">ACCESS DENIED</h3>
                <div class="p-4 rounded-2xl bg-charcoal-900/80 border border-crimson/40 text-center text-xs text-crimson-light font-bold">
                  Reason: ${window.lastScanResult.reason}
                </div>
              </div>
            `
          ) : `
            <div class="p-12 rounded-3xl bg-charcoal-800 border border-white/10 text-center text-slate-400 text-xs">
              <i data-lucide="qr-code" class="w-12 h-12 mx-auto mb-2 text-slate-600"></i>
              Awaiting QR Code Scan...
            </div>
          `}
        </div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// DASHBOARD 4: SUPER ADMIN DASHBOARD (MASTER CONTROL)
// -------------------------------------------------------------
function renderSuperAdminDashboard() {
  const rooms = appStore.rooms;
  const menu = appStore.menuItems;

  return `
    <div class="p-6 max-w-7xl mx-auto space-y-6 animate-fade-in">
      <!-- Header Bar -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-charcoal-800/90 p-5 rounded-2xl border border-white/10 shadow-xl">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-crimson to-crimson-dark flex items-center justify-center shadow-lg shadow-crimson/30">
            <i data-lucide="shield-check" class="w-6 h-6 text-white"></i>
          </div>
          <div>
            <h1 class="font-outfit font-extrabold text-xl text-white">Super Admin Master Control</h1>
            <p class="text-xs text-slate-400">Global analytics, live inventory controls, pricing management & staff roles.</p>
          </div>
        </div>

        <div class="flex gap-2">
          <button onclick="appStore.switchMode('hotel')" class="px-3.5 py-2 rounded-xl bg-charcoal-900 border border-white/10 text-xs text-slate-300 font-bold hover:text-white">Hotel Desk</button>
          <button onclick="appStore.switchMode('kitchen')" class="px-3.5 py-2 rounded-xl bg-charcoal-900 border border-white/10 text-xs text-slate-300 font-bold hover:text-white">Kitchen KDS</button>
          <button onclick="appStore.switchMode('scanner')" class="px-3.5 py-2 rounded-xl bg-charcoal-900 border border-white/10 text-xs text-slate-300 font-bold hover:text-white">Scanner</button>
        </div>
      </div>

      <!-- Real-Time Financial Analytics Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="p-5 rounded-2xl bg-charcoal-800 border border-white/10 space-y-2">
          <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Resort Revenue</div>
          <div class="font-outfit font-black text-2xl text-white">$18,450</div>
          <div class="text-[10px] text-emerald-400 font-bold">+18.5% this week</div>
        </div>

        <div class="p-5 rounded-2xl bg-charcoal-800 border border-white/10 space-y-2">
          <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Hotel Suites Booking</div>
          <div class="font-outfit font-black text-2xl text-crimson-light">$12,800</div>
          <div class="text-[10px] text-slate-400">3 Active Suites Occupied</div>
        </div>

        <div class="p-5 rounded-2xl bg-charcoal-800 border border-white/10 space-y-2">
          <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Gourmet Dining Revenue</div>
          <div class="font-outfit font-black text-2xl text-amber-400">$3,850</div>
          <div class="text-[10px] text-slate-400">42 Orders Completed</div>
        </div>

        <div class="p-5 rounded-2xl bg-charcoal-800 border border-white/10 space-y-2">
          <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Wellness Passes Revenue</div>
          <div class="font-outfit font-black text-2xl text-emerald-400">$1,800</div>
          <div class="text-[10px] text-slate-400">28 Active Members</div>
        </div>
      </div>

      <!-- Live Controls Tabbed View -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Room Price Management -->
        <div class="p-5 rounded-2xl bg-charcoal-800 border border-white/10 space-y-4">
          <h2 class="font-outfit font-bold text-base text-white flex items-center justify-between">
            <span>Live Suite Rate Controls</span>
            <span class="text-xs text-crimson-light font-bold">Instant App Sync</span>
          </h2>

          <div class="space-y-3">
            ${rooms.map(room => `
              <div class="p-3.5 rounded-xl bg-charcoal-900 border border-white/10 flex items-center justify-between">
                <div>
                  <div class="font-outfit font-bold text-xs text-white">${room.name}</div>
                  <div class="text-[10px] text-slate-400">${room.category}</div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-xs font-bold text-slate-300">$</span>
                  <input id="rate-${room.id}" type="number" value="${room.price}" class="w-20 p-1.5 bg-charcoal-800 border border-white/20 rounded text-center text-xs font-bold text-white">
                  <button onclick="
                    const newP = parseInt(document.getElementById('rate-${room.id}').value);
                    appStore.updateRoomRate('${room.id}', newP);
                  " class="px-2.5 py-1.5 rounded-lg bg-crimson text-white text-[10px] font-bold">Update</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Food Menu Live Inventory Manager -->
        <div class="p-5 rounded-2xl bg-charcoal-800 border border-white/10 space-y-4">
          <h2 class="font-outfit font-bold text-base text-white flex items-center justify-between">
            <span>Dining Menu Stock Controls</span>
            <span class="text-xs text-emerald-400 font-bold">Live KDS Toggle</span>
          </h2>

          <div class="space-y-3">
            ${menu.map(item => `
              <div class="p-3.5 rounded-xl bg-charcoal-900 border border-white/10 flex items-center justify-between">
                <div>
                  <div class="font-outfit font-bold text-xs text-white">${item.name}</div>
                  <div class="text-[10px] text-crimson-light font-mono">$${item.price}</div>
                </div>
                <button onclick="appStore.toggleStock('${item.id}')" class="px-3 py-1.5 rounded-lg ${item.inStock ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/40' : 'bg-crimson/20 text-crimson-light border border-crimson/40'} text-xs font-bold">
                  ${item.inStock ? 'In Stock' : 'Out of Stock'}
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}
