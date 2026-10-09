// Kibiya LMS - Mock Data and Utilities

// Default Database State
const DEFAULT_DB = {
    users: [
        { id: 1, name: "System Admin", email: "admin@kibiya.com", password: "password", role: "admin", image: "" },
        { id: 2, name: "Sarah Tech", email: "facilitator@kibiya.com", password: "password", role: "facilitator", image: "" },
        { id: 3, name: "John Doe", email: "student@kibiya.com", password: "password", role: "student", image: "" }
    ],
    courses: [
        {
            id: 101,
            title: "Web Development Bootcamp",
            description: "Learn HTML, CSS, and JS from scratch.",
            facilitatorId: 2,
            modules: [
                {
                    id: 1, title: "Introduction to HTML", content: "HTML is the standard markup language for documents designed to be displayed in a web browser...", 
                    quiz: {
                        questions: [
                            { q: "What does HTML stand for?", options: ["Hyper Text Preprocessor", "Hyper Text Markup Language", "Hyper Tool Multi Language"], answer: 1 }
                        ]
                    }
                },
                {
                    id: 2, title: "Advanced CSS", content: "CSS is the language we use to style an HTML document...",
                    quiz: {
                        questions: [
                            { q: "Which property is used to change background color?", options: ["color", "bgcolor", "background-color"], answer: 2 }
                        ]
                    }
                }
            ],
            finalExam: {
                questions: [
                    { q: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"], answer: 0 },
                    { q: "Choose the correct HTML element for the largest heading:", options: ["<heading>", "<h6>", "<h1>"], answer: 2 }
                ]
            }
        },
        { id: 102, title: "Electrical Installation", description: "Learn the fundamentals of electrical systems and safe installation practices.", facilitatorId: null, modules: [], finalExam: { questions: [] } },
        { id: 103, title: "Welding and Fabrication", description: "Master the techniques of metal welding and structural fabrication.", facilitatorId: null, modules: [], finalExam: { questions: [] } },
        { id: 104, title: "Refrigerators and Air-Condition", description: "Maintenance and repair of cooling systems.", facilitatorId: null, modules: [], finalExam: { questions: [] } },
        { id: 105, title: "Satellite & CCTV Installation and Maintenance", description: "Setup and maintain security cameras and satellite systems.", facilitatorId: null, modules: [], finalExam: { questions: [] } },
        { id: 106, title: "Catering and Hospitality", description: "Professional food preparation, presentation, and hospitality management.", facilitatorId: null, modules: [], finalExam: { questions: [] } },
        { id: 107, title: "Computer Hardware & GSM Repairs and Maintenance", description: "Diagnose and repair computers and mobile phones.", facilitatorId: null, modules: [], finalExam: { questions: [] } },
        { id: 108, title: "Leather Craftsmanship and Design", description: "Design and manufacture premium leather goods.", facilitatorId: null, modules: [], finalExam: { questions: [] } },
        { id: 109, title: "Networking and System Security", description: "Design secure computer networks and protect against cyber threats.", facilitatorId: null, modules: [], finalExam: { questions: [] } },
        { id: 110, title: "Livestock Farming", description: "Modern techniques for rearing and managing livestock efficiently.", facilitatorId: null, modules: [], finalExam: { questions: [] } }
    ],
    enrollments: [
        { studentId: 3, courseId: 101, progress: 50, completed: false, score: null, completedModules: [] }
    ],
    pages: [
        { id: 'home', title: 'Learning Management System Examples', content: '<img src="assets/featured.png" alt="LMS Featured Image" style="width: 100%; border-radius: 8px; margin-bottom: 2rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"><h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Transform Your Learning Experience</h3><p>Welcome to our state-of-the-art Learning Management System. We provide scalable, professional, and accessible solutions for institutions, facilitators, and students worldwide.</p><p>Explore our courses, meet our management, and get started today.</p>', published: true },
        { id: 'about-us', title: 'About Kibiya Hub', content: '<img src="assets/featured.png" alt="About Us" style="width: 100%; border-radius: 8px; margin-bottom: 2rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"><h3 style="color: var(--accent-primary); margin-bottom: 1rem;">A Short History of Kibiya Hub</h3><p>Founded to bridge the gap between practical skills and real-world technology demands, Kibiya Hub began as a small innovation center with a focus on hands-on learning. Today, it has grown into a trusted technology and education hub delivering career-ready training in web development, engineering, security, and more.</p><h3 style="color: var(--accent-primary); margin-top: 2rem; margin-bottom: 1rem;">Our Mission</h3><p>We equip learners with the knowledge and confidence to thrive in modern tech careers. Our mission is to deliver practical, industry-aligned training through expert facilitators, responsive support, and a platform designed for meaningful progress.</p><h3 style="color: var(--accent-primary); margin-top: 2rem; margin-bottom: 1rem;">Our Vision</h3><p>Kibiya Hub aims to become the leading destination for transformational tech education in the region, empowering a new generation of innovators, entrepreneurs, and professionals with the skills to shape the future.</p>', published: true },
        { id: 'our-courses', title: 'Our Courses', content: '<h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Explore Premium Courses</h3><p>We offer a wide variety of professional courses ranging from Web Development, Electrical Installation, to Livestock Farming and beyond.</p><p>Log in or register to browse our full catalog and start your learning journey with certified experts today.</p>', published: true },
        { id: 'galleries', title: 'Galleries', content: '<h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Campus and Events</h3><p>Check back soon for high-quality photos of our latest events, hackathons, and classroom sessions.</p>', published: true },
        { id: 'our-management', title: 'Our Management Team', content: '<img src="assets/management.png" alt="Management Team" style="width: 100%; border-radius: 8px; margin-bottom: 2rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"><h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Leadership That Inspires</h3><p>Our management team consists of seasoned industry veterans, educators, and innovators who are dedicated to delivering the best educational experience possible.</p><p>With a combined experience of over 50 years in tech and education, our leaders are here to ensure Kibiya Hub remains at the forefront of the e-learning revolution.</p>', published: true },
        { id: 'contact-us', title: 'Contact Us', content: '<h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Get In Touch</h3><p>Have questions? We would love to hear from you. Reach out to our support team at <strong>contact@kibiya.com</strong> or call us at <strong>+1 (555) 123-4567</strong>.</p>', published: true },
        { id: 'our-partners', title: 'Our Partners', content: '<h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Global Partnerships</h3><p>We partner with leading tech companies and educational institutions globally to bring you industry-recognized certifications and standard curriculum.</p>', published: true },
        { id: 'advert', title: 'Advertisements', content: '<h3 style="color: var(--accent-primary); margin-bottom: 1rem;">Announcements</h3><p>Space reserved for community announcements and partnered advertisements.</p>', published: true }
    ],
    galleries: [
        { id: 1, src: 'assets/featured.png', caption: 'Learning Space' },
        { id: 2, src: 'assets/management.png', caption: 'Leadership & Events' }
    ],
    managementTeam: [
        { id: 1, name: 'Dr. Amina Yusuf', title: 'Executive Director', bio: 'Leads strategy, operations, and institutional growth.', image: '', rank: 1 }
    ],
    advisoryCouncil: [
        { id: 1, name: 'Prof. Musa Bello', title: 'Advisory Council Member', bio: 'Guides the institution on academic quality and partnerships.', image: '', rank: 1 }
    ],
    partners: [
        { id: 1, name: 'Google Workspace', image: 'assets/google_partner.png', description: 'Providing collaboration tools and technical resources.', link: 'https://workspace.google.com', rank: 1 },
        { id: 2, name: 'GitHub Education', image: 'assets/github_partner.png', description: 'Empowering students with developer tools and training.', link: 'https://education.github.com', rank: 2 },
        { id: 3, name: 'Microsoft Learn', image: 'assets/microsoft_partner.png', description: 'Access to learning paths, certifications, and cloud resources.', link: 'https://learn.microsoft.com', rank: 3 }
    ]
};

// Initialize Mock DB from Local Storage or defaults
let MOCK_DB = null;
try {
    MOCK_DB = JSON.parse(localStorage.getItem('kibiya_db'));
} catch (error) {
    console.warn('Failed to parse kibiya_db from localStorage, resetting to defaults.', error);
    localStorage.removeItem('kibiya_db');
    MOCK_DB = null;
}
if (!MOCK_DB) {
    MOCK_DB = JSON.parse(JSON.stringify(DEFAULT_DB));
    localStorage.setItem('kibiya_db', JSON.stringify(MOCK_DB));
} else {
    let dbUpdated = false;
    
    // Merge any new default courses into the existing MOCK_DB seamlessly
    DEFAULT_DB.courses.forEach(defaultCourse => {
        if (!MOCK_DB.courses.find(c => c.title === defaultCourse.title)) {
            MOCK_DB.courses.push(defaultCourse);
            dbUpdated = true;
        }
    });
    
    // Migrate missing pages array for existing DB
    if (!MOCK_DB.pages) {
        MOCK_DB.pages = DEFAULT_DB.pages;
        dbUpdated = true;
    } else {
        DEFAULT_DB.pages.forEach(defaultPage => {
            const existingPage = MOCK_DB.pages.find(p => p.id === defaultPage.id);
            if (!existingPage) {
                MOCK_DB.pages.push(defaultPage);
                dbUpdated = true;
            } else if (existingPage.id === 'about-us' && existingPage.content !== defaultPage.content) {
                // Refresh the About Us page content so the latest history/mission/vision is displayed
                existingPage.title = defaultPage.title;
                existingPage.content = defaultPage.content;
                dbUpdated = true;
            }
        });
    }

    if (!MOCK_DB.managementTeam || MOCK_DB.managementTeam.length === 0) {
        MOCK_DB.managementTeam = DEFAULT_DB.managementTeam;
        dbUpdated = true;
    }

    if (!MOCK_DB.galleries) {
        MOCK_DB.galleries = DEFAULT_DB.galleries;
        dbUpdated = true;
    }

    if (!MOCK_DB.advisoryCouncil || MOCK_DB.advisoryCouncil.length === 0) {
        MOCK_DB.advisoryCouncil = DEFAULT_DB.advisoryCouncil;
        dbUpdated = true;
    }

    if (!MOCK_DB.partners || MOCK_DB.partners.length === 0) {
        MOCK_DB.partners = DEFAULT_DB.partners;
        dbUpdated = true;
    }

    if (dbUpdated) {
        localStorage.setItem('kibiya_db', JSON.stringify(MOCK_DB));
    }
}

MOCK_DB.users = MOCK_DB.users || DEFAULT_DB.users;
MOCK_DB.users.forEach(u => {
    if (u.image === undefined) u.image = '';
    if (u.password === undefined) u.password = '';
    if (!u.role) {
        const defaultUser = DEFAULT_DB.users.find(d => String(d.email||'').trim().toLowerCase() === String(u.email||'').trim().toLowerCase());
        u.role = defaultUser ? defaultUser.role : 'student';
    }
    if (u.name === undefined) u.name = '';
    if (u.email === undefined) u.email = '';
});

// Ensure default users exist when user list is missing standard demo accounts
DEFAULT_DB.users.forEach(defaultUser => {
    const existing = MOCK_DB.users.find(u => String(u.email||'').trim().toLowerCase() === String(defaultUser.email||'').trim().toLowerCase());
    if (!existing) {
        MOCK_DB.users.push({ ...defaultUser });
    }
});

function saveDB() {
    localStorage.setItem('kibiya_db', JSON.stringify(MOCK_DB));
}

function showModal(title, formHtml, onSave) {
    // Remove existing modal if any
    const existing = document.getElementById('dynamic-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay active';
    overlay.id = 'dynamic-modal';

    overlay.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="modal-close" id="dynamic-modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <form id="dynamic-modal-form">
                    ${formHtml}
                </form>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="document.getElementById('dynamic-modal').remove()">Cancel</button>
                <button class="btn btn-primary" id="dynamic-modal-save">Save</button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    // Close handler (button)
    const closeBtn = document.getElementById('dynamic-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', () => overlay.remove());

    // Close on ESC key
    function escListener(e) { if (e.key === 'Escape') overlay.remove(); }
    document.addEventListener('keydown', escListener);

    // Cleanup function to remove ESC listener when overlay removed
    const observer = new MutationObserver(() => {
        if (!document.getElementById('dynamic-modal')) {
            document.removeEventListener('keydown', escListener);
            observer.disconnect();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    const saveBtn = document.getElementById('dynamic-modal-save');
    saveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const form = document.getElementById('dynamic-modal-form');
        if (!form.reportValidity()) return;

        // Disable save to prevent duplicate submits
        saveBtn.disabled = true;
        saveBtn.classList.add('loading');

        try {
            const result = onSave(new FormData(form));
            // If handler returns a promise, wait for it to finish
            if (result && typeof result.then === 'function') {
                result.then(() => overlay.remove()).catch(() => {
                    // Re-enable on error
                    saveBtn.disabled = false;
                    saveBtn.classList.remove('loading');
                });
            } else {
                // Assume synchronous success -> close
                overlay.remove();
            }
        } catch (err) {
            // Re-enable on exception
            saveBtn.disabled = false;
            saveBtn.classList.remove('loading');
            console.error(err);
        }
    });
}

function readImageAsDataUrl(file) {
    return new Promise((resolve) => {
        if (!file) {
            resolve('');
            return;
        }

        // Handle FileList or array-like file collections
        if (typeof file === 'object' && typeof file.length === 'number' && file.length > 0) {
            file = file[0];
        }

        // If it's already a data URL string, return as-is
        if (typeof file === 'string') {
            resolve(file);
            return;
        }

        // Handle Blob/File objects (covers jpg, png, gif, etc.)
        if (file instanceof Blob || (typeof File !== 'undefined' && file instanceof File)) {
            if (file.size === 0) {
                resolve('');
                return;
            }
            const reader = new FileReader();
            reader.onload = () => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;
                    const maxDim = 800;
                    if (width > maxDim || height > maxDim) {
                        if (width > height) {
                            height = Math.round((height * maxDim) / width);
                            width = maxDim;
                        } else {
                            width = Math.round((width * maxDim) / height);
                            height = maxDim;
                        }
                    }
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);
                    resolve(canvas.toDataURL('image/jpeg', 0.7));
                };
                img.onerror = () => {
                    resolve(reader.result || '');
                };
                img.src = reader.result;
            };
            reader.onerror = (event) => {
                console.error('FileReader failed to read image', event);
                resolve('');
            };
            reader.readAsDataURL(file);
            return;
        }

        // Fallback: try to stringify and return empty on failure
        try {
            resolve(String(file));
        } catch (e) {
            console.error('Unable to convert uploaded image to data URL', e);
            resolve('');
        }
    });
}

