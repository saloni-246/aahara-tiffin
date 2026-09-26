const STORAGE_KEY = 'aahara-state-v1';
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const BASE_MENU = {
  Monday: [
    {
      id: 'mon-chicken',
      name: 'Halal Chicken Curry',
      description: 'Slow-cooked curry with potato, onion and warming spices.',
      dietary: ['Halal', 'Non-Vegetarian'],
      allergens: ['Dairy'],
      spice: 'Medium',
      price: 8500,
      proteins: [
        { label: 'Regular Chicken', price: 0 },
        { label: 'Extra Chicken', price: 1500 }
      ],
      carbs: [
        { label: 'Rice', price: 0 },
        { label: '2 Roti', price: 0 },
        { label: 'Paratha', price: 1000 }
      ],
      sides: [
        { label: 'Regular Sabzi', price: 0 },
        { label: 'Extra Sabzi', price: 1200 }
      ],
      portions: [
        { label: 'Light', price: 0 },
        { label: 'Regular', price: 0 },
        { label: 'Hearty', price: 1500 }
      ],
      extras: [
        { label: 'Extra roti', price: 800 },
        { label: 'Sweet', price: 900 },
        { label: 'Side salad', price: 700 }
      ]
    },
    {
      id: 'mon-dal',
      name: 'Dal Tadka',
      description: 'Comforting yellow lentils with ghee, garlic and tempered spices.',
      dietary: ['Vegetarian'],
      allergens: ['Dairy'],
      spice: 'Mild',
      price: 7800,
      proteins: [
        { label: 'Dal', price: 0 },
        { label: 'Extra Dal', price: 1000 }
      ],
      carbs: [
        { label: 'Rice', price: 0 },
        { label: 'Roti', price: 0 },
        { label: 'Paratha', price: 1000 }
      ],
      sides: [
        { label: 'Aloo Gobi', price: 0 },
        { label: 'Mixed Veg', price: 1200 }
      ],
      portions: [
        { label: 'Light', price: 0 },
        { label: 'Regular', price: 0 },
        { label: 'Hearty', price: 1400 }
      ],
      extras: [
        { label: 'Pickle', price: 300 },
        { label: 'Sweet', price: 900 },
        { label: 'Salad', price: 700 }
      ]
    }
  ],
  Tuesday: [
    {
      id: 'tue-paneer',
      name: 'Paneer Curry',
      description: 'A creamy cottage cheese curry, balancing comfort and variety.',
      dietary: ['Vegetarian'],
      allergens: ['Dairy'],
      spice: 'Medium',
      price: 8200,
      proteins: [
        { label: 'Paneer', price: 0 },
        { label: 'Extra Paneer', price: 1400 }
      ],
      carbs: [
        { label: 'Rice', price: 0 },
        { label: 'Roti', price: 0 },
        { label: 'Paratha', price: 1000 }
      ],
      sides: [
        { label: 'Mixed Sabzi', price: 0 },
        { label: 'Bhindi', price: 1200 }
      ],
      portions: [
        { label: 'Light', price: 0 },
        { label: 'Regular', price: 0 },
        { label: 'Hearty', price: 1500 }
      ],
      extras: [
        { label: 'Raita', price: 600 },
        { label: 'Sweet', price: 900 },
        { label: 'Extra roti', price: 800 }
      ]
    },
    {
      id: 'tue-biryani',
      name: 'Vegetable Biryani',
      description: 'Fragrant rice layered with vegetables, herbs and warming spices.',
      dietary: ['Vegetarian'],
      allergens: ['Dairy'],
      spice: 'Medium',
      price: 8900,
      proteins: [
        { label: 'Vegetable Biryani', price: 0 },
        { label: 'Extra Paneer', price: 1600 }
      ],
      carbs: [
        { label: 'Rice', price: 0 },
        { label: 'Mixed Rice', price: 0 },
        { label: 'Paratha', price: 1000 }
      ],
      sides: [
        { label: 'Salad', price: 0 },
        { label: 'Raita', price: 600 }
      ],
      portions: [
        { label: 'Light', price: 0 },
        { label: 'Regular', price: 0 },
        { label: 'Hearty', price: 1600 }
      ],
      extras: [
        { label: 'Pickle', price: 300 },
        { label: 'Kheer', price: 900 },
        { label: 'Chutney', price: 500 }
      ]
    }
  ],
  Wednesday: [
    {
      id: 'wed-chana',
      name: 'Chana Masala',
      description: 'Tangy chickpea curry with onion, tomato and a bright finish.',
      dietary: ['Vegetarian'],
      allergens: ['Dairy'],
      spice: 'Medium',
      price: 8200,
      proteins: [
        { label: 'Chana', price: 0 },
        { label: 'Extra Chana', price: 1200 }
      ],
      carbs: [
        { label: 'Rice', price: 0 },
        { label: 'Roti', price: 0 },
        { label: 'Paratha', price: 1000 }
      ],
      sides: [
        { label: 'Aloo Gobi', price: 0 },
        { label: 'Bhindi', price: 1100 }
      ],
      portions: [
        { label: 'Light', price: 0 },
        { label: 'Regular', price: 0 },
        { label: 'Hearty', price: 1500 }
      ],
      extras: [
        { label: 'Salad', price: 700 },
        { label: 'Laddu', price: 1000 },
        { label: 'Pickle', price: 300 }
      ]
    },
    {
      id: 'wed-fish',
      name: 'Spiced Fish Curry',
      description: 'A home-style fish curry with tomatoes and a gentle South Asian spice base.',
      dietary: ['Halal'],
      allergens: ['Seafood'],
      spice: 'Spicy',
      price: 9100,
      proteins: [
        { label: 'Regular Fish', price: 0 },
        { label: 'Extra Fish', price: 1700 }
      ],
      carbs: [
        { label: 'Rice', price: 0 },
        { label: 'Roti', price: 0 },
        { label: 'Paratha', price: 1000 }
      ],
      sides: [
        { label: 'Sabzi', price: 0 },
        { label: 'Salad', price: 600 }
      ],
      portions: [
        { label: 'Light', price: 0 },
        { label: 'Regular', price: 0 },
        { label: 'Hearty', price: 1800 }
      ],
      extras: [
        { label: 'Raita', price: 600 },
        { label: 'Sweet', price: 900 },
        { label: 'Extra roti', price: 800 }
      ]
    }
  ],
  Thursday: [
    {
      id: 'thu-dal',
      name: 'Dal + Bhindi',
      description: 'Simple, nourishing and familiar: lentils with a dry bhindi preparation.',
      dietary: ['Vegetarian'],
      allergens: ['Dairy'],
      spice: 'Mild',
      price: 7600,
      proteins: [
        { label: 'Dal', price: 0 },
        { label: 'Extra Dal', price: 1000 }
      ],
      carbs: [
        { label: 'Rice', price: 0 },
        { label: 'Roti', price: 0 },
        { label: 'Paratha', price: 1000 }
      ],
      sides: [
        { label: 'Bhindi', price: 0 },
        { label: 'Mixed Sabzi', price: 1100 }
      ],
      portions: [
        { label: 'Light', price: 0 },
        { label: 'Regular', price: 0 },
        { label: 'Hearty', price: 1400 }
      ],
      extras: [
        { label: 'Pickle', price: 300 },
        { label: 'Chutney', price: 500 },
        { label: 'Sweet', price: 900 }
      ]
    },
    {
      id: 'thu-mix',
      name: 'Mixed Vegetable Curry',
      description: 'A seasonal vegetable curry with soft textures and balanced spice.',
      dietary: ['Vegetarian'],
      allergens: ['Dairy'],
      spice: 'Mild',
      price: 7900,
      proteins: [
        { label: 'Veg Curry', price: 0 },
        { label: 'Extra Veg', price: 1100 }
      ],
      carbs: [
        { label: 'Rice', price: 0 },
        { label: 'Roti', price: 0 },
        { label: 'Paratha', price: 1000 }
      ],
      sides: [
        { label: 'Salad', price: 0 },
        { label: 'Raita', price: 600 }
      ],
      portions: [
        { label: 'Light', price: 0 },
        { label: 'Regular', price: 0 },
        { label: 'Hearty', price: 1500 }
      ],
      extras: [
        { label: 'Extra roti', price: 800 },
        { label: 'Gulab Jamun', price: 900 },
        { label: 'Pickle', price: 300 }
      ]
    }
  ],
  Friday: [
    {
      id: 'fri-biryani',
      name: 'Vegetable Biryani',
      description: 'Comforting rice dish with vegetables, herbs and a flavorful finish.',
      dietary: ['Vegetarian'],
      allergens: ['Dairy'],
      spice: 'Medium',
      price: 8900,
      proteins: [
        { label: 'Vegetable Biryani', price: 0 },
        { label: 'Extra Paneer', price: 1600 }
      ],
      carbs: [
        { label: 'Rice', price: 0 },
        { label: 'Paratha', price: 1000 },
        { label: 'Extra Rice', price: 800 }
      ],
      sides: [
        { label: 'Salad', price: 0 },
        { label: 'Raita', price: 600 }
      ],
      portions: [
        { label: 'Light', price: 0 },
        { label: 'Regular', price: 0 },
        { label: 'Hearty', price: 1600 }
      ],
      extras: [
        { label: 'Sweet', price: 900 },
        { label: 'Pickle', price: 300 },
        { label: 'Extra sabzi', price: 1200 }
      ]
    },
    {
      id: 'fri-chicken',
      name: 'Halal Chicken Biryani',
      description: 'Traditional-style rice with chicken, herbs and house-made spice blend.',
      dietary: ['Halal', 'Non-Vegetarian'],
      allergens: ['Dairy'],
      spice: 'Medium',
      price: 9600,
      proteins: [
        { label: 'Regular Chicken', price: 0 },
        { label: 'Extra Chicken', price: 1800 }
      ],
      carbs: [
        { label: 'Rice', price: 0 },
        { label: 'Paratha', price: 1000 },
        { label: '2 Roti', price: 0 }
      ],
      sides: [
        { label: 'Salad', price: 0 },
        { label: 'Raita', price: 600 }
      ],
      portions: [
        { label: 'Light', price: 0 },
        { label: 'Regular', price: 0 },
        { label: 'Hearty', price: 1700 }
      ],
      extras: [
        { label: 'Extra roti', price: 800 },
        { label: 'Kheer', price: 900 },
        { label: 'Pickle', price: 300 }
      ]
    }
  ]
};

