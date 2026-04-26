# Migrate Static CV to Deployable React Web App

This plan outlines the steps to convert the existing static `fma-CV.html` file into a modern, deployable React web application using Vite.

## User Review Required

> [!IMPORTANT]
> - A new Vite+React project named `cv-webapp` will be created inside the current workspace (`/home/filipmc/Documents/antigravity/cv-webapp`). Is this naming and location acceptable?
> - The web app will use standard React and Vanilla CSS (porting the existing CSS directly to maintain the current design).

## Proposed Changes

### Setup Vite+React App
- Create a new Vite application: `npx -y create-vite@latest cv-webapp --template react`
- Navigate to the directory and run `npm install`
- Clean up default Vite boilerplate files (e.g., `App.css`, `vite.svg`)

### Porting Styles
#### [MODIFY] `src/index.css`
- Move all the CSS from the `<style>` tag in `fma-CV.html` into `src/index.css`.
- Update the default body styles, variables, and animations to match the CV design.

### Porting Components and Logic
#### [MODIFY] `src/App.jsx`
- Convert the entire HTML body structure from `fma-CV.html` into JSX.
- Rename all `class` attributes to `className`.
- Convert inline styles to React style objects (e.g., `style={{ paddingTop: '90px' }}`).
- Rewrite the Vanilla Javascript logic into React Hooks:
  - **Intersection Observer**: Use a `useEffect` to attach the observer to `reveal` classes for scroll animations.
  - **Scroll Navigation**: Use a `useEffect` to listen to scroll events and update an `activeSection` state.
  - **Job Toggle**: Create a `JobCard` component that uses local state (`useState`) to toggle the accordion instead of the existing inline `onclick="toggleJob(this)"` function.

### Extracting Components (Optional but recommended for React)
- I will split repetitive sections like `JobCard`, `SkillCard`, and `LanguageCard` into their own functional React components to keep `App.jsx` clean and maintainable.

## Verification Plan

### Automated Tests
- Run `npm run build` to verify the application builds without any JSX or CSS errors.
- Run `npm run dev` in the background and use a browser subagent to verify the page renders exactly as the original static file, including animations and job toggling.