function getManagementCollection(type) {
    return type === 'advisoryCouncil' ? MOCK_DB.advisoryCouncil : MOCK_DB.managementTeam;
}

function saveManagementCollection(type, collection) {
    if (type === 'advisoryCouncil') {
        MOCK_DB.advisoryCouncil = collection;
    } else {
        MOCK_DB.managementTeam = collection;
    }
    saveDB();
}

function addManagementMember(type) {
    const formHtml = `
        <div class="form-group">
            <label class="form-label">Full Name</label>
            <input type="text" name="name" class="form-control" required placeholder="e.g. Jane Doe">
        </div>
        <div class="form-group">
            <label class="form-label">Position / Title</label>
            <input type="text" name="title" class="form-control" required placeholder="e.g. Executive Director">
        </div>
        <div class="form-group">
            <label class="form-label">Short Bio</label>
            <textarea name="bio" class="form-control" rows="3" placeholder="Brief profile or description..."></textarea>
        </div>
        <div class="form-group">
            <label class="form-label">Upload Photo</label>
            <input type="file" name="image" class="form-control" accept="image/*, .jpg, .jpeg, .png, .gif, .webp, .svg, .bmp, .ico">
        </div>
    `;

    showModal(type === 'advisoryCouncil' ? 'Add Advisory Council Member' : 'Add Management Officer', formHtml, (formData) => {
        return readImageAsDataUrl(formData.get('image')).then((imageData) => {
            const collection = getManagementCollection(type);
            const newId = collection.length > 0 ? Math.max(...collection.map(item => item.id)) + 1 : 1;
            collection.push({
                id: newId,
                name: formData.get('name'),
                title: formData.get('title'),
                bio: formData.get('bio'),
                image: imageData
            });
            saveManagementCollection(type, collection);
            window.location.reload();
        });
    });
}

