/**
 * Operational Dashboards Render Engine (4 Web/Tablet Dashboards) - Red, Gray & Maroon Identity
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
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-brandGray800 p-5 rounded-2xl border border-brandGray700 shadow-xl">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-brandRed to-brandMaroon flex items-center justify-center shadow-lg shadow-brandRed/30 border border-white/20">
            <i data-lucide="hotel" class="w-6 h-6 text-white"></i>
          </div>
          <div>
            <h1 class="font-outfit font-extrabold text-xl text-white">Hotel Front Desk Reception</h1>
            <p class="text-xs text-brandGray200">Manage real-time guest arrivals, check-in tokens, and room statuses.</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <div class="px-4 py-2 rounded-xl bg-brandGray900 border border-brandGray700 text-xs">
            <span class="text-brandGray200 block text-[10px]">Today's Occupancy</span>
            <span class="font-outfit font-bold text-sm text-brandRedLight">75% (3/4 Suites)</span>
          </div>
        </div>
      </div>

      <!-- Main Operational Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Token Verification Tool Column (1 Col) -->
        <div class="lg:col-span-1 space-y-6">
          <div class="p-6 rounded-2xl bg-brandMaroonDark border-2 border-brandRed shadow-2xl space-y-4">
            <div class="flex items-center gap-2 text-brandRedLight font-outfit font-bold text-sm uppercase tracking-wider">
              <i data-lucide="key-round" class="w-5 h-5"></i>
              <span>Token Verification Tool</span>
            </div>
            <p class="text-xs text-brandGray200">Input guest's 6-digit Check-In Token generated on guest app to trigger 1-click Check-In.</p>

            <div class="space-y-2">
              <input id="token-input" type="text" placeholder="e.g. CS-7892" class="w-full p-4 text-center font-mono font-black text-xl tracking-widest uppercase bg-brandGray900 border border-brandGray700 rounded-xl text-white focus:outline-none focus:border-brandRed">
              <button onclick="
                const val = document.getElementById('token-input').value;
                appStore.verifyToken(val);
              " class="w-full py-3.5 rounded-xl bg-brandRed hover:bg-brandRedLight text-white font-outfit font-bold text-xs uppercase tracking-wider shadow-lg shadow-brandRed/40 transition-all">
                Verify Token & Check-In
              </button>
            </div>
          </div>

          <!-- Active Today Arrivals List -->
          <div class="p-5 rounded-2xl bg-brandGray800 border border-brandGray700 space-y-3">
            <h3 class="font-outfit font-bold text-sm text-white flex items-center justify-between">
              <span>Expected Arrivals Today</span>
              <span class="text-xs text-brandGray200 font-normal">(${bookings.length})</span>
            </h3>

            <div class="space-y-3">
              ${bookings.map(b => `
                <div class="p-3.5 rounded-xl bg-brandGray900 border border-brandGray700 flex items-center justify-between text-xs">
                  <div>
                    <div class="font-bold text-white">${b.guestName}</div>
                    <div class="text-brandGray200 text-[11px]">${b.roomName}</div>
                  </div>
                  <div class="text-right">
                    <span class="px-2 py-0.5 rounded-full ${b.status === 'Checked-In' ? 'bg-brandRed/20 text-brandRedLight border border-brandRed/40' : 'bg-brandGray700 text-brandGray200'} font-bold text-[10px]">${b.status}</span>
                    <div class="font-mono text-[10px] text-brandGray200 mt-0.5">${b.token}</div>
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
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${rooms.map(room => `
              <div class="p-5 rounded-2xl bg-brandGray800 border ${room.status === 'Occupied' ? 'border-brandRed' : 'border-brandGray700'} space-y-4 shadow-lg">
                <div class="flex justify-between items-start">
                  <div>
                    <span class="text-[10px] font-bold text-brandGray200 uppercase tracking-wider">${room.category} • ${room.id.toUpperCase()}</span>
                    <h3 class="font-outfit font-bold text-base text-white">${room.name}</h3>
                  </div>
                  <span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                    room.status === 'Occupied' ? 'bg-brandRed/20 text-brandRedLight border border-brandRed/40' :
                    'bg-brandGray700 text-brandGray200'
                  }">
                    ${room.status}
                  </span>
                </div>

                <div class="pt-2 border-t border-brandGray700 flex gap-2">
                  <button onclick="
                    const r = appStore.rooms.find(x => x.id === '${room.id}');
                    if(r) { r.status = 'Available'; appStore.notify(); }
                  " class="flex-1 py-1.5 rounded-lg bg-brandGray900 text-[10px] font-bold text-brandGray200 border border-brandGray700">Set Available</button>

                  <button onclick="
                    const r = appStore.rooms.find(x => x.id === '${room.id}');
                    if(r) { r.status = 'Occupied'; appStore.notify(); }
                  " class="flex-1 py-1.5 rounded-lg bg-brandRed text-[10px] font-bold text-white">Set Occupied</button>
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
      <div class="flex items-center justify-between bg-brandGray800 p-5 rounded-2xl border border-brandGray700">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-brandRed flex items-center justify-center">
            <i data-lucide="utensils-crossed" class="w-6 h-6 text-white"></i>
          </div>
          <div>
            <h1 class="font-outfit font-extrabold text-xl text-white">Kitchen Display System (KDS)</h1>
            <p class="text-xs text-brandGray200">Executive Chef live queue & status controls.</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${orders.map(ord => `
          <div class="p-5 rounded-2xl bg-brandGray800 border-2 border-brandRed/50 space-y-4 shadow-xl">
            <div class="flex items-center justify-between border-b border-brandGray700 pb-3">
              <div>
                <span class="font-mono text-xs font-black text-brandRedLight">#${ord.id}</span>
                <h3 class="font-outfit font-bold text-sm text-white">${ord.guestName}</h3>
              </div>
              <span class="px-2 py-1 rounded bg-brandMaroon text-brandRedLight text-[10px] font-bold">${ord.status}</span>
            </div>

            <div class="grid grid-cols-3 gap-1.5 pt-2">
              <button onclick="appStore.updateOrderStatus('${ord.id}', 'Preparing')" class="py-2 rounded-lg ${ord.status === 'Preparing' ? 'bg-brandRed text-white font-bold' : 'bg-brandGray900 text-brandGray200'} text-[10px]">Preparing</button>
              <button onclick="appStore.updateOrderStatus('${ord.id}', 'Ready')" class="py-2 rounded-lg ${ord.status === 'Ready' ? 'bg-brandMaroon text-white font-bold' : 'bg-brandGray900 text-brandGray200'} text-[10px]">Ready</button>
              <button onclick="appStore.updateOrderStatus('${ord.id}', 'Dispatched')" class="py-2 rounded-lg ${ord.status === 'Dispatched' ? 'bg-brandRedDark text-white font-bold' : 'bg-brandGray900 text-brandGray200'} text-[10px]">Dispatched</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// DASHBOARD 3: POOL & GYM ACCESS SCANNER
// -------------------------------------------------------------
function renderPoolGymScannerDashboard() {
  const passes = appStore.wellnessPasses;

  return `
    <div class="p-6 max-w-7xl mx-auto space-y-6 animate-fade-in">
      <div class="flex items-center justify-between bg-brandGray800 p-5 rounded-2xl border border-brandGray700">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-brandRed flex items-center justify-center">
            <i data-lucide="qr-code" class="w-6 h-6 text-white"></i>
          </div>
          <h1 class="font-outfit font-extrabold text-xl text-white">Pool & Gym Scanner Terminal</h1>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="p-6 rounded-2xl bg-brandGray800 border border-brandGray700 space-y-4">
          <div class="flex gap-2">
            <button onclick="
              const result = appStore.scanQRCode('${passes[0] ? passes[0].qrCode : 'CS-PASS-771-VIP'}');
              window.lastScanResult = result;
              appStore.notify();
            " class="flex-1 py-3 rounded-xl bg-brandRed text-white text-xs font-bold">
              Test VALID QR Pass
            </button>

            <button onclick="
              const result = appStore.scanQRCode('${passes[1] ? passes[1].qrCode : 'CS-PASS-772-POOL'}');
              window.lastScanResult = result;
              appStore.notify();
            " class="flex-1 py-3 rounded-xl bg-brandMaroon text-brandRedLight text-xs font-bold border border-brandRed/40">
              Test EXPIRED QR Pass
            </button>
          </div>
        </div>

        <div>
          ${window.lastScanResult ? (
            window.lastScanResult.valid ? `
              <div class="p-8 rounded-3xl bg-brandMaroonDark border-4 border-brandRed text-center space-y-4 glow-red">
                <h3 class="font-outfit font-black text-2xl text-white">ACCESS GRANTED</h3>
                <p class="text-xs text-brandRedLight">Guest: ${window.lastScanResult.pass.guestName} (${window.lastScanResult.pass.tier})</p>
              </div>
            ` : `
              <div class="p-8 rounded-3xl bg-brandGray800 border-4 border-brandGray700 text-center space-y-4">
                <h3 class="font-outfit font-black text-2xl text-white">ACCESS DENIED</h3>
                <p class="text-xs text-brandGray200">${window.lastScanResult.reason}</p>
              </div>
            `
          ) : `<div class="p-8 rounded-3xl bg-brandGray800 border border-brandGray700 text-center text-xs text-brandGray200">Ready to scan guest pass...</div>`}
        </div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// DASHBOARD 4: SUPER ADMIN DASHBOARD
// -------------------------------------------------------------
function renderSuperAdminDashboard() {
  return `
    <div class="p-6 max-w-7xl mx-auto space-y-6 animate-fade-in">
      <div class="flex items-center justify-between bg-brandGray800 p-5 rounded-2xl border border-brandGray700">
        <h1 class="font-outfit font-extrabold text-xl text-white">Super Admin Master Control</h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="p-5 rounded-2xl bg-brandGray800 border border-brandGray700 space-y-1">
          <div class="text-[10px] text-brandGray200 font-bold uppercase">Total Revenue</div>
          <div class="font-outfit font-black text-2xl text-brandRedLight">$18,450</div>
        </div>
      </div>
    </div>
  `;
}
