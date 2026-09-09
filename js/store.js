/**
 * Central State & Business Logic Store for City Star Maiduguri
 */

const INITIAL_ROOMS = [
  {
    id: 'room-101',
    name: 'Executive Deluxe Suite',
    category: 'Deluxe',
    price: 320,
    capacity: '2 Guests',
    bed: '1 King Bed',
    size: '55 m²',
    view: 'Resort Pool & Garden View',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    amenities: ['Wi-Fi 6', 'Marble Bathroom', 'Private Balcony', 'Nespresso Machine', '24/7 Room Service'],
    status: 'Available', // Available, Occupied, Cleaning Needed, Out of Order
    rating: 4.9,
    description: 'Experience refined elegance with floor-to-ceiling windows overlooking the luxury resort pool, featuring hand-crafted mahogany finishes and a lavish soaking tub.'
  },
  {
    id: 'room-102',
    name: 'Presidential Royal Suite',
    category: 'Suite',
    price: 650,
    capacity: '4 Guests',
    bed: '2 Super King Beds',
    size: '110 m²',
    view: 'Panoramic City & Sunset View',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    amenities: ['Private Jacuzzi', 'Butler Service', 'Lounge Bar', 'Walk-in Closet', 'Smart Automation'],
    status: 'Occupied',
    rating: 5.0,
    description: 'The pinnacle of luxury hospitality. Features an expansive living pavilion, private bar, personal butler service, and an en-suite whirlpool spa bath.'
  },
  {
    id: 'room-103',
    name: 'Penthouse Ocean Villa',
    category: 'Villa',
    price: 1200,
    capacity: '6 Guests',
    bed: '3 Master King Suites',
    size: '240 m²',
    view: 'Private Pool & Sky Deck View',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    amenities: ['Private Infinity Pool', 'Private Chef Kitchen', 'Helipad Access', 'VIP Wellness Pass', 'Airport Limousine'],
    status: 'Available',
    rating: 5.0,
    description: 'Exclusive multi-level penthouse with private plunge pool, outdoor dining terrace, private chef access, and dedicated luxury concierge.'
  },
  {
    id: 'room-104',
    name: 'Royal Heritage Suite',
    category: 'Executive',
    price: 480,
    capacity: '3 Guests',
    bed: '1 King + 1 Day Bed',
    size: '75 m²',
    view: 'Lush Botanical Gardens',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
    amenities: ['Work Studio', 'Rain Shower', 'Complimentary Minibar', 'Spa Access', 'HD Home Theater'],
    status: 'Cleaning Needed',
    rating: 4.8,
    description: 'Designed for discerning travelers, featuring classic Maiduguri artisan woodwork, state-of-the-art office studio, and complimentary premium cellar minibar.'
  }
];

const INITIAL_MENU = [
  {
    id: 'food-01',
    name: 'Wagyu Beef Ribeye Steak (300g)',
    category: 'Mains',
    price: 95,
    description: 'A5 Wagyu ribeye grilled over aromatic charcoal, served with truffle butter, roasted garlic clove, and rosemary jus.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tags: ['Chef Signature', 'Gluten Free'],
    inStock: true,
    prepTime: '20 mins'
  },
  {
    id: 'food-02',
    name: 'Pan-Seared Atlantic Lobster Tail',
    category: 'Mains',
    price: 110,
    description: 'Wild caught lobster tail basted in smoked paprika saffron butter, paired with asparagus spears and Meyer lemon caviar.',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=800&q=80',
    tags: ['Seafood Special', 'Fresh'],
    inStock: true,
    prepTime: '18 mins'
  },
  {
    id: 'food-03',
    name: 'Truffle & Wild Mushroom Tagliatelle',
    category: 'Starters',
    price: 42,
    description: 'Handmade fresh pasta tossed in black winter truffle cream, parmigiano reggiano shavings, and wild chanterelles.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281318?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetarian', 'Popular'],
    inStock: true,
    prepTime: '15 mins'
  },
  {
    id: 'food-04',
    name: '24K Gold Leaf Artisan Soufflé',
    category: 'Desserts',
    price: 35,
    description: 'Warm Valrhona dark chocolate soufflé topped with edible 24-karat gold leaf flake and Madagascar vanilla bean gelato.',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80',
    tags: ['Luxury Dessert'],
    inStock: true,
    prepTime: '12 mins'
  },
  {
    id: 'food-05',
    name: 'Château Margaux Grand Cru 2015',
    category: 'Drinks',
    price: 280,
    description: 'Exquisite French Bordeaux red wine with notes of blackcurrant, cedar, and velvety tannins. Sommelier selection.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    tags: ['Vintage Wine', 'Cellar Reserve'],
    inStock: true,
    prepTime: '5 mins'
  },
  {
    id: 'food-06',
    name: 'Royal Hibiscus Smoked Cocktail',
    category: 'Drinks',
    price: 28,
    description: 'Artisanal gin infused with organic Maiduguri zobo hibiscus, smoked rosemary sprig, lime twist, and gold dust.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    tags: ['Signature Drink'],
    inStock: true,
    prepTime: '5 mins'
  }
];

