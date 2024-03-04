import React from 'react';
import Card from '../components/Card';

function Projects() {
    const data = [
        {
            title: "project1",
            image: "/images/Food.jpg"
        },
        {
            title: "project2",
            image: "/images/Food.jpg"
        },
        {
            title: "project3",
            image: "/images/Food.jpg"
        }
    ]
    return (
        <>
        <div>
            <h1>My Projects</h1>
            <div class="d-flex">
            {
                data.map(project => {
                    return <Card image={project.image} title={project.title} />
                })
            }
            </div>
        </div>
        </>
    )
}

export default Projects