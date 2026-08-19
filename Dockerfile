FROM ruby:3.3

RUN apt-get update \
    && apt-get install -y git build-essential nodejs

WORKDIR /site

COPY Gemfile Gemfile.lock ./
RUN bundle install

EXPOSE 4000 35729

CMD ["bash", "-lc", "JEKYLL_ENV=production bundle exec jekyll serve --host 0.0.0.0 --port 4000 --livereload --force_polling --destination /tmp/site --disable-disk-cache"]