const INITIAL_BOOKINGS = [
  {
    id: 'bk-9001',
    guestName: 'Alhaji Ibrahim Usman',
    roomName: 'Presidential Royal Suite',
    roomId: 'room-102',
    token: 'CS-7892',
    checkIn: '2026-09-09',
    checkOut: '2026-09-12',
    guests: 2,
    amount: 1950,
    status: 'Checked-In', // Confirmed, Checked-In, Completed
    paymentMethod: 'Credit Card (**** 4892)'
  },
  {
    id: 'bk-9002',
    guestName: 'Dr. Fatima Aminu',
    roomName: 'Executive Deluxe Suite',
    roomId: 'room-101',
    token: 'CS-4419',
    checkIn: '2026-09-10',
    checkOut: '2026-09-14',
    guests: 2,
    amount: 1280,
    status: 'Confirmed',
    paymentMethod: 'Apple Pay'
  }
];

const INITIAL_ORDERS = [
  {
    id: 'ord-104',
    guestName: 'Alhaji Ibrahim Usman',
    roomNumber: 'Suite 102',
    serviceType: 'Room Delivery',
    items: [
      { name: 'Wagyu Beef Ribeye Steak', qty: 1, price: 95 },
      { name: 'Château Margaux Grand Cru', qty: 1, price: 280 }
    ],
    total: 375,
    status: 'Preparing', // Received -> Preparing -> Ready -> Dispatched
    createdAt: Date.now() - 600000, // 10 mins ago
    prepTimer: '12:45'
  },
  {
    id: 'ord-105',
    guestName: 'Madame Amina Yusuf',
    serviceType: 'Dine-In (Table 04)',
    items: [
      { name: 'Truffle & Wild Mushroom Tagliatelle', qty: 2, price: 84 },
      { name: 'Royal Hibiscus Smoked Cocktail', qty: 2, price: 56 }
    ],
    total: 140,
    status: 'Received',
    createdAt: Date.now() - 180000, // 3 mins ago
    prepTimer: '03:12'
  }
];

const INITIAL_PASSES = [
  {
    id: 'pass-771',
    guestName: 'Alhaji Ibrahim Usman',
    tier: 'Monthly VIP',
    passType: 'All-Access Luxury Combo',
    qrCode: 'CS-PASS-771-VIP',
    issuedAt: '2026-09-01',
    expiresAt: '2026-10-01T23:59:59',
    status: 'Active', // Active, Expired
    price: 350
  },
  {
    id: 'pass-772',
    guestName: 'Engr. Kabir Bello',
    tier: 'Daily Pass',
    passType: 'Pool & Spa Only',
    qrCode: 'CS-PASS-772-POOL',
    issuedAt: '2026-09-08',
    expiresAt: '2026-09-08T23:59:59',
    status: 'Expired',
    price: 45
  }
];

class AppStore {
  constructor() {
    this.loadState();
  }

