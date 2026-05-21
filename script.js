// --- DATA ---
// System Analysis & Design Questions (50 questions)
const sadQuestions = [
  {
    q: "What is an information system?",
    options: [
      "A programming language",
      "A collection of components that process information",
      "A database only",
      "A computer hardware",
    ],
    a: 1,
  },
  {
    q: "Which of the following is an example of an information system?",
    options: [
      "Keyboard",
      "Operating system",
      "Online banking system",
      "Printer",
    ],
    a: 2,
  },
  {
    q: "System analysis mainly focuses on:",
    options: [
      "Programming",
      "Problem understanding",
      "Hardware design",
      "Coding",
    ],
    a: 1,
  },
  {
    q: "System design focuses on:",
    options: [
      "Identifying problems",
      "Creating system solutions",
      "Writing reports",
      "Installing software",
    ],
    a: 1,
  },
  {
    q: "A system analyst is:",
    options: [
      "Hardware engineer",
      "Business professional using IT to solve problems",
      "Database manager",
      "Network technician",
    ],
    a: 1,
  },
  {
    q: "The main purpose of an information system is to:",
    options: [
      "Store hardware",
      "Process and provide information",
      "Design software",
      "Create networks",
    ],
    a: 1,
  },
  {
    q: "Which professional connects business needs with IT solutions?",
    options: [
      "Programmer",
      "Network engineer",
      "System analyst",
      "Database admin",
    ],
    a: 2,
  },
  {
    q: "Which skill is important for a system analyst?",
    options: [
      "Business knowledge",
      "Problem solving",
      "Communication",
      "All of the above",
    ],
    a: 3,
  },
  {
    q: "System analysis is concerned with:",
    options: [
      "Implementation",
      "Understanding requirements",
      "Coding",
      "Testing",
    ],
    a: 1,
  },
  {
    q: "System design provides:",
    options: [
      "Problem statement",
      "Conceptual solution",
      "Source code",
      "Test cases",
    ],
    a: 1,
  },
  // Extended to 50
  {
    q: "What is the first phase of the SDLC?",
    options: ["Design", "Planning", "Implementation", "Testing"],
    a: 1,
  },
  {
    q: "Feasibility study determines:",
    options: [
      "The programming language",
      "Whether the project is viable",
      "The color scheme",
      "The hardware brand",
    ],
    a: 1,
  },
  {
    q: "A Context Diagram is a type of:",
    options: ["Flowchart", "Data Flow Diagram (DFD)", "ER Diagram", "Use Case"],
    a: 1,
  },
  {
    q: "What does DFD stand for?",
    options: [
      "Data Flow Diagram",
      "Design Function Document",
      "Digital Format Data",
      "Data Function Design",
    ],
    a: 0,
  },
  {
    q: "An Entity-Relationship Diagram shows:",
    options: [
      "Code logic",
      "Data relationships",
      "Network topology",
      "User interface",
    ],
    a: 1,
  },
  {
    q: "What is a Use Case Diagram used for?",
    options: [
      "Database design",
      "Showing user interactions with the system",
      "Network security",
      "Hardware layout",
    ],
    a: 1,
  },
  {
    q: "The Agile methodology emphasizes:",
    options: [
      "Heavy documentation",
      "Flexibility and customer collaboration",
      "Rigid planning",
      "No testing",
    ],
    a: 1,
  },
  {
    q: "Waterfall model is:",
    options: ["Iterative", "Sequential", "Flexible", "Chaotic"],
    a: 1,
  },
  {
    q: "What is a prototype?",
    options: [
      "Final product",
      "Working model of the system",
      "Database schema",
      "Network cable",
    ],
    a: 1,
  },
  {
    q: "Requirements gathering involves:",
    options: [
      "Writing code",
      "Interviewing stakeholders",
      "Buying hardware",
      "Designing logos",
    ],
    a: 1,
  },
  {
    q: "A Gantt chart is used for:",
    options: [
      "Database normalization",
      "Project scheduling",
      "Coding syntax",
      "Network security",
    ],
    a: 1,
  },
  {
    q: "What is scope creep?",
    options: [
      "Uncontrolled changes in project scope",
      "A type of bug",
      "A programming language",
      "A hardware failure",
    ],
    a: 0,
  },
  {
    q: "UML stands for:",
    options: [
      "Universal Modeling Language",
      "Unified Modeling Language",
      "Unique Model Layout",
      "User Machine Link",
    ],
    a: 1,
  },
  {
    q: "Black box testing focuses on:",
    options: [
      "Internal code structure",
      "Functionality without knowing internal code",
      "Database tables",
      "Network packets",
    ],
    a: 1,
  },
  {
    q: "White box testing requires knowledge of:",
    options: [
      "User interface",
      "Internal code structure",
      "Marketing strategies",
      "Hardware specs",
    ],
    a: 1,
  },
  {
    q: "What is a Data Dictionary?",
    options: [
      "A book of words",
      "Repository of data definitions",
      "A type of code editor",
      "A network protocol",
    ],
    a: 1,
  },
  {
    q: "Normalization in databases is used to:",
    options: [
      "Increase redundancy",
      "Reduce data redundancy",
      "Speed up the CPU",
      "Design UI",
    ],
    a: 1,
  },
  {
    q: "A primary key must be:",
    options: ["Null", "Unique", "Duplicate", "Foreign"],
    a: 1,
  },
  {
    q: "What is a foreign key?",
    options: [
      "A key from another table",
      "A primary key",
      "A password",
      "A hardware key",
    ],
    a: 0,
  },
  {
    q: "Structured analysis uses:",
    options: [
      "Object orientation",
      "Data flow diagrams",
      "Agile sprints",
      "Cloud computing",
    ],
    a: 1,
  },
  {
    q: "Object-Oriented Analysis focuses on:",
    options: [
      "Functions",
      "Objects and classes",
      "Data storage only",
      "Network speed",
    ],
    a: 1,
  },
  {
    q: "Encapsulation is a concept in:",
    options: [
      "Structured programming",
      "Object-Oriented Programming",
      "Network protocols",
      "Database SQL",
    ],
    a: 1,
  },
  {
    q: "Inheritance allows:",
    options: [
      "Data hiding",
      "Reusing code from parent classes",
      "Faster internet",
      "Better UI design",
    ],
    a: 1,
  },
  {
    q: "Polymorphism means:",
    options: ["Many forms", "Single form", "No form", "Data form"],
    a: 0,
  },
  {
    q: "A class is a:",
    options: [
      "Variable",
      "Blueprint for objects",
      "Function",
      "Database table",
    ],
    a: 1,
  },
  {
    q: "An object is an:",
    options: ["Instance of a class", "Class itself", "Function", "Attribute"],
    a: 0,
  },
  {
    q: "What is a decision table used for?",
    options: [
      "Drawing",
      "Complex logic representation",
      "Database design",
      "Network routing",
    ],
    a: 1,
  },
  {
    q: "A CASE tool is:",
    options: [
      "A physical box",
      "Computer-Aided Software Engineering",
      "A type of database",
      "A programming language",
    ],
    a: 1,
  },
  {
    q: "JAD stands for:",
    options: [
      "Just A Design",
      "Joint Application Development",
      "Java Application Design",
      "Joint Agile Development",
    ],
    a: 1,
  },
  {
    q: "RAD stands for:",
    options: [
      "Rapid Application Development",
      "Random Access Data",
      "Real Application Design",
      "Rapid Agile Design",
    ],
    a: 0,
  },
  {
    q: "The critical path in a project is:",
    options: [
      "The shortest path",
      "The longest path determining minimum duration",
      "The cheapest path",
      "The easiest path",
    ],
    a: 1,
  },
  {
    q: "PERT stands for:",
    options: [
      "Program Evaluation and Review Technique",
      "Project Estimation and Review Time",
      "Process Evaluation Report Technique",
      "Program Error Review Time",
    ],
    a: 0,
  },
  {
    q: "What is a swimlane diagram?",
    options: [
      "A pool design",
      "Activity diagram showing responsibilities",
      "Network diagram",
      "Database schema",
    ],
    a: 1,
  },
  {
    q: "Business Process Reengineering (BPR) means:",
    options: [
      "Fixing bugs",
      "Radical redesign of business processes",
      "Upgrading hardware",
      "Hiring new staff",
    ],
    a: 1,
  },
  {
    q: "Legacy systems are:",
    options: [
      "New systems",
      "Old systems still in use",
      "Cloud systems",
      "Mobile apps",
    ],
    a: 1,
  },
  {
    q: "Cloud computing provides:",
    options: [
      "On-premise hardware only",
      "On-demand computing resources",
      "Free software",
      "Physical servers only",
    ],
    a: 1,
  },
  {
    q: "SaaS stands for:",
    options: [
      "Software as a Service",
      "System as a Software",
      "Service as a System",
      "Software and System",
    ],
    a: 0,
  },
  {
    q: "A VPN is used for:",
    options: [
      "Public browsing",
      "Secure private connection over public network",
      "Speeding up internet",
      "Blocking ads",
    ],
    a: 1,
  },
  {
    q: "Phishing is a type of:",
    options: [
      "Hardware failure",
      "Social engineering attack",
      "Database normalization",
      "Programming language",
    ],
    a: 1,
  },
  {
    q: "A firewall is used to:",
    options: [
      "Speed up computer",
      "Block unauthorized access",
      "Clean viruses",
      "Install software",
    ],
    a: 1,
  },
  {
    q: "Backup and recovery is part of:",
    options: [
      "System Design",
      "System Implementation & Maintenance",
      "Feasibility Study",
      "Requirement Analysis",
    ],
    a: 1,
  },
  {
    q: "User acceptance testing (UAT) is done by:",
    options: ["Developers", "End users", "Network admins", "Database admins"],
    a: 1,
  },
  {
    q: "A help desk is part of:",
    options: ["Development", "System Support", "Design", "Analysis"],
    a: 1,
  },
];