function editManagementMember(type, memberId) {
    const collection = getManagementCollection(type);
    const member = collection.find(item => item.id === memberId);
    if (!member) return;

    const formHtml = `
        <div class="form-group">
            <label class="form-label">Full Name</label>
            <input type="text" name="name" class="form-control" required value="${member.name}">
        </div>
        <div class="form-group">
            <label class="form-label">Position / Title</label>
            <input type="text" name="title" class="form-control" required value="${member.title}">
        </div>
        <div class="form-group">
            <label class="form-label">Short Bio</label>
            <textarea name="bio" class="form-control" rows="3">${member.bio || ''}</textarea>
        </div>
        <div class="form-group">
            <label class="form-label">Replace Photo</label>
            <input type="file" name="image" class="form-control" accept="image/*, .jpg, .jpeg, .png, .gif, .webp, .svg, .bmp, .ico">
        </div>
        <div class="form-group" style="display: flex; align-items: center; gap: 0.5rem;">
            <input type="checkbox" name="removeImage" id="remove-image" style="width: 18px; height: 18px; accent-color: var(--accent-primary);">
            <label for="remove-image" class="form-label" style="margin: 0; cursor: pointer;">Remove existing photo</label>
        </div>
    `;

    showModal(type === 'advisoryCouncil' ? 'Edit Advisory Council Member' : 'Edit Management Officer', formHtml, (formData) => {
        return readImageAsDataUrl(formData.get('image')).then((imageData) => {
            member.name = formData.get('name');
            member.title = formData.get('title');
            member.bio = formData.get('bio');
            if (formData.get('removeImage') === 'on') {
                member.image = '';
            } else if (imageData) {
                member.image = imageData;
            }
            saveManagementCollection(type, collection);
            window.location.reload();
        });
    });
}

