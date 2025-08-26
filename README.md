# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# FortiPass

FortiPass is a modern password strength and breach checker web application built with React and Tailwind CSS.

## Features
- **Password Entropy Calculation:** Instantly see the entropy (strength) of your password in bits.
- **Strength Label:** Passwords are labeled as Too Weak, Weak, Moderate, or Strong based on entropy.
- **Common Word Detection:** Warns if your password contains common or weak words.
- **Breach Check:** Checks if your password has appeared in known breaches (using an API).
- **Suggestions:** Provides actionable suggestions to improve your password.
- **Centralized UI:** The app interface is fully centered and responsive for a clean user experience.

## Tech Stack
- **React** (Vite)
- **Tailwind CSS**
- **JavaScript**

## Project Structure
```
src/
  App.jsx           # Main app component
  App.css           # Custom styles
  index.css         # Global styles
  main.jsx          # Entry point
  assets/           # Images and icons
  utils/            # Password logic modules
	 checkBreach.js
	 checkCommonWords.js
	 commonPasswords.js
	 entropyCalculator.js
	 suggestions.js
public/
  vite.svg          # Vite logo
```

## Getting Started
1. **Install dependencies:**
	```bash
	npm install
	```
2. **Run the app locally:**
	```bash
	npm run dev
	```
3. **Open in browser:**
	Visit `http://localhost:5173` (or the port shown in your terminal).

## Progress
- [x] Password entropy calculation
- [x] Strength labeling
- [x] Common word detection
- [x] Breach check integration
- [x] Suggestions for improvement
- [x] Centralized, modern UI

## Next Steps
- Add more advanced password analysis
- Improve breach check reliability
- Polish UI and add accessibility features

---
Feel free to contribute or suggest improvements!
