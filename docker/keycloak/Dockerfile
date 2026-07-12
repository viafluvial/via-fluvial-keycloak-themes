FROM quay.io/keycloak/keycloak:26.7.0

USER root

# Theme + optional realm import files
COPY theme/vfa /opt/keycloak/themes/vfa
COPY realms /opt/keycloak/data/import

RUN chown -R keycloak:keycloak /opt/keycloak/themes/vfa /opt/keycloak/data/import

USER keycloak

# Keep default entrypoint/cmd from upstream image.
