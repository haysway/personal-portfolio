import { Link, useLoaderData } from 'react-router-dom';

function GalleryPage() {
    const projects = useLoaderData();

    if (!projects || projects.length === 0) {
        return <section><h1>Project Gallery</h1><p>No projects found.</p></section>;
    }

    return (
        <section>
            <h1>Project Gallery</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <Link to={`/gallery/${project.id}`}>
                            <h2>{project.title}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default GalleryPage;

export async function projectsLoader() {
    const response = await fetch('https://portfolio-b96ae-default-rtdb.firebaseio.com/projects.json');

    if (!response.ok) {
        throw new Response(
            JSON.stringify({ title: 'Load error', message: 'Unable to load projects.' }),
            { status: 500 }
        );
    } else {
        const data = await response.json();

        if (!data) return [];

        const transformedProjects = Object.keys(data).map(key => {
            return {
                id: key,
                ...data[key]
            };
        });

        return transformedProjects;
    }
}