function deleteManagementMember(type, memberId) {
    const collection = getManagementCollection(type).filter(item => item.id !== memberId);
    saveManagementCollection(type, collection);
    window.location.reload();
}

function addPartner() {
    const formHtml = `
        <div class="form-group">
            <label class="form-label">Partner Name</label>
            <input type="text" name="name" class="form-control" required placeholder="e.g. Google">
        </div>
        <div class="form-group">
            <label class="form-label">Description</label>
            <textarea name="description" class="form-control" rows="3" placeholder="Brief partnership description..."></textarea>
        </div>
        <div class="form-group">
            <label class="form-label">Website Link</label>
            <input type="url" name="link" class="form-control" placeholder="https://domain.com">
        </div>
        <div class="form-group">
            <label class="form-label">Sort Order (Rank)</label>
            <input type="number" name="rank" class="form-control" placeholder="e.g. 1 for highest" value="10">
        </div>
        <div class="form-group">
            <label class="form-label">Partner Logo</label>
            <input type="file" name="image" class="form-control" accept="image/*, .jpg, .jpeg, .png, .gif, .webp, .svg, .bmp, .ico">
        </div>
    `;

    showModal('Add Partner', formHtml, (formData) => {
        return readImageAsDataUrl(formData.get('image')).then((imageData) => {
            const collection = MOCK_DB.partners || [];
            const newId = collection.length > 0 ? Math.max(...collection.map(item => item.id)) + 1 : 1;
            collection.push({
                id: newId,
                name: formData.get('name'),
                description: formData.get('description'),
                link: formData.get('link'),
                rank: parseInt(formData.get('rank')) || 10,
                image: imageData
            });
            MOCK_DB.partners = collection;
            saveDB();
            window.location.reload();
        });
    });
}

function editPartner(partnerId) {
    const collection = MOCK_DB.partners || [];
    const partner = collection.find(item => item.id === partnerId);
    if (!partner) return;

    const formHtml = `
        <div class="form-group">
            <label class="form-label">Partner Name</label>
            <input type="text" name="name" class="form-control" required value="${partner.name}">
        </div>
        <div class="form-group">
            <label class="form-label">Description</label>
            <textarea name="description" class="form-control" rows="3">${partner.description || ''}</textarea>
        </div>
        <div class="form-group">
            <label class="form-label">Website Link</label>
            <input type="url" name="link" class="form-control" value="${partner.link || ''}">
        </div>
        <div class="form-group">
            <label class="form-label">Sort Order (Rank)</label>
            <input type="number" name="rank" class="form-control" value="${partner.rank || 10}">
        </div>
        <div class="form-group">
            <label class="form-label">Replace Logo</label>
            <input type="file" name="image" class="form-control" accept="image/*, .jpg, .jpeg, .png, .gif, .webp, .svg, .bmp, .ico">
        </div>
        <div class="form-group" style="display: flex; align-items: center; gap: 0.5rem;">
            <input type="checkbox" name="removeImage" id="remove-logo" style="width: 18px; height: 18px; accent-color: var(--accent-primary);">
            <label for="remove-logo" class="form-label" style="margin: 0; cursor: pointer;">Remove logo</label>
        </div>
    `;

    showModal('Edit Partner', formHtml, (formData) => {
        return readImageAsDataUrl(formData.get('image')).then((imageData) => {
            partner.name = formData.get('name');
            partner.description = formData.get('description');
            partner.link = formData.get('link');
            partner.rank = parseInt(formData.get('rank')) || 10;
            if (formData.get('removeImage') === 'on') {
                partner.image = '';
            } else if (imageData) {
                partner.image = imageData;
            }
            saveDB();
            window.location.reload();
        });
    });
}

function deletePartner(partnerId) {
    if (!confirm('Are you sure you want to delete this partner?')) return;
    MOCK_DB.partners = (MOCK_DB.partners || []).filter(item => item.id !== partnerId);
    saveDB();
    window.location.reload();
}

function addFacilitator() {
    let courseOptions = MOCK_DB.courses.map(c => `<option value="${c.id}">${c.title}</option>`).join('');
    
    const formHtml = `
        <div class="form-group">
            <label class="form-label">Full Name</label>
            <input type="text" name="name" class="form-control" required placeholder="e.g. John Smith">
        </div>
        <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" name="email" class="form-control" required placeholder="facilitator@kibiya.com">
        </div>
        <div class="form-group">
            <label class="form-label">Temporary Password</label>
            <input type="text" name="password" class="form-control" required value="password123">
        </div>
        <div class="form-group">
            <label class="form-label">Contact Number</label>
            <input type="text" name="contact" class="form-control" placeholder="+1 234 567 8900">
        </div>
        <div class="form-group">
            <label class="form-label">Assign Initial Course (Optional)</label>
            <select name="courseId" class="form-control" style="appearance: none;">
                <option value="">-- None --</option>
                ${courseOptions}
            </select>
        </div>
        <div class="form-group">
            <label class="form-label">Profile Picture</label>
            <input type="file" name="image" class="form-control" accept="image/*, .jpg, .jpeg, .png, .gif, .webp, .svg, .bmp, .ico">
        </div>
    `;

    showModal('Add New Facilitator', formHtml, (formData) => {
        const newId = MOCK_DB.users.length > 0 ? Math.max(...MOCK_DB.users.map(u => u.id)) + 1 : 1;
        return readImageAsDataUrl(formData.get('image')).then(imageData => {
            MOCK_DB.users.push({
                id: newId,
                name: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('password'),
                contact: formData.get('contact'),
                role: "facilitator",
                image: imageData
            });

            const assignedCourse = formData.get('courseId');
            if (assignedCourse) {
                const course = MOCK_DB.courses.find(c => c.id == assignedCourse);
                if (course) course.facilitatorId = newId;
            }

            saveDB();
            window.location.reload();
        });
    });
}

