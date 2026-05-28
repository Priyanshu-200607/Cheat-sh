import { Category } from './types';

export const gitData: Category = {
  id: 'git',
  title: 'Git & GitHub',
  icon: '🐙',
  color: '#f05032',
  gradient: 'linear-gradient(135deg, #f05032, #24292e)',
  description: 'Git version control basics, branching, merging, undoing changes, and GitHub CLI workflow',
  sections: [
    {
      id: 'basics',
      title: 'Setup & Basics',
      snippets: [
        {
          code: `# Configure user info
git config --global user.name "John Doe"
git config --global user.email "john@example.com"

# Check configuration
git config --list
git config user.name`,
          description: 'Configure Git identity globally',
          language: 'bash'
        },
        {
          code: `# Initialize a new local repository
git init

# Clone a remote repository
git clone <url>
git clone <url> <directory_name>`,
          description: 'Initialize or clone a repository',
          language: 'bash'
        },
        {
          code: `# Check status of files
git status

# View status in short-format
git status -s`,
          description: 'Check status of files in the working directory',
          language: 'bash'
        },
        {
          code: `# Add files to the staging area
git add <filename>
git add .                # Add all files
git add *.js             # Add specific file pattern

# Interactive staging
git add -p               # Review and stage hunk-by-hunk`,
          description: 'Stage changes for the next commit',
          language: 'bash'
        },
        {
          code: `# Commit staged changes
git commit -m "Commit message"

# Commit all tracked files (skip staging)
git commit -am "Commit message"

# Amend the last commit (modify message or add staged files)
git commit --amend -m "New message"`,
          description: 'Record changes to repository history',
          language: 'bash'
        },
        {
          code: `# View commit history
git log

# Single line log with graph
git log --oneline --graph --all

# View changes in detail for a commit
git show <commit_hash>`,
          description: 'View commit history and log details',
          language: 'bash'
        },
        {
          code: `# Compare working directory with staging area
git diff

# Compare staging area with last commit
git diff --staged

# Compare two branches
git diff <branch_a>..<branch_b>`,
          description: 'Compare changes between different states',
          language: 'bash'
        }
      ]
    },
    {
      id: 'branching',
      title: 'Branching & Merging',
      snippets: [
        {
          code: `# List local branches
git branch

# List all branches (local & remote)
git branch -a

# Create a new branch
git branch <branch_name>

# Delete a branch
git branch -d <branch_name>  # Safe delete (checks for merges)
git branch -D <branch_name>  # Force delete`,
          description: 'Manage branches in the local repository',
          language: 'bash'
        },
        {
          code: `# Switch to a branch (modern)
git switch <branch_name>

# Create and switch to a branch (modern)
git switch -c <new_branch>

# Switch/checkout (older syntax)
git checkout <branch_name>
git checkout -b <new_branch>`,
          description: 'Switch between branches',
          language: 'bash'
        },
        {
          code: `# Merge branch into current branch
git merge <branch_name>

# Abort a merge in case of conflicts
git merge --abort`,
          description: 'Combine changes from another branch',
          language: 'bash'
        },
        {
          code: `# Rebase current branch onto another branch
git rebase <target_branch>

# Interactive rebase (squash, edit, drop commits)
git rebase -i HEAD~<n>

# Continue / Abort rebase
git rebase --continue
git rebase --abort`,
          description: 'Reapply commits on top of another base tip',
          language: 'bash'
        },
        {
          code: `# Apply a specific commit from another branch
git cherry-pick <commit_hash>`,
          description: 'Apply the changes introduced by an existing commit',
          language: 'bash'
        },
        {
          code: `# Temporarily stash current changes
git stash

# Stash with a descriptive name
git stash save "Work in progress"

# List stashed changes
git stash list

# Apply and remove the latest stash
git stash pop

# Apply stash without removing it
git stash apply stash@{0}

# Drop a specific stash
git stash drop stash@{0}`,
          description: 'Temporarily shelve changes to work on a clean directory',
          language: 'bash'
        }
      ]
    },
    {
      id: 'undoing',
      title: 'Undoing Changes',
      snippets: [
        {
          code: `# Discard changes in a file (working directory)
git checkout -- <file_name>
git restore <file_name>      # Modern equivalent

# Unstage a file (keep local modifications)
git reset HEAD <file_name>
git restore --staged <file_name> # Modern equivalent`,
          description: 'Discard or unstage local changes',
          language: 'bash'
        },
        {
          code: `# Reset staging area (Soft: keep files modified)
git reset --soft HEAD~1

# Reset staging area and working directory (Mixed: default)
git reset --mixed HEAD~1

# Reset EVERYTHING (Hard: lose all uncommitted changes!)
git reset --hard HEAD~1

# Reset to match a specific remote branch
git reset --hard origin/main`,
          description: 'Undo commits by moving the HEAD branch pointer',
          language: 'bash'
        },
        {
          code: `# Revert a commit by creating a new commit that undoes the changes
git revert <commit_hash>

# Revert without auto-committing
git revert -n <commit_hash>`,
          description: 'Safe way to undo public commits (retains history)',
          language: 'bash'
        },
        {
          code: `# View history of HEAD movements (recovery of lost commits)
git reflog`,
          description: 'View reference log to recover lost commits or branches',
          language: 'bash'
        }
      ]
    },
    {
      id: 'remotes',
      title: 'Remotes & Collaboration',
      snippets: [
        {
          code: `# Add a remote repository link
git remote add origin <url>

# List configured remotes
git remote -v

# Rename a remote
git remote rename <old_name> <new_name>

# Remove a remote
git remote remove <name>`,
          description: 'Manage connections to remote repositories',
          language: 'bash'
        },
        {
          code: `# Download objects and refs from remote (does not merge)
git fetch origin

# Fetch and prune deleted remote branches
git fetch -p`,
          description: 'Get latest updates from remote without merging',
          language: 'bash'
        },
        {
          code: `# Fetch and merge changes from remote
git pull origin <branch_name>

# Pull using rebase instead of merge (cleaner history)
git pull --rebase origin <branch_name>`,
          description: 'Fetch and integrate remote changes',
          language: 'bash'
        },
        {
          code: `# Upload local commits to remote
git push origin <branch_name>

# Push and track branch (set upstream)
git push -u origin <branch_name>

# Force push (WARNING: overwrites remote history!)
git push --force origin <branch_name>
git push --force-with-lease origin <branch_name> # Safer force push`,
          description: 'Upload local repository content to a remote',
          language: 'bash'
        }
      ]
    },
    {
      id: 'github-cli',
      title: 'GitHub CLI (gh)',
      snippets: [
        {
          code: `# Authenticate with GitHub account
gh auth login

# Check authentication status
gh auth status

# Log out
gh auth logout`,
          description: 'Authenticate GitHub CLI in terminal',
          language: 'bash'
        },
        {
          code: `# Create a new GitHub repository
gh repo create <repo_name> --public --clone

# Clone a GitHub repository
gh repo clone <owner>/<repo>`,
          description: 'Manage repositories via GitHub CLI',
          language: 'bash'
        },
        {
          code: `# Create a pull request interactively
gh pr create --title "Feature implementation" --body "Details..."

# List open pull requests
gh pr list

# Check out a pull request locally
gh pr checkout <pr_number>

# View PR details
gh pr view <pr_number>

# Merge a pull request
gh pr merge <pr_number> --merge`,
          description: 'Pull request workflow with GitHub CLI',
          language: 'bash'
        },
        {
          code: `# List active issues
gh issue list

# Create a new issue
gh issue create --title "Bug description" --body "Steps to reproduce..."

# View a specific issue
gh issue view <issue_number>`,
          description: 'Manage GitHub Issues from terminal',
          language: 'bash'
        }
      ]
    }
  ]
};
