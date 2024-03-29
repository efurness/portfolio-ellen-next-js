const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'University of Denver, Bootcamp',
                degree: 'Full-stack Javascript Web Development',
                detail: "Certificate, HTML/CSS, JavaScript, NODE.js, REACT, MERN Projects",
                year: '2022'
            },
            {
                id: 0,
                title: 'University of Denver',
                degree: 'MS, Geographic Information Systems, Science',
                detail: "Teaching Assistantship, GIS Projects",
                year: '2006'
            },
            {
                id: 1,
                title: 'University of Colorado, Boulder',
                degree: 'MS, Population Biology/Ecology',
                detail: "Teaching Assistantship, Research Psittacine Species, Foraging and Activity of Red-shafted Flickers",
                year: '1995'
            },
            {
                id: 2,
                title: 'Colorado College',
                degree: 'BA, Applied Biology',
                detail: "Completed Biological Research",
                year: '1989'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'National Park Service, Air Resources Division',
                role: 'GIS assistant, Frontend Developor, Biological Research',
                url: 'https://www.nps.gov/orgs/1971/index.htm',
                desc: 'Assisted Webmaster in the design, maintenance, and conversion of the Air Resources Division websites to XHTML using Adobe Dreamweaver/ColdFusion. Created GIS maps, reports and documents. Assisted Chief Biologist in analysis of air pollution in National Parks',
                year: '2010',
                location: 'Lakewood, Denver'
            },
            {
                id: 2,
                title: 'Colorado College Geology Department',
                role: 'Web Builder',
                url: 'https://www.coloradocollege.edu/academics/dept/geology/',
                desc: 'Website design and maintenance of Geology Department websites and the Integrated Solid Earth Sciences (ISeS) Antarctica website. Provided front-end website development using Dreamweaver and other editing software.',
                year: '2009',
                location: 'Colorado Springs'
            },
            {
                id: 3,
                title: 'US Forest Service',
                role: 'GIS Specialist',
                url: '',
                desc: "Combined the use of aerial photographs, Digital Ortho Quads, Orthoimagery to interpret major vegetation/forest types for the Turkey Creek watershed. Use of GIS ArcInfo and ArcEdit Tools. Set up ArcInfo watershed/riparian/vegetation coverages. Verified final vegetation maps, conducting Region 2 exams. Burned Area Emergency Rehabilitation (BAER) projects in watershed assessment of burned areas, aerial reconnaissance by helicopter, topographic mapping of treatment sites and hydrophobicity soil testing. As Project Leader and BAER Team Trainee, led technicians in conducting rehabilitation treatment plans that contributed to Final Burned Area Rehabilitation Reports.",
                year: '2000-2002',
                location: 'Pikes Peak National Forest'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