function addUser() {
    const courseOptions = MOCK_DB.courses.map(c => `<option value="${c.id}">${c.title}</option>`).join('');
    const formHtml = `
        <div class="form-group">
            <label class="form-label">Full Name</label>
            <input type="text" name="name" class="form-control" required placeholder="e.g. John Smith">
        </div>
        <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" name="email" class="form-control" required placeholder="name@kibiya.com">
        </div>
        <div class="form-group">
            <label class="form-label">Password</label>
            <input type="text" name="password" class="form-control" required value="password123">
        </div>
        <div class="form-group">
            <label class="form-label">Role</label>
            <select name="role" class="form-control" style="appearance: none;">
                <option value="admin">Admin</option>
                <option value="facilitator">Facilitator</option>
                <option value="student">Student</option>
            </select>
        </div>
        <div class="form-group">
            <label class="form-label">Assign Facilitator Course (Optional)</label>
            <select name="courseId" class="form-control" style="appearance: none;">
                <option value="">-- None --</option>
                ${courseOptions}
            </select>
        </div>
        <div class="form-group">
            <label class="form-label">Profile Picture</label>
            <input type="file" name="image" class="form-control" accept="image/*, .jpg, .jpeg, .png, .gif, .webp, .svg, .bmp, .ico">
        </div>
    `;

    showModal('Add New User', formHtml, (formData) => {
        const newId = MOCK_DB.users.length > 0 ? Math.max(...MOCK_DB.users.map(u => u.id)) + 1 : 1;
        return readImageAsDataUrl(formData.get('image')).then(imageData => {
            const role = formData.get('role');
            const user = {
                id: newId,
                name: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('password'),
                role,
                image: imageData
            };

            MOCK_DB.users.push(user);
            if (role === 'facilitator') {
                const assignedCourse = formData.get('courseId');
                if (assignedCourse) {
                    const course = MOCK_DB.courses.find(c => c.id == assignedCourse);
                    if (course) course.facilitatorId = newId;
                }
            }
            saveDB();
            window.location.reload();
        });
    });
}

function addCourse() {
    const facilitatorOptions = MOCK_DB.users
        .filter(u => u.role === 'facilitator')
        .map(fac => `<option value="${fac.id}">${fac.name}</option>`).join('');

    const formHtml = `
        <div class="form-group">
            <label class="form-label">Course Title</label>
            <input type="text" name="title" class="form-control" required placeholder="e.g. Web Development">
        </div>
        <div class="form-group">
            <label class="form-label">Course Code</label>
            <input type="text" name="code" class="form-control" required placeholder="e.g. WEB101">
        </div>
        <div class="form-group">
            <label class="form-label">Course Description</label>
            <textarea name="description" class="form-control" rows="4" placeholder="Add a quick description."></textarea>
        </div>
        <div class="form-group">
            <label class="form-label">Assign Facilitator</label>
            <select name="facilitatorId" class="form-control" style="appearance: none;">
                <option value="">-- Unassigned --</option>
                ${facilitatorOptions}
            </select>
        </div>
    `;

    showModal('Add New Course', formHtml, (formData) => {
        const newId = MOCK_DB.courses.length > 0 ? Math.max(...MOCK_DB.courses.map(c => c.id)) + 1 : 1;
        const facilitatorValue = formData.get('facilitatorId');
        const newCourse = {
            id: newId,
            title: formData.get('title'),
            code: formData.get('code'),
            description: formData.get('description'),
            facilitatorId: facilitatorValue ? Number(facilitatorValue) : null,
            modules: [],
            finalExam: { questions: [] }
        };
        MOCK_DB.courses.push(newCourse);
        saveDB();
        window.location.reload();
    });
}

function openProfilePhotoModal() {
    const formHtml = `
        <div class="form-group">
            <label class="form-label">Upload Profile Picture</label>
            <input type="file" name="image" class="form-control" accept="image/*, .jpg, .jpeg, .png, .gif, .webp, .svg, .bmp, .ico" required>
        </div>
    `;

    showModal('Upload Profile Photo', formHtml, (formData) => {
        const currentUser = getCurrentUser();
        if (!currentUser) return;

        return readImageAsDataUrl(formData.get('image')).then(imageData => {
            const user = MOCK_DB.users.find(u => u.id === currentUser.id);
            if (!user) return;
            user.image = imageData;
            saveDB();
            localStorage.setItem('kibiya_user', JSON.stringify(user));
            window.location.reload();
        });
    });
}

function editCourse(courseId) {
    const course = MOCK_DB.courses.find(c => c.id === courseId);
    if (!course) return;

    const formHtml = `
        <div class="form-group">
            <label class="form-label">Course Title</label>
            <input type="text" name="title" class="form-control" required value="${course.title}">
        </div>
        <div class="form-group">
            <label class="form-label">Course Code</label>
            <input type="text" name="code" class="form-control" required value="${course.code || ''}">
        </div>
        <div class="form-group">
            <label class="form-label">Course Description</label>
            <textarea name="description" class="form-control" rows="4">${course.description || ''}</textarea>
        </div>
        <div class="form-group">
            <label class="form-label">Facilitator</label>
            <select name="facilitatorId" class="form-control" style="appearance: none;">
                <option value="">-- Unassigned --</option>
                ${MOCK_DB.users.filter(u => u.role === 'facilitator').map(fac => `<option value="${fac.id}" ${course.facilitatorId === fac.id ? 'selected' : ''}>${fac.name}</option>`).join('')}
            </select>
        </div>
    `;

    showModal('Edit Course', formHtml, (formData) => {
        course.title = formData.get('title');
        course.code = formData.get('code');
        course.description = formData.get('description');
        const facilitatorValue = formData.get('facilitatorId');
        course.facilitatorId = facilitatorValue ? Number(facilitatorValue) : null;
        saveDB();
        window.location.reload();
    });
}

