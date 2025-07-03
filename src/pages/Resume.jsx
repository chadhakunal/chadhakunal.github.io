export default function Resume() {
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
        marginBottom: '5vh',
        fontFamily: 'Poppins, Montserrat, Inter, Arial, sans-serif'
      }}>
        Resume
      </div>

      {/* PDF Preview */}
      <div style={{
        width: '100%',
        height: '70vh',
        border: '1px solid rgba(211, 208, 214, 0.2)',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: '#ffffff'
      }}>
        <iframe
          src="/resume.pdf"
          style={{
            width: '100%',
            height: '100%',
            border: 'none'
          }}
          title="Resume Preview"
        />
      </div>
    </div>
  );
} 