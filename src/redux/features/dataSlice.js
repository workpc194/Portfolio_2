import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'dataSlice',
    initialState: {
        githubData: [
            {
                id: 0,
                name: 'Public Repositories',
                count: 10
            },
            {
                id: 1,
                name: 'React Projects',
                count: 8
            },
            {
                id: 2,
                name: 'GSAP Animation Studies',
                count: 5
            },
            {
                id: 3,
                name: 'Live Deployed',
                count: 3
            }
        ],
        skillsData: [
            {
                id: 0,
                name: 'core',
                skill: ['HTML5', 'CSS3', 'JavaScript'],
            },
            {
                id: 1,
                name: 'react',
                skill: ['React 19', 'Redux Toolkit', 'Context API', 'React Router', 'Axios'],
            },
            {
                id: 2,
                name: 'style_and_motion',
                skill: ['Tailwind CSS', 'GSAP', 'ScrollTrigger', 'SVG Animation'],
            },
            {
                id: 3,
                name: 'tooling',
                skill: ['Git', 'Vite', 'Figma', 'Vercel']
            }
        ],
        projectsData: [
            {
                id: 1,
                category: 'React • API',
                name: 'Movies Project',
                description: 'A movie finder that loads titles from an external API. Search stays in sync with two-way data binding, and saved favourites live in a watchlist that survives a refresh.',
                tags: ['React', 'JavaScript', 'API integration', 'Local Storage', 'Vercel'],
                features: ["Two-way search", "Local Storage watchlist", "Remove movies manually"],
                points: ['Fetch movies from an API', 'Search with two-way data binding', 'Watchlist persists in Local Storage', 'Remove movies manually'],
                source: 'https://github.com/workpc194/movies-project',
                color: '#7EE787'
            },
            {
                id: 2,
                category: 'React • 8 mini-projects',
                name: 'React Learning',
                description: 'Eight small projects, one concept each: from a notes app and an infinite-scroll gallery to Context API and client-side routing.',
                tags: ['React 19', 'Vite', 'Tailwind CSS', 'Axios', 'React Router', 'Context API'],
                features: ["Notes app (useState)", "Infinite-scroll gallery", "Context API + Router"],
                points: ['Notes app built with useState', 'Infinite-scroll photo gallery', 'Context API and React Router', 'API calls with Axios', 'Deployed on Vercel'],
                source: 'https://github.com/workpc194/react-learning',
                color: '#5EEAD4'
            },
            {
                id: 3,
                category: 'Animation',
                name: 'GSAP Studies',
                description: 'Five animation experiments: the basics, scroll-triggered motion, SVG animation, a custom cursor and a timeline-driven navbar.',
                tags: ['GSAP', 'ScrollTrigger', 'SVG', 'JavaScript'],
                features: ["Scroll-triggered motion", "SVG animation", "Custom cursor", "Timeline navbar"],
                points: ['gsap basics', 'scroll trigger', 'svg Aimation', 'custom Cursor', 'timeline Navbar'],
                source: 'https://github.com/workpc194/gsap-learn',
                color: '#79C0FF'
            },
            {
                id: 4,
                category: 'State management',
                name: 'Redux Toolkit',
                description: 'My practice repository for learning Redux Toolkit and managing shared state across components.',
                tags: ['Redux Toolkit', 'React', 'JavaScript'],
                features: ["Redux Toolkit practice", "Shared state"],
                points: ['Redux Toolkit practice', 'Written in JavaScript'],
                source: 'https://github.com/workpc194/redux',
                color: '#FFB86B'
            },
            {
                id: 5,
                category: 'Vanilla JavaScript',
                name: 'Currency Converter',
                description: 'My first project after finishing JavaScript: a currency converter built with plain JavaScript.',
                tags: ['JavaScript', 'HTML', 'CSS'],
                features: ["My first JS project", "Plain JavaScript"],
                points: ['My first project after JavaScript', 'Built with plan JavaScript'],
                source: 'https://github.com/workpc194/currency-converter',
                color: '#FF7B72'
            },
            {
                id: 6,
                category: 'Vanilla JavaScript',
                name: 'Rock Paper Scissors',
                description: 'The classic game, built with JavaScript.',
                tags: ['JavaScript', 'HTML', 'CSS'],
                features: ["Classic game logic", "Plain JavaScript"],
                points: ['Classic game logic', 'Built with JavaScript'],
                source: 'https://github.com/workpc194/rock-paper-scissors-game',
                color: '#D2A8FF'
            }
        ],
        learningData: [
            {
                id: 0,
                name: '01 . foundations',
                heading: 'HTML, CSS and JavaScript foundamentals',
                paragraph: 'Finished JavaScript, then shipped currency-converter and rock-paper-scissors.'
            },
            {
                id: 1,
                name: '02 . react',
                heading: 'Components, state, routing, Context and APIs',
                paragraph: 'Eight mini-projects in react-learning, then the movies-project.'
            },
            {
                id: 2,
                name: '03 . state and styling',
                heading: 'Redux Toolkit and Tailwind CSS',
                paragraph: 'Global state with Redux, utility-first styling across my React apps.'
            },
            {
                id: 3,
                name: '04 . motion',
                heading: 'GSAP, ScrollTrigger and SVG animation',
                paragraph: 'Timelines, scroll effects, a custom cursor and an animated navbar.'
            },
        ],
        contactData: [
            {
                id: 0,
                name: 'email',
                text: 'nomitool1419@gmail.com',
                url: 'mailto:nomitool1419@gmail.com'
            },
            {
                id: 1,
                name: 'whatsapp',
                text: '+92 318 3815505',
                url: 'https://wa.me/923183815505'
            },
            {
                id: 2,
                name: 'github',
                text: 'github.com/workpc194',
                url: 'https://github.com/workpc194'
            },
            {
                id: 3,
                name: 'linkedin',
                text: 'linkedin.com/in/your-profile',
                url: 'https://www.linkedin.com/'
            }
        ],
        id: 6
    },
    reducers: {
        setID: (state, action) => {
            state.id = action.payload
        }
    }
})

export const { setID } = dataSlice.actions
export default dataSlice.reducer