// HTML & CSS Questions (80 questions)
const htmlQuestions = [
  {
    q: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperText Markdown Language",
    ],
    a: 1,
  },
  {
    q: "Which tag defines the root of an HTML document?",
    options: ["<body>", "<html>", "<head>", "<root>"],
    a: 1,
  },
  {
    q: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    a: 1,
  },
  {
    q: "Which tag is used for paragraphs?",
    options: ["<para>", "<p>", "<text>", "<pg>"],
    a: 1,
  },
  {
    q: "Which attribute is used for links?",
    options: ["src", "link", "href", "url"],
    a: 2,
  },
  {
    q: "Which tag is used to display images?",
    options: ["<image>", "<img>", "<pic>", "<src>"],
    a: 1,
  },
  {
    q: "What is the largest heading tag?",
    options: ["<h6>", "<h1>", "<head>", "<heading>"],
    a: 1,
  },
  {
    q: "Which tag creates an ordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    a: 1,
  },
  {
    q: "Which tag creates an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    a: 1,
  },
  {
    q: "Which tag defines a list item?",
    options: ["<item>", "<li>", "<list>", "<ul>"],
    a: 1,
  },
  {
    q: "CSS is used for:",
    options: [
      "Structuring content",
      "Styling elements",
      "Programming logic",
      "Linking documents",
    ],
    a: 1,
  },
  {
    q: "Inline CSS is written:",
    options: [
      "In an external file",
      "Inside an HTML tag",
      "In <head> only",
      "Outside HTML",
    ],
    a: 1,
  },
  {
    q: "External CSS uses file extension:",
    options: [".html", ".js", ".css", ".xml"],
    a: 2,
  },
  {
    q: "What does <head> contain?",
    options: ["Images", "Visible content", "Metadata and links", "Paragraphs"],
    a: 2,
  },
  {
    q: "What does <body> contain?",
    options: ["Metadata", "Styles only", "Visible content", "Scripts only"],
    a: 2,
  },
  {
    q: "Margin in CSS refers to:",
    options: ["Inner space", "Outer space", "Border line", "Content area"],
    a: 1,
  },
  {
    q: "Padding in CSS refers to:",
    options: ["Outer space", "Inner space", "Border line", "Background"],
    a: 1,
  },
  {
    q: "The border in CSS surrounds:",
    options: ["Content", "Margin", "Padding", "Background"],
    a: 2,
  },
  {
    q: "Flexbox is used for:",
    options: [
      "Displaying images",
      "Creating layouts",
      "Changing text color",
      "Adding links",
    ],
    a: 1,
  },
  {
    q: "Semantic HTML means:",
    options: [
      "Colorful HTML",
      "Meaningful HTML tags",
      "Fast HTML loading",
      "Styled HTML",
    ],
    a: 1,
  },
  {
    q: "<a> tag is used for:",
    options: ["Images", "Links", "Lists", "Forms"],
    a: 1,
  },
  {
    q: "<form> is used for:",
    options: [
      "Styling pages",
      "Creating layouts",
      "User input collection",
      "Displaying images",
    ],
    a: 2,
  },
  {
    q: "Password input type hides:",
    options: ["Numbers", "Text characters", "Images", "Code"],
    a: 1,
  },
  {
    q: "Responsive design means:",
    options: [
      "Static layout",
      "Adapts to different screen sizes",
      "Fixed width only",
      "Large screen only",
    ],
    a: 1,
  },
  {
    q: "Media queries are used for:",
    options: [
      "Displaying images",
      "Responsive design",
      "Coloring text",
      "Creating lists",
    ],
    a: 1,
  },
  {
    q: "<header> is a:",
    options: ["Non-semantic tag", "Semantic tag", "Inline tag", "Void tag"],
    a: 1,
  },
  {
    q: "<div> is a:",
    options: ["Semantic tag", "Non-semantic tag", "Inline tag", "Form tag"],
    a: 1,
  },
  {
    q: "CSS selector targets:",
    options: ["Files", "HTML elements", "Server data", "Links"],
    a: 1,
  },
  {
    q: "CSS property defines:",
    options: [
      "Where to look",
      "What to change",
      "When to apply",
      "Who created it",
    ],
    a: 1,
  },
  {
    q: "CSS value defines:",
    options: [
      "Target element",
      "The value itself",
      "How to change property",
      "Style name",
    ],
    a: 2,
  },
  {
    q: "Block elements:",
    options: [
      "Appear on same line",
      "Take up full width/new line",
      "Are inline only",
      "Cannot be styled",
    ],
    a: 1,
  },
  {
    q: "Inline elements:",
    options: [
      "Take full width",
      "Appear on same line",
      "Block flow only",
      "Are not visible",
    ],
    a: 1,
  },
  {
    q: "<span> element is:",
    options: ["Block level", "Inline level", "Semantic", "A list element"],
    a: 1,
  },
  {
    q: "<section> element is:",
    options: ["Non-semantic", "Semantic", "Inline", "A link tag"],
    a: 1,
  },
  {
    q: "<footer> element is:",
    options: ["Non-semantic", "Semantic", "Inline", "A form tag"],
    a: 1,
  },
  {
    q: "<nav> is used for:",
    options: ["Displaying images", "Navigation links", "Text content", "Forms"],
    a: 1,
  },
  {
    q: "<main> element contains:",
    options: [
      "Footer content",
      "Main content of page",
      "Header only",
      "Navigation",
    ],
    a: 1,
  },
  {
    q: "<title> tag is placed inside:",
    options: ["<body>", "<head>", "<footer>", "<nav>"],
    a: 1,
  },
  {
    q: "HTTP stands for:",
    options: [
      "HyperText Transfer Protocol",
      "High Transfer Text Protocol",
      "Hyper Tool Transfer Protocol",
      "Host Transfer Protocol",
    ],
    a: 0,
  },
  {
    q: "A browser is a:",
    options: [
      "Server",
      "Client application",
      "Database",
      "Programming language",
    ],
    a: 1,
  },
  {
    q: "A server does the following:",
    options: [
      "Displays web pages",
      "Stores files and responds to requests",
      "Styles elements",
      "Creates links",
    ],
    a: 1,
  },
  {
    q: "URL stands for:",
    options: [
      "Uniform Reference Link",
      "Uniform Resource Locator",
      "Universal Redirect Link",
      "User Request Link",
    ],
    a: 1,
  },
  {
    q: "The alt attribute is used for:",
    options: ["Styling", "Image description", "Linking", "Scripting"],
    a: 1,
  },
  {
    q: "CSS file extension is:",
    options: [".html", ".css", ".js", ".txt"],
    a: 1,
  },
  {
    q: "HTML file extension is:",
    options: [".css", ".html", ".js", ".xml"],
    a: 1,
  },
  {
    q: "<input> tag is used in:",
    options: ["Lists", "Forms", "Images", "Links"],
    a: 1,
  },
  {
    q: "Submit button action:",
    options: [
      "Styles page",
      "Sends form data",
      "Displays content",
      "Hides elements",
    ],
    a: 1,
  },
  {
    q: "Flex direction controls:",
    options: ["Color scheme", "Layout direction", "Text size", "Border style"],
    a: 1,
  },
  {
    q: "Row direction means:",
    options: [
      "Vertical stacking",
      "Horizontal arrangement",
      "Diagonal layout",
      "Circular arrangement",
    ],
    a: 1,
  },
  {
    q: "Column direction means:",
    options: [
      "Horizontal arrangement",
      "Vertical stacking",
      "Diagonal layout",
      "Random arrangement",
    ],
    a: 1,
  },
  {
    q: "Box model includes:",
    options: [
      "Content only",
      "Padding and margin",
      "Border",
      "All of the above",
    ],
    a: 3,
  },
  {
    q: "Padding affects:",
    options: [
      "External spacing",
      "Internal spacing",
      "Border width",
      "Font size",
    ],
    a: 1,
  },
  {
    q: "Margin affects:",
    options: [
      "Internal spacing",
      "External spacing",
      "Border radius",
      "Font color",
    ],
    a: 1,
  },
  {
    q: "Border surrounds:",
    options: ["Content", "Margin", "Padding", "Body"],
    a: 2,
  },
  {
    q: "Content in box model is:",
    options: [
      "Spacing around element",
      "The actual data",
      "The border line",
      "External spacing",
    ],
    a: 1,
  },
  {
    q: "CSS can be applied in:",
    options: ["One way", "Two ways", "Three ways", "Five ways"],
    a: 2,
  },
  {
    q: "External CSS improves:",
    options: [
      "Loading speed",
      "Code reusability",
      "Page rendering",
      "User input",
    ],
    a: 1,
  },
  {
    q: "Inline CSS has highest:",
    options: [
      "Loading speed",
      "Reusability",
      "Specificity priority",
      "File size",
    ],
    a: 2,
  },
  {
    q: "<style> tag is used for:",
    options: ["External CSS", "Internal CSS", "Inline CSS", "HTML structure"],
    a: 1,
  },
  {
    q: "HTML5 introduced:",
    options: [
      "Inline styling",
      "Semantic elements",
      "CSS framework",
      "JavaScript engine",
    ],
    a: 1,
  },
  {
    q: "Accessibility in web means:",
    options: [
      "Fast loading",
      "Usable by all users",
      "Many colors",
      "Large fonts only",
    ],
    a: 1,
  },
  {
    q: "SEO helps with:",
    options: [
      "Styling",
      "Search engine visibility",
      "Programming",
      "Database design",
    ],
    a: 1,
  },
  {
    q: "<article> element is:",
    options: ["Non-semantic", "Semantic", "Inline", "A form tag"],
    a: 1,
  },
  {
    q: "<aside> element contains:",
    options: ["Main content", "Side content", "Navigation", "Forms"],
    a: 1,
  },
  {
    q: "Email input type validates:",
    options: ["Phone format", "Email format", "Number format", "Date format"],
    a: 1,
  },
  {
    q: "Placeholder attribute provides:",
    options: ["Default value", "Hint text", "Required field", "Label"],
    a: 1,
  },
  {
    q: "<label> tag is used for:",
    options: ["Styling text", "Input description", "Creating links", "Lists"],
    a: 1,
  },
  {
    q: "Button tag represents:",
    options: ["<btn>", "<button>", "<click>", "<input>"],
    a: 1,
  },
  {
    q: "CSS comment syntax is:",
    options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"],
    a: 1,
  },
  {
    q: "HTML comment syntax is:",
    options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"],
    a: 2,
  },
  {
    q: "Flexbox main axis flows in:",
    options: [
      "Random direction",
      "Direction of flex-direction",
      "Always horizontal",
      "Always vertical",
    ],
    a: 1,
  },
  {
    q: "Cross axis is:",
    options: [
      "Same as main axis",
      "Perpendicular to main axis",
      "Vertical only",
      "Horizontal only",
    ],
    a: 1,
  },
  {
    q: "Viewport meta tag controls:",
    options: [
      "Page speed",
      "Screen display and responsiveness",
      "Cache",
      "Security",
    ],
    a: 1,
  },
  {
    q: "Responsive design uses:",
    options: [
      "Rigid layouts",
      "Flexible layouts",
      "Fixed widths",
      "Large screens only",
    ],
    a: 1,
  },
  {
    q: "CSS Grid is a:",
    options: [
      "Row container",
      "Layout system",
      "Styling tool",
      "Positioning method",
    ],
    a: 1,
  },
  {
    q: "CSS stands for:",
    options: [
      "Computer System Sheets",
      "Cascading Style Sheets",
      "Creative Site Sheets",
      "Color Style System",
    ],
    a: 1,
  },
  {
    q: "HTML is a:",
    options: [
      "Programming language",
      "Markup language",
      "Styling language",
      "Database language",
    ],
    a: 1,
  },
  {
    q: "A web page is a:",
    options: ["Database", "HTML document", "Server", "Application"],
    a: 1,
  },
  {
    q: "Browser renders:",
    options: [
      "Database queries",
      "HTML and CSS",
      "Server code",
      "Network packets",
    ],
    a: 1,
  },
  {
    q: "Server responds with:",
    options: [
      "Rendered web pages",
      "HTML and other files",
      "JavaScript only",
      "Images only",
    ],
    a: 1,
  },
];

