# My Jekyll Site

This is a Jekyll site set up for deployment on GitHub Pages.

## Setup

1. Install dependencies:
   bundle install

2. Serve the site locally:
   bundle exec jekyll serve

3. Push the repository to GitHub. GitHub Pages will build and deploy your site automatically.

## Ruby Version Compatibility

This project is configured to run with Ruby 3.3.6:

• If you are using rbenv, run:
  rbenv install

• Make sure your system has Ruby 3.3.6 installed. (If the installation via rbenv times out, consider updating your ruby-build plugin with:
  brew update && brew upgrade ruby-build
or check your network connection.)

• Then install bundler and your gems:
  gem install bundler
  bundle install

Following these steps should allow you to develop and deploy your Jekyll site using the supported Ruby version.

## Notes

Next steps:

* Add contact information such as email, twitter, etc.
* Styling to match old website
* Scrape old website for content
