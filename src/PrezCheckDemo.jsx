
# Optional: create project folder & init
mkdir prezcheck && cd prezcheck
npm init -y

# Copy `PrezCheckDemo.jsx` into src/
mkdir src && touch src/PrezCheckDemo.jsx
# (paste code from canvas)

# Add package deps
npm install react react-dom

# Create Git repo & push to GitHub
git init

# First commit
git add .
git commit -m "Initial PrezCheck prototype"

# Create repo on GitHub UI (public or private)
# Then push:
git remote add origin https://github.com/<your_user>/prezcheck.git
git branch -M main
git push -u origin main