function deleteCourse(courseId) {
    if (!confirm('Are you sure you want to remove this course?')) return;
    MOCK_DB.courses = MOCK_DB.courses.filter(c => c.id !== courseId);
    saveDB();
    window.location.reload();
}

function editUser(userId) {
    const user = MOCK_DB.users.find(u => u.id === userId);
    if (!user) return;

    const courseOptions = MOCK_DB.courses.map(c => `<option value="${c.id}" ${c.facilitatorId === userId ? 'selected' : ''}>${c.title}</option>`).join('');
    const formHtml = `
        <div class="form-group">
            <label class="form-label">Full Name</label>
            <input type="text" name="name" class="form-control" required value="${user.name}">
        </div>
        <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" name="email" class="form-control" required value="${user.email}">
        </div>
        <div class="form-group">
            <label class="form-label">Role</label>
            <select name="role" class="form-control" style="appearance: none;">
                <option value="admin" ${user.role === 'admin' ? 'selected' : ''}>Admin</option>
                <option value="facilitator" ${user.role === 'facilitator' ? 'selected' : ''}>Facilitator</option>
                <option value="student" ${user.role === 'student' ? 'selected' : ''}>Student</option>
            </select>
        </div>
        <div class="form-group">
            <label class="form-label">Assign Facilitator Course (Optional)</label>
            <select name="courseId" class="form-control" style="appearance: none;">
                <option value="">-- None --</option>
                ${courseOptions}
            </select>
        </div>
        <div class="form-group">
            <label class="form-label">Profile Picture</label>
            <input type="file" name="image" class="form-control" accept="image/*, .jpg, .jpeg, .png, .gif, .webp, .svg, .bmp, .ico">
        </div>
        <div class="form-group" style="display: flex; align-items: center; gap: 0.5rem;">
            <input type="checkbox" name="removeImage" id="remove-image" style="width: 18px; height: 18px; accent-color: var(--accent-primary);">
            <label for="remove-image" class="form-label" style="margin: 0; cursor: pointer;">Remove existing photo</label>
        </div>
    `;

    showModal('Edit User', formHtml, (formData) => {
        const selectedRole = formData.get('role');
        const selectedCourse = formData.get('courseId');

        if (selectedRole !== 'facilitator') {
            MOCK_DB.courses.forEach(c => {
                if (c.facilitatorId === userId) c.facilitatorId = null;
            });
        } else if (selectedCourse) {
            MOCK_DB.courses.forEach(c => {
                if (c.facilitatorId === userId && c.id != selectedCourse) {
                    c.facilitatorId = null;
                }
            });
            const course = MOCK_DB.courses.find(c => c.id == selectedCourse);
            if (course) course.facilitatorId = userId;
        } else if (user.role === 'facilitator') {
            MOCK_DB.courses.forEach(c => {
                if (c.facilitatorId === userId) c.facilitatorId = null;
            });
        }

        return readImageAsDataUrl(formData.get('image')).then(imageData => {
            if (formData.get('removeImage') === 'on') {
                user.image = '';
            } else if (imageData) {
                user.image = imageData;
            }

            user.name = formData.get('name');
            user.email = formData.get('email');
            user.role = selectedRole;
            saveDB();
            window.location.reload();
        });
    });
}

function deleteUser(userId) {
    const user = MOCK_DB.users.find(u => u.id === userId);
    if (!user) return;
    if (!confirm(`Delete ${user.name} (${user.role})? This cannot be undone.`)) return;

    MOCK_DB.users = MOCK_DB.users.filter(u => u.id !== userId);
    if (user.role === 'student') {
        MOCK_DB.enrollments = MOCK_DB.enrollments.filter(e => e.studentId !== userId);
    }
    if (user.role === 'facilitator') {
        MOCK_DB.courses.forEach(c => {
            if (c.facilitatorId === userId) c.facilitatorId = null;
        });
    }

    saveDB();
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.id === userId) {
        localStorage.removeItem('kibiya_user');
        window.location.href = window.location.pathname.includes('/admin/') ? '../login.html' : 'login.html';
        return;
    }
    window.location.reload();
}

// Authentication State
const INACTIVITY_TIMEOUT_MS = 6 * 60 * 1000; // 6 minutes
const INACTIVITY_WARNING_MS = 5 * 60 * 1000; // warn at 5 minutes

function login(email, password) {
    const normalizedEmail = String(email || '').trim().toLowerCase();
    const normalizedPassword = String(password || '');
    const user = MOCK_DB.users.find(u => String(u.email || '').trim().toLowerCase() === normalizedEmail && String(u.password || '') === normalizedPassword);
    if (user) {
        const safeUser = { ...user };
        localStorage.setItem('kibiya_user', JSON.stringify(safeUser));
        localStorage.setItem('kibiya_last_activity', Date.now().toString());
        return safeUser;
    }
    return null;
}

