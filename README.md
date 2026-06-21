# via-fluvial-keycloak-themes

Projeto enxuto para testar e publicar o tema `vfa-platform` do Keycloak.

## Objetivo

- testar localmente o layout do tema via Docker Compose
- gerar imagem de producao contendo apenas o tema custom
- usar chart Helm `vfa` (na pasta `helm/vfa`) quando necessario

## Estrutura principal

```text
.
├── .env.example
├── Makefile
├── compose/docker-compose.yml
├── docker/keycloak/
│   ├── Dockerfile
│   └── Dockerfile.theme
├── helm/vfa/
├── realms/vfa-platform-realm.json
└── theme/vfa-platform/
```

## Teste local do tema

Subir ambiente local (gera/atualiza `.env`, builda imagem local e sobe compose):

```bash
make up
```

Credenciais locais padrao:

- usuario admin: `admin`
- senha admin: `admin123`
- senha do banco: `keycloak123`

URL de login VFA (realm `vfa`):

```text
http://localhost:18080/realms/vfa/protocol/openid-connect/auth?client_id=account&redirect_uri=http%3A%2F%2Flocalhost%3A18080%2Frealms%2Fvfa%2Faccount%2F&response_type=code&scope=openid
```

Outros comandos locais:

```bash
make logs
make down
```

## Imagem de producao (somente tema)

Build:

```bash
make docker-build-theme
```

Push:

```bash
make docker-push-theme
```

Tag usada por padrao:

- `docker.io/viafluvial/via-fluvial-keycloak-themes:26.0.0-theme-vfa`

## Helm

O nome do chart e `vfa`:

- pasta: `helm/vfa`
- chart: `name: vfa`

## Licenca

Uso interno VFA.
