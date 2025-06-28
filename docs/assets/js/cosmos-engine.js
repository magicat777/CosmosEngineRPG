/**
 * Cosmos Engine RPG - Core JavaScript Framework
 * Handles navigation, interactivity, and user experience features
 */

class CosmosEngine {
    constructor() {
        this.currentChapter = null;
        this.navigationHistory = [];
        this.bookmarks = this.loadBookmarks();
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupScrollEffects();
        this.setupBookmarks();
        this.setupSearch();
        this.setupKeyboardShortcuts();
        this.setupTableEnhancements();
        this.detectCurrentChapter();
    }

    /**
     * Navigation System
     */
    setupNavigation() {
        // Add smooth scrolling to anchor links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    this.updateURL(link.getAttribute('href'));
                }
            });
        });

        // Handle back/forward navigation
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.chapter) {
                this.navigateToChapter(e.state.chapter, false);
            }
        });

        // Add active states to navigation
        this.updateActiveNavigation();
    }

    updateActiveNavigation() {
        const currentPath = window.location.pathname;
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    navigateToChapter(chapterPath, addToHistory = true) {
        if (addToHistory) {
            this.navigationHistory.push(window.location.pathname);
            history.pushState({ chapter: chapterPath }, '', chapterPath);
        }
        
        // Update current chapter
        this.currentChapter = chapterPath;
        this.updateActiveNavigation();
        
        // Trigger chapter load event
        this.dispatchEvent('chapterChanged', { chapter: chapterPath });
    }

    /**
     * Scroll Effects and Progress
     */
    setupScrollEffects() {
        // Reading progress indicator
        const progressBar = this.createProgressBar();
        
        window.addEventListener('scroll', () => {
            this.updateScrollProgress(progressBar);
            this.updateVisibleSections();
        });

        // Intersection Observer for section visibility
        this.setupSectionObserver();
    }

    createProgressBar() {
        const progress = document.createElement('div');
        progress.id = 'reading-progress';
        progress.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #ffd700, #ffb347);
            z-index: 1000;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progress);
        return progress;
    }

    updateScrollProgress(progressBar) {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    }

    setupSectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    this.updateTableOfContents(entry.target.id);
                }
            });
        }, { threshold: 0.1 });

        // Observe all section headers
        document.querySelectorAll('h2, h3').forEach(header => {
            observer.observe(header);
        });
    }

    /**
     * Bookmark System
     */
    setupBookmarks() {
        // Add bookmark buttons to headers
        document.querySelectorAll('h2, h3, h4').forEach(header => {
            if (header.id) {
                const bookmarkBtn = this.createBookmarkButton(header);
                header.appendChild(bookmarkBtn);
            }
        });
    }

    createBookmarkButton(header) {
        const btn = document.createElement('button');
        btn.className = 'bookmark-btn';
        btn.innerHTML = '🔖';
        btn.title = 'Bookmark this section';
        btn.style.cssText = `
            float: right;
            background: none;
            border: none;
            font-size: 1rem;
            cursor: pointer;
            opacity: 0.3;
            transition: opacity 0.3s ease;
        `;

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleBookmark(header.id, header.textContent);
        });

        header.addEventListener('mouseenter', () => btn.style.opacity = '1');
        header.addEventListener('mouseleave', () => btn.style.opacity = '0.3');

        return btn;
    }

    toggleBookmark(id, title) {
        const bookmark = { id, title, chapter: this.currentChapter, timestamp: Date.now() };
        
        if (this.bookmarks.find(b => b.id === id)) {
            this.bookmarks = this.bookmarks.filter(b => b.id !== id);
            this.showNotification('Bookmark removed');
        } else {
            this.bookmarks.push(bookmark);
            this.showNotification('Bookmark added');
        }
        
        this.saveBookmarks();
        this.updateBookmarksList();
    }

    loadBookmarks() {
        try {
            return JSON.parse(localStorage.getItem('cosmos-engine-bookmarks') || '[]');
        } catch {
            return [];
        }
    }

    saveBookmarks() {
        localStorage.setItem('cosmos-engine-bookmarks', JSON.stringify(this.bookmarks));
    }

    /**
     * Search Functionality
     */
    setupSearch() {
        const searchContainer = document.getElementById('search-container');
        if (!searchContainer) return;

        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.id = 'search-input';
        searchInput.placeholder = 'Search rules, skills, equipment...';
        searchInput.style.cssText = `
            width: 100%;
            padding: 0.75rem;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            font-size: 1rem;
        `;

        const searchResults = document.createElement('div');
        searchResults.id = 'search-results';
        searchResults.style.cssText = `
            max-height: 300px;
            overflow-y: auto;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            margin-top: 0.5rem;
            display: none;
        `;

        searchContainer.appendChild(searchInput);
        searchContainer.appendChild(searchResults);

        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.performSearch(e.target.value, searchResults);
            }, 300);
        });

        // Hide results when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchContainer.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }

    performSearch(query, resultsContainer) {
        if (query.length < 2) {
            resultsContainer.style.display = 'none';
            return;
        }

        // Simple text search (could be enhanced with indexed search)
        const searchableElements = document.querySelectorAll('h1, h2, h3, h4, p, li, td');
        const results = [];

        searchableElements.forEach(element => {
            if (element.textContent.toLowerCase().includes(query.toLowerCase())) {
                const header = this.findNearestHeader(element);
                results.push({
                    element,
                    header: header ? header.textContent : 'Unknown Section',
                    preview: this.createPreview(element.textContent, query)
                });
            }
        });

        this.displaySearchResults(results.slice(0, 10), resultsContainer, query);
    }

    displaySearchResults(results, container, query) {
        if (results.length === 0) {
            container.innerHTML = '<div style="padding: 1rem; color: #999;">No results found</div>';
        } else {
            container.innerHTML = results.map(result => `
                <div class="search-result" style="padding: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); cursor: pointer;">
                    <div style="font-weight: bold; color: #ffd700;">${result.header}</div>
                    <div style="color: #b8c5d4; font-size: 0.9rem;">${result.preview}</div>
                </div>
            `).join('');

            // Add click handlers
            container.querySelectorAll('.search-result').forEach((resultEl, index) => {
                resultEl.addEventListener('click', () => {
                    results[index].element.scrollIntoView({ behavior: 'smooth' });
                    container.style.display = 'none';
                });
            });
        }
        
        container.style.display = 'block';
    }

    createPreview(text, query) {
        const index = text.toLowerCase().indexOf(query.toLowerCase());
        const start = Math.max(0, index - 50);
        const end = Math.min(text.length, index + query.length + 50);
        let preview = text.slice(start, end);
        
        if (start > 0) preview = '...' + preview;
        if (end < text.length) preview = preview + '...';
        
        // Highlight the search term
        const regex = new RegExp(`(${query})`, 'gi');
        preview = preview.replace(regex, '<mark style="background: #ffd700; color: #000;">$1</mark>');
        
        return preview;
    }

    findNearestHeader(element) {
        let current = element;
        while (current && current !== document.body) {
            if (current.tagName && current.tagName.match(/^H[1-6]$/)) {
                return current;
            }
            const prevHeader = current.previousElementSibling;
            if (prevHeader && prevHeader.tagName && prevHeader.tagName.match(/^H[1-6]$/)) {
                return prevHeader;
            }
            current = current.parentElement;
        }
        return null;
    }

    /**
     * Keyboard Shortcuts
     */
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Only trigger if not in an input field
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            switch (e.key) {
                case '/':
                    e.preventDefault();
                    document.getElementById('search-input')?.focus();
                    break;
                case 'b':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        this.toggleBookmarksList();
                    }
                    break;
                case 'ArrowLeft':
                    if (e.altKey) {
                        e.preventDefault();
                        this.navigatePrevious();
                    }
                    break;
                case 'ArrowRight':
                    if (e.altKey) {
                        e.preventDefault();
                        this.navigateNext();
                    }
                    break;
            }
        });
    }

    /**
     * Table Enhancements
     */
    setupTableEnhancements() {
        document.querySelectorAll('table').forEach(table => {
            // Add sorting capability
            this.makeTableSortable(table);
            
            // Add responsive wrapper
            this.makeTableResponsive(table);
        });
    }

    makeTableSortable(table) {
        const headers = table.querySelectorAll('th');
        headers.forEach((header, index) => {
            header.style.cursor = 'pointer';
            header.addEventListener('click', () => {
                this.sortTable(table, index);
            });
        });
    }

    makeTableResponsive(table) {
        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'overflow-x: auto; margin: 1rem 0;';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    }

    /**
     * Utility Functions
     */
    detectCurrentChapter() {
        const path = window.location.pathname;
        const match = path.match(/\/ch(\d+)-/);
        if (match) {
            this.currentChapter = `ch${match[1]}`;
        }
    }

    updateURL(hash) {
        history.replaceState(null, null, hash);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 215, 0, 0.9);
            color: #000;
            padding: 1rem;
            border-radius: 8px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    dispatchEvent(eventName, detail) {
        window.dispatchEvent(new CustomEvent(eventName, { detail }));
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.cosmosEngine = new CosmosEngine();
    });
} else {
    window.cosmosEngine = new CosmosEngine();
}

// Add custom CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .in-view {
        animation: fadeInUp 0.6s ease;
    }
    
    @keyframes fadeInUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    mark {
        background: #ffd700 !important;
        color: #000 !important;
        padding: 0.1em 0.2em;
        border-radius: 3px;
    }
`;
document.head.appendChild(style);