function Features() {
    const topFeatures = [
      { image: "productivity.png", caption: "Productivity Tools" },
      { image: "team_collab.png", caption: "Team Collab" },
      { image: "filemanagement.png", caption: "File Management" }
    ];
  
    const bottomFeatures = [
      { image: "editor.png", caption: "Editors" },
      { image: "healthcare.png", caption: "Health Analyzer" }
    ];
  
    return (
      <div className="section">
        <div className="grid-container">
          {topFeatures.map((feature, index) => (
            <div key={index} className="grid-item-wrapper">
              <div className="grid-item">
                <img src={`/${feature.image}`} alt={feature.caption} />
              </div>
              <p className="grid-caption">{feature.caption}</p>
            </div>
          ))}
        </div>
        <div className="bottom-section">
          {bottomFeatures.map((feature, index) => (
            <div key={index} className="grid-item-wrapper">
              <div className="grid-item">
                <img src={`/${feature.image}`} alt={feature.caption} />
              </div>
              <p className="grid-caption">{feature.caption}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Features;