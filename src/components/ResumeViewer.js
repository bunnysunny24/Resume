import React from "react";

const ResumeViewer = () => {
    const resumeUrl = "/resume.pdf"; // URL of the resume in the public folder

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>My Resume</h1>
            <iframe
                src={resumeUrl}
                title="Resume"
                style={{ width: '80%', height: '600px', border: '1px solid #ccc' }}
            ></iframe>
            <div style={{ marginTop: '20px' }}>
                <a href={resumeUrl} download="bhavashesh_resume.pdf">
                    <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Download Resume</button>
                </a>
            </div>
        </div>
    );
};

export default ResumeViewer;