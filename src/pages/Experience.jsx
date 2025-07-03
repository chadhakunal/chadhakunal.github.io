export default function Experience() {
  const workExperience = [
    {
      company: "Tech Company Inc.",
      role: "Senior Software Engineer",
      timeRange: "2022 - Present",
      description: "Led development of scalable web applications using React and Node.js. Implemented CI/CD pipelines and mentored junior developers. Collaborated with cross-functional teams to deliver high-quality software solutions."
    },
    {
      company: "StartupXYZ",
      role: "Full Stack Developer",
      timeRange: "2020 - 2022",
      description: "Built and maintained multiple web applications using modern JavaScript frameworks. Worked on both frontend and backend development, including database design and API development. Contributed to agile development processes."
    },
    {
      company: "Digital Agency",
      role: "Frontend Developer",
      timeRange: "2018 - 2020",
      description: "Developed responsive user interfaces for various client projects. Collaborated with designers to implement pixel-perfect designs. Optimized website performance and user experience."
    }
  ];

  return (
    <div style={{
      position: 'absolute',
      top: '5vh',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1200px',
      zIndex: 0
    }}>
      {/* Header */}
      <div style={{
        fontSize: '3vw',
        fontWeight: 700,
        color: '#d3d0d6',
        textAlign: 'center',
        marginBottom: '8vh',
        fontFamily: 'Poppins, Montserrat, Inter, Arial, sans-serif'
      }}>
        Work Experience
      </div>

      {/* Timeline */}
      <div style={{
        position: 'relative',
        paddingLeft: '2vw'
      }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          left: '1vw',
          top: '0',
          bottom: '0',
          width: '2px',
          backgroundColor: '#d3d0d6',
          opacity: 0.3
        }} />

        {workExperience.map((experience, index) => (
          <div key={index} style={{
            position: 'relative',
            marginBottom: '6vh',
            paddingLeft: '4vw'
          }}>
            {/* Timeline dot */}
            <div style={{
              position: 'absolute',
              left: '-0.5vw',
              top: '1.5vh',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#d3d0d6',
              border: '3px solid #232026'
            }} />

            {/* Experience Card */}
            <div style={{
              backgroundColor: 'rgba(35, 32, 38, 0.8)',
              border: '1px solid rgba(211, 208, 214, 0.2)',
              borderRadius: '12px',
              padding: '3vh 4vw',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(35, 32, 38, 0.9)';
              e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(35, 32, 38, 0.8)';
              e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}>
              
              {/* Time Range */}
              <div style={{
                fontSize: '1.2vw',
                color: '#d3d0d6',
                opacity: 0.7,
                fontWeight: 500,
                marginBottom: '1vh'
              }}>
                {experience.timeRange}
              </div>

              {/* Company Name */}
              <div style={{
                fontSize: '2.2vw',
                fontWeight: 700,
                color: '#d3d0d6',
                marginBottom: '1vh'
              }}>
                {experience.company}
              </div>

              {/* Role */}
              <div style={{
                fontSize: '1.8vw',
                fontWeight: 600,
                color: '#d3d0d6',
                opacity: 0.9,
                marginBottom: '2vh'
              }}>
                {experience.role}
              </div>

              {/* Description */}
              <div style={{
                fontSize: '1.1vw',
                color: '#d3d0d6',
                opacity: 0.8,
                lineHeight: 1.6,
                fontWeight: 400
              }}>
                {experience.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 