const students = [
  {
    name: "OBAYOMI JOSHUA AYOTOMIWA",
    matric: "CPE/2022/1055",
    photo: "joshua.jpg",
    folder: "joshua",
    titles: ["Bouncing Ball", "Car Rotating", "Handicap", "Moon", "Mouse", "Moving Car"],
    first: [1, 4, 6],
    bio: `I’m a 500-level Computer Engineering student passionate about building intelligent, connected systems where hardware meets software. My core interests span embedded systems, digital communication, biomedical engineering, and machine learning—designing smart, real-world solutions that sense, transmit, and act on critical data.

Right now, I am focused on my final-year engineering project, integrating embedded hardware, reliable communication protocols, and machine learning to build a responsive assistive system.

Across my academic and hands-on technical journey, I’ve enjoyed taking ideas from low-level logic and signal transmission all the way to working prototypes. I thrive on solving complex engineering problems with clean, resilient, and practical system architectures.

Whether you’re looking to collaborate on health-tech, embedded AI, or connected hardware projects, feel free to reach out.`,
  },
  {
    name: "FOLARIN ABDULMALIK OLAMILEKAN",
    matric: "CPE/2022/1046",
    photo: "folarin.jpg",
    folder: "folarin",
    titles: ["Ball", "Car Rotating", "Car", "Cat and Mouse", "Handicap", "Moon"],
    first: [1, 3, 6],
  },
  {
    name: "HASSAN ABDULALEEM OLUSEGUN",
    matric: "CPE/2022/1047",
    photo: "hassan.jpg",
    folder: "hassan",
    titles: ["Bouncing Ball", "Car Rotating", "Cat Looking at a Mouse", "Moving Car", "Moving Moon", "No Leg"],
    first: [1, 4, 5],
  },
  {
    name: "BALOGUN SAMUEL OLUWATOMI",
    matric: "CPE/2021/1022",
    photo: "samuel.jpg",
    folder: "samuel",
    titles: ["Cat and Mouse", "Rotating Car", "Handicap", "Bouncing Ball", "Moving Car", "Moving Moon"],
    first: [4, 5, 6],
  },
  {
    name: "ALUKO PROMISE OLAJUWON",
    matric: "CPE/2022/1100",
    photo: "promise.jpg",
    folder: "promise",
    titles: ["Bouncing Ball 3D", "Moving Car 3D", "Moving Moon 3D", "Cat and Mouse 3D", "Rotating Car 3D", "Dramatic Conversation 3D"],
    first: [1, 2, 3],
    bio: `My name is Aluko Promise Olajuwon, a 500 level Computer Engineering student at the Federal University Oye-Ekiti (FUOYE), with a strong passion for technology, software development, cybersecurity, and digital innovation.

I am particularly interested in web development, programming, and exploring how technology can be used to solve real world problems. I also have a growing interest in building digital products, developing innovative solutions, and understanding the systems and technologies that power our digital world.

Beyond academics, I have been developing practical skills in web technologies, e-commerce development, and technical problem solving. I enjoy exploring new ideas, taking on challenging projects, and continuously improving my abilities through hands on learning and experimentation.

My goal is to grow into a versatile technology professional, deepen my expertise in software engineering and cybersecurity, and contribute to projects that transform creative ideas into meaningful, functional solutions.`,
  },
  {
    name: "ADEGBITE WISDOM",
    matric: "CPE/2022/1004",
    photo: "wisdom.jpg",
    folder: "wisdom",
    titles: ["Ball", "Car on the Same Axis", "Car", "Cat and Mouse", "Handicap", "Moon"],
    first: [1, 3, 6],
  },
  {
    name: "AKINYEMI OLASUPO REUBEN",
    matric: "CPE/2021/1013",
    photo: "reuben.jpg",
    folder: "reuben",
    titles: ["Cat and Mouse", "Car Rotation", "Conversation (Crutches)", "Ball Bounce", "Car To and Fro", "Earth and Moon"],
    first: [4, 5, 6],
  },
  {
    name: "OMOBOYOWA OLUWAFERANMI PETER",
    matric: "CPE/2022/1080",
    photo: "peter.jpg",
    folder: "peter",
    titles: ["Bouncing Ball", "Car Rotating", "Cat Looking at a Mouse", "Moving Car", "Moving Moon", "No Leg"],
    first: [1, 4, 5],
  },
  {
    name: "JOSHUA TOLUWALASE DAVID",
    matric: "CPE/2021/1037",
    photo: "david.jpg",
    folder: "david",
    titles: ["Bouncing Ball", "Moving Car", "Cat and Mouse", "Bouncing Moon", "Car Rotation", "Dramatic Conversation"],
    first: [1, 2, 4],
  },
  {
    name: "OYALEGAN GBOLAHAN BENEDICT",
    matric: "CPE/2021/1063",
    photo: "benedict.jpg",
    folder: "benedict",
    titles: ["Bouncing Ball", "Car Rotating", "Cat and Mouse", "Dramatic Conversation", "Moving Car", "Moving Moon"],
    first: [1, 5, 6],
  },
  {
    name: "ADEDAYO AYOMIDE EMMANUEL",
    matric: "CPE/2022/1098",
    photo: "ayomide.jpg",
    folder: "ayomide",
    titles: ["Moving Car", "Moon Orbiting Earth", "Bouncing Ball", "Cat and Mouse", "Rotating Car", "Dramatic Conversation"],
    first: [1, 2, 3],
  },
  {
    name: "FAMILONI SAMUEL OLUWADUNSIN",
    matric: "CPE/2022/1043",
    photo: "familoni.jpg",
    folder: "familoni",
    titles: ["Bouncing Ball", "Moving Car", "Moon", "Cat and Mouse", "Rotating Car", "Dramatic Conversation"],
    first: [1, 2, 3],
  },
  {
    name: "EZE JOHN IFEANYICHUKWU",
    matric: "CPE/2022/1042",
    photo: "john.jpg",
    folder: "john",
    titles: ["Cat and Mouse", "Rotating Car", "Dramatic Robot Conversation", "Bouncing Ball", "Moving Moon", "Moving Car"],
    first: [4, 5, 6],
  },
  {
    name: "UKONU EBUBE DELIGHT",
    matric: "CPE/2021/1071",
    photo: "ebube.jpg",
    folder: "ebube",
    titles: ["Car Rotating", "Cat and Mouse", "Dramatic Conversation"],
    first: [],
  },
  {
    name: "ADEOSUN MAYOWA ELIZABETH",
    matric: "CPE/2021/1073",
    photo: "mayowa.jpg",
    folder: "mayowa",
    titles: ["Cat and Mouse", "Rotating Car", "Dramatic Conversation"],
    first: [],
  },
  {
    name: "AKANBI YUSUF TAIWO",
    matric: "CPE/2022/1108",
    photo: "yusuf.jpg",
    folder: "yusuf",
    titles: ["Cat and Mouse", "Rotating Car", "Bouncing Ball", "Moving Car", "Moving Moon"],
    first: [3, 4, 5],
    bio: `My name is Akanbi Yusuf Taiwo, a Computer Engineering student at the Federal University Oye-Ekiti. I am passionate about technology, innovation, and personal development. I am a goal-oriented individual who enjoys learning new things, exploring creative ideas, and developing skills that will help me grow both personally and professionally. I aspire to become a successful engineer and make meaningful contributions to the world through technology.`,
  },
];