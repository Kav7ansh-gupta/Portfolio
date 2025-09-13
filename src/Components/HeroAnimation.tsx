// Main App Component - Everything is self-contained here.
export default function App() {
  // --- Reusable Components ---

  /**
   * @param {{
   * className: string;
   * lines: {type: string, text: string}[];
   * animationDelay: string;
   * }} props
   */
  const CodeWindow = ({
    className,
    lines,
    animationDelay,
  }: {
    className: string;
    lines: { type: string; text: string }[];
    animationDelay: string;
  }) => (
    <div className={`code-window ${className}`} style={{ animationDelay }}>
      <div className="window-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>
      <div className="window-body">
        {lines.map((line, index) => (
          <div key={`${index}-${line.text}`} className="code-line-container">
            <span className="line-number">{index + 1}</span>
            <pre className="code-line">
              <span className={line.type}>{line.text}</span>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );

  // --- Main Render ---

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Roboto+Mono&display=swap');

        :root {
            --accent-pink: #F92C85;
            --accent-orange: #FF7A59;
            --text-light: #EAEAF5;
            --window-bg: rgba(40, 42, 80, 0.4);
            --window-border: rgba(150, 150, 200, 0.2);
        }

        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
        }

        .hero-container {
            display: flex;
            justify-content: center;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            color: var(--text-light);
        }

        /* Animations */
        @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(var(--initial-rotate, 0deg)); }
            50% { transform: translateY(var(--y-float, -10px)) translateX(var(--x-float, 5px)) rotate(var(--initial-rotate, 0deg)); }
        }

        @keyframes breathe {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(4px); }
        }

        /* Illustration Styles */
        .illustration-wrapper {
            position: relative;
            width: clamp(300px, 80vw, 700px);
            height: clamp(300px, 80vh, 500px);
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* Developer Styles */
        .developer-wrapper {
            position: relative;
            z-index: 5;
            animation: breathe 5s infinite ease-in-out;
        }

        .developer {
            position: relative;
            width: 150px;
            height: 200px;
            bottom:70px
        }

        .developer-head {
            width: 70px;
            height: 70px;
            background: linear-gradient(
                to bottom,
                black 0%,
                black 30%,
                #FFDAB9 30%,
                #FFDAB9 100%
            ); /* Black circle top 30%, rest skin */
            border-radius: 50%;
            position: absolute;
            left: 50px;
            overflow: hidden;
        }

        .eye {
            position: absolute;
            width: 5px;
            height: 5px;
            background: #000;
            border-radius: 50%;
            top: 55%;
            z-index: 2;
        }
        .eye.left { left: 25%; }
        .eye.right { right: 25%; }

        .nose {
            position: absolute;
            width: 2px;
            height: 5px;
            background: rgba(0,0,0,0.4);
            border-radius: 2px;
            top: 65%;
            left: 50%;
            transform: translateX(-50%);
        }

        .smile {
            position: absolute;
            width: 18px;
            height: 8px;
            border: 2px solid transparent;
            border-bottom-color: #000;
            border-radius: 0 0 50% 50% / 0 0 100% 100%;
            bottom: 15%;
            left: 50%;
            transform: translateX(-50%);
        }

        .glasses {
            position: absolute;
            width: 15px; /* Bridge width */
            height: 2px;
            background: #000;
            top: 56%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 3;
        }

        .glasses::before,
        .glasses::after {
            content: '';
            position: absolute;
            width: 22px;
            height: 22px;
            border: 2px solid #000;
            border-radius: 50%;
            top: -11px; /* Center vertically */
        }

        .glasses::before {
            right: 90%; 
        }

        .glasses::after {
            left: 90%;
        }


        .developer-body {
            width: 140px;
            height: 120px;
            background: #eb6de0ff; /* Orange shirt */
            border-radius: 30px 30px 10px 10px;
            position: absolute;
            bottom: 0;
            left: 15px;
        }
        
        .developer-legs {
            position: absolute;
            bottom: 0;
            left: 85px;
            transform: translateX(-50%);
            width: 140px;
            height: 40px;
        }
        
        .leg {
             width: 60px;
             height: 50px;
             background: #333;
             position: absolute;
             border-radius: 10px 10px 20px 20px;
        }
        .leg.left { left: 0; }
        .leg.right { right: 0; }


        .laptop {
            position: absolute;
            width: 100px;
            height: 60px;
            background: #B0BEC5;
            border-radius: 5px 5px 0 0;
            border: 4px solid #546E7A;
            bottom: 30px;
            left: 85px;
            transform: translateX(-50%) perspective(40px) rotateX(15deg);
            z-index: 6;
        }
        .laptop::after { /* Keyboard part */
             content: '';
             position: absolute;
             width: 100%;
             height: 4px;
             background: #78909C;
             bottom: -4px;
             left: 0;
             border-radius: 0 0 5px 5px;
        }

        /* Code Window Styles */
        .code-window {
            position: absolute;
            background-color: var(--window-bg);
            border: 1px solid var(--window-border);
            border-radius: 8px;
            backdrop-filter: blur(8px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            padding: 10px;
            font-family: 'Roboto Mono', monospace;
            animation: float 5s infinite ease-in-out;
        }

        .window-header {
            display: flex;
            gap: 6px;
            padding-bottom: 8px;
            border-bottom: 1px solid var(--window-border);
            margin-bottom: 8px;
        }
        .dot { width: 12px; height: 12px; border-radius: 50%; }
        .dot.red { background: #ff5f56; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #27c93f; }

        .code-line-container { display: flex; font-size: 0.65rem; white-space: pre; } /* Decreased font size */
        .line-number { color: #888; margin-right: 10px; user-select: none; }
        .code-line { margin: 0; }
        .code-line .tag { color: #e06c75; }
        .code-line .attr { color: #d19a66; }
        .code-line .keyword { color: #c678dd; }
        .code-line .variable { color: #61afef; }
        .code-line .text { color: var(--text-light); }

        /* Positioning the Windows */
        .window-back {
            top: 60px;
            left: 40px;
            z-index: 2;
            --initial-rotate: -8deg;
            --y-float: 12px;
            --x-float: -6px;
        }

        .window-middle {
            top: 220px;
            left: 100px;
            z-index: 4;
            --y-float: -8px;
            --x-float: 4px;
        }
        
        .window-front {
            top: 150px;
            right: 50px;
            z-index: 3;
            --initial-rotate: 5deg;
            --y-float: 10px;
            --x-float: 8px;
        }
      `}</style>

      <div className="hero-container">
        <div className="illustration-wrapper">
          <CodeWindow
            className="window-back"
            animationDelay="0.5s"
            lines={[
              { type: "tag", text: "<div " },
              { type: "attr", text: '  className="app">' },
              { type: "text", text: "    ..." },
              { type: "tag", text: "</div>" },
            ]}
          />

          <CodeWindow
            className="window-front"
            animationDelay="0.2s"
            lines={[
              { type: "keyword", text: "print('Hello World!!!')" },
              { type: "variable", text: "Hello World!!!" },
            ]}
          />

          <CodeWindow
            className="window-middle"
            animationDelay="0s"
            lines={[
              { type: "text", text: "{" },
              { type: "attr", text: '  "version": "1.0.0",' },
              { type: "attr", text: '  "name": "my-app"' },
              { type: "text", text: "}" },
            ]}
          />

          <div className="developer-wrapper">
            <div className="developer">
              <div className="developer-head">
                <div className="glasses"></div>
                <div className="eye left"></div>
                <div className="eye right"></div>
                <div className="nose"></div>
                <div className="smile"></div>
              </div>
              <div className="developer-body"></div>
              <div className="developer-legs">
                <div className="leg left"></div>
                <div className="leg right"></div>
              </div>
              <div className="laptop"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
