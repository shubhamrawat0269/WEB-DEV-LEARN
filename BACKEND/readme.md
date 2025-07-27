## Mastering backend is not about creating api's . You need to go in depth of how backend actual function behind the scene.

### Course is divided into three major phases :--

1. Laying a strong foundation
  - Basics of Frontend
  - Javascript knowledge.
  - Basics of Terminal
    - CLI vs GUI  
    - Shell vs Terminal
    - Bash Shell & .bashrc
    - Editors (nano, vim)
    - Basic Commands - c, ls, pwd, touch etc.
    - Shebang
  - Basics of OS
    - OS, Kernel, Process, Thread.
    - Concurrency vs Parallelism.
    - File System, Path System, Environment variables.
    - File Permissions.
  - Fundamentals of node.js
    - module system of node.js
    - module wrapper function
    - npm vs npx (javascript file)
    - package.json vs package-lock.json
    - CLI vs Library packages, local vs global packages
    - fs module (learn all file operations)
  - Data Reperesentation in Computers
    - Number System (Decimal, Octal, hex, binary)
    - Character Sets & Character Encodings (ASCII, Unicode, UTF-8)
    - BOM & Endianness (Little-Endian & Big-Endian)
  - Working with Binary Data in JS & Node.js
    - ArrayBuffers
    - DataView
    - TypedArrays (uint8Array, uint16Array)
    - Node.js Buffers
  - Event-Driven Architecture & EventEmitter Class
    - I/O Operation 
    - Async I/O 
    - EDA
    - EventEmitter Class
  - Handling Large Data Transfers with Streams
    - Readable & Writable Streams
    - Duplex & Transform Streams
    - Handling Backpressure
    - Piping & Pipeline
    - Streams in Browser
  - Basics of Computer Networking
    - History of Internet & Networking
    - Networking Devices (Repeater, Hubs, Swithes, Router)
    - Type of networks - LAN,MAN,WAN
    - IP Address (IPv4 & IPv6)
    - Static vs Dynamic & Private vs Public IP Address.
    - Make your laptop a pulic server
    - DNS and DNS Servers
    - Port Number, Network Interface, MAC Address, Firewall
    - OSI Model & TCP & IP Model 
    - Network Topologies
    - TCP & UDP Protocols
    - SSH, SCP
    - Get an EC2 instance on AWS and deploy a public onto it.

  - Making Networking Applications using Core Nodejs
    - Create UDP & TCP Servers & Clients (dgram & net module).
    - Understand Socket communication in TCP & UDP.
    - Transfer Files using TCP & UDP.
    - Make HTTP server using net modules and make it talk with the browser.
    - Implement file downliad and upload using net module.
    - Learn HTTP in detail { Request, Response, statusCode}
    - Make a CRUD API using 'http' module.
  
  Project :--> Create a project for static file serve using streams similar to Go Live Server.

2. Building Production Ready Robust Apps
  - Make Restful CRUD APIs with Express
    - Routing & Middlewares
    - Principles of REST API
    - CORS
    - Make a REST API with CRUD Functionality
  
  - Using Databases for Persistent Data Storage
    - SQL vs NoSQL Databases
    - Learn Fundamentals of MongoDB.
    - Collections & Documents
    - CRUD Operations
    - Query Data
    - Database Management (Creating & Dropping DB & Collection)
    - Indexing
    - Relationships
    - Mongoose ORM for Schema Based Data Management
  
  - Improve your code with MVC Architecture
    - Learn about MVC and it's benifits
    - Learn little bit about a templating engine (EJS).
  
  - Session Management
    - Login and Signup
    - Authentication & Authorization
    - JWT & Cookies
    - Login with Social Media

  - Make you App Secure
    - Learn about Common Security Threats and Attacks
    - XSS, CSRF, SQL Injection
    - Rate Limiting & Throttling
    - Use Environment Variables for Sensitive Coordination
  
  - Deployment & CI/CD
    - Take an EC2 server on AWS & serverless
    - Setup the server for nodejs app
    - Containerization with Docker
    - Manage Node.js Processes with PM2
    - CI/CD Pipeline setup
  
  Project :--> You can create a social media App, e commerce app
  
3. Mastering Advanced Concepts

  - Nodejs Internal Workings
    - V8 engine
    - libur and async I/O
    - Thread pool
    - Event loop
    - Garbage Collection in V8
  
  - Child Processes : unlocking node.js efficiency
    - Create and manage child processes
    - learn exec and spawn methods
    - use child process for CPU intensive tasks
  
  - Scaling Node.js Apps with Clustering and load Balancing
    - Learn about the cluster module and create a basic cluster
    - setup nginx as a reserve proxy and load balancer
    - combine clustering with load balancing
  
  - Implementing compression in our app
    - Take an overview of popular compression algorithms
    - use zlib module for compression
    - balance compression efficiency with performance
  
  - Multithreading in node.js
    - Learn about single-threaded & multi-threaded environment
    - use 'worker threads' module for creating multiple threads
    - handling deadlocks
    - sharing memory between threads.
  
  - Encryption & Cryptography
    - learn about hasing and hashing algorithms
    - symmetric and asymetric encryption
    - use crypto module for encryption
    - generating & managing keys
    - implementing https in nodjs
    - using certificates for secure data transmission
  
  - Real time communication
    - learn websocket protocol
    - use 'ws' module and create a chat app
    - use webhook for notification
    
    Project : --> you can create Video Streaming Platform like youtube.

  
