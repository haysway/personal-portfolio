import { useRouteLoaderData } from 'react-router-dom';

function ProjectDetailPage() {
    const project = useRouteLoaderData('project-detail');

    return (
        <section>
            <article>
                <h1>{project.title}</h1>
                <h2>Description</h2>
                <p>{project.description}</p>
            </article>
        </section>
    ); 
}

export default ProjectDetailPage;

export async function projectDetailLoader( { params }) {
    const id = params.projectId;
    const response = await fetch(`https://portfolio-b96ae-default-rtdb.firebaseio.com/projects/${id}.json`);

    if (!response.ok) {
        throw new Response(
            JSON.stringify({title: 'Load error', message: 'Unable to load selected property data.' }),
            { status: 500 }
        );
    } else {
        const data = await response.json();

        if (!data) {
            throw new Response(
                JSON.stringify({
                    title: 'Not found',
                    message: 'Could not find selected project.'
                }),
                { status: 404 }
            );
        }

        return data;
    }
}