const PROFILE_QUESTIONS = [
  { key: 'homeFoods', title: 'What kind of food feels like home?', type: 'multi', options: ['Indian', 'Pakistani', 'Nepali', 'Bangladeshi', 'Sri Lankan', 'Other'] },
  { key: 'mealStyles', title: 'What kind of meals do you normally enjoy?', type: 'multi', options: ['Rice-based meals', 'Roti-based meals', 'Paratha', 'Dal & Sabzi', 'Curry & Rice', 'Thali-style meals', 'Biryani', 'Mixed'] },
  { key: 'diet', title: 'What is your dietary preference?', type: 'single', options: ['Vegetarian', 'Vegan', 'Halal', 'Halal + Non-Vegetarian', 'Other'] },
  { key: 'avoid', title: 'What foods do you avoid?', type: 'multi', options: ['Pork', 'Beef', 'Chicken', 'Fish/Seafood', 'Egg', 'Dairy', 'Nuts', 'Other'] },
  { key: 'allergies', title: 'Do you have any allergies?', type: 'multi', options: ['Peanuts', 'Tree nuts', 'Dairy', 'Egg', 'Gluten', 'Soy', 'Seafood', 'Other'] },
  { key: 'spice', title: 'What spice level do you like?', type: 'single', options: ['Mild', 'Medium', 'Spicy', 'Very Spicy'] },
  { key: 'proteins', title: 'What do you usually prefer for protein/main?', type: 'multi', options: ['Dal', 'Paneer', 'Chicken', 'Fish', 'Meat', 'Chickpeas/beans', 'Vegetable curry'] },
  { key: 'carbs', title: 'What carbs do you usually prefer?', type: 'multi', options: ['Rice', 'Roti', 'Paratha', 'Biryani', 'Mixed'] },
  { key: 'sides', title: 'What side dishes do you enjoy?', type: 'multi', options: ['Pickle', 'Salad', 'Raita', 'Chutney'] },
  { key: 'variety', title: 'How much variety do you like?', type: 'single', options: ['Mostly familiar meals', 'Some variety', 'Lots of variety'] },
  { key: 'loves', title: 'What foods do you love?', type: 'text', placeholder: 'Write a few dishes, flavors or comfort foods you enjoy.' },
  { key: 'dislikes', title: 'What foods do you dislike?', type: 'text', placeholder: 'Write any dishes, textures or ingredients you prefer to avoid.' },
  { key: 'missingFromHome', title: 'Is there something you really miss from home?', type: 'text', placeholder: 'Example: I miss my mother’s aloo paratha.' },
  { key: 'notes', title: 'Anything else we should know about your food?', type: 'text', placeholder: 'Useful notes about meal size, timing, favorite flavors and dietary habits.' }
];

