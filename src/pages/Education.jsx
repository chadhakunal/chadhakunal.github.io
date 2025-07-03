export default function Education() {
  const education = [
    {
      institution: "University of Technology",
      degree: "Master of Computer Science",
      timeRange: "2020 - 2022",
      description: "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on 'Advanced Neural Network Architectures for Natural Language Processing'. Graduated with distinction and received Dean's Award for Academic Excellence."
    },
    {
      institution: "State University",
      degree: "Bachelor of Science in Computer Science",
      timeRange: "2016 - 2020",
      description: "Major in Computer Science with minor in Mathematics. Completed capstone project on 'Real-time Data Processing Systems'. Active member of Computer Science Society and coding competitions."
    },
    {
      institution: "Tech Institute",
      degree: "Associate Degree in Software Development",
      timeRange: "2014 - 2016",
      description: "Focused on practical software development skills including web development, database design, and programming fundamentals. Completed internship at local software company."
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
        Education
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

        {education.map((edu, index) => (
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

            {/* Education Card */}
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
                {edu.timeRange}
              </div>

              {/* Institution Name */}
              <div style={{
                fontSize: '2.2vw',
                fontWeight: 700,
                color: '#d3d0d6',
                marginBottom: '1vh'
              }}>
                {edu.institution}
              </div>

              {/* Degree */}
              <div style={{
                fontSize: '1.8vw',
                fontWeight: 600,
                color: '#d3d0d6',
                opacity: 0.9,
                marginBottom: '2vh'
              }}>
                {edu.degree}
              </div>

              {/* Description */}
              <div style={{
                fontSize: '1.1vw',
                color: '#d3d0d6',
                opacity: 0.8,
                lineHeight: 1.6,
                fontWeight: 400
              }}>
                {edu.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 