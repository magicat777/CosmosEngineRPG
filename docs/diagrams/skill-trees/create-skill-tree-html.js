// JavaScript to generate skill tree HTML files
const skillTrees = {
  pilot: {
    name: "PILOT",
    skills: {
      base: {
        name: "Basic Piloting",
        scale: "Personal",
        effect: "Can operate ground vehicles and small craft, +1 to piloting rolls",
        description: "You know how to drive and fly basic vehicles"
      },
      journeyman: [
        {
          rank: 2,
          name: "Ace Reflexes",
          scale: "Personal → Vehicle",
          effect: "+2 to evasion, can perform one stunt maneuver per scene",
          description: "Your reflexes make you hard to hit"
        },
        {
          rank: 3,
          name: "Vehicle Specialist",
          scale: "Vehicle",
          effect: "Master one vehicle type, +3 to all rolls with that type",
          description: "You know your chosen vehicle inside and out"
        }
      ],
      master: [
        {
          rank: 4,
          name: "Combat Pilot",
          scale: "Vehicle → Starship",
          effect: "Fire weapons while performing evasive maneuvers, no penalties",
          description: "You seamlessly blend offense and defense"
        },
        {
          rank: 6,
          name: "Capital Ship Helm",
          scale: "Starship",
          effect: "Can pilot any size vessel, coordinate with crew for +2 to all ship actions",
          description: "From fighters to dreadnoughts, you fly them all"
        }
      ],
      grandmaster: [
        {
          rank: 8,
          name: "Void Dancer",
          scale: "Starship → Fleet",
          effect: "Your ship can dodge attacks meant for others, share your evasion with allies",
          description: "You make the impossible look routine"
        },
        {
          rank: 10,
          name: "FLEET ADMIRAL",
          scale: "Fleet",
          effect: "Coordinate entire fleets in perfect formation, all allied ships gain your pilot bonus",
          description: "Armadas dance to your commands",
          titles: ["Starborn", "Master of the Void", "The Untouchable"]
        }
      ]
    }
  },
  tech: {
    name: "TECH",
    skills: {
      base: {
        name: "Tech Savvy",
        scale: "Personal",
        effect: "Basic computer use and repairs, +1 to all tech rolls",
        description: "You understand modern technology"
      },
      journeyman: [
        {
          rank: 2,
          name: "System Specialist",
          scale: "Personal → Vehicle",
          effect: "+2 to hacking or repair, bypass security systems",
          description: "You excel at either breaking or fixing systems"
        },
        {
          rank: 3,
          name: "Tech Innovation",
          scale: "Vehicle",
          effect: "Create custom modifications, improve equipment by one tier",
          description: "You see potential improvements everywhere"
        }
      ],
      master: [
        {
          rank: 4,
          name: "Cyber Warfare",
          scale: "Vehicle → Starship",
          effect: "Control multiple systems simultaneously, attack or defend in cyberspace",
          description: "The digital realm is your battlefield"
        },
        {
          rank: 6,
          name: "Ship Systems Master",
          scale: "Starship",
          effect: "Optimize any ship system for +50% efficiency, prevent critical failures",
          description: "You make starships purr like kittens"
        }
      ],
      grandmaster: [
        {
          rank: 8,
          name: "Technology Prophet",
          scale: "Starship → Fleet",
          effect: "Invent new technologies, upgrade entire fleets with innovations",
          description: "You push the boundaries of what's possible"
        },
        {
          rank: 10,
          name: "TECHNOMANCER",
          scale: "Fleet",
          effect: "Technology obeys your will, control any system with a thought",
          description: "The line between you and technology has vanished",
          titles: ["The Architect", "Digital God", "Master of Machines"]
        }
      ]
    }
  },
  medical: {
    name: "MEDICAL",
    skills: {
      base: {
        name: "First Aid",
        scale: "Personal",
        effect: "Stabilize wounded, basic healing, +1 to medical rolls",
        description: "You know basic emergency medicine"
      },
      journeyman: [
        {
          rank: 2,
          name: "Field Medic",
          scale: "Personal → Vehicle",
          effect: "Heal during combat without penalties, +2 HP restored per treatment",
          description: "You work efficiently under fire"
        },
        {
          rank: 3,
          name: "Diagnostic Expert",
          scale: "Vehicle",
          effect: "Identify any condition instantly, treat exotic diseases and poisons",
          description: "No ailment escapes your trained eye"
        }
      ],
      master: [
        {
          rank: 4,
          name: "Combat Surgeon",
          scale: "Vehicle → Starship",
          effect: "Perform surgery in any conditions, save mortally wounded characters",
          description: "You operate flawlessly in chaos"
        },
        {
          rank: 6,
          name: "Ship's Doctor",
          scale: "Starship",
          effect: "Treat entire crews efficiently, prevent plagues, cybernetic surgery",
          description: "You keep hundreds healthy in the void"
        }
      ],
      grandmaster: [
        {
          rank: 8,
          name: "Miracle Worker",
          scale: "Starship → Fleet",
          effect: "Reverse death if within 10 minutes, cure the incurable",
          description: "You laugh at medical impossibilities"
        },
        {
          rank: 10,
          name: "LIFE BRINGER",
          scale: "Fleet",
          effect: "Mass healing abilities, resurrect the recently dead, grant regeneration",
          description: "Life and death bend to your will",
          titles: ["The Healer", "Death's Bane", "Saint of Medicine"]
        }
      ]
    }
  }
};

