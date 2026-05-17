// =============================================
//   DEVQUEST — COMPLETE DATABASE
// =============================================

const DB = {

  // ========== PROGRAMMING LANGUAGES ==========
  languages: [
    {
      id: "python",
      name: "Python",
      icon: "🐍",
      type: "data",
      category: ["data", "web"],
      tagline: "The most versatile language of the decade",
      accent: "#3776AB",
      tags: ["Interpreted", "Dynamically Typed", "OOP", "Scripting"],
      desc: "Elegant, readable and explosively popular for data science, AI/ML, backend development and automation.",
      overview: "Python was created by Guido van Rossum and first released in 1991. It emphasizes code readability with its notable use of significant whitespace. It is dynamically typed and garbage-collected, and supports multiple programming paradigms including structured, OOP, and functional programming.",
      uses: ["Data Science & Machine Learning", "Web Development (Django, Flask, FastAPI)", "Automation & Scripting", "Artificial Intelligence", "Scientific Computing", "DevOps & Infrastructure"],
      syntax: `# Hello World
print("Hello, World!")

# Functions
def greet(name: str) -> str:
    return f"Hello, {name}!"

# List Comprehension
squares = [x**2 for x in range(10)]

# Classes
class Developer:
    def __init__(self, name, lang):
        self.name = name
        self.lang = lang
    
    def introduce(self):
        return f"I'm {self.name}, I code {self.lang}"

# Dictionary
skills = {"Python": 90, "ML": 85, "APIs": 80}`,
      ecosystem: ["NumPy", "Pandas", "TensorFlow", "PyTorch", "Django", "Flask", "FastAPI", "Scikit-learn"],
      salary: "₹5L–₹40L+ (varies by domain)",
      topCompanies: ["Google", "Netflix", "Instagram", "Dropbox", "Spotify"]
    },
    {
      id: "javascript",
      name: "JavaScript",
      icon: "⚡",
      type: "web",
      category: ["web"],
      tagline: "The language of the web — runs everywhere",
      accent: "#F7DF1E",
      tags: ["Interpreted", "Event-Driven", "Async", "Full Stack"],
      desc: "The only language that runs natively in browsers. With Node.js, it conquered backend too — making JS a true full-stack language.",
      overview: "JavaScript was created by Brendan Eich at Netscape in 1995. It has evolved from a simple scripting language to a full-featured language used for full-stack development, mobile apps, game development, and more.",
      uses: ["Frontend Web Development", "Backend (Node.js)", "Mobile Apps (React Native)", "Desktop Apps (Electron)", "Browser Extensions", "Real-time Applications"],
      syntax: `// Arrow Functions & Destructuring
const greet = (name) => \`Hello, \${name}!\`;

// Async/Await
const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error:', err);
  }
};

// ES6 Classes
class Stack {
  #items = [];
  push(item) { this.#items.push(item); }
  pop() { return this.#items.pop(); }
  peek() { return this.#items.at(-1); }
}

// Destructuring
const { name, age, ...rest } = user;`,
      ecosystem: ["React", "Vue", "Angular", "Node.js", "Next.js", "Express", "TypeScript", "Vite"],
      salary: "₹4L–₹45L+",
      topCompanies: ["Meta", "Airbnb", "LinkedIn", "Twitter/X", "Netflix"]
    },
    {
      id: "java",
      name: "Java",
      icon: "☕",
      type: "systems",
      category: ["systems", "web"],
      tagline: "Write once, run anywhere — enterprise backbone",
      accent: "#ED8B00",
      tags: ["Compiled", "OOP", "Enterprise", "Android"],
      desc: "The enterprise workhorse. Java powers Android development, large-scale backend systems, and has remained among the top languages for 30 years.",
      overview: "Java was developed by James Gosling at Sun Microsystems and released in 1995. The JVM makes it platform-independent. Known for strong type safety, backward compatibility, and being the top language for Android development.",
      uses: ["Enterprise Applications", "Android Development", "Spring Boot APIs", "Microservices", "Big Data (Hadoop, Kafka)", "Banking & Finance Systems"],
      syntax: `// Generic Class
public class Stack<T> {
    private List<T> items = new ArrayList<>();
    
    public void push(T item) { items.add(item); }
    public T pop() { 
        return items.remove(items.size()-1); 
    }
}

// Streams & Lambdas (Java 8+)
List<Integer> evens = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());

// Records (Java 16+)
public record Developer(String name, String role) {}

// Pattern Matching (Java 17+)
if (obj instanceof String s) {
    System.out.println(s.toUpperCase());
}`,
      ecosystem: ["Spring Boot", "Hibernate", "Maven", "Gradle", "JUnit", "Kafka", "Tomcat"],
      salary: "₹4L–₹50L+",
      topCompanies: ["TCS", "Infosys", "Wipro", "Accenture", "Goldman Sachs"]
    },
    {
      id: "cpp",
      name: "C++",
      icon: "⚙️",
      type: "systems",
      category: ["systems"],
      tagline: "Power, speed, and total hardware control",
      accent: "#00599C",
      tags: ["Compiled", "Manual Memory", "Performance", "OOP"],
      desc: "The language of performance-critical systems. Used in game engines, operating systems, embedded systems, and competitive programming.",
      overview: "C++ was designed by Bjarne Stroustrup and first released in 1985 as an extension of C. It's renowned for enabling direct memory management, zero-cost abstractions, and unparalleled performance, forming the backbone of most major games, browsers, and OSes.",
      uses: ["Game Development (Unreal Engine)", "Operating Systems", "Embedded Systems", "Competitive Programming", "High-Frequency Trading", "Computer Graphics"],
      syntax: `#include <bits/stdc++.h>
using namespace std;

// Templates
template<typename T>
T maxVal(T a, T b) { return a > b ? a : b; }

// RAII with Smart Pointers
auto ptr = make_unique<int[]>(100);

// Lambda & STL
vector<int> nums = {5,3,8,1,9};
sort(nums.begin(), nums.end(), 
     [](int a, int b){ return a < b; });

// STL Map
unordered_map<string,int> freq;
for (auto& c : str) freq[c]++;`,
      ecosystem: ["STL", "Boost", "OpenGL", "Unreal Engine", "Qt", "CMake"],
      salary: "₹5L–₹60L+ (highly specialized)",
      topCompanies: ["Microsoft", "Epic Games", "AMD", "Intel", "Adobe"]
    },
    {
      id: "typescript",
      name: "TypeScript",
      icon: "🔷",
      type: "web",
      category: ["web"],
      tagline: "JavaScript with superpowers — type safety at scale",
      accent: "#3178C6",
      tags: ["Compiled", "Typed", "Superset of JS", "Scalable"],
      desc: "Microsoft's typed superset of JavaScript. Essential for large-scale applications, providing compile-time error checking and better developer tooling.",
      overview: "TypeScript was created by Anders Hejlsberg (also creator of C#) at Microsoft and released in 2012. It compiles to plain JavaScript and adds optional static typing, interfaces, enums, generics, and decorators.",
      uses: ["Large-scale Frontend (Angular)", "Node.js Backend", "Full-stack with Next.js", "Design Systems", "Enterprise SaaS", "Library Development"],
      syntax: `// Interfaces & Generics
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

type UserRole = 'admin' | 'developer' | 'viewer';

// Generic Function
function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  return fetch(url).then(r => r.json());
}

// Utility Types
type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;
type UserPreview = Pick<User, 'id' | 'name'>;`,
      ecosystem: ["Angular", "Next.js", "NestJS", "Prisma", "Zod", "tRPC"],
      salary: "₹6L–₹50L+",
      topCompanies: ["Microsoft", "Stripe", "Vercel", "Atlassian", "Slack"]
    },
    {
      id: "golang",
      name: "Go (Golang)",
      icon: "🐹",
      type: "systems",
      category: ["systems", "web"],
      tagline: "Google's gift to backend engineers",
      accent: "#00ADD8",
      tags: ["Compiled", "Concurrent", "Fast", "Cloud Native"],
      desc: "Google-designed language for building fast, reliable, and efficient software. The language of cloud infrastructure and microservices.",
      overview: "Go was created by Robert Griesemer, Rob Pike, and Ken Thompson at Google and released in 2009. Its goroutines and channels make concurrent programming straightforward. Used extensively in cloud infrastructure, Docker, Kubernetes, and high-performance APIs.",
      uses: ["Microservices & APIs", "Cloud Infrastructure", "Docker & Kubernetes", "DevOps Tooling", "High-performance Web Servers", "CLI Applications"],
      syntax: `package main

import "fmt"

// Goroutines & Channels
func producer(ch chan<- int) {
    for i := 0; i < 10; i++ {
        ch <- i
    }
    close(ch)
}

// Interfaces
type Shape interface {
    Area() float64
}

// Error Handling
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}`,
      ecosystem: ["Gin", "Echo", "gRPC", "Docker", "Kubernetes", "Prometheus"],
      salary: "₹10L–₹60L+",
      topCompanies: ["Google", "Uber", "Cloudflare", "HashiCorp", "Twitch"]
    },
    {
      id: "rust",
      name: "Rust",
      icon: "🦀",
      type: "systems",
      category: ["systems"],
      tagline: "Memory safety without garbage collection",
      accent: "#CE422B",
      tags: ["Compiled", "Memory Safe", "Blazingly Fast", "Systems"],
      desc: "Mozilla's systems language that eliminates entire classes of bugs at compile time. Loved for its safety guarantees and zero-cost abstractions.",
      overview: "Rust was designed by Graydon Hoare and first released in 2015. It guarantees memory safety without a garbage collector via its unique ownership system. Has been voted 'most loved language' on Stack Overflow every year since 2016.",
      uses: ["Systems Programming", "WebAssembly", "Game Engines", "Embedded Systems", "Cryptography", "High-Performance Computing"],
      syntax: `// Ownership & Borrowing
fn calculate(data: &Vec<i32>) -> i32 {
    data.iter().sum()
}

// Enums with Pattern Matching
enum Result<T, E> {
    Ok(T),
    Err(E),
}

match result {
    Ok(value) => println!("Got: {}", value),
    Err(e) => eprintln!("Error: {}", e),
}

// Traits (like Interfaces)
trait Display {
    fn show(&self) -> String;
}`,
      ecosystem: ["Tokio", "Actix-web", "Serde", "Cargo", "WebAssembly", "Bevy"],
      salary: "₹12L–₹70L+",
      topCompanies: ["Mozilla", "Discord", "Cloudflare", "Meta", "AWS"]
    },
    {
      id: "kotlin",
      name: "Kotlin",
      icon: "🎯",
      type: "mobile",
      category: ["mobile", "web"],
      tagline: "Modern Android development — null safety & concise syntax",
      accent: "#7F52FF",
      tags: ["JVM", "Null Safe", "Functional", "Android"],
      desc: "JetBrains' modern language that is now Google's preferred language for Android development. Concise, safe, and 100% interoperable with Java.",
      overview: "Kotlin was developed by JetBrains and first appeared in 2011. It became the official Android language in 2017. It improves on Java with null safety, extension functions, coroutines for async programming, and significantly less boilerplate.",
      uses: ["Android Development", "Spring Boot Backend", "Kotlin Multiplatform", "Server-side with Ktor", "Script Automation", "Cross-platform Mobile"],
      syntax: `// Null Safety
val name: String? = null
val length = name?.length ?: 0

// Data Classes
data class User(
    val id: Int,
    val name: String,
    val email: String
)

// Extension Functions
fun String.isPalindrome(): Boolean {
    return this == this.reversed()
}

// Coroutines
suspend fun fetchUser(id: Int): User {
    return withContext(Dispatchers.IO) {
        api.getUser(id)
    }
}`,
      ecosystem: ["Android SDK", "Ktor", "Jetpack Compose", "Coroutines", "Spring Boot"],
      salary: "₹6L–₹45L+",
      topCompanies: ["Google", "JetBrains", "Netflix", "Grab", "Pinterest"]
    },
    {
      id: "swift",
      name: "Swift",
      icon: "🦅",
      type: "mobile",
      category: ["mobile"],
      tagline: "Apple's powerful language for iOS & macOS",
      accent: "#FA7343",
      tags: ["Compiled", "Type Safe", "iOS", "Protocol Oriented"],
      desc: "Apple's modern, fast, and safe language for iOS, macOS, watchOS, and tvOS development. Replaces Objective-C with cleaner syntax.",
      overview: "Swift was developed by Apple and released in 2014, designed to replace Objective-C. It's fast, modern, and features protocol-oriented programming. SwiftUI enables declarative UI building across all Apple platforms.",
      uses: ["iOS App Development", "macOS Development", "watchOS & tvOS", "Swift on Server", "SwiftUI Cross-platform", "System Utilities"],
      syntax: `// SwiftUI View
struct ContentView: View {
    @State private var count = 0
    
    var body: some View {
        VStack {
            Text("Count: \\(count)")
                .font(.largeTitle)
            Button("Increment") {
                count += 1
            }
        }
    }
}

// Protocols
protocol Drawable {
    func draw() -> String
}

// Optionals
guard let user = currentUser else { return }`,
      ecosystem: ["SwiftUI", "UIKit", "Combine", "XCTest", "Core Data", "ARKit"],
      salary: "₹6L–₹45L+",
      topCompanies: ["Apple", "Lyft", "Robinhood", "Airbnb", "LinkedIn"]
    },
    {
      id: "sql",
      name: "SQL",
      icon: "🗄️",
      type: "data",
      category: ["data", "web"],
      tagline: "Query language every developer must master",
      accent: "#336791",
      tags: ["Declarative", "RDBMS", "Query", "Analytics"],
      desc: "Structured Query Language — the universal language for relational databases. Essential for any backend developer, data analyst, or data engineer.",
      overview: "SQL (Structured Query Language) was developed in the 1970s at IBM and has remained the dominant language for relational data management. Despite being decades old, SQL is essential knowledge for virtually every software developer.",
      uses: ["Database Queries", "Data Analysis & Reporting", "Backend Database Design", "Business Intelligence", "ETL Pipelines", "Data Warehousing"],
      syntax: `-- Complex JOIN
SELECT u.name, COUNT(o.id) AS orders,
       SUM(o.amount) AS total
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id, u.name
HAVING COUNT(o.id) > 5
ORDER BY total DESC;

-- CTE (Common Table Expression)
WITH ranked AS (
  SELECT *, ROW_NUMBER() OVER 
    (PARTITION BY dept ORDER BY salary DESC) AS rn
  FROM employees
)
SELECT * FROM ranked WHERE rn = 1;`,
      ecosystem: ["PostgreSQL", "MySQL", "SQLite", "Redis", "MongoDB", "BigQuery"],
      salary: "₹4L–₹35L+ (Data Engineering: ₹20L+)",
      topCompanies: ["All tech companies", "Analytics firms", "Startups", "Banks"]
    },
    {
      id: "react",
      name: "React",
      icon: "⚛️",
      type: "web",
      category: ["web"],
      tagline: "Meta's UI library that changed frontend forever",
      accent: "#61DAFB",
      tags: ["Library", "Component-Based", "Virtual DOM", "JSX"],
      desc: "Meta's declarative UI library. Component-based, backed by the largest ecosystem, and used by millions of developers worldwide.",
      overview: "React was created by Jordan Walke at Facebook and open-sourced in 2013. Its virtual DOM diffing and component-based architecture revolutionized how web UIs are built. React hooks (2019) further simplified state management.",
      uses: ["Single Page Applications", "Full-Stack (Next.js)", "Progressive Web Apps", "Mobile (React Native)", "Static Sites (Gatsby)", "Interactive Dashboards"],
      syntax: `import { useState, useEffect } from 'react';

// Custom Hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); });
  }, [url]);
  
  return { data, loading };
}

// Component
const UserCard = ({ userId }) => {
  const { data: user, loading } = useFetch(\`/api/users/\${userId}\`);
  if (loading) return <Spinner />;
  return <div className="card">{user.name}</div>;
};`,
      ecosystem: ["Next.js", "Redux", "React Query", "React Router", "Tailwind CSS", "Zustand"],
      salary: "₹5L–₹50L+",
      topCompanies: ["Meta", "Airbnb", "Netflix", "Atlassian", "Almost every startup"]
    },
    {
      id: "dart",
      name: "Dart / Flutter",
      icon: "🐦",
      type: "mobile",
      category: ["mobile", "web"],
      tagline: "Google's cross-platform UI toolkit",
      accent: "#0175C2",
      tags: ["Compiled", "Cross-Platform", "Widget-based", "AOT/JIT"],
      desc: "Dart powers Flutter to build natively compiled apps for mobile, web, and desktop from a single codebase.",
      overview: "Dart was created by Google and released in 2011, but gained massive popularity with Flutter (2018). Flutter's widget-first approach and excellent performance made it the top choice for cross-platform mobile development.",
      uses: ["Cross-platform Mobile Apps", "Web Applications", "Desktop Applications", "Embedded Systems (upcoming)", "Firebase Integration", "Startup MVPs"],
      syntax: `// Flutter Widget
class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  int _counter = 0;
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Text('Count: \$_counter',
          style: TextStyle(fontSize: 24)),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => setState(() => _counter++),
        child: Icon(Icons.add),
      ),
    );
  }
}`,
      ecosystem: ["Flutter", "Firebase", "Riverpod", "Bloc", "GetX", "Dio"],
      salary: "₹5L–₹35L+",
      topCompanies: ["Google", "Alibaba", "BMW", "ByteDance", "Nubank"]
    },
    {
      id: "csharp",
      name: "C#",
      icon: "🔵",
      type: "systems",
      category: ["systems", "web"],
      tagline: "Microsoft's elegant, powerful language",
      accent: "#512BD4",
      tags: [".NET", "OOP", "Enterprise", "Game Dev"],
      desc: "Microsoft's elegant language. Backbone of Unity game engine, enterprise .NET applications, and ASP.NET Core web APIs.",
      overview: "C# was designed by Anders Hejlsberg at Microsoft, first appearing in 2000. It has consistently evolved with features like LINQ, async/await, records, and pattern matching. Primary language for Unity game development.",
      uses: ["Unity Game Development", "ASP.NET Core APIs", "Windows Applications", "Enterprise Software", "Xamarin/MAUI Mobile", "Azure Cloud Services"],
      syntax: `// Records (immutable data)
public record Person(string Name, int Age);

// LINQ
var topStudents = students
    .Where(s => s.GPA > 3.5)
    .OrderByDescending(s => s.GPA)
    .Select(s => new { s.Name, s.GPA })
    .Take(10)
    .ToList();

// Async/Await
public async Task<User> GetUserAsync(int id) {
    using var client = new HttpClient();
    var json = await client.GetStringAsync($"/api/users/{id}");
    return JsonSerializer.Deserialize<User>(json);
}`,
      ecosystem: ["ASP.NET Core", "Entity Framework", "Unity", "MAUI", "Blazor", "Azure SDK"],
      salary: "₹5L–₹45L+",
      topCompanies: ["Microsoft", "Unity", "Ubisoft", "EA Games", "Accenture"]
    }
  ],

  // ========== ROADMAP DATA ==========
  roadmap: [
    {
      salary: "₹5L – ₹8L",
      level: "01",
      title: "Junior Developer",
      color: "#94a3b8",
      desc: "Entry-level positions at service companies, startups, or as freelancers. Focus on core skills and building a portfolio.",
      skills: ["HTML/CSS/JS", "One Backend Language", "Git Basics", "SQL Fundamentals", "REST APIs", "Problem Solving"],
      actions: ["Complete DSA basics", "Build 3 portfolio projects", "Apply to service companies", "Contribute to open source", "Get internship experience"],
      duration: "0-1 year experience",
      companies: ["TCS", "Infosys", "Wipro", "Cognizant", "Small Startups"]
    },
    {
      salary: "₹8L – ₹15L",
      level: "02",
      title: "Mid-Level Developer",
      color: "#00f5ff",
      desc: "2-3 years experience. Working at product companies or better service companies. Have a clear domain specialization.",
      skills: ["React / Angular", "Node.js or Spring Boot", "Database Design", "Docker Basics", "System Design Basics", "Testing"],
      actions: ["Specialize in full-stack/backend/frontend", "Learn cloud basics (AWS/GCP)", "Solve 150+ LeetCode problems", "Build production apps", "Mentor juniors"],
      duration: "1-3 years experience",
      companies: ["Zoho", "Freshworks", "Razorpay", "BYJU's", "Swiggy", "Zomato"]
    },
    {
      salary: "₹15L – ₹25L",
      level: "03",
      title: "Senior Developer",
      color: "#00ff88",
      desc: "Strong engineer with 3-5 years of experience. Can lead small teams, design systems, and own features end-to-end.",
      skills: ["System Design", "Microservices", "Cloud Platforms", "Performance Optimization", "Team Leadership", "DSA Advanced"],
      actions: ["Master system design", "Get cloud certifications", "Lead a team project", "Open source contributions", "Build technical blog", "Solve 300+ LeetCode"],
      duration: "3-5 years experience",
      companies: ["PayPal", "Flipkart", "Ola", "Meesho", "CRED", "Paytm"]
    },
    {
      salary: "₹25L – ₹40L",
      level: "04",
      title: "Staff / Lead Engineer",
      color: "#a855f7",
      desc: "Top-tier engineers who drive technical decisions, mentor teams, and shape architecture across multiple teams.",
      skills: ["Architecture Design", "Tech Strategy", "Cross-team Collaboration", "Performance at Scale", "Distributed Systems", "Security"],
      actions: ["Give conference talks", "Lead architecture decisions", "Mentor senior developers", "Drive engineering culture", "Build internal tools/frameworks"],
      duration: "5-8 years experience",
      companies: ["Microsoft", "Adobe", "Oracle India", "Goldman Sachs", "Uber India", "Amazon"]
    },
    {
      salary: "₹40L – ₹50L+",
      level: "05",
      title: "FAANG / Principal Engineer",
      color: "#ffd700",
      desc: "Elite engineers at top global product companies. Require world-class problem solving, system design, and leadership.",
      skills: ["FAANG-level DSA", "Large-scale System Design", "Research & Innovation", "Executive Communication", "Product Thinking", "Multi-team Ownership"],
      actions: ["Solve LeetCode Hard problems", "Master distributed systems", "Pass FAANG interview loops", "Publish technical papers", "Build products with millions of users"],
      duration: "7+ years / elite skills",
      companies: ["Google", "Meta", "Amazon", "Microsoft India", "Apple India", "Netflix", "Stripe"]
    }
  ],

  // ========== DSA DATA ==========
  dsa: {
    ds: [
      { title: "Arrays & Strings", difficulty: "easy", topics: ["Two Pointers", "Sliding Window", "Prefix Sum", "Kadane's Algorithm", "Matrix Traversal"], desc: "Foundation of all data structures. Master operations, common patterns, and time complexity tradeoffs." },
      { title: "Linked Lists", difficulty: "easy", topics: ["Singly Linked List", "Doubly Linked List", "Fast & Slow Pointers", "Reversal", "Merge Two Lists", "Cycle Detection"], desc: "Dynamic data structure with O(1) insertions. Floyd's cycle detection is a classic problem." },
      { title: "Stacks & Queues", difficulty: "easy", topics: ["Stack Implementation", "Monotonic Stack", "Queue using Stacks", "Min Stack", "Circular Queue", "Deque"], desc: "LIFO and FIFO structures. Monotonic stacks solve many histogram and temperature problems." },
      { title: "Hash Maps & Sets", difficulty: "easy", topics: ["Hash Functions", "Collision Handling", "Two Sum Variants", "Frequency Count", "Anagram Problems", "LRU Cache"], desc: "O(1) average-case lookups. The most commonly used data structure in interview problems." },
      { title: "Trees (Binary)", difficulty: "medium", topics: ["DFS (Pre/In/Post)", "BFS Level Order", "BST Operations", "Lowest Common Ancestor", "Diameter", "Path Sum"], desc: "Hierarchical structures fundamental to databases, file systems, and expression parsing." },
      { title: "Heaps / Priority Queues", difficulty: "medium", topics: ["Min Heap", "Max Heap", "Heapify", "K Largest Elements", "Merge K Lists", "Median Stream"], desc: "Essential for greedy algorithms and problems involving the K-th largest/smallest element." },
      { title: "Graphs", difficulty: "hard", topics: ["BFS/DFS", "Topological Sort", "Dijkstra's", "Floyd-Warshall", "Union-Find", "Bellman-Ford", "Prim's/Kruskal's"], desc: "Most versatile structure. Covers shortest paths, cycle detection, connected components, and more." },
      { title: "Tries (Prefix Trees)", difficulty: "medium", topics: ["Trie Insert/Search", "Auto-Complete", "Word Search", "Longest Common Prefix", "Replace Words"], desc: "Specialized tree for string operations. O(m) search where m is word length." },
      { title: "Segment Trees", difficulty: "hard", topics: ["Range Sum Query", "Range Min/Max", "Lazy Propagation", "Point Update", "Range Update"], desc: "Advanced tree for range queries with O(log n) updates and queries." }
    ],
    algo: [
      { title: "Binary Search", difficulty: "easy", topics: ["Classic Binary Search", "Search in Rotated Array", "First/Last Position", "Search 2D Matrix", "Kth Smallest", "Peak Element"], desc: "Reduce O(n) search to O(log n). Learn to apply on answer space, not just sorted arrays." },
      { title: "Sorting Algorithms", difficulty: "medium", topics: ["Merge Sort", "Quick Sort", "Heap Sort", "Counting Sort", "Radix Sort", "Dutch Flag Problem"], desc: "Master the 'divide & conquer' sorting algorithms. Merge Sort is key for linked list problems." },
      { title: "Dynamic Programming", difficulty: "hard", topics: ["0/1 Knapsack", "LCS / LIS", "DP on Trees", "Bitmask DP", "Interval DP", "State Compression"], desc: "The hardest and most rewarding technique. Transform exponential recursion into polynomial DP." },
      { title: "Greedy Algorithms", difficulty: "medium", topics: ["Activity Selection", "Fractional Knapsack", "Job Scheduling", "Huffman Coding", "Jump Game", "Gas Station"], desc: "Make locally optimal choices that lead to globally optimal solutions." },
      { title: "Backtracking", difficulty: "medium", topics: ["N-Queens", "Sudoku Solver", "Permutations", "Combinations", "Word Search", "Phone Number Letters"], desc: "Explore all possibilities and backtrack when a solution path fails." },
      { title: "Divide & Conquer", difficulty: "medium", topics: ["Merge Sort", "Quick Select", "Closest Pair", "Strassen Matrix", "FFT Basics"], desc: "Break problems into subproblems, solve recursively, combine results." }
    ],
    patterns: [
      { title: "Two Pointers", difficulty: "easy", topics: ["Container With Most Water", "3Sum", "Trapping Rain Water", "Palindrome Check", "Remove Duplicates"], desc: "Use two indices moving toward each other or in same direction to eliminate nested loops." },
      { title: "Sliding Window", difficulty: "easy", topics: ["Maximum Subarray of Size K", "Longest Substring Without Repeat", "Minimum Window Substring", "Fruit Into Baskets"], desc: "Maintain a window over a sequence, expanding and contracting as conditions are met." },
      { title: "Fast & Slow Pointers", difficulty: "medium", topics: ["Linked List Cycle", "Middle of Linked List", "Happy Number", "Rearrange Linked List"], desc: "Two pointers moving at different speeds. Detects cycles in O(1) space." },
      { title: "BFS / Level Order", difficulty: "medium", topics: ["Tree BFS", "Zero-One BFS", "Multi-source BFS", "Word Ladder", "Rotting Oranges", "Shortest Path"], desc: "Explore graph level by level. Guaranteed shortest path in unweighted graphs." },
      { title: "Merge Intervals", difficulty: "medium", topics: ["Merge Overlapping", "Insert Interval", "Meeting Rooms", "Task Scheduler", "Employee Free Time"], desc: "Sort intervals by start time, then merge overlapping ones. Classic scheduling pattern." },
      { title: "Cyclic Sort", difficulty: "easy", topics: ["Missing Number", "Find All Duplicates", "First Missing Positive", "Corrupt Pair"], desc: "When array contains numbers in range [1, n], use cyclic sort to place each at its index." }
    ]
  },

  // ========== COMPANIES DATA ==========
  companies: [
    { name: "Google India", logo: "🔵", type: "FAANG", color: "#4285F4", salary: "₹35L – ₹1Cr+", focus: "Strong DSA, System Design, Behavioral rounds. Highly competitive with global bar.", tags: ["SDE-1","SDE-2","L3","L4","L5"] },
    { name: "Microsoft India", logo: "🪟", type: "FAANG", color: "#00A4EF", salary: "₹25L – ₹80L+", focus: "Design questions, DSA, and behavioral alignment to growth mindset principles.", tags: ["SDE","SDE-2","Principal","Azure","M365"] },
    { name: "Amazon India", logo: "📦", type: "FAANG", color: "#FF9900", salary: "₹25L – ₹70L+", focus: "Leadership Principles are crucial. Bar raiser rounds. DSA + LP behavioral questions.", tags: ["SDE-1","SDE-2","SDE-3","AWS","Prime"] },
    { name: "Meta India", logo: "🌐", type: "FAANG", color: "#0082FB", salary: "₹30L – ₹90L+", focus: "Heavy on coding speed and system design. E5+ roles are extremely competitive.", tags: ["E3","E4","E5","E6","WhatsApp","IG"] },
    { name: "Flipkart", logo: "🛒", type: "Product", color: "#047BD5", salary: "₹15L – ₹60L+", focus: "Strong DSA + system design. Commerce scale systems knowledge is a plus.", tags: ["SDE-1","SDE-2","SDE-3","Payments","Supply Chain"] },
    { name: "Razorpay", logo: "⚡", type: "Startup", color: "#3395FF", salary: "₹18L – ₹55L+", focus: "Deep understanding of payments, DSA, and system design for high-throughput systems.", tags: ["Backend","Infra","Platform","Payments","Fintech"] },
    { name: "Zomato", logo: "🍽️", type: "Unicorn", color: "#E23744", salary: "₹15L – ₹50L+", focus: "Location-based systems, logistics optimization, real-time data processing skills valued.", tags: ["Backend","Data","Platform","Growth","Ads"] },
    { name: "Swiggy", logo: "🛵", type: "Unicorn", color: "#FC8019", salary: "₹15L – ₹48L+", focus: "Real-time systems, microservices, and data pipeline experience important.", tags: ["SDE","Infra","Data Eng","ML Eng","Mobile"] },
    { name: "CRED", logo: "💳", type: "Startup", color: "#1C1C1E", salary: "₹20L – ₹60L+", focus: "Selective hiring. Fintech, clean architecture, and product thinking highly valued.", tags: ["Backend","iOS","Android","Data","Fintech"] },
    { name: "Paytm", logo: "💰", type: "Fintech", color: "#002970", salary: "₹10L – ₹40L+", focus: "Payments infrastructure, UPI scale, high-concurrency backend systems.", tags: ["Backend","Android","Payments","Data"] },
    { name: "Meesho", logo: "🛍️", type: "Unicorn", color: "#9E2FBF", salary: "₹18L – ₹50L+", focus: "E-commerce at scale, tier-2/3 market understanding, supply chain tech.", tags: ["Backend","Frontend","Data","Growth","Seller"] },
    { name: "Ola / Ola Electric", logo: "🚖", type: "Unicorn", color: "#31A24C", salary: "₹12L – ₹45L+", focus: "Mobility, maps, real-time logistics, and EV IoT systems.", tags: ["Backend","Maps","IoT","EV Tech","Platform"] },
    { name: "Zerodha", logo: "📈", type: "Fintech", color: "#387ED1", salary: "₹15L – ₹45L+", focus: "High-frequency trading systems, low-latency, Go/Python, financial data.", tags: ["Backend","Go","Python","Trading","Platform"] },
    { name: "PhonePe", logo: "📱", type: "Fintech", color: "#5f259f", salary: "₹15L – ₹50L+", focus: "UPI payments at scale, distributed systems, Java backend expertise.", tags: ["SDE","Infra","Data","Payments","Spring Boot"] },
    { name: "Freshworks", logo: "🍀", type: "SaaS", color: "#2C5F2E", salary: "₹10L – ₹40L+", focus: "SaaS products, B2B engineering, multi-tenant architecture.", tags: ["SDE","Frontend","Backend","DevOps","CRM"] },
    { name: "Zoho", logo: "🔩", type: "SaaS", color: "#FF6835", salary: "₹5L – ₹25L+", focus: "Good for freshers. Wide product range. Training provided. Values long-term commitment.", tags: ["SDE","Frontend","Backend","QA","DevOps"] },
    { name: "Goldman Sachs", logo: "🏦", type: "Finance", color: "#7399C6", salary: "₹20L – ₹60L+", focus: "Strong DSA, systems programming, finance domain knowledge, risk management.", tags: ["SDE","Quant","C++","Risk","Trading"] },
    { name: "JP Morgan India", logo: "🏛️", type: "Finance", color: "#003087", salary: "₹18L – ₹55L+", focus: "FinTech, blockchain, Python, and strong software engineering fundamentals.", tags: ["SDE","Data","ML","Blockchain","Risk"] },
    { name: "Uber India", logo: "🚗", type: "Product", color: "#000000", salary: "₹25L – ₹70L+", focus: "Maps, routing algorithms, real-time systems, and global scale infrastructure.", tags: ["SDE","Platform","Maps","Infra","ML"] },
    { name: "InMobi", logo: "📊", type: "AdTech", color: "#FF6B00", salary: "₹12L – ₹40L+", focus: "Ad tech, DSP/SSP systems, machine learning, big data processing.", tags: ["Backend","ML","Data","Mobile","AdTech"] }
  ],

  // ========== HACKATHONS DATA ==========
  hackathons: [
    { name: "Smart India Hackathon (SIH)", icon: "🇮🇳", org: "Govt. of India / AICTE", type: "india", prize: "₹1L – ₹5L per team", desc: "World's biggest hackathon. Problem statements from central government ministries. Software and hardware editions.", url: "sih.gov.in" },
    { name: "HackWithInfy", icon: "🔵", org: "Infosys", type: "india", prize: "Cash prizes + PPO opportunity", desc: "Infosys annual coding challenge for engineering students. Winners get Pre-Placement Offers.", url: "hackwithinfy.infosys.com" },
    { name: "Flipkart Grid", icon: "🛒", org: "Flipkart", type: "india", prize: "Internship + ₹1L+ prizes", desc: "Annual engineering challenge by Flipkart across software engineering, ML, and UI/UX tracks.", url: "unstop.com/flipkart-grid" },
    { name: "HackON with Amazon", icon: "📦", org: "Amazon India", type: "india", prize: "Internship + Cash prizes", desc: "Amazon's flagship hackathon. Real-world AWS problem statements. Great for cloud + backend.", url: "amazon.in/hackathon" },
    { name: "PayPal Hack a Return", icon: "💳", org: "PayPal India", type: "india", prize: "₹2L+ prize pool", desc: "Fintech hackathon focusing on payments innovation, fraud detection, and financial inclusion.", url: "paypal.com/hackathon" },
    { name: "Deloitte Intellithon", icon: "🏢", org: "Deloitte", type: "india", prize: "Pre-Placement Offer + cash", desc: "National-level hackathon testing problem-solving in analytics, AI, and technology consulting.", url: "deloitte.com/intellithon" },
    { name: "Myntra HackerRamp", icon: "👗", org: "Myntra", type: "india", prize: "Internship + ₹1L prizes", desc: "Fashion tech hackathon focusing on recommendations, visual search, and user experience.", url: "myntra.com/hackerramp" },
    { name: "ETHIndia", icon: "⛓️", org: "ETHIndia / Devfolio", type: "india", prize: "$100K+ in bounties", desc: "India's largest Ethereum hackathon. Top Web3 event with massive sponsor prize pool.", url: "ethindia.co" },
    { name: "HackJNU / HackDTU", icon: "🎓", org: "University Consortia", type: "india", prize: "₹50K – ₹2L prizes", desc: "Top college-organized hackathons with large participation, strong alumni networks, and industry sponsors.", url: "devpost.com" },
    { name: "CodeJam (Google)", icon: "🌐", org: "Google", type: "global", prize: "Up to $15,000 USD", desc: "Google's premier competitive programming contest. Algorithm-heavy. World Finalists compete in person.", url: "codingcompetitions.withgoogle.com" },
    { name: "Facebook Hacker Cup", icon: "💡", org: "Meta", type: "global", prize: "Up to $10,000 USD", desc: "Meta's annual algorithmic programming contest. 4 rounds with increasing difficulty.", url: "facebook.com/hackercup" },
    { name: "Microsoft Imagine Cup", icon: "💻", org: "Microsoft", type: "global", prize: "$100,000 USD + Azure credits", desc: "Global student competition with world finals. Covers AI, sustainability, and gaming.", url: "imaginecup.microsoft.com" },
    { name: "MIT Reality Hack", icon: "🥽", org: "MIT Media Lab", type: "global", prize: "XR hardware + $25K prizes", desc: "World's premier XR/AR/VR hackathon, hosted at MIT. Focus on spatial computing and XR innovation.", url: "mitrealityhack.com" },
    { name: "HackMIT", icon: "🎩", org: "MIT Students", type: "global", prize: "$30K+ in prizes", desc: "One of the most prestigious student hackathons globally. 1000+ hackers, 36 hours.", url: "hackmit.org" },
    { name: "Junction Helsinki", icon: "🇫🇮", org: "Junction", type: "global", prize: "€30K+ prizes", desc: "Europe's largest hackathon. 1500+ hackers, 48 hours, multiple technology tracks.", url: "hackjunction.com" },
    { name: "Codeforces Rounds", icon: "🏆", org: "Codeforces", type: "global", prize: "Rating + occasional prizes", desc: "Biweekly competitive programming contests. Essential platform for interview preparation.", url: "codeforces.com" },
    { name: "LeetCode Contests", icon: "🧩", org: "LeetCode", type: "global", prize: "LeetCoin + Ranking", desc: "Weekly and biweekly contests with 4 problems. Direct preparation for FAANG interviews.", url: "leetcode.com/contest" },
    { name: "Hack the North", icon: "🇨🇦", org: "University of Waterloo", type: "global", prize: "CAD $50K+ in prizes", desc: "Canada's biggest hackathon at UWaterloo. Top student teams from across North America.", url: "hackthenorth.com" }
  ],

  // ========== INTERVIEW QUESTIONS ==========
  interviews: {
    technical: [
      { title: "OOP Concepts", difficulty: "easy", questions: ["Explain the 4 pillars of OOP", "What is polymorphism? Types?", "Difference between abstract class and interface", "What is method overloading vs overriding?", "Explain SOLID principles with examples", "What is composition over inheritance?"] },
      { title: "Data Structures", difficulty: "medium", questions: ["Implement an LRU Cache from scratch", "How does HashMap internally work in Java?", "When to use ArrayList vs LinkedList?", "Explain amortized time complexity", "What is a self-balancing BST? When to use?", "How does HashMap handle hash collisions?"] },
      { title: "OS Concepts", difficulty: "medium", questions: ["What is a deadlock? How to prevent it?", "Explain process vs thread vs goroutine", "What is virtual memory and paging?", "Explain context switching overhead", "What is a race condition? How to avoid?", "Explain mutex vs semaphore vs monitor"] },
      { title: "Networking Basics", difficulty: "medium", questions: ["Explain the TCP three-way handshake", "HTTP vs HTTPS — how SSL/TLS works", "What happens when you type google.com?", "REST vs GraphQL vs gRPC tradeoffs", "Explain DNS resolution in detail", "What is load balancing? Types?"] },
      { title: "Database Design", difficulty: "medium", questions: ["ACID properties with examples", "Explain database indexing and types", "When to use SQL vs NoSQL?", "What is database normalization (1NF-3NF)?", "Explain optimistic vs pessimistic locking", "How to design a rate limiter schema?"] },
      { title: "Cloud / DevOps", difficulty: "hard", questions: ["Explain container vs VM differences", "How does Kubernetes handle failover?", "What is CI/CD? Describe your pipeline", "Explain blue-green vs canary deployments", "How does serverless architecture work?", "What is Infrastructure as Code (IaC)?"] }
    ],
    hr: [
      { title: "Tell Me About Yourself", difficulty: "easy", questions: ["How to craft a 2-minute professional pitch", "Highlighting technical projects effectively", "Connecting your background to the role", "Demonstrating growth mindset", "Example: 'In my X years of experience...'"] },
      { title: "Strengths & Weaknesses", difficulty: "easy", questions: ["How to pick a genuine strength with evidence", "Framing weakness as a growth story (not a disguised strength)", "Why 'I work too hard' is the WRONG answer", "Examples: 'I struggle with delegation, and here's how I address it...'", "Show self-awareness + concrete improvement steps"] },
      { title: "Situational Questions (STAR)", difficulty: "medium", questions: ["Tell me about a time you failed. What did you learn?", "Describe handling a conflict with a colleague", "Give an example of handling tight deadlines", "Tell me about a time you showed initiative", "Describe working with an ambiguous problem", "How did you handle a disagreement with your manager?"] },
      { title: "Why This Company?", difficulty: "easy", questions: ["Research the company's mission, products, and culture", "Align your values with company values", "Reference specific products, features, or initiatives", "Avoid generic answers ('because you're a great company')", "Mention specific team/role aspects that excite you"] },
      { title: "Career Goals", difficulty: "medium", questions: ["Where do you see yourself in 5 years?", "Why are you leaving your current job?", "What do you want to learn in this role?", "What does success look like for you?", "How does this role fit your long-term goals?"] }
    ],
    system: [
      { title: "Design URL Shortener", difficulty: "medium", questions: ["Estimate QPS: 100M URLs/day = ~1160 writes/sec", "Base62 encoding for short codes (7 chars = 62^7 URLs)", "Redis caching for read-heavy workload", "Database: write to SQL, read via cache", "Handle redirects with HTTP 301/302", "Rate limiting per user IP to prevent abuse"] },
      { title: "Design WhatsApp", difficulty: "hard", questions: ["WebSocket connections for real-time messaging", "Message queue (Kafka) for reliable delivery", "End-to-end encryption with Signal Protocol", "Presence service for online/offline status", "Media storage with CDN distribution", "Fan-out service for group messages"] },
      { title: "Design Netflix", difficulty: "hard", questions: ["CDN for global video delivery (adaptive bitrate)", "Microservices: recommendation, search, player, billing", "Apache Kafka for event streaming", "Cassandra for watch history at massive scale", "Chaos Engineering with Chaos Monkey", "A/B testing infrastructure for recommendations"] },
      { title: "Design Rate Limiter", difficulty: "medium", questions: ["Token bucket vs leaky bucket vs sliding window", "Distributed rate limiting with Redis", "Header response: X-RateLimit-Remaining", "Rate limit by user, IP, or API key", "Eventual consistency tradeoffs in distributed systems", "Response codes: 429 Too Many Requests"] },
      { title: "Design Twitter Feed", difficulty: "hard", questions: ["Fan-out on write vs fan-out on read strategy", "Timeline: pre-computed vs on-demand per user", "Celeb users (10M+ followers) handled differently", "Redis sorted sets for timeline caching", "Sharding user data by user_id", "Trending topics with time-decay scoring"] }
    ],
    coding: [
      { title: "Array Problems", difficulty: "easy", questions: ["Two Sum (LeetCode #1)", "Best Time to Buy/Sell Stock (#121)", "Maximum Subarray — Kadane's (#53)", "Move Zeroes (#283)", "Product of Array Except Self (#238)", "Find Duplicate Number (#287)"] },
      { title: "String Problems", difficulty: "easy", questions: ["Valid Anagram (#242)", "Longest Palindromic Substring (#5)", "Minimum Window Substring (#76)", "Group Anagrams (#49)", "Encode/Decode Strings (#271)", "Longest Substring Without Repeating Chars (#3)"] },
      { title: "Tree Problems", difficulty: "medium", questions: ["Maximum Depth of Binary Tree (#104)", "Binary Tree Level Order Traversal (#102)", "Validate Binary Search Tree (#98)", "Serialize and Deserialize Binary Tree (#297)", "Lowest Common Ancestor (#236)", "Kth Smallest Element in BST (#230)"] },
      { title: "DP Problems", difficulty: "hard", questions: ["Coin Change (#322)", "Longest Common Subsequence (#1143)", "Word Break (#139)", "Edit Distance (#72)", "House Robber II (#213)", "Interleaving String (#97)"] }
    ]
  }
};
