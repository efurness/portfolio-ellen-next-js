const expertise = [
    {
        id: 1,
        title: 'GIS',
        desc: "Proficient in GIS Software: ArcGIS Online, ArcGIS Pro and ArcGIS Extensions: Spatial Analyst, QGIS, GoogleEarth, Leaflet, API for Javascript/Python.  Gaining Geospatial Training in Python for ArcGIS Pro, Building Web and Mobile ArcGIS applications with Javascript. I have been working on Story Maps and Experience Builder through Esri ArcGIS.",
    },

    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am a skilled Full-stack Javascript developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.',
    },
    {
        id: 2,
        title: 'Designing (UI/UX)',
        desc: 'I am have a certificate in Web Development and proficient in using design software such as Dreamweaver, PhotoScape X, and Adobe Illustrator. Through participating in freelance work, I have gained practical experience in UI/UX design. Front-end design with REACT and Next.js is my passion, and it has allowed me to continue to develop my creative skills.',
    },
    {
        id: 3,
        title: 'Github/VSCode',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub and VSCode are imperative to my success as a developer.",
    },
    {
        id: 4,
        title: 'Open Source Contributor',
        desc: "Open Source is the future. I usually take some time on weekend and contribute towards an opensource project. It gives me opportunity to learn from best developer's practices.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
