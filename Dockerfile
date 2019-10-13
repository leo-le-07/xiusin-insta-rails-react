ARG RUBY_VERSION
FROM ruby:$RUBY_VERSION

ARG NODE_MAJOR
ARG BUNDLER_VERSION
ARG YARN_VERSION

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs ghostscript

RUN mkdir -p /app
RUN mkdir -p /usr/local/nvm

WORKDIR /app

RUN curl -sL https://deb.nodesource.com/setup_$NODE_MAJOR.x | bash -

RUN apt-get install -y nodejs

RUN node -v
RUN npm -v

# Copy the Gemfile as well as the Gemfile.lock and install
# the RubyGems. This is a separate step so the dependencies
# will be cached unless changes to one of those two files
# are made.
COPY Gemfile Gemfile.lock package.json yarn.lock ./
RUN gem install bundler -v $BUNDLER_VERSION
RUN bundle install --verbose --jobs 20 --retry 5

RUN npm install -g yarn@$YARN_VERSION
RUN yarn install --check-files

# Copy the main application.
COPY . ./