function initInactivityTimer() {
    // Only run if a user is logged in
    if (!getCurrentUser()) return;

    let warningToast = null;
    let warningTimer = null;
    let logoutTimer = null;

    function resetTimers() {
        localStorage.setItem('kibiya_last_activity', Date.now().toString());
        clearTimeout(warningTimer);
        clearTimeout(logoutTimer);

        // Remove warning toast if present
        if (warningToast) {
            warningToast.remove();
            warningToast = null;
        }

        // Set warning timer
        warningTimer = setTimeout(() => {
            showInactivityWarning();
        }, INACTIVITY_WARNING_MS);

        // Set logout timer
        logoutTimer = setTimeout(() => {
            if (warningToast) { warningToast.remove(); warningToast = null; }
            logout();
        }, INACTIVITY_TIMEOUT_MS);
    }

    function showInactivityWarning() {
        if (warningToast) return;
        warningToast = document.createElement('div');
        warningToast.id = 'inactivity-toast';
        warningToast.style.cssText = `
            position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 9999;
            background: var(--bg-tertiary, #1e293b);
            border: 1px solid var(--accent-warning, #f59e0b);
            border-radius: 12px;
            padding: 1.25rem 1.5rem;
            box-shadow: 0 20px 50px rgba(0,0,0,0.4);
            display: flex; flex-direction: column; gap: 0.75rem;
            max-width: 340px; width: calc(100% - 3rem);
            animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        `;
        warningToast.innerHTML = `
            <style>
                @keyframes slideInRight {
                    from { transform: translateX(120%); opacity: 0; }
                    to   { transform: translateX(0);    opacity: 1; }
                }
            </style>
            <div style="display:flex; align-items:center; gap:0.75rem;">
                <span style="font-size:1.5rem;">⏱️</span>
                <div>
                    <div style="font-weight:700; font-size:0.95rem; color: var(--text-primary, #f1f5f9);">Session Expiring Soon</div>
                    <div style="font-size:0.82rem; color: var(--text-secondary, #94a3b8); margin-top:0.2rem;">You will be logged out in 1 minute due to inactivity.</div>
                </div>
            </div>
            <div style="display:flex; gap:0.5rem;">
                <button id="inactivity-stay" style="flex:1; padding:0.5rem 0; border-radius:8px; border:none; background:var(--accent-primary,#6366f1); color:#fff; font-weight:600; cursor:pointer; font-size:0.85rem;">Stay Logged In</button>
                <button id="inactivity-logout" style="flex:1; padding:0.5rem 0; border-radius:8px; border:1px solid var(--border-color,rgba(255,255,255,0.1)); background:transparent; color:var(--text-secondary,#94a3b8); cursor:pointer; font-size:0.85rem;">Logout Now</button>
            </div>
        `;
        document.body.appendChild(warningToast);

        document.getElementById('inactivity-stay').addEventListener('click', () => {
            resetTimers();
        });
        document.getElementById('inactivity-logout').addEventListener('click', () => {
            logout();
        });
    }

    // Listen to user activity events
    const activityEvents = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'click'];
    activityEvents.forEach(evt => {
        document.addEventListener(evt, resetTimers, { passive: true });
    });

    // Also sync across tabs using localStorage
    window.addEventListener('storage', (e) => {
        if (e.key === 'kibiya_last_activity') {
            clearTimeout(warningTimer);
            clearTimeout(logoutTimer);
            if (warningToast) { warningToast.remove(); warningToast = null; }
            warningTimer = setTimeout(showInactivityWarning, INACTIVITY_WARNING_MS);
            logoutTimer = setTimeout(logout, INACTIVITY_TIMEOUT_MS);
        }
        if (e.key === 'kibiya_user' && !e.newValue) {
            // Logged out from another tab
            window.location.reload();
        }
    });

    // Start timers
    resetTimers();
}

function logout() {
    localStorage.removeItem('kibiya_user');
    if (window.location.pathname.includes('/admin/') || window.location.pathname.includes('/student/') || window.location.pathname.includes('/facilitator/')) {
        window.location.href = '../login.html';
    } else {
        window.location.href = 'login.html';
    }
}

function getCurrentUser() {
    const user = localStorage.getItem('kibiya_user');
    return user ? JSON.parse(user) : null;
}

function checkAuth(requiredRole) {
    const user = getCurrentUser();
    if (!user) {
        window.location.href = '../login.html';
        return;
    }
    if (requiredRole && user.role !== requiredRole) {
        // Redirect to appropriate dashboard based on role
        if (user.role === 'admin') window.location.href = '../admin/dashboard.html';
        else if (user.role === 'facilitator') window.location.href = '../facilitator/dashboard.html';
        else window.location.href = '../student/dashboard.html';
    }
    
    // Set user info in navbar
    const userNameEl = document.getElementById('navbar-username');
    const userRoleEl = document.getElementById('navbar-role');
    if (userNameEl) userNameEl.textContent = user.name;
    if (userRoleEl) userRoleEl.textContent = user.role.charAt(0).toUpperCase() + user.role.slice(1);

    // Start inactivity timer — runs for all logged-in roles
    document.addEventListener('DOMContentLoaded', initInactivityTimer);
}

// Utility to handle nav links
document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    }

    // Auto setup common navbar for logged in users
    const user = getCurrentUser();
    if (user) {
        const navProfile = document.querySelector('.nav-profile');
        if (navProfile) {
            const initials = user.name.split(' ').map(part => part[0] || '').join('').slice(0, 2).toUpperCase();
            const isDashboardPath = window.location.pathname.includes('/dashboard.html');
            const prefix = window.location.pathname.includes('/admin/') || window.location.pathname.includes('/student/') || window.location.pathname.includes('/facilitator/') ? '../' : '';
            const dashLink = prefix + user.role + '/dashboard.html';

            navProfile.innerHTML = `
                <div style="display:flex; align-items:center; gap:0.75rem; margin-right: 1rem;">
                    ${user.image ? `<img src="${user.image}" alt="${user.name}" style="width:38px; height:38px; object-fit:cover; border-radius:50%; border:1px solid rgba(255,255,255,0.12);">` : `<div style="width:38px; height:38px; display:flex; align-items:center; justify-content:center; border-radius:50%; background: rgba(255,255,255,0.08); color: var(--text-secondary); font-weight:700;">${initials}</div>`}
                    <div style="text-align: right;">
                        <div style="font-weight: 600; font-size: 0.9rem;">${user.name}</div>
                        <div style="font-size: 0.75rem; color: var(--accent-primary);">${user.role.toUpperCase()}</div>
                    </div>
                </div>
                ${!isDashboardPath ? `<a href="${dashLink}" class="btn btn-outline" style="padding: 0.4rem 1rem; font-size: 0.8rem; margin-right: 0.5rem;">Dashboard</a>` : ''}
                <button id="dynamic-logout" class="btn ${isDashboardPath ? 'btn-outline' : 'btn-primary'}" style="padding: 0.4rem 1rem; font-size: 0.8rem;">Logout</button>
            `;
            document.getElementById('dynamic-logout').addEventListener('click', logout);
        }
    }

    // Auto setup top navigation links for CMS pages
    const navbarContainer = document.querySelector('.navbar .container');
    if (navbarContainer && !document.getElementById('dynamic-nav-links')) {
        const navLinks = document.createElement('div');
        navLinks.className = 'nav-links flex gap-3 items-center';
        navLinks.id = 'dynamic-nav-links';
        navLinks.style.margin = '0 auto 0 2rem';
        
        const visiblePages = MOCK_DB.pages.filter(p => p.published);
        let linksHtml = '';
        // Map certain pages to their dedicated standalone HTML files
        const standalonePages = {
            'about-us': 'about-us.html',
            'our-courses': 'our-courses.html',
            'contact-us': 'contact-us.html'
        };
        visiblePages.forEach(p => {
            if (['about-us', 'our-courses', 'contact-us'].includes(p.id)) {
                const prefix = window.location.pathname.includes('/admin/') || window.location.pathname.includes('/student/') || window.location.pathname.includes('/facilitator/') ? '../' : '';
                const href = standalonePages[p.id] ? `${prefix}${standalonePages[p.id]}` : `${prefix}page.html?id=${p.id}`;
                linksHtml += `<a href="${href}" style="font-weight:500; font-size:0.95rem;">${p.title}</a>`;
            }
        });
        
        const otherPages = visiblePages.filter(p => !['about-us', 'our-courses', 'contact-us'].includes(p.id) && p.id !== 'home');
        if (otherPages.length > 0) {
            const prefix = window.location.pathname.includes('/admin/') || window.location.pathname.includes('/student/') || window.location.pathname.includes('/facilitator/') ? '../' : '';
            linksHtml += `
                <div style="position: relative; display: inline-block; cursor: pointer;" class="nav-dropdown">
                    <span style="font-weight: 500; font-size: 0.95rem;">Explore ▾</span>
                    <div class="dropdown-content" style="display: none; position: absolute; top: 100%; left: -20px; background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--border-radius); padding: 0.5rem 0; min-width: 150px; z-index: 50; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.5);">
                        ${otherPages.map(p => `<a href="${prefix}page.html?id=${p.id}" style="display: block; padding: 0.5rem 1rem; color: var(--text-secondary); text-align: left;">${p.title}</a>`).join('')}
                    </div>
                </div>
            `;
        }
        navLinks.innerHTML = linksHtml;
        
        const logo = navbarContainer.querySelector('.logo');
        if (logo) {
            logo.after(navLinks);
        }

        const dropdown = document.querySelector('.nav-dropdown');
        if (dropdown) {
            dropdown.addEventListener('mouseenter', () => dropdown.querySelector('.dropdown-content').style.display = 'block');
            dropdown.addEventListener('mouseleave', () => dropdown.querySelector('.dropdown-content').style.display = 'none');
        }
    }
});

// IndexedDB File Storage Helpers
const DB_NAME = 'KibiyaLMSFilesDB';
const STORE_NAME = 'moduleFiles';

function getIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };
        request.onsuccess = (e) => resolve(e.target.result);
        request.onerror = (e) => reject(e.target.error);
    });
}

function saveModuleFile(courseId, moduleId, fileBlob) {
    return getIndexedDB().then((db) => {
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const key = `course_${courseId}_mod_${moduleId}`;
            const request = store.put(fileBlob, key);
            request.onsuccess = () => resolve();
            request.onerror = (e) => reject(e.target.error);
        });
    });
}

function getModuleFile(courseId, moduleId) {
    return getIndexedDB().then((db) => {
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const key = `course_${courseId}_mod_${moduleId}`;
            const request = store.get(key);
            request.onsuccess = (e) => resolve(e.target.result);
            request.onerror = (e) => reject(e.target.error);
        });
    });
}

function deleteModuleFile(courseId, moduleId) {
    return getIndexedDB().then((db) => {
        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const key = `course_${courseId}_mod_${moduleId}`;
            const request = store.delete(key);
            request.onsuccess = () => resolve();
            request.onerror = (e) => reject(e.target.error);
        });
    });
}

function enrollDirectly(courseId, courseTitle) {
    const user = getCurrentUser();
    if (!user || user.role !== 'student') {
        const prefix = window.location.pathname.includes('/admin/') || window.location.pathname.includes('/student/') || window.location.pathname.includes('/facilitator/') ? '../' : '';
        window.location.href = prefix + 'register.html?courseId=' + courseId;
        return;
    }
    const exists = MOCK_DB.enrollments.find(e => e.studentId === user.id && e.courseId === courseId);
    if (exists) {
        alert("You are already enrolled in " + courseTitle);
        const prefix = window.location.pathname.includes('/student/') ? '' : 'student/';
        window.location.href = prefix + 'dashboard.html';
        return;
    }
    if (confirm("Would you like to enroll in '" + courseTitle + "'?")) {
        MOCK_DB.enrollments.push({
            studentId: user.id,
            courseId: courseId,
            progress: 0,
            completed: false,
            score: null,
            completedModules: []
        });
        saveDB();
        alert("🎉 Successfully enrolled in " + courseTitle + "!");
        const prefix = window.location.pathname.includes('/student/') ? '' : 'student/';
        window.location.href = prefix + 'dashboard.html';
    }
}

