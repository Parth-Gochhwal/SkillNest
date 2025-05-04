// Course data
const courses = [
    {
      title: "Python Programming",
      subtitle: "Learn core Python programming concepts",
      notes: [
        { name: "Python Basics PDF", url: "https://docs.python.org/3/tutorial/python-tutorial.pdf" },
        { name: "Python Cheat Sheet", url: "https://perso.limsi.fr/pointal/python:pythonpdf" }
      ],
      books: [
        { name: "Automate the Boring Stuff", url: "https://automatetheboringstuff.com/" },
        { name: "Think Python", url: "https://greenteapress.com/wp/think-python-2e/" }
      ],
      videos: [
        { name: "Python for Beginners by Corey Schafer", url: "https://www.youtube.com/watch?v=rfscVS0vtbw" },
        { name: "Python Tutorial - Full Course for Beginners [freeCodeCamp]", url: "https://www.youtube.com/watch?v=rfscVS0vtbw" }
      ]
    },
    {
      title: "C++ Programming",
      subtitle: "Learn concepts and syntax of C++ language",
      notes: [
        { name: "C++ Primer Notes", url: "https://www.cs.odu.edu/~zeil/cs361/latest/Public/cppprimer.pdf" }
      ],
      books: [
        { name: "Thinking in C++", url: "http://www.mindview.net/Books/TICPP/ThinkingInCPP2e.html" }
      ],
      videos: [
        { name: "C++ Programming Tutorial - Full Course", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y" },
        { name: "C++ for Beginners by The Cherno", url: "https://www.youtube.com/playlist?list=PLlrATfBNZ98edc5GshdBtREv5asFW3yXl" }
      ]
    },
    {
      title: "Java Programming",
      subtitle: "Comprehensive guide to Java language",
      notes: [
        { name: "Java Language Specification", url: "https://docs.oracle.com/javase/specs/jls/se8/jls8.pdf" }
      ],
      books: [
        { name: "Thinking in Java", url: "https://archive.org/details/TIJ3ThinkingInJava/page/n1/mode/2up" }
      ],
      videos: [
        { name: "Java Full Course - freeCodeCamp", url: "https://www.youtube.com/watch?v=grEKMHGYyns" }
      ]
    },
    {
      title: "Web Development",
      subtitle: "Learn HTML, CSS, JavaScript & build websites",
      notes: [
        { name: "HTML Cheat Sheet", url: "https://htmlcheatsheet.com/" },
        { name: "CSS Cheat Sheet", url: "https://htmlcheatsheet.com/css/" },
        { name: "JavaScript Guide - MDN", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" }
      ],
      books: [
        { name: "Eloquent JavaScript", url: "https://eloquentjavascript.net/" },
        { name: "You Don’t Know JS Yet (Book Series)", url: "https://github.com/getify/You-Dont-Know-JS" }
      ],
      videos: [
        { name: "Web Development Full Course - freeCodeCamp", url: "https://www.youtube.com/watch?v=Q33KBiDriJY" }
      ]
    },
    {
      title: "MERN Stack",
      subtitle: "Master MongoDB, Express, React & Node.js",
      notes: [
        { name: "MongoDB Basics PDF", url: "https://university.mongodb.com/static/M121.pdf" },
        { name: "React Docs", url: "https://reactjs.org/docs/getting-started.html" }
      ],
      books: [
        { name: "Fullstack React", url: "https://fullstack.io/react/" }
      ],
      videos: [
        { name: "MERN Stack Tutorial - freeCodeCamp", url: "https://www.youtube.com/watch?v=7CqJlxBYj-M" },
        { name: "MERN Stack Crash Course", url: "https://www.youtube.com/watch?v=3f5Q9wDePzY" }
      ]
    },
    {
      title: "C Programming",
      subtitle: "Learn foundational C programming concepts",
      notes: [
        { name: "C Programming Notes", url: "https://www.cs.virginia.edu/~cr4bd/Courses/2020/IntroC.pdf" }
      ],
      books: [
        { name: "The C Programming Language book", url: "https://archive.org/details/The_C_Programming_Language_2nd_Edition" }
      ],
      videos: [
        { name: "C Programming Tutorial - Full Course", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0" }
      ]
    },
    {
      title: "Data Structures & Algorithms (DSA)",
      subtitle: "Master essential data structures & algorithms",
      notes: [
        { name: "Data Structures Cheatsheet", url: "https://www.cs.cmu.edu/~adamchik/15-121/lectures/Resources/Handouts/DSCheatSheet.pdf" }
      ],
      books: [
        { name: "Algorithms, 4th Edition", url: "https://algs4.cs.princeton.edu/home/" },
        { name: "Data Structures and Algorithms in Java", url: "https://archive.org/details/DataStructuresAndAlgorithmsInJava" }
      ],
      videos: [
        { name: "DSA Full Course - freeCodeCamp", url: "https://www.youtube.com/watch?v=8hly31xKli0" }
      ]
    }
  ];
  

  const coursesContainer = document.getElementById('courses');
  const enrollModal = document.getElementById('enrollModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  
  function createLinksList(title, links) {
    if (links.length === 0) return '';
    const ul = document.createElement('ul');
    ul.classList.add('links-list');
    ul.setAttribute('aria-label', title);
  
    links.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = link.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = link.name;
      li.appendChild(a);
      ul.appendChild(li);
    });
  
    return ul;
  }
  
  function toggleDetails(event) {
    const btn = event.currentTarget;
    const card = btn.closest('.course-card');
    const details = card.querySelector('.course-details');
    const isOpen = details.classList.contains('open');
  
    if (isOpen) {
      details.classList.remove('open');
      btn.textContent = 'Show Details';
      btn.setAttribute('aria-expanded', 'false');
      card.setAttribute('aria-expanded', 'false');
    } else {
      details.classList.add('open');
      btn.textContent = 'Hide Details';
      btn.setAttribute('aria-expanded', 'true');
      card.setAttribute('aria-expanded', 'true');
    }
  }
  
  function openEnrollModal() {
    enrollModal.classList.add('active');
    enrollModal.focus();
  }
  
  function closeEnrollModal() {
    enrollModal.classList.remove('active');
  }
  
  function onEnrollClick(event) {
    event.stopPropagation();
    openEnrollModal();
  }
  
  closeModalBtn.addEventListener('click', closeEnrollModal);
  enrollModal.addEventListener('click', (e) => {
    if (e.target === enrollModal) closeEnrollModal();
  });
  
  // Keyboard accessibility for closing modal with ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && enrollModal.classList.contains('active')) {
      closeEnrollModal();
    }
  });
  
  // Build course cards and append
  courses.forEach(course => {
    const card = document.createElement('article');
    card.classList.add('course-card');
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'region');
    card.setAttribute('aria-labelledby', `${course.title.replace(/\s+/g, '')}Title`);
    card.setAttribute('aria-expanded', 'false');
  
    const title = document.createElement('h3');
    title.classList.add('course-title');
    title.id = `${course.title.replace(/\s+/g, '')}Title`;
    title.textContent = course.title;
  
    const subtitle = document.createElement('p');
    subtitle.classList.add('course-subtitle');
    subtitle.textContent = course.subtitle;
  
    const toggleDetailsBtn = document.createElement('button');
    toggleDetailsBtn.classList.add('toggle-details-btn');
    toggleDetailsBtn.textContent = 'Show Details';
    toggleDetailsBtn.setAttribute('aria-expanded', 'false');
    toggleDetailsBtn.addEventListener('click', toggleDetails);
  
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('course-details');
    detailsDiv.setAttribute('aria-hidden', 'true');
  
    // Notes section
    const notesTitle = document.createElement('h4');
    notesTitle.textContent = 'PDF Notes';
    notesTitle.style.color = '#f7c948';
    detailsDiv.appendChild(notesTitle);
    detailsDiv.appendChild(createLinksList(`PDF notes for ${course.title}`, course.notes));
  
    // Books section
    const booksTitle = document.createElement('h4');
    booksTitle.textContent = 'Free Books';
    booksTitle.style.color = '#f7c948';
    booksTitle.style.marginTop = '0.8rem';
    detailsDiv.appendChild(booksTitle);
    detailsDiv.appendChild(createLinksList(`Free books for ${course.title}`, course.books));
  
    // Videos section
    const videosTitle = document.createElement('h4');
    videosTitle.textContent = 'YouTube Learning Videos';
    videosTitle.style.color = '#f7c948';
    videosTitle.style.marginTop = '0.8rem';
    detailsDiv.appendChild(videosTitle);
    detailsDiv.appendChild(createLinksList(`Videos for ${course.title}`, course.videos));
  
    // Enroll Button
    const enrollBtn = document.createElement('button');
    enrollBtn.classList.add('enroll-btn');
    enrollBtn.textContent = 'Enroll for Free';
    enrollBtn.setAttribute('aria-label', `Enroll in ${course.title} course`);
    enrollBtn.addEventListener('click', onEnrollClick);
  
    detailsDiv.appendChild(enrollBtn);
  
    card.appendChild(title);
    card.appendChild(subtitle);
    card.appendChild(toggleDetailsBtn);
    card.appendChild(detailsDiv);
  
    coursesContainer.appendChild(card);
  });
  let lastScrollTop = 0;
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.classList.add('hidden');
  } else {
    // Scrolling up
    header.classList.remove('hidden');
  }
  lastScrollTop = scrollTop;
});