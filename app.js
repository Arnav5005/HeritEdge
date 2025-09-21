// Application Data
const monasteryData = {
    "monasteries": [
        {
            "id": "rumtek",
            "name": "Rumtek Monastery",
            "alternativeName": "Dharma Chakra Centre",
            "shortDescription": "The largest monastery in Sikkim, seat of the Karmapa lineage",
            "fullDescription": "Rumtek Monastery, also known as the Dharma Chakra Centre, is the largest monastery in Sikkim and serves as the main seat of the Karma Kagyu lineage of Tibetan Buddhism. Originally built in the 16th century by the 9th Karmapa, it was rebuilt in the 1960s by the 16th Karmapa as his seat in exile after fleeing Tibet. The monastery houses some of the world's rarest Buddhist religious art objects and is a renowned center for Buddhist teachings.",
            "location": {
                "latitude": 27.325827,
                "longitude": 88.536370,
                "address": "Rumtek, East Sikkim, 24 km from Gangtok",
                "district": "East Sikkim",
                "altitude": "1500 meters"
            },
            "history": {
                "established": "1734 (original), 1966 (current structure)",
                "founder": "9th Karmapa Wangchuk Dorje, rebuilt by 16th Karmapa",
                "historicalSignificance": "Main seat of Karma Kagyu lineage in India, houses relics from Tibet"
            },
            "sect": "Karma Kagyu",
            "category": ["historic", "architecture"],
            "features": [
                "Golden stupa containing 16th Karmapa's relics",
                "Karma Shri Nalanda Institute for Higher Buddhist Studies",
                "Traditional Tibetan architecture",
                "108-volume canon of Buddha's teachings"
            ],
            "festivals": ["Losar", "Saga Dawa", "Chaam Dance"],
            "visitingHours": "10:00 AM - 2:00 PM",
            "images": [
                "https://pplx-res.cloudinary.com/image/upload/v1755032011/pplx_project_search_images/180384246c00f12346b2567f3e5d23cf9eba4dc5.png",
                "https://pplx-res.cloudinary.com/image/upload/v1758380402/pplx_project_search_images/6ba3ba59ba4f21600862b53ba798f55111a2d8d4.png",
                "https://pplx-res.cloudinary.com/image/upload/v1756556191/pplx_project_search_images/0494326bd523bc67b9b1e6a30c2da5a6922a9237.png"
            ]
        },
        {
            "id": "pemayangtse",
            "name": "Pemayangtse Monastery",
            "alternativeName": "Perfect Sublime Lotus",
            "shortDescription": "One of the oldest and premier monasteries of Sikkim",
            "fullDescription": "Pemayangtse Monastery, meaning 'Perfect Sublime Lotus', is one of the oldest and most important monasteries in Sikkim. Founded by Lama Lhatsun Chempo in 1647, it belongs to the Nyingma order and controls all other Nyingma monasteries in Sikkim. The monastery was built for 'ta-tshang' or 'monks of pure lineage', and only its monks are entitled to this title. The head lama traditionally had the privilege of anointing the Chogyals of Sikkim.",
            "location": {
                "latitude": 27.30444,
                "longitude": 88.25278,
                "address": "Pemayangtse, West Sikkim, 110 km from Gangtok",
                "district": "West Sikkim",
                "altitude": "2085 meters"
            },
            "history": {
                "established": "1647",
                "founder": "Lama Lhatsun Chempo",
                "historicalSignificance": "Premier Nyingma monastery, traditional seat of royal consecration"
            },
            "sect": "Nyingma",
            "category": ["historic", "festival"],
            "features": [
                "Three-storied traditional architecture",
                "Wooden masterpiece Sangdogpalri",
                "Sacred statues of Padmasambhava",
                "108 monks residence"
            ],
            "festivals": ["Guru Drakmar Chham", "Bumchu", "Chaams"],
            "visitingHours": "9:00 AM - 5:00 PM",
            "images": [
                "https://pplx-res.cloudinary.com/image/upload/v1756886617/pplx_project_search_images/7ca0e8564234c275c0aac9d4efe92e7c938c5a59.png"
            ]
        },
        {
            "id": "tashiding",
            "name": "Tashiding Monastery",
            "alternativeName": "The Devoted Central Glory",
            "shortDescription": "The most sacred monastery in Sikkim, heart of Buddhist pilgrimage",
            "fullDescription": "Tashiding Monastery, meaning 'The Devoted Central Glory', is considered the most sacred and holiest monastery in Sikkim. Founded in 1641 by Ngadak Sempa Chempo, it sits atop a hill between the Rathong and Rangeet rivers. According to legend, Guru Padmasambhava blessed this site, and it's believed that a mere glimpse of the monastery can cleanse one's soul. The monastery houses the sacred vase of Guru Padmasambhava.",
            "location": {
                "latitude": 27.30833,
                "longitude": 88.29806,
                "address": "Tashiding, West Sikkim, 40 km from Gyalshing",
                "district": "West Sikkim",
                "altitude": "1800 meters"
            },
            "history": {
                "established": "1641",
                "founder": "Ngadak Sempa Chempo Phunshok Rigzing",
                "historicalSignificance": "Most sacred monastery, blessed by Guru Padmasambhava"
            },
            "sect": "Nyingma",
            "category": ["historic", "festival"],
            "features": [
                "Sacred water vessel (Bumchu)",
                "Hilltop location between two rivers",
                "Colorful prayer flags",
                "Thongwa-rang-dol chortens"
            ],
            "festivals": ["Bumchu Festival", "Sacred Water Ceremony"],
            "visitingHours": "8:00 AM - 6:00 PM",
            "images": [
                "https://pplx-res.cloudinary.com/image/upload/v1758380399/pplx_project_search_images/0f19fd4f5b4b00a571a61a07cab0a0475132cb09.png"
            ]
        },
        {
            "id": "enchey",
            "name": "Enchey Monastery",
            "alternativeName": "Solitary Temple",
            "shortDescription": "200-year-old monastery in Gangtok with unique architecture",
            "fullDescription": "Enchey Monastery, meaning 'solitary temple', is a 200-year-old monastery located just 3 km from Gangtok. Established in 1840, it belongs to the Nyingma sect and is dedicated to Loki Sharia, Buddha, and Guru Padmasambhava. The monastery is famous for its unique prayer hall architecture with a metal roof and hosts the spectacular Chaam dance festival that attracts numerous tourists.",
            "location": {
                "latitude": 27.3389,
                "longitude": 88.6065,
                "address": "Enchey Gaon, Gangtok, East Sikkim",
                "district": "East Sikkim",
                "altitude": "1800 meters"
            },
            "history": {
                "established": "1840",
                "founder": "Lama Druptob Karpo",
                "historicalSignificance": "Important Gangtok monastery, center for Chaam dance"
            },
            "sect": "Nyingma",
            "category": ["festival", "architecture"],
            "features": [
                "90 resident monks",
                "Unique metal roof design",
                "Chaam dance performances",
                "Mountain valley views"
            ],
            "festivals": ["Chaam Dance", "Detor Cham"],
            "visitingHours": "10:00 AM - 2:00 PM",
            "images": [
                "https://pplx-res.cloudinary.com/image/upload/v1757670078/pplx_project_search_images/1e85db1f99be5c715dbffadb02f0182b95de1c1c.png"
            ]
        },
        {
            "id": "dubdi",
            "name": "Dubdi Monastery",
            "alternativeName": "The Hermit's Cell",
            "shortDescription": "The oldest monastery in Sikkim, built in 1647",
            "fullDescription": "Dubdi Monastery, meaning 'the Hermit's cell' or 'the retreat', is the oldest monastery in Sikkim. Founded in 1647 by the first ruler of Sikkim, Chogyal Phuntshog Namgyal, it was built to venerate Gyalwa Lhatsun Chhenpo. Located on a hilltop near Yuksom, the monastery belongs to the Nyingma sect and houses rare manuscripts and ritual texts. The two-story stone architecture features a distinctive bell-shaped structure called Gyaltshen.",
            "location": {
                "latitude": 27.3667,
                "longitude": 88.2167,
                "address": "Near Yuksom, West Sikkim",
                "district": "West Sikkim",
                "altitude": "2100 meters"
            },
            "history": {
                "established": "1647",
                "founder": "Chogyal Phuntshog Namgyal",
                "historicalSignificance": "Oldest monastery in Sikkim, first Buddhist establishment"
            },
            "sect": "Nyingma",
            "category": ["historic"],
            "features": [
                "Rare manuscript collection",
                "Bell-shaped Gyaltshen structure",
                "Dense alpine forest location",
                "Statues of three founding lamas"
            ],
            "festivals": ["Traditional Nyingma ceremonies"],
            "visitingHours": "9:00 AM - 5:00 PM",
            "images": [
                "https://pplx-res.cloudinary.com/image/upload/v1758380399/pplx_project_search_images/0f19fd4f5b4b00a571a61a07cab0a0475132cb09.png"
            ]
        },
        {
            "id": "phodong",
            "name": "Phodong Monastery",
            "alternativeName": "Phodong Gompa",
            "shortDescription": "Historic monastery with stunning valley views at 4500 feet",
            "fullDescription": "Phodong Monastery is located at an altitude of 4500 feet and offers perfect views of deep valleys and mountains. Built in the 18th century by ruler Chogyal Gyurmed Namgyal, it belongs to the Karma Kagyu sect of Tibetan Buddhism. The monastery features astonishing paintings and murals, and after being damaged in earthquakes, it was rebuilt by Lamas in 1977 in an even grander form.",
            "location": {
                "latitude": 27.4167,
                "longitude": 88.5833,
                "address": "Phodong, North Sikkim",
                "district": "North Sikkim",
                "altitude": "1372 meters"
            },
            "history": {
                "established": "18th century, rebuilt 1977",
                "founder": "Chogyal Gyurmed Namgyal",
                "historicalSignificance": "Important Karma Kagyu center, rebuilt after earthquakes"
            },
            "sect": "Karma Kagyu",
            "category": ["historic", "architecture"],
            "features": [
                "Valley and mountain views",
                "Beautiful paintings and murals",
                "Modern reconstruction",
                "Karma Kagyu teachings center"
            ],
            "festivals": ["Kagyu religious ceremonies"],
            "visitingHours": "9:00 AM - 5:00 PM",
            "images": [
                "https://pplx-res.cloudinary.com/image/upload/v1757014599/pplx_project_search_images/41c316c88c2b59f8207b63639ad1351ff121b869.png"
            ]
        }
    ],
    "culturalEvents": [
        {
            "id": "saga-dawa-2025",
            "name": "Saga Dawa Festival",
            "date": "2025-06-11",
            "monastery": "Multiple monasteries",
            "description": "Triple blessed festival commemorating Buddha's birth, enlightenment, and Parinirvana. Celebrated with prayers, butter lamps, and processions.",
            "significance": "Most important Buddhist festival in Sikkim",
            "duration": "1 day",
            "activities": ["Prayer ceremonies", "Butter lamp lighting", "Religious processions", "Monastery visits"]
        },
        {
            "id": "bumchu-2025",
            "name": "Bumchu Festival",
            "date": "2025-02-28",
            "monastery": "Tashiding Monastery",
            "description": "Sacred water ceremony that predicts Sikkim's future. The level of water in a sacred vase reveals prophecies for the coming year.",
            "significance": "Annual prophecy ceremony unique to Sikkim",
            "duration": "2 days",
            "activities": ["Sacred water ceremony", "Religious dances", "Community prayers", "Traditional rituals"]
        },
        {
            "id": "losar-2025",
            "name": "Losar - Tibetan New Year",
            "date": "2025-02-17",
            "monastery": "Rumtek Monastery",
            "description": "Tibetan New Year celebration with traditional Chaam dances, prayers, and festive gatherings. Monks perform masked dances.",
            "significance": "Beginning of Buddhist lunar calendar",
            "duration": "3 days",
            "activities": ["Chaam dance", "Traditional ceremonies", "Community feasts", "Prayer rituals"]
        },
        {
            "id": "drukpa-teshi-2025",
            "name": "Drukpa Teshi",
            "date": "2025-07-20",
            "monastery": "Multiple monasteries",
            "description": "Celebrates Buddha's first sermon of the Four Noble Truths at Sarnath. Features mass prayers and yak races in North Sikkim.",
            "significance": "Commemoration of Buddha's first teaching",
            "duration": "1 day",
            "activities": ["Mass prayers", "Yak races", "Religious ceremonies", "Community celebrations"]
        },
        {
            "id": "guru-drakmar-chham-2025",
            "name": "Guru Drakmar Chham",
            "date": "2025-03-15",
            "monastery": "Pemayangtse Monastery",
            "description": "Special annual festival at Pemayangtse featuring traditional masked dances and religious ceremonies.",
            "significance": "Annual celebration of Guru Padmasambhava",
            "duration": "2 days",
            "activities": ["Masked dances", "Religious ceremonies", "Traditional music", "Community participation"]
        }
    ]
};