// HTML template function
function generateSkillTreeHTML(skillData, skillName) {
  const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${skillData.name} Skill Tree - Cosmos Engine RPG</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            color: #fff;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .header {
            text-align: center;
            padding: 2rem;
            width: 100%;
        }

        .header h1 {
            margin: 0;
            font-size: 2.5rem;
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }

        .header p {
            margin: 0.5rem 0;
            color: #b8c5d4;
            font-size: 1.1rem;
        }

        .tree-container {
            width: 90%;
            max-width: 1200px;
            margin: 2rem auto;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            padding: 3rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .skill-tree {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            position: relative;
        }

        .tier {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
        }

        .tier-label {
            font-size: 1.3rem;
            font-weight: bold;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #ffd700;
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }

        .skills-row {
            display: flex;
            gap: 2rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .skill {
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid #4a5568;
            border-radius: 15px;
            padding: 1.5rem;
            width: 280px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .skill::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, transparent, transparent);
            border-radius: 15px;
            z-index: -1;
            transition: all 0.3s ease;
        }

        .skill:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        /* Tier-specific colors */
        .base-skill {
            border-color: #3182ce;
        }
        .base-skill::before {
            background: linear-gradient(45deg, #3182ce, #2c5282);
        }

        .journeyman-skill {
            border-color: #48bb78;
        }
        .journeyman-skill::before {
            background: linear-gradient(45deg, #48bb78, #2f855a);
        }

        .master-skill {
            border-color: #ed8936;
        }
        .master-skill::before {
            background: linear-gradient(45deg, #ed8936, #c05621);
        }

        .grandmaster-skill {
            border-color: #e53e3e;
        }
        .grandmaster-skill::before {
            background: linear-gradient(45deg, #e53e3e, #c53030);
        }

        .skill-rank {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(0, 0, 0, 0.5);
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: bold;
        }

        .skill-name {
            font-size: 1.3rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            color: #fff;
        }

        .skill-scale {
            font-size: 0.9rem;
            color: #cbd5e0;
            margin-bottom: 0.8rem;
            font-style: italic;
        }

        .skill-effect {
            font-size: 1rem;
            line-height: 1.4;
            margin-bottom: 0.8rem;
            color: #e2e8f0;
        }

        .skill-description {
            font-size: 0.9rem;
            color: #a0aec0;
            font-style: italic;
        }

        .grandmaster-title {
            margin-top: 0.5rem;
            font-size: 0.85rem;
            color: #ffd700;
            font-weight: bold;
        }

        /* Connection lines */
        .tier:not(:last-child)::after {
            content: '';
            position: absolute;
            bottom: -3rem;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 3rem;
            background: linear-gradient(to bottom, #4a5568, transparent);
        }

        /* Scale legend */
        .scale-legend {
            margin-top: 3rem;
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .scale-legend h3 {
            margin-top: 0;
            color: #ffd700;
            text-align: center;
        }

        .scale-items {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 1rem;
        }

        .scale-item {
            text-align: center;
            padding: 0.5rem 1rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
        }

        .scale-ranks {
            font-weight: bold;
            color: #e2e8f0;
        }

        .scale-name {
            font-size: 0.9rem;
            color: #a0aec0;
        }

        /* Responsive design */
        @media (max-width: 768px) {
            .tree-container {
                padding: 1.5rem;
            }
            
            .skill {
                width: 100%;
                max-width: 350px;
            }
            
            .header h1 {
                font-size: 2rem;
            }
        }

        /* Glow animations */
        @keyframes glow {
            0% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.2); }
            50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.2); }
            100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.2); }
        }

        .grandmaster-skill:hover {
            animation: glow 2s infinite;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>${skillData.name} SKILL TREE</h1>
        <p>Streamlined Progression System - 7 Skills Total</p>
    </div>

    <div class="tree-container">
        <div class="skill-tree">
            <!-- Base Tier -->
            <div class="tier">
                <div class="tier-label">Base Skill</div>
                <div class="skills-row">
                    <div class="skill base-skill">
                        <div class="skill-rank">Rank 1</div>
                        <div class="skill-name">${skillData.skills.base.name}</div>
                        <div class="skill-scale">Scale: ${skillData.skills.base.scale}</div>
                        <div class="skill-effect">${skillData.skills.base.effect}</div>
                        <div class="skill-description">${skillData.skills.base.description}</div>
                    </div>
                </div>
            </div>

            <!-- Journeyman Tier -->
            <div class="tier">
                <div class="tier-label">Journeyman Tier (Ranks 2-3)</div>
                <div class="skills-row">
                    ${skillData.skills.journeyman.map(skill => `
                    <div class="skill journeyman-skill">
                        <div class="skill-rank">Rank ${skill.rank}</div>
                        <div class="skill-name">${skill.name}</div>
                        <div class="skill-scale">Scale: ${skill.scale}</div>
                        <div class="skill-effect">${skill.effect}</div>
                        <div class="skill-description">${skill.description}</div>
                    </div>
                    `).join('')}
                </div>
            </div>

            <!-- Master Tier -->
            <div class="tier">
                <div class="tier-label">Master Tier (Ranks 4-6)</div>
                <div class="skills-row">
                    ${skillData.skills.master.map(skill => `
                    <div class="skill master-skill">
                        <div class="skill-rank">Rank ${skill.rank}</div>
                        <div class="skill-name">${skill.name}</div>
                        <div class="skill-scale">Scale: ${skill.scale}</div>
                        <div class="skill-effect">${skill.effect}</div>
                        <div class="skill-description">${skill.description}</div>
                    </div>
                    `).join('')}
                </div>
            </div>

            <!-- Grandmaster Tier -->
            <div class="tier">
                <div class="tier-label">Grandmaster Tier (Ranks 7-10)</div>
                <div class="skills-row">
                    ${skillData.skills.grandmaster.map(skill => `
                    <div class="skill grandmaster-skill">
                        <div class="skill-rank">Rank ${skill.rank}</div>
                        <div class="skill-name">${skill.name}</div>
                        <div class="skill-scale">Scale: ${skill.scale}</div>
                        <div class="skill-effect">${skill.effect}</div>
                        <div class="skill-description">${skill.description}</div>
                        ${skill.titles ? `<div class="grandmaster-title">Titles: "${skill.titles.join('" • "')}"</div>` : ''}
                    </div>
                    `).join('')}
                </div>
            </div>
        </div>

        <!-- Scale Legend -->
        <div class="scale-legend">
            <h3>Scale Progression</h3>
            <div class="scale-items">
                <div class="scale-item">
                    <div class="scale-ranks">Ranks 1-2</div>
                    <div class="scale-name">Personal Scale</div>
                </div>
                <div class="scale-item">
                    <div class="scale-ranks">Rank 3</div>
                    <div class="scale-name">Squad/Vehicle</div>
                </div>
                <div class="scale-item">
                    <div class="scale-ranks">Ranks 4-5</div>
                    <div class="scale-name">Vehicle → Starship</div>
                </div>
                <div class="scale-item">
                    <div class="scale-ranks">Rank 6</div>
                    <div class="scale-name">Capital Ships</div>
                </div>
                <div class="scale-item">
                    <div class="scale-ranks">Ranks 7-9</div>
                    <div class="scale-name">Multi-ship Ops</div>
                </div>
                <div class="scale-item">
                    <div class="scale-ranks">Rank 10</div>
                    <div class="scale-name">Fleet Command</div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;
  
  return template;
}

// Export the function and data
console.log("Skill tree HTML generator ready");
console.log("Use generateSkillTreeHTML(skillTrees.pilot, 'pilot') to generate HTML");