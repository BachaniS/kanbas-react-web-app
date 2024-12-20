const modules = [
    {
    _id: "M101",
    name: "Introduction to Rocket Propulsion",
    description: "Basic principles of rocket propulsion and rocket engines.",
    course: "RS101",
    lessons: [
      {
        _id: "L101",
        name: "History of Rocketry",
        description: "A brief history of rocketry and space exploration.",
        module: "M101",
      },
      {
        _id: "L102",
        name: "Rocket Propulsion Fundamentals",
        description: "Basic principles of rocket propulsion.",
        module: "M101",
      },
      {
        _id: "L103",
        name: "Rocket Engine Types",
        description: "Overview of different types of rocket engines.",
        module: "M101",
      },
    ],
  },
  {
    _id: "M102",
    name: "Fuel and Combustion",
    description:
      "Understanding rocket fuel, combustion processes, and efficiency.",
    course: "RS101",
    lessons: [
      {
        _id: "L201",
        name: "Rocket Fuel",
        description: "Overview of different types of rocket fuels.",
        module: "M102",
      },
      {
        _id: "L202",
        name: "Combustion Processes",
        description: "Understanding combustion processes and efficiency.",
        module: "M102",
      },
      {
        _id: "L203",
        name: "Combustion Instability",
        description: "Understanding combustion instability and mitigation.",
        module: "M102",
      },
    ],
  },
  {
    _id: "M103",
    name: "Nozzle Design",
    description:
      "Principles of rocket nozzle design and performance optimization.",
    course: "RS101",
    lessons: [
      {
        _id: "L301",
        name: "Nozzle Design",
        description: "Overview of different types of rocket nozzles.",
        module: "M103",
      },
      {
        _id: "L302",
        name: "Nozzle Performance",
        description: "Understanding nozzle performance and efficiency.",
        module: "M103",
      },
      {
        _id: "L303",
        name: "Nozzle Optimization",
        description: "Optimizing nozzle design for specific applications.",
        module: "M103",
      },
    ],
  },
  {
    _id: "M201",
    name: "Fundamentals of Aerodynamics",
    description: "Basic aerodynamic concepts and fluid dynamics principles.",
    course: "RS102",
    lessons: [
      {
        _id: "L401",
        name: "Introduction to Aerodynamics",
        description:
          "Basic principles of aerodynamics and its importance in flight.",
        module: "M201",
      },
      {
        _id: "L402",
        name: "Lift and Drag",
        description:
          "Understanding lift, drag, and the forces acting on an aircraft.",
        module: "M201",
      },
      {
        _id: "L403",
        name: "Fluid Dynamics in Aerodynamics",
        description:
          "Overview of fluid dynamics principles applied to aerodynamics.",
        module: "M201",
      },
    ],
  },
  {
    _id: "M202",
    name: "Subsonic and Supersonic Flow",
    description: "Understanding subsonic and supersonic aerodynamic behaviors.",
    course: "RS102",
    lessons: [
      {
        _id: "L404",
        name: "Subsonic Flow Principles",
        description: "Basic principles of subsonic aerodynamic flow.",
        module: "M202",
      },
      {
        _id: "L405",
        name: "Supersonic Flow Principles",
        description: "Understanding the behavior of supersonic flow in flight.",
        module: "M202",
      },
      {
        _id: "L406",
        name: "Shock Waves and Compressibility",
        description:
          "Understanding shock waves and the effects of compressibility in supersonic flight.",
        module: "M202",
      },
    ],
  },
  {
    _id: "M203",
    name: "Aerodynamic Heating",
    description: "Study of aerodynamic heating and thermal protection systems.",
    course: "RS102",
    lessons: [
      {
        _id: "L407",
        name: "Introduction to Aerodynamic Heating",
        description:
          "Basic principles of aerodynamic heating in high-speed flight.",
        module: "M203",
      },
      {
        _id: "L408",
        name: "Thermal Protection Systems",
        description:
          "Overview of thermal protection systems for spacecraft and high-speed vehicles.",
        module: "M203",
      },
      {
        _id: "L409",
        name: "Heat Transfer Mechanisms",
        description:
          "Understanding the mechanisms of heat transfer in high-speed aerodynamic conditions.",
        module: "M203",
      },
    ],
  },
  {
    _id: "M301",
    name: "Spacecraft Structural Design",
    description:
      "Fundamentals of designing spacecraft structures and materials selection.",
    course: "RS103",
    lessons: [
      {
        _id: "L501",
        name: "Introduction to Spacecraft Structures",
        description: "Basic principles of spacecraft structural design.",
        module: "M301",
      },
      {
        _id: "L502",
        name: "Materials for Spacecraft",
        description: "Overview of materials used in spacecraft design.",
        module: "M301",
      },
      {
        _id: "L503",
        name: "Structural Load Analysis",
        description:
          "Understanding structural loads and their impact on spacecraft design.",
        module: "M301",
      },
    ],
  },
  {
    _id: "M302",
    name: "Orbital Mechanics",
    description: "Understanding orbital dynamics and mission planning.",
    course: "RS103",
    lessons: [
      {
        _id: "L504",
        name: "Introduction to Orbital Mechanics",
        description:
          "Basic principles of orbital mechanics and space flight dynamics.",
        module: "M302",
      },
      {
        _id: "L505",
        name: "Orbital Maneuvers",
        description: "Understanding orbital maneuvers and mission planning.",
        module: "M302",
      },
      {
        _id: "L506",
        name: "Interplanetary Trajectories",
        description: "Study of interplanetary trajectories and mission design.",
        module: "M302",
      },
    ],
  },
  {
    _id: "M303",
    name: "Spacecraft Systems Engineering",
    description: "Overview of spacecraft systems and subsystems engineering.",
    course: "RS103",
    lessons: [
      {
        _id: "L507",
        name: "Introduction to Spacecraft Systems",
        description: "Basic overview of spacecraft systems and subsystems.",
        module: "M303",
      },
      {
        _id: "L508",
        name: "Power and Propulsion Systems",
        description: "Understanding spacecraft power and propulsion systems.",
        module: "M303",
      },
      {
        _id: "L509",
        name: "Communication and Control Systems",
        description:
          "Overview of spacecraft communication and control systems.",
        module: "M303",
      },
    ],
  },
  {
    _id: "M401",
    name: "Introduction to Organic Chemistry",
    description: "Basic principles of organic chemistry and its applications.",
    course: "RS104",
    lessons: [
      {
        _id: "L601",
        name: "Hydrocarbons",
        description: "Study of hydrocarbons and their properties.",
        module: "M401",
      },
      {
        _id: "L602",
        name: "Functional Groups",
        description:
          "Overview of different functional groups in organic chemistry.",
        module: "M401",
      },
      {
        _id: "L603",
        name: "Organic Reactions",
        description: "Understanding various organic reactions and mechanisms.",
        module: "M401",
      },
    ],
  },
  {
    _id: "M402",
    name: "Advanced Organic Chemistry",
    description: "In-depth study of organic synthesis and reaction mechanisms.",
    course: "RS104",
    lessons: [
      {
        _id: "L604",
        name: "Stereochemistry",
        description:
          "Understanding stereochemistry and its importance in organic reactions.",
        module: "M402",
      },
      {
        _id: "L605",
        name: "Spectroscopy",
        description:
          "Overview of spectroscopic methods for structure determination.",
        module: "M402",
      },
      {
        _id: "L606",
        name: "Organic Synthesis",
        description: "Advanced techniques in organic synthesis.",
        module: "M402",
      },
    ],
  },
  {
    _id: "M501",
    name: "Introduction to Inorganic Chemistry",
    description:
      "Basic principles of inorganic chemistry and its applications.",
    course: "RS105",
    lessons: [
      {
        _id: "L701",
        name: "Coordination Chemistry",
        description: "Study of coordination compounds and their properties.",
        module: "M501",
      },
      {
        _id: "L702",
        name: "Bonding Theories",
        description: "Overview of bonding theories in inorganic chemistry.",
        module: "M501",
      },
      {
        _id: "L703",
        name: "Crystal Field Theory",
        description: "Understanding crystal field theory and its applications.",
        module: "M501",
      },
    ],
  },
  {
    _id: "M502",
    name: "Advanced Inorganic Chemistry",
    description:
      "In-depth study of inorganic compounds and their applications.",
    course: "RS105",
    lessons: [
      {
        _id: "L704",
        name: "Metal Complexes",
        description: "Study of metal complexes and their properties.",
        module: "M502",
      },
      {
        _id: "L705",
        name: "Organometallic Chemistry",
        description:
          "Overview of organometallic compounds and their reactions.",
        module: "M502",
      },
      {
        _id: "L706",
        name: "Bioinorganic Chemistry",
        description:
          "Understanding the role of inorganic chemistry in biological systems.",
        module: "M502",
      },
    ],
  },
  {
    _id: "M601",
    name: "Introduction to Physical Chemistry",
    description: "Basic principles of physical chemistry and its applications.",
    course: "RS106",
    lessons: [
      {
        _id: "L801",
        name: "Thermodynamics",
        description:
          "Study of thermodynamic principles and their applications.",
        module: "M601",
      },
      {
        _id: "L802",
        name: "Kinetics",
        description: "Overview of chemical kinetics and reaction rates.",
        module: "M601",
      },
      {
        _id: "L803",
        name: "Quantum Mechanics",
        description:
          "Understanding quantum mechanics in the context of chemistry.",
        module: "M601",
      },
    ],
  },
  {
    _id: "M602",
    name: "Advanced Physical Chemistry",
    description: "In-depth study of physical chemistry and its applications.",
    course: "RS106",
    lessons: [
      {
        _id: "L804",
        name: "Spectroscopy",
        description: "Study of spectroscopic methods in physical chemistry.",
        module: "M602",
      },
      {
        _id: "L805",
        name: "Statistical Mechanics",
        description: "Overview of statistical mechanics and its applications.",
        module: "M602",
      },
      {
        _id: "L806",
        name: "Surface Chemistry",
        description: "Understanding surface chemistry and its importance.",
        module: "M602",
      },
    ],
  },
  {
    _id: "M701",
    name: "Introduction to Middle-earth Languages",
    description:
      "Basic principles of ancient languages and scripts in Middle-earth.",
    course: "RS107",
    lessons: [
      {
        _id: "L901",
        name: "Elvish Languages",
        description: "Study of Sindarin and Quenya languages.",
        module: "M701",
      },
      {
        _id: "L902",
        name: "Dwarvish Language",
        description: "Overview of the Khuzdul language.",
        module: "M701",
      },
      {
        _id: "L903",
        name: "Black Speech",
        description: "Understanding the Black Speech of Mordor.",
        module: "M701",
      },
    ],
  },
  {
    _id: "M702",
    name: "Advanced Middle-earth Languages",
    description:
      "In-depth study of ancient languages and scripts in Middle-earth.",
    course: "RS107",
    lessons: [
      {
        _id: "L904",
        name: "Philological Aspects",
        description:
          "Study of the philological aspects of Middle-earth languages.",
        module: "M702",
      },
      {
        _id: "L905",
        name: "Cultural Contexts",
        description:
          "Understanding the cultural contexts of Middle-earth languages.",
        module: "M702",
      },
      {
        _id: "L906",
        name: "Inscriptions and Texts",
        description:
          "Study of various inscriptions and texts in Middle-earth languages.",
        module: "M702",
      },
    ],
  },
  {
    _id: "M801",
    name: "Introduction to Middle-earth Diplomacy",
    description: "Basic principles of inter-species diplomacy in Middle-earth.",
    course: "RS108",
    lessons: [
      {
        _id: "L1001",
        name: "Historical Alliances",
        description: "Study of historical alliances among Middle-earth races.",
        module: "M801",
      },
      {
        _id: "L1002",
        name: "Conflicts and Resolutions",
        description:
          "Overview of conflicts and their resolutions in Middle-earth.",
        module: "M801",
      },
      {
        _id: "L1003",
        name: "Leadership and Wisdom",
        description:
          "Understanding the role of leadership and wisdom in diplomacy.",
        module: "M801",
      },
    ],
  },
  {
    _id: "M802",
    name: "Advanced Middle-earth Diplomacy",
    description: "In-depth study of inter-species diplomacy in Middle-earth.",
    course: "RS108",
    lessons: [
      {
        _id: "L1004",
        name: "Council of Elrond",
        description: "Study of the Council of Elrond and its significance.",
        module: "M802",
      },
      {
        _id: "L1005",
        name: "War of the Ring",
        description:
          "Overview of the War of the Ring and its diplomatic aspects.",
        module: "M802",
      },
      {
        _id: "L1006",
        name: "Multi-species Diplomacy",
        description: "Understanding the principles of multi-species diplomacy.",
        module: "M802",
      },
    ],
  },
  {
    _id: "M901",
    name: "Introduction to Middle-earth Magic",
    description: "Basic principles of magic in Middle-earth.",
    course: "RS109",
    lessons: [
      {
        _id: "L1101",
        name: "History of Middle-earth Magic",
        description:
          "Study of the history and evolution of magic in Middle-earth.",
        module: "M901",
      },
      {
        _id: "L1102",
        name: "Magical Creatures",
        description: "Overview of magical creatures and their roles.",
        module: "M901",
      },
      {
        _id: "L1103",
        name: "Magical Artifacts",
        description: "Understanding the significance of magical artifacts.",
        module: "M901",
      },
    ],
  },
  {
    _id: "M902",
    name: "Advanced Middle-earth Magic",
    description: "In-depth study of magic and its practice in Middle-earth.",
    course: "RS109",
    lessons: [
      {
        _id: "L1104",
        name: "Spellcasting Techniques",
        description: "Study of various spellcasting techniques.",
        module: "M902",
      },
      {
        _id: "L1105",
        name: "Magical Theory",
        description: "Overview of the theoretical aspects of magic.",
        module: "M902",
      },
      {
        _id: "L1106",
        name: "Magic in Warfare",
        description: "Understanding the role of magic in warfare.",
        module: "M902",
      },
    ],
  },
  {
    _id: "M1001",
    name: "Introduction to Democratic Education",
    description: "Basic principles and concepts of democratic education.",
    course: "RS110",
    lessons: [
      {
        _id: "L1201",
        name: "History of Democratic Education",
        description:
          "Study of the historical development of democratic education.",
        module: "M1001",
      },
      {
        _id: "L1202",
        name: "Core Principles",
        description:
          "Understanding the core principles of democratic education.",
        module: "M1001",
      },
      {
        _id: "L1203",
        name: "Democratic Schools",
        description: "Overview of democratic schools and their practices.",
        module: "M1001",
      },
    ],
  },
  {
    _id: "M1002",
    name: "Democratic Classroom Practices",
    description: "Exploring democratic practices in the classroom.",
    course: "RS110",
    lessons: [
      {
        _id: "L1204",
        name: "Student Voice and Choice",
        description:
          "Understanding the importance of student voice and choice in education.",
        module: "M1002",
      },
      {
        _id: "L1205",
        name: "Collaborative Learning",
        description: "Overview of collaborative learning techniques.",
        module: "M1002",
      },
      {
        _id: "L1206",
        name: "Classroom Governance",
        description: "Study of classroom governance and student participation.",
        module: "M1002",
      },
    ],
  },
  {
    _id: "M1003",
    name: "Challenges and Opportunities in Democratic Education",
    description:
      "Examining the challenges and opportunities in implementing democratic education.",
    course: "RS110",
    lessons: [
      {
        _id: "L1207",
        name: "Barriers to Democratic Education",
        description:
          "Understanding the barriers to implementing democratic education.",
        module: "M1003",
      },
      {
        _id: "L1208",
        name: "Case Studies",
        description:
          "Exploring case studies of democratic education in practice.",
        module: "M1003",
      },
      {
        _id: "L1209",
        name: "Future Directions",
        description:
          "Discussing the future directions of democratic education.",
        module: "M1003",
      },
    ],
  },
  {
    _id: "M1101",
    name: "Introduction to Philosophy of Independence",
    description:
      "Basic principles and concepts of independence and liberation.",
    course: "RS111",
    lessons: [
      {
        _id: "L1301",
        name: "Historical Context",
        description:
          "Study of the historical context of independence movements.",
        module: "M1101",
      },
      {
        _id: "L1302",
        name: "Philosophical Foundations",
        description:
          "Understanding the philosophical foundations of independence.",
        module: "M1101",
      },
      {
        _id: "L1303",
        name: "Key Thinkers",
        description:
          "Overview of key thinkers in the philosophy of independence.",
        module: "M1101",
      },
    ],
  },
  {
    _id: "M1102",
    name: "Liberation Movements",
    description:
      "Exploring various liberation movements and their philosophies.",
    course: "RS111",
    lessons: [
      {
        _id: "L1304",
        name: "Case Studies",
        description: "Study of case studies of liberation movements.",
        module: "M1102",
      },
      {
        _id: "L1305",
        name: "Strategies and Tactics",
        description:
          "Understanding the strategies and tactics used in liberation movements.",
        module: "M1102",
      },
      {
        _id: "L1306",
        name: "Impact and Legacy",
        description:
          "Exploring the impact and legacy of various liberation movements.",
        module: "M1102",
      },
    ],
  },
  {
    _id: "M1103",
    name: "Contemporary Issues in Independence",
    description:
      "Examining contemporary issues and debates in the philosophy of independence.",
    course: "RS111",
    lessons: [
      {
        _id: "L1307",
        name: "Modern Independence Movements",
        description:
          "Study of modern independence movements and their philosophies.",
        module: "M1103",
      },
      {
        _id: "L1308",
        name: "Global Perspectives",
        description:
          "Understanding global perspectives on independence and liberation.",
        module: "M1103",
      },
      {
        _id: "L1309",
        name: "Future Directions",
        description:
          "Discussing the future directions of independence and liberation philosophies.",
        module: "M1103",
      },
    ],
  },
  {
    _id: "M1201",
    name: "Innovations in Early 19th Century Education",
    description:
      "Exploring educational innovations and reforms in the early 19th century.",
    course: "RS112",
    lessons: [
      {
        _id: "L1401",
        name: "Historical Context",
        description:
          "Study of the historical context of early 19th century education.",
        module: "M1201",
      },
      {
        _id: "L1402",
        name: "Key Innovators",
        description: "Overview of key innovators and their contributions.",
        module: "M1201",
      },
      {
        _id: "L1403",
        name: "Impact on Modern Education",
        description:
          "Understanding the impact of early 19th century innovations on modern education.",
        module: "M1201",
      },
    ],
  },
  {
    _id: "M1301",
    name: "Foundations of Christian Ethics",
    description: "Basic principles and concepts of Christian ethics.",
    course: "RS113",
    lessons: [
      {
        _id: "L1501",
        name: "Biblical Foundations",
        description: "Study of the biblical foundations of Christian ethics.",
        module: "M1301",
      },
      {
        _id: "L1502",
        name: "Moral Theology",
        description: "Overview of moral theology and its principles.",
        module: "M1301",
      },
      {
        _id: "L1503",
        name: "Contemporary Issues",
        description:
          "Understanding contemporary ethical issues from a Christian perspective.",
        module: "M1301",
      },
    ],
  },
  {
    _id: "M1401",
    name: "Early Christianity and the Apostolic Age",
    description: "Study of early Christianity and the Apostolic Age.",
    course: "RS114",
    lessons: [
      {
        _id: "L1601",
        name: "Historical Background",
        description:
          "Overview of the historical background of early Christianity.",
        module: "M1401",
      },
      {
        _id: "L1602",
        name: "The Apostles",
        description: "Study of the lives and teachings of the Apostles.",
        module: "M1401",
      },
      {
        _id: "L1603",
        name: "Early Christian Communities",
        description:
          "Understanding the formation and development of early Christian communities.",
        module: "M1401",
      },
    ],
  },
  {
    _id: "M1501",
    name: "Leadership and Service in Christian Communities",
    description:
      "Exploring leadership and service within Christian communities.",
    course: "RS115",
    lessons: [
      {
        _id: "L1701",
        name: "Biblical Models of Leadership",
        description: "Study of biblical models of leadership.",
        module: "M1501",
      },
      {
        _id: "L1702",
        name: "Service and Ministry",
        description:
          "Overview of service and ministry in Christian communities.",
        module: "M1501",
      },
      {
        _id: "L1703",
        name: "Contemporary Leadership Challenges",
        description:
          "Understanding contemporary challenges in Christian leadership.",
        module: "M1501",
      },
    ],
  },
  {
    _id: "M1601",
    name: "Sufi Philosophy and Mystical Traditions",
    description: "Study of Sufi philosophy and mystical traditions in Islam.",
    course: "RS116",
    lessons: [
      {
        _id: "L1801",
        name: "Introduction to Sufism",
        description: "Overview of Sufism and its origins.",
        module: "M1601",
      },
      {
        _id: "L1802",
        name: "Key Sufi Thinkers",
        description: "Study of key Sufi thinkers and their teachings.",
        module: "M1601",
      },
      {
        _id: "L1803",
        name: "Sufi Practices",
        description: "Understanding the practices and rituals in Sufism.",
        module: "M1601",
      },
    ],
  },
  {
    _id: "M1701",
    name: "Ethical Wisdom in Islamic Teachings",
    description:
      "Exploring ethical wisdom and principles in Islamic teachings.",
    course: "RS117",
    lessons: [
      {
        _id: "L1901",
        name: "Quranic Ethics",
        description: "Study of ethical principles in the Quran.",
        module: "M1701",
      },
      {
        _id: "L1902",
        name: "Prophetic Traditions",
        description: "Overview of ethical teachings in the Hadith.",
        module: "M1701",
      },
      {
        _id: "L1903",
        name: "Contemporary Ethical Issues",
        description:
          "Understanding contemporary ethical issues from an Islamic perspective.",
        module: "M1701",
      },
    ],
  },
  {
    _id: "M1801",
    name: "Introduction to Islamic Esotericism",
    description: "Basic principles and concepts of Islamic esotericism.",
    course: "RS118",
    lessons: [
      {
        _id: "L2001",
        name: "Historical Context",
        description: "Study of the historical context of Islamic esotericism.",
        module: "M1801",
      },
      {
        _id: "L2002",
        name: "Key Concepts",
        description: "Understanding key concepts in Islamic esotericism.",
        module: "M1801",
      },
      {
        _id: "L2003",
        name: "Esoteric Practices",
        description: "Overview of esoteric practices in Islam.",
        module: "M1801",
      },
    ],
  },
  {
    _id: "M1802",
    name: "Advanced Islamic Esotericism",
    description: "In-depth study of Islamic esotericism and its practices.",
    course: "RS118",
    lessons: [
      {
        _id: "L2004",
        name: "Mystical Interpretations",
        description:
          "Study of mystical interpretations in Islamic esotericism.",
        module: "M1802",
      },
      {
        _id: "L2005",
        name: "Esoteric Texts",
        description: "Overview of key esoteric texts in Islam.",
        module: "M1802",
      },
      {
        _id: "L2006",
        name: "Contemporary Esotericism",
        description:
          "Understanding contemporary practices of Islamic esotericism.",
        module: "M1802",
      },
    ],
  },
  {
    _id: "M1901",
    name: "Ancient Chinese Environmental Management",
    description:
      "Study of environmental management practices in ancient China.",
    course: "RS119",
    lessons: [
      {
        _id: "L2101",
        name: "Historical Overview",
        description: "Overview of environmental management in ancient China.",
        module: "M1901",
      },
      {
        _id: "L2102",
        name: "Agricultural Practices",
        description:
          "Study of agricultural practices and their environmental impact.",
        module: "M1901",
      },
      {
        _id: "L2103",
        name: "Water Management",
        description:
          "Understanding ancient Chinese water management techniques.",
        module: "M1901",
      },
    ],
  },
  {
    _id: "M2001",
    name: "Leadership Lessons from Chinese Mythology",
    description: "Exploring leadership lessons derived from Chinese mythology.",
    course: "RS120",
    lessons: [
      {
        _id: "L2201",
        name: "Mythological Figures",
        description:
          "Study of key mythological figures and their leadership qualities.",
        module: "M2001",
      },
      {
        _id: "L2202",
        name: "Mythological Narratives",
        description:
          "Understanding leadership lessons from mythological narratives.",
        module: "M2001",
      },
      {
        _id: "L2203",
        name: "Application to Modern Leadership",
        description:
          "Applying lessons from mythology to modern leadership contexts.",
        module: "M2001",
      },
    ],
  },
  {
    _id: "M2101",
    name: "Introduction to Hydraulic Engineering in Ancient Civilizations",
    description:
      "Basic principles of hydraulic engineering in ancient civilizations.",
    course: "RS121",
    lessons: [
      {
        _id: "L2301",
        name: "Historical Context",
        description:
          "Study of the historical context of hydraulic engineering.",
        module: "M2101",
      },
      {
        _id: "L2302",
        name: "Engineering Techniques",
        description:
          "Overview of hydraulic engineering techniques in ancient civilizations.",
        module: "M2101",
      },
      {
        _id: "L2303",
        name: "Case Studies",
        description:
          "Understanding case studies of hydraulic engineering projects.",
        module: "M2101",
      },
    ],
  },
  {
    _id: "M2102",
    name: "Advanced Hydraulic Engineering in Ancient Civilizations",
    description:
      "In-depth study of hydraulic engineering practices in ancient civilizations.",
    course: "RS121",
    lessons: [
      {
        _id: "L2304",
        name: "Innovative Designs",
        description: "Study of innovative hydraulic engineering designs.",
        module: "M2102",
      },
      {
        _id: "L2305",
        name: "Sustainability Practices",
        description:
          "Overview of sustainability practices in ancient hydraulic engineering.",
        module: "M2102",
      },
      {
        _id: "L2306",
        name: "Legacy and Impact",
        description:
          "Understanding the legacy and impact of ancient hydraulic engineering.",
        module: "M2102",
      },
    ],
  },
];

export default modules;