// Application State
let currentPage = 'home';
let currentMonastery = null;
let map = null;
let filteredMonasteries = [...monasteryData.monasteries];
let filteredEvents = [...monasteryData.culturalEvents];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeNavigation();
    initializeSearch();
    initializeFilters();
    populateMonasteries();
    populateEvents();
    showPage('home');
});

// Navigation Functions
function initializeNavigation() {
    console.log('Initializing navigation...');
    
    // Navigation links - using event delegation for better reliability
    document.addEventListener('click', function(e) {
        const target = e.target.closest('[data-page]');
        if (target) {
            e.preventDefault();
            const page = target.getAttribute('data-page');
            console.log('Navigation clicked:', page);
            showPage(page);
            updateActiveNavLink(target);
        }
    });

    // Mobile menu toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            console.log('Mobile menu toggled');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu && !navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

function showPage(pageId) {
    console.log('Showing page:', pageId);
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageId;
        console.log('Page shown successfully:', pageId);

        // Initialize page-specific functionality
        if (pageId === 'map') {
            setTimeout(() => initializeMap(), 100);
        }
    } else {
        console.error('Page not found:', pageId);
    }

    // Close mobile menu
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.remove('active');
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav__link').forEach(link => {
        link.classList.remove('active');
    });
    if (activeLink && activeLink.classList.contains('nav__link')) {
        activeLink.classList.add('active');
    }
}

