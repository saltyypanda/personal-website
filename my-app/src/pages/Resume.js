import resume from '../data/resume.pdf'

function Resume() {
    return (
        <div className='h-100'>
            <embed
                src={resume}
                type="application/pdf"
                width="100%"
                height="700vh"
            />
            {/* <iframe
                title="Resume"
                width="100%"
                height="100%"
                src="https://docs.google.com/document/d/1IWaTg0rRQgG7QeDQZQvb15UBc46L0eFZjN8KKepGYk8/view"
            /> */}
        </div>
    );
}

export default Resume;