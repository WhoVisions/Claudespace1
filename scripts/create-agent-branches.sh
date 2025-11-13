#!/bin/bash

# Create Agent Branches Script
# This script creates all the feature branches for the 8 specialized agents

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo "╔════════════════════════════════════════════════╗"
echo "║   MULTI-AGENT BRANCH CREATION SCRIPT           ║"
echo "╚════════════════════════════════════════════════╝"
echo ""

# Agent branches configuration
declare -a BRANCHES=(
    "feature/security-auth"
    "feature/seo-optimization"
    "feature/visual-design"
    "feature/core-development"
    "feature/content-copy"
    "feature/components-deps"
    "feature/testing-qa"
    "docs/logging-documentation"
)

declare -a AGENTS=(
    "Agent 1: Cybersecurity Specialist"
    "Agent 2: SEO Optimization Expert"
    "Agent 3: Visual Styling Designer"
    "Agent 4: Lead Full-Stack Developer"
    "Agent 5: Master Copywriter"
    "Agent 6: Component & Dependency Manager"
    "Agent 7: Error Checker & Build Validator"
    "Agent 8: Logger & Documentation Specialist"
)

# Ensure we're on main branch
echo -e "${BLUE}Ensuring we're on main branch...${NC}"
git checkout main 2>/dev/null || echo "Already on main or main doesn't exist"
echo ""

# Create branches
echo -e "${BLUE}Creating agent branches...${NC}"
echo ""

for i in "${!BRANCHES[@]}"; do
    branch="${BRANCHES[$i]}"
    agent="${AGENTS[$i]}"

    echo -e "${YELLOW}Creating: $branch${NC}"
    echo "  Agent: $agent"

    # Check if branch exists
    if git rev-parse --verify "$branch" > /dev/null 2>&1; then
        echo -e "  ${GREEN}✓ Branch already exists${NC}"
    else
        # Create branch from main
        git checkout -b "$branch" main

        # Create a README for this agent
        mkdir -p "docs/agent-guides"
        cat > "docs/agent-guides/$(echo $branch | sed 's/\//-/g')-README.md" << EOF
# $(echo ${agent} | cut -d: -f2)

Branch: \`$branch\`

## Responsibilities

(To be filled in by the agent)

## Current Tasks

- [ ] Initial setup
- [ ] Review agent responsibilities
- [ ] Begin assigned work

## Notes

This branch is dedicated to ${agent}.
EOF

        git add "docs/agent-guides/$(echo $branch | sed 's/\//-/g')-README.md"
        git commit -m "chore: initialize $branch for ${agent}"

        echo -e "  ${GREEN}✓ Branch created and initialized${NC}"
    fi

    echo ""
done

# Return to main
echo -e "${BLUE}Returning to main branch...${NC}"
git checkout main

echo ""
echo "╔════════════════════════════════════════════════╗"
echo "║   ✓ ALL AGENT BRANCHES CREATED                 ║"
echo "╚════════════════════════════════════════════════╝"
echo ""
echo "To push all branches to remote, run:"
echo "  git push --all origin"
echo ""
