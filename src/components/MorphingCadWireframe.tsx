import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const MorphingCadWireframe = () => {
  const [currentShape, setCurrentShape] = React.useState(0);
  const { theme } = useTheme();
  
  // Define theme-aware colors
  const wireColor = theme === 'light' ? 'rgba(45, 55, 72, 0.6)' : 'rgba(8, 203, 0, 0.6)'; // Dark gray or matrix green
  const wireFillLight = theme === 'light' ? 'rgba(45, 55, 72, 0.15)' : 'rgba(8, 203, 0, 0.15)';
  const wireFillMedium = theme === 'light' ? 'rgba(45, 55, 72, 0.1)' : 'rgba(8, 203, 0, 0.1)';
  const wireFillDark = theme === 'light' ? 'rgba(45, 55, 72, 0.08)' : 'rgba(8, 203, 0, 0.08)';
  const wireFillVeryLight = theme === 'light' ? 'rgba(45, 55, 72, 0.05)' : 'rgba(8, 203, 0, 0.05)';
  const wireStroke = theme === 'light' ? 'rgba(45, 55, 72, 0.4)' : 'rgba(8, 203, 0, 0.4)';
  const wireStrokeMedium = theme === 'light' ? 'rgba(45, 55, 72, 0.5)' : 'rgba(8, 203, 0, 0.5)';
  const wireStrokeStrong = theme === 'light' ? 'rgba(45, 55, 72, 0.6)' : 'rgba(8, 203, 0, 0.6)';
  const textColor = theme === 'light' ? '#2D3748' : '#08CB00';
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShape((prev) => (prev + 1) % 4);
    }, 8000); // Change shape every 8 seconds
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] flex items-end justify-center perspective-1000">
      
      {/* Shape 0: Cylindrical Link */}
      <div className={`shape-container ${currentShape === 0 ? 'active' : ''}`} style={{ opacity: currentShape === 0 ? 1 : 0 }}>
        <div className="link-wrapper">
          {/* Large Cylinder (Boss) */}
          <div className="cylinder">
            <div className="cylinder-side"></div>
            <div className="cylinder-front"></div>
            <div className="cylinder-back"></div>
            <div className="cylinder-hole-front"></div>
            <div className="cylinder-hole-back"></div>
          </div>
          
          {/* Flat Tab/Plate */}
          <div className="tab">
            <div className="tab-face front"></div>
            <div className="tab-face back"></div>
            <div className="tab-face top"></div>
            <div className="tab-face bottom"></div>
            <div className="tab-face right"></div>
          </div>
          
          {/* Small Mounting Hole on Tab */}
          <div className="mounting-hole"></div>
          
          {/* Dimension Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
            <g><line x1="50" y1="80" x2="50" y2="220" stroke={wireColor} strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1="45" y1="80" x2="55" y2="80" stroke={wireColor} strokeWidth="1.5" />
            <line x1="45" y1="220" x2="55" y2="220" stroke={wireColor} strokeWidth="1.5" />
            <text x="25" y="155" fill={textColor} fontSize="12" fontFamily="monospace" fontWeight="600">Ø50</text></g>
            
            <g><line x1="100" y1="40" x2="380" y2="40" stroke={wireColor} strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1="100" y1="35" x2="100" y2="45" stroke={wireColor} strokeWidth="1.5" />
            <line x1="380" y1="35" x2="380" y2="45" stroke={wireColor} strokeWidth="1.5" />
            <text x="220" y="30" fill={textColor} fontSize="12" fontFamily="monospace" fontWeight="600" textAnchor="middle">140</text></g>
            
            <g><line x1="400" y1="105" x2="400" y2="195" stroke={wireColor} strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1="395" y1="105" x2="405" y2="105" stroke={wireColor} strokeWidth="1.5" />
            <line x1="395" y1="195" x2="405" y2="195" stroke={wireColor} strokeWidth="1.5" />
            <text x="410" y="155" fill={textColor} fontSize="12" fontFamily="monospace" fontWeight="600">45</text></g>
            
            <g><circle cx="315" cy="150" r="8" fill="none" stroke={wireColor} strokeWidth="1" strokeDasharray="2,2" />
            <text x="330" y="153" fill={textColor} fontSize="10" fontFamily="monospace" fontWeight="600">Ø6</text></g>
            
            <g><line x1="90" y1="245" x2="235" y2="245" stroke={wireColor} strokeWidth="1" strokeDasharray="2,2" />
            <line x1="90" y1="242" x2="90" y2="248" stroke={wireColor} strokeWidth="1" />
            <line x1="235" y1="242" x2="235" y2="248" stroke={wireColor} strokeWidth="1" />
            <text x="162" y="260" fill={textColor} fontSize="10" fontFamily="monospace" fontWeight="600" textAnchor="middle">95</text></g>
            
            <g><line x1="385" y1="240" x2="415" y2="240" stroke={wireColor} strokeWidth="1" strokeDasharray="2,2" />
            <line x1="385" y1="237" x2="385" y2="243" stroke={wireColor} strokeWidth="1" />
            <line x1="415" y1="237" x2="415" y2="243" stroke={wireColor} strokeWidth="1" />
            <text x="400" y="255" fill={textColor} fontSize="9" fontFamily="monospace" fontWeight="600" textAnchor="middle">T=20</text></g>
            
            <g><circle cx="75" cy="150" r="15" fill="none" stroke={wireColor} strokeWidth="1" strokeDasharray="2,2" />
            <text x="58" y="135" fill={textColor} fontSize="10" fontFamily="monospace" fontWeight="600">Ø25</text></g>
          </svg>
          
          <div className="axis x"></div>
          <div className="axis y"></div>
          <div className="axis z"></div>
        </div>
      </div>
      
      {/* Shape 1: L-Bracket */}
      <div className={`shape-container ${currentShape === 1 ? 'active' : ''}`} style={{ opacity: currentShape === 1 ? 1 : 0 }}>
        <div className="bracket-wrapper">
          {/* Vertical Plate */}
          <div className="bracket-vertical">
            <div className="plate-face front"></div>
            <div className="plate-face back"></div>
            <div className="plate-face top"></div>
            <div className="plate-face bottom"></div>
            <div className="plate-face left"></div>
            <div className="plate-face right"></div>
          </div>
          
          {/* Horizontal Plate */}
          <div className="bracket-horizontal">
            <div className="plate-face front"></div>
            <div className="plate-face back"></div>
            <div className="plate-face top"></div>
            <div className="plate-face bottom"></div>
            <div className="plate-face left"></div>
            <div className="plate-face right"></div>
          </div>
          
          {/* Mounting Holes */}
          <div className="bracket-hole bracket-hole-1"></div>
          <div className="bracket-hole bracket-hole-2"></div>
          
          {/* Dimensions */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
            <g><line x1="80" y1="60" x2="80" y2="200" stroke={wireColor} strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1="75" y1="60" x2="85" y2="60" stroke={wireColor} strokeWidth="1.5" />
            <line x1="75" y1="200" x2="85" y2="200" stroke={wireColor} strokeWidth="1.5" />
            <text x="60" y="135" fill={textColor} fontSize="12" fontFamily="monospace" fontWeight="600">100</text></g>
            
            <g><line x1="160" y1="220" x2="340" y2="220" stroke={wireColor} strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1="160" y1="215" x2="160" y2="225" stroke={wireColor} strokeWidth="1.5" />
            <line x1="340" y1="215" x2="340" y2="225" stroke={wireColor} strokeWidth="1.5" />
            <text x="250" y="240" fill={textColor} fontSize="12" fontFamily="monospace" fontWeight="600" textAnchor="middle">120</text></g>
            
            <g><circle cx="200" cy="100" r="12" fill="none" stroke={wireColor} strokeWidth="1" strokeDasharray="2,2" />
            <text x="220" y="105" fill={textColor} fontSize="11" fontFamily="monospace" fontWeight="600">Ø8</text></g>
            
            <g><line x1="360" y1="150" x2="420" y2="150" stroke={wireColor} strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1="360" y1="145" x2="360" y2="155" stroke={wireColor} strokeWidth="1.5" />
            <line x1="420" y1="145" x2="420" y2="155" stroke={wireColor} strokeWidth="1.5" />
            <text x="390" y="140" fill={textColor} fontSize="11" fontFamily="monospace" fontWeight="600" textAnchor="middle">T=10</text></g>
            
            <g><line x1="140" y1="50" x2="140" y2="120" stroke={wireColor} strokeWidth="1" strokeDasharray="2,2" />
            <line x1="137" y1="50" x2="143" y2="50" stroke={wireColor} strokeWidth="1" />
            <line x1="137" y1="120" x2="143" y2="120" stroke={wireColor} strokeWidth="1" />
            <text x="125" y="90" fill={textColor} fontSize="10" fontFamily="monospace" fontWeight="600">50</text></g>
            
            <g><circle cx="240" cy="165" r="10" fill="none" stroke={wireColor} strokeWidth="1" strokeDasharray="2,2" />
            <text x="255" y="168" fill={textColor} fontSize="10" fontFamily="monospace" fontWeight="600">Ø8</text></g>
            
            <g><line x1="355" y1="60" x2="355" y2="120" stroke={wireColor} strokeWidth="1" strokeDasharray="2,2" />
            <line x1="352" y1="60" x2="358" y2="60" stroke={wireColor} strokeWidth="1" />
            <line x1="352" y1="120" x2="358" y2="120" stroke={wireColor} strokeWidth="1" />
            <text x="365" y="95" fill={textColor} fontSize="10" fontFamily="monospace" fontWeight="600">40</text></g>
            
            <g><path d="M 110 180 A 20 20 0 0 1 130 200" fill="none" stroke={wireColor} strokeWidth="1" strokeDasharray="2,2" />
            <text x="95" y="195" fill={textColor} fontSize="9" fontFamily="monospace" fontWeight="600">R10</text></g>
            
            <g><text x="180" y="30" fill={textColor} fontSize="9" fontFamily="monospace" fontWeight="600">90°</text></g>
          </svg>
          
          <div className="axis x"></div>
          <div className="axis y"></div>
          <div className="axis z"></div>
        </div>
      </div>
      
      {/* Shape 2: Shaft with Keyway */}
      <div className={`shape-container ${currentShape === 2 ? 'active' : ''}`} style={{ opacity: currentShape === 2 ? 1 : 0 }}>
        <div className="shaft-wrapper">
          {/* Main Shaft Cylinder */}
          <div className="shaft-main">
            <div className="shaft-side"></div>
            <div className="shaft-front"></div>
            <div className="shaft-back"></div>
          </div>
          
          {/* Keyway Slot */}
          <div className="keyway">
            <div className="keyway-face top"></div>
            <div className="keyway-face bottom"></div>
            <div className="keyway-face left"></div>
            <div className="keyway-face right"></div>
          </div>
          
          {/* Shoulder */}
          <div className="shaft-shoulder">
            <div className="shoulder-side"></div>
            <div className="shoulder-front"></div>
          </div>
          
          {/* Dimensions */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
            <g><line x1="100" y1="45" x2="380" y2="45" stroke={wireColor} strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1="100" y1="40" x2="100" y2="50" stroke={wireColor} strokeWidth="1.5" />
            <line x1="380" y1="40" x2="380" y2="50" stroke={wireColor} strokeWidth="1.5" />
            <text x="240" y="35" fill={textColor} fontSize="12" fontFamily="monospace" fontWeight="600" textAnchor="middle">180</text></g>
            
            <g><line x1="55" y1="110" x2="55" y2="190" stroke={wireColor} strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1="50" y1="110" x2="60" y2="110" stroke={wireColor} strokeWidth="1.5" />
            <line x1="50" y1="190" x2="60" y2="190" stroke={wireColor} strokeWidth="1.5" />
            <text x="30" y="155" fill={textColor} fontSize="12" fontFamily="monospace" fontWeight="600">Ø40</text></g>
            
            <g><line x1="90" y1="125" x2="90" y2="175" stroke={wireColor} strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1="85" y1="125" x2="95" y2="125" stroke={wireColor} strokeWidth="1.5" />
            <line x1="85" y1="175" x2="95" y2="175" stroke={wireColor} strokeWidth="1.5" />
            <text x="70" y="155" fill={textColor} fontSize="11" fontFamily="monospace" fontWeight="600">Ø25</text></g>
            
            <g><line x1="200" y1="100" x2="250" y2="100" stroke={wireColor} strokeWidth="1" strokeDasharray="2,2" />
            <line x1="200" y1="97" x2="200" y2="103" stroke={wireColor} strokeWidth="1" />
            <line x1="250" y1="97" x2="250" y2="103" stroke={wireColor} strokeWidth="1" />
            <text x="225" y="95" fill={textColor} fontSize="10" fontFamily="monospace" fontWeight="600" textAnchor="middle">W=8</text></g>
            
            <g><line x1="100" y1="210" x2="200" y2="210" stroke={wireColor} strokeWidth="1" strokeDasharray="2,2" />
            <line x1="100" y1="207" x2="100" y2="213" stroke={wireColor} strokeWidth="1" />
            <line x1="200" y1="207" x2="200" y2="213" stroke={wireColor} strokeWidth="1" />
            <text x="150" y="225" fill={textColor} fontSize="10" fontFamily="monospace" fontWeight="600" textAnchor="middle">L=80</text></g>
            
            <g><line x1="290" y1="110" x2="290" y2="190" stroke={wireColor} strokeWidth="1" strokeDasharray="2,2" />
            <line x1="287" y1="110" x2="293" y2="110" stroke={wireColor} strokeWidth="1" />
            <line x1="287" y1="190" x2="293" y2="190" stroke={wireColor} strokeWidth="1" />
            <text x="300" y="155" fill={textColor} fontSize="10" fontFamily="monospace" fontWeight="600">Ø40</text></g>
            
            <g><line x1="180" y1="80" x2="270" y2="80" stroke={wireColor} strokeWidth="1" strokeDasharray="2,2" />
            <line x1="180" y1="77" x2="180" y2="83" stroke={wireColor} strokeWidth="1" />
            <line x1="270" y1="77" x2="270" y2="83" stroke={wireColor} strokeWidth="1" />
            <text x="225" y="73" fill={textColor} fontSize="9" fontFamily="monospace" fontWeight="600" textAnchor="middle">50</text></g>
            
            <g><text x="200" y="120" fill={textColor} fontSize="9" fontFamily="monospace" fontWeight="600">D=4</text></g>
            
            <g><line x1="390" y1="125" x2="410" y2="125" stroke={wireColor} strokeWidth="1" strokeDasharray="2,2" />
            <line x1="390" y1="122" x2="390" y2="128" stroke={wireColor} strokeWidth="1" />
            <line x1="410" y1="122" x2="410" y2="128" stroke={wireColor} strokeWidth="1" />
            <text x="400" y="118" fill={textColor} fontSize="9" fontFamily="monospace" fontWeight="600" textAnchor="middle">T=12</text></g>
          </svg>
          
          <div className="axis x"></div>
          <div className="axis y"></div>
          <div className="axis z"></div>
        </div>
      </div>
      
      {/* Shape 3: Flanged Coupling */}
      <div className={`shape-container ${currentShape === 3 ? 'active' : ''}`} style={{ opacity: currentShape === 3 ? 1 : 0 }}>
        <div className="flange-wrapper">
          {/* Center Hub */}
          <div className="flange-hub">
            <div className="hub-side"></div>
            <div className="hub-front"></div>
            <div className="hub-back"></div>
            <div className="hub-bore-front"></div>
            <div className="hub-bore-back"></div>
          </div>
          
          {/* Flange Disk */}
          <div className="flange-disk">
            <div className="disk-side"></div>
            <div className="disk-front"></div>
            <div className="disk-back"></div>
          </div>
          
          {/* Bolt Holes */}
          <div className="bolt-hole bolt-hole-1"></div>
          <div className="bolt-hole bolt-hole-2"></div>
          <div className="bolt-hole bolt-hole-3"></div>
          <div className="bolt-hole bolt-hole-4"></div>
          
          {/* Dimensions */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
            <g><line x1="35" y1="80" x2="35" y2="220" stroke={wireColor} strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1="30" y1="80" x2="40" y2="80" stroke={wireColor} strokeWidth="1.5" />
            <line x1="30" y1="220" x2="40" y2="220" stroke={wireColor} strokeWidth="1.5" />
            <text x="15" y="155" fill={textColor} fontSize="12" fontFamily="monospace" fontWeight="600">Ø120</text></g>
            
            <g><line x1="70" y1="110" x2="70" y2="190" stroke={wireColor} strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1="65" y1="110" x2="75" y2="110" stroke={wireColor} strokeWidth="1.5" />
            <line x1="65" y1="190" x2="75" y2="190" stroke={wireColor} strokeWidth="1.5" />
            <text x="50" y="155" fill={textColor} fontSize="11" fontFamily="monospace" fontWeight="600">Ø55</text></g>
            
            <g><circle cx="180" cy="120" r="10" fill="none" stroke={wireColor} strokeWidth="1" strokeDasharray="2,2" />
            <text x="195" y="122" fill={textColor} fontSize="10" fontFamily="monospace" fontWeight="600">Ø10</text></g>
            
            <g><line x1="155" y1="40" x2="245" y2="40" stroke={wireColor} strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1="155" y1="35" x2="155" y2="45" stroke={wireColor} strokeWidth="1.5" />
            <line x1="245" y1="35" x2="245" y2="45" stroke={wireColor} strokeWidth="1.5" />
            <text x="200" y="30" fill={textColor} fontSize="11" fontFamily="monospace" fontWeight="600" textAnchor="middle">L=60</text></g>
            
            <g><line x1="390" y1="140" x2="390" y2="160" stroke={wireColor} strokeWidth="1.5" strokeDasharray="3,3" />
            <line x1="385" y1="140" x2="395" y2="140" stroke={wireColor} strokeWidth="1.5" />
            <line x1="385" y1="160" x2="395" y2="160" stroke={wireColor} strokeWidth="1.5" />
            <text x="405" y="153" fill={textColor} fontSize="10" fontFamily="monospace" fontWeight="600">T=15</text></g>
            
            <g><circle cx="205" cy="120" r="10" fill="none" stroke={wireColor} strokeWidth="1" strokeDasharray="2,2" />
            <text x="220" y="122" fill={textColor} fontSize="10" fontFamily="monospace" fontWeight="600">Ø10</text></g>
            
            <g><circle cx="180" cy="180" r="10" fill="none" stroke={wireColor} strokeWidth="1" strokeDasharray="2,2" />
            <text x="195" y="183" fill={textColor} fontSize="10" fontFamily="monospace" fontWeight="600">Ø10</text></g>
            
            <g><circle cx="205" cy="180" r="10" fill="none" stroke={wireColor} strokeWidth="1" strokeDasharray="2,2" />
            <text x="220" y="183" fill={textColor} fontSize="10" fontFamily="monospace" fontWeight="600">Ø10</text></g>
            
            <g><circle cx="105" cy="125" r="20" fill="none" stroke={wireColor} strokeWidth="1" strokeDasharray="2,2" />
            <text x="85" y="115" fill={textColor} fontSize="10" fontFamily="monospace" fontWeight="600">PCD90</text></g>
            
            <g><line x1="155" y1="250" x2="245" y2="250" stroke={wireColor} strokeWidth="1" strokeDasharray="2,2" />
            <line x1="155" y1="247" x2="155" y2="253" stroke={wireColor} strokeWidth="1" />
            <line x1="245" y1="247" x2="245" y2="253" stroke={wireColor} strokeWidth="1" />
            <text x="200" y="265" fill={textColor} fontSize="9" fontFamily="monospace" fontWeight="600" textAnchor="middle">L=60</text></g>
            
            <g><line x1="110" y1="95" x2="110" y2="115" stroke={wireColor} strokeWidth="1" strokeDasharray="2,2" />
            <line x1="107" y1="95" x2="113" y2="95" stroke={wireColor} strokeWidth="1" />
            <line x1="107" y1="115" x2="113" y2="115" stroke={wireColor} strokeWidth="1" />
            <text x="95" y="110" fill={textColor} fontSize="9" fontFamily="monospace" fontWeight="600">Ø20</text></g>
            
            <g><text x="290" y="150" fill={textColor} fontSize="9" fontFamily="monospace" fontWeight="600">4x Ø10</text></g>
          </svg>
          
          <div className="axis x"></div>
          <div className="axis y"></div>
          <div className="axis z"></div>
        </div>
      </div>
      
      <style>{`
        .perspective-1000 { perspective: 1200px; }
        .shape-container {
          position: absolute;
          inset: 0;
          transition: opacity 1.5s ease-in-out;
          pointer-events: none;
        }
        
        /* Common Wrapper Styles */
        .link-wrapper, .bracket-wrapper, .shaft-wrapper, .flange-wrapper {
          width: 350px;
          height: 250px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotateShape 12s infinite linear;
          transform: scale(0.85);
        }
        
        /* Cylindrical Link Styles */
        .cylinder {
          position: absolute;
          width: 150px;
          height: 150px;
          left: 0;
          top: 50%;
          margin-top: -75px;
          transform-style: preserve-3d;
          animation: explodeCylinder 6s ease-in-out infinite;
        }
        .cylinder-side {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 2px solid ${wireStroke};
          background: conic-gradient(from 0deg, ${wireFillLight}, ${wireFillVeryLight}, ${wireFillLight});
        }
        .cylinder-front {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 2px solid ${wireStroke};
          background: ${wireFillMedium};
          transform: translateZ(38px);
        }
        .cylinder-back {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 2px solid ${wireStroke};
          background: ${wireFillDark};
          transform: translateZ(-38px);
        }
        .cylinder-hole-front, .cylinder-hole-back {
          position: absolute;
          width: 75px;
          height: 75px;
          border-radius: 50%;
          border: 2px solid ${wireStrokeStrong};
          background: rgba(0, 0, 0, 0.6);
          top: 37.5px;
          left: 37.5px;
        }
        .cylinder-hole-front { transform: translateZ(39px); }
        .cylinder-hole-back { transform: translateZ(-39px); }
        
        .tab {
          position: absolute;
          width: 180px;
          height: 90px;
          left: 150px;
          top: 50%;
          margin-top: -45px;
          transform-style: preserve-3d;
          animation: explodeTab 6s ease-in-out infinite;
        }
        .tab-face {
          position: absolute;
          border: 2px solid ${wireStroke};
          background: ${wireFillMedium};
        }
        .tab-face.front { width: 180px; height: 90px; transform: translateZ(12px); }
        .tab-face.back { width: 180px; height: 90px; transform: translateZ(-12px); background: ${wireFillDark}; }
        .tab-face.top { width: 180px; height: 24px; top: 0; transform: rotateX(90deg) translateZ(45px); }
        .tab-face.bottom { width: 180px; height: 24px; bottom: 0; transform: rotateX(-90deg) translateZ(45px); }
        .tab-face.right { width: 24px; height: 90px; right: 0; transform: rotateY(90deg) translateZ(90px); }
        
        .mounting-hole {
          position: absolute;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 2px solid ${wireStrokeMedium};
          background: rgba(0, 0, 0, 0.5);
          left: 285px;
          top: 50%;
          margin-top: -15px;
          transform: translateZ(13px);
          animation: explodeHole 6s ease-in-out infinite;
        }
        
        /* L-Bracket Styles */
        .bracket-vertical {
          position: absolute;
          width: 80px;
          height: 140px;
          left: 80px;
          top: 30px;
          transform-style: preserve-3d;
          animation: explodeBracketV 6s ease-in-out infinite;
        }
        .bracket-horizontal {
          position: absolute;
          width: 180px;
          height: 80px;
          left: 80px;
          top: 120px;
          transform-style: preserve-3d;
          animation: explodeBracketH 6s ease-in-out infinite;
        }
        .plate-face {
          position: absolute;
          border: 2px solid ${wireStroke};
          background: ${wireFillMedium};
        }
        .bracket-vertical .plate-face.front { width: 80px; height: 140px; transform: translateZ(10px); }
        .bracket-vertical .plate-face.back { width: 80px; height: 140px; transform: translateZ(-10px); }
        .bracket-vertical .plate-face.top { width: 80px; height: 20px; top: 0; transform: rotateX(90deg) translateZ(70px); }
        .bracket-vertical .plate-face.bottom { width: 80px; height: 20px; bottom: 0; transform: rotateX(-90deg) translateZ(70px); }
        .bracket-vertical .plate-face.left { width: 20px; height: 140px; left: 0; transform: rotateY(-90deg) translateZ(40px); }
        .bracket-vertical .plate-face.right { width: 20px; height: 140px; right: 0; transform: rotateY(90deg) translateZ(40px); }
        
        .bracket-horizontal .plate-face.front { width: 180px; height: 80px; transform: translateZ(10px); }
        .bracket-horizontal .plate-face.back { width: 180px; height: 80px; transform: translateZ(-10px); }
        .bracket-horizontal .plate-face.top { width: 180px; height: 20px; top: 0; transform: rotateX(90deg) translateZ(40px); }
        .bracket-horizontal .plate-face.bottom { width: 180px; height: 20px; bottom: 0; transform: rotateX(-90deg) translateZ(40px); }
        .bracket-horizontal .plate-face.left { width: 20px; height: 80px; left: 0; transform: rotateY(-90deg) translateZ(90px); }
        .bracket-horizontal .plate-face.right { width: 20px; height: 80px; right: 0; transform: rotateY(90deg) translateZ(90px); }
        
        .bracket-hole {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid ${wireStrokeMedium};
          background: rgba(0, 0, 0, 0.5);
          transform: translateZ(11px);
        }
        .bracket-hole-1 { left: 120px; top: 70px; }
        .bracket-hole-2 { left: 200px; top: 150px; }
        
        /* Shaft Styles */
        .shaft-main {
          position: absolute;
          width: 280px;
          height: 80px;
          left: 50px;
          top: 85px;
          transform-style: preserve-3d;
          animation: explodeShaft 6s ease-in-out infinite;
        }
        .shaft-side {
          position: absolute;
          width: 280px;
          height: 80px;
          border: 2px solid ${wireStroke};
          background: linear-gradient(to bottom, ${wireFillLight}, ${wireFillVeryLight});
        }
        .shaft-front {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 2px solid ${wireStroke};
          background: ${wireFillMedium};
          right: 0;
          transform: translateZ(0) rotateY(90deg) translateZ(40px);
        }
        .shaft-back {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 2px solid ${wireStroke};
          background: ${wireFillDark};
          left: 0;
          transform: translateZ(0) rotateY(90deg) translateZ(-240px);
        }
        
        .keyway {
          position: absolute;
          width: 100px;
          height: 16px;
          left: 140px;
          top: 0;
          transform-style: preserve-3d;
          animation: explodeKeyway 6s ease-in-out infinite;
        }
        .keyway-face {
          position: absolute;
          border: 2px solid ${wireStrokeMedium};
          background: rgba(0, 0, 0, 0.4);
        }
        .keyway-face.top { width: 100px; height: 16px; transform: translateZ(0); }
        .keyway-face.bottom { width: 100px; height: 16px; transform: translateZ(-10px); }
        .keyway-face.left { width: 16px; height: 10px; left: 0; transform: rotateY(-90deg) translateZ(50px); }
        .keyway-face.right { width: 16px; height: 10px; right: 0; transform: rotateY(90deg) translateZ(50px); }
        
        .shaft-shoulder {
          position: absolute;
          width: 100px;
          height: 50px;
          left: 50px;
          top: 100px;
          transform-style: preserve-3d;
        }
        .shoulder-side {
          position: absolute;
          width: 100px;
          height: 50px;
          border: 2px solid ${wireStroke};
          background: ${wireFillMedium};
        }
        .shoulder-front {
          position: absolute;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid ${wireStroke};
          background: ${wireFillMedium};
          right: 0;
          transform: translateZ(0) rotateY(90deg) translateZ(25px);
        }
        
        /* Flange Styles */
        .flange-disk {
          position: absolute;
          width: 140px;
          height: 140px;
          left: 105px;
          top: 55px;
          transform-style: preserve-3d;
          animation: explodeFlangeDisk 6s ease-in-out infinite;
        }
        .disk-side {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 2px solid ${wireStroke};
          background: conic-gradient(from 0deg, ${wireFillLight}, ${wireFillVeryLight}, ${wireFillLight});
        }
        .disk-front {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 2px solid ${wireStroke};
          background: ${wireFillMedium};
          transform: translateZ(15px);
        }
        .disk-back {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 2px solid ${wireStroke};
          background: ${wireFillDark};
          transform: translateZ(-15px);
        }
        
        .flange-hub {
          position: absolute;
          width: 80px;
          height: 80px;
          left: 135px;
          top: 85px;
          transform-style: preserve-3d;
          animation: explodeFlangeHub 6s ease-in-out infinite;
        }
        .hub-side {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 2px solid ${wireStrokeMedium};
          background: conic-gradient(from 0deg, ${wireFillLight}, ${wireFillMedium}, ${wireFillLight});
        }
        .hub-front {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 2px solid ${wireStrokeMedium};
          background: ${wireFillMedium};
          transform: translateZ(30px);
        }
        .hub-back {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 2px solid ${wireStrokeMedium};
          background: ${wireFillMedium};
          transform: translateZ(-30px);
        }
        .hub-bore-front, .hub-bore-back {
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid ${wireStrokeStrong};
          background: rgba(0, 0, 0, 0.6);
          top: 20px;
          left: 20px;
        }
        .hub-bore-front { transform: translateZ(31px); }
        .hub-bore-back { transform: translateZ(-31px); }
        
        .bolt-hole {
          position: absolute;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid ${wireStrokeMedium};
          background: rgba(0, 0, 0, 0.5);
          transform: translateZ(16px);
        }
        .bolt-hole-1 { left: 155px; top: 80px; }
        .bolt-hole-2 { left: 205px; top: 80px; }
        .bolt-hole-3 { left: 155px; top: 150px; }
        .bolt-hole-4 { left: 205px; top: 150px; }
        
        /* Axis Lines */
        .axis {
          position: absolute;
          border: 1px dashed ${wireStroke};
          opacity: 0.25;
        }
        .axis.x {
          width: 400px;
          height: 0;
          left: 0;
          top: 125px;
          transform: translateZ(-50px);
        }
        .axis.y {
          width: 0;
          height: 300px;
          left: 175px;
          top: 0;
          transform: translateZ(-50px);
        }
        .axis.z {
          width: 100px;
          height: 0;
          left: 175px;
          top: 125px;
          transform: rotateY(90deg) translateZ(50px);
        }
        
        /* Animations */
        @keyframes rotateShape {
          from { transform: scale(0.85) rotateY(0deg) rotateX(15deg); }
          to { transform: scale(0.85) rotateY(360deg) rotateX(15deg); }
        }
        
        @keyframes explodeCylinder {
          0%, 100% { transform: translateZ(0); }
          50% { transform: translateZ(-30px); }
        }
        @keyframes explodeTab {
          0%, 100% { transform: translateZ(0); }
          50% { transform: translateZ(30px); }
        }
        @keyframes explodeHole {
          0%, 100% { transform: translateZ(13px); }
          50% { transform: translateZ(43px); }
        }
        
        @keyframes explodeBracketV {
          0%, 100% { transform: translateZ(0) translateY(0); }
          50% { transform: translateZ(0) translateY(-20px); }
        }
        @keyframes explodeBracketH {
          0%, 100% { transform: translateZ(0) translateY(0); }
          50% { transform: translateZ(0) translateY(20px); }
        }
        
        @keyframes explodeShaft {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-20px); }
        }
        @keyframes explodeKeyway {
          0%, 100% { transform: translateY(85px) translateZ(0); }
          50% { transform: translateY(85px) translateZ(15px); }
        }
        
        @keyframes explodeFlangeDisk {
          0%, 100% { transform: translateZ(0); }
          50% { transform: translateZ(-25px); }
        }
        @keyframes explodeFlangeHub {
          0%, 100% { transform: translateZ(0); }
          50% { transform: translateZ(25px); }
        }
      `}</style>
    </div>
  );
};
