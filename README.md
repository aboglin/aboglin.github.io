# My Jekyll Site

This is a Jekyll site set up for deployment on GitHub Pages.

## Setup

1. Install dependencies:
   bundle install

2. Serve the site locally:
   bundle exec jekyll serve

3. Push the repository to GitHub. GitHub Pages will build and deploy your site automatically.

## Ruby Version Compatibility

This project is configured to run with Ruby 3.1.6 for compatibility with the required version of the github-pages gem (~> 228). If your system’s default Ruby is 3.3.6 (or another version) you may encounter issues. To ensure you’re using the correct Ruby version:

• If you are using rbenv, run:
  rbenv local 3.1.6

• Make sure your system has Ruby 3.1.6 installed. (If the installation via rbenv times out, consider updating your ruby-build plugin with:
  brew update && brew upgrade ruby-build
or check your network connection.)

• Then install bundler and your gems:
  gem install bundler
  bundle install

Following these steps should allow you to develop and deploy your Jekyll site using the supported Ruby 3.1.6 version.
