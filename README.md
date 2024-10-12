AI-Powered Regulatory Search

A frontend application built using React to provide an AI-powered search platform for court cases and regulatory publications. The application features advanced filters, sorting, and pagination to enhance user experience and help users quickly find the information they need.

Features
Search Functionality: Users can search for specific cases and publications.
Advanced Filters: Filter by category, decision, company, and date to narrow down results.
Sorting Options: Sort results alphabetically or by date.
Pagination: Results are displayed in pages with an option to select how many results per page (5, 10, or 15).
Responsive Design: The application adapts to different screen sizes.


Technologies Used
React: Core framework for building the UI.
Styled-Components: Used for styling the components.
JavaScript (ES6+): For application logic.
HTML5 & CSS3: Markup and basic styling.
Git: Version control for managing the source code.


Project Structure
├── public/
├── src/
│    └── components/
│        └── features/          # Feature-specific components (Filter function, pagination, 
│                               Result Header,Search Result and Search Form)
│        └── layout/            # Layout components (header, footer, sidebar)
│        └── pages/             # Page-level components (SearchPage)
│    └── services/              # Services for API calls, data fetching
├── App.js                      # Main application file
├── index.js                    # Entry point of the application
├── README.md                   # Project documentation
└── package.json                # Project dependencies and scripts



Getting Started
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v12.x or higher)
npm or yarn
Installation
Clone the repository:


git clone https://github.com/aliraza456/regulatory-search-app.git
Navigate to the project directory:

npm start
This will start the development server and open the app in your default browser at http://localhost:3000.

Running Tests
If there are unit tests in the project, you can run them with:

npm test
Deployment
To build the project for production:

npm run build
The production-ready files will be available in the build/ directory.


Usage
Search: Enter keywords into the search bar to search for specific court cases or regulatory documents.
Filter: Use the available filters (Category, Decision, Company, and Date) to refine search results.
Sort: Sort the search results alphabetically or by date.
Pagination: Navigate between pages to view more results.