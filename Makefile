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

deploy: ## Build and push dist/ to the gh-pages branch
	npm run deploy

clean: ## Remove build output and dependencies
	rm -rf dist node_modules
