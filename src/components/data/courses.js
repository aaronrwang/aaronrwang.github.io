import { cs } from './courses/cs.js'
import { math } from './courses/math.js'
import { ecp } from './courses/ecp.js'
import { eg } from './courses/eg.js'
import { core } from './courses/core.js'
let l1 = cs['column-1'].reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
}, {});
let l2 = cs['column-2'].reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
}, {});
let l3 = cs['column-3'].reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
}, {});
let l4 = math['column-1'].reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
}, {});
let l5 = math['column-2'].reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
}, {});
let l6 = ecp.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
}, {});
let l7 = eg.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
}, {});
let l8 = core.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
}, {});

export const courses = Object.assign({}, l1, l2, l3, l4, l5, l6, l7, l8);


// const result = data.reduce((acc, item) => {
//     acc[item.id] = item; // Use the id as the key and keep the whole item
//     return acc;
// }, {});
//     'eg-10118': {
//         'id': 'eg-10118',
//         'name': 'Engineering Computing',
//         'grade': 'N/A',
//         'description': 'The engineering computing course is designed to introduce fundamental concepts of computing that includes basic understanding of computing hardware/software tools and usage of those tools to model, analyze and solve engineering problems. Basic programming concepts such as variable assignments, vector and matrix operations, plotting, conditionals, loops, and user-defined functions will be introduced using both MATLAB and Python programming platforms and will culminate in an engineering programming project.'
//     },
//     'cse-20311': {
//         'name': 'Fundamentals of Computing',
//         'grade': 'A',
//         'description': 'This is the first part of a two-course computer programming sequence, intended primarily for computer science and computer engineering majors. It introduces fundamental concepts and principles of computer science, from formulating a problem and analyzing it conceptually, to designing, implementing, and testing a program on a computer. Using data and procedural abstractions as basic design principles for programs, students learn to define basic data structures, such as lists and trees, and to apply various algorithms for operating on them. The course also introduces object-oriented methods.'
//     },
//     'cse-20110': {
//         'name': 'Discrete Mathematics',
//         'grade': 'A',
//         'description': 'Introduction to mathematical techniques fundamental to computer engineering and computer science. Topics: mathematical logic, induction, set theory, relations, functions, recursion, recurrence relations, introduction to asymptotic analysis, algebraic structures, graphs, and machine computation.'
//     },
//     'cse-20221': {
//         'name': 'Logic Design and Sequential Circuits',
//         'grade': 'IP',
//         'description': 'Boolean algebra and switching circuits, Karnaugh maps, design of combinational and of sequential logic networks, and sequential machines.'
//     },
//     'cse-20289': {
//         'name': 'Systems Programming',
//         'grade': 'IP',
//         'description': 'Systems Programming is a core Computer Science course that explores the fundamentals of computing systems. This course introduces students to the Unix programming environment where they will explore numerical representation, memory management, system calls, data structures, networking, and concurrency. Examining these topics will enable students to become familiar and comfortable with the lower level aspects of computing, while providing the foundation for further study in subsequent systems courses such as computer architecture and operating systems.'
//     },
//     'cse-20312': {
//         'name': 'Data Structures',
//         'grade': 'IP',
//         'description': 'This is the second part of a two-course introduction-to-computing sequence intended for Computer Science and Computer Engineering majors. This course deepens and broadens student exposure to imperative and object-oriented programming and data structures. Topics covered include modularity, specification, data abstraction, classes and objects, genericity, inheritance. This course will focus these topics on design and use of elementary data structures such as lists, stacks, queues, and trees, as well as advanced techniques such as divide-and-conquer, sorting, searching and graph algorithms. More advanced data structures such as priority queues and search trees will also be covered.'
//     },
//     'cse-30151': {
//         'name': 'Theory of Computing',
//         'grade': 'N/A',
//         'description': 'Introduction to formal languages and automata, computability theory, and complexity theory with the goal of developing understanding of the power and limits of different computational models. Topics covered include: regular languages and finite automata; context-free grammars and pushdown automata; Turing machines; undecidable languages; the classes P and NP; NP completeness.'
//     },
//     'cse-30332': {
//         'name': 'Programming Paradigms',
//         'grade': 'N/A',
//         'description': 'Programming language overview: imperative and functional languages; logic programming. Scripting languages and tools. Development environments. Multilanguage interfacing. Case studies. Comprehensive programming practice using several languages.'

//     },
//     'cse-30341': {
//         'name': 'Operating Systems',
//         'grade': 'N/A',
//         'description': 'Introduction to all aspects of modern operating systems. Topics include process structure and synchronization, interprocess communication, memory management, file systems, security, I/O, and distributed files systems.'

//     },
//     'cse-40771': {
//         'name': 'Distributed Systems',
//         'grade': 'N/A',
//         'description': 'A distributed system is any system of independent computers that communicate and cooperate via a newtork. Distributed systems are widely used in many settings spanning cloud services, mobile computers, internet of things, machine learning systems, interplanetary communications, and more. This course will introduce students to the fundamental properties of distributed systems, and develop techniques for building systems that are reliable, consistent, and scalable. Topics will include remote procedure call, logging and checkpointing, replication, consistency, fault tolerance, security and privacy, and more. The course will include a substantial amount of programming to build several working distributed systems that implement scalable data storage, large scale computation, and reliable communication. A course project is required. Graduate students enrolled in 60771 will additional study foundational papers in the field on these topics.'
//     },
//     'cse-40113': {
//         'name': 'Algorithms',
//         'grade': 'N/A',
//         'description': 'Techniques for designing efficient computer algorithms and for analyzing computational costs of algorithms. Common design strategies such as dynamic programming, divide-and-conquer, and Greedy methods. Problem-solving approaches such as sorting, searching, and selection; lower bounds; data structures; algorithms for graph problems; geometric problems; and other selected problems. Computationally intractable problems (NP-completeness).'
//     },
//     'eg-44175': {
//         'name': 'Engineering Ethics',
//         'grade': 'A',
//         'description': 'This course seeks to develop a solid foundation for reasoning about the difficult ethical, professional, and social controversies that arise in the engineering field. Emphasis is placed on identifying the appropriate legal and professional context and applying sound critical thinking skills to a problem. Topics covered include relevant professional codes of ethics, encryption/privacy/surveillance, freedom of speech, "cracking" of computer systems, development of safety-critical software, whistle blowing, and intellectual property. This course relies heavily on case studies of real incidents, both historical and current. In collaboration with Notre Dame\'s Global Gateways, there will also be an international component integrated throughout the course to provide additional historical and cultural perspectives to the course.'
//     }
// }