// --- APP STATE ---
const app = {
  state: {
    view: "login", // login, category, dashboard, exam, results, review
    user: { name: "", id: "" },
    category: null, // 'sad' or 'html'
    questions: [],
    answers: {}, // qIndex: optionIndex
    flags: new Set(),
    currentQIndex: 0,
    timer: 1800, // 30 mins in seconds
    timerInterval: null,
    examStartTime: null,
    examSubmitted: false,
    records: [],
  },

  init() {
    this.loadTheme();
    this.loadRecords();

    // Submit login on ENTER key in inputs
    const loginInputs = [
      document.getElementById("loginName"),
      document.getElementById("loginId"),
    ];
    loginInputs.forEach((input) => {
      if (!input) return;
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          this.login();
        }
      });
    });

    // Setup security listeners
    window.addEventListener("beforeunload", (e) => {
      if (this.state.view === "exam" && !this.state.examSubmitted) {
        e.preventDefault();
        e.returnValue = "";
      }
    });

    document.addEventListener("visibilitychange", () => {
      if (
        document.hidden &&
        this.state.view === "exam" &&
        !this.state.examSubmitted
      ) {
        // Optional: Log this or warn user later.
        // console.log("Tab switched");
      }
    });
  },

  // --- NAVIGATION & VIEWS ---
  switchView(viewName) {
    console.log("🔄 Switching view to:", viewName);
    document.querySelectorAll("main > section").forEach((el) => {
      console.log("Hiding view:", el.id);
      el.classList.add("hidden");
    });
    const newView = document.getElementById(`view-${viewName}`);
    console.log("New view element found:", newView !== null);
    if (newView) {
      newView.classList.remove("hidden");
      console.log("✓ View switched to:", viewName);
    } else {
      console.error("❌ View not found:", `view-${viewName}`);
    }
    window.scrollTo(0, 0);
  },

  // --- AUTH ---
  login() {
    const name = document.getElementById("loginName").value.trim();
    const id = document.getElementById("loginId").value.trim();

    if (!name || !id) {
      alert("Please enter both Name and Student ID.");
      return;
    }

    this.state.user = { name, id };

    // Update UI
    document.getElementById("navStudentName").textContent = name;
    document.getElementById("navStudentId").textContent = id;
    document.getElementById("dashName").textContent = name;
    document.getElementById("dashId").textContent = id;
    document.getElementById("navUserInfo").classList.remove("hidden");
    document.getElementById("navUserInfo").classList.add("flex");
    document.getElementById("reviewBookBtn").classList.remove("hidden");

    this.switchView("category");
  },

  selectCategory(category) {
    this.state.category = category;

    // Update dashboard info based on category
    if (category === "sad") {
      document.getElementById("dashTitle").textContent =
        "System Analysis & Design Exam";
      document.getElementById("dashSubtitle").textContent =
        "Professional exam on systems design principles";
      document.getElementById("dashQuestionCount").textContent = "50";
      document.getElementById("dashDuration").textContent = "30m";
    } else if (category === "html") {
      document.getElementById("dashTitle").textContent =
        "HTML & CSS Certification Exam";
      document.getElementById("dashSubtitle").textContent =
        "Certification exam on web development fundamentals";
      document.getElementById("dashQuestionCount").textContent = "80";
      document.getElementById("dashDuration").textContent = "45m";
    }

    this.switchView("dashboard");
    this.renderRecordHistory(
      this.state.user.name || "",
      "dashboard-record-history",
    );
  },

  changeCategory() {
    this.switchView("category");
  },

  showReviewBook() {
    this.switchView("review-book");
  },

  backToCategory() {
    this.switchView("category");
  },

  logout() {
    this.state.category = null;
    document.getElementById("loginName").value = "";
    document.getElementById("loginId").value = "";
    document.getElementById("navUserInfo").classList.add("hidden");
    document.getElementById("reviewBookBtn").classList.add("hidden");
    this.switchView("login");
  },

  // --- EXAM LOGIC ---
  startExam() {
    console.log("=== START EXAM CALLED ===");
    // Prepare Data based on category
    const questionPool =
      this.state.category === "sad" ? sadQuestions : htmlQuestions;
    this.state.questions = questionPool.map((q, i) => ({ ...q, id: i }));
    this.state.answers = {};
    this.state.flags = new Set();
    this.state.currentQIndex = 0;
    this.state.timer = 1800;
    this.state.examSubmitted = false;
    this.state.examStartTime = new Date();

    console.log("Questions loaded:", this.state.questions.length);
    console.log("Category:", this.state.category);

    this.switchView("exam");
    console.log("✓ switchView called");

    this.renderQuestion();
    console.log("✓ renderQuestion called");

    this.renderGrid();
    console.log("✓ renderGrid called");

    this.startTimer();
    console.log("✓ startTimer called");
  },

  startTimer() {
    console.log("=== START TIMER CALLED ===");
    console.log("Category:", this.state.category);

    // Clear any existing timer
    if (this.state.timerInterval) {
      console.log("Clearing previous timer interval");
      clearInterval(this.state.timerInterval);
      this.state.timerInterval = null;
    }

    // Set timer based on category
    this.state.timer = this.state.category === "sad" ? 1800 : 2700; // 30 min for SAD, 45 min for HTML
    console.log("Timer set to:", this.state.timer, "seconds");

    const display = document.getElementById("timer-display");
    console.log("Timer display element found:", display !== null);

    if (!display) {
      console.error("❌ Timer display element NOT FOUND!");
      return;
    }

    console.log("Timer display element:", display);
    console.log("Display parent:", display.parentElement);

    // Create a closure to reference the correct context
    const app = this;

    // Function to format and display time
    const formatTime = (seconds) => {
      const mins = Math.floor(seconds / 60)
        .toString()
        .padStart(2, "0");
      const secs = (seconds % 60).toString().padStart(2, "0");
      return { mins, secs };
    };

    // Function to update timer display
    const updateTimer = () => {
      const { mins, secs } = formatTime(app.state.timer);
      const timeString = `${mins}:${secs}`;
      console.log(
        "Updating timer display to:",
        timeString,
        "| Timer state:",
        app.state.timer,
      );

      try {
        display.innerHTML = `<i class="fa-regular fa-clock"></i> <span>${mins}:${secs}</span>`;
        console.log("✓ Timer innerHTML updated successfully");
      } catch (e) {
        console.error("❌ Error updating timer innerHTML:", e);
      }

      // Change color when time is running low (less than 5 minutes)
      if (app.state.timer < 300) {
        display.classList.add("timer-warning", "text-danger");
      } else {
        display.classList.remove("timer-warning", "text-danger");
      }

      // Check if time is up
      if (app.state.timer <= 0) {
        console.log("⏰ TIME IS UP - Auto-submitting exam");
        clearInterval(app.state.timerInterval);
        app.state.timerInterval = null;
        display.innerHTML = `<i class="fa-regular fa-clock"></i> <span>00:00</span>`;
        display.classList.add("timer-warning", "text-danger");

        // Auto-submit exam
        setTimeout(() => {
          alert("Time is up! Submitting exam automatically...");
          app.submitExam(true);
        }, 100);
        return;
      }

      // Decrement timer
      app.state.timer--;
    };

    // Display timer immediately
    console.log("🎬 Calling updateTimer for the first time");
    updateTimer();

    // Start the interval to update every 1000ms (1 second)
    console.log("📍 Setting up interval to update timer every 1000ms");
    this.state.timerInterval = setInterval(() => {
      updateTimer();
    }, 1000);

    console.log(
      "✓ Timer started successfully. Interval ID:",
      this.state.timerInterval,
    );
  },

  renderQuestion() {
    const q = this.state.questions[this.state.currentQIndex];
    const container = document.getElementById("q-text");
    const optionsContainer = document.getElementById("q-options");

    // Animate
    const card = document.querySelector("#view-exam .slide-in");
    card.classList.remove("slide-in");
    void card.offsetWidth; // trigger reflow
    card.classList.add("slide-in");

    // Content
    document.getElementById("q-current-num").textContent =
      this.state.currentQIndex + 1;
    document.getElementById("q-total-num").textContent =
      this.state.questions.length;
    container.textContent = `${this.state.currentQIndex + 1}. ${q.q}`;

    optionsContainer.innerHTML = "";
    q.options.forEach((opt, idx) => {
      const isSelected = this.state.answers[this.state.currentQIndex] === idx;
      const btn = document.createElement("div");
      btn.className = `option-card p-4 rounded-xl border-2 cursor-pointer flex items-center gap-3 ${isSelected ? "selected border-primary bg-blue-50 dark:bg-blue-900/20" : "border-slate-200 dark:border-slate-700 hover:border-primary/50"}`;
      btn.onclick = () => this.selectOption(idx);

      const indicator = document.createElement("div");
      indicator.className = `w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected ? "border-primary bg-primary" : "border-slate-300 dark:border-slate-600"}`;
      indicator.innerHTML = isSelected
        ? '<i class="fa-solid fa-check text-white text-xs"></i>'
        : "";

      const text = document.createElement("span");
      text.className = "font-medium";
      text.textContent = opt;

      btn.appendChild(indicator);
      btn.appendChild(text);
      optionsContainer.appendChild(btn);
    });

    // Buttons state
    document.getElementById("btn-prev").disabled =
      this.state.currentQIndex === 0;
    const nextBtn = document.getElementById("btn-next");
    if (this.state.currentQIndex === this.state.questions.length - 1) {
      nextBtn.innerHTML =
        'Finish <i class="fa-solid fa-flag-checkered ml-2"></i>';
      nextBtn.onclick = () => this.submitExam();
    } else {
      nextBtn.innerHTML = 'Next <i class="fa-solid fa-arrow-right ml-2"></i>';
      nextBtn.onclick = () => this.nextQuestion();
    }

    // Flag button state
    const flagBtn = document.getElementById("btn-flag");
    if (this.state.flags.has(this.state.currentQIndex)) {
      flagBtn.classList.add(
        "text-warning",
        "bg-yellow-50",
        "dark:bg-yellow-900/20",
      );
      flagBtn.innerHTML = '<i class="fa-solid fa-flag mr-2"></i> Flagged';
    } else {
      flagBtn.classList.remove(
        "text-warning",
        "bg-yellow-50",
        "dark:bg-yellow-900/20",
      );
      flagBtn.innerHTML =
        '<i class="fa-regular fa-flag mr-2"></i> Flag for Review';
    }

    this.updateGrid();
    this.updateProgress();
  },

  selectOption(idx) {
    this.state.answers[this.state.currentQIndex] = idx;
    this.renderQuestion(); // Re-render to show selection

    // Auto save visual feedback could go here
  },

  nextQuestion() {
    if (this.state.currentQIndex < this.state.questions.length - 1) {
      this.state.currentQIndex++;
      this.renderQuestion();
    }
  },

  prevQuestion() {
    if (this.state.currentQIndex > 0) {
      this.state.currentQIndex--;
      this.renderQuestion();
    }
  },

  toggleFlag() {
    if (this.state.flags.has(this.state.currentQIndex)) {
      this.state.flags.delete(this.state.currentQIndex);
    } else {
      this.state.flags.add(this.state.currentQIndex);
    }
    this.renderQuestion();
  },

  jumpToQuestion(index) {
    this.state.currentQIndex = index;
    this.renderQuestion();
  },

  // --- SIDEBAR & PROGRESS ---
  renderGrid() {
    const grid = document.getElementById("q-grid");
    grid.innerHTML = "";
    const totalQuestions = this.state.questions.length;
    for (let i = 0; i < totalQuestions; i++) {
      const btn = document.createElement("button");
      btn.id = `grid-${i}`;
      btn.className =
        "h-8 w-full rounded text-xs font-bold transition-all hover:opacity-80 border border-transparent";
      btn.textContent = i + 1;
      btn.onclick = () => this.jumpToQuestion(i);
      grid.appendChild(btn);
    }
    this.updateGrid();
  },

  updateGrid() {
    const totalQuestions = this.state.questions.length;
    for (let i = 0; i < totalQuestions; i++) {
      const btn = document.getElementById(`grid-${i}`);
      const isAnswered = this.state.answers[i] !== undefined;
      const isFlagged = this.state.flags.has(i);
      const isCurrent = i === this.state.currentQIndex;

      // Reset classes
      btn.className =
        "h-8 w-full rounded text-xs font-bold transition-all hover:opacity-80 border";

      if (isCurrent) {
        btn.classList.add(
          "border-slate-800",
          "dark:border-white",
          "ring-2",
          "ring-offset-1",
          "ring-slate-800",
          "dark:ring-white",
        );
      } else {
        btn.classList.add("border-transparent");
      }

      if (isFlagged) {
        btn.classList.add("bg-warning", "text-white");
      } else if (isAnswered) {
        btn.classList.add("bg-primary", "text-white");
      } else {
        btn.classList.add(
          "bg-slate-200",
          "dark:bg-slate-700",
          "text-slate-600",
          "dark:text-slate-300",
        );
      }
    }
  },

  updateProgress() {
    const answered = Object.keys(this.state.answers).length;
    const pct = Math.round((answered / 50) * 100);
    document.getElementById("progress-text").textContent = `${pct}%`;
    document.getElementById("progress-bar").style.width = `${pct}%`;
  },

  // --- SUBMISSION ---
  submitExam(auto = false) {
    if (!auto) {
      const answered = Object.keys(this.state.answers).length;
      const totalQuestions = this.state.questions.length;
      if (answered < totalQuestions) {
        document.getElementById("confirm-answered").textContent = answered;
        document.getElementById("total-questions-modal").textContent =
          totalQuestions;
        document.getElementById("modal-confirm").classList.remove("hidden");
        return;
      }
    }

    // Finalize
    this.state.examSubmitted = true;
    clearInterval(this.state.timerInterval);
    this.calculateResults();
    this.switchView("results");
  },

  confirmSubmit() {
    document.getElementById("modal-confirm").classList.add("hidden");
    this.submitExam(true);
  },

  closeModal() {
    document.getElementById("modal-confirm").classList.add("hidden");
  },

  // --- RESULTS ---
  calculateResults() {
    let correct = 0;
    this.state.questions.forEach((q, idx) => {
      if (this.state.answers[idx] === q.a) correct++;
    });

    const score = correct; // out of 50
    const pct = Math.round((correct / 50) * 100);
    const timeTaken = 1800 - this.state.timer;
    const mins = Math.floor(timeTaken / 60);
    const secs = timeTaken % 60;

    // UI Updates
    document.getElementById("res-score").textContent = `${score}/50`;
    document.getElementById("res-correct").textContent = correct;
    document.getElementById("res-incorrect").textContent = 50 - correct;
    document.getElementById("res-time").textContent = `${mins}m ${secs}s`;
    document.getElementById("score-percent").textContent = `${pct}%`;

    // Circle Progress
    const circle = document.getElementById("score-circle");
    const circumference = 2 * Math.PI * 45; // r=45
    const offset = circumference - (pct / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    if (pct >= 70) {
      circle.classList.remove("text-danger", "text-warning");
      circle.classList.add("text-success");
      document.getElementById("pass-fail-msg").textContent =
        "Congratulations! You Passed.";
      document.getElementById("pass-fail-msg").className =
        "text-xl font-medium mb-8 text-success";
    } else {
      circle.classList.remove("text-success", "text-warning");
      circle.classList.add("text-danger");
      document.getElementById("pass-fail-msg").textContent =
        "Unfortunately, You Failed.";
      document.getElementById("pass-fail-msg").className =
        "text-xl font-medium mb-8 text-danger";
    }

    // save result by student name/id
    this.addExamRecord({
      name: this.state.user.name || "Unknown",
      studentId: this.state.user.id || "--",
      category: this.state.category || "N/A",
      score,
      total: this.state.questions.length,
      pct,
      time: `${mins}m ${secs}s`,
      date: new Date().toLocaleString(),
    });
  },

  reviewExam() {
    const container = document.getElementById("review-container");
    container.innerHTML = "";

    this.state.questions.forEach((q, idx) => {
      const userAnsIdx = this.state.answers[idx];
      const isCorrect = userAnsIdx === q.a;
      const isUnanswered = userAnsIdx === undefined;

      const card = document.createElement("div");
      card.className =
        "bg-white dark:bg-darkcard p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm";

      let statusHtml = "";
      if (isUnanswered) {
        statusHtml = `<span class="px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-xs font-bold">UNANSWERED</span>`;
      } else if (isCorrect) {
        statusHtml = `<span class="px-2 py-1 rounded bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold"><i class="fa-solid fa-check mr-1"></i> CORRECT</span>`;
      } else {
        statusHtml = `<span class="px-2 py-1 rounded bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-xs font-bold"><i class="fa-solid fa-xmark mr-1"></i> INCORRECT</span>`;
      }

      let optionsHtml = '<div class="space-y-2 mt-4">';
      q.options.forEach((opt, oIdx) => {
        let classes =
          "p-3 rounded-lg text-sm border flex justify-between items-center ";

        if (oIdx === q.a) {
          // Correct Answer
          classes +=
            "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800 text-green-800 dark:text-green-200";
        } else if (oIdx === userAnsIdx && !isCorrect) {
          // User Wrong Answer
          classes +=
            "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800 text-red-800 dark:text-red-200";
        } else {
          // Neutral
          classes +=
            "bg-slate-50 dark:bg-slate-800 border-transparent text-slate-600 dark:text-slate-400";
        }

        let icon = "";
        if (oIdx === q.a)
          icon = '<i class="fa-solid fa-check text-green-600"></i>';
        else if (oIdx === userAnsIdx && !isCorrect)
          icon = '<i class="fa-solid fa-xmark text-red-600"></i>';

        optionsHtml += `<div class="${classes}">${opt} ${icon}</div>`;
      });
      optionsHtml += "</div>";

      card.innerHTML = `
                        <div class="flex justify-between items-start mb-2">
                            <h4 class="font-bold text-lg">Q${idx + 1}. ${q.q}</h4>
                            ${statusHtml}
                        </div>
                        ${optionsHtml}
                    `;
      container.appendChild(card);
    });

    this.switchView("review");
  },

  showResults() {
    this.switchView("results");
    this.renderRecordHistory();
  },

  loadRecords() {
    const raw = localStorage.getItem("devprep_records");
    try {
      this.state.records = raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.error("Failed to parse saved records", err);
      this.state.records = [];
    }
  },

  saveRecords() {
    const data = JSON.stringify(this.state.records);
    // Durability guard: check size, if > 4MB, remove oldest until < 3MB
    const maxSize = 4 * 1024 * 1024; // 4MB
    const minSize = 3 * 1024 * 1024; // 3MB
    if (data.length > maxSize) {
      while (
        this.state.records.length > 1 &&
        JSON.stringify(this.state.records).length > minSize
      ) {
        this.state.records.pop(); // remove oldest
      }
      if (
        this.state.records.length === 1 &&
        JSON.stringify(this.state.records).length > maxSize
      ) {
        alert("Storage full, clearing all records.");
        this.state.records = [];
      }
    }
    localStorage.setItem("devprep_records", data);
  },

  getCurrentSort() {
    const radios = document.getElementsByName("sort-history");
    for (let radio of radios) {
      if (radio.checked) return radio.value;
    }
    return "date";
  },

  addExamRecord(record) {
    this.state.records.unshift(record);
    // keep all records indefinitely (or until localStorage limit)
    this.saveRecords();
    this.renderRecordHistory();
  },

  renderRecordHistory(
    filterName = "",
    containerId = "record-history",
    sortBy = "date",
  ) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const normalizedFilter = filterName.trim().toLowerCase();
    let records = this.state.records;
    if (normalizedFilter) {
      records = records.filter((r) =>
        String(r.name).toLowerCase().includes(normalizedFilter),
      );
    }

    // Sort records
    if (sortBy === "score") {
      records.sort((a, b) => b.pct - a.pct); // highest score first
    } else {
      // default: date, newest first (already unshifted, but to be safe)
      records.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    if (!records.length) {
      container.innerHTML =
        "<p class='text-sm text-slate-500 dark:text-slate-400'>No matching exam records found.</p>";
      return;
    }

    const rows = records
      .map((r) => {
        return `
              <div class='grid grid-cols-6 gap-2 items-center p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs'>
                <div class='col-span-2 font-semibold text-slate-700 dark:text-slate-100'>${r.name}</div>
                <div>${r.studentId}</div>
                <div>${r.category.toUpperCase()}</div>
                <div>${r.score}/${r.total}</div>
                <div>${r.pct}%</div>
                <div>${r.date}</div>
              </div>
            `;
      })
      .join("");

    container.innerHTML = `
            <div class='grid grid-cols-6 gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2'>
              <div class='col-span-2'>Name</div>
              <div>ID</div>
              <div>Category</div>
              <div>Score</div>
              <div>%</div>
              <div>Date</div>
            </div>
            ${rows}
          `;
  },

  restart() {
    if (
      confirm(
        "Are you sure you want to restart this exam? All progress will be lost.",
      )
    ) {
      this.switchView("category");
    }
  },

  // --- UTILS ---
  loadTheme() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    document.getElementById("themeToggle").addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      localStorage.theme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    });
  },
};

// Start App
document.addEventListener("DOMContentLoaded", () => {
  app.init();
});
