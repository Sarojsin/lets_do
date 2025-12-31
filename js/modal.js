// Team Member Modal Functionality
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('memberModal');
    const closeModal = document.getElementById('closeModal');
    const viewDetailsBtns = document.querySelectorAll('.view-details');
    const modalName = document.getElementById('modalName');
    const modalBody = document.getElementById('modalBody');

    // Only initialize if modal exists (team page)
    if (!modal) return;

    // Team member data
    const teamMembers = {
        alex: {
            name: "Alex Morgan",
            role: "Lead Full-Stack Developer",
            bio: "Alex leads our full-stack development initiatives with over 12 years of experience building scalable web applications for Fortune 500 companies. He specializes in React, Node.js, and cloud-native architectures.",
            details: "Alex has architected systems serving over 5 million users and is passionate about performance optimization and clean code practices. He holds a Master's degree in Computer Science from Stanford University.",
            skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "GraphQL", "Microservices"],
            experience: "12+ years",
            education: "M.S. Computer Science, Stanford University",
            achievements: [
                "Led development of a fintech platform processing $1B+ in transactions annually",
                "Reduced application load times by 70% through performance optimization",
                "Mentored 20+ junior developers who now lead their own teams"
            ]
        },
        sarah: {
            name: "Sarah Chen",
            role: "Senior Frontend Architect",
            bio: "Sarah focuses on creating responsive, accessible user interfaces with modern JavaScript frameworks. She has a keen eye for design and user experience.",
            details: "With 9 years of frontend development experience, Sarah has built design systems used by teams of 50+ developers. She's an advocate for web accessibility and performance optimization.",
            skills: ["Vue.js", "React", "CSS/SCSS", "Webpack", "Jest", "Accessibility", "UI/UX"],
            experience: "9+ years",
            education: "B.S. Interaction Design, Carnegie Mellon",
            achievements: [
                "Designed a component library used by 100,000+ daily active users",
                "Improved Lighthouse scores from 65 to 95+ across client projects",
                "Speaker at multiple web development conferences"
            ]
        },
        marcus: {
            name: "Marcus Johnson",
            role: "Backend & DevOps Engineer",
            bio: "Marcus ensures our applications are reliable, scalable, and secure. He specializes in microservices architecture, database optimization, and CI/CD pipelines.",
            details: "Marcus has implemented DevOps practices that reduced deployment times by 80% and improved system reliability to 99.99% uptime. He's certified in AWS and Kubernetes.",
            skills: ["Python", "Docker", "Kubernetes", "PostgreSQL", "Redis", "CI/CD", "AWS"],
            experience: "10+ years",
            education: "B.S. Software Engineering, MIT",
            achievements: [
                "Reduced cloud infrastructure costs by 40% through optimization",
                "Implemented a CI/CD pipeline that deploys 50+ times per day",
                "Maintained 99.99% uptime for mission-critical applications"
            ]
        },
        jamie: {
            name: "Jamie Rivera",
            role: "UX/UI Design Lead",
            bio: "Jamie bridges the gap between design and development, creating intuitive, user-centered digital products that drive engagement and conversions.",
            details: "With a background in both psychology and design, Jamie uses data-driven approaches to create interfaces that users love. She has increased conversion rates by up to 40% for client projects.",
            skills: ["Figma", "Sketch", "User Research", "Prototyping", "Design Systems", "A/B Testing"],
            experience: "8+ years",
            education: "M.A. Human-Computer Interaction, University of Washington",
            achievements: [
                "Increased e-commerce conversion rates by 40% through UX improvements",
                "Created a design system that reduced development time by 30%",
                "Conducted user research studies with 5,000+ participants"
            ]
        },
        michael: {
            name: "Michael Chen",
            role: "Mobile App Developer",
            bio: "Specializes in cross-platform mobile applications using React Native and Flutter. Creates performant mobile experiences for iOS and Android.",
            details: "Michael has built mobile apps with over 1 million downloads across the App Store and Google Play Store. He focuses on creating smooth, native-like experiences.",
            skills: ["React Native", "Flutter", "iOS", "Android", "TypeScript", "Firebase"],
            experience: "6+ years",
            education: "B.S. Computer Science, University of Michigan",
            achievements: [
                "Built a health app with 500,000+ active users",
                "Reduced app size by 60% through optimization",
                "Achieved 4.8+ star ratings on app stores"
            ]
        },
        jessica: {
            name: "Jessica Williams",
            role: "Project Manager",
            bio: "Ensures projects are delivered on time, within budget, and exceed client expectations through effective communication and agile methodologies.",
            details: "Jessica has managed over 50 successful web projects ranging from small business websites to enterprise applications. She's certified in Scrum and Agile methodologies.",
            skills: ["Agile", "Scrum", "Jira", "Client Relations", "Budget Management", "Risk Assessment"],
            experience: "7+ years",
            education: "MBA, Kellogg School of Management",
            achievements: [
                "Maintained 100% on-time project delivery for 3 consecutive years",
                "Increased client satisfaction scores from 85% to 98%",
                "Reduced project overhead costs by 25%"
            ]
        }
    };

    // Open modal when clicking view details
    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const memberId = this.getAttribute('data-member');
            const member = teamMembers[memberId];

            if (member) {
                modalName.textContent = member.name;

                // Create achievements list
                const achievementsList = member.achievements
                    ? member.achievements.map(achievement => `<li>${achievement}</li>`).join('')
                    : '';

                modalBody.innerHTML = `
                    <div class="modal-image">
                        <img src="${btn.closest('.team-member').querySelector('img').src}" alt="${member.name}">
                    </div>
                    <div class="modal-details">
                        <h3>${member.name}</h3>
                        <span class="modal-role">${member.role}</span>
                        
                        <div class="member-info-section">
                            <p><strong>Experience:</strong> ${member.experience}</p>
                            <p><strong>Education:</strong> ${member.education}</p>
                        </div>
                        
                        <div class="member-bio">
                            <h4>About</h4>
                            <p>${member.bio}</p>
                            <p>${member.details}</p>
                        </div>
                        
                        ${achievementsList ? `
                        <div class="member-achievements">
                            <h4>Key Achievements</h4>
                            <ul>${achievementsList}</ul>
                        </div>
                        ` : ''}
                        
                        <div class="member-skills-section">
                            <h4>Skills & Technologies</h4>
                            <div class="member-skills" style="margin-top: 1rem;">
                                ${member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                            </div>
                        </div>
                        
                        <div class="modal-actions" style="margin-top: 2rem;">
                            <button class="btn btn-primary" onclick="window.location.href='contact.html?subject=Work+with+${encodeURIComponent(member.name.split(' ')[0])}'">
                                <i class="fas fa-envelope"></i> Contact ${member.name.split(' ')[0]}
                            </button>
                        </div>
                    </div>
                `;

                // Show modal with animation
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';

                // Animate modal appearance
                if (typeof gsap !== 'undefined') {
                    gsap.from('.modal-content', {
                        duration: 0.5,
                        y: 50,
                        opacity: 0,
                        ease: 'power3.out'
                    });
                }
            }
        });
    });

    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', function () {
            closeModalAnimation();
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModalAnimation();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            closeModalAnimation();
        }
    });

    // Close modal function with animation
    function closeModalAnimation() {
        if (typeof gsap !== 'undefined') {
            gsap.to('.modal-content', {
                duration: 0.3,
                y: 50,
                opacity: 0,
                ease: 'power3.in',
                onComplete: () => {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        } else {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Add modal styles dynamically
    const modalStyles = `
        .member-info-section {
            background: rgba(99, 102, 241, 0.05);
            padding: 1rem;
            border-radius: var(--radius-sm);
            margin: 1.5rem 0;
            border: var(--border-glass);
        }
        
        .member-bio h4,
        .member-achievements h4,
        .member-skills-section h4 {
            color: var(--color-primary);
            margin: 1.5rem 0 1rem;
            font-size: 1.2rem;
            font-weight: 600;
        }
        
        .member-achievements ul {
            list-style: none;
            padding-left: 1rem;
        }
        
        .member-achievements li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 0.8rem;
            color: var(--text-muted);
        }
        
        .member-achievements li:before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--color-secondary);
            font-weight: bold;
        }
        
        .modal-actions {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = modalStyles;
    document.head.appendChild(styleSheet);
});