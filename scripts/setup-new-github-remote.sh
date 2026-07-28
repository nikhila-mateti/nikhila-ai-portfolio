#!/usr/bin/env bash
# Creates a new GitHub repo and pushes this project without touching nikhila-mateti/portfolio.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

REPO_NAME="${1:-nikhila-ai-portfolio}"
GITHUB_USER="${GITHUB_USER:-nikhila-mateti}"
LEGACY_REMOTE="legacy-portfolio"
NEW_REMOTE="origin"

echo "→ Project: $ROOT"
echo "→ New repo: ${GITHUB_USER}/${REPO_NAME}"

# Stop linking deploys to the old Vercel project (my-portfolio / prj_lr0M8DA5Ml3OCiWQw2SKKmWPpcHt).
rm -rf .vercel

# Keep old portfolio repo as a named remote only (no push).
if git remote get-url origin 2>/dev/null | grep -q 'nikhila-mateti/portfolio.git'; then
  git remote rename origin "$LEGACY_REMOTE"
  echo "→ Renamed old remote to ${LEGACY_REMOTE}"
elif ! git remote get-url "$LEGACY_REMOTE" &>/dev/null; then
  git remote add "$LEGACY_REMOTE" "https://github.com/nikhila-mateti/portfolio.git"
  echo "→ Added ${LEGACY_REMOTE} → portfolio.git"
fi

if git remote get-url "$NEW_REMOTE" &>/dev/null 2>&1; then
  CURRENT="$(git remote get-url "$NEW_REMOTE")"
  if [[ "$CURRENT" != *"${REPO_NAME}"* ]]; then
    echo "Remote ${NEW_REMOTE} already exists: $CURRENT"
    echo "Remove it first: git remote remove ${NEW_REMOTE}"
    exit 1
  fi
else
  echo "→ Creating GitHub repo and adding remote ${NEW_REMOTE}..."
  gh repo create "${GITHUB_USER}/${REPO_NAME}" --public --source=. --remote="$NEW_REMOTE" --description "AI Engineer portfolio site"
fi

# Commit resume-aligned content if needed.
if ! git diff --quiet || ! git diff --cached --quiet; then
  git add -A
  git commit -m "Align portfolio with AI Engineer resume content."
fi

# Use main for Vercel production deploys.
git checkout -B main
git push -u "$NEW_REMOTE" main --force-with-lease

echo ""
echo "Done. Repository: https://github.com/${GITHUB_USER}/${REPO_NAME}"
echo ""
echo "Separate Vercel deployment:"
echo "  1. vercel login   (if needed)"
echo "  2. cd \"$ROOT\" && vercel"
echo "  3. Import ${GITHUB_USER}/${REPO_NAME} in the Vercel dashboard (new project, not my-portfolio)."
echo ""
echo "Old site stays on: https://github.com/nikhila-mateti/portfolio (remote: ${LEGACY_REMOTE})"
