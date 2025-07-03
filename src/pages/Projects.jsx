import CardSwap, { Card } from '../components/CardSwap/CardSwap'
import { useRef, useState } from 'react';

export default function Projects() {
  const cardSwapRef = useRef();
  const [expanded, setExpanded] = useState(false);
  return (
    <div style={{
      position: 'absolute',
      top: '5vh',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1200px',
      zIndex: 0,
      height: '90vh',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        fontSize: '3vw',
        fontWeight: 700,
        color: '#d3d0d6',
        textAlign: 'center',
        marginBottom: '12vh',
        fontFamily: 'Poppins, Montserrat, Inter, Arial, sans-serif'
      }}>
        Projects
      </div>

      {/* CardSwap Container */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
        position: 'relative'
      }}>
        <CardSwap
          ref={cardSwapRef}
          cardDistance={15}
          verticalDistance={18}
          pauseOnHover={false}
          expanded={expanded}
        >
          <Card>
            <h3>Card 1</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 2</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 3</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 4</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 5</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 6</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 7</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 8</h3>
            <p>Your content here</p>
          </Card>
        </CardSwap>
      </div>
      {/* Prev/Next/Expand Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2vw', marginTop: '4vh' }}>
        <button
          style={{
            background: 'rgba(35,32,38,0.8)',
            color: '#d3d0d6',
            border: '1px solid #d3d0d6',
            borderRadius: '8px',
            padding: '1vh 2vw',
            fontSize: '1.2vw',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onClick={() => cardSwapRef.current?.swapBackward()}
        >
          ◀ Prev
        </button>
        <button
          style={{
            background: 'rgba(35,32,38,0.8)',
            color: '#d3d0d6',
            border: '1px solid #d3d0d6',
            borderRadius: '8px',
            padding: '1vh 2vw',
            fontSize: '1.2vw',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onClick={() => cardSwapRef.current?.swapForward()}
        >
          Next ▶
        </button>
        <button
          style={{
            background: expanded ? '#d3d0d6' : 'rgba(35,32,38,0.8)',
            color: expanded ? '#232026' : '#d3d0d6',
            border: '1px solid #d3d0d6',
            borderRadius: '8px',
            padding: '1vh 2vw',
            fontSize: '1.2vw',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onClick={() => setExpanded(e => !e)}
        >
          {expanded ? 'Collapse' : 'Expand'}
        </button>
      </div>
    </div>
  );
} 