// Search and Filter Functions
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            console.log('Search query:', query);
            
            if (query === '') {
                filteredMonasteries = [...monasteryData.monasteries];
            } else {
                filteredMonasteries = monasteryData.monasteries.filter(monastery =>
                    monastery.name.toLowerCase().includes(query) ||
                    monastery.shortDescription.toLowerCase().includes(query) ||
                    monastery.sect.toLowerCase().includes(query) ||
                    monastery.location.district.toLowerCase().includes(query)
                );
            }
            populateMonasteries();
        });
    }
}

function initializeFilters() {
    console.log('Initializing filters...');
    
    // Use event delegation for filter buttons
    document.addEventListener('click', function(e) {
        // Monastery category filters
        if (e.target.matches('.explore-filters .filter-buttons .btn')) {
            // Update active state
            e.target.parentNode.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            // Filter monasteries
            const category = e.target.getAttribute('data-filter');
            console.log('Filtering monasteries by:', category);
            
            if (category === 'all') {
                filteredMonasteries = [...monasteryData.monasteries];
            } else {
                filteredMonasteries = monasteryData.monasteries.filter(monastery =>
                    monastery.category.includes(category)
                );
            }
            populateMonasteries();
        }

        // Event filters
        if (e.target.matches('.calendar-filters .filter-buttons .btn')) {
            // Update active state
            e.target.parentNode.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            // Filter events
            const monasteryFilter = e.target.getAttribute('data-filter');
            console.log('Filtering events by:', monasteryFilter);
            
            if (monasteryFilter === 'all') {
                filteredEvents = [...monasteryData.culturalEvents];
            } else {
                filteredEvents = monasteryData.culturalEvents.filter(event =>
                    event.monastery.toLowerCase().includes(monasteryFilter.toLowerCase())
                );
            }
            populateEvents();
        }
    });
}

// Monastery Functions
function populateMonasteries() {
    const grid = document.getElementById('monasteriesGrid');
    if (!grid) {
        console.log('Monasteries grid not found');
        return;
    }

    console.log('Populating monasteries:', filteredMonasteries.length);
    grid.innerHTML = '';

    filteredMonasteries.forEach(monastery => {
        const card = createMonasteryCard(monastery);
        grid.appendChild(card);
    });
}

function createMonasteryCard(monastery) {
    const card = document.createElement('div');
    card.className = 'monastery-card';
    card.style.cursor = 'pointer';
    
    // Add click event listener
    card.addEventListener('click', () => {
        console.log('Monastery card clicked:', monastery.id);
        showMonasteryDetail(monastery.id);
    });

    const imageUrl = monastery.images && monastery.images.length > 0 ? monastery.images[0] : 'https://via.placeholder.com/350x200/8B1538/FFFFFF?text=No+Image';

    card.innerHTML = `
        <div class="monastery-card__image">
            <img src="${imageUrl}" alt="${monastery.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/350x200/8B1538/FFFFFF?text=No+Image'">
        </div>
        <div class="monastery-card__content">
            <h3 class="monastery-card__title">${monastery.name}</h3>
            <p class="monastery-card__description">${monastery.shortDescription}</p>
            <div class="monastery-card__meta">
                ${monastery.category.map(cat => `<span class="monastery-card__tag">${cat}</span>`).join('')}
            </div>
        </div>
    `;

    return card;
}

function showMonasteryDetail(monasteryId) {
    console.log('Showing monastery detail:', monasteryId);
    const monastery = monasteryData.monasteries.find(m => m.id === monasteryId);
    if (!monastery) {
        console.error('Monastery not found:', monasteryId);
        return;
    }

    currentMonastery = monastery;
    
    const detailContent = document.getElementById('monasteryDetailContent');
    if (detailContent) {
        detailContent.innerHTML = createMonasteryDetailHTML(monastery);
        showPage('monastery-detail');
    } else {
        console.error('Monastery detail content element not found');
    }
}

function createMonasteryDetailHTML(monastery) {
    const mainImage = monastery.images && monastery.images.length > 0 ? monastery.images[0] : 'https://via.placeholder.com/1200x600/8B1538/FFFFFF?text=No+Image';
    const relatedMonasteries = getRelatedMonasteries(monastery);

    return `
        <div class="detail-header" style="background-image: url('${mainImage}')">
            <div class="detail-hero container">
                <h1 class="detail-title">${monastery.name}</h1>
                <p class="detail-subtitle">${monastery.alternativeName}</p>
                <p class="detail-location">${monastery.location.address}</p>
            </div>
        </div>
        
        <div class="detail-content container">
            <div class="detail-grid">
                <div class="detail-main">
                    <h2>About the Monastery</h2>
                    <p>${monastery.fullDescription}</p>
                    
                    <h2>Historical Significance</h2>
                    <p><strong>Established:</strong> ${monastery.history.established}</p>
                    <p><strong>Founder:</strong> ${monastery.history.founder}</p>
                    <p>${monastery.history.historicalSignificance}</p>
                    
                    <h2>Key Features</h2>
                    <ul>
                        ${monastery.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="detail-sidebar">
                    <div class="detail-info">
                        <h3>Quick Information</h3>
                        <div class="detail-info-item">
                            <strong>Buddhist Sect:</strong>
                            <span>${monastery.sect}</span>
                        </div>
                        <div class="detail-info-item">
                            <strong>District:</strong>
                            <span>${monastery.location.district}</span>
                        </div>
                        <div class="detail-info-item">
                            <strong>Altitude:</strong>
                            <span>${monastery.location.altitude}</span>
                        </div>
                        <div class="detail-info-item">
                            <strong>Visiting Hours:</strong>
                            <span>${monastery.visitingHours}</span>
                        </div>
                        <div class="detail-info-item">
                            <strong>Major Festivals:</strong>
                            <span>${monastery.festivals.join(', ')}</span>
                        </div>
                        <!-- Call-to-action buttons: View Images & 3D View -->
                        <div class="detail-actions" style="margin-top:12px; display:flex; gap:10px;">
                            <button id="btnViewImages" class="btn btn--primary btn--sm" aria-label="View Images">View Images</button>
                            <button id="btn3DView" class="btn btn--outline btn--sm" aria-label="3D View">3D View</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="related-monasteries">
                <h2>Related Monasteries</h2>
                <div class="related-grid">
                    ${relatedMonasteries.map(related => `
                        <div class="monastery-card" style="cursor: pointer;" onclick="showMonasteryDetail('${related.id}')">
                            <div class="monastery-card__image">
                                <img src="${related.images && related.images[0] ? related.images[0] : 'https://via.placeholder.com/250x150/8B1538/FFFFFF?text=No+Image'}" alt="${related.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/250x150/8B1538/FFFFFF?text=No+Image'">
                            </div>
                            <div class="monastery-card__content">
                                <h4>${related.name}</h4>
                                <p>${related.shortDescription}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function getRelatedMonasteries(monastery, limit = 3) {
    return monasteryData.monasteries
        .filter(m => m.id !== monastery.id && (
            m.sect === monastery.sect || 
            m.location.district === monastery.location.district ||
            m.category.some(cat => monastery.category.includes(cat))
        ))
        .slice(0, limit);
}

// Map Functions
function initializeMap() {
    console.log('Initializing map...');
    
    const mapElement = document.getElementById('monasteryMap');
    if (!mapElement) {
        console.error('Map element not found');
        return;
    }

    if (map) {
        console.log('Map already exists, removing...');
        map.remove();
        map = null;
    }

    try {
        // Initialize Leaflet map centered on Sikkim
        map = L.map('monasteryMap').setView([27.3389, 88.4271], 10);

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        console.log('Map initialized successfully');

        // Add monastery markers
        monasteryData.monasteries.forEach(monastery => {
            const markerColor = getMarkerColor(monastery.category);
            
            // Create custom marker
            const marker = L.circleMarker([monastery.location.latitude, monastery.location.longitude], {
                color: 'white',
                fillColor: markerColor,
                fillOpacity: 0.8,
                radius: 10,
                weight: 2
            }).addTo(map);

            // Add popup
            const popupContent = `
                <div style="text-align: center; min-width: 200px;">
                    <h4 style="margin: 0 0 8px 0; color: #8B1538;">${monastery.name}</h4>
                    <p style="margin: 0 0 8px 0; font-size: 14px;">${monastery.shortDescription}</p>
                    <p style="margin: 0 0 12px 0; font-size: 12px; color: #666;">${monastery.location.address}</p>
                    <button onclick="showMonasteryDetail('${monastery.id}')" style="background: #8B1538; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer;">View Details</button>
                </div>
            `;

            marker.bindPopup(popupContent);

            // Add click event
            marker.on('click', function() {
                marker.openPopup();
            });
        });

        // Ensure map displays properly
        setTimeout(() => {
            if (map) {
                map.invalidateSize();
            }
        }, 100);

    } catch (error) {
        console.error('Error initializing map:', error);
    }
}

function getMarkerColor(categories) {
    if (categories.includes('historic')) return '#8B1538'; // burgundy
    if (categories.includes('festival')) return '#F4A261'; // saffron
    if (categories.includes('architecture')) return '#D4AF37'; // gold
    return '#8B1538'; // default burgundy
}

// Events Functions
function populateEvents() {
    const grid = document.getElementById('eventsGrid');
    if (!grid) {
        console.log('Events grid not found');
        return;
    }

    console.log('Populating events:', filteredEvents.length);
    grid.innerHTML = '';

    // Sort events by date
    const sortedEvents = [...filteredEvents].sort((a, b) => new Date(a.date) - new Date(b.date));

    sortedEvents.forEach(event => {
        const card = createEventCard(event);
        grid.appendChild(card);
    });
}

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';

    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    card.innerHTML = `
        <div class="event-date">${formattedDate}</div>
        <h3 class="event-title">${event.name}</h3>
        <p class="event-monastery">${event.monastery}</p>
        <p class="event-description">${event.description}</p>
        <div style="margin-bottom: 16px;">
            <strong>Duration:</strong> ${event.duration}<br>
            <strong>Significance:</strong> ${event.significance}
        </div>
        <ul class="event-activities">
            ${event.activities.map(activity => `<li>${activity}</li>`).join('')}
        </ul>
    `;

    return card;
}