const defaultState = {
  profile: {
    homeFoods: ['Indian', 'Nepali'],
    mealStyles: ['Rice-based meals', 'Dal & Sabzi', 'Curry & Rice'],
    diet: 'Halal + Non-Vegetarian',
    avoid: ['Pork', 'Egg'],
    allergies: ['Dairy'],
    spice: 'Medium',
    proteins: ['Chicken', 'Dal'],
    carbs: ['Rice', 'Roti'],
    sides: ['Salad', 'Pickle'],
    variety: 'Some variety',
    loves: 'Aloo Gobi, paneer curry, dal tadka',
    dislikes: 'Very oily dishes',
    missingFromHome: 'I miss my mother’s aloo paratha.',
    notes: 'Need easy delivery and lunch portions that feel generous.'
  },
  cart: [],
  orders: [
    { id: 'ORD-101', type: 'Weekly', items: ['Monday • Halal Chicken Curry', 'Tuesday • Dal Tadka'], total: 18500, status: 'Upcoming' },
    { id: 'ORD-102', type: 'One-time', items: ['Wednesday • Paneer Curry'], total: 9000, status: 'Delivered' },
    { id: 'ORD-103', type: 'Monthly', items: ['Friday • Vegetable Biryani'], total: 22000, status: 'Upcoming' }
  ],
  suggestions: [
    { id: 1, name: 'Aloo Paratha', note: 'I miss the comforting taste of warm paratha in the mornings.', votes: 18 },
    { id: 2, name: 'Kheer', note: 'Something sweet and familiar for the weekend feels like home.', votes: 13 },
    { id: 3, name: 'Fish Curry', note: 'A regional favorite from home that feels comforting and fresh.', votes: 9 }
  ],
  feedback: [
    { rating: 5, meal: 'Chicken Curry + Rice', note: 'Portion was great and the spice was just right.' },
    { rating: 4, meal: 'Paneer Curry + Roti', note: 'Loved the familiar taste and good packaging.' },
    { rating: 5, meal: 'Vegetable Biryani', note: 'Comfort meal, warm and easy to finish.' }
  ],
  selectedDay: 'Monday',
  profileStep: 0,
  admin: { loggedIn: false, tab: 'menu' },
  deliveryZones: ['Kyungsung University area', 'Seomyeon residential area', 'Dongnae dorms', 'Minam area', 'Suyeong district'],
  pickupHubs: [
    { name: 'Kyungsung Hub', address: '23-4 Seomyeon-ro, Busan', time: '12:00 - 21:00' },
    { name: 'Dorm Pickup Point', address: 'B Building, Student Dormitory', time: '18:00 - 20:30' },
    { name: 'Dongnae Corner', address: '12 Gwangalli-gil, Busan', time: '17:00 - 19:30' }
  ]
};