  loadState() {
    const saved = localStorage.getItem('city_star_store');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.currentMode = parsed.currentMode || 'mobile';
        this.currentMobileScreen = parsed.currentMobileScreen || 1;
        this.selectedRoomId = parsed.selectedRoomId || 'room-101';
        this.selectedFoodId = parsed.selectedFoodId || 'food-01';
        this.selectedPassTier = parsed.selectedPassTier || 'Daily Pass';
        this.cart = parsed.cart || [];
        this.cartServiceType = parsed.cartServiceType || 'Room Delivery';
        this.cartDeliveryInfo = parsed.cartDeliveryInfo || { address: 'Room 102 - Royal Suite', roomNumber: '102', gateCode: '', phone: '+234 803 123 4567', notes: 'Please ring bell twice.' };
        this.rooms = parsed.rooms || INITIAL_ROOMS;
        this.menuItems = parsed.menuItems || INITIAL_MENU;
        this.bookings = parsed.bookings || INITIAL_BOOKINGS;
        this.orders = parsed.orders || INITIAL_ORDERS;
        this.wellnessPasses = parsed.wellnessPasses || INITIAL_PASSES;
        this.notifications = parsed.notifications || [
          { id: 1, title: 'Check-In Token Ready', text: 'Your 6-Digit Front Desk Token CS-7892 is active.', time: '10 mins ago', type: 'token' },
          { id: 2, title: 'Kitchen Status Updated', text: 'Order #ord-104 is currently being prepared by Executive Chef.', time: '5 mins ago', type: 'kitchen' }
        ];
        return;
      } catch (e) {
        console.error('Failed to parse local storage', e);
      }
    }

    // Default Fallback
    this.currentMode = 'mobile';
    this.currentMobileScreen = 1;
    this.selectedRoomId = 'room-101';
    this.selectedFoodId = 'food-01';
    this.selectedPassTier = 'Daily Pass';
    this.cart = [
      { foodId: 'food-01', name: 'Wagyu Beef Ribeye Steak (300g)', price: 95, quantity: 1, size: 'Standard', addOns: ['Truffle Butter (+$8)'], notes: 'Medium rare please.' }
    ];
    this.cartServiceType = 'Room Delivery';
    this.cartDeliveryInfo = { address: 'Suite 102 - Royal Suite', roomNumber: '102', gateCode: '', phone: '+234 803 123 4567', notes: 'Please ring bell twice.' };
    this.rooms = INITIAL_ROOMS;
    this.menuItems = INITIAL_MENU;
    this.bookings = INITIAL_BOOKINGS;
    this.orders = INITIAL_ORDERS;
    this.wellnessPasses = INITIAL_PASSES;
    this.notifications = [
      { id: 1, title: 'Check-In Token Ready', text: 'Your 6-Digit Front Desk Token CS-7892 is active.', time: '10 mins ago', type: 'token' },
      { id: 2, title: 'Kitchen Status Updated', text: 'Order #ord-104 is currently being prepared by Executive Chef.', time: '5 mins ago', type: 'kitchen' }
    ];
  }

  saveState() {
    const data = {
      currentMode: this.currentMode,
      currentMobileScreen: this.currentMobileScreen,
      selectedRoomId: this.selectedRoomId,
      selectedFoodId: this.selectedFoodId,
      selectedPassTier: this.selectedPassTier,
      cart: this.cart,
      cartServiceType: this.cartServiceType,
      cartDeliveryInfo: this.cartDeliveryInfo,
      rooms: this.rooms,
      menuItems: this.menuItems,
      bookings: this.bookings,
      orders: this.orders,
      wellnessPasses: this.wellnessPasses,
      notifications: this.notifications
    };
    localStorage.setItem('city_star_store', JSON.stringify(data));
  }

  notify() {
    this.saveState();
    if (window.renderApp) {
      window.renderApp();
    }
  }

  switchMode(mode) {
    this.currentMode = mode;
    this.notify();
  }

  setMobileScreen(screenNum) {
    this.currentMobileScreen = screenNum;
    this.notify();
  }

  selectRoom(roomId) {
    this.selectedRoomId = roomId;
    this.setMobileScreen(6); // Room details screen
  }

  selectFood(foodId) {
    this.selectedFoodId = foodId;
    this.setMobileScreen(11); // Food modal details
  }

  addToCart(item) {
    const existingIndex = this.cart.findIndex(c => c.foodId === item.foodId && c.size === item.size);
    if (existingIndex >= 0) {
      this.cart[existingIndex].quantity += item.quantity;
    } else {
      this.cart.push(item);
    }
    this.showToast('Item Added to Cart', `${item.name} added to your luxury dining order.`, 'success');
    this.notify();
  }

  updateCartQuantity(index, change) {
    if (this.cart[index]) {
      this.cart[index].quantity += change;
      if (this.cart[index].quantity <= 0) {
        this.cart.splice(index, 1);
      }
    }
    this.notify();
  }

  placeRestaurantOrder() {
    if (this.cart.length === 0) return;

    const subtotal = this.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const serviceFee = Math.round(subtotal * 0.08);
    const total = subtotal + serviceFee;

    const newOrder = {
      id: `ord-${Math.floor(100 + Math.random() * 900)}`,
      guestName: 'Alhaji Ibrahim Usman',
      roomNumber: this.cartServiceType === 'Room Delivery' ? 'Suite 102' : 'Dine-In',
      serviceType: this.cartServiceType,
      items: this.cart.map(i => ({ name: i.name, qty: i.quantity, price: i.price })),
      total: total,
      status: 'Received',
      createdAt: Date.now(),
      prepTimer: '15:00'
    };

    this.orders.unshift(newOrder);
    this.cart = [];

    // Add notification
    this.notifications.unshift({
      id: Date.now(),
      title: 'Order Sent to Kitchen',
      text: `Order #${newOrder.id} has been transmitted to Kitchen KDS. Tracker active!`,
      time: 'Just now',
      type: 'kitchen'
    });

    this.showToast('Order Placed Successfully', `Order #${newOrder.id} sent to Chef!`, 'success');
    this.setMobileScreen(16); // Order status screen
  }

  bookRoom(addOns = []) {
    const room = this.rooms.find(r => r.id === this.selectedRoomId) || this.rooms[0];
    const token = `CS-${Math.floor(1000 + Math.random() * 9000)}`;

    const newBooking = {
      id: `bk-${Math.floor(9000 + Math.random() * 999)}`,
      guestName: 'Alhaji Ibrahim Usman',
      roomName: room.name,
      roomId: room.id,
      token: token,
      checkIn: '2026-09-10',
      checkOut: '2026-09-14',
      guests: 2,
      amount: room.price * 4,
      status: 'Confirmed',
      paymentMethod: 'Credit Card (**** 4892)'
    };

    this.bookings.unshift(newBooking);

    // Update room status
    room.status = 'Occupied';

    // Add notification
    this.notifications.unshift({
      id: Date.now(),
      title: 'Room Reservation Confirmed',
      text: `Your check-in token ${token} for ${room.name} is ready for Front Desk verification.`,
      time: 'Just now',
      type: 'token'
    });

    this.showToast('Reservation Confirmed', `Check-in Token: ${token}`, 'success');
    this.setMobileScreen(9); // Booking confirmation & token screen
  }

  purchaseWellnessPass(tier, passType, price) {
    const passCode = `CS-PASS-${Math.floor(100 + Math.random() * 900)}-${tier.substring(0, 3).toUpperCase()}`;
    const expires = new Date();
    if (tier.includes('Daily')) expires.setHours(expires.getHours() + 24);
    else if (tier.includes('Monthly')) expires.setDate(expires.getDate() + 30);
    else expires.setFullYear(expires.getFullYear() + 1);

    const newPass = {
      id: `pass-${Math.floor(100 + Math.random() * 900)}`,
      guestName: 'Alhaji Ibrahim Usman',
      tier: tier,
      passType: passType,
      qrCode: passCode,
      issuedAt: new Date().toISOString().split('T')[0],
      expiresAt: expires.toISOString(),
      status: 'Active',
      price: price
    };

    this.wellnessPasses.unshift(newPass);

    this.notifications.unshift({
      id: Date.now(),
      title: 'Wellness Pass Activated',
      text: `Digital QR access pass for ${passType} (${tier}) is active!`,
      time: 'Just now',
      type: 'pass'
    });

    this.showToast('Pass Purchased', `${tier} Pass Activated!`, 'success');
    this.setMobileScreen(20); // Pass access screen
  }

  verifyToken(tokenCode) {
    const booking = this.bookings.find(b => b.token.toUpperCase() === tokenCode.trim().toUpperCase());
    if (booking) {
      booking.status = 'Checked-In';
      const room = this.rooms.find(r => r.id === booking.roomId);
      if (room) room.status = 'Occupied';
      this.showToast('Token Verified!', `Checked In Guest: ${booking.guestName} (${booking.roomName})`, 'success');
      this.notify();
      return { success: true, booking };
    }
    this.showToast('Invalid Token', `No active booking found for token: ${tokenCode}`, 'error');
    return { success: false };
  }

  updateOrderStatus(orderId, newStatus) {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.status = newStatus;
      this.showToast('Order Status Updated', `Order #${order.id} is now ${newStatus}`, 'info');
      this.notify();
    }
  }

  scanQRCode(qrCodeString) {
    const pass = this.wellnessPasses.find(p => p.qrCode.toUpperCase() === qrCodeString.trim().toUpperCase());
    if (!pass) {
      return { valid: false, reason: 'Pass Not Found in Registry' };
    }
    const isExpired = new Date(pass.expiresAt) < new Date() || pass.status === 'Expired';
    if (isExpired) {
      return { valid: false, reason: 'Pass Has Expired', pass };
    }
    return { valid: true, pass };
  }

  togglePassExpiry(passId) {
    const pass = this.wellnessPasses.find(p => p.id === passId);
    if (pass) {
      pass.status = pass.status === 'Active' ? 'Expired' : 'Active';
      this.showToast('Pass Status Toggled', `Pass ${pass.id} set to ${pass.status}`, 'info');
      this.notify();
    }
  }

  toggleStock(foodId) {
    const item = this.menuItems.find(m => m.id === foodId);
    if (item) {
      item.inStock = !item.inStock;
      this.showToast('Inventory Updated', `${item.name} set to ${item.inStock ? 'In Stock' : 'Out of Stock'}`, 'info');
      this.notify();
    }
  }

  updateRoomRate(roomId, newPrice) {
    const room = this.rooms.find(r => r.id === roomId);
    if (room && newPrice > 0) {
      room.price = newPrice;
      this.showToast('Room Price Updated', `${room.name} rate set to $${newPrice}/night`, 'success');
      this.notify();
    }
  }

  showToast(title, message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `pointer-events-auto flex items-start gap-3 p-4 rounded-2xl border shadow-2xl transition-all duration-300 animate-fade-in ${
      type === 'success' ? 'bg-charcoal-800 border-emerald-500/40 text-emerald-300' :
      type === 'error' ? 'bg-charcoal-800 border-crimson/60 text-crimson-light' :
      'bg-charcoal-800 border-white/20 text-slate-200'
    }`;

    const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'alert-triangle' : 'info';

    toast.innerHTML = `
      <i data-lucide="${icon}" class="w-5 h-5 mt-0.5 flex-shrink-0"></i>
      <div class="flex-1">
        <h4 class="font-outfit font-bold text-sm text-white">${title}</h4>
        <p class="text-xs text-slate-300 mt-0.5">${message}</p>
      </div>
      <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-white">
        <i data-lucide="x" class="w-4 h-4"></i>
      </button>
    `;

    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      if (toast.parentElement) toast.remove();
    }, 4000);
  }

  resetDemoData() {
    localStorage.removeItem('city_star_store');
    this.loadState();
    this.showToast('Demo Reset', 'All data restored to luxury default state.', 'info');
    this.notify();
  }
}

window.appStore = new AppStore();
