.DEFAULT_GOAL := help

.PHONY: help install dev build preview typecheck deploy clean

help: ## Show available commands
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	npm install

dev: ## Start the local dev server (hot reload)
	npm run dev

build: ## Type-check and build for production → dist/
	npm run build

preview: ## Serve the production build locally
	npm run preview

typecheck: ## Type-check without emitting a build
	npx tsc -b

deploy: ## Trigger the GitHub Actions Pages deploy (needs gh CLI)
	gh workflow run deploy.yml && gh run watch $$(sleep 3; gh run list --workflow deploy.yml --limit 1 --json databaseId --jq '.[0].databaseId')

clean: ## Remove build output and dependencies
	rm -rf dist node_modules
