FROM postgres

# Variables needed at runtime to configure postgres and run the initdb scripts
ENV POSTGRES_DB ''
ENV POSTGRES_USER ''
ENV POSTGRES_PASSWORD ''
ENV POSTGRES_DB ''

# Copy in the load-extensions script
COPY load-extensions.sh /docker-entrypoint-initdb.d/
