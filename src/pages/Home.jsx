import { useEffect, useState } from 'react';
import Lanyard from '../components/Lanyard/Lanyard';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function AnimatedIntro() {
  // Greeting and outro are animated word by word, name is shown as a whole
  const greeting = "Hi there! I'm";
  const name = "Kunal Chadha";
  const outro = "Welcome to my portfolio. Thanks for stopping by!";

  const [visibleGreetingCount, setVisibleGreetingCount] = useState(0);
  const [showName, setShowName] = useState(false);
  const [visibleOutroCount, setVisibleOutroCount] = useState(0);

  useEffect(() => {
    const greetingArr = greeting.split(' ');
    const outroArr = outro.split(' ');
    
    let timers = [];

    function animateGreeting() {
      if (visibleGreetingCount < greetingArr.length) {
        setVisibleGreetingCount(prev => prev + 1);
        timers.push(setTimeout(animateGreeting, 120));
      } else {
        timers.push(setTimeout(() => setShowName(true), 300));
        timers.push(setTimeout(animateOutro, 600));
      }
    }

    function animateOutro() {
      if (visibleOutroCount < outroArr.length) {
        setVisibleOutroCount(prev => prev + 1);
        timers.push(setTimeout(animateOutro, 5));
      }
    }

    timers.push(setTimeout(animateGreeting, 300));
    return () => timers.forEach(clearTimeout);
  }, [visibleGreetingCount, visibleOutroCount]);

  const greetingArr = greeting.split(' ');
  const outroArr = outro.split(' ');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2vw' }}>
      <div style={{ fontSize: '2vw', color: '#d3d0d6', fontWeight: 500, textAlign: 'center', minHeight: '2.5vw' }}>
        {greetingArr.map((word, index) => (
          <span 
            key={index} 
            className={index < visibleGreetingCount ? "fade-in-word" : ""} 
            style={{ 
              animationDelay: index < visibleGreetingCount ? `${index * 0.1}s` : '0s',
              animationFillMode: 'both',
              marginRight: '0.3em'
            }}
          >
            {word}
          </span>
        ))}
      </div>
      <div style={{ fontSize: '7vw', fontWeight: 800, color: '#d3d0d6', textAlign: 'center', lineHeight: 1.1, fontFamily: 'Poppins, Montserrat, Inter, Arial, sans-serif', minHeight: '9vw' }}>
        {showName && (
          <span 
            className="fade-in-word"
            style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
          >
            {name}
          </span>
        )}
      </div>
      <div style={{ fontSize: '2vw', color: '#d3d0d6', fontWeight: 400, textAlign: 'center', minHeight: '2.5vw' }}>
        {outroArr.map((word, index) => (
          <span 
            key={index} 
            className={index < visibleOutroCount ? "fade-in-word" : ""} 
            style={{ 
              animationFillMode: 'both',
              marginRight: '0.3em'
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}

function SocialIcons() {
  return (
    <div style={{
      position: 'absolute',
      top: '3vh',
      left: '3vw',
      display: 'flex',
      gap: '1.5vw',
      zIndex: 10
    }}>
      <a 
        href="https://github.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          color: '#d3d0d6',
          fontSize: '1.8vw',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <FaGithub />
      </a>
      <a 
        href="https://linkedin.com/in/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          color: '#d3d0d6',
          fontSize: '1.8vw',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <FaLinkedin />
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} objectPosition={[5, 4, 0]} />
      <SocialIcons />
      <AnimatedIntro />
    </>
  );
} 