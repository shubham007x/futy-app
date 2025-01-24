# Match Cards Component

This project is a React-based component that dynamically renders sports match cards, categorized by their status (`Live`, `Upcoming`, `Completed`) and grouped by dates. It includes features like filtering and responsive design.

## Features

1. **Dynamic Match Rendering:**
   - Displays matches grouped by date.
   - Categories include `Live`, `Upcoming`, and `Completed`.

2. **Interactive Filtering:**
   - Users can switch between different categories using buttons.

3. **Date-Centric Layout:**
   - Matches are grouped under a centered, styled date with decorative horizontal lines.

4. **Reusable Components:**
   - The `MatchCard` component is highly reusable for rendering individual matches.

## Folder Structure

```
src/
├── Components/
│   ├── CSS/
│   │   ├── Footer.css
│   │   ├── Header.css
│   │   ├── MainContent.css
│   │   └── MatchCard.css
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── MainContent.jsx
│   └── MatchCard.jsx
├── Images/
│   ├── football.png
│   ├── logo.png
│   └── ... other images
├── App.js
└── index.js
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd match-cards
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Add match details in the `matchDetails` array inside `MainContent.jsx`. Each match object should follow this structure:

   ```javascript
   {
     id: 1,
     homeTeam: "SOU",
     awayTeam: "MUN",
     date: "SEP 14",
     time: "17:00",
     homeLogo: "../Images/football.png",
     awayLogo: "../Images/logo.png",
     status: "Live", // Options: Live, Upcoming, Completed
   }
   ```

2. The UI dynamically categorizes and displays matches based on their `status` and groups them by `date`.

## Components

### MatchCard
- A reusable component to display individual match details.
- Props:
  - `homeTeam`: Name of the home team.
  - `awayTeam`: Name of the away team.
  - `date`: Date of the match.
  - `time`: Time of the match.
  - `homeLogo`: Path to the home team's logo.
  - `awayLogo`: Path to the away team's logo.

### MainContent
- Handles the filtering and rendering of match cards.
- Features:
  - Three buttons for `Live`, `Upcoming`, and `Completed` matches.
  - Groups matches by date and displays them with a styled heading.

## Styling

- **Filter Buttons:**
  - Active and hover states for better interactivity.

- **Date Grouping:**
  - Date is displayed at the center with horizontal lines extending on both sides.
  
- **Responsive Design:**
  - Match cards are displayed in a grid layout, adjusting for smaller screens.

## Example Output

- **Filter Buttons:** At the top of the page for switching between match categories.
- **Date Grouping:** Matches are grouped by date with a visually appealing layout.
- **Match Cards:** Rendered dynamically under each date.

## Future Enhancements

1. Add animations for better transitions between categories.
2. Implement search functionality to find matches by team name.
3. Add pagination for large sets of matches.

## License

This project is open-source and available under the MIT License.
