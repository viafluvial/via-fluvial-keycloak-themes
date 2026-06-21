SHELL := /bin/bash

REGISTRY ?= docker.io
DOCKERHUB_REPOSITORY ?= viafluvial/via-fluvial-keycloak-themes
THEME_IMAGE_TAG ?= 26.0.0-theme-vfa
THEME_IMAGE ?= $(REGISTRY)/$(DOCKERHUB_REPOSITORY):$(THEME_IMAGE_TAG)

KEYCLOAK_ADMIN_USERNAME ?= admin
KEYCLOAK_ADMIN_PASSWORD ?= admin123
KEYCLOAK_DB_PASSWORD ?= keycloak123
LOCAL_IMAGE ?= via-fluvial-keycloak-themes

.PHONY: help
help:
	@echo "Projeto enxuto para testar tema Keycloak:"
	@echo "  make up                 - Sobe local com Docker Compose (build + .env + up)"
	@echo "  make down               - Derruba stack local"
	@echo "  make logs               - Logs do Keycloak"
	@echo "  make env-local          - Gera/atualiza .env local"
	@echo "  make docker-build-theme - Build da imagem de producao com apenas o tema"
	@echo "  make docker-push-theme  - Push da imagem de producao com apenas o tema"

.PHONY: env-local
env-local:
	@test -f .env || cp .env.example .env
	@sed -i 's|^KC_BOOTSTRAP_ADMIN_USERNAME=.*|KC_BOOTSTRAP_ADMIN_USERNAME=$(KEYCLOAK_ADMIN_USERNAME)|' .env
	@sed -i 's|^KC_BOOTSTRAP_ADMIN_PASSWORD=.*|KC_BOOTSTRAP_ADMIN_PASSWORD=$(KEYCLOAK_ADMIN_PASSWORD)|' .env
	@sed -i 's|^KC_DB_PASSWORD=.*|KC_DB_PASSWORD=$(KEYCLOAK_DB_PASSWORD)|' .env
	@echo ".env atualizado"

.PHONY: build-local
build-local:
	docker build \
		-f docker/keycloak/Dockerfile \
		-t $(LOCAL_IMAGE):local \
		.

.PHONY: up
up: env-local build-local
	KEYCLOAK_IMAGE=$(LOCAL_IMAGE) KEYCLOAK_VERSION=local docker compose -f compose/docker-compose.yml up -d

.PHONY: down
down:
	docker compose -f compose/docker-compose.yml down

.PHONY: logs
logs:
	docker compose -f compose/docker-compose.yml logs -f keycloak

.PHONY: docker-build-theme
docker-build-theme:
	docker build \
		-f docker/keycloak/Dockerfile.theme \
		-t $(THEME_IMAGE) \
		.

.PHONY: docker-push-theme
docker-push-theme: docker-build-theme
	docker push $(THEME_IMAGE)