let state = loadState();

const els = {};

document.addEventListener('DOMContentLoaded', () => {
  bindElements();
  bindEvents();
  render();
});

function bindElements() {
  els.weeklyMenuGrid = document.getElementById('weeklyMenuGrid');
  els.weeklyBadgeRow = document.getElementById('weeklyBadgeRow');
  els.profileWizard = document.getElementById('profileWizard');
  els.wizardStepLabel = document.getElementById('wizardStepLabel');
  els.wizardProgress = document.getElementById('wizardProgress');
  els.daySelect = document.getElementById('daySelect');
  els.orderBuilderOptions = document.getElementById('orderBuilderOptions');
  els.cartItems = document.getElementById('cartItems');
  els.cartCount = document.getElementById('cartCount');
  els.cartTotal = document.getElementById('cartTotal');
  els.checkoutBtn = document.getElementById('checkoutBtn');
  els.checkoutModal = document.getElementById('checkoutModal');
  els.closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
  els.checkoutForm = document.getElementById('checkoutForm');
  els.checkoutTotal = document.getElementById('checkoutTotal');
  els.zoneSelect = document.getElementById('zoneSelect');
  els.deliveryModeSelect = document.getElementById('deliveryModeSelect');
  els.deliverySlotSelect = document.getElementById('deliverySlotSelect');
  els.myAaharaContent = document.getElementById('myAaharaContent');
  els.suggestionsList = document.getElementById('suggestionsList');
  els.suggestionForm = document.getElementById('suggestionForm');
  els.adminModal = document.getElementById('adminModal');
  els.adminLoginView = document.getElementById('adminLoginView');
  els.adminDashboardView = document.getElementById('adminDashboardView');
  els.adminTabContent = document.getElementById('adminTabContent');
  els.openAdminBtn = document.getElementById('openAdminBtn');
  els.closeAdminBtn = document.getElementById('closeAdminBtn');
  els.adminPasswordInput = document.getElementById('adminPasswordInput');
  els.adminLoginBtn = document.getElementById('adminLoginBtn');
  els.clearSuggestionsBtn = document.getElementById('clearSuggestionsBtn');
  els.cartToggleBtn = document.getElementById('cartToggleBtn');
}

function bindEvents() {
  els.daySelect.addEventListener('change', (e) => {
    state.selectedDay = e.target.value;
    renderOrderBuilder();
    saveState();
  });

  els.checkoutBtn.addEventListener('click', openCheckout);
  els.closeCheckoutBtn.addEventListener('click', closeCheckout);
  els.checkoutModal.addEventListener('click', (e) => {
    if (e.target === els.checkoutModal) closeCheckout();
  });

  els.checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const mode = document.getElementById('deliveryModeSelect').value;
    const slot = document.getElementById('deliverySlotSelect').value;
    const zone = document.getElementById('zoneSelect').value;
    const name = document.getElementById('checkoutName').value || 'Aahara Customer';

    const newOrder = {
      id: `ORD-${Date.now()}`,
      type: document.getElementById('boOrderType')?.value || 'One-time',
      items: state.cart.map((item) => `${item.day} • ${item.mealName}`),
      total: getCartTotal(),
      status: 'Confirmed',
      delivery: mode,
      slot,
      zone,
      customer: name,
      notes: document.getElementById('checkoutNotes').value
    };

    state.orders.unshift(newOrder);
    state.cart = [];
    saveState();
    render();
    closeCheckout();
    showToast(`Order placed successfully • ${newOrder.id}`);
  });

  els.suggestionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('suggestionName').value.trim();
    const note = document.getElementById('suggestionNote').value.trim();
    if (!name) return;
    state.suggestions.unshift({ id: Date.now(), name, note, votes: 1 });
    document.getElementById('suggestionName').value = '';
    document.getElementById('suggestionNote').value = '';
    saveState();
    renderSuggestions();
  });

  els.clearSuggestionsBtn.addEventListener('click', () => {
    state.suggestions = [
      { id: 1, name: 'Aloo Paratha', note: 'I miss the comforting taste of warm paratha in the mornings.', votes: 18 },
      { id: 2, name: 'Kheer', note: 'Something sweet and familiar for the weekend feels like home.', votes: 13 },
      { id: 3, name: 'Fish Curry', note: 'A regional favorite from home that feels comforting and fresh.', votes: 9 }
    ];
    saveState();
    renderSuggestions();
  });

  els.openAdminBtn.addEventListener('click', openAdmin);
  els.closeAdminBtn.addEventListener('click', closeAdmin);
  els.adminModal.addEventListener('click', (e) => {
    if (e.target === els.adminModal) closeAdmin();
  });

  els.adminPasswordInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') loginAdmin();
  });

  els.adminLoginBtn.addEventListener('click', loginAdmin);

  document.querySelectorAll('.admin-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.admin.tab = btn.dataset.tab;
      renderAdminDashboard();
    });
  });

  els.cartToggleBtn.addEventListener('click', () => {
    document.getElementById('order').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.getElementById('deliveryModeSelect')?.addEventListener('change', updateZoneOptions);
}

function render() {
  renderWeeklyMenu();
  renderProfileWizard();
  renderOrderBuilder();
  renderCart();
  renderMyAahara();
  renderSuggestions();
  renderAdminDashboard();
  updateZoneOptions();
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultState);
    return { ...structuredClone(defaultState), ...JSON.parse(raw), admin: { ...defaultState.admin, ...(JSON.parse(raw).admin || {}) } };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderWeeklyMenu() {
  els.weeklyMenuGrid.innerHTML = '';
  els.weeklyBadgeRow.innerHTML = '';

  const badges = [
    `${state.profile.diet || 'Mixed'} preference`,
    `${state.profile.spice || 'Medium'} spice`,
    `${state.profile.allergies?.length || 0} allergy notes`
  ];

  badges.forEach((label) => {
    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = label;
    els.weeklyBadgeRow.appendChild(badge);
  });

  const recommendedMap = getRecommendedMeals();

  WEEK_DAYS.forEach((day) => {
    const card = document.createElement('article');
    card.className = 'weekly-card';
    const items = BASE_MENU[day];
    const first = items[0];
    const recommended = recommendedMap.get(day) || first;

    card.innerHTML = `
      <div class="day-label">
        <strong>${day}</strong>
        <span class="tag">${items.length} dishes</span>
      </div>
      <div class="tag-stack">
        ${(first.dietary || []).slice(0, 2).map((tag) => `<span class="tag">${tag}</span>`).join('')}
        <span class="tag">${recommended.name}</span>
      </div>
      <h4>${first.name}</h4>
      <div class="meal-meta">${first.description}</div>
      <div class="meal-meta">Spice: ${first.spice} • From ₩${first.price.toLocaleString()}</div>
      <div class="recommend-pill">Recommended for you</div>
      <div class="card-actions">
        <button type="button" class="primary" data-select-day="${day}">Select</button>
        <button type="button" data-view-day="${day}">View</button>
      </div>
    `;

    card.querySelector('[data-select-day]').addEventListener('click', () => {
      state.selectedDay = day;
      document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
      renderOrderBuilder();
      saveState();
    });

    card.querySelector('[data-view-day]').addEventListener('click', () => {
      state.selectedDay = day;
      renderOrderBuilder();
      document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
    });

    els.weeklyMenuGrid.appendChild(card);
  });
}

function getRecommendedMeals() {
  const map = new Map();
  WEEK_DAYS.forEach((day) => {
    const items = BASE_MENU[day];
    const filtered = items.filter((meal) => isMealSuitableForProfile(meal));
    map.set(day, filtered[0] || items[0]);
  });
  return map;
}

function isMealSuitableForProfile(meal) {
  if (!state.profile) return true;
  const profile = state.profile;
  const allergySet = new Set((profile.allergies || []).map((a) => a.toLowerCase()));

  if ((meal.allergens || []).some((item) => allergySet.has(item.toLowerCase()))) return false;

  if (profile.diet === 'Vegetarian' || profile.diet === 'Vegan') {
    if (meal.dietary.includes('Non-Vegetarian') && !meal.dietary.includes('Vegetarian')) return false;
  }

  if (profile.diet === 'Halal + Non-Vegetarian') {
    if (meal.dietary.includes('Halal') && meal.dietary.includes('Non-Vegetarian')) return true;
  }

  if (profile.avoid) {
    const avoid = profile.avoid.map((x) => x.toLowerCase());
    if (meal.name.toLowerCase().includes('chicken') && avoid.includes('chicken')) return false;
    if (meal.name.toLowerCase().includes('fish') && avoid.includes('fish/seafood')) return false;
    if (meal.name.toLowerCase().includes('paneer') && avoid.includes('dairy')) return false;
  }

  if (profile.spice === 'Mild' && meal.spice === 'Very Spicy') return false;
  if (profile.spice === 'Spicy' && meal.spice === 'Very Spicy') return false;

  return true;
}

function renderProfileWizard() {
  const currentStep = state.profileStep;
  const question = PROFILE_QUESTIONS[currentStep];
  const stepCount = PROFILE_QUESTIONS.length;
  const progress = ((currentStep + 1) / stepCount) * 100;

  els.wizardStepLabel.textContent = `Step ${currentStep + 1} of ${stepCount}`;
  els.wizardProgress.style.width = `${progress}%`;

  if (!question) return;

  let markup = `<div class="wizard-question"><h4>${question.title}</h4>`;

  if (question.type === 'multi') {
    const selected = new Set(state.profile[question.key] || []);
    markup += `<div class="choice-grid">${question.options.map((option) => `
      <button type="button" class="choice-btn ${selected.has(option) ? 'selected' : ''}" data-profile-key="${question.key}" data-profile-value="${option}">${option}</button>
    `).join('')}</div>`;
  } else if (question.type === 'single') {
    const selected = state.profile[question.key] || '';
    markup += `<div class="choice-grid">${question.options.map((option) => `
      <button type="button" class="choice-btn ${selected === option ? 'selected' : ''}" data-profile-key="${question.key}" data-profile-value="${option}">${option}</button>
    `).join('')}</div>`;
  } else {
    markup += `<textarea class="text-answer" data-profile-key="${question.key}" placeholder="${question.placeholder}">${state.profile[question.key] || ''}</textarea>`;
  }

  markup += `</div>`;

  markup += `
    <div class="wizard-actions">
      <button type="button" class="btn btn-ghost" ${currentStep === 0 ? 'disabled' : ''} data-prev-step>Previous</button>
      ${currentStep === stepCount - 1 ? '<button type="button" class="btn btn-primary" data-finish-profile>Save profile</button>' : '<button type="button" class="btn btn-primary" data-next-step>Next</button>'}
    </div>
  `;

  els.profileWizard.innerHTML = markup;

  document.querySelectorAll('[data-profile-key]').forEach((button) => {
    const key = button.dataset.profileKey;
    const value = button.dataset.profileValue;
    if (button.classList.contains('choice-btn')) {
      button.addEventListener('click', () => {
        if (question.type === 'single') {
          state.profile[key] = value;
        } else {
          const current = state.profile[key] || [];
          const exists = current.includes(value);
          state.profile[key] = exists ? current.filter((item) => item !== value) : [...current, value];
        }
        saveState();
        renderProfileWizard();
      });
    }
  });

  document.querySelectorAll('[data-profile-key].text-answer').forEach((textarea) => {
    textarea.addEventListener('input', (e) => {
      const key = e.target.dataset.profileKey;
      state.profile[key] = e.target.value;
      saveState();
    });
  });

  const nextBtn = document.querySelector('[data-next-step]');
  if (nextBtn) nextBtn.addEventListener('click', () => {
    state.profileStep = Math.min(state.profileStep + 1, PROFILE_QUESTIONS.length - 1);
    saveState();
    renderProfileWizard();
  });

  const prevBtn = document.querySelector('[data-prev-step]');
  if (prevBtn) prevBtn.addEventListener('click', () => {
    state.profileStep = Math.max(state.profileStep - 1, 0);
    saveState();
    renderProfileWizard();
  });

  const finishBtn = document.querySelector('[data-finish-profile]');
  if (finishBtn) finishBtn.addEventListener('click', () => {
    state.profileStep = 0;
    renderProfileWizard();
    showToast('Food profile saved. Aahara will now match meals to your preferences.');
    saveState();
    renderWeeklyMenu();
    renderMyAahara();
  });
}

function renderOrderBuilder() {
  const day = state.selectedDay;
  const dayItems = BASE_MENU[day] || BASE_MENU.Monday;
  els.daySelect.innerHTML = WEEK_DAYS.map((item) => `<option value="${item}" ${item === day ? 'selected' : ''}>${item}</option>`).join('');

  const selectedMeal = dayItems[0];
  const recommended = getRecommendedMeals().get(day) || selectedMeal;
  const dayMeal = recommended ?? selectedMeal;

  let markup = `
    <div class="order-builder-content">
      <div class="builder-card">
        <h4>${dayMeal.name}</h4>
        <div class="meal-meta">${dayMeal.description}</div>
        <div class="price-rail">
          <span>Starting from</span>
          <strong>₩${dayMeal.price.toLocaleString()}</strong>
        </div>
      </div>
  `;

  const groups = [
    { key: 'proteins', label: 'Protein', options: dayMeal.proteins },
    { key: 'carbs', label: 'Carb', options: dayMeal.carbs },
    { key: 'sides', label: 'Side / Sabzi', options: dayMeal.sides },
    { key: 'portions', label: 'Portion', options: dayMeal.portions },
    { key: 'extras', label: 'Extras', options: dayMeal.extras }
  ];

  groups.forEach((group) => {
    markup += `
      <div class="builder-card">
        <h4>${group.label}</h4>
        <div class="option-grid">
          ${group.options.map((option) => `
            <button type="button" class="option-choice" data-option-group="${group.key}" data-option-label="${option.label}" data-option-price="${option.price}">
              <div><strong>${option.label}</strong></div>
              <div class="meal-meta">${option.price ? `+₩${option.price.toLocaleString()}` : 'Included'}</div>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  });

  markup += `
    <div class="builder-card">
      <h4>Summary</h4>
      <div class="price-rail">
        <span>Estimated total</span>
        <strong id="builderTotal">₩${dayMeal.price.toLocaleString()}</strong>
      </div>
      <button type="button" class="btn btn-primary full-width" id="addToTiffinBtn" style="margin-top: 14px;">Add to tiffin cart</button>
    </div>
  </div>
  `;

  els.orderBuilderOptions.innerHTML = markup;

  const optionButtons = document.querySelectorAll('[data-option-group]');
  const selectedOptions = {};

  optionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const group = btn.dataset.optionGroup;
      selectedOptions[group] = { label: btn.dataset.optionLabel, price: Number(btn.dataset.optionPrice || 0) };
      document.querySelectorAll(`[data-option-group="${group}"]`).forEach((node) => node.classList.remove('selected'));
      btn.classList.add('selected');
      updateBuilderTotal(dayMeal, selectedOptions);
    });
  });

  const addBtn = document.getElementById('addToTiffinBtn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const choices = Object.values(selectedOptions).map((choice) => choice.label).filter(Boolean);
      const basePrice = dayMeal.price + Object.values(selectedOptions).reduce((sum, option) => sum + Number(option.price || 0), 0);
      const cartItem = {
        id: `${dayMeal.id}-${Date.now()}`,
        day,
        mealName: dayMeal.name,
        choices: choices.length ? choices.join(' • ') : 'Standard meal',
        price: basePrice,
        createdAt: new Date().toISOString()
      };
      state.cart.push(cartItem);
      saveState();
      renderCart();
      showToast(`${dayMeal.name} added to your tiffin cart.`);
    });
  }

  updateBuilderTotal(dayMeal, selectedOptions);
}