// Utility Functions
function showLoading() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.style.display = 'flex';
    }
}

function hideLoading() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.style.display = 'none';
    }
}

// Handle image loading errors
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'https://via.placeholder.com/400x200/8B1538/FFFFFF?text=Image+Not+Available';
    }
}, true);

// Resize handler for map
window.addEventListener('resize', function() {
    if (map && currentPage === 'map') {
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    }
});

// Global function for inline onclick handlers
window.showMonasteryDetail = showMonasteryDetail;

// Lightweight handlers for Quick Information CTAs
function hookDetailCTAs() {
    // Buttons are re-created each time detail is rendered; hook after render
    const btnImages = document.getElementById('btnViewImages');
    const btn3D = document.getElementById('btn3DView');

    if (btnImages) {
        btnImages.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('View Images clicked for', currentMonastery ? currentMonastery.id : 'unknown');
            // Open the simple image gallery - for now, just open the first image in a new tab
            const imgUrl = currentMonastery && currentMonastery.images && currentMonastery.images.length > 0
                ? currentMonastery.images[0]
                : 'https://pannellum.org/images/cerro-toco-0.jpg';
            window.open(imgUrl, '_blank');
        });
    }

    if (btn3D) {
        btn3D.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('3D View clicked for', currentMonastery ? currentMonastery.id : 'unknown');
            // Launch pannellum overlay with the first equirectangular image available
            const panoUrl = currentMonastery && currentMonastery.images && currentMonastery.images.length > 0
                ? currentMonastery.images[0]
                : 'https://pannellum.org/images/cerro-toco-0.jpg';

            // Ensure the overlay exists
            const overlay = document.getElementById('pannellumOverlay');
            const viewerEl = document.getElementById('pannellumViewer');
            if (!overlay || !viewerEl) {
                console.error('Pannellum overlay or viewer element missing in HTML');
                return;
            }

            // Show overlay
            overlay.classList.add('active');
            overlay.setAttribute('aria-hidden', 'false');

            // Create or load pannellum viewer
            try {
                if (window._pannellumInstance) {
                    // If existing instance, load new scene
                    window._pannellumInstance.loadScene('scene-1');
                    // We will simply set the new panorama by destroying and re-creating
                    window._pannellumInstance.destroy();
                    window._pannellumInstance = null;
                }

                window._pannellumInstance = pannellum.viewer('pannellumViewer', {
                    type: 'equirectangular',
                    panorama: panoUrl,
                    autoLoad: true,
                    showZoomCtrl: true,
                    showFullscreenCtrl: true,
                    yaw: 0,
                    pitch: 0,
                    hfov: 100
                });
            } catch (err) {
                console.error('Error creating pannellum viewer:', err);
            }
        });
    }

    // Close button for pannellum overlay
    const pannellumClose = document.getElementById('pannellumClose');
    if (pannellumClose) {
        pannellumClose.addEventListener('click', function(e) {
            e.stopPropagation();
            const overlay = document.getElementById('pannellumOverlay');
            if (overlay) {
                overlay.classList.remove('active');
                overlay.setAttribute('aria-hidden', 'true');
            }
            if (window._pannellumInstance) {
                try { window._pannellumInstance.destroy(); } catch (e) { /* ignore */ }
                window._pannellumInstance = null;
            }
        });
    }
}

// Hook CTAs whenever a monastery detail is shown
const originalShowMonasteryDetail = showMonasteryDetail;
showMonasteryDetail = function(monasteryId) {
    originalShowMonasteryDetail(monasteryId);
    // small timeout to ensure DOM is updated
    setTimeout(() => {
        hookDetailCTAs();
    }, 50);
};