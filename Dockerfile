FROM php:8.3-fpm

# Install system packages and PHP extensions
RUN apt-get update && apt-get install -y \
    unzip \
    git \
    curl \
    libsqlite3-dev \
    && docker-php-ext-install pdo pdo_mysql pdo_sqlite \
    && apt-get clean

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Add non-root user
RUN adduser --disabled-password --gecos '' appuser

# Set working directory
WORKDIR /var/www/html

# Make sure Git and Composer are happy when running inside mounted volume
RUN git config --global --add safe.directory /var/www/html

# Switch to non-root user
USER appuser

# Default CMD (overridable in podman)
CMD ["php-fpm"]