function updateBuilderTotal(meal, selectedOptions) {
  const totalEl = document.getElementById('builderTotal');
  if (!totalEl) return;
  const total = meal.price + Object.values(selectedOptions).reduce((sum, option) => sum + Number(option.price || 0), 0);
  totalEl.textContent = `₩${total.toLocaleString()}`;
}

function renderCart() {
  els.cartItems.innerHTML = '';
  if (!state.cart.length) {
    els.cartItems.innerHTML = '<div class="history-item">Your cart is empty. Select a tiffin from the builder.</div>';
  } else {
    state.cart.forEach((item) => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <div class="cart-item-header">
          <div>
            <strong>${item.mealName}</strong>
            <div class="cart-item-meta">${item.day}</div>
          </div>
          <button class="remove-item-btn" type="button" data-remove-item="${item.id}">×</button>
        </div>
        <div class="cart-item-meta">${item.choices}</div>
        <div class="cart-item-header">
          <span>Price</span>
          <strong>₩${item.price.toLocaleString()}</strong>
        </div>
      `;
      div.querySelector('[data-remove-item]').addEventListener('click', () => {
        state.cart = state.cart.filter((entry) => entry.id !== item.id);
        saveState();
        renderCart();
      });
      els.cartItems.appendChild(div);
    });
  }

  const total = getCartTotal();
  els.cartCount.textContent = state.cart.length;
  els.cartTotal.textContent = `₩${total.toLocaleString()}`;
  const checkoutTotal = document.getElementById('checkoutTotal');
  if (checkoutTotal) checkoutTotal.textContent = `₩${total.toLocaleString()}`;
}

function getCartTotal() {
  return state.cart.reduce((sum, item) => sum + Number(item.price || 0), 0);
}

function openCheckout() {
  if (!state.cart.length) {
    showToast('Add at least one tiffin before checkout.');
    return;
  }
  updateZoneOptions();
  document.getElementById('checkoutTotal').textContent = `₩${getCartTotal().toLocaleString()}`;
  els.checkoutModal.classList.remove('hidden');
}

function closeCheckout() {
  els.checkoutModal.classList.add('hidden');
}

function updateZoneOptions() {
  const mode = document.getElementById('deliveryModeSelect').value;
  const target = document.getElementById('zoneSelect');
  const choices = mode === 'Pickup' ? state.pickupHubs.map((hub) => `${hub.name} • ${hub.address}`) : state.deliveryZones;
  target.innerHTML = choices.map((item) => `<option value="${item}">${item}</option>`).join('');
}

function renderMyAahara() {
  const profile = state.profile;
  const recommended = getRecommendedMeals();

  let schedule = WEEK_DAYS.map((day) => {
    const meal = recommended.get(day) || BASE_MENU[day][0];
    return `<div class="schedule-row">
      <strong>${day}</strong>
      <div>
        <div>${meal.name}</div>
        <div class="meal-meta">${meal.spice} • ₩${meal.price.toLocaleString()}</div>
      </div>
      <div class="schedule-actions">
        <button type="button">Keep</button>
        <button type="button">Swap</button>
        <button type="button">Skip</button>
        <button type="button">Pause</button>
      </div>
    </div>`;
  }).join('');

  els.myAaharaContent.innerHTML = `
    <div class="dashboard-layout">
      <div class="dashboard-card">
        <h4>Food profile</h4>
        <div class="profile-summary">
          <div class="summary-chip"><span>Diet</span>${profile.diet}</div>
          <div class="summary-chip"><span>Spice</span>${profile.spice}</div>
          <div class="summary-chip"><span>Allergies</span>${(profile.allergies || []).join(', ') || 'None listed'}</div>
          <div class="summary-chip"><span>Variety</span>${profile.variety}</div>
        </div>
      </div>
      <div class="dashboard-card">
        <h4>Weekly schedule</h4>
        <div class="meal-schedule">${schedule}</div>
      </div>
      <div class="dashboard-card">
        <h4>Order history</h4>
        <div class="history-list">
          ${state.orders.slice(0, 4).map((order) => `<div class="history-item"><strong>${order.id}</strong><div>${order.items.join(', ')}</div><div class="meal-meta">${order.type} • ${order.status} • ₩${order.total.toLocaleString()}</div></div>`).join('')}
        </div>
      </div>
      <div class="dashboard-card">
        <h4>Feedback history</h4>
        <div class="feedback-list">
          ${state.feedback.map((item) => `<div class="feedback-item"><strong>${item.meal}</strong><div>${'★'.repeat(item.rating)}${'☆'.repeat(5 - item.rating)}</div><div class="meal-meta">${item.note}</div></div>`).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderSuggestions() {
  const list = state.suggestions || [];
  els.suggestionsList.innerHTML = list.map((item) => `
    <div class="suggestion-item">
      <div>
        <strong>${item.name}</strong>
        <div class="meal-meta">${item.note || 'Requested by a customer'}</div>
      </div>
      <button type="button" class="vote-box" data-vote-id="${item.id}">▲ ${item.votes}</button>
    </div>
  `).join('');

  document.querySelectorAll('[data-vote-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.voteId);
      state.suggestions = state.suggestions.map((item) => item.id === id ? { ...item, votes: item.votes + 1 } : item);
      saveState();
      renderSuggestions();
    });
  });
}

function renderAdminDashboard() {
  const adminTab = state.admin.tab || 'menu';
  document.querySelectorAll('.admin-tab').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.tab === adminTab);
  });

  if (!state.admin.loggedIn) {
    els.adminLoginView.classList.remove('hidden');
    els.adminDashboardView.classList.add('hidden');
    return;
  }

  els.adminLoginView.classList.add('hidden');
  els.adminDashboardView.classList.remove('hidden');

  if (adminTab === 'menu') {
    els.adminTabContent.innerHTML = `
      <div class="admin-panel-grid">
        <div class="admin-card">
          <h4>Weekly menu</h4>
          <div class="table-list">
            ${WEEK_DAYS.map((day) => `
              <div class="table-row"><span>${day}</span><span>${BASE_MENU[day].map((meal) => meal.name).join(', ')}</span></div>
            `).join('')}
          </div>
        </div>
        <div class="admin-card">
          <h4>Pricing controls</h4>
          <label>Default meal price adjustment<br><input type="number" value="0" /></label>
          <label>Set daily menu availability<br><select><option>Open</option><option>Limited</option><option>Paused</option></select></label>
        </div>
      </div>
    `;
  }

  if (adminTab === 'demand') {
    const demandCounts = summarizeDemand();
    els.adminTabContent.innerHTML = `
      <div class="admin-panel-grid">
        <div class="admin-card">
          <h4>This week's customer demand</h4>
          <div class="table-list">
            ${Object.entries(demandCounts).map(([key, value]) => `<div class="table-row"><span>${key}</span><strong>${value}</strong></div>`).join('')}
          </div>
        </div>
        <div class="admin-card">
          <h4>Popular menu choices</h4>
          <div class="table-list">
            <div class="table-row"><span>Rice</span><strong>35</strong></div>
            <div class="table-row"><span>Roti</span><strong>28</strong></div>
            <div class="table-row"><span>Dal</span><strong>40</strong></div>
            <div class="table-row"><span>Paneer</span><strong>25</strong></div>
            <div class="table-row"><span>Chicken</span><strong>18</strong></div>
          </div>
        </div>
      </div>
    `;
  }

  if (adminTab === 'zones') {
    els.adminTabContent.innerHTML = `
      <div class="admin-panel-grid">
        <div class="admin-card">
          <h4>Delivery zones</h4>
          <div class="table-list">${state.deliveryZones.map((zone) => `<div class="table-row"><span>${zone}</span><span>Open</span></div>`).join('')}</div>
        </div>
        <div class="admin-card">
          <h4>Pickup hubs</h4>
          <div class="table-list">${state.pickupHubs.map((hub) => `<div class="table-row"><span>${hub.name}</span><span>${hub.time}</span></div>`).join('')}</div>
        </div>
      </div>
    `;
  }

  if (adminTab === 'suggestions') {
    els.adminTabContent.innerHTML = `
      <div class="admin-card">
        <h4>Recipe suggestions</h4>
        <div class="table-list">${state.suggestions.map((item) => `<div class="table-row"><span>${item.name}</span><strong>${item.votes} votes</strong></div>`).join('')}</div>
      </div>
    `;
  }

  if (adminTab === 'feedback') {
    els.adminTabContent.innerHTML = `
      <div class="admin-card">
        <h4>Recent feedback</h4>
        <div class="table-list">${state.feedback.map((item) => `<div class="table-row"><span>${item.meal}</span><strong>${'★'.repeat(item.rating)}</strong></div>`).join('')}</div>
      </div>
    `;
  }
}

