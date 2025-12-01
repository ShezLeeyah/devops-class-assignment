# DevOps Class Assignment: Docker Build with GitHub Actions

## Objective
Build a containerized Node.js application using GitHub Actions with reusable workflows and secrets management.

## Requirements

### 1.Application Setup
- Fork this repository
- The repository contains a simple Node.js application
- Review the application code and Dockerfile

### 2.GitHub Secrets Configuration
Create the following secrets in your repository settings (Settings > Secrets and variables > Actions), Just put dummy values there:
- `DB_HOST` - Database host
- `DB_USER` - Database username
- `DB_PASSWORD` - Database password
- `API_KEY` - Application API key

### 3.Workflow Structure
You must create TWO workflow files:

#### File 1: `.github/actions/build.yml` (Reusable Workflow)
This workflow will:
- Build the Docker image using the provided Dockerfile
- Create a `.env` file from GitHub secrets
- Run the container with the environment variables

#### File 2: `.github/workflows/main.yml` (Caller Workflow)
This workflow will:
- Trigger on push to main branch
- Call the reusable `build.yml` workflow
- Pass necessary secrets to the reusable workflow

### 4.Environment File Requirements
The `.env` file must be created dynamically in the workflow and contain:
```
DB_HOST=<value-from-secret>
DB_USER=<value-from-secret>
DB_PASSWORD=<value-from-secret>
API_KEY=<value-from-secret>
```

## Deliverables
1.Both workflow files properly configured
2.Successful workflow run showing:
   - Docker image built successfully
   - Environment file created
   - Container running with correct environment variables
3.Screenshot of successful workflow execution
4.Brief documentation explaining your workflow structure

## Grading Criteria
- Correct reusable workflow implementation (30%)
- Proper secrets management (25%)
- Dynamic `.env` file creation (25%)
- Successful Docker build and run (15%)
- Documentation quality (5%)

## Submission
Submit a link to your forked repository with completed workflows and a successful run.

## Resources
- [GitHub Actions Reusable Workflows](https://docs.github.com/en/actions/using-workflows/reusing-workflows)
- [GitHub Actions Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Docker Build Actions](https://github.com/docker/build-push-action)

## Deadline
[This Week]