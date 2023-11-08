#!/bin/sh

set -e
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" "$POSTGRES_DB" <<EOF
CREATE EXTENSION pg_trgm;
SELECT * FROM pg_extension;
EOF