function summarizeDemand() {
  return {
    Vegetarian: 22,
    Vegan: 8,
    'Halal non-veg': 20,
    Rice: 35,
    Roti: 28,
    Paratha: 15,
    Dal: 40,
    Paneer: 25,
    Chicken: 18
  };
}

function openAdmin() {
  els.adminModal.classList.remove('hidden');
  els.adminPasswordInput.value = '';
  if (state.admin.loggedIn) {
    renderAdminDashboard();
  }
}

function closeAdmin() {
  els.adminModal.classList.add('hidden');
}

function loginAdmin() {
  const entered = els.adminPasswordInput.value.trim();
  if (entered === 'aahara2026') {
    state.admin.loggedIn = true;
    saveState();
    renderAdminDashboard();
    return;
  }
  showToast('Incorrect password. Try the demo password: aahara2026');
}

function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.position = 'fixed';
  toast.style.bottom = '24px';
  toast.style.right = '24px';
  toast.style.background = '#201613';
  toast.style.color = 'white';
  toast.style.padding = '12px 16px';
  toast.style.borderRadius = '12px';
  toast.style.zIndex = '200';
  toast.style.boxShadow = '0 12px 20px rgba(0,0,0,0.15)';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2200);
}

window.addEventListener('DOMContentLoaded', () => {
  updateZoneOptions